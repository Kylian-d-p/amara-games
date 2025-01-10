import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_SERVER_HOST: z.string().min(1),
    EMAIL_SERVER_PORT: z.number(),
    EMAIL_SERVER_USER: z.string().min(1),
    EMAIL_SERVER_PASS: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
    EMAIL_TO: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: Number(process.env.EMAIL_SERVER_PORT),
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASS: process.env.EMAIL_SERVER_PASS,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_TO: process.env.EMAIL_TO,
  },
});
