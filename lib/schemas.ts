import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Two characters minimum." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  message: z.string().min(1, { message: "Message is required." }),
  access_key: z.string(),
  subject: z.string(),
  from_name: z.string(),
  botcheck: z.string(),
});
