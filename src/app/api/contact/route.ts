import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "@/lib/ContactFormSchema";

export const runtime = "nodejs"


const serverSchema = contactFormSchema.extend({
    stage: z.string().trim().min(1, "Stage is required."),
    budget: z.string().trim().min(1, "Budget is required."),
    timeline: z.string().trim().min(1, "Timeline is required.")
})

function escapeHtml(input: string) {
    return input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatStage(stage: string) {
    const map: Record<string, string> = {
        website: "I need to build a new website.",
        redesign: "I need a website redesigned.",
    };
    return map[stage] ?? stage;
}

function formatBudget(budget: string) {
    const map: Record<string, string> = {
        under3k: "Less than $3,000.",
        between3kand6k: "Between $3,000 and $6,000.",
        over6k: "More than $6,000."
    };
    return map[budget] ?? budget;
}

function formatTimeline(timeline: string) {
    const map: Record<string, string> = {
        flexible: "I'm flexible.",
        between1and2months: "Between 1 and 2 months.",
        over3months: "More than 3 months."
    };
    return map[timeline] ?? timeline;
}

function ownerEmailHtml(args: {
    siteUrl: string;
    company?: string;
    fullName: string;
    emailAddress: string;
    message: string;
    stage: string;
    budget: string;
    timeline: string;
}) {
    const siteUrl = escapeHtml(args.siteUrl);
    const company = escapeHtml(args.company || "(not provided)");
    const fullName = escapeHtml(args.fullName);
    const emailAddress = escapeHtml(args.emailAddress);
    const message = escapeHtml(args.message).replaceAll("\n", "<br/>");
    const stage = escapeHtml(formatStage(args.stage));
    const budget = escapeHtml(formatBudget(args.budget));
    const timeline = escapeHtml(formatTimeline(args.timeline));

    return `insert email template to me here.`
}


function userEmailHtml(args: {
    siteUrl: string;
    fullName: string;
}) {
    const siteUrl = escapeHtml(args.siteUrl);
    const fullName = escapeHtml(args.fullName);

    return `insert email template to user here.`
}


function ownerEmailText(args: {
    siteUrl: string;
    company?: string;
    fullName: string;
    emailAddress: string;
    message: string;
    stage: string;
    budget: string;
    timeline: string;
}) {
    const siteUrl = escapeHtml(args.siteUrl);
    const company = escapeHtml(args.company || "(not provided)");
    const fullName = escapeHtml(args.fullName);
    const emailAddress = escapeHtml(args.emailAddress);
    const message = escapeHtml(args.message).replaceAll("\n", "<br/>");
    const stage = escapeHtml(formatStage(args.stage));
    const budget = escapeHtml(formatBudget(args.budget));
    const timeline = escapeHtml(formatTimeline(args.timeline));

    return `insert email template to me here.`
}


function userEmailText(args: {
    siteUrl: string;
    fullName: string;
}) {
    const siteUrl = escapeHtml(args.siteUrl);
    const fullName = escapeHtml(args.fullName);

    return `insert email template to user here.`
}

export async function POST(req: Request) {
    try {
        const body: unknown = await req.json();
        const parsed = serverSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({
                error: "invalid form data",
                issues: z.treeifyError(parsed.error)
            }, { status: 400 })
        }

        const { fullName, emailAddress, company, stage, budget, timeline, message, organization } =  parsed.data;

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
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
        const stageLabel = formatStage(stage);
        const budgetLabel = formatBudget(budget);
        const timelineLabel = formatTimeline(timeline);

        await resend.emails.send({
            from,
            to,
            replyTo: emailAddress,
            subject: `New Lead: ${fullName} - ${stage}`,
            html: ownerEmailHtml({
                siteUrl,
                fullName,
                emailAddress,
                company,
                stage,
                budget,
                timeline,
                message
            }),
            text: ownerEmailText({
                siteUrl,
                fullName,
                emailAddress,
                company: company || "(nor provided)",
                stage,
                budget,
                timeline,
                message
            })
        });

        await resend.emails.send({
            from,
            to: emailAddress,
            replyTo: to,
            subject: `We received your message - Chris Eke`,
            html: userEmailHtml({
                siteUrl,
                fullName
            }),
            text: userEmailText({
                siteUrl,
                fullName
            })
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch {
        return NextResponse.json({
            error: "Something went wrong sending the message."
        }, { status: 500 })
    }
}
