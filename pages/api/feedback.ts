// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";
type MailPriority = "high";
type MailBody = {
  from: string;
  to: string;
  subject?: string;
  html: string;
  priority?: MailPriority;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!checkBody(req)) return res.redirect("/");
    const body = MailService.generateMailBody(
      `
    <p>Name : </p><span><strong>${name}</strong></span>
    <br/>
    <p>From : </p><span><strong>${email}</strong></span>
    <br/>
    <p>Feedback : </p><span><strong>${message}</strong></span>
    `,
      `Website feedback - ${email} (${new Date().toDateString()})`
    );
    await MailService.sendMail(body, true);
    return res.status(302).redirect("/");
  }
  return res.status(405).send("NOT ALLOWED");
}

function checkBody(req: NextApiRequest): boolean {
  const { email, message } = req.body;
  return `${email}`.trim().length > 0 && `${message}`.trim().length > 0;
}
class MailService {
  public static generateMailBody(
    html: string,
    subject?: string,
    priority?: MailPriority
  ): MailBody {
    return {
      from: process.env.SMTP_EMAIL!,
      html,
      to: process.env.SMTP_EMAIL!,
      subject,
      priority,
    };
  }

  public static sendMail(
    mailBody: MailBody,
    ignoreError?: boolean
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      nodeMailer
        .createTransport({
          service: process.env.SMTP_SERVICE,
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        })
        .sendMail(mailBody)
        .then(resolve)
        .catch((ignoreError && resolve) || reject);
    });
  }
}
