import { z } from "zod";

const stageValues = ["website", "redesign"];
const budgetValues = ["under3k", "between3kand6k", "over6k"];
const timelineValues = ["flexible", "between1and2months", "over3months"];

export const stageOptions = stageValues.map((o) => ({
    value: o,
    label:
        o === "website" ? "I need to build a new website." :
        "I need a website redesigned."
}))

export const budgetOptions = budgetValues.map((o) => ({
    value: o,
    label:
        o === "under3k" ? "Less than $3,000." :
        o === "between3kand6k" ? "Between $3,000 and $6,000." :
        "More than $6,000."
}))

export const timelineOptions = timelineValues.map((o) => ({
    value: o,
    label:
        o === "flexible" ? "I'm flexible." :
        o === "between1and2months" ? "Between 1 and 2 months." :
        "More than 3 months."
}))

export const FAQsData = [
    {

        id: 1,
        question: "How long does a project typically take?",
        answer: "Timelines depend on scope, but most projects move from discovery through deployment within several weeks once direction is defined."
    },
    {
        id: 2,
        question: "Do you provide hosting?",
        answer: "I provide guidance and recommendations, but hosting is managed separately to ensure flexibility and ownership."
    },
    {
        id: 3,
        question: "Will I be able to update the site myself?",
        answer: "Projects are built with performance and structure in mind. Ongoing updates can be handled as needed."
    },
    {
        id: 4,
        question: "Do you offer ongoing maintenance?",
        answer: "Maintenance is available upon request for teams that prefer continued support."
    },
    {
        id: 5,
        question: "What happens after I submit the form?",
        answer: "You will receive a response outlining next steps and an initial discussion to clarify scope and direction."
    },
]


export const contactFormSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, "Please enter your full name."),

    emailAddress: z
        .email("Please enter a valid email address."),

    company: z
        .string()
        .trim()
        .optional()
        .or(z.literal("")),

    stage: z
        .enum(stageValues, {
            error: "Please select the stage you're currently at."
        }),

    message: z
        .string()
        .trim()
        .min(1, "Please enter a message so I know how to help."),

    budget: z
        .enum(budgetValues, {
            error: "Please select a budget range."
        }),

    timeline: z
        .enum(timelineValues, {
            error: "Please select an estimated timeline."
        }),

    // Honeypot
    organization: z
        .string()
        .trim()
        .optional()
        .or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>;
