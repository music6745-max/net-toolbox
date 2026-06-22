"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  GENRES,
  type Genre,
  type Guide,
  genreOf,
  newSlugs,
  popularSlugs,
} from "./guides.data";

const categoryColors: Record<string, string> = {
  実践ガイド:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  セキュリティ: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  仕事術:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  開発: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  比較: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "副業・税金":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  副業: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  リモートワーク:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

type Props = { guides: Guide[] };

const ALL = "all" as const;

export default function GuideList({ guides }: Props) {
  const [q, setQ] = useState("");
  const [genre, setGenre] = useState<Genre | typeof ALL>(ALL);

  const genreCounts = useMemo(() => {
    const map: Record<string, number> = { [ALL]: guides.length };
    for (const g of guides) {
      const gen = genreOf(g.slug);
      map[gen] = (map[gen] ?? 0) + 1;
    }
    return map;
  }, [guides]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return guides.filter((g) => {
      if (genre !== ALL && genreOf(g.slug) !== genre) return false;
      if (!needle) return true;
      return (
        g.title.toLowerCase().includes(needle) ||
        g.description.toLowerCase().includes(needle) ||
        g.category.toLowerCase().includes(needle)
      );
    });
  }, [guides, q, genre]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ガイドを検索（例: JSON、VPN、クラウド、リモートワーク）"
            aria-label="ガイドを検索"
            className="w-full px-4 py-3 pl-11 rounded-xl bg-card-bg border border-card-border text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setGenre(ALL)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition ${
              genre === ALL
                ? "bg-primary text-white border-primary"
                : "bg-card-bg border-card-border hover:border-primary/50"
            }`}
          >
            すべて
            <span className="ml-1.5 opacity-70 text-xs">
              {genreCounts[ALL]}
            </span>
          </button>
          {GENRES.map((g) => {
            const count = genreCounts[g] ?? 0;
            if (count === 0) return null;
            const active = genre === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGenre(g)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition ${
                  active
                    ? "bg-primary text-white border-primary"
                    : "bg-card-bg border-card-border hover:border-primary/50"
                }`}
              >
                {g}
                <span className="ml-1.5 opacity-70 text-xs">{count}</span>
              </button>
            );
          })}
        </div>

        <p className="text-sm text-muted">
          全<span className="font-bold text-foreground">{guides.length}</span>
          本のガイド
          {(q || genre !== ALL) && (
            <>
              {" "}
              / 表示中{" "}
              <span className="font-bold text-foreground">
                {filtered.length}
              </span>{" "}
              件
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-4xl mb-3">🔍</p>
          <p>該当するガイドが見つかりませんでした。</p>
          <button
            type="button"
            onClick={() => {
              setQ("");
              setGenre(ALL);
            }}
            className="mt-4 text-primary hover:underline text-sm"
          >
            条件をリセット
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((guide) => {
            const isNew = newSlugs.has(guide.slug);
            const isPopular = popularSlugs.has(guide.slug);
            return (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="block bg-card-bg border border-card-border rounded-xl p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">
                    {guide.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          categoryColors[guide.category] ||
                          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {guide.category}
                      </span>
                      {isPopular && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                          人気
                        </span>
                      )}
                      {isNew && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                          NEW
                        </span>
                      )}
                      <span className="text-xs text-muted ml-auto">
                        {guide.readTime}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
