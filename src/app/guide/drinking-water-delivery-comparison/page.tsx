import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ウォーターサーバー定額制比較5選｜赤ちゃんに優しい天然水・RO水",
  description:
    "プレミアムウォーター・コスモウォーター・アクアクララ・フレシャス・サントリー天然水のウォーターサーバー5社を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/drinking-water-delivery-comparison` },
};

const faqItems = [
  { question: "天然水とRO水どちらが良い？", answer: "天然水はミネラル豊富で味も自然、RO水は不純物を徹底除去。赤ちゃんのミルク作りにはRO水も人気です。" },
  { question: "月額費用相場は？", answer: "月3,000〜5,000円が相場です。サーバーレンタル料無料のサービスが多いです。" },
  { question: "解約金は？", answer: "1〜2年以内の解約で1〜2万円の解約金が発生する場合があります。契約前に必ず確認しましょう。" },
  { question: "ボトル交換は重い？", answer: "下置きタイプなら腰に負担なく交換できます。フレシャスのような軽量パックタイプもおすすめです。" },
];

const services = [
  { name: "プレミアムウォーター", type: "天然水", feature: "業界シェアNo.1", points: ["天然水4種類から選べる", "24時間注文受付", "初回設置サポート無料"], bestFor: "天然水好き。" },
  { name: "コスモウォーター", type: "天然水", feature: "下置きタイプで交換楽", points: ["下置きで腰に優しい", "天然水3種類", "サーバーレンタル無料"], bestFor: "ボトル交換の負担を減らしたい。" },
  { name: "アクアクララ", type: "RO水", feature: "RO水で安心", points: ["RO水で不純物除去", "ミネラル添加で美味しい", "サーバー多数"], bestFor: "赤ちゃんのミルク作り。" },
  { name: "フレシャス", type: "天然水", feature: "デザインサーバー", points: ["スタイリッシュなデザイン", "軽量パックで交換楽", "天然水4種類"], bestFor: "インテリア重視。" },
  { name: "サントリー天然水", type: "天然水", feature: "サントリーブランド", points: ["天然水南アルプス", "ボトル使い捨て型", "省スペース設計"], bestFor: "サントリー信仰。" },
];

export default function DrinkingWaterDeliveryComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ウォーターサーバー定額制比較", url: `${siteConfig.url}/guide/drinking-water-delivery-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ウォーターサーバー定額制比較5選" description="プレミアム・コスモ・アクアクララ・フレシャス・サントリー徹底比較。" url={`${siteConfig.url}/guide/drinking-water-delivery-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ウォーターサーバー定額制比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ウォーターサーバー定額制比較5選｜赤ちゃんに優しい天然水・RO水</h1>
        <p className="text-muted leading-relaxed">家庭で気軽においしい水を楽しめる定額制ウォーターサーバー。本記事では人気5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめウォーターサーバー5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">水まわり・育児の関連ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/daily-water-log" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">水分摂取記録</span>
            <p className="text-xs text-muted mt-1">家庭の水利用の目安に</p>
          </Link>
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">別比較記事で条件を確認</p>
          </Link>
          <Link href="/guide/water-filter-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">浄水器比較</span>
            <p className="text-xs text-muted mt-1">定額制以外の代替案</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">別比較記事</p>
          </Link>
          <Link href="/guide/water-filter-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">浄水器比較</span>
            <p className="text-xs text-muted mt-1">代替案</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
