import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/tools";

const slug = "car-insurance-required-documents";
const pageUrl = `${siteConfig.url}/guide/${slug}`;
const title = "自動車保険の見積もりに必要な書類と入力項目チェックリスト";
const description =
  "自動車保険の一括見積もりや乗り換え前に用意する書類、確認しておく入力項目、保険料が変わる条件を整理。保険証券・車検証・免許証のどこを見るかを解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "article" },
};

const faqItems = [
  {
    question: "自動車保険の見積もりで必ず必要な書類は何ですか？",
    answer:
      "現在の保険証券、車検証、運転免許証の3つがあると入力が進めやすくなります。加えて年間走行距離、主な使用目的、運転者の範囲、過去の事故歴を確認しておくと見積もり精度が上がります。",
  },
  {
    question: "保険証券が手元にない場合でも見積もりできますか？",
    answer:
      "可能な場合もありますが、等級、満期日、補償内容、契約者情報を確認できないと条件がずれやすくなります。保険会社のマイページや更新案内で代用できることがあります。",
  },
  {
    question: "車検証ではどの項目を見ますか？",
    answer:
      "登録番号、初度登録年月、型式、車台番号、所有者・使用者、用途、自家用・事業用の区分を確認します。車両保険を付ける場合は車両情報の正確さが特に重要です。",
  },
  {
    question: "免許証では何を確認しますか？",
    answer:
      "免許証の色、有効期限、主に運転する人の年齢を確認します。ゴールド免許や運転者年齢条件は保険料に影響することがあります。",
  },
  {
    question: "一括見積もり前に決めておくことはありますか？",
    answer:
      "車両保険を付けるか、免責金額をいくらにするか、弁護士費用特約を付けるか、ロードサービスを重視するかを決めておくと比較しやすくなります。",
  },
];

const documents = [
  {
    name: "現在の保険証券",
    points: ["満期日", "等級", "事故有係数適用期間", "補償内容", "現在の保険料"],
    note: "同じ補償条件に近づけて比較するための基準になります。",
  },
  {
    name: "車検証",
    points: ["登録番号", "型式", "初度登録年月", "車台番号", "用途"],
    note: "車両情報の入力ミスを避けるために使います。",
  },
  {
    name: "運転免許証",
    points: ["免許証の色", "有効期限", "主な運転者の年齢"],
    note: "ゴールド免許や年齢条件の確認に使います。",
  },
];

const inputItems = [
  "年間走行距離",
  "通勤・通学、業務、日常レジャーなどの使用目的",
  "本人限定、夫婦限定、家族限定などの運転者範囲",
  "運転者年齢条件",
  "過去の事故歴と保険使用歴",
  "車両保険の有無",
  "弁護士費用特約の有無",
  "ロードサービスで重視する内容",
];

const mistakes = [
  "現在の保険料だけを見て、補償内容をそろえず比較する",
  "満期日と新契約の始期日をずらしてしまう",
  "年間走行距離を実態より大きく入力したままにする",
  "家族構成が変わったのに運転者範囲を見直さない",
  "車両保険の免責金額を確認しない",
];

function CompareCta({ position }: { position: string }) {
  return (
    <AffiliateCTA
      serviceName="インズウェブ自動車保険一括見積"
      url="/go/sbi-insweb-auto"
      description="保険証券・車検証・免許証を手元に置いて、複数社の自動車保険見積もりをまとめて確認できます。更新前や乗り換え前の比較に使いやすい一括見積もりです。"
      badge="必要書類を見ながら比較"
      color="orange"
      page={`/guide/${slug}`}
      position={position}
    />
  );
}

export default function CarInsuranceRequiredDocumentsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車保険の必要書類", url: pageUrl },
        ]}
      />
      <ArticleJsonLd
        headline={title}
        description={description}
        url={pageUrl}
        datePublished="2026-06-16"
        dateModified="2026-06-16"
      />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>自動車保険の必要書類</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            金融
          </span>
          <span className="text-xs text-muted">7分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-muted leading-relaxed">
          自動車保険の見積もりは、必要な情報を先にそろえるだけで入力ミスと比較漏れを減らせます。特に更新前の人は、現在の保険証券を基準にして同じ補償条件に近づけることが重要です。
        </p>
      </header>

      <CompareCta position="hero" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-5">まず用意する3つの書類</h2>
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.name} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-3">{doc.name}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {doc.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted leading-relaxed">{doc.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">書類以外に確認する入力項目</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inputItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-orange-600 dark:text-orange-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CompareCta position="checklist" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">比較前によくあるミス</h2>
        <div className="space-y-3">
          {mistakes.map((item) => (
            <div key={item} className="rounded-xl border border-card-border bg-card-bg p-4">
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CompareCta position="footer" />

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/guide/car-insurance-renewal-timing"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              自動車保険の更新タイミング
            </span>
            <p className="text-xs text-muted mt-1">満期前に比較を始める時期を確認</p>
          </Link>
          <Link
            href="/guide/car-insurance-expired-renewal"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              満期日を過ぎたときの対応
            </span>
            <p className="text-xs text-muted mt-1">無保険期間を避けるための確認事項</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
