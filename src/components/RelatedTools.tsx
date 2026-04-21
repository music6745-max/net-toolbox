"use client";

import Link from "next/link";
import { tools, type Tool } from "@/lib/tools";
import { AdSenseUnit } from "@/components/AdSenseUnit";

export function RelatedTools({ currentSlug, category }: { currentSlug: string; category: string }) {
  const sameCategoryTools = tools.filter(
    (t) => t.category === category && t.slug !== currentSlug
  );

  // Primary: 12 related tools (up from 6) for improved internal linking / SEO
  const related = sameCategoryTools.length >= 12
    ? sameCategoryTools.slice(0, 12)
    : [
        ...sameCategoryTools,
        ...tools
          .filter((t) => t.category !== category && t.slug !== currentSlug)
          .slice(0, 12 - sameCategoryTools.length),
      ];

  // Secondary: tools grouped by category (for site-wide navigation)
  const byCategory: Record<string, Tool[]> = {};
  tools.forEach((t) => {
    if (t.slug === currentSlug) return;
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  });

  return (
    <section className="mt-10">
      {/* In-content ad between tool output and related tools */}
      <AdSenseUnit format="horizontal" className="my-8" />
      <h2 className="text-lg font-bold mb-4">関連ツール</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span className="text-2xl">{tool.icon}</span>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{tool.name}</div>
              <div className="text-xs text-muted truncate">{tool.description}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          href={`/category/${encodeURIComponent(category)}`}
          className="text-sm text-primary hover:underline"
        >
          「{category}」のツールをすべて見る →
        </Link>
      </div>

      {/* Additional: Category-based site navigation (all sub-category tools) */}
      <div className="mt-10 pt-6 border-t border-card-border">
        <h3 className="text-base font-bold mb-4">🗂️ カテゴリから他のツールを探す</h3>
        <div className="space-y-4">
          {Object.entries(byCategory)
            .filter(([catKey]) => catKey !== category)
            .slice(0, 5)
            .map(([catKey, catTools]) => (
              <div key={catKey}>
                <h4 className="text-xs font-semibold mb-2 text-muted">{catKey}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {catTools.slice(0, 10).map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="text-xs px-2.5 py-1 rounded-full border border-card-border bg-card-bg hover:border-primary/40 hover:bg-primary/5 transition-all"
                    >
                      {t.icon} {t.name.slice(0, 20)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
