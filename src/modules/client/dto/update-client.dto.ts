import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientDto {
  @ApiPropertyOptional({
    example: 'Empresa Exemplo Atualizada',
  })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'Rua Nova, 456 - Centro',
  })
  @IsOptional()
  address?: string;
}
