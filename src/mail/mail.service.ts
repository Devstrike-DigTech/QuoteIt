import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface Email {
  to: string;
  data: any;
}

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async welcomeEmail(data: { email: string; name: string }) {
    const { email, name } = data;
    console.log(name);
    const subject = `Welcome to Company: ${name}`;

    await this.mailerService.sendMail({
      to: email,
      subject,
      template: 'welcome',
      context: {
        name,
      },
    });
  }
}
