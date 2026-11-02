// Home FAQ: the same questions as the home page's FAQ schema, shown on the page.

import { FaqList } from "@/components/guide/faq-list";
import { FAQ } from "@/lib/structured-data";

export function HomeFaq() {
  return (
    <section aria-labelledby="faq-heading" className="px-gutter pb-bay">
      <div className="mx-auto max-w-6xl">
        <h2
          id="faq-heading"
          className="font-display text-headline font-semibold tracking-tight text-ink"
        >
          Quick answers
        </h2>
        <FaqList
          faq={FAQ}
          className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2"
        />
      </div>
    </section>
  );
}
