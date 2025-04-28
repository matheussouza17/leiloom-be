import { Body, Controller, Get, Post } from '@nestjs/common';
import { TermsService } from './terms.service';
import { AcceptTermsDto } from './dto/accept-terms.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UploadTermsDto } from './dto/upload-terms.dto';

@ApiTags('Terms')
@Controller('terms')
export class TermsController {
  constructor(private readonly termsService: TermsService) {}

  @Get('current')
  @ApiOperation({ summary: 'Buscar o termo de uso atual' })
  async findCurrentTerms() {
    return this.termsService.findCurrentTerms();
  }

  @Post('accept')
  @ApiOperation({ summary: 'Aceitar o termo de uso atual' })
  async acceptTerms(@Body() dto: AcceptTermsDto) {
    return this.termsService.acceptTerms(dto);
  }

  @Post('upload')
    @ApiOperation({ summary: 'Upload de novo Termo de Uso (BackOffice)' })
    async uploadTerms(@Body() dto: UploadTermsDto) {
    return this.termsService.uploadTerms(dto);
    }
}
