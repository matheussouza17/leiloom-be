import { Body, Controller, Post, Request, UseGuards, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginContext } from '@prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { VerifyEmailCodeDto } from './dto/verify-email-code.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-backoffice')
  @ApiOperation({ summary: 'Login para BackOffice' })
  async loginBackoffice(@Request() req, @Body() dto: LoginDto) {
    return this.authService.validateUser(dto.login, dto.password, LoginContext.BACKOFFICE, req);
  }

  @Post('login-client')
  @ApiOperation({ summary: 'Login para Cliente' })
  async loginClient(@Request() req, @Body() dto: LoginDto) {
    return this.authService.validateUser(
      dto.login,
      dto.password,
      LoginContext.CLIENT,
      req,
      {
        cnpj: dto.cnpj,
        isAdmin: dto.isAdmin,
      }
    );
  }


  @Post('forgot-password')
  @ApiOperation({ summary: 'Solicitar redefinição de senha' })
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Redefinir senha com código' })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password-request')
  @ApiOperation({ summary: 'Solicitar mudança de senha (gera código)' })
  async requestChangePassword(@Request() req) {
    return this.authService.requestChangePassword(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  @ApiOperation({ summary: 'Alterar senha informando código' })
  async changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(req.user, dto);
  }

  @Get('validate-reset-token')
  @ApiOperation({ summary: 'Validar token de reset de senha' })
  async validateResetToken(@Query('token') token: string) {
    return this.authService.validateResetToken(token);
  }

  @Post('verify-email-code')
  async verifyEmailCode(@Body() dto: VerifyEmailCodeDto) {
    return this.authService.verifyEmailCode(dto.email, dto.code);
  }
}