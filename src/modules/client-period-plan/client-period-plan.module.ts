import { Module } from '@nestjs/common';
import { ClientPeriodPlanService } from './client-period-plan.service';
import { ClientPeriodPlanController } from './client-period-plan.controller';

@Module({
  providers: [ClientPeriodPlanService],
  controllers: [ClientPeriodPlanController]
})
export class ClientPeriodPlanModule {}
