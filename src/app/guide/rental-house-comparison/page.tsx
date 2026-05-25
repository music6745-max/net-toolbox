import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】賃貸物件サイト比較5選｜SUUMO/HOME'S/at home/CHINTAI/エイブル",
  description:
    "SUUMO・LIFULL HOME'S・at home・CHINTAI・エイブルの賃貸物件サイト5社を物件数・検索性・特典で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/rental-house-comparison` },
};

const faqItems = [
  { question: "賃貸サイトはいくつ使うべき？", answer: "最低3サイトを併用するのが理想です。同じ物件でも掲載状況・特典・キャンペーンが異なります。" },
  { question: "仲介手数料を抑える方法は？", answer: "仲介手数料無料・半額のキャンペーンを実施する不動産会社を選びましょう。エイブル・MUTOグループなどに事例があります。" },
  { question: "敷金礼金ゼロ物件のリスクは？", answer: "退去時の修繕費用が高めに請求されるケースがあります。契約書の特約を必ず確認しましょう。" },
  { question: "オンライン内見はできる？", answer: "ほとんどの大手サイトでオンライン内見に対応しています。遠方からの引越しに便利です。" },
];

const services = [
  { name: "SUUMO", type: "総合", feature: "リクルート運営No.1", points: ["物件数・掲載数業界最大級", "シンプルな検索機能", "新生活キャンペーン豊富"], bestFor: "幅広く比較したい人。" },
  { name: "LIFULL HOME'S", type: "総合", feature: "情報量No.1クラス", points: ["物件詳細情報が豊富", "AIによるおすすめ", "FAQが充実"], bestFor: "じっくり検討したい人。" },
  { name: "at home", type: "総合", feature: "地域密着型に強い", points: ["地方都市の物件にも強い", "不動産会社直営型", "アプリも使いやすい"], bestFor: "地方の引越し。" },
  { name: "CHINTAI", type: "総合", feature: "若年層に人気", points: ["スマホUIが使いやすい", "学生向け物件が豊富", "キャッシュバック特典あり"], bestFor: "学生・新社会人。" },
  { name: "エイブル", type: "店舗仲介", feature: "全国展開の老舗", points: ["仲介手数料割引キャンペーン", "店舗で相談できる", "全国対応"], bestFor: "対面で相談したい人。" },
];

export default function RentalHouseComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "賃貸サイト比較", url: `${siteConfig.url}/guide/rental-house-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】賃貸物件サイト比較5選" description="SUUMO・HOME'S・at home・CHINTAI・エイブル徹底比較。" url={`${siteConfig.url}/guide/rental-house-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>賃貸サイト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】賃貸物件サイト比較5選｜SUUMO/HOME&apos;S/at home/CHINTAI/エイブル</h1>
        <p className="text-muted leading-relaxed">引越しの第一歩は物件探し。本記事では大手5サイトを徹底比較し、賢い物件探しのコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ賃貸サイト5選</h2>
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
        <h2 className="text-xl font-bold mb-4">引越し見積もりも一緒に</h2>
        <ComparisonTableCTA
          services={[
            { name: "引越し侍", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "一括見積最大手", price: "完全無料", badge: "定番" },
            { name: "SUUMO引越し", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "リクルート運営", price: "完全無料" },
            { name: "ズバット引越し比較", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "最大10社一括", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/moving-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">引越し業者比較</span>
            <p className="text-xs text-muted mt-1">引越しの準備</p>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">引越し先の電気契約</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
