import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { CreatePlanDto } from './dto/create-plan.dto'
import { UpdatePlanDto } from './dto/update-plan.dto'

@Injectable()
export class PlanService {
  private prisma = new PrismaClient()

  async create(dto: CreatePlanDto) {
    return this.prisma.plan.create({
      data: { ...dto },
    })
  }

  async findAll() {
    return this.prisma.plan.findMany({
      orderBy: { createdOn: 'desc' }
    })
  }

  async findOne(id: string) {
    const plan = await this.prisma.plan.findUnique({ where: { id } })
    if (!plan) throw new NotFoundException(`Plano com ID ${id} não encontrado.`)
    return plan
  }

  async update(id: string, dto: UpdatePlanDto) {
    const existing = await this.prisma.plan.findUnique({ where: { id } })
    if (!existing) throw new NotFoundException(`Plano com ID ${id} não encontrado.`)

    return this.prisma.plan.update({
      where: { id },
      data: { ...dto },
    })
  }

  async remove(id: string) {
    const existing = await this.prisma.plan.findUnique({ where: { id } })
    if (!existing) throw new NotFoundException(`Plano com ID ${id} não encontrado.`)

    return this.prisma.plan.delete({ where: { id } })
  }
}
