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
import { ClientPlanModule } from './modules/client-plan/client-plan.module';
import { ClientPeriodPlanModule } from './modules/client-period-plan/client-period-plan.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntSerializerInterceptor } from './common/interceptors/bigint-serializer.interceptor';

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
    ClientPlanModule,
    ClientPeriodPlanModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntSerializerInterceptor,
    },
  ]
})
export class AppModule {}
