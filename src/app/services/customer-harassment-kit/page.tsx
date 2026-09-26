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
  title: "カスタマーハラスメント対策 運用スタートキット",
  description:
    "2026年10月1日のカスタマーハラスメント防止措置義務化に向けた、小規模事業者向けの運用テンプレート作成・導入支援。実証価格19,800円。",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "カスタマーハラスメント対策 運用スタートキット",
    description:
      "方針周知、相談受付、初動対応、記録のたたき台を小規模事業者向けに整える有料導入支援。",
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
    title: "個人情報なしで要件確認",
    body: "業種、従業員数の範囲、拠点数、既存文書の有無だけをメールで確認します。実際の事案の詳細は不要です。",
  },
  {
    number: "2",
    title: "範囲と納期を合意",
    body: "対象文書、反映する社名・役職、納期を確認します。合意前に費用は発生しません。",
  },
  {
    number: "3",
    title: "4営業時間以内を目安に初稿",
    body: "必要情報の確定後、編集可能な文書とPDFの初稿を4営業時間以内を目安に納品します。納品後7日以内の文言修正を1回含みます。",
  },
];

const faqItems = [
  {
    question: "このキットだけで法令対応が完了しますか？",
    answer:
      "いいえ。本サービスは運用文書のたたき台と導入支援であり、個別事業者の法的義務の判定、適法性の保証、法律相談は行いません。厚生労働省の一次資料を確認し、必要に応じて弁護士、社会保険労務士、都道府県労働局へご相談ください。",
  },
  {
    question: "実際に起きた事案の情報を送る必要はありますか？",
    answer:
      "初回相談では不要です。顧客・従業員の氏名、連絡先、録音、具体的な事案内容などの個人情報・機密情報は送らないでください。",
  },
  {
    question: "問い合わせると料金が発生しますか？",
    answer:
      "発生しません。対象範囲、納期、成果物をメールで確認し、双方が合意した場合にだけお申し込みとなります。",
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
            事業者向け・有料実証
          </span>
          <span className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-xs text-muted">
            受付上限 3事業者
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          カスタマーハラスメント対策
          <span className="block text-primary">運用スタートキット</span>
        </h1>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          方針、相談受付、初動対応、記録の「何から作るか」を止めないための小規模事業者向け導入支援です。
          既製文書を渡すだけでなく、社名・窓口・連絡手順を反映した運用開始用のたたき台を作成します。
        </p>

        <div className="mt-7 grid gap-5 rounded-xl border border-card-border bg-card-bg p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-medium text-muted">実証価格</p>
            <p className="mt-1 text-3xl font-bold">19,800円<span className="ml-1 text-sm font-medium">（税込）</span></p>
            <p className="mt-2 text-xs text-muted">
              1事業者・1拠点・従業員50名まで／文言修正1回を含む
            </p>
          </div>
          <CustomerHarassmentInquiryCta
            position="hero"
            label="個人情報なしで相談する"
          />
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
            本サービスは、その案内を読んでも社内文書や運用手順へ落とし込む時間が足りない小規模事業者向けの作業支援です。
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
        <h2 className="text-2xl font-bold">納品するもの</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          一般的なひな型を、初回確認で伺った業種・体制に合わせて編集します。編集可能な文書とPDFで納品します。
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
          <h2 className="text-xl font-bold">対象となる事業者</h2>
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
        <h2 className="text-2xl font-bold">相談から納品まで</h2>
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
        <h2 className="text-2xl font-bold">まず、対象範囲だけ確認します</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          初回メールでは、業種・従業員数の範囲・拠点数・既存文書の有無・希望納期だけをお知らせください。
          顧客や従業員の氏名、連絡先、録音、実際の事案の詳細は送らないでください。
        </p>
        <div className="mt-6">
          <CustomerHarassmentInquiryCta
            position="final"
            label="運用キットについて相談する"
          />
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          本サービスは法的助言、個別事案の判断、法令適合性の審査・保証を提供しません。法的判断が必要な場合は、弁護士、社会保険労務士、都道府県労働局などの専門窓口をご利用ください。
        </p>
      </section>
    </div>
  );
}

