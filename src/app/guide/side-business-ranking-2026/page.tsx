import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】おすすめ副業ランキングTOP10｜初心者でも月5万円を目指せる",
  description:
    "2026年最新のおすすめ副業TOP10をランキング形式で紹介。初心者でも始めやすく、月5〜10万円を目指せる副業を厳選。必要なスキル・始め方・リスクも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/side-business-ranking-2026` },
};

const items = [
  { rank: 1, name: "ブログ・アフィリエイト", why: "初期費用が月1,000円程度と最小、在庫リスクなし、不労所得化可能", earn: "月1万〜100万円以上", link: "/guide/side-business-tools", how: "レンタルサーバー契約→WordPress構築→記事執筆→ASP登録" },
  { rank: 2, name: "クラウドワークス・ランサーズ", why: "スキル不問の案件から専門職まで豊富、即日稼げる", earn: "月1万〜30万円", link: "/guide/crowdsourcing-comparison", how: "プロフィール作成→簡単案件から実績積み→単価アップ" },
  { rank: 3, name: "Webライター", why: "文章力があれば未経験OK、時給換算で1,000円超可能", earn: "月3万〜30万円", link: "/guide/developer-tools-guide", how: "クラウドワークスで実績→直接契約→専門特化" },
  { rank: 4, name: "動画編集", why: "YouTube市場拡大で案件豊富、高単価", earn: "月5万〜50万円", link: "/guide/video-editing-comparison", how: "編集ソフト習得→ポートフォリオ作成→SNS・案件サイト応募" },
  { rank: 5, name: "プログラミング", why: "単価が最も高い、リモート可、スキルが資産", earn: "月5万〜50万円", link: "/guide/programming-school-comparison", how: "スクール・独学→ポートフォリオ→案件獲得" },
  { rank: 6, name: "せどり・物販", why: "即金性が高い、楽天/Amazonで即開始可", earn: "月3万〜30万円", link: "/guide/amazon-prime-vs-rakuten", how: "仕入れ→出品→発送→回転" },
  { rank: 7, name: "フードデリバリー配達員", why: "好きな時間に稼働、すぐ現金化", earn: "時給1,500〜2,500円", link: "/guide/delivery-driver-comparison", how: "Uber Eats等に登録→即日稼働" },
  { rank: 8, name: "投資(NISA・株・FX)", why: "長期的な資産形成、税制優遇", earn: "月0〜青天井(リスクあり)", link: "/guide/nisa-comparison", how: "証券口座開設→積立投資から" },
  { rank: 9, name: "AI活用副業(プロンプト販売等)", why: "成長分野、参入余地大", earn: "月1万〜30万円", link: "/guide/side-business-tools", how: "AIスキル習得→noteやBrain等で販売" },
  { rank: 10, name: "オンライン講師・スキル販売", why: "自分の経験が商品になる", earn: "月1万〜30万円", link: "/guide/tutoring-comparison", how: "ココナラ・ストアカ・Udemy等に出品" },
];

export default function SideBusinessRankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "おすすめ副業ランキング", url: `${siteConfig.url}/guide/side-business-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】おすすめ副業ランキングTOP10" description="2026年最新のおすすめ副業TOP10をランキング形式で紹介。" url={`${siteConfig.url}/guide/side-business-ranking-2026`} />
      <ItemListJsonLd name="おすすめ副業TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>おすすめ副業ランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】おすすめ副業ランキングTOP10｜初心者でも月5万円を目指せる</h1>
        <p className="text-muted leading-relaxed">本業とは別に安定した副収入を作りたい方へ。2026年に再現性・将来性・収益性のバランスで選ぶおすすめ副業10選をランキング形式でご紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">副業ランキングの選定基準</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
          <p><span className="font-bold">1. 再現性:</span> 誰でも再現できる方法があるか</p>
          <p><span className="font-bold">2. 初期投資:</span> 数万円以下で始められるか</p>
          <p><span className="font-bold">3. 収益性:</span> 月5万円以上を現実的に狙えるか</p>
          <p><span className="font-bold">4. 将来性:</span> 2030年以降も需要が残るか</p>
          <p><span className="font-bold">5. 本業との両立:</span> 隙間時間で進められるか</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ副業TOP10</h2>
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-lg font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-xl font-bold">{it.name}</h3>
              </div>
              <div className="text-sm text-muted space-y-2">
                <p><span className="font-bold text-foreground">💡 選ばれる理由:</span> {it.why}</p>
                <p><span className="font-bold text-foreground">💰 月収目安:</span> {it.earn}</p>
                <p><span className="font-bold text-foreground">📋 始め方:</span> {it.how}</p>
              </div>
              <Link href={it.link} className="inline-block mt-3 text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ：自分に合う副業の選び方</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 text-sm text-muted leading-relaxed space-y-3">
          <p>副業選びで最も重要なのは「続けられるか」です。短期で稼ぎたいならフードデリバリー・クラウドソーシング、長期で資産化したいならブログ・プログラミングがおすすめです。</p>
          <p>まずは1〜2個に絞って3ヶ月集中してみましょう。3ヶ月続けられれば、副業は本業を超える可能性も秘めています。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">副業を始めるための必須ツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "国内シェアNo.1の老舗サーバー", price: "月額990円〜", badge: "ブログ定番" },
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "ブログ開設に最速", price: "月額1,452円〜" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "確定申告に必須", price: "月額制" },
            { name: "クラウドワークス", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "国内最大の案件サイト", price: "無料登録" },
            { name: "マクロミル", url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD", highlight: "スキマ時間のアンケート副業", price: "無料登録", badge: "即金性◎" },
          ]}
        />
      </section>
    </div>
  );
}
