"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@/components/ui/Icon";

type FormState = {
  name: string;
  email: string;
  subject: string;
  comments: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMAILJS_SERVICE_ID = "service_lo4nf2w";
const EMAILJS_TEMPLATE_ID = "template_l1040l8";
const EMAILJS_PUBLIC_KEY = "Pya1Xl3RFUMeKD17w";

const initialState: FormState = { name: "", email: "", subject: "", comments: "" };

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.comments.trim()) errors.comments = "Please enter your message.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: values.subject,
          name: values.name,
          time: new Date().toLocaleString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          }),
          message: values.comments,
          email: values.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setValues(initialState);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby="form-status">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <div className="relative">
            <Icon
              name="user"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              placeholder="Enter your name*"
              aria-invalid={Boolean(errors.name)}
              className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-3 text-sm transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <Icon
              name="email"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="Enter your email*"
              aria-invalid={Boolean(errors.email)}
              className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-3 text-sm transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <div className="relative">
          <Icon
            name="document"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          />
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange("subject")}
            placeholder="Subject"
            aria-invalid={Boolean(errors.subject)}
            className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-3 text-sm transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="comments" className="sr-only">
          Message
        </label>
        <div className="relative">
          <Icon
            name="message"
            className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted"
          />
          <textarea
            id="comments"
            name="comments"
            rows={4}
            value={values.comments}
            onChange={handleChange("comments")}
            placeholder="Enter your message*"
            aria-invalid={Boolean(errors.comments)}
            className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-3 text-sm transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        {errors.comments && <p className="mt-1 text-xs text-red-600">{errors.comments}</p>}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div id="form-status" aria-live="polite" className="text-sm">
          {status === "sent" && (
            <p className="text-green-600">Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              Something went wrong. Please try again or reach us directly.
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
