"use client";

// Contact form for the /note page. Posts to Web3Forms so messages land in the
// owner's inbox without her email ever appearing in the page, network, or
// console — only the public access key is sent. Name / email / message, with a
// honeypot for spam and a simple sent/error state.

import { useState, type CSSProperties } from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

const ACCESS_KEY = "bf94e6ed-ddb6-462b-8a89-ccfca5afb3de";
const CONFETTI_PIECES = [
  ["-44vw", "-32vh", "240deg", "0.04s"],
  ["-36vw", "-8vh", "-210deg", "0.12s"],
  ["-32vw", "24vh", "260deg", "0.08s"],
  ["-24vw", "-42vh", "-260deg", "0.18s"],
  ["-18vw", "36vh", "220deg", "0.14s"],
  ["-9vw", "-28vh", "-190deg", "0.02s"],
  ["-5vw", "45vh", "280deg", "0.2s"],
  ["8vw", "-42vh", "-230deg", "0.1s"],
  ["14vw", "32vh", "250deg", "0.16s"],
  ["22vw", "-24vh", "-280deg", "0.06s"],
  ["28vw", "44vh", "210deg", "0.22s"],
  ["34vw", "-5vh", "-200deg", "0.14s"],
  ["42vw", "26vh", "270deg", "0.09s"],
  ["46vw", "-32vh", "-250deg", "0.2s"],
  ["-44vw", "40vh", "230deg", "0.24s"],
  ["44vw", "42vh", "-220deg", "0.26s"],
  ["-30vw", "-45vh", "290deg", "0.05s"],
  ["30vw", "-45vh", "-270deg", "0.11s"],
  ["-16vw", "10vh", "200deg", "0.17s"],
  ["18vw", "12vh", "-240deg", "0.03s"],
] as const;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-paper py-3 pr-4 pl-11 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-ink/35";

const iconClass =
  "pointer-events-none absolute left-4 size-4 text-ink-soft/70";

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
      <div className="py-1">
        <div aria-hidden className="confetti-burst">
          {CONFETTI_PIECES.map(([x, y, rotation, delay], index) => (
            <span
              key={index}
              style={
                {
                  "--confetti-x": x,
                  "--confetti-y": y,
                  "--confetti-rotation": rotation,
                  "--confetti-delay": delay,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Thank you!
          </h3>
          <p className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
            Your message is on its way, and it&apos;ll land straight in my
            inbox. I&apos;ll take care of it right away, whether that&apos;s
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
          <div className="relative">
            <FiUser
              aria-hidden
              className={`${iconClass} top-1/2 -translate-y-1/2`}
            />
            <input
              id="cf-name"
              name="name"
              required
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <div className="relative">
            <FiMail
              aria-hidden
              className={`${iconClass} top-1/2 -translate-y-1/2`}
            />
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
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <div className="relative">
          <FiMessageSquare aria-hidden className={`${iconClass} top-3.5`} />
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            placeholder="Your long sweet message <3"
            className={`${fieldClass} resize-y`}
          />
        </div>
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
