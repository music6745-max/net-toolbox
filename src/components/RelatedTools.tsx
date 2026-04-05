"use client";

import Link from "next/link";
import { tools, type Tool } from "@/lib/tools";
import { AdSenseUnit } from "@/components/AdSenseUnit";

export function RelatedTools({ currentSlug, category }: { currentSlug: string; category: string }) {
  const sameCategoryTools = tools.filter(
    (t) => t.category === category && t.slug !== currentSlug
  );

  const related = sameCategoryTools.length >= 6
    ? sameCategoryTools.slice(0, 6)
    : [
        ...sameCategoryTools,
        ...tools
          .filter((t) => t.category !== category && t.slug !== currentSlug)
          .slice(0, 6 - sameCategoryTools.length),
      ];

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
    </section>
  );
}
