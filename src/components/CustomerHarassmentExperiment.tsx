"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { trackEvent, trackLinkClick } from "@/lib/tracking";

export const CUSTOMER_HARASSMENT_EXPERIMENT_ID =
  "opp_customer_harassment_kit";

const PAGE = "/services/customer-harassment-kit";
const OFFER_ID = "customer_harassment_operations_kit_19800";
const SERVICE = "カスタマーハラスメント対策 運用スタートキット";
const PRICE_YEN = 19800;
let eligibleRecorded = false;

const inquirySubject = `【${CUSTOMER_HARASSMENT_EXPERIMENT_ID}】運用キットの相談`;
const inquiryBody = [
  "カスタマーハラスメント対策 運用スタートキットについて相談します。",
  "",
  "業種：",
  "従業員数の範囲：",
  "拠点数：",
  "希望納期：",
  "既存の方針・相談窓口（あり／なし）：",
  "",
  "※初回メールには、顧客・従業員の氏名や実際の事案の詳細など、個人情報を記載しないでください。",
].join("\n");

export const CUSTOMER_HARASSMENT_INQUIRY_HREF = `mailto:contact@net-toolbox.jp?subject=${encodeURIComponent(
  inquirySubject,
)}&body=${encodeURIComponent(inquiryBody)}`;

type LandingLinkProps = {
  position: string;
  className?: string;
  children: ReactNode;
};

export function CustomerHarassmentLandingLink({
  position,
  className,
  children,
}: LandingLinkProps) {
  const href = `${PAGE}?utm_source=net-toolbox&utm_medium=internal&utm_campaign=${CUSTOMER_HARASSMENT_EXPERIMENT_ID}&utm_content=${encodeURIComponent(
    position,
  )}`;

  const handleClick = () => {
    trackLinkClick({
      page: window.location.pathname,
      position,
      service: SERVICE,
      offer_id: OFFER_ID,
      provider: "internal",
      status: "active",
      href,
    });
    trackEvent("experiment_click", {
      experiment_id: CUSTOMER_HARASSMENT_EXPERIMENT_ID,
      experiment_variant: "v1_fixed_price_19800",
      page: window.location.pathname,
      position,
      action: "view_offer",
      offer_id: OFFER_ID,
      price_yen: PRICE_YEN,
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      data-analytics-tracked="true"
      data-experiment-id={CUSTOMER_HARASSMENT_EXPERIMENT_ID}
      className={className}
    >
      {children}
    </a>
  );
}

type InquiryCtaProps = {
  position: "hero" | "final";
  label: string;
};

export function CustomerHarassmentInquiryCta({
  position,
  label,
}: InquiryCtaProps) {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const target = ctaRef.current;
    viewedRef.current = false;

    if (!eligibleRecorded) {
      eligibleRecorded = true;
      trackEvent("experiment_eligible", {
        experiment_id: CUSTOMER_HARASSMENT_EXPERIMENT_ID,
        experiment_variant: "v1_fixed_price_19800",
        page: PAGE,
        position,
        offer_id: OFFER_ID,
        price_yen: PRICE_YEN,
      });
    }

    if (!target) return;

    let visibleTimer: ReturnType<typeof setTimeout> | undefined;
    const recordView = () => {
      if (viewedRef.current) return;
      viewedRef.current = true;
      const params = {
        experiment_id: CUSTOMER_HARASSMENT_EXPERIMENT_ID,
        experiment_variant: "v1_fixed_price_19800",
        page: PAGE,
        position,
        service: SERVICE,
        offer_id: OFFER_ID,
        price_yen: PRICE_YEN,
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
  }, [position]);

  const handleClick = () => {
    const sourceCampaign =
      new URLSearchParams(window.location.search).get("utm_campaign") ??
      "direct_or_organic";
    const params = {
      experiment_id: CUSTOMER_HARASSMENT_EXPERIMENT_ID,
      experiment_variant: "v1_fixed_price_19800",
      page: PAGE,
      position,
      service: SERVICE,
      offer_id: OFFER_ID,
      price_yen: PRICE_YEN,
      source_campaign: sourceCampaign,
    };
    trackEvent("experiment_click", params);
    trackEvent("service_inquiry_start", params);
  };

  return (
    <div
      ref={ctaRef}
      data-experiment-id={CUSTOMER_HARASSMENT_EXPERIMENT_ID}
      data-experiment-variant="v1_fixed_price_19800"
    >
      <a
        href={CUSTOMER_HARASSMENT_INQUIRY_HREF}
        onClick={handleClick}
        data-analytics-tracked="true"
        className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
      >
        {label}
      </a>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        メール作成画面が開きます。問い合わせだけでは契約・課金は発生しません。
      </p>
    </div>
  );
}

