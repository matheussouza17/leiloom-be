import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AcceptTermsDto {
  @ApiProperty({
    example: 'client-user-id-uuid',
    description: 'ID do usuário cliente que está aceitando o termo',
  })
  @IsNotEmpty()
  clientUserId: string;

  @ApiProperty({
    example: 'terms-of-use-id-uuid',
    description: 'ID do termo de uso que está sendo aceito',
  })
  @IsNotEmpty()
  termsId: string;
}
