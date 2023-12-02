import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { BullModule } from '@nestjs/bull';
import { MailService } from './mail.service';
import { MailProcessor } from './mail.processor';
import { MailProviderModule } from 'src/mail_provider/mail_provider.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'mail',
    }),
    MailProviderModule,
  ],
  controllers: [MailController],
  providers: [MailService, MailProcessor],
})
export class MailModule {}
