"use client";

import { getOffer } from "@/lib/offers";
import { providerFromUrl, trackLinkClick } from "@/lib/tracking";

interface AffiliateCTAProps {
  serviceName: string;
  url: string;
  description: string;
  badge?: string;
  color: "green" | "blue" | "purple" | "red" | "orange" | "yellow" | "indigo";
  page?: string;
  position?: string;
}

function offerIdFromGoUrl(url: string): string | undefined {
  const match = url.match(/^\/go\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function currentPage(page?: string): string {
  if (page) return page;
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

const colorStyles: Record<
  string,
  {
    border: string;
    badge: string;
    button: string;
    glow: string;
    accent: string;
  }
> = {
  green: {
    border:
      "border-green-200 dark:border-green-800",
    badge:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    button:
      "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400",
    glow: "shadow-green-200/50 dark:shadow-green-900/30",
    accent: "text-green-600 dark:text-green-400",
  },
  blue: {
    border:
      "border-blue-200 dark:border-blue-800",
    badge:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    button:
      "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",
    glow: "shadow-blue-200/50 dark:shadow-blue-900/30",
    accent: "text-blue-600 dark:text-blue-400",
  },
  purple: {
    border:
      "border-purple-200 dark:border-purple-800",
    badge:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    button:
      "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400",
    glow: "shadow-purple-200/50 dark:shadow-purple-900/30",
    accent: "text-purple-600 dark:text-purple-400",
  },
  red: {
    border:
      "border-red-200 dark:border-red-800",
    badge:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    button:
      "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400",
    glow: "shadow-red-200/50 dark:shadow-red-900/30",
    accent: "text-red-600 dark:text-red-400",
  },
  orange: {
    border:
      "border-orange-200 dark:border-orange-800",
    badge:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    button:
      "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400",
    glow: "shadow-orange-200/50 dark:shadow-orange-900/30",
    accent: "text-orange-600 dark:text-orange-400",
  },
  yellow: {
    border:
      "border-yellow-200 dark:border-yellow-800",
    badge:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    button:
      "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-400",
    glow: "shadow-yellow-200/50 dark:shadow-yellow-900/30",
    accent: "text-yellow-600 dark:text-yellow-400",
  },
  indigo: {
    border:
      "border-indigo-200 dark:border-indigo-800",
    badge:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    button:
      "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400",
    glow: "shadow-indigo-200/50 dark:shadow-indigo-900/30",
    accent: "text-indigo-600 dark:text-indigo-400",
  },
};

export function AffiliateCTA({
  serviceName,
  url,
  description,
  badge,
  color,
  page,
  position = "affiliate_cta",
}: AffiliateCTAProps) {
  if (process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== "false") {
    return null;
  }

  const styles = colorStyles[color] || colorStyles.blue;
  const offerId = offerIdFromGoUrl(url);
  const offer = offerId ? getOffer(offerId) : undefined;
  const trackedUrl = offer?.affiliate_url ?? url;
  const provider =
    offer?.provider === "direct" ? "direct" : providerFromUrl(trackedUrl);
  const onClick = () => {
    trackLinkClick({
      page: currentPage(page),
      position,
      service: offer?.service ?? serviceName,
      offer_id: offer?.id ?? offerId,
      provider,
      status: offer?.status,
      href: trackedUrl,
    });
  };

  return (
    <div
      className={`relative border-2 ${styles.border} rounded-2xl p-6 bg-card-bg shadow-lg ${styles.glow} transition-shadow hover:shadow-xl`}
    >
      {/* Top accent bar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-bold ${styles.accent}`}>{serviceName}</h3>
        {badge && (
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${styles.badge}`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5">{description}</p>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href={url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={onClick}
          className={`inline-block ${styles.button} text-white px-10 py-4 rounded-full text-base font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
        >
          公式サイトで詳細を見る &rarr;
        </a>
      </div>

      {/* Disclosure */}
      <p className="text-center text-xs text-muted mt-4">
        ※ PR・広告を含みます
      </p>
    </div>
  );
}
