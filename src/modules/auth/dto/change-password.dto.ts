import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({ example: 'senhaatual123' })
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ example: 'novasenha456' })
  @MinLength(6)
  newPassword: string;

  @ApiProperty({ example: 'codigo123' })
  @IsNotEmpty()
  code: string;
}
