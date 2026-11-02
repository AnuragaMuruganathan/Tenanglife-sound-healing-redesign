"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { contact } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Fields = { first: string; last: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { first: "", last: "", email: "", message: "" };

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (!f.first.trim()) errors.first = "Please add your first name.";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) errors.email = "Please enter a valid email.";
  if (f.message.trim().length < 5) errors.message = "Tell us a little about what you need.";
  return errors;
}

function compose(f: Fields) {
  const name = `${f.first} ${f.last}`.trim();
  return `Hi TenangLife, I'm ${name} (${f.email.trim()}).\n\n${f.message.trim()}`;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(compose(fields))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent("Sound healing enquiry")}&body=${encodeURIComponent(
    fields.message ? compose(fields) : "",
  )}`;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-[2.3em] gap-y-[1.1em] sm:grid-cols-2">
      <Field label="First name" name="first" autoComplete="given-name" value={fields.first} onChange={update("first")} error={errors.first} required />
      <Field label="Last name" name="last" autoComplete="family-name" value={fields.last} onChange={update("last")} />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={fields.email}
        onChange={update("email")}
        error={errors.email}
        required
        className="sm:col-span-2"
      />
      <Field label="Your message" name="message" textarea value={fields.message} onChange={update("message")} error={errors.message} required className="sm:col-span-2" />

      <div className="flex flex-wrap items-center gap-x-[1.8em] gap-y-3 pt-[0.6em] sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center gap-[0.75em] rounded-full bg-pine-btn px-[1.8em] py-[0.75em] font-medium text-white transition-colors hover:bg-pine"
        >
          <WhatsAppIcon className="size-[1.15em]" />
          Send via WhatsApp
          <ArrowRight className="ml-[0.4em] size-[1.1em]" aria-hidden />
        </button>
        <a href={emailHref} className="inline-flex min-h-11 items-center text-pine underline decoration-pine/40 underline-offset-[0.35em] transition-colors hover:text-pine-btn">
          or send by email
        </a>
      </div>
      <p aria-live="polite" className="-mt-[0.4em] text-[0.85em] text-pine sm:col-span-2">
        {sent ? "Thank you. WhatsApp has opened in a new tab with your message ready to send." : ""}
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof Fields;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  type?: string;
  autoComplete?: string;
  className?: string;
};

function Field({ label, name, value, onChange, error, required, textarea, type = "text", autoComplete, className = "" }: FieldProps) {
  const id = `contact-${name}`;
  const errId = `${id}-error`;
  const base =
    "w-full border-0 border-b-[1.5px] bg-transparent px-0 pb-[0.4em] pt-[0.3em] text-base text-[#2b1a10] transition-[border-color,background-color,box-shadow] focus:outline-none focus-visible:bg-pine/5 focus-visible:shadow-[inset_0_-2px_0_var(--color-pine)] xl:text-[1em]";
  const tone = error ? "border-[#c2563a]" : "border-[#93b6b9] focus:border-pine";
  const shared = {
    id,
    name,
    value,
    onChange,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    className: `${base} ${tone}`,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[#2b1a10]">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      {textarea ? <textarea rows={3} autoComplete="off" {...shared} className={`${shared.className} resize-none`} /> : <input type={type} autoComplete={autoComplete} {...shared} />}
      {error && (
        <p id={errId} className="mt-1.5 text-[0.8em] text-[#b0482c]">
          {error}
        </p>
      )}
    </div>
  );
}
