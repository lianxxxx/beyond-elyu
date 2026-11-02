// A visible question and answer list. Shared by the guide pages and the home
// page, so the FAQ schema always matches text people can actually read.
export function FaqList({
  faq,
  className = "",
}: {
  faq: readonly { q: string; a: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {faq.map((item) => (
        <div key={item.q}>
          <dt className="font-body text-base font-semibold text-ink">
            {item.q}
          </dt>
          <dd className="mt-1.5 font-body text-base leading-relaxed text-ink-soft">
            {item.a}
          </dd>
        </div>
      ))}
    </dl>
  );
}
