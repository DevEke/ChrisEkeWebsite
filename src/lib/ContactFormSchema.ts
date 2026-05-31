import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Please enter your name."),

    email: z
        .email("Please enter a valid email address."),

    message: z
        .string()
        .trim()
        .min(1, "This field cannot be blank."),

    // Honeypot
    organization: z
        .string()
        .trim()
        .optional()
        .or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>;
