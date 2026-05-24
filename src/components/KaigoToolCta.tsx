"use client";

import { trackEvent } from "@/lib/tracking";

type CtaLink = {
  label: string;
  href: string;
  eventName: string;
  position: string;
  variant?: "primary" | "secondary";
};

export function KaigoToolCta({
  toolSlug,
  title,
  description,
  links,
}: {
  toolSlug: string;
  title: string;
  description: string;
  links: CtaLink[];
}) {
  return (
    <section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={`${link.eventName}-${link.position}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent(link.eventName, {
                page: toolSlug,
                position: link.position,
                url: link.href.slice(0, 200),
              })
            }
            className={
              link.variant === "primary"
                ? "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary-hover"
                : "inline-flex items-center justify-center rounded-lg border border-card-border bg-card-bg px-4 py-3 text-sm font-bold hover:border-primary/40"
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
