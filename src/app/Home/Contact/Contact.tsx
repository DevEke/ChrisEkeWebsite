"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormValues } from "@/lib/ContactFormSchema";
import { contactFormSchema } from "@/lib/ContactFormSchema";
import styles from "./Contact.module.css";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Button/Button";

type SubmitState =
    | { status: "idle"}
    | { status: "success"}
    | { status: "error"; message: string};

export default function Contact() {
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
            name: "",
            email: "",
            message: "",
            organization: "",
        }
    });

    function onInvalid() {
        const order: (keyof ContactFormValues)[] = [
            "name", "email", "message"
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
            <section id="contact" >
                <div className={`content ${styles.contactWrapper}`}>
                    <div className={styles.contactContent}>
                        <div className="img-placeholder"></div>
                        <h2 className="h2">Thank You</h2>
                        <p className="p1">I should receive it shortly, and a confirmation email should be on its way to your inbox.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contact" >
            <div className={`content ${styles.contactWrapper}`}>
                <div className={styles.contactContent}>
                    <h2 className="h2">Let&apos;s Work Together</h2>
                    <p className="p1">Share a few details about your project, goals, or ideas. Send a message and book a free 20-minute call, and I’ll respond within one business day.</p>
                    <form  className={styles.formWrapper} onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
            <fieldset className={styles.formContents} disabled={isSubmitting || isSuccess} aria-disabled={isSubmitting || isSuccess}>
                <Input<ContactFormValues>
                    className="visually-hidden"
                    aria-hidden="true"
                    id="organization"
                    label="Organization"
                    type="text"
                    placeholder="Organization"
                    autoComplete="organization"
                    register={register}
                />
                <Input<ContactFormValues>
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    inputMode="text"
                    register={register}
                    error={errors.name}
                    className={styles.nameInput}
                />
                <Input<ContactFormValues>
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    inputMode="email"
                    register={register}
                    error={errors.email}
                    className={styles.emailInput}
                />
                <Input<ContactFormValues>
                    id="message"
                    label="Message"
                    type="textarea"
                    placeholder="How can I help you?"
                    register={register}
                    error={errors.message}
                    className={styles.messageInput}
                />
                <div className={styles.formFooter}>
                    <Button
                        className={`${styles.contactButton}`}
                        label={isSubmitting ? `Sending...` : `Send a Message`}
                    />
                </div>
            </fieldset>
        </form>
                </div>
            </div>
        </section>
    )
}
