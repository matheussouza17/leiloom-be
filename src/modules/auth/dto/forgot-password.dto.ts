import { IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LoginContext } from '@prisma/client';

export class ForgotPasswordDto {
  @ApiProperty({ example: 'joao@empresa.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'CLIENT', enum: LoginContext })
  @IsEnum(LoginContext)
  context: LoginContext;
}
