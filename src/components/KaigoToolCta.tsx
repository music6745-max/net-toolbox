"use client";

import { trackEvent } from "@/lib/tracking";

export type CtaLink = {
  label: string;
  href: string;
  eventName: string;
  position: string;
  variant?: "primary" | "secondary";
};

function boothContent(position: string) {
  if (position.includes("full")) return "full_pack";
  if (position.includes("starter") || position.includes("pack")) return "starter_pack";
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

// 自社出版のKindle電子書籍（販売中のみ）への相互送客。シナジー追及新事業 A-5。
// 遠距離・見守り系ツールはK05へ、通院・入退院・医療連携系はK04へ、それ以外はK01へ寄せる。
const KINDLE_MEDICAL = "B0GXH1FSX1"; // K04 親の通院・入退院 情報整理ノート
const KINDLE_GENERAL = "B0H3R2S5C9"; // K01 親の介護とお金 はじめの一歩
const KINDLE_DISTANCE = "B0H3Y4CVHY"; // K05 遠距離介護の段取りノート
const MEDICAL_SLUG = /hospital|discharge|clinic|doctor|pharmacy|medicine|medical|certification|care-manager|short-stay|day-service|fall|meal-water-weight/;
const DISTANCE_SLUG = /distance-care|monitoring/;

function kindleHref(toolSlug: string) {
  const asin = DISTANCE_SLUG.test(toolSlug)
    ? KINDLE_DISTANCE
    : MEDICAL_SLUG.test(toolSlug)
      ? KINDLE_MEDICAL
      : KINDLE_GENERAL;
  const label =
    asin === KINDLE_DISTANCE
      ? "Kindle版『遠距離介護の段取りノート』"
      : asin === KINDLE_MEDICAL
        ? "Kindle版『親の通院・入退院 情報整理ノート』"
        : "Kindle版『親の介護とお金 はじめの一歩』";
  const href = `https://www.amazon.co.jp/dp/${asin}?utm_source=net-toolbox&utm_medium=tool&utm_campaign=${encodeURIComponent(
    toolSlug,
  )}&utm_content=kindle`;
  return { href, label };
}

export function getKaigoKindleLink(toolSlug: string): CtaLink {
  const { href, label } = kindleHref(toolSlug);
  return {
    label,
    href,
    eventName: "kindle_click",
    position: "kindle_cross_referral",
  };
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
  const withFullPack =
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
  const ctaLinks =
    toolSlug.startsWith("kaigo-") && !withFullPack.some((link) => link.href.includes("amazon.co.jp"))
      ? [
          ...withFullPack,
          getKaigoKindleLink(toolSlug),
        ]
      : withFullPack;

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
