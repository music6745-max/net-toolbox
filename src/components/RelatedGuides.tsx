"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/lib/tools";

type Guide = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

const guidesByCategory: Record<string, Guide[]> = {
  "セキュリティ": [
    {
      slug: "vpn-comparison",
      title: "【2026年】VPNおすすめ比較",
      description: "NordVPN・ExpressVPNなど5社の料金・セキュリティ機能を比較",
      icon: "🛡️",
    },
    {
      slug: "corporate-vpn-comparison",
      title: "法人向けVPN比較",
      description: "セキュリティ強化に使えるVPNの選び方を解説",
      icon: "🔒",
    },
  ],
  "開発ツール": [
    {
      slug: "rental-server-comparison",
      title: "【2026年】レンタルサーバーおすすめ比較5選",
      description: "ConoHa WING・エックスサーバーなど初心者向け5社を徹底比較",
      icon: "🖥️",
    },
    {
      slug: "developer-tools-guide",
      title: "Web開発者向け便利ツール活用ガイド",
      description: "JSON整形、Base64変換、正規表現テストなど開発ツールの使い方",
      icon: "💻",
    },
  ],
  "日常ツール": [
    {
      slug: "side-business-tools",
      title: "副業に必要なWebツール完全ガイド",
      description: "ブログ開設から確定申告まで副業に必要なツールを網羅",
      icon: "💰",
    },
    {
      slug: "web-tools-for-work",
      title: "仕事効率化に使える無料Webツール15選",
      description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
      icon: "💼",
    },
  ],
  "テキスト": [
    {
      slug: "web-tools-for-work",
      title: "仕事効率化に使える無料Webツール15選",
      description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
      icon: "💼",
    },
    {
      slug: "developer-tools-guide",
      title: "Web開発者向け便利ツール活用ガイド",
      description: "JSON整形、Base64変換、正規表現テストなど開発ツールの使い方",
      icon: "💻",
    },
  ],
  "画像・メディア": [
    {
      slug: "web-tools-for-work",
      title: "仕事効率化に使える無料Webツール15選",
      description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
      icon: "💼",
    },
    {
      slug: "web-tools-for-work",
      title: "仕事効率化に使える無料Webツール15選",
      description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
      icon: "💼",
    },
  ],
  "デザイン": [
    {
      slug: "web-tools-for-work",
      title: "仕事効率化に使える無料Webツール15選",
      description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
      icon: "💼",
    },
    {
      slug: "developer-tools-guide",
      title: "Web開発者向け便利ツール活用ガイド",
      description: "JSON整形、Base64変換、正規表現テストなど開発ツールの使い方",
      icon: "💻",
    },
  ],
};

// Default guides for categories not explicitly mapped
const defaultGuides: Guide[] = [
  {
    slug: "side-business-tools",
    title: "副業に必要なWebツール完全ガイド",
    description: "ブログ開設から確定申告まで副業に必要なツールを網羅",
    icon: "💰",
  },
  {
    slug: "web-tools-for-work",
    title: "仕事効率化に使える無料Webツール15選",
    description: "テキスト処理、データ変換など業務効率を上げるツールを厳選",
    icon: "💼",
  },
];

export function RelatedGuides() {
  const pathname = usePathname();
  const toolSlug = pathname.replace("/tools/", "");
  const tool = tools.find((t) => t.slug === toolSlug);
  const category = tool?.category || "";
  const guides = guidesByCategory[category] || defaultGuides;

  return (
    <section className="mt-8 mb-4">
      <h2 className="text-lg font-bold mb-4">関連ガイド記事</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="flex items-start gap-3 bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all group"
          >
            <span className="text-2xl flex-shrink-0">{guide.icon}</span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                {guide.title}
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                {guide.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
