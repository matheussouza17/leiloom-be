import { Controller, Get, Post, Body, Param, Patch, Delete, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ClientPlanService } from './client-plan.service';
import { CreateClientPlanDto } from './dto/create-client-plan.dto';
import { UpdateClientPlanDto } from './dto/update-client-plan.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../../common/guards/optional-jwt-auth.guard';

@Controller('client-plans')
@ApiBearerAuth()
export class ClientPlanController {
  constructor(private readonly service: ClientPlanService) {}

  @Post()
  @UseGuards(OptionalJwtAuthGuard) 
  @ApiOperation({ summary: 'Criar associação Cliente ↔ Plano' })
  create(@Body() dto: CreateClientPlanDto) {
    return this.service.create(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Listar clientPlans do usuário logado' })
  findByUser(@Req() req: any) {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('Usuário não autenticado');
    }
    
    const clientUserId = req.user.id;
    return this.service.findByClientUser(clientUserId);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Listar todos os clientPlans (admin)' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Detalhar um clientPlan pelo id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Atualizar campo current de um clientPlan' })
  update(@Param('id') id: string, @Body() dto: UpdateClientPlanDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Remover um clientPlan' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}