import { Module } from '@nestjs/common';
import { ClientPlanService } from './client-plan.service';
import { ClientPlanController } from './client-plan.controller';

@Module({
  providers: [ClientPlanService],
  controllers: [ClientPlanController]
})
export class ClientPlanModule {}
