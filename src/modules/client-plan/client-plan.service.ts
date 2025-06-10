// src/client-plan/client-plan.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClientPlanDto } from './dto/create-client-plan.dto';
import { UpdateClientPlanDto } from './dto/update-client-plan.dto';

@Injectable()
export class ClientPlanService {
  private prisma = new PrismaClient();

  async create(dto: CreateClientPlanDto) {
    return this.prisma.clientPlan.create({
      data: {
        clientId: dto.clientId,
        planId: dto.planId,
      },
      include: {
        client: true,
        plan: true,
        periods: true
      }
    });
  }

  async findAll() {
    return this.prisma.clientPlan.findMany({
      orderBy: { createdOn: 'desc' },
      include: { 
        client: true, 
        plan: true, 
        periods: {
          orderBy: { createdOn: 'desc' }
        }
      },
    });
  }

  /**
   * Busca os planos de um cliente específico baseado no clientUserId
   */
  async findByClientUser(clientUserId: string) {
    // Primeiro, encontra o cliente do usuário
    const clientUser = await this.prisma.clientUser.findUnique({
      where: { id: clientUserId },
      include: { client: true }
    });

    if (!clientUser) {
      throw new NotFoundException(`ClientUser ${clientUserId} não encontrado`);
    }

    // Depois, busca os planos desse cliente
    return this.prisma.clientPlan.findMany({
      where: { clientId: clientUser.clientId },
      orderBy: { createdOn: 'desc' },
      include: { 
        client: true, 
        plan: true, 
        periods: {
          orderBy: { createdOn: 'desc' }
        }
      },
    });
  }

  async findOne(id: string) {
    const cp = await this.prisma.clientPlan.findUnique({
      where: { id },
      include: { 
        client: true, 
        plan: true, 
        periods: {
          orderBy: { createdOn: 'desc' }
        }
      },
    });
    if (!cp) throw new NotFoundException(`ClientPlan ${id} não encontrado`);
    return cp;
  }

  async update(id: string, dto: UpdateClientPlanDto) {
    await this.findOne(id); // lança 404 se não existir
    return this.prisma.clientPlan.update({
      where: { id },
      data: { current: dto.current },
      include: {
        client: true,
        plan: true,
        periods: true
      }
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.clientPlan.delete({ where: { id } });
  }
}