"use client";

import { useEffect, useRef } from "react";

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical";

interface AdSenseUnitProps {
  /** AdSense data-ad-slot ID. Pass "0000000000" as a placeholder until real slots are issued. */
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
 * Display is gated by NEXT_PUBLIC_ADSENSE_ENABLED. When the env var is unset
 * or not "true", a dark-mode-friendly placeholder is rendered (or nothing in
 * production). After AdSense approval, set NEXT_PUBLIC_ADSENSE_ENABLED=true
 * and replace placeholder slot IDs.
 */
export function AdSenseUnit({
  adSlot,
  slot,
  adFormat = "auto",
  format,
  className = "",
}: AdSenseUnitProps) {
  const resolvedSlot = adSlot ?? slot;
  const resolvedFormat: AdFormat = adFormat ?? format ?? "auto";
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    if (pushed.current) return;
    try {
      const adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded (adblocker etc.)
    }
  }, [enabled]);

  if (!enabled) {
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
