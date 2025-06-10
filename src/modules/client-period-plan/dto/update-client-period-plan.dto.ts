import { IsOptional, IsDateString, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientPeriodPlanDto {
  @ApiPropertyOptional({ example: '2025-06-10T00:00:00Z', description: 'Nova data de início (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  startsAt?: Date;

  @ApiPropertyOptional({ example: '2025-07-10T00:00:00Z', description: 'Nova data de expiração (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  expiresAt?: Date;

  @ApiPropertyOptional({ example: false, description: 'Atualiza flag de trial' })
  @IsOptional()
  @IsBoolean()
  isTrial?: boolean;

  @ApiPropertyOptional({ example: true, description: 'Atualiza flag de período atual' })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiPropertyOptional({ example: true, description: 'Atualiza flag de confirmação' })
  @IsOptional()
  @IsBoolean()
  wasConfirmed?: boolean;
}
