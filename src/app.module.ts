import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { ClientModule } from './modules/client/client.module';
import { ClientUserModule } from './modules/client-user/client-user.module';
import { TermsModule } from './modules/terms/terms.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { MailModule } from './modules/mail/mail.module';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MailModule,
    UserModule,
    ClientModule,
    ClientUserModule,
    TermsModule,
    AuthModule,
    PlanModule,
  ],
})
export class AppModule {}
