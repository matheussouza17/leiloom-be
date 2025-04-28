import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AcceptTermsDto } from './dto/accept-terms.dto';
import { UploadTermsDto } from './dto/upload-terms.dto';

@Injectable()
export class TermsService {
  private prisma = new PrismaClient();

  async acceptTerms(dto: AcceptTermsDto) {
    const terms = await this.prisma.termsOfUse.findUnique({ where: { id: dto.termsId } });

    if (!terms || !terms.isCurrent) {
      throw new BadRequestException('Termo inválido ou não atual.');
    }

    const clientUser = await this.prisma.clientUser.findUnique({ where: { id: dto.clientUserId } });

    if (!clientUser) {
      throw new NotFoundException('Usuário cliente não encontrado.');
    }

    const alreadyAccepted = await this.prisma.clientTermsOfUse.findFirst({
      where: {
        clientId: clientUser.clientId,
        termsId: dto.termsId,
      },
    });

    if (alreadyAccepted) {
      throw new BadRequestException('Termo já aceito por este cliente.');
    }

    const acceptance = await this.prisma.clientTermsOfUse.create({
      data: {
        clientId: clientUser.clientId,
        termsId: dto.termsId,
        acceptedById: dto.clientUserId,
      },
    });

    return acceptance;
  }

  async findCurrentTerms() {
    const terms = await this.prisma.termsOfUse.findFirst({
      where: { isCurrent: true },
      orderBy: { createdOn: 'desc' },
    });

    if (!terms) {
      throw new NotFoundException('Nenhum termo de uso atual encontrado.');
    }

    return terms;
  }

  async uploadTerms(dto: UploadTermsDto) {
    // Desativa o termo atual
    await this.prisma.termsOfUse.updateMany({
      where: { isCurrent: true },
      data: { isCurrent: false },
    });
  
    // Cria novo termo
    const newTerms = await this.prisma.termsOfUse.create({
      data: {
        fileUrl: dto.fileUrl,
        description: dto.description,
        isCurrent: true,
        uploadedById: dto.uploadedById,
      },
    });
  
    return newTerms;
  }
}
