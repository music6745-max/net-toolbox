"use client";

import { useEffect, useRef } from "react";

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical";

interface AdSenseUnitProps {
  /** AdSense data-ad-slot ID. Leave unset until real slots are issued. */
  adSlot?: string;
  /** Legacy alias for adSlot. */
  slot?: string;
  adFormat?: AdFormat;
  /** Legacy alias for adFormat. */
  format?: AdFormat;
  className?: string;
}

/**
 * AdSense display ad unit (pub-6483317297217533).
 *
 * Display is gated by NEXT_PUBLIC_ADSENSE_ENABLED and a real ad slot. When
 * either is missing, a dark-mode-friendly placeholder is rendered in
 * development and nothing is rendered in production.
 */
export function AdSenseUnit({
  adSlot,
  slot,
  adFormat = "auto",
  format,
  className = "",
}: AdSenseUnitProps) {
  const rawSlot = adSlot ?? slot;
  const resolvedSlot = rawSlot && rawSlot !== "0000000000" ? rawSlot : undefined;
  const resolvedFormat: AdFormat = adFormat ?? format ?? "auto";
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  const shouldRenderAd = enabled && Boolean(resolvedSlot);

  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!shouldRenderAd) return;
    if (pushed.current) return;
    try {
      const adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded (adblocker etc.)
    }
  }, [shouldRenderAd]);

  if (!shouldRenderAd) {
    if (process.env.NODE_ENV === "production") return null;
    return (
      <div
        className={`ad-unit my-6 flex justify-center ${className}`}
        aria-hidden="true"
      >
        <div className="w-full max-w-2xl rounded-lg border border-dashed border-card-border bg-card-bg/40 dark:bg-card-bg/30 px-4 py-8 text-center text-xs text-muted">
          [広告枠 / AdSense {resolvedSlot ?? "auto"}]
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-unit my-6 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6483317297217533"
        {...(resolvedSlot ? { "data-ad-slot": resolvedSlot } : {})}
        data-ad-format={resolvedFormat === "auto" ? "auto" : resolvedFormat}
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
