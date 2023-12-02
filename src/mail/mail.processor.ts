import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueRemoved,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { MailProviderService } from 'src/mail_provider/mail_provider.service';

@Processor('mail')
export class MailProcessor {
  constructor(private mailProvider: MailProviderService) {}
  private readonly logger = new Logger(MailProcessor.name);
  @OnQueueActive()
  onActice(job: Job) {
    console.log(`Processing job ${job.id} of type ${job.name}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    job.remove();
  }

  @OnQueueRemoved()
  onRemove(job: Job) {
    console.log(`remove job id:${job.id}`);
  }
  @Process('mail_confirmation')
  async handleMailConfirmation(job: Job) {
    this.logger.debug('Start sending mail confirmation');
    this.logger.debug(job.data);
    const token: string = job.data.token;
    const mail: string = job.data.email;
    // console.log(token, mail);
    await this.mailProvider.confirmMail(mail, token);
    return 'OK';
  }

  @Process('forgot_password')
  async handlePasswordConfirmation(job: Job) {
    this.logger.debug('Start sending password confirmation');
    this.logger.debug(job.data);
    const code: string = job.data.code;
    const mail: string = job.data.email;
    await this.mailProvider.forgotPassword(mail, code);
    return 'OK';
  }
}
