// src/common/guards/optional-jwt-auth.guard.ts
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Sempre permite acesso, mas tenta extrair token se presente
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    // Se houver erro de token ou info, não lança exceção
    // Permite que a requisição continue sem usuário autenticado
    
    if (err || info) {
      // Log opcional para debug
      console.log('OptionalJwtAuthGuard - Token error/info:', err?.message || info?.message);
      return null;
    }

    // Retorna user se presente, null se não (sem lançar erro)
    return user || null;
  }
}