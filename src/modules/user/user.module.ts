import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController], // define as rotas
  providers: [UserService],      // lógica de negócio
  exports: [UserService],        // <-- permite importar no AuthModule
})
export class UserModule {}
