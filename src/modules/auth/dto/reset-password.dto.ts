import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
    @ApiProperty({ example: 'abc123' })
    @IsNotEmpty()
    token: string;
  
    @ApiProperty({ example: 'codigo123' })
    @IsNotEmpty()
    code: string;
  
    @ApiProperty({ example: 'novasenha123' })
    @MinLength(6)
    newPassword: string;
  }
  