import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { Role } from '@prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'Novo Nome',
  })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'novo@email.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    example: 'novasenha123',
  })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({
    example: 'BOOperator',
    enum: Role,
  })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
