import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginContext, LoginResult } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
}
