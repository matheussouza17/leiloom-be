// src/common/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // email@gmail.com
      pass: process.env.MAIL_PASS, // senha de app (ou sua senha, não recomendado)
    },
  });

  async sendMail(to: string, subject: string, html: string) {
    const info = await this.transporter.sendMail({
      from: `"Radar Leilão" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });
  }
}
