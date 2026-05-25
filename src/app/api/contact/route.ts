import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "../../../lib/ContactFormSchema";
import { getConfirmationEmail } from "@/lib/getConfirmationEmail";
import { getNotificationEmail } from "@/lib/getNotificationEmail";
import { getNotificationText, getConfirmationText } from "@/lib/getTextEmail";
import { z } from "zod";

export const runtime = "nodejs"


export async function POST(req: Request) {
    try {
        const body: unknown = await req.json();
        const parsed = contactFormSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({
                error: "invalid form data",
                issues: z.treeifyError(parsed.error)
            }, { status: 400 })
        }

        const { name, email, message, organization } =  parsed.data;

        if (organization && organization.trim().length > 0) {
            return NextResponse.json({ ok: true }, { status: 200 });
        }

        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!to || !from) {
            return NextResponse.json({
                error: "Service is missing email configuration"
            }, { status: 500 })
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json({
                error: "Service is missing email configuration"
            }, { status: 500 })
        }

        const resend = new Resend(apiKey);

        await Promise.all([
            resend.emails.send({
                from,
                to,
                replyTo: email,
                subject: `New Lead: ${name}`,
                html: getNotificationEmail({name, email, message}),
                text: getNotificationText({name, email, message})
            }),
            resend.emails.send({
                from,
                to: email,
                replyTo: to,
                subject: `We received your message - Chris Eke`,
                html: getConfirmationEmail({name, message}),
                text: getConfirmationText({name, message})
            })
        ])
        return NextResponse.json({ ok: true }, { status: 200 });
    } catch {
        return NextResponse.json({
            error: "Something went wrong sending the message."
        }, { status: 500 })
    }
}
