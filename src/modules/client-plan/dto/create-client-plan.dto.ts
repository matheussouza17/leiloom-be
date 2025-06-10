import { IsNotEmpty, IsUUID, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientPlanDto {
  @ApiProperty({ example: 'client-id-uuid', description: 'ID do Cliente associado' })
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty({ example: 'plan-id-uuid', description: 'ID do Plano associado' })
  @IsUUID()
  @IsNotEmpty()
  planId: string;
}