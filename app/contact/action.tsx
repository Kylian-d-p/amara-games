"use server";

import { env } from "@/lib/env";
import nodemailer from "nodemailer";
import { z } from "zod";
import { schema } from "./schema";

export default async function contactAction(values: z.infer<typeof schema>) {
  const checkedValues = await schema.safeParseAsync(values);

  if (!checkedValues.success) {
    return { error: "Les données envoyées ne sont pas valides" };
  }

  const data = checkedValues.data;

  const transporter = nodemailer.createTransport({
    host: env.EMAIL_SERVER_HOST,
    port: env.EMAIL_SERVER_PORT,
    auth: {
      user: env.EMAIL_SERVER_USER,
      pass: env.EMAIL_SERVER_PASS,
    },
  });

  await transporter.sendMail({
    from: `Amara Games <${env.EMAIL_FROM}>`,
    to: env.EMAIL_TO,
    subject: `Amara contact - ${data.subject}`,
    text: `De: ${data.name} <${data.email}>\n\n${data.body}`,
  });

  return { message: "Votre message a bien été envoyé" };
}
