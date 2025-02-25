import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  body: z.string(),
});
