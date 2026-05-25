
import type { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { IconAlertCircle, IconChevronDown } from "@tabler/icons-react";
import err from "../../../public/inp-err.png";
import styles from "./Input.module.css";
import Image from "next/image";

type SelectOptions = {
    value: string;
    label: string;
    disabled?: boolean;
}

type InputProps<TFieldValues extends FieldValues> = {
    type: string;
    label: string;
    className?: string;
    options?: SelectOptions[];
    id: Path<TFieldValues>;
    tabIndex?: number;
    placeholder?: string;
    autoComplete?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    register: UseFormRegister<TFieldValues>;
    error?: FieldError;
}

export default function Input<TFieldValues extends FieldValues>({
    type, label, className, id, tabIndex, placeholder, autoComplete, register, inputMode, options, error
}: InputProps<TFieldValues>) {

    if (type === "textarea") {
        return (
            <div className={`${styles.formInputContainer} ${className}`}>
                <label className={styles.formLabel} htmlFor={id}>{label}</label>
                <textarea
                    className={`${styles.formTextArea} ${error && styles.inputError}`}
                    id={id}
                    rows={5}
                    {...register(id)}
                />
                {
                    error && (
                        // <div className={styles.inputErrorContainer} role="alert">
                        //     <IconAlertCircle stroke={2.5} size={15} />
                        //     <span>{error.message}</span>
                        // </div>
                        <Image src={err} className={styles.errImage} alt="" />
                    )
                }
            </div>

        )
    }

    if (type === "select") {
        return (
            <div className={`${styles.formInputContainer} ${className}`}>
                <label className={styles.formLabel} htmlFor={id}>{label}</label>
                <select
                    id={id}
                    {...register(id)}
                    className={`${styles.formSelect} ${error && styles.inputError}`}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options && options.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                           {opt.label}
                        </option>
                    ))}
                </select>
                <IconChevronDown  size={15} className={styles.selectChevron}/>
                {
                    error && (
                        // <div className={styles.inputErrorContainer} role="alert">
                        //     <IconAlertCircle stroke={2.5} size={15} />
                        //     <span>{error.message}</span>
                        // </div>
                        <Image src={err} className={styles.errImage} alt="" />
                    )
                }
            </div>

        )
    }

    return (
        <div className={`${styles.formInputContainer} ${className}`}>
            <label className={styles.formLabel} htmlFor={id}>{label}</label>
            <input
                className={`${styles.formInput} ${error && styles.inputError}`}
                type={type}
                id={id}
                autoComplete={autoComplete}
                inputMode={inputMode}
                {...register(id)}
                tabIndex={tabIndex}
            />
            {
                error && (
                    // <div className={styles.inputErrorContainer} role="alert">
                    //     <IconAlertCircle  stroke={2.5} size={15} />
                    //     <span>{error.message}</span>
                    // </div>
                    <Image src={err} className={styles.errImage} alt="" />
                )
            }
        </div>

    )
}
