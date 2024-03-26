import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(password: string, email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: "Look! Here is your password",
      template: "./showPass",
      context: {
        password,
        appName: "Books App",
      },
    });
  }
}
