import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { CreateClientUserDto } from './dto/create-client-user.dto';
import { UpdateClientUserDto } from './dto/update-client-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientUserService {
  private prisma = new PrismaClient();

  async create(dto: CreateClientUserDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const confirmationCode = Math.random().toString(36).substring(2, 15); 
    console.log('Generated confirmation code:', confirmationCode);
    try {
      const user = await this.prisma.clientUser.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: passwordHash,
          phone: dto.phone,
          cpfCnpj: BigInt(dto.cpfCnpj),
          role: dto.role,
          clientId: dto.clientId,
          status: 'PENDING',
          confirmationCode: confirmationCode, 
          isConfirmed: false,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          cpfCnpj: true,
          role: true,
          status: true,
          isConfirmed: true,
          createdOn: true,
          updatedOn: true,
        },
      });
  
      return {
        ...user,
        cpfCnpj: user.cpfCnpj.toString(),
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = (error.meta as any)?.target as string[] | string;
  
          if ((Array.isArray(target) && target.includes('email')) || target === 'email') {
            throw new ConflictException('E-mail já cadastrado.');
          }
        }
      }
      throw error;
    }
  }
  

  async findAll() {
    const users = await this.prisma.clientUser.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpfCnpj: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return users.map(user => ({
      ...user,
      cpfCnpj: user.cpfCnpj.toString(),
    }));
  }

  async findOne(id: string) {
    const user = await this.prisma.clientUser.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpfCnpj: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuário cliente com ID ${id} não encontrado.`);
    }

    return {
      ...user,
      cpfCnpj: user.cpfCnpj.toString(),
    };
  }

  async update(id: string, dto: UpdateClientUserDto) {
    const existingUser = await this.prisma.clientUser.findUnique({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException(`Usuário cliente com ID ${id} não encontrado.`);
    }

    const data: any = { ...dto };

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    data.updatedOn = new Date();

    const updatedUser = await this.prisma.clientUser.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpfCnpj: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return {
      ...updatedUser,
      cpfCnpj: updatedUser.cpfCnpj.toString(),
    };
  }

  async remove(id: string) {
    const existingUser = await this.prisma.clientUser.findUnique({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException(`Usuário cliente com ID ${id} não encontrado.`);
    }

    const deletedUser = await this.prisma.clientUser.delete({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpfCnpj: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });

    return {
      ...deletedUser,
      cpfCnpj: deletedUser.cpfCnpj.toString(),
    };
  }
}
