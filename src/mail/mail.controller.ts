import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiTags } from '@nestjs/swagger';
import { MailConfirmationDto } from './dtos/MailConfirm.dto';
@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  testMail(@Body() mailConfirmationDto: MailConfirmationDto) {
    this.mailService.confirmEmail(mailConfirmationDto.email);
  }
}
