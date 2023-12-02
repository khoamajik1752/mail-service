import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class MailConfirmationDto {
  @IsEmail()
  @ApiProperty({
    default: 'khoacraphotograph2@gmail.com',
  })
  email: string;
}
