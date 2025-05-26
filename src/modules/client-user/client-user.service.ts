import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { CreateClientUserDto } from './dto/create-client-user.dto';
import { UpdateClientUserDto } from './dto/update-client-user.dto';
import { AddClientUserByAdminDto } from './dto/add-client-user-by-admin.dto';
import * as bcrypt from 'bcrypt';
import { MailService } from '../mail/mail.service';
import * as crypto from 'crypto';

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

  async findAll(clientId?: string) {
    const whereClause = clientId ? { clientId: clientId } : {};
    const users = await this.prisma.clientUser.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        cpfCnpj: true,
        role: true,
        createdOn: true,
        updatedOn: true,
      },
      where: whereClause, 
      orderBy: { 
        name: 'asc',
      }
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
        status: true,
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
        status: true,
        cpfCnpj: true,
        isConfirmed: true,
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
        status: true,
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

  async addClientUserByAdmin(dto: AddClientUserByAdminDto) {
    const existingUser = await this.prisma.clientUser.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException(
        `O e-mail ${dto.email} já está cadastrado. Se o usuário não ativou a conta, ele deve verificar seu e-mail ou contatar o suporte.`,
      );
    }
    const confirmationCode = Math.random().toString(36).substring(2, 15)
    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24)
    console.log('file dto', dto);
    let createdUser;
    try {
      createdUser = await this.prisma.clientUser.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: await bcrypt.hash(confirmationCode, 10),
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
      })
      await this.prisma.clientRequest.create({
          data: {
            clientId: dto.clientId,         
            clientUserId: createdUser.id,    
            requestType: 'RequestPassword',
            generatedCode: confirmationCode,
            generatedToken: token,
            expires,
          },
        })
    } catch (error) {
      if (error.code === 'P2002') {
         throw new ConflictException(`Erro ao criar usuário. Detalhes: ${error.meta?.target?.join(', ')} já existe(m).`);
      }
      throw new InternalServerErrorException('Não foi possível adicionar o usuário. Tente novamente mais tarde.');
    }

    
    const frontendUrl = process.env.URL_FRONT || 'http://localhost:3000'
    const setupPasswordLink = `${frontendUrl}/reset-password?token=${token}`

    try {
      await this.mailService.sendMail(
      createdUser.email,
      'Configure sua conta na Plataforma Leiloom',
      `
        <p>Olá ${createdUser.name},</p>
        <p>Uma conta foi criada para você na plataforma Leiloom pelo administrador.</p>
        <p>Para ativar sua conta e definir sua senha, clique no link abaixo:</p>
        <p><a href="${setupPasswordLink}" target="_blank">Configurar Minha Senha</a></p>
        <p><strong>Código:</strong> ${confirmationCode}</p>
        <p>Este link é válido por 24 horas.</p>
      `
    );
    console.log(`E-mail enviado para ${createdUser.email} com sucesso.`);
    } catch (mailError) {
        console.error(`Falha ao enviar e-mail de configuração para ${createdUser.email}:`, mailError);
        throw new InternalServerErrorException('Falha ao enviar e-mail de configuração. Tente novamente mais tarde.');
    }
    return {
      message: `Usuário ${createdUser.name} adicionado com sucesso. Um e-mail foi enviado para ${createdUser.email} para configuração da senha.`,
      user: {
        ...createdUser,
        cpfCnpj: createdUser.cpfCnpj.toString(),
      }
    };
  }
}
