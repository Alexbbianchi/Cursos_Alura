import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a849971960f167",
        pass: "78d42e7217400a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alexssandro <alexbbianchi@gmail.com>',
            subject,
            html: body
        });
    };
}