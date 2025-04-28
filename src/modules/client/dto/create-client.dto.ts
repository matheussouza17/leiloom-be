import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    example: 'Empresa Exemplo LTDA',
    description: 'Nome completo da empresa',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Rua Exemplo, 123 - Bairro',
    description: 'Endereço completo da empresa',
  })
  @IsNotEmpty()
  address: string;
}
