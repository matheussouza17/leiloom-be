import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';


@Injectable()
export class ClientService {
  private prisma = new PrismaClient();

  async create(dto: CreateClientDto) {
    const created = await this.prisma.client.create({
      data: {
        name: dto.name,
        cpfCnpj: BigInt(dto.cpfCnpj),
        cep: dto.cep,
        street: dto.street,
        number: dto.number,
        complement: dto.complement,
        neighborhood: dto.neighborhood,
        city: dto.city,
        state: dto.state,
        country: dto.country,
        status: 'PENDING',
      },
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        neighborhood: true,
        city: true,
        state: true,
        country: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return {
      ...created,
      cpfCnpj: created.cpfCnpj?.toString() ?? null,
    };
  }

  async findAll() {
    const clients = await this.prisma.client.findMany({
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        neighborhood: true,
        city: true,
        state: true,
        country: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return clients.map(c => ({
      ...c,
      cpfCnpj: c.cpfCnpj?.toString() ?? null,
    }));
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        neighborhood: true,
        city: true,
        state: true,
        country: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    if (!client) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    return {
      ...client,
      cpfCnpj: client.cpfCnpj?.toString() ?? null,
    };
  }

  async update(id: string, dto: UpdateClientDto) {
    const existingClient = await this.prisma.client.findUnique({ where: { id } });

    if (!existingClient) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    const data: any = { ...dto };

    if (dto.cpfCnpj) {
      data.cpfCnpj = BigInt(dto.cpfCnpj);
    }

    data.updatedOn = new Date();

    const updated = await this.prisma.client.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        neighborhood: true,
        city: true,
        state: true,
        country: true,
        createdOn: true,
        updatedOn: true,
        status: true,
      },
    });

    return {
      ...updated,
      cpfCnpj: updated.cpfCnpj?.toString() ?? null,
    };
  }

  async remove(id: string) {
    const existingClient = await this.prisma.client.findUnique({ where: { id } });

    if (!existingClient) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    const deleted = await this.prisma.client.delete({
      where: { id },
      select: {
        id: true,
        name: true,
        cpfCnpj: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return {
      ...deleted,
      cpfCnpj: deleted.cpfCnpj?.toString() ?? null,
    };
  }
}
