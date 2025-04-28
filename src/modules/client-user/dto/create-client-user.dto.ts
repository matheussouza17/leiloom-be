import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateClientUserDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'joao@empresa.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456' })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: '11999999999' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '12345678900', description: 'Apenas números (CPF ou CNPJ)' })
  @IsNumberString()
  cpfCnpj: string;

  @ApiProperty({ example: 'ClientAdmin', enum: Role })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ example: 'client-id-uuid', description: 'ID do Cliente associado' })
  @IsNotEmpty()
  clientId: string;
}
