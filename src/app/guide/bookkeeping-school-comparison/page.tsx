import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】簿記講座おすすめ比較5選｜2級・3級対策をオンラインで",
  description:
    "クレアール・スタディング・フォーサイト・ユーキャン・大原の簿記講座5社を料金・合格実績・サポートで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/bookkeeping-school-comparison` },
};

const faqItems = [
  { question: "簿記2級と3級どちらがお得？", answer: "就職・転職に直結するなら2級がおすすめ。3級は基礎知識として独学でも合格可能です。" },
  { question: "費用相場は？", answer: "3級で5,000〜2万円、2級で2万〜5万円が相場です。スタディングが業界最安。" },
  { question: "独学とスクールどちらが良い？", answer: "3級は独学でも合格可能ですが、2級以上はスクールの方が効率的です。" },
  { question: "合格までの期間は？", answer: "3級は2〜3ヶ月、2級は半年が目安です。1日1時間の学習で十分達成可能です。" },
];

const services = [
  { name: "クレアール", type: "オンライン特化", feature: "コスパ最強", points: ["受講料が安い", "オンラインで学べる", "教材が充実"], bestFor: "コスパ重視。" },
  { name: "スタディング", type: "オンライン", feature: "業界最安級", points: ["3級5,000円台、2級2万円台", "スマホ学習特化", "AIが学習計画を提案"], bestFor: "スマホで学びたい人。" },
  { name: "フォーサイト", type: "通信", feature: "高い合格率", points: ["合格率90%以上(直近)", "フルカラーテキスト", "eラーニング"], bestFor: "合格率重視。" },
  { name: "ユーキャン", type: "通信大手", feature: "知名度No.1", points: ["業界最大手の通信教育", "サポート手厚い", "受講者数多数"], bestFor: "通信教育の安心感。" },
  { name: "資格の大原", type: "通学+通信", feature: "実績No.1クラス", points: ["全国校舎展開", "公式問題集の作成にも携わる", "実績豊富"], bestFor: "通学型が良い人。" },
];

export default function BookkeepingSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "簿記講座比較", url: `${siteConfig.url}/guide/bookkeeping-school-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】簿記講座おすすめ比較5選" description="クレアール・スタディング・フォーサイト・ユーキャン・大原徹底比較。" url={`${siteConfig.url}/guide/bookkeeping-school-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>簿記講座比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】簿記講座おすすめ比較5選｜2級・3級対策をオンラインで</h1>
        <p className="text-muted leading-relaxed">就職・転職・副業に強い簿記資格。本記事では人気5講座を徹底比較し、自分に合うスクールを見つけるコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ簿記講座5選</h2>
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
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">資格を活かす実務</p>
          </Link>
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール</span>
            <p className="text-xs text-muted mt-1">他のスキル習得</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
