"use client";

import { useEffect, useRef } from "react";
import { trackEvent, trackLinkClick } from "@/lib/tracking";

type ExperimentOfferCardProps = {
  experimentId: string;
  variant: string;
  eligibleKey: string | number;
  page: string;
  position: string;
  service: string;
  offerId: string;
  provider: string;
  href: string;
  title: string;
  description: string;
  buttonLabel: string;
  disclosure: string;
};

export function ExperimentOfferCard({
  experimentId,
  variant,
  eligibleKey,
  page,
  position,
  service,
  offerId,
  provider,
  href,
  title,
  description,
  buttonLabel,
  disclosure,
}: ExperimentOfferCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const target = cardRef.current;
    viewedRef.current = false;
    trackEvent("experiment_eligible", {
      experiment_id: experimentId,
      experiment_variant: variant,
      page,
      position,
      offer_id: offerId,
    });

    if (!target) return;

    let visibleTimer: ReturnType<typeof setTimeout> | undefined;
    const recordView = () => {
      if (viewedRef.current) return;
      viewedRef.current = true;
      const params = {
        experiment_id: experimentId,
        experiment_variant: variant,
        page,
        position,
        service,
        offer_id: offerId,
        provider,
        status: "active",
        source_campaign:
          new URLSearchParams(window.location.search).get("utm_campaign") ??
          "direct_or_organic",
      };
      trackEvent("offer_view", params);
      trackEvent("experiment_view", params);
    };

    if (!("IntersectionObserver" in window)) {
      recordView();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.25,
        );
        if (visible && !visibleTimer) {
          visibleTimer = setTimeout(() => {
            recordView();
            observer.disconnect();
          }, 1000);
        } else if (!visible && visibleTimer) {
          clearTimeout(visibleTimer);
          visibleTimer = undefined;
        }
      },
      { threshold: [0.25] },
    );
    observer.observe(target);

    return () => {
      if (visibleTimer) clearTimeout(visibleTimer);
      observer.disconnect();
    };
  }, [eligibleKey, experimentId, offerId, page, position, provider, service, variant]);

  const handleClick = () => {
    const sourceCampaign =
      new URLSearchParams(window.location.search).get("utm_campaign") ??
      "direct_or_organic";
    trackLinkClick({
      page,
      position,
      service,
      offer_id: offerId,
      provider,
      status: "active",
      href,
    });
    trackEvent("experiment_click", {
      experiment_id: experimentId,
      experiment_variant: variant,
      page,
      position,
      service,
      offer_id: offerId,
      provider,
      source_campaign: sourceCampaign,
    });
  };

  return (
    <div
      ref={cardRef}
      data-experiment-id={experimentId}
      data-experiment-variant={variant}
      className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-5"
    >
      <p className="font-bold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={handleClick}
        data-analytics-tracked="true"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </a>
      <p className="mt-2 text-[11px] leading-relaxed text-muted">{disclosure}</p>
    </div>
  );
}
