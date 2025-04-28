import { Module } from '@nestjs/common';
import { TermsService } from './terms.service';
import { TermsController } from './terms.controller';

@Module({
  providers: [TermsService],
  controllers: [TermsController]
})
export class TermsModule {}
