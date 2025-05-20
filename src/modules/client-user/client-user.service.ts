import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { CreateClientUserDto } from './dto/create-client-user.dto';
import { UpdateClientUserDto } from './dto/update-client-user.dto';
import * as bcrypt from 'bcrypt';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ClientUserService {
  constructor(private readonly mailService: MailService) {}
  private prisma = new PrismaClient();

  async create(dto: CreateClientUserDto) {
    const existingUser = await this.prisma.clientUser.findUnique({
      where: { email: dto.email },
    });
  
    if (existingUser) {
      if (existingUser.isConfirmed) {
        throw new ConflictException('E-mail já cadastrado.');
      }
  
      // Se o usuário já existe mas ainda não confirmou o cadastro,
      // podemos atualizar os dados com o novo cadastro
      const updatedUser = await this.prisma.clientUser.update({
        where: { email: dto.email },
        data: {
          name: dto.name,
          password: await bcrypt.hash(dto.password, 10),
          phone: dto.phone,
          cpfCnpj: BigInt(dto.cpfCnpj),
          role: dto.role,
          clientId: dto.clientId,
          status: 'PENDING',
          confirmationCode: Math.random().toString(36).substring(2, 15),
          updatedOn: new Date(),
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
          confirmationCode: true,
          createdOn: true,
          updatedOn: true,
        },
      });
  
      await this.mailService.sendMail(
        updatedUser.email,
        'Confirmação de criação de conta - Leiloom',
        `
          <p>Seu código para confirmação de conta é:</p>
          <h3>${updatedUser.confirmationCode}</h3>
        `
      );
  
      return {
        ...updatedUser,
        cpfCnpj: updatedUser.cpfCnpj.toString(),
      };
    }
  
    // Caso o e-mail ainda não exista, cria normalmente
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const confirmationCode = Math.random().toString(36).substring(2, 15);
  
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
        confirmationCode,
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
  
    await this.mailService.sendMail(
      user.email,
      'Confirmação de criação de conta - Leiloom',
      `
        <p>Seu código para confirmação de conta é:</p>
        <h3>${confirmationCode}</h3>
      `
    );
  
    return {
      ...user,
      cpfCnpj: user.cpfCnpj.toString(),
    };
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
