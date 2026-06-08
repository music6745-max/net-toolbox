import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】家計簿・節約アプリおすすめランキングTOP10｜無料で使える定番",
  description:
    "2026年最新の家計簿・節約アプリTOP10をランキング形式で紹介。マネーフォワード・Zaim・Moneytree等の無料アプリを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/saving-app-ranking-2026` },
};

const items = [
  { rank: 1, name: "マネーフォワード ME", feat: "自動連携数No.1", free: "無料プランあり", link: "/guide/accounting-software-comparison" },
  { rank: 2, name: "Zaim", feat: "UIが使いやすい", free: "完全無料あり", link: "/tools/subscription-cost-calc" },
  { rank: 3, name: "Moneytree", feat: "シンプルで軽快", free: "完全無料", link: "/tools/subscription-cost-calc" },
  { rank: 4, name: "Dr.Wallet", feat: "レシート手入力代行", free: "一部無料", link: "/guide/accounting-software-comparison" },
  { rank: 5, name: "おかねのコンパス", feat: "資産形成も支援", free: "完全無料", link: "/guide/nisa-comparison" },
  { rank: 6, name: "OsidOri", feat: "家族で共有可", free: "無料プランあり", link: "/tools/subscription-cost-calc" },
  { rank: 7, name: "B/43", feat: "プリペイド連動", free: "無料", link: "/guide/credit-card-comparison" },
  { rank: 8, name: "Fortune City", feat: "ゲーム感覚で楽しく", free: "無料", link: "/guide/fitness-app-comparison" },
  { rank: 9, name: "LINE家計簿", feat: "LINEで完結", free: "完全無料", link: "/tools/subscription-cost-calc" },
  { rank: 10, name: "家計簿Pro", feat: "シンプル派に", free: "一部無料", link: "/tools/subscription-cost-calc" },
];

export default function SavingAppRankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "家計簿アプリランキング", url: `${siteConfig.url}/guide/saving-app-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】家計簿・節約アプリおすすめランキングTOP10" description="無料で使える定番の家計簿・節約アプリTOP10を比較。" url={`${siteConfig.url}/guide/saving-app-ranking-2026`} />
      <ItemListJsonLd name="家計簿アプリTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>家計簿アプリランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】家計簿・節約アプリおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">家計管理をスマホで簡単に。2026年人気の家計簿アプリをランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">家計簿アプリTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">料金: </span>{it.free}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">関連ガイド →</Link>
            </div>
          ))}
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/subscription-cost-calc" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">サブスク管理</span>
            <p className="text-xs text-muted mt-1">隠れた支出を可視化</p>
          </Link>
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">貯めたお金を投資へ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
