"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormValues } from "@/lib/ContactFormSchema";
import { stageOptions, budgetOptions, timelineOptions, contactFormSchema } from "@/lib/ContactFormSchema";
import { IconSparklesFilled } from "@tabler/icons-react";
import styles from "./page.module.css";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Button/Button";
import Link from "next/link";

type SubmitState =
    | { status: "idle"}
    | { status: "success"}
    | { status: "error"; message: string};

export function ContactForm() {
    const [submitState, setSubmitState] = useState<SubmitState>({status: "idle"});
    const isSuccess = submitState.status === "success";

    const {
        register, handleSubmit,
        formState: { errors, isSubmitting },
        reset, setFocus
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            fullName: "",
            emailAddress: "",
            company: "",
            stage: "",
            message: "",
            budget: "",
            timeline: "",
            organization: "",
        }
    });

    function onInvalid() {
        const order: (keyof ContactFormValues)[] = [
            "fullName", "emailAddress", "company", "stage", "message", "budget", "timeline"
        ]
        const first = order.find((x) => errors[x]);
        if (first) setFocus(first);
    }

    async function onSubmit(values: ContactFormValues) {
        setSubmitState({status: "idle"});
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(values)
            })
            if (!res.ok) {
                let msg = "Something went wrong and your message couldn’t be sent. Please try again in a moment.";
                try {
                    const data = (await res.json()) as { error?: string };
                    if (data?.error) msg = data.error;
                } catch {

                }
                setSubmitState({status: "error", message: msg});
                return;
            }
            setSubmitState({status: "success"});
            reset();
        } catch {
            setSubmitState({
                status: "error",
                message: "Something went wrong and your message couldn’t be sent. Please try again in a moment."
            })
        }
    }

    if (isSuccess) {
        return (
            <section>

            </section>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
            <fieldset disabled={isSubmitting || isSuccess} aria-disabled={isSubmitting || isSuccess}>

                <Input<ContactFormValues>
                    className="visuallyHidden"
                    aria-hidden="true"
                    id="organization"
                    label="Organization"
                    type="text"
                    placeholder="Organization"
                    autoComplete="organization"
                    register={register}
                />

                <div className={styles.formGrid}>
                    <Input<ContactFormValues>
                        id="fullName"
                        label="Full Name"
                        type="text"
                        placeholder="Full Name"
                        autoComplete="name"
                        inputMode="text"
                        register={register}
                        error={errors.fullName}
                    />
                    <Input<ContactFormValues>
                        id="emailAddress"
                        label="Email Address"
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        inputMode="email"
                        register={register}
                        error={errors.emailAddress}
                    />
                    <Input<ContactFormValues>
                        id="company"
                        label="Company or Organization"
                        type="text"
                        placeholder="Company or Organization"
                        autoComplete="company"
                        inputMode="text"
                        register={register}
                        error={errors.company}
                    />
                    <Input<ContactFormValues>
                        id="stage"
                        label="Current Stage"
                        type="select"
                        placeholder="Current Stage"
                        register={register}
                        options={[...stageOptions]}
                        error={errors.stage}
                    />
                </div>
                <Input<ContactFormValues>
                    id="message"
                    label="What are you looking to build?"
                    type="textarea"
                    placeholder="What are you looking to build?"
                    register={register}
                    error={errors.message}
                />
                <div className={styles.formGrid}>
                    <Input<ContactFormValues>
                        id="budget"
                        label="Estimated Budget Range"
                        type="select"
                        placeholder="Estimated Budget Range"
                        register={register}
                        options={[...budgetOptions]}
                        error={errors.budget}
                    />
                    <Input<ContactFormValues>
                        id="timeline"
                        label="Timeline"
                        type="select"
                        placeholder="Timeline"
                        register={register}
                        options={[...timelineOptions]}
                        error={errors.timeline}
                    />
                </div>
                <div className={styles.formFooter}>
                    <p>Prefer email?<br/><span><Link className="bold" href="mailto:iam@chriseke.com">iam@chriseke.com</Link></span></p>
                    <Button
                        label={isSubmitting ? "Sending…" : "Start A Project"}
                        Icon={IconSparklesFilled}
                        buttonType="primary"
                        className={styles.formButton}
                    />
                </div>
            </fieldset>
        </form>
    )
}
