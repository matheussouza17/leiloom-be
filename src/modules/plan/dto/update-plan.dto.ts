import { IsString, IsOptional, IsBoolean, IsNumber, Min } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdatePlanDto {
    @ApiPropertyOptional({ example: 'Plano Atualizado' })
    @IsOptional()
    @IsString()
    name?: string

    @ApiPropertyOptional({ example: 'Descrição atualizada' })
    @IsOptional()
    @IsString()
    description?: string

    @ApiPropertyOptional({ example: 149.99 })
    @IsOptional()
    @IsNumber()
    price?: number

    @ApiPropertyOptional({ example: 15 })
    @IsOptional()
    @IsNumber()
    @Min(1)
    durationDays?: number

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isTrial?: boolean

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiPropertyOptional({ example: 10 })
    @IsOptional()
    @IsNumber()
    numberOfUsers?: number
}
