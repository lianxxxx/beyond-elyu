"use client";

// Contact form for the /note page. Posts to Web3Forms so messages land in the
// owner's inbox without her email ever appearing in the page, network, or
// console — only the public access key is sent. Name / email / message, with a
// honeypot for spam and a simple sent/error state.

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ACCESS_KEY = "bf94e6ed-ddb6-462b-8a89-ccfca5afb3de";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-ink/35";

const labelClass =
  "mb-2 block font-body text-eyebrow font-medium uppercase tracking-[0.14em] text-ink/70";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from beyond elyu");
    data.append("from_name", "beyond elyu");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div>
        <p className="font-body text-sm leading-relaxed text-ink-soft">
          Thank you, your message is on its way, and it&apos;ll land straight in
          my inbox. I&apos;ll take care of it right away, whether that&apos;s
          fixing a credit or taking a photo down.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex cursor-pointer items-center rounded-full bg-black px-5 py-2 font-body text-sm font-medium text-cream transition-opacity hover:opacity-90"
        >
          Send another issue
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, catches bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            placeholder="Your email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Your long sweet message <3"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-black px-5 py-2 font-body text-sm font-medium text-cream transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send me your issues"}
          <FiArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
        {status === "error" && (
          <span className="font-body text-sm text-terracotta">
            Something went wrong — please try again.
          </span>
        )}
      </div>
    </form>
  );
}
