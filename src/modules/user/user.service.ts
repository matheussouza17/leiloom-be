import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();

  async create(dto: CreateUserDto) {
    const hash = await bcrypt.hash(dto.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: hash,
          role: dto.role,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdOn: true,
          updatedOn: true,
        }
      });

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = (error.meta as any)?.target as string[] | string;

          if (Array.isArray(target) && target.includes('email')) {
            throw new ConflictException('E-mail já cadastrado.');
          }

          if (typeof target === 'string' && target === 'email') {
            throw new ConflictException('E-mail já cadastrado.');
          }
        }
      }
      throw error;
    }
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }
  
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    const existingUser = await this.prisma.user.findUnique({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    const data: any = { ...dto };

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    data.updatedOn = new Date();

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }
  
  async remove(id: string) {
    const existingUser = await this.prisma.user.findUnique({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return this.prisma.user.delete({ where: { id } });
  }
}
