import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();

  async create(dto: CreateUserDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hash,
      },
    });

    const { password, ...rest } = user;
    return rest;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdOn: true,
        updatedOn: true,
      },
    });
    return users;
  }
  
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    const data: any = { ...dto };
  
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
  
    data.updatedOn = new Date();
  
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
  
  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
  
}
