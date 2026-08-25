// Unified affiliate/CTA click tracking for GA4.
// Works as a no-op if gtag isn't loaded, so it's safe to use in any component.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

export type TrackedLinkEvent =
  | "affiliate_click"
  | "outbound_click"
  | "internal_referral_click"
  | "internal_cta_click";

export interface TrackedLinkParams {
  page?: string;
  position?: string;
  service?: string;
  href: string;
  offer_id?: string;
  provider?: string;
  status?: string;
}

const SISTER_SITE_HOSTS = ["ai-tools-navi.jp", "toshi-navi.jp"];
const SELF_SITE_HOSTS = new Set(["net-toolbox.jp", "www.net-toolbox.jp"]);

const AFFILIATE_HOSTS = [
  "px.a8.net",
  "af.moshimo.com",
  "hb.afl.rakuten.co.jp",
  "vc.aforest.jp",
  "ck.jp.ap.valuecommerce.com",
  "ad.jp.ap.valuecommerce.com",
  "h.accesstrade.net",
  "track.affiliate-b.com",
  "t.afi-b.com",
  "click.j-a-net.jp",
  "ad.linksynergy.com",
];

function hostnameFromUrl(url: string): string {
  try {
    return new URL(url, "https://net-toolbox.jp").hostname.toLowerCase();
  } catch {
    return "";
  }
}

function isHostOrSubdomain(hostname: string, expected: string): boolean {
  return hostname === expected || hostname.endsWith(`.${expected}`);
}

/**
 * Classify a tracked destination into the canonical GA4 link funnels.
 * Only known ASP tracking URLs count as affiliate traffic.
 */
export function trackedLinkEventForUrl(url: string): TrackedLinkEvent {
  const hostname = hostnameFromUrl(url);

  if (SISTER_SITE_HOSTS.some((host) => isHostOrSubdomain(hostname, host))) {
    return "internal_referral_click";
  }

  // Relative URLs resolve against the canonical base in hostnameFromUrl.
  // Also accept the canonical host with or without www for absolute URLs.
  if (SELF_SITE_HOSTS.has(hostname)) {
    return "internal_cta_click";
  }

  if (
    AFFILIATE_HOSTS.some((host) => isHostOrSubdomain(hostname, host)) ||
    hostname.includes("valuecommerce")
  ) {
    return "affiliate_click";
  }

  return "outbound_click";
}

/**
 * Fire a GA4 event. Falls back to dataLayer push if gtag isn't present.
 * Safe to call during SSR (no-op).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) {
      window.gtag("event", name, params);
    } else if (window.dataLayer) {
      window.dataLayer.push({ event: name, ...params });
    }
  } catch {
    // Swallow - tracking must never break UX.
  }
}

/**
 * Extract the ASP/affiliate provider from a URL, so we can group events.
 */
export function providerFromUrl(url: string): string {
  if (!url) return "unknown";
  const hostname = hostnameFromUrl(url);
  if (SELF_SITE_HOSTS.has(hostname)) return "internal";
  if (SISTER_SITE_HOSTS.some((host) => isHostOrSubdomain(hostname, host))) {
    return "sister-site";
  }
  const u = url.toLowerCase();
  if (u.includes("px.a8.net")) return "a8net";
  if (u.includes("af.moshimo.com")) return "moshimo";
  if (u.includes("hb.afl.rakuten.co.jp") || u.includes("rakuten.co.jp/rd")) return "rakuten-aff";
  if (u.includes("valuecommerce") || u.includes("vc.aforest.jp")) return "valuecommerce";
  if (u.includes("amazon.co.jp/s?") || u.includes("amazon.co.jp/b?")) return "amazon-search";
  if (u.includes("amazon.co.jp")) return "amazon-direct";
  if (u.includes("sbisec.co.jp")) return "sbi-direct";
  if (u.includes("rakuten-sec.co.jp")) return "rakuten-sec-direct";
  if (u.includes("monex.co.jp")) return "monex-direct";
  if (u.includes("moneyforward.com")) return "mf-direct";
  return "other-direct";
}

/**
 * Build a stable fallback identifier when a direct ASP URL is not registered in
 * the offer master. This keeps delegated clicks attributable without guessing
 * that two ASP links with different query parameters are the same offer.
 */
export function fallbackOfferIdFromUrl(url: string): string | undefined {
  try {
    const provider = providerFromUrl(url);
    const parsed = new URL(url, "https://net-toolbox.jp");
    if (provider === "a8net") {
      const a8mat = parsed.searchParams.get("a8mat");
      return a8mat
        ? `a8mat_${a8mat.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}`
        : "unmapped_a8net";
    }
    if (provider === "moshimo") return "unmapped_moshimo";
    if (provider === "valuecommerce") return "unmapped_valuecommerce";
    if (provider === "rakuten-aff") return "unmapped_rakuten";
    return undefined;
  } catch {
    return undefined;
  }
}

/**
 * Whether the document-level fallback should emit an event for a link.
 * Explicitly instrumented links are excluded to prevent double counting.
 */
export function shouldTrackDelegatedAffiliateClick(
  url: string,
  explicitlyTracked: boolean,
): boolean {
  return !explicitlyTracked && trackedLinkEventForUrl(url) === "affiliate_click";
}

/**
 * Track a monetized, official outbound, same-site CTA, or sister-site click.
 * Existing GA4 dimensions are shared across all link event names.
 */
export function trackLinkClick(params: TrackedLinkParams): void {
  trackEvent(trackedLinkEventForUrl(params.href), {
    page: params.page,
    position: params.position,
    service: params.service,
    offer_id: params.offer_id,
    provider: params.provider ?? providerFromUrl(params.href),
    status: params.status,
    url: params.href.slice(0, 200),
  });
}

export function onTrackedLinkClick(params: TrackedLinkParams) {
  return () => {
    trackLinkClick(params);
  };
}

/**
 * @deprecated Use onTrackedLinkClick. Kept as a compatibility alias so older
 * callers also receive the corrected event classification.
 */
export const onAffiliateClick = onTrackedLinkClick;
