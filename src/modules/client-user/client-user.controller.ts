import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientUserService } from './client-user.service';
import { CreateClientUserDto } from './dto/create-client-user.dto';
import { UpdateClientUserDto } from './dto/update-client-user.dto';
import { AddClientUserByAdminDto } from './dto/add-client-user-by-admin.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';

@ApiTags('Client Users')
@Controller('client-users')
export class ClientUserController {
  constructor(private readonly clientUserService: ClientUserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário cliente' })
  async create(@Body() dto: CreateClientUserDto) {
    return this.clientUserService.create(dto);
  }

  @Post('adm')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Cria um novo usuário cliente pelo adm' })
  async createAdm(@Body() dto: AddClientUserByAdminDto) {
    return this.clientUserService.addClientUserByAdmin(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários clientes' })
  async findAll(@Param('clientId') clientId?: string) {
    return this.clientUserService.findAll(clientId? clientId : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um usuário cliente pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.clientUserService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um usuário cliente' })
  async update(@Param('id') id: string, @Body() dto: UpdateClientUserDto) {
    return this.clientUserService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário cliente' })
  async remove(@Param('id') id: string) {
    return this.clientUserService.remove(id);
  }
}
