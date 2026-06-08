import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】車買取一括査定サービス比較5選｜高く売るコツも解説",
  description:
    "ガリバー・カーセンサー・ナビクル・ユーカーパック・MOTAの車買取一括査定サービス5社を徹底比較。少しでも高く売るコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/car-purchase-buyback-comparison` },
};

const faqItems = [
  { question: "一括査定で本当に高く売れますか？", answer: "1社のみの査定と比較して平均20〜30万円高く売れた事例が多数あります。複数社の競合関係が値上げ要因です。" },
  { question: "個人情報がたくさんの業者に渡るのは不安です。", answer: "ユーカーパックやMOTAなど、業者からの直接連絡を制限する仕組みのサービスもあります。プライバシー重視の方におすすめです。" },
  { question: "出張査定は必要ですか？", answer: "ほとんどの査定で出張査定を行います。所要時間は15〜30分程度。複数社が同時に来ることもあります。" },
  { question: "売却後のキャンセルは可能？", answer: "契約後のキャンセルは原則不可です。十分に検討してから契約しましょう。" },
];

const services = [
  { name: "ガリバー", type: "業界最大手", feature: "全国販売ネットワーク", points: ["全国560店舗以上", "AI査定でスピード対応", "中古車販売も手がける"], bestFor: "信頼性と実績重視。" },
  { name: "カーセンサー", type: "総合", feature: "リクルート系", points: ["最大30社一括査定", "メール連絡のみ可", "業界トップクラスの提携数"], bestFor: "幅広く比較したい人。" },
  { name: "ナビクル", type: "総合", feature: "提携10社の厳選", points: ["大手のみで安心", "一度の入力で完結", "面倒な営業を抑制"], bestFor: "厳選した業者で比較したい人。" },
  { name: "ユーカーパック", type: "オークション型", feature: "業者間で競りに掛ける", points: ["一度の査定で完結", "1社の業者と対応するのみ", "高値が付きやすい"], bestFor: "営業電話を避けたい人。" },
  { name: "MOTA", type: "上位3社のみ", feature: "高額査定3社のみ連絡", points: ["上位3社からだけ電話が来る", "面倒な営業を最小化", "メール対応中心"], bestFor: "効率的に売りたい人。" },
];

export default function CarBuybackComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "車買取比較", url: `${siteConfig.url}/guide/car-purchase-buyback-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】車買取一括査定サービス比較5選" description="ガリバー・カーセンサー・ナビクル・ユーカーパック・MOTAを徹底比較。" url={`${siteConfig.url}/guide/car-purchase-buyback-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>車買取比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】車買取一括査定サービス比較5選｜高く売るコツも解説</h1>
        <p className="text-muted leading-relaxed">愛車を手放すなら、ディーラー下取りより一括査定が断然お得。本記事では人気5社を比較し、20〜30万円高く売るためのコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">高く売るコツ</h2>
        <p className="text-muted leading-relaxed mb-4">『複数社の同時査定』『洗車・整備の状態をきれいに』『ボーナス時期や年度末の需要期を狙う』が三大原則。10万円以上差が出ることも珍しくありません。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ車買取サービス5選</h2>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/used-car-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">中古車購入比較</span>
            <p className="text-xs text-muted mt-1">買い替え時の購入先</p>
          </Link>
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">次の車はリースも検討</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車購入比較</span>
            <p className="text-xs text-muted mt-1">購入先と買い方を整理</p>
          </Link>
          <Link href="/guide/bike-buyback-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">バイク買取比較</span>
            <p className="text-xs text-muted mt-1">二輪の売却も確認</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
