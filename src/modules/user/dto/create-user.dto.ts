import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Matheus Silva',
    description: 'Nome completo do usuário',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'matheus@email.com',
    description: 'E-mail de login do usuário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Senha de acesso, mínimo 6 caracteres',
  })
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'BOAdmin',
    enum: Role,
    description: 'Função do usuário (role)',
  })
  @IsEnum(Role)
  role: Role;
}
