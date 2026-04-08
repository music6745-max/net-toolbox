import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】住宅ローン比較おすすめ5選｜金利・手数料・団信を徹底解説",
  description:
    "ネット銀行・メガバンク・フラット35の住宅ローンを金利・手数料・団信・審査基準で徹底比較。借り換えで総返済額を数百万円削減するコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/housing-loan-comparison` },
};

const faqItems = [
  {
    question: "変動金利と固定金利どちらがいいですか？",
    answer:
      "金利上昇リスクを許容できるなら変動、長期で家計の安定を重視するなら固定が基本です。返済期間が10年以下なら変動、20年以上なら固定や固定期間選択型を検討する方が多くなります。",
  },
  {
    question: "ネット銀行と店舗型銀行の違いは？",
    answer:
      "ネット銀行は金利が低く手数料も抑えめですが、審査がやや厳しく対面サポートがありません。店舗型は相談しやすい反面、金利が高めの傾向があります。",
  },
  {
    question: "団信は必須ですか？",
    answer:
      "民間ローンでは原則必須、フラット35では任意です。がん保障・三大疾病保障付き団信は通常0.1〜0.3%の金利上乗せで付帯できます。",
  },
  {
    question: "借り換えはいつすべきですか？",
    answer:
      "現行金利との差が0.5%以上、残債が1,000万円以上、残り返済期間が10年以上ある場合は借り換えで総返済額が大きく削減できます。試算ツールで必ず比較しましょう。",
  },
];

const banks = [
  { name: "auじぶん銀行", type: "ネット銀行", rate: "変動0.319%〜", points: ["業界最低水準の変動金利", "がん50%保障団信が無料付帯", "au・UQモバイルセット割"], bestFor: "金利を最優先したい人、auユーザー。" },
  { name: "住信SBIネット銀行", type: "ネット銀行", rate: "変動0.32%〜", points: ["全疾病保障が無料付帯", "対面相談サービスもあり", "事務手数料は借入額の2.2%"], bestFor: "団信の保障内容を重視したい人。" },
  { name: "PayPay銀行", type: "ネット銀行", rate: "変動0.315%〜", points: ["業界最低水準クラスの金利", "一般団信＋がん50%保障無料", "全国の物件に対応"], bestFor: "PayPay経済圏を活用しているユーザー。" },
  { name: "三井住友信託銀行", type: "信託銀行", rate: "変動0.475%〜", points: ["対面サポートが手厚い", "ライフプラン相談が可能", "繰上返済手数料無料"], bestFor: "対面でしっかり相談したい人。" },
  { name: "ARUHI フラット35", type: "全期間固定", rate: "固定1.840%〜", points: ["35年固定で返済額が変わらない", "頭金1割以上で金利優遇", "団信は任意"], bestFor: "金利上昇リスクを避けたい人、自営業の方。" },
];

export default function HousingLoanComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "住宅ローン比較", url: `${siteConfig.url}/guide/housing-loan-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】住宅ローン比較おすすめ5選｜金利・手数料・団信を徹底解説" description="ネット銀行・メガバンク・フラット35の住宅ローンを金利・手数料・団信・審査基準で徹底比較。借り換えで総返済額を数百万円削減するコツも解説。" url={`${siteConfig.url}/guide/housing-loan-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>住宅ローン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】住宅ローン比較おすすめ5選｜金利・手数料・団信を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          人生で最も大きな買い物である住宅。0.1%の金利差でも総返済額は数十万円〜数百万円変わります。2026年現在の主要5行の住宅ローンを金利・手数料・団信で徹底比較し、賢い選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">金利最優先 → auじぶん銀行</span></p>
          <p><span className="font-bold">団信の手厚さ → 住信SBIネット銀行</span></p>
          <p><span className="font-bold">対面サポート → 三井住友信託銀行</span></p>
          <p><span className="font-bold">長期固定で安心 → ARUHI フラット35</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">住宅ローン選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          住宅ローンは「金利・手数料・団信」の3点で総返済額が決まります。3,000万円を35年返済で借りる場合、金利が0.5%違うだけで総返済額の差は約280万円。さらに保証料・事務手数料・繰上返済手数料も合わせると諸費用は数十万円単位で変わります。最近はネット銀行が低金利競争をリードしており、団信の保障内容も充実してきました。事前審査は複数行で同時に進めるのが鉄則です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ住宅ローン5社の詳細</h2>
        <div className="space-y-6">
          {banks.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 金利は2026年4月時点の参考値です。最新の適用金利は各銀行の公式サイトでご確認ください。</p>
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
            住宅ローンは「金利・団信・諸費用」を総合判断するのが正解。ネット銀行は金利競争力が圧倒的で、団信の保障内容も近年充実してきました。借入後も家計簿アプリや会計ソフトで返済状況を継続管理し、金利動向を見ながら借り換えを検討すれば、総返済額を数百万円単位で圧縮できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">住宅購入時の保障も見直し</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">日々の支払いを最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
