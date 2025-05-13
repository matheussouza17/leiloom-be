import { IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadTermsDto {
  @ApiProperty({
    example: 'https://storage.googleapis.com/termo-v1.pdf',
    description: 'URL do arquivo PDF do termo de uso',
  })
  @IsNotEmpty()
  fileUrl: string;

  @ApiProperty({
    example: 'Termo de uso versão 1.0',
    description: 'Descrição do termo',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'user-id-uuid',
    description: 'ID do usuário (admin) que está subindo o termo',
  })
  @IsNotEmpty()
  uploadedById: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isCurrent: boolean;
}
