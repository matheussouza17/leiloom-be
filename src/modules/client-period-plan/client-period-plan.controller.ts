import { Controller, Get, Post, Body, Param, Patch, Delete, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ClientPeriodPlanService } from './client-period-plan.service';
import { CreateClientPeriodPlanDto } from './dto/create-client-period-plan.dto';
import { UpdateClientPeriodPlanDto } from './dto/update-client-period-plan.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../../common/guards/optional-jwt-auth.guard';

@Controller('client-period-plans')
@ApiBearerAuth()
export class ClientPeriodPlanController {
  constructor(private readonly service: ClientPeriodPlanService) {}

  @Post()
  @UseGuards(OptionalJwtAuthGuard) 
  @ApiOperation({ summary: 'Criar um período de um clientPlan' })
  create(@Body() dto: CreateClientPeriodPlanDto) {
    return this.service.create(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Listar períodos do usuário logado' })
  findByUser(@Req() req: any) {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException('Usuário não autenticado');
    }
    
    const clientUserId = req.user.id;
    return this.service.findByClientUser(clientUserId);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Listar todos os períodos (admin)' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Detalhar um período pelo id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Atualizar um período' })
  update(@Param('id') id: string, @Body() dto: UpdateClientPeriodPlanDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Remover um período' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}