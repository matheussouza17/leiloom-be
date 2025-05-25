import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, MinLength, IsOptional, IsString} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role, AccountStatus } from '@prisma/client';


export class AddClientUserByAdminDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'joao@empresa.com' })
  @IsEmail()
  email: string;

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