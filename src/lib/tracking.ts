// Unified affiliate/CTA click tracking for GA4.
// Works as a no-op if gtag isn't loaded, so it's safe to use in any component.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

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
 * Common handler for affiliate click events.
 * Attach to <a onClick={onAffiliateClick(...)}>.
 */
export function onAffiliateClick(params: {
  page?: string;
  position?: string;
  service?: string;
  href: string;
}) {
  return () => {
    trackEvent("affiliate_click", {
      page: params.page,
      position: params.position,
      service: params.service,
      provider: providerFromUrl(params.href),
      url: params.href.slice(0, 200),
    });
  };
}
