import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】相続税対策完全ガイド｜税理士費用相場と生前贈与・生命保険の節税ワザ",
  description:
    "相続税の基礎控除・申告手順・税理士費用・生前贈与7年加算ルール・生命保険の非課税枠まで徹底解説。遺産1億円で節税500万円の実例、ベンチャーサポート・チェスター等の税理士事務所比較。",
  alternates: { canonical: `${siteConfig.url}/guide/inheritance-tax-preparation` },
};

const faqItems = [
  { question: "相続税の基礎控除はいくらですか？", answer: "3,000万円＋（600万円×法定相続人の数）。相続人が配偶者と子2人なら基礎控除は4,800万円、これを超える遺産が相続税の対象です。" },
  { question: "相続税申告はいつまでに？", answer: "相続開始（被相続人の死亡）を知った日の翌日から10ヶ月以内。期限を過ぎると無申告加算税・延滞税が発生するため、余裕を持った準備が必要です。" },
  { question: "税理士費用の相場は？", answer: "遺産総額の0.5〜1.0%が相場。遺産5,000万円で30〜50万円、1億円で50〜100万円、3億円で100〜200万円程度です。節税効果は税理士費用の3〜10倍になるケースが多い。" },
  { question: "生前贈与7年加算ルールとは？", answer: "2024年改正で、相続開始前7年以内の贈与は相続財産に加算されるようになりました（段階移行中）。対策として、8年以上前から計画的な贈与が重要です。" },
];

const taxServices = [
  { name: "税理士ドットコム", url: "https://www.zeiri4.com/", type: "税理士紹介", points: ["全国5,800人超から相続税専門家を無料紹介", "コーディネーターによる複数比較支援", "紹介料・相談料完全無料"], bestFor: "相続税申告の税理士をまず探したい方。" },
  { name: "ベンチャーサポート相続税理士法人", url: "https://v-baitai.com/", type: "相続税特化", points: ["年間2,500件超の相続税申告実績", "土日祝も相談対応・オンライン可", "遺産5,000万〜30億円に対応"], bestFor: "相続税申告を確実に進めたい中〜高資産家。" },
  { name: "チェスター", url: "https://chester-tax.com/", type: "相続税専門", points: ["累計2万件超の申告実績", "税務調査率0.5%（業界平均10%）", "全国12拠点＋オンライン対応"], bestFor: "申告品質と税務調査対応を最重視する方。" },
  { name: "保険見直しラボ", url: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE", type: "生命保険での相続対策", points: ["500万円×法定相続人の非課税枠活用", "80代でも加入可能な一時払終身保険", "FPによる無料プラン提案"], bestFor: "生命保険で手軽に相続税対策したい方。" },
];

export default function InheritanceTaxPreparationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "相続税対策完全ガイド", url: `${siteConfig.url}/guide/inheritance-tax-preparation` }]} />
      <ArticleJsonLd headline="【2026年最新】相続税対策完全ガイド｜税理士費用相場と生前贈与・生命保険の節税ワザ" description="相続税の基礎・申告・節税対策を完全網羅。税理士費用・生前贈与・生命保険非課税枠の活用まで。" url={`${siteConfig.url}/guide/inheritance-tax-preparation`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>相続税対策完全ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">相続・終活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】相続税対策完全ガイド｜税理士費用相場と生前贈与・生命保険の節税ワザ</h1>
        <p className="text-muted leading-relaxed">
          「相続が発生してから慌てる」「基礎控除を超えて初めて相続税の恐ろしさを知る」——こんな失敗は、事前の準備で完全に避けられます。本記事では、基礎控除・申告手順・税理士費用相場・生前贈与7年加算ルール・生命保険の非課税枠まで、相続税対策のすべてを網羅的に解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">相続税対策の4つのステップ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">Step1:</span> 遺産総額・基礎控除・相続人数を把握</p>
          <p><span className="font-bold">Step2:</span> 税理士に相続税シミュレーション依頼</p>
          <p><span className="font-bold">Step3:</span> 生前贈与・生命保険・不動産評価の3本柱で節税</p>
          <p><span className="font-bold">Step4:</span> 遺言書作成＋エンディングノート整備</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">相続税の基礎知識</h2>
        <p className="text-muted leading-relaxed mb-4">
          相続税は、亡くなった人（被相続人）から相続人に受け継がれる財産にかかる税金です。日本の基礎控除は「3,000万円＋600万円×法定相続人の数」。相続人が配偶者と子2人なら4,800万円まで非課税ですが、都市部で不動産を所有する家庭は意外と簡単にこの基礎控除を超えます。課税対象額に応じて10〜55%の累進課税が適用され、申告期限は相続開始から10ヶ月以内です。
        </p>
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <h3 className="font-bold text-sm mb-3">相続税の税率（速算表）</h3>
          <ul className="space-y-1 text-sm text-muted">
            <li>1,000万円以下: 10%（控除額0）</li>
            <li>3,000万円以下: 15%（50万円）</li>
            <li>5,000万円以下: 20%（200万円）</li>
            <li>1億円以下: 30%（700万円）</li>
            <li>2億円以下: 40%（1,700万円）</li>
            <li>3億円以下: 45%（2,700万円）</li>
            <li>6億円以下: 50%（4,200万円）</li>
            <li>6億円超: 55%（7,200万円）</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">税理士・相続対策サービス比較</h2>
        <div className="space-y-6">
          {taxServices.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>)}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
              <a href={b.url} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors">公式サイトで詳細 →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">生前にできる相続税節税5ワザ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 暦年贈与（年110万円）：</span>毎年110万円までの贈与は非課税。ただし相続開始前7年は相続財産に加算されるため、8年以上前からスタートが鉄則。</p>
          <p><span className="font-bold text-foreground">2. 生命保険の非課税枠：</span>「500万円×法定相続人数」の死亡保険金が非課税。3人で1,500万円、4人で2,000万円を無税で移転。</p>
          <p><span className="font-bold text-foreground">3. 教育資金一括贈与の特例：</span>祖父母から孫への教育資金1,500万円まで非課税（期限2026年3月まで）。</p>
          <p><span className="font-bold text-foreground">4. 不動産の小規模宅地等の特例：</span>自宅330㎡まで評価額80%減額。相続税評価額を大幅圧縮。</p>
          <p><span className="font-bold text-foreground">5. 配偶者の税額軽減：</span>配偶者が相続する場合、1億6,000万円か法定相続分のどちらか多い方まで無税。ただし二次相続で税負担増のリスクも。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2 text-foreground">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">まず最初の一歩はここから</h2>
        <ComparisonTableCTA
          services={[
            { name: "税理士ドットコム", url: "https://www.zeiri4.com/", highlight: "相続税専門の税理士を全国5,800人から無料紹介", price: "紹介料無料", badge: "まず最初に" },
            { name: "保険見直しラボ", url: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE", highlight: "生命保険で非課税枠活用、FPが無料診断", price: "相談料無料", badge: "即効性" },
          ]}
        />
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/freelance-startup-bundle-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">独立</div><div className="font-bold text-sm">フリーランス独立バンドル</div></Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">会計</div><div className="font-bold text-sm">確定申告ソフト比較</div></Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">保険</div><div className="font-bold text-sm">生命保険比較</div></Link>
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">投資</div><div className="font-bold text-sm">投資アプリ比較</div></Link>
        </div>
      </section>
    </div>
  );
}
