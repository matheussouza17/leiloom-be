import { Module } from '@nestjs/common';
import { ClientUserService } from './client-user.service';
import { ClientUserController } from './client-user.controller';

@Module({
  providers: [ClientUserService],
  controllers: [ClientUserController]
})
export class ClientUserModule {}
