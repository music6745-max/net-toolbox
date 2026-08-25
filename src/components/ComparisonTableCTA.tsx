"use client";
import { onTrackedLinkClick, trackEvent } from "@/lib/tracking";

interface ServiceRow {
  name: string;
  url: string;
  highlight: string;
  price: string;
  badge?: string;
}

interface ComparisonTableCTAProps {
  services: ServiceRow[];
  /** Page identifier for GA4 event grouping (guide slug etc.) */
  page?: string;
  /** Distinguishes repeated CTA blocks on the same page in GA4. */
  positionPrefix?: string;
}

export function ComparisonTableCTA({
  services,
  page,
  positionPrefix = "comparison_table",
}: ComparisonTableCTAProps) {
  if (process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== "false") {
    return null;
  }

  const isInternalUrl = (url: string) => url.startsWith("/");
  const onCtaClick = (svc: ServiceRow, position: string) => {
    if (!isInternalUrl(svc.url)) {
      return onTrackedLinkClick({
        page,
        position,
        service: svc.name,
        href: svc.url,
      });
    }

    return () => {
      trackEvent("internal_cta_click", {
        page,
        position,
        service: svc.name,
        url: svc.url.slice(0, 200),
      });
    };
  };

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 text-left font-bold">サービス名</th>
              <th className="p-3 text-left font-bold">特徴</th>
              <th className="p-3 text-left font-bold">料金目安</th>
              <th className="p-3 text-center font-bold w-40">申し込み</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc, i) => (
              <tr
                key={svc.name}
                className={
                  i % 2 === 0
                    ? "bg-card-bg"
                    : "bg-blue-50/50 dark:bg-blue-900/10"
                }
              >
                <td className="p-4 border-b border-card-border">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{svc.name}</span>
                    {svc.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 whitespace-nowrap">
                        {svc.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4 border-b border-card-border text-muted dark:text-zinc-200">
                  {svc.highlight}
                </td>
                <td className="p-4 border-b border-card-border font-medium whitespace-nowrap dark:text-zinc-200">
                  {svc.price}
                </td>
                <td className="p-4 border-b border-card-border text-center">
                  <a
                    href={svc.url}
                    target={isInternalUrl(svc.url) ? undefined : "_blank"}
                    rel={
                      isInternalUrl(svc.url)
                        ? undefined
                        : "nofollow sponsored noopener noreferrer"
                    }
                    onClick={onCtaClick(svc, `${positionPrefix}_${i + 1}`)}
                    data-analytics-tracked="true"
                    className="inline-block bg-primary text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-primary-hover transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    申し込む
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {services.map((svc, i) => (
          <div
            key={svc.name}
            className="bg-card-bg border border-card-border rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold">{svc.name}</span>
              {svc.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  {svc.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-muted mb-2">{svc.highlight}</p>
            <p className="text-sm font-medium mb-3">{svc.price}</p>
            <a
              href={svc.url}
              target={isInternalUrl(svc.url) ? undefined : "_blank"}
              rel={
                isInternalUrl(svc.url)
                  ? undefined
                  : "nofollow sponsored noopener noreferrer"
              }
              onClick={onCtaClick(svc, `${positionPrefix}_mobile_${i + 1}`)}
              data-analytics-tracked="true"
              className="block text-center bg-primary text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-primary-hover transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              申し込む
            </a>
          </div>
        ))}
      </div>

      {/* Disclosure */}
      <p className="text-xs text-muted mt-3 text-center">
        ※ PR・広告を含みます
      </p>
    </div>
  );
}
