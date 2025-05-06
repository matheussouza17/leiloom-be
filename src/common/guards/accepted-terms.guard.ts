import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AcceptedTermsGuard implements CanActivate {
  private prisma = new PrismaClient();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // ⚡ precisa do JwtStrategy populando o request

    if (!user || user.context !== 'CLIENT') {
      // Só aplicamos o guard para ClientUsers
      return true;
    }
    
    const currentTerms = await this.prisma.termsOfUse.findFirst({
      where: { isCurrent: true },
    });

    if (!currentTerms) {
      throw new ForbiddenException('Nenhum termo de uso atual encontrado.');
    }

    const accepted = await this.prisma.clientTermsOfUse.findFirst({
      where: {
        clientId: user.clientId, // precisamos incluir clientId no JWT também se quiser
        termsId: currentTerms.id,
        acceptedById: user.id,
      },
    });

    if (!accepted) {
      throw new ForbiddenException('Termo de uso não aceito.');
    }

    return true;
  }
}
