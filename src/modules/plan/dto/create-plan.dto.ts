import { IsString, IsOptional, IsBoolean, IsNumber, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePlanDto {
    @ApiProperty({ example: 'Plano Premium' })
    @IsString()
    name: string

    @ApiProperty({ example: 'Plano completo com todos os recursos', required: false })
    @IsOptional()
    @IsString()
    description?: string

    @ApiProperty({ example: 199.99 })
    @IsNumber()
    price: number

    @ApiProperty({ example: 30 })
    @IsNumber()
    @Min(1)
    durationDays: number

    @ApiProperty({ example: false })
    @IsBoolean()
    isTrial: boolean

    @ApiProperty({ example: true })
    @IsOptional()
    isActive?: boolean;
}
