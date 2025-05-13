import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
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

  @Get('all')
  @ApiOperation({ summary: 'Buscar o termos' })
  async findTerms() {
    return this.termsService.findTerms();
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

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um Termo de Uso existente' })
  async updateTerms(@Param('id') id: string, @Body() dto: UploadTermsDto) {
    return this.termsService.updateTerms(id, dto);
  }
}
