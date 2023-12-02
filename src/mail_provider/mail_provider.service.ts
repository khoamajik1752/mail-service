import { Injectable } from '@nestjs/common';
import * as postmark from 'postmark';
import * as sendGrid from '@sendgrid/mail';
import { _config } from 'src/config';
import { createConfimationTemplate } from './email_template/MailConfirmation.template';
import { createForgotPasswordTemplate } from './email_template/ForgotPassword.template';
@Injectable()
export class MailProviderService {
  // private mail_service: postmark.ServerClient;

  constructor() {
    sendGrid.setApiKey(_config.SEND_GRID_API);
    // this.mail_service = new postmark.ServerClient(
    //   '06e9364d-8424-4132-a45c-d4e90c4978db',
    // );
  }

  async confirmMail(email: string, token: string) {
    console.log(token);
    const template = createConfimationTemplate(
      email,
      `${_config.MAIL_CONFIRMATION_URL}?token=${token}`,
    );
    const msg = {
      to: `${email}`, // Change to your recipient
      from: 'khoanguyen517@gmail.com', // Change to your verified sender
      subject: 'Email confirmation',
      text: 'testing mail',
      html: template,
    };
    await sendGrid
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async forgotPassword(email: string, verificationCode: string) {
    const template = createForgotPasswordTemplate(email, verificationCode);
    const msg = {
      to: `${email}`, // Change to your recipient
      from: 'khoanguyen517@gmail.com', // Change to your verified sender
      subject: 'Fit Classroom - Reset your password',
      text: 'testing mail',
      html: template,
    };
    await sendGrid
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
