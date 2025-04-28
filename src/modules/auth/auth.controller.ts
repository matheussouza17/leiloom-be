import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginContext } from '@prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-backoffice')
  @ApiOperation({ summary: 'Login para BackOffice' })
  async loginBackoffice(@Request() req, @Body() dto: LoginDto) {
    return this.authService.validateUser(dto.email, dto.password, LoginContext.BACKOFFICE, req);
  }

  @Post('login-client')
  @ApiOperation({ summary: 'Login para Cliente' })
  async loginClient(@Request() req, @Body() dto: LoginDto) {
    return this.authService.validateUser(dto.email, dto.password, LoginContext.CLIENT, req);
  }
}
