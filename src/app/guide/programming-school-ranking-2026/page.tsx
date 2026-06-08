import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】プログラミングスクールおすすめランキングTOP10｜未経験からエンジニア転職",
  description:
    "2026年最新のプログラミングスクールTOP10をランキング形式で紹介。未経験から転職成功した受講生の声・料金・カリキュラムで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/programming-school-ranking-2026` },
};

const items = [
  { rank: 1, name: "DMM WEBCAMP", feat: "転職保証付き、未経験特化", price: "月額分割可", link: "/guide/programming-school-comparison" },
  { rank: 2, name: "テックアカデミー", feat: "オンライン完結、豊富なコース", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 3, name: "侍エンジニア", feat: "完全マンツーマン", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 4, name: "RUNTEQ", feat: "実務スキル重視の800時間カリキュラム", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 5, name: "ポテパンキャンプ", feat: "Web系自社開発企業に特化", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 6, name: "RaiseTech", feat: "AWS・Javaに強い", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 7, name: "tech boost", feat: "オーダーメイドカリキュラム", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 8, name: "Aidemy", feat: "AI・データサイエンス特化", price: "月額制", link: "/guide/ai-side-business" },
  { rank: 9, name: "キカガク", feat: "AI人材育成No.1", price: "月額制", link: "/guide/programming-school-comparison" },
  { rank: 10, name: "DPro(旧DIVE INTO CODE)", feat: "本格4ヶ月プログラム", price: "月額制", link: "/guide/programming-school-comparison" },
];

export default function ProgrammingSchoolRankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "プログラミングスクールランキング", url: `${siteConfig.url}/guide/programming-school-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】プログラミングスクールおすすめランキングTOP10" description="未経験からエンジニア転職を狙えるプログラミングスクールTOP10。" url={`${siteConfig.url}/guide/programming-school-ranking-2026`} />
      <ItemListJsonLd name="プログラミングスクールTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>プログラミングスクールランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】プログラミングスクールおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">未経験からエンジニアに転職するなら、実績あるスクールに通うのが最短ルート。本記事では2026年に選ぶべき10校をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">プログラミングスクールTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">料金: </span>{it.price}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
