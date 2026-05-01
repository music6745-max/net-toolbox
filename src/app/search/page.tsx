import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/lib/tools";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: `検索｜${siteConfig.name}`,
  description: `${siteConfig.name}でツールやガイド記事を検索できます。`,
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-10 text-center text-muted">検索中...</div>}>
      <SearchClient />
    </Suspense>
  );
}
