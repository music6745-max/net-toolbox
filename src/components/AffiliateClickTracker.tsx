"use client";

import { useEffect } from "react";
import {
  fallbackOfferIdFromUrl,
  providerFromUrl,
  shouldTrackDelegatedAffiliateClick,
  trackLinkClick,
} from "@/lib/tracking";

/**
 * Fallback tracking for legacy/static affiliate anchors that do not use one of
 * the site's explicitly instrumented CTA components.
 */
export function AffiliateClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;

      const anchor = event.target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const explicitlyTracked = anchor.dataset.analyticsTracked === "true";
      if (!shouldTrackDelegatedAffiliateClick(anchor.href, explicitlyTracked)) {
        return;
      }

      trackLinkClick({
        page: window.location.pathname,
        position: anchor.dataset.analyticsPosition ?? "delegated_affiliate_link",
        service: anchor.dataset.analyticsService,
        offer_id:
          anchor.dataset.offerId ?? fallbackOfferIdFromUrl(anchor.href),
        provider: providerFromUrl(anchor.href),
        status: anchor.dataset.offerStatus,
        href: anchor.href,
      });
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
