import { IsNotEmpty, IsString, IsOptional, IsNumberString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AccountStatus } from '@prisma/client';

export class CreateClientDto {
  @ApiProperty({ example: 'Empresa XPTO Ltda' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '12345678900' }) // só números
  @IsNotEmpty()
  @IsNumberString()
  cpfCnpj: string;

  @ApiProperty({ example: '74343340', required: false })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiProperty({ example: 'Av. T-63', required: false })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiProperty({ example: '1234', required: false })
  @IsOptional()
  @IsString()
  number?: string;

  @ApiProperty({ example: 'Sala 05', required: false })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiProperty({ example: 'Setor Bueno', required: false })
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiProperty({ example: 'Goiânia', required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ example: 'GO', required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ example: 'Brasil', required: false })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({ example: 'PENDING', enum: AccountStatus, required: false })
  @IsOptional()
  @IsEnum(AccountStatus)
  status?: AccountStatus;

  @ApiProperty({ example: 'abc123', required: false })
  @IsOptional()
  @IsString()
  confirmationCode?: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  isConfirmed?: boolean;
}
