import { Module } from '@nestjs/common';
import { EmailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'yahoo',
        auth: {
          user: 'uzoagulujoshua@yahoo.com',
          pass: 'slugppkedadkvjxc',
        },
      },
      defaults: {
        from: '"Sally-nwamama" uzoagulujoshua@yahoo.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  // controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class MailModule {}
