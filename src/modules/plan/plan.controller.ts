import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, Query, DefaultValuePipe, ParseBoolPipe } from '@nestjs/common'
import { PlanService } from './plan.service'
import { CreatePlanDto } from './dto/create-plan.dto'
import { UpdatePlanDto } from './dto/update-plan.dto'
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('Plans')
@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo plano' })
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreatePlanDto) {
    return this.planService.create(dto)
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os planos' })
  @ApiQuery({
    name: 'isActive',
    required: false,
    type: Boolean,
    description: 'Se true, traz só planos ativos; se false, só inativos; sem param, traz todos',
  })
  findAll(@Query('isActive') isActive?: string) {
  let isActiveBoolean: boolean | undefined;
  
  if (isActive === 'true') {
    isActiveBoolean = true;
  } else if (isActive === 'false') {
    isActiveBoolean = false;
  } else {
    isActiveBoolean = undefined;
  }
  
  return this.planService.findAll(isActiveBoolean);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um plano por ID' })
  findOne(@Param('id') id: string) {
    return this.planService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um plano existente' })
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() dto: UpdatePlanDto) {
    return this.planService.update(id, dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um plano' })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.planService.remove(id)
  }
}
