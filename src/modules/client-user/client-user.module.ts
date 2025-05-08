import { Module } from '@nestjs/common';
import { ClientUserService } from './client-user.service';
import { ClientUserController } from './client-user.controller';
import { MailModule } from '../mail/mail.module';
@Module({
  providers: [ClientUserService],
  controllers: [ClientUserController],
  imports: [MailModule],
})
export class ClientUserModule {}
