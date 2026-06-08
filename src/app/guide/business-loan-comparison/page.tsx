import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】事業者向け融資・ビジネスローン比較おすすめ5選｜金利・審査・資金調達を徹底解説",
  description:
    "日本政策金融公庫・AGビジネスサポート・GMOあおぞらネット銀行・ビジネクスト・OLTAを金利・審査スピード・調達額で徹底比較。中小企業・個人事業主の資金調達を最適化する選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/business-loan-comparison` },
};

const faqItems = [
  { question: "銀行融資とビジネスローンの違いは？", answer: "銀行融資は金利1〜3%と低いですが審査は2週間〜1か月、担保・保証人が必要な場合も。ビジネスローンはノンバンクが提供し金利6〜15%と高めですが、最短即日で担保不要。緊急度と金額で使い分けます。" },
  { question: "創業間もなくても借りられますか？", answer: "日本政策金融公庫の新創業融資制度は創業2年未満・無担保無保証人で最大3,000万円まで借入可能です。民間銀行・ビジネスローンは決算2期分の実績を求めるところが多いため、創業期は公庫が最有力候補です。" },
  { question: "審査で重視されるポイントは？", answer: "決算書の利益・自己資本比率、事業計画の実現性、代表者の信用情報、業歴、既存借入の状況が主要なチェック項目です。クラウド会計ソフトで日々正確な記帳を行い、決算書の質を高めておくと審査に有利です。" },
  { question: "ファクタリングとの違いは？", answer: "ローンは借入で返済義務がありますが、ファクタリング（OLTA等）は売掛債権を売却する仕組みで返済不要・債務になりません。信用情報にも載らず、急ぎの資金繰りに適しています。手数料は2〜9%程度です。" },
];

const services = [
  { name: "日本政策金融公庫", type: "政府系", rate: "固定1.20%〜3.20%", points: ["創業融資に最強", "無担保無保証人で3,000万円まで", "女性・若者・シニア優遇制度あり"], bestFor: "創業間もない中小企業・個人事業主。" },
  { name: "AGビジネスサポート", type: "ノンバンク", rate: "3.00%〜18.00%", points: ["来店不要・Web完結", "最短即日融資可能", "赤字決算・税金滞納でも相談可"], bestFor: "急ぎで資金調達したい事業者。" },
  { name: "GMOあおぞらネット銀行 あんしんワイド", type: "ネット銀行", rate: "0.9%〜14.0%", points: ["来店不要・カードローン型", "口座連動で入出金管理", "追加借入が即時可能"], bestFor: "運転資金の機動的な調達。" },
  { name: "ビジネクスト", type: "ノンバンク", rate: "3.10%〜18.00%", points: ["総量規制対象外", "来店不要・最短即日", "最大1,000万円まで融資可"], bestFor: "個人事業主・フリーランス。" },
  { name: "OLTA クラウドファクタリング", type: "ファクタリング", rate: "手数料2.0〜9.0%", points: ["借入ではなく売掛債権売却", "最短即日入金", "信用情報に影響なし"], bestFor: "売掛金はあるが現金化を急ぐ事業者。" },
];

export default function BusinessLoanComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "事業者向け融資比較", url: `${siteConfig.url}/guide/business-loan-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】事業者向け融資・ビジネスローン比較おすすめ5選" description="日本政策金融公庫・AGビジネスサポート・GMOあおぞら・ビジネクスト・OLTAを徹底比較。" url={`${siteConfig.url}/guide/business-loan-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>事業者向け融資比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】事業者向け融資・ビジネスローン比較おすすめ5選｜金利・審査・資金調達を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          事業を拡大したい、仕入れ資金が足りない、売掛金の入金を待てない──中小企業・個人事業主が直面する資金繰りの悩みは尽きません。2026年現在の主要5サービスを金利・審査スピード・調達額で徹底比較し、状況別の最適解を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">創業資金 → 日本政策金融公庫</span></p>
          <p><span className="font-bold">最短即日 → AGビジネスサポート</span></p>
          <p><span className="font-bold">運転資金 → GMOあおぞらネット銀行</span></p>
          <p><span className="font-bold">個人事業主 → ビジネクスト</span></p>
          <p><span className="font-bold">売掛金の現金化 → OLTA</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">事業者向け融資の基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          事業者向け資金調達は「銀行融資・政府系融資・ビジネスローン・ファクタリング」の4系統があります。金利の安さ順では政府系＜銀行＜ビジネスローン＜ファクタリングとなり、一方で審査スピードは逆順になります。創業期は日本政策金融公庫、既存事業の拡大は銀行融資、急ぎの運転資金はビジネスローン、売掛債権があるならファクタリングと、状況に応じて使い分けるのが鉄則。日々の帳簿管理が甘いと決算書の質が下がり審査に不利になるため、クラウド会計ソフトで記帳を自動化し、インボイス制度にも対応しておきましょう。税理士のサポートを受けながら事業計画書を作成すると審査通過率が大きく上がります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ事業者向け融資5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">金利・手数料：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 金利・手数料は2026年4月時点の参考値です。最新の条件は各サービスの公式サイトでご確認ください。</p>
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
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            事業者向け融資は「金利・スピード・調達額」のトレードオフ。まず政府系の公庫を第一候補にし、時間的余裕があれば銀行融資、急ぎならビジネスローンまたはファクタリングと階層的に検討しましょう。日常の記帳をクラウド会計で自動化し、税理士のサポートで決算書と事業計画書の質を高めれば、有利な条件での融資獲得につながります。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/tax-accountant-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">税理士マッチング比較</span>
            <p className="text-xs text-muted mt-1">融資審査の強い味方</p>
          </Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クラウド会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">日々の記帳を自動化</p>
          </Link>
          <Link href="/guide/legal-consultation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">弁護士相談オンライン比較</span>
            <p className="text-xs text-muted mt-1">契約書・労務の相談</p>
          </Link>
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座徹底比較</span>
            <p className="text-xs text-muted mt-1">余剰資金の運用</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
