import { IsOptional, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientPlanDto {
  @ApiPropertyOptional({ example: true, description: 'Se true, define este plano como o ativo atual' })
  @IsOptional()
  @IsBoolean()
  current?: boolean;
}
