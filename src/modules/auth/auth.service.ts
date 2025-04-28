import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginContext, LoginResult } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RequestType } from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {} 

  async validateUser(email: string, password: string, context: LoginContext, req: any) {
    let user: any;

    if (context === LoginContext.BACKOFFICE) {
      user = await this.prisma.user.findUnique({ where: { email } });
    } else if (context === LoginContext.CLIENT) {
      user = await this.prisma.clientUser.findUnique({ where: { email } });
    }

    if (!user) {
      await this.registerLogin(null, context, LoginResult.FAILURE, req);
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      await this.registerLogin(user.id, context, LoginResult.FAILURE, req);
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    await this.registerLogin(user.id, context, LoginResult.SUCCESS, req);

    const payload: any = {
      sub: user.id,
      email: user.email,
      role: user.role,
      context,
    };

    if (context === LoginContext.CLIENT) {
      payload.clientId = user.clientId; // Adiciona o clientId para ClientUser
    }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async registerLogin(userId: string | null, context: LoginContext, result: LoginResult, req: any) {
    await this.prisma.loginHistory.create({
      data: {
        userId: userId ?? 'UNKNOWN',
        context,
        result,
        ipAddress: req.ip || null,
        userAgent: req.headers['user-agent'] || null,
      },
    });
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    if (dto.context === 'BACKOFFICE') {
      const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
  
      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado.');
      }
  
      const code = crypto.randomBytes(3).toString('hex');
      const token = crypto.randomBytes(32).toString('hex'); 
      const expires = new Date(Date.now() + 1000 * 60 * 30);
  
      await this.prisma.userRequest.create({
        data: {
          userId: user.id,
          requestType: RequestType.RequestPassword,
          generatedCode: code,
          generatedToken: token,
          expires,
        },
      });      
  
      console.log(`Código redefinição para ${dto.email}: ${code}`);
      console.log(`Token de validação para ${dto.email}: ${token}`);
      return { message: 'Código de redefinição enviado.' };
    } 
    
    else if (dto.context === 'CLIENT') {
      const clientUser = await this.prisma.clientUser.findUnique({ where: { email: dto.email } });
  
      if (!clientUser) {
        throw new UnauthorizedException('Usuário cliente não encontrado.');
      }
  
      const code = crypto.randomBytes(3).toString('hex');
      const token = crypto.randomBytes(32).toString('hex'); 
      const expires = new Date(Date.now() + 1000 * 60 * 30); // 30 minutos
  
      await this.prisma.clientRequest.create({
        data: {
          clientId: clientUser.clientId,
          clientUserId: clientUser.id,
          requestType: RequestType.RequestPassword,
          generatedCode: code,
          generatedToken: token,
          expires,
        },
      });
      
  
      console.log(`Código redefinição para ${dto.email}: ${code}`);
      console.log(`Token de validação para ${dto.email}: ${token}`);
      return { message: 'Código de redefinição enviado.' };
    }
  }
  
  async resetPassword(dto: ResetPasswordDto) {
    let request = await this.prisma.userRequest.findFirst({
      where: {
        generatedCode: dto.code,
        generatedToken: dto.token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
  
    if (request) {
      const user = await this.prisma.user.findUnique({ where: { id: request.userId } });
  
      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado.');
      }
  
      const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);
  
      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: newPasswordHash },
      });
  
      return { message: 'Senha redefinida com sucesso.' };
    }
  
    // Se não achou no UserRequest, tenta ClientRequest
    const clientRequest = await this.prisma.clientRequest.findFirst({
      where: {
        generatedCode: dto.code,
        generatedToken: dto.token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
  
    if (!clientRequest) {
      throw new UnauthorizedException('Código ou token inválidos ou expirados.');
    }
  
    const clientUser = await this.prisma.clientUser.findUnique({ where: { id: clientRequest.clientUserId } });
  
    if (!clientUser) {
      throw new UnauthorizedException('Usuário cliente não encontrado.');
    }
  
    const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);
  
    await this.prisma.clientUser.update({
      where: { id: clientUser.id },
      data: { password: newPasswordHash },
    });
  
    return { message: 'Senha redefinida com sucesso.' };
  }
  
  
  async requestChangePassword(user: any) {
    const code = crypto.randomBytes(3).toString('hex');
    const expires = new Date(Date.now() + 1000 * 60 * 30); // 30 minutos
  
    if (user.context === 'BACKOFFICE') {
      await this.prisma.userRequest.create({
        data: {
          userId: user.id,
          requestType: RequestType.InfoChanging,
          generatedCode: code,
          expires,
        },
      });
    } else if (user.context === 'CLIENT') {
      await this.prisma.clientRequest.create({
        data: {
          clientId: user.clientId,
          clientUserId: user.id,
          requestType: RequestType.InfoChanging,
          generatedCode: code,
          expires,
        },
      });
    }
  
    console.log(`Código para mudança de senha: ${code}`);
    return { message: 'Código de confirmação enviado.' };
  }
  async changePassword(user: any, dto: ChangePasswordDto) {
    if (user.context === 'BACKOFFICE') {
      const request = await this.prisma.userRequest.findFirst({
        where: {
          userId: user.id,
          generatedCode: dto.code,
          requestType: RequestType.InfoChanging,
          expires: { gt: new Date() },
        },
      });
  
      if (!request) {
        throw new UnauthorizedException('Código inválido ou expirado.');
      }
  
      const dbUser = await this.prisma.user.findUnique({ where: { id: user.id } });
  
      const passwordValid = await bcrypt.compare(dto.currentPassword, dbUser?.password??"");
  
      if (!passwordValid) {
        throw new UnauthorizedException('Senha atual incorreta.');
      }
  
      const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);
  
      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: newPasswordHash },
      });
  
      return { message: 'Senha alterada com sucesso.' };
    } 
    
    else if (user.context === 'CLIENT') {
      const request = await this.prisma.clientRequest.findFirst({
        where: {
          clientUserId: user.id,
          generatedCode: dto.code,
          requestType: RequestType.InfoChanging,
          expires: { gt: new Date() },
        },
      });
  
      if (!request) {
        throw new UnauthorizedException('Código inválido ou expirado.');
      }
  
      const clientUser = await this.prisma.clientUser.findUnique({ where: { id: user.id } });
  
      const passwordValid = await bcrypt.compare(dto.currentPassword, clientUser?.password??"");
  
      if (!passwordValid) {
        throw new UnauthorizedException('Senha atual incorreta.');
      }
  
      const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);
  
      await this.prisma.clientUser.update({
        where: { id: user.id },
        data: { password: newPasswordHash },
      });
  
      return { message: 'Senha alterada com sucesso.' };
    }
  }  
  async validateResetToken(token: string) {
    let request = await this.prisma.userRequest.findFirst({
      where: {
        generatedToken: token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
    });
    if (request) {
      return { message: 'Token válido.' };
    }
  
    let requestClient = await this.prisma.clientRequest.findFirst({
      where: {
        generatedToken: token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
    });
    if (requestClient) {
      return { message: 'Token válido.' };
    }
  
    if (!requestClient) {
      throw new UnauthorizedException('Token inválido ou expirado.');
    }
  
    
  }
  
}
