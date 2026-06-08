import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】転職エージェントおすすめランキングTOP10｜20代/30代/ハイクラス",
  description:
    "2026年最新の転職エージェントおすすめランキングTOP10。リクルートエージェント・doda・ビズリーチ等、20代・30代・ハイクラスにおすすめのサービスを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/job-agent-ranking-2026` },
};

const items = [
  { rank: 1, name: "リクルートエージェント", feat: "求人数業界No.1", target: "全世代", link: "/guide/job-site-comparison" },
  { rank: 2, name: "doda", feat: "エージェント+求人サイト統合", target: "全世代", link: "/guide/job-site-comparison" },
  { rank: 3, name: "マイナビエージェント", feat: "20代・第二新卒に強い", target: "20代", link: "/guide/job-site-comparison" },
  { rank: 4, name: "ビズリーチ", feat: "年収600万円以上のハイクラス", target: "30代〜", link: "/guide/executive-job-comparison" },
  { rank: 5, name: "JACリクルートメント", feat: "管理職・専門職に強い", target: "30代〜", link: "/guide/executive-job-comparison" },
  { rank: 6, name: "type転職エージェント", feat: "首都圏の正社員求人", target: "全世代", link: "/guide/it-job-comparison" },
  { rank: 7, name: "レバテックキャリア", feat: "IT・エンジニア特化", target: "全世代", link: "/guide/it-job-comparison" },
  { rank: 8, name: "パソナキャリア", feat: "年収アップ実績豊富", target: "全世代", link: "/guide/job-site-comparison" },
  { rank: 9, name: "リクルートダイレクトスカウト", feat: "スカウト型", target: "ハイクラス", link: "/guide/executive-job-comparison" },
  { rank: 10, name: "Green", feat: "Web系ベンチャー向け", target: "全世代", link: "/guide/it-job-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "転職エージェントランキング", url: `${siteConfig.url}/guide/job-agent-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】転職エージェントおすすめランキングTOP10" description="20代/30代/ハイクラスに最適な転職エージェント。" url={`${siteConfig.url}/guide/job-agent-ranking-2026`} />
      <ItemListJsonLd name="転職エージェントTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>転職エージェントランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】転職エージェントおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">年収アップ・キャリアアップを叶える転職エージェント10社をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">転職エージェントTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">おすすめ: </span>{it.target}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
