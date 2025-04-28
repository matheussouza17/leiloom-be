import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  private prisma = new PrismaClient();

  async create(dto: CreateClientDto) {
    return this.prisma.client.create({
      data: {
        name: dto.name,
        address: dto.address,
      },
      select: {
        id: true,
        name: true,
        address: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async findAll() {
    return this.prisma.client.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        address: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    if (!client) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    return client;
  }

  async update(id: string, dto: UpdateClientDto) {
    const existingClient = await this.prisma.client.findUnique({ where: { id } });

    if (!existingClient) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    return this.prisma.client.update({
      where: { id },
      data: {
        ...dto,
        updatedOn: new Date(),
      },
      select: {
        id: true,
        name: true,
        address: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async remove(id: string) {
    const existingClient = await this.prisma.client.findUnique({ where: { id } });

    if (!existingClient) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    return this.prisma.client.delete({ where: { id } });
  }
}
