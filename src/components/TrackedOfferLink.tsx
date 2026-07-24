"use client";
import type { ReactNode } from "react";
import { getOffer } from "@/lib/offers";
import { providerFromUrl, trackLinkClick } from "@/lib/tracking";

/**
 * offer master を参照して GA4 にクリックを自動計測するリンクコンポーネント。
 * 使い方:
 *   <TrackedOfferLink offerId="zeirishi-dotcom" page="tool_tax-calculator" position="hero">
 *     税理士ドットコムで無料相談
 *   </TrackedOfferLink>
 */
export function TrackedOfferLink({
  offerId,
  page,
  position,
  className,
  children,
}: {
  offerId: string;
  page?: string;
  position?: string;
  className?: string;
  children: ReactNode;
}) {
  const offer = getOffer(offerId);
  if (!offer) {
    return <span className={className}>{children}</span>;
  }
  const onClick = () => {
    trackLinkClick({
      page: page ?? "",
      position: position ?? "",
      service: offer.service,
      offer_id: offer.id,
      provider: offer.provider === "direct" ? "direct" : providerFromUrl(offer.affiliate_url),
      status: offer.status,
      href: offer.affiliate_url,
    });
  };
  return (
    <a
      href={offer.affiliate_url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onClick}
      className={className}
      data-offer-id={offer.id}
      data-offer-status={offer.status}
    >
      {children}
    </a>
  );
}
