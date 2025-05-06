import { IsOptional, IsString, IsNumberString, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { AccountStatus } from '@prisma/client';

export class UpdateClientDto {
  @ApiPropertyOptional({ example: 'Empresa Exemplo Atualizada' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: '12345678900' })
  @IsOptional()
  @IsNumberString()
  cpfCnpj?: string;

  @ApiPropertyOptional({ example: '74343340' })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiPropertyOptional({ example: 'Av. T-63' })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiPropertyOptional({ example: '1234' })
  @IsOptional()
  @IsString()
  number?: string;

  @ApiPropertyOptional({ example: 'Sala 05' })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiPropertyOptional({ example: 'Setor Bueno' })
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiPropertyOptional({ example: 'Goiânia' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ example: 'GO' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ example: 'Brasil' })
  @IsOptional()
  @IsString()
  country?: string;

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
