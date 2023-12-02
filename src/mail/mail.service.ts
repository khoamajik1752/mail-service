import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MailService {
  constructor(@InjectQueue('mail') private mailQueue: Queue) {}

  async confirmEmail(email: string) {
    const job = await this.mailQueue.add('mail_confirmation', {
      email: email,
    });
  }
}
