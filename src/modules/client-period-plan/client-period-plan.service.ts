// src/client-period-plan/client-period-plan.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClientPeriodPlanDto } from './dto/create-client-period-plan.dto';
import { UpdateClientPeriodPlanDto } from './dto/update-client-period-plan.dto';

@Injectable()
export class ClientPeriodPlanService {
  private prisma = new PrismaClient();

  async create(dto: CreateClientPeriodPlanDto) {
    return this.prisma.clientPeriodPlan.create({
      data: {
        clientPlanId: dto.clientPlanId,
        startsAt: dto.startsAt,
        expiresAt: dto.expiresAt,
        isTrial: dto.isTrial,
        isCurrent: dto.isCurrent,
        wasConfirmed: dto.wasConfirmed,
      },
      include: { 
        clientPlan: {
          include: {
            client: true,
            plan: true
          }
        }
      }
    });
  }

  async findAll() {
    return this.prisma.clientPeriodPlan.findMany({
      orderBy: { createdOn: 'desc' },
      include: { 
        clientPlan: {
          include: {
            client: true,
            plan: true
          }
        }
      },
    })
    ;
  }

  /**
   * Busca os períodos de um cliente específico baseado no clientUserId
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

    // Busca todos os clientPlans desse cliente
    const clientPlans = await this.prisma.clientPlan.findMany({
      where: { clientId: clientUser.clientId }
    });

    const clientPlanIds = clientPlans.map(cp => cp.id);

    // Busca todos os períodos desses planos
    return this.prisma.clientPeriodPlan.findMany({
      where: { 
        clientPlanId: { in: clientPlanIds }
      },
      orderBy: { createdOn: 'desc' },
      include: { 
        clientPlan: {
          include: {
            client: true,
            plan: true
          }
        }
      },
    });
  }

  async findOne(id: string) {
    const cpp = await this.prisma.clientPeriodPlan.findUnique({
      where: { id },
      include: { 
        clientPlan: {
          include: {
            client: true,
            plan: true
          }
        }
      },
    });
    if (!cpp) throw new NotFoundException(`ClientPeriodPlan ${id} não encontrado`);
    return cpp;
  }

  async update(id: string, dto: UpdateClientPeriodPlanDto) {
    await this.findOne(id);
    return this.prisma.clientPeriodPlan.update({
      where: { id },
      data: { ...dto },
      include: { 
        clientPlan: {
          include: {
            client: true,
            plan: true
          }
        }
      }
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.clientPeriodPlan.delete({ where: { id } });
  }
}