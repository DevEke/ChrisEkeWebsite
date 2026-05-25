"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormValues } from "@/lib/ContactFormSchema";
import { contactFormSchema } from "@/lib/ContactFormSchema";
import styles from "./Contact.module.css";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Button/Button";
import Image from "next/image";

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
            <div className={styles.confirmationWrapper}>
                {/* <Image src={succ} alt="" /> */}
            </div>
        )
    }

    return (
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
                    label="What are you looking to build?"
                    type="textarea"
                    placeholder="What are you looking to build?"
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
    )
}
