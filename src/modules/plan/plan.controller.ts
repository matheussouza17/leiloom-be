import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common'
import { PlanService } from './plan.service'
import { CreatePlanDto } from './dto/create-plan.dto'
import { UpdatePlanDto } from './dto/update-plan.dto'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
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
  findAll() {
    return this.planService.findAll()
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
