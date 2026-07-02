"use client";

// The takedown line plus a playful gate before the contact form on /note.
// The "just click this" trigger is an inline text link (underline + arrow) at
// the end of the sentence; a cheeky "are you sure?" (yes / no) drops in below,
// and yes reveals the form.

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ContactForm } from "@/components/contact-form";

type Step = "idle" | "asking" | "no" | "yes";

export function ReachOut() {
  const [step, setStep] = useState<Step>("idle");

  return (
    <div className="mt-5 max-w-[60ch]">
      <p className="font-body text-base leading-relaxed text-ink-soft">
        If you own a photo used here and want the credit corrected or the image
        taken down, that&apos;s completely fine.{" "}
        <span className="font-semibold italic text-ink">
          Just reach out and I&apos;ll sort it right away.
        </span>{" "}
        {step === "idle" && (
          <button
            type="button"
            onClick={() => setStep("asking")}
            className="group inline-flex cursor-pointer items-center gap-0.5 align-middle font-body text-base font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
          >
            Just click this
            <FiArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            />
          </button>
        )}
      </p>

      {step === "asking" && (
        <div className="mt-4 rounded-2xl border border-ink/12 bg-card p-6">
          <p className="font-body text-sm leading-relaxed text-ink-soft">
            Wait… are you sure? Nothing you wanna change your mind?
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStep("yes")}
              className="inline-flex cursor-pointer items-center rounded-full bg-black px-5 py-2 font-body text-sm font-medium text-cream transition-opacity hover:opacity-90"
            >
              Yep, I&apos;m sure
            </button>
            <button
              type="button"
              onClick={() => setStep("no")}
              className="cursor-pointer font-body text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
            >
              Never mind
            </button>
          </div>
        </div>
      )}

      {step === "no" && (
        <div className="mt-4 rounded-2xl border border-ink/12 bg-card p-6">
          <p className="font-body text-sm leading-relaxed text-ink-soft">
            YES!! Less work for me then. JK! The form&apos;s right here if you
            ever change your mind.
          </p>
          <button
            type="button"
            onClick={() => setStep("asking")}
            className="mt-4 inline-flex cursor-pointer items-center rounded-full bg-black px-5 py-2 font-body text-sm font-medium text-cream transition-opacity hover:opacity-90"
          >
            Ok fine, let me reach out
          </button>
        </div>
      )}

      {step === "yes" && (
        <div className="mt-8 rounded-2xl border border-ink/10 bg-sea-mist/10 p-6 sm:p-8">
          <ContactForm />
        </div>
      )}
    </div>
  );
}
