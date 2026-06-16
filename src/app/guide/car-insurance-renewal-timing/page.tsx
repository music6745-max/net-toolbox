import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/tools";

const slug = "car-insurance-renewal-timing";
const pageUrl = `${siteConfig.url}/guide/${slug}`;
const title =
  "自動車保険の更新は何日前から？見積もり比較のタイミングと必要書類";
const description =
  "自動車保険の更新前に見積もりを取る最適な時期、必要書類、保険料が変わりやすい条件を整理。満期前にあわてず比較するためのチェックリストです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
  },
};

const faqItems = [
  {
    question: "自動車保険の更新見積もりは何日前から取れますか？",
    answer:
      "多くの保険会社では満期日の1か月から2か月前を目安に見積もりできます。実務上は満期日の45日前から30日前に比較を始めると、条件確認と乗り換え手続きに余裕を持てます。",
  },
  {
    question: "満期日ぎりぎりでも乗り換えできますか？",
    answer:
      "可能な場合もありますが、補償開始日の設定や必要情報の確認でミスが起きやすくなります。遅くとも満期日の1週間前までには候補を決めるのが無難です。",
  },
  {
    question: "更新前に保険料が下がりやすい人はどんな人ですか？",
    answer:
      "年間走行距離が減った、運転者年齢条件を上げられる、車両保険を見直せる、免許証の色が変わった、使用目的が変わった人は保険料が変わりやすいです。",
  },
  {
    question: "一括見積もりに必要なものは何ですか？",
    answer:
      "現在の保険証券、車検証、免許証、年間走行距離、事故歴、主な使用目的、運転者の範囲が分かれば入力しやすくなります。",
  },
  {
    question: "今の保険会社で継続する場合も比較した方がいいですか？",
    answer:
      "継続するつもりでも比較は有効です。同じ補償に近い条件で他社見積もりを確認すると、今の保険料が高いか安いか判断しやすくなります。",
  },
];

const timingSteps = [
  {
    label: "満期日の60日前",
    action: "現在の保険証券と車検証を手元に用意する",
    reason: "証券番号、等級、車両型式、補償内容を見ながら入力できます。",
  },
  {
    label: "満期日の45日前",
    action: "一括見積もりで複数社の概算を確認する",
    reason: "保険料差が大きい場合、補償内容を調整する時間を残せます。",
  },
  {
    label: "満期日の30日前",
    action: "上位2から3社に絞って補償内容を見比べる",
    reason: "ロードサービス、弁護士費用特約、車両保険の条件を確認します。",
  },
  {
    label: "満期日の14日前",
    action: "継続または乗り換えを決める",
    reason: "補償開始日を満期日の翌日に合わせ、無保険期間を避けます。",
  },
];

const documentItems = [
  "現在の自動車保険証券",
  "車検証",
  "運転免許証",
  "年間走行距離の目安",
  "過去1年から3年の事故・保険使用歴",
  "主に運転する人と運転者の範囲",
  "通勤・通学、業務、日常レジャーなどの使用目的",
  "車両保険を付けるかどうかの方針",
];

const reviewTriggers = [
  "年間走行距離が前回より減った",
  "子どもが運転しなくなり、運転者年齢条件を上げられる",
  "通勤で使わなくなった、または業務利用がなくなった",
  "ゴールド免許になった",
  "車両保険の免責金額を見直せる",
  "ロードサービスをJAFやクレジットカード付帯で補える",
];

function CompareCta({ position }: { position: string }) {
  return (
    <AffiliateCTA
      serviceName="インズウェブ自動車保険一括見積"
      url="/go/sbi-insweb-auto"
      description="現在の保険証券と車検証を見ながら、複数社の自動車保険見積もりをまとめて確認できます。更新前の比較に使いやすい一括見積もりです。"
      badge="更新前の比較向け"
      color="orange"
      page={`/guide/${slug}`}
      position={position}
    />
  );
}

export default function CarInsuranceRenewalTimingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車保険の更新タイミング", url: pageUrl },
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
        <span>自動車保険の更新タイミング</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            金融
          </span>
          <span className="text-xs text-muted">8分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-muted leading-relaxed">
          自動車保険は、満期直前に更新通知を見てそのまま継続すると、比較の余地を残せません。特に走行距離、運転者条件、使用目的が変わった年は、満期日の45日前から30日前に見積もりを取るだけで保険料差に気づきやすくなります。
        </p>
      </header>

      <CompareCta position="hero" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">結論: 45日前から30日前に比較を始める</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            最も扱いやすいタイミングは、満期日の45日前から30日前です。早すぎると見積もり条件が合わないことがあり、遅すぎると補償開始日の設定や書類確認で焦りやすくなります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-card-border p-4">
              <p className="text-xs text-muted mb-1">理想</p>
              <p className="font-bold">45日前</p>
            </div>
            <div className="rounded-lg border border-card-border p-4">
              <p className="text-xs text-muted mb-1">最終判断</p>
              <p className="font-bold">14日前</p>
            </div>
            <div className="rounded-lg border border-card-border p-4">
              <p className="text-xs text-muted mb-1">避けたい</p>
              <p className="font-bold">前日対応</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-5">更新前の進め方</h2>
        <div className="space-y-4">
          {timingSteps.map((step) => (
            <div
              key={step.label}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <p className="text-xs font-bold text-orange-600 dark:text-orange-300 mb-2">
                {step.label}
              </p>
              <h3 className="font-bold mb-2">{step.action}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">見積もり前に用意するもの</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documentItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CompareCta position="documents" />

      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">保険料が変わりやすいチェック項目</h2>
        <div className="space-y-3">
          {reviewTriggers.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-card-border bg-card-bg p-4"
            >
              <span className="mt-0.5 text-orange-600 dark:text-orange-300">
                ✓
              </span>
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">比較するときの注意点</h2>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <p className="text-sm leading-relaxed text-amber-950 dark:text-amber-100 mb-3">
            安い見積もりだけで選ばず、対人・対物賠償、車両保険、弁護士費用特約、ロードサービスの範囲をそろえて比較してください。
          </p>
          <p className="text-sm leading-relaxed text-amber-950 dark:text-amber-100">
            乗り換える場合は、現在の保険の満期日と新しい保険の始期日を連続させることが重要です。1日でも空くと無保険期間ができるため、申し込み画面の開始日を必ず確認します。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
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
            href="/guide/car-insurance-comparison"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              自動車保険比較ガイド
            </span>
            <p className="text-xs text-muted mt-1">主要なネット自動車保険を比較</p>
          </Link>
          <Link
            href="/tools/car-expense-yearly-calculator"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              車の年間維持費計算
            </span>
            <p className="text-xs text-muted mt-1">保険料を含めた年間コストを試算</p>
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
          <Link
            href="/guide/car-insurance-expired-renewal"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              満期日を過ぎたときの対応
            </span>
            <p className="text-xs text-muted mt-1">更新忘れ時の確認手順</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
