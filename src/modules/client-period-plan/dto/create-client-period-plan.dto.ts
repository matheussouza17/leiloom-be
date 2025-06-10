import { IsNotEmpty, IsUUID, IsDateString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientPeriodPlanDto {
  @ApiProperty({ example: 'client-plan-id-uuid', description: 'ID da associação Cliente↔Plano' })
  @IsUUID()
  @IsNotEmpty()
  clientPlanId: string;

  @ApiProperty({ example: '2025-06-09T12:00:00Z', description: 'Data de início (ISO 8601)' })
  @IsDateString()
  @IsNotEmpty()
  startsAt: Date;

  @ApiProperty({ example: '2025-07-09T12:00:00Z', description: 'Data de expiração (ISO 8601)' })
  @IsDateString()
  @IsNotEmpty()
  expiresAt: Date;

  @ApiPropertyOptional({ example: false, description: 'Se true, período é trial' })
  @IsOptional()
  @IsBoolean()
  isTrial?: boolean;

  @ApiPropertyOptional({ example: true, description: 'Se true, define este período como o atual' })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiPropertyOptional({ example: false, description: 'Se true, indica que este período já foi confirmado' })
  @IsOptional()
  @IsBoolean()
  wasConfirmed?: boolean;
}
