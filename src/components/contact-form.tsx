"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = (await response.json()) as { message?: string };

    if (response.ok) {
      form.reset();
      setState("success");
      setMessage(result.message ?? "Thanks. Your message has been sent.");
      return;
    }

    setState("error");
    setMessage(result.message ?? "Something went wrong. Please try again.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Darpan">
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
      </div>
      <label>
        <span>What are you working on?</span>
        <textarea name="message" required minLength={10} maxLength={2000} rows={5} />
      </label>
      <label className="form-honeypot" aria-hidden="true">
        <span>Company website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit">
        <button className="button button-light" type="submit" disabled={state === "submitting"}>
          <Send size={18} /> {state === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p>
      </div>
    </form>
  );
}