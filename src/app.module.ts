import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MailModule } from './mail/mail.module';
import { MailProviderModule } from './mail_provider/mail_provider.module';
import { _config } from './config';

@Module({
  imports: [
    BullModule.forRoot({
      redis: _config.REDIS_CLUSTER_URL,
      // limiter: {
      //   max: 10,
      //   duration: 200,
      //   bounceBack: false,
      // },
    }),
    MailModule,
    MailProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
