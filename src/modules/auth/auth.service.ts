import { Injectable, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginContext, LoginResult } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RequestType } from '@prisma/client';
import * as crypto from 'crypto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {} 

  async validateUser(
    login: string,
    password: string,
    context: LoginContext,
    req: any,
    extra?: { cnpj?: string; isAdmin?: boolean }
  ) {
    let user: any
  
    if (context === LoginContext.BACKOFFICE) {
      user = await this.prisma.user.findUnique({ where: { email: login } })
  
      if (!user) {
        await this.registerLogin(null, context, LoginResult.FAILURE, req)
        throw new UnauthorizedException('Usuário não encontrado.')
      }
    }
  
    if (context === LoginContext.CLIENT) {
      const { cnpj, isAdmin } = extra || {}
      const isNumeric = /^\d+$/.test(login)
      const loginAsBigInt = isNumeric ? BigInt(login) : undefined
  
      if (cnpj) {
        // Login com vínculo a empresa
        const clientCnpj = BigInt(cnpj)
  
        if (isAdmin) {
          user = await this.prisma.clientUser.findFirst({
            where: {
              cpfCnpj: loginAsBigInt,
              client: { cpfCnpj: clientCnpj },
            },
            include: { client: true },
          })
        } else {
          user = await this.prisma.clientUser.findFirst({
            where: {
              client: { cpfCnpj: clientCnpj },
              OR: [{ email: login }, { cpfCnpj: loginAsBigInt }],
            },
            include: { client: true },
          })
        }
      } else {
        // Login sem empresa (PF comum)
        user = await this.prisma.clientUser.findFirst({
          where: {
            OR: [{ email: login }, { cpfCnpj: loginAsBigInt }],
          },
        })
      }
  
      if (!user) {
        await this.registerLogin(null, context, LoginResult.FAILURE, req)
        throw new UnauthorizedException('Usuário não encontrado.')
      }
  
      if (!user.isConfirmed) {
        throw new UnauthorizedException('Usuário ainda não confirmou o e-mail.')
      }
  
      if (user.status !== 'APPROVED') {
        throw new UnauthorizedException('Conta ainda não aprovada.')
      }
    }
  
    // Valida senha
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      await this.registerLogin(user.id, context, LoginResult.FAILURE, req)
      throw new UnauthorizedException('Credenciais inválidas.')
    }
  

    await this.registerLogin(user.id, context, LoginResult.SUCCESS, req)
  
    const payload: any = {
      sub: user.id,
      email: user.email,
      role: user.role,
      context,
      ...(context === LoginContext.CLIENT && { clientId: user.clientId }),
    };
    
  
    if (context === LoginContext.CLIENT) {
      payload.clientId = user.clientId
    }
  
    return {
      access_token: this.jwtService.sign(payload),
    }
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
      await this.mailService.sendMail(
        dto.email,
        'Redefinição de senha - Radar Leilão',
        `
          <p>Você solicitou a redefinição de senha.</p>
          <p><strong>Código:</strong> ${code}</p>
          <p><strong>Acesse a aplicação no seguinte link:</strong> ${process.env.URL_FRONT+'/reset-password?token='+token}</p>
        `
      );
      
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
      
  
      await this.mailService.sendMail(
        dto.email,
        'Redefinição de senha - Radar Leilão',
        `
          <p>Você solicitou a redefinição de senha.</p>
          <p><strong>Código:</strong> ${code}</p>
          <p><strong>Acesse a aplicação no seguinte link:</strong> ${process.env.URL_FRONT+'/reset-password?token='+token}</p>
        `
      );
      
      return { message: 'Código de redefinição enviado.' };
    }
  }
  
   async resetPassword(dto: ResetPasswordDto) {
    const userRequest = await this.prisma.userRequest.findMany({
      where: {
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
    const latestUser = userRequest.find(r => r.generatedCode === dto.code && r.generatedToken === dto.token);

    if (latestUser) {
      const user = await this.prisma.user.findUnique({ where: { id: latestUser.userId } });
      if (!user) throw new UnauthorizedException('Usuário não encontrado.');

      const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);
      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: newPasswordHash },
      });

      return { message: 'Senha redefinida com sucesso.' };
    }

    const clientRequest = await this.prisma.clientRequest.findMany({
      where: {
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
    const latestClient = clientRequest.find(r => r.generatedCode === dto.code && r.generatedToken === dto.token);

    if (!latestClient) throw new UnauthorizedException('Código ou token inválidos ou expirados.');

    const clientUser = await this.prisma.clientUser.findUnique({ where: { id: latestClient.clientUserId } });
    if (!clientUser) throw new UnauthorizedException('Usuário cliente não encontrado.');

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
  
    await this.mailService.sendMail(
      user.email,
      'Confirmação de troca de senha - Radar Leilão',
      `
        <p>Seu código para confirmação de troca de senha é:</p>
        <h3>${code}</h3>
      `
    );
    
    
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
    if (!token) {
      throw new UnauthorizedException('Token inválido ou expirado.');
    }
  
    const userRequest = await this.prisma.userRequest.findFirst({
      where: {
        generatedToken: token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
  
    if (userRequest) return { message: 'Token válido.' };
  
    const clientRequest = await this.prisma.clientRequest.findFirst({
      where: {
        generatedToken: token,
        requestType: RequestType.RequestPassword,
        expires: { gt: new Date() },
      },
      orderBy: { createdOn: 'desc' },
    });
  
    if (clientRequest) return { message: 'Token válido.' };
  
    throw new UnauthorizedException('Token inválido ou expirado.');
  }
  

  async verifyEmailCode(email: string, code: string) {
    const user = await this.prisma.clientUser.findUnique({
      where: { email },
    });
  
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
  
    if (user.isConfirmed) {
      throw new BadRequestException('Usuário já confirmado');
    }
  
    if (user.confirmationCode !== code) {
      throw new BadRequestException('Código inválido');
    }
  
    const updated = await this.prisma.clientUser.update({
      where: { email },
      data: {
        isConfirmed: true,
        confirmationCode: null,
        status: 'APPROVED',
      },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
        isConfirmed: true,
        clientId: true,
      },
    });

    await this.prisma.client.update({
      where: { id : updated.clientId },
      data: {
        status: 'APPROVED',
      },
      select: {
        id: true,
        name: true,
        status: true,
      },
    });
  
    return {
      message: 'Confirmação realizada com sucesso',
      user: updated,
    };
  }
  
  
}
