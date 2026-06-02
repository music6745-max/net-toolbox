"use client";

import { trackEvent } from "@/lib/tracking";

type CtaLink = {
  label: string;
  href: string;
  eventName: string;
  position: string;
  variant?: "primary" | "secondary";
};

function boothContent(position: string) {
  if (position.includes("full")) return "full_pack";
  if (position.includes("starter")) return "starter_pack";
  if (position.includes("cost")) return "cost_template";
  return "single_template";
}

function trackedHref(href: string, toolSlug: string, position: string) {
  if (!href.includes("kaigo-okane.booth.pm") || href.includes("utm_source=")) {
    return href;
  }
  return `${href}${href.includes("?") ? "&" : "?"}utm_source=net-toolbox&utm_medium=tool&utm_campaign=${encodeURIComponent(
    toolSlug,
  )}&utm_content=${boothContent(position)}`;
}

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
  const trackedLinks = links.map((link) => ({
    ...link,
    href: trackedHref(link.href, toolSlug, link.position),
  }));
  const ctaLinks =
    toolSlug.startsWith("kaigo-") && !trackedLinks.some((link) => link.href.includes("/items/8383441"))
      ? [
          ...trackedLinks,
          {
            label: "介護テンプレート総合パックを見る",
            href: trackedHref("https://kaigo-okane.booth.pm/items/8383441", toolSlug, "full_pack"),
            eventName: "booth_click",
            position: "full_pack",
          },
        ]
      : trackedLinks;

  return (
    <section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {ctaLinks.map((link) => (
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
