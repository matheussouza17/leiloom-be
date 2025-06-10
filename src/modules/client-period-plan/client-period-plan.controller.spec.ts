import { Test, TestingModule } from '@nestjs/testing';
import { ClientPeriodPlanController } from './client-period-plan.controller';

describe('ClientPeriodPlanController', () => {
  let controller: ClientPeriodPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientPeriodPlanController],
    }).compile();

    controller = module.get<ClientPeriodPlanController>(ClientPeriodPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
