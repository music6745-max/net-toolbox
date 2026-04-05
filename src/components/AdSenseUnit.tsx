"use client";

import { useEffect, useRef } from "react";

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical";

interface AdSenseUnitProps {
  slot?: string;
  format?: AdFormat;
  className?: string;
}

/**
 * Manual AdSense display ad unit.
 * Uses in-article or display format for higher revenue than auto-ads alone.
 *
 * When no slot is provided, renders an auto-format responsive ad.
 * Pair with auto-ads (already in layout.tsx head) for maximum coverage.
 */
export function AdSenseUnit({
  slot,
  format = "auto",
  className = "",
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded (adblocker etc.)
    }
  }, []);

  return (
    <div className={`ad-unit my-6 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6483317297217533"
        {...(slot ? { "data-ad-slot": slot } : {})}
        data-ad-format={format === "auto" ? "auto" : format}
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
