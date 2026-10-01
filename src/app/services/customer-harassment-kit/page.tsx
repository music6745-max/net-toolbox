import type { Metadata } from "next";
import Link from "next/link";
import {
  CUSTOMER_HARASSMENT_EXPERIMENT_ID,
  CustomerHarassmentInquiryCta,
} from "@/components/CustomerHarassmentExperiment";
import { siteConfig } from "@/lib/tools";

const pageUrl = `${siteConfig.url}/services/customer-harassment-kit`;
const officialSourceUrl =
  "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/seisaku06/";

export const metadata: Metadata = {
  title: "カスタマーハラスメント対策 運用スタートキット｜新規受付停止中",
  description:
    "カスタマーハラスメント対策 運用スタートキットは、個別調整・短納期対応・法務に隣接する確認を安全に継続できる運用体制と合わないため、新規相談と受注を停止しています。",
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
  openGraph: {
    title: "カスタマーハラスメント対策 運用スタートキット｜新規受付停止中",
    description:
      "カスタマーハラスメント対策 運用スタートキットは現在、新規相談と受注を停止しています。",
    url: pageUrl,
    type: "website",
  },
};

const deliverables = [
  {
    title: "方針・社内周知文のテンプレート",
    body: "事業主の方針、従業員を守る姿勢、相談先を一枚にまとめ、社名・窓口名を反映します。",
  },
  {
    title: "相談受付・事実確認の記録票",
    body: "相談を受けた日時、言動、業務への影響、初動を同じ形式で残せる編集可能なひな型です。",
  },
  {
    title: "初動対応・エスカレーションフロー",
    body: "現場から責任者への連絡、緊急時の切り分け、外部専門家へ確認する境界を一枚で整理します。",
  },
  {
    title: "導入チェックリストと従業員向け説明紙",
    body: "相談窓口の周知、プライバシーへの配慮、不利益取扱い防止、再発防止を運用開始前に確認します。",
  },
];

const steps = [
  {
    number: "1",
    title: "新規受付を停止",
    body: "新規相談、見積り、契約、個別文書作成を受け付けていません。",
  },
  {
    number: "2",
    title: "個人情報を受領しない",
    body: "顧客・従業員の氏名、連絡先、録音、実際の事案内容を送らないでください。",
  },
  {
    number: "3",
    title: "再開時期は未定",
    body: "自動販売できる一般テンプレートへ再設計する場合も、法務判断や適法保証は提供しません。",
  },
];

const faqItems = [
  {
    question: "このキットだけで法令対応が完了しますか？",
    answer:
      "いいえ。旧販売実験で想定していた内容も、個別事業者の法的義務の判定、適法性の保証、法律相談を含みません。厚生労働省の一次資料を確認し、必要に応じて弁護士、社会保険労務士、都道府県労働局へご相談ください。",
  },
  {
    question: "実際に起きた事案の情報を送る必要はありますか？",
    answer:
      "現在は相談を受け付けていません。顧客・従業員の氏名、連絡先、録音、具体的な事案内容などの個人情報・機密情報は送らないでください。",
  },
  {
    question: "現在申し込めますか？",
    answer:
      "いいえ。現在は新規相談、見積り、契約、個別文書作成を受け付けていません。再開時期は未定です。",
  },
];

export default function CustomerHarassmentKitPage() {
  return (
    <div
      className="mx-auto max-w-4xl px-4 py-10"
      data-experiment-id={CUSTOMER_HARASSMENT_EXPERIMENT_ID}
    >
      <nav className="mb-6 text-sm text-muted" aria-label="パンくず">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>事業者向け導入支援</span>
        <span className="mx-2">/</span>
        <span>カスタマーハラスメント対策</span>
      </nav>

      <header className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
            新規受付停止中
          </span>
          <span className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-xs text-muted">
            再開時期は未定
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          カスタマーハラスメント対策
          <span className="block text-primary">運用スタートキット</span>
        </h1>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          このページは旧販売実験の内容を記録するために残しています。
          個別調整、短納期対応、法務に隣接する確認を安全に継続できる運用体制と合わないため、新規相談と受注を停止しました。
        </p>

        <div className="mt-7 grid gap-5 rounded-xl border border-card-border bg-card-bg p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-medium text-muted">受付状況</p>
            <p className="mt-1 text-3xl font-bold">新規受付停止中</p>
            <p className="mt-2 text-xs text-muted">
              新規契約、個別相談、個人情報・機密情報の受領は行いません
            </p>
          </div>
          <CustomerHarassmentInquiryCta position="hero" />
        </div>
        <p className="mt-4 text-xs text-muted">
          実証受付ID: <code>{CUSTOMER_HARASSMENT_EXPERIMENT_ID}</code>
        </p>
      </header>

      <section className="py-10">
        <h2 className="text-2xl font-bold">2026年10月1日の施行に向けた準備</h2>
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-relaxed text-slate-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-slate-100">
          <p>
            厚生労働省は、カスタマーハラスメントの防止措置が2026年10月1日から事業主の義務になると案内しています。
            旧販売実験では、その案内を社内文書や運用手順へ落とし込む時間が足りない小規模事業者向けの作業支援を想定していました。現在は提供していません。
          </p>
          <a
            href={officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-medium text-primary hover:underline"
          >
            厚生労働省「職場におけるハラスメントの防止のために」を確認する
          </a>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-2xl font-bold">旧販売実験で想定していた納品物</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          以下は旧販売実験の記録です。現在は業種・体制に合わせた編集や、文書・PDFの納品を行っていません。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 pb-10 md:grid-cols-2">
        <div className="rounded-xl border border-card-border bg-card-bg p-6">
          <h2 className="text-xl font-bold">旧販売実験で想定していた対象</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>・従業員1〜50名で、顧客対応のある店舗・サービス業</li>
            <li>・専任の人事・法務担当がおらず、文書作成が止まっている</li>
            <li>・方針、相談窓口、初動手順をまず一つの運用にまとめたい</li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-slate-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-slate-100">
          <h2 className="text-xl font-bold">このキットの対象外</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>・個別事案の法的評価、法律相談、適法性の保証</li>
            <li>・紛争、訴訟、労働局対応、当事者への聞き取り代行</li>
            <li>・複数法人・多拠点の規程統合や個別労務監査</li>
          </ul>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-2xl font-bold">現在の受付状況</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-2xl font-bold">よくある質問</h2>
        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <summary className="cursor-pointer font-bold">{item.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-2xl font-bold">新規相談と受注を停止しています</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          現在は対象範囲の確認、見積り、契約、個別文書作成を行いません。
          顧客や従業員の氏名、連絡先、録音、実際の事案の詳細を送らないでください。
        </p>
        <div className="mt-6">
          <CustomerHarassmentInquiryCta position="final" />
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          本サービスは法的助言、個別事案の判断、法令適合性の審査・保証を提供しません。法的判断が必要な場合は、弁護士、社会保険労務士、都道府県労働局などの専門窓口をご利用ください。
        </p>
      </section>
    </div>
  );
}

