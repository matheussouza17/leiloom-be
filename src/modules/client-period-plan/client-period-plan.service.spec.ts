import { Test, TestingModule } from '@nestjs/testing';
import { ClientPeriodPlanService } from './client-period-plan.service';

describe('ClientPeriodPlanService', () => {
  let service: ClientPeriodPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientPeriodPlanService],
    }).compile();

    service = module.get<ClientPeriodPlanService>(ClientPeriodPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
