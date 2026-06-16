import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/tools";

const slug = "car-insurance-expired-renewal";
const pageUrl = `${siteConfig.url}/guide/${slug}`;
const title = "自動車保険の満期日を過ぎたらどうする？無保険期間を避ける確認手順";
const description =
  "自動車保険の満期日を過ぎた、更新を忘れた、乗り換えが間に合わないときの確認手順を整理。等級、補償開始日、一括見積もりの注意点を解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "article" },
};

const faqItems = [
  {
    question: "自動車保険の満期日を過ぎたらすぐ無保険になりますか？",
    answer:
      "契約内容や保険会社の扱いによりますが、満期後に新しい任意保険が始まっていなければ無保険期間が発生する可能性があります。まず現在の保険会社に契約状態と補償終了時刻を確認してください。",
  },
  {
    question: "満期日を過ぎても等級は引き継げますか？",
    answer:
      "一般に一定期間内であれば引き継げる場合がありますが、条件は保険会社や契約状況で異なります。自己判断せず、現在の保険会社と乗り換え先の両方に確認するのが安全です。",
  },
  {
    question: "満期後でも一括見積もりは使えますか？",
    answer:
      "使える場合があります。ただし始期日の設定、等級の扱い、事故有係数適用期間などを正確に入力する必要があります。急ぎの場合も保険証券と車検証を手元に置いて確認しましょう。",
  },
  {
    question: "満期日を過ぎた車を運転してもいいですか？",
    answer:
      "任意保険が切れている可能性があるなら、運転は避けるべきです。自賠責保険とは別に、対物賠償や車両補償などが切れている可能性があります。",
  },
  {
    question: "更新忘れに気づいたら最初に何をすべきですか？",
    answer:
      "まず現在の保険会社に連絡し、契約が終了しているか、継続手続きが可能か、等級がどう扱われるかを確認します。そのうえで他社見積もりも取り、最短で補償をつなげる選択肢を比較します。",
  },
];

const emergencySteps = [
  {
    title: "1. 満期日と補償終了時刻を確認する",
    body: "更新案内、保険証券、保険会社のマイページで満期日を確認します。日付だけでなく、何時に補償が終わるかも重要です。",
  },
  {
    title: "2. 現在の保険会社へ連絡する",
    body: "継続手続きが可能か、等級が引き継げるか、支払い遅れ扱いなのかを確認します。電話やチャット窓口がある場合は早い手段を選びます。",
  },
  {
    title: "3. 車を運転しない前提で手続きを進める",
    body: "補償が切れている可能性がある状態で運転すると、事故時の負担が大きくなります。補償開始日が確定するまで運転を控えます。",
  },
  {
    title: "4. 他社見積もりも同時に確認する",
    body: "継続だけでなく、他社で最短開始できる契約も確認します。条件が合えば乗り換えで保険料を抑えられる場合があります。",
  },
];

const compareItems = [
  "補償開始日を最短でいつにできるか",
  "等級を引き継げるか",
  "現在と近い補償内容にできるか",
  "車両保険や弁護士費用特約を付けられるか",
  "支払い方法がすぐ使えるか",
  "ロードサービスがいつから有効になるか",
];

const donts = [
  "任意保険が切れている可能性があるまま運転する",
  "自賠責保険があるから大丈夫だと考える",
  "満期日だけを見て補償終了時刻を確認しない",
  "等級の扱いを確認せずに申し込む",
  "急いでいるからと補償内容を読まずに契約する",
];

function CompareCta({ position }: { position: string }) {
  return (
    <AffiliateCTA
      serviceName="インズウェブ自動車保険一括見積"
      url="/go/sbi-insweb-auto"
      description="満期日を過ぎた、または更新が近い場合でも、複数社の見積もりをまとめて確認できます。補償開始日と等級の扱いを確認しながら比較してください。"
      badge="満期後・更新忘れの確認"
      color="red"
      page={`/guide/${slug}`}
      position={position}
    />
  );
}

export default function CarInsuranceExpiredRenewalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車保険の満期後対応", url: pageUrl },
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
        <span>自動車保険の満期後対応</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
            金融
          </span>
          <span className="text-xs text-muted">7分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-muted leading-relaxed">
          自動車保険の更新忘れに気づいたら、最初にやることは「今も補償が有効か」を確認することです。焦って申し込む前に、満期日、補償開始日、等級の扱いを順番に確認します。
        </p>
      </header>

      <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
        <p className="text-sm leading-relaxed text-red-950 dark:text-red-100">
          任意保険が切れている可能性がある場合は、補償開始日が確定するまで運転を控えてください。この記事は一般的な確認手順であり、契約ごとの扱いは保険会社に確認が必要です。
        </p>
      </div>

      <CompareCta position="hero" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-5">満期日を過ぎたときの確認手順</h2>
        <div className="space-y-4">
          {emergencySteps.map((step) => (
            <div key={step.title} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">見積もりで必ず比較する項目</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compareItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-red-600 dark:text-red-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CompareCta position="compare_items" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">やってはいけないこと</h2>
        <div className="space-y-3">
          {donts.map((item) => (
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
            <p className="text-xs text-muted mt-1">満期前に比較する時期を確認</p>
          </Link>
          <Link
            href="/guide/car-insurance-required-documents"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              見積もりに必要な書類
            </span>
            <p className="text-xs text-muted mt-1">保険証券・車検証・免許証を確認</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
