import { IsEmail, IsEnum, IsString, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Role, AccountStatus } from '@prisma/client';

export class UpdateClientUserDto {
  @ApiPropertyOptional({ example: 'Novo Nome' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'novo@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'novaSenha123' })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({ example: '11988887777' })
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ example: 'ClientOperator', enum: Role })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiPropertyOptional({ example: 'APPROVED', enum: AccountStatus })
  @IsOptional()
  @IsEnum(AccountStatus)
  status?: AccountStatus;

  @ApiPropertyOptional({ example: 'abc123' })
  @IsOptional()
  @IsString()
  confirmationCode?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isConfirmed?: boolean;
  }
