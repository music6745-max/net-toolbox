import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】おまとめローン比較おすすめ5選｜金利・返済額を一本化で大幅削減",
  description:
    "東京スター銀行・住信SBI・三井住友銀行・横浜銀行・アイフルおまとめMAXのおまとめローンを金利・限度額・審査基準で徹底比較。複数借入を一本化して返済額を削減する方法を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/debt-consolidation-comparison` },
};

const faqItems = [
  {
    question: "おまとめローンと借換えローンの違いは？",
    answer:
      "おまとめローンは複数の借入を1つにまとめる商品で、返済日や金利を一本化できます。借換えローンは1つのローンを別の金融機関のローンに乗り換える商品。複数借入の方はおまとめローン、単一の高金利ローンを抱える方は借換えローンを選びましょう。",
  },
  {
    question: "おまとめローンで本当に返済額は減りますか？",
    answer:
      "金利が下がれば月々の返済額・総返済額の両方が減少します。例えば年18%で200万円借りていた場合、年8%のおまとめローンに一本化すれば月々の利息負担が約1.7万円減少。総返済額は数十万円〜100万円以上削減できるケースもあります。",
  },
  {
    question: "総量規制の対象になりますか？",
    answer:
      "貸金業法に基づく消費者金融のおまとめローンは「顧客に一方的に有利となる借換え」として総量規制の例外扱いとなり、年収の3分の1を超えても利用可能です。一方で銀行のおまとめローンは銀行法が適用されるため最初から総量規制対象外です。",
  },
  {
    question: "審査に通るためのコツは？",
    answer:
      "現在の返済状況に延滞がないこと、安定収入があること(勤続1年以上推奨)、他の借入件数が少ないことが重要。借入件数が4社以上あると審査落ちのリスクが高まるため、可能なら申込前に小口の借入を完済しておくと審査通過率が上がります。",
  },
];

const services = [
  { name: "東京スター銀行 おまとめローン", type: "銀行", rate: "年4.5〜12.5%", points: ["最大1,000万円まで対応", "総量規制対象外", "全国どこからでも申込可能"], bestFor: "高額借入を一本化したい人。" },
  { name: "住信SBIネット銀行 MR.おまとめローン", type: "ネット銀行", rate: "年3.775〜12.0%", points: ["WEB完結で来店不要", "他社借入も含めて1,200万円まで", "繰上返済手数料無料"], bestFor: "ネットで完結させたい人。" },
  { name: "三井住友銀行 カードローン", type: "メガバンク", rate: "年1.5〜14.5%", points: ["メガバンクの安心感", "三井住友銀行口座があれば優遇", "ATM手数料無料"], bestFor: "メガバンク利用者。" },
  { name: "横浜銀行 おまとめローン", type: "地方銀行", rate: "年2.4〜14.6%", points: ["最大1,000万円", "神奈川・東京・群馬・愛知に対応", "店舗相談可能"], bestFor: "対面で相談したい首都圏在住者。" },
  { name: "アイフル おまとめMAX", type: "消費者金融", rate: "年3.0〜17.5%", points: ["最大800万円・即日対応も", "総量規制例外で対応可能", "WEB完結対応"], bestFor: "銀行の審査が不安な人。" },
];

export default function DebtConsolidationComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "おまとめローン比較", url: `${siteConfig.url}/guide/debt-consolidation-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】おまとめローン比較おすすめ5選｜金利・返済額を一本化で大幅削減" description="東京スター銀行・住信SBI・三井住友銀行・横浜銀行・アイフルおまとめMAXのおまとめローンを金利・限度額・審査基準で徹底比較。" url={`${siteConfig.url}/guide/debt-consolidation-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>おまとめローン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】おまとめローン比較おすすめ5選｜金利・返済額を一本化で大幅削減
        </h1>
        <p className="text-muted leading-relaxed">
          複数のカードローンや消費者金融からの借入で返済日がバラバラ、毎月の利息負担が重い…という方に最適なのが「おまとめローン」。1つの低金利ローンに一本化することで、月々の返済額・総返済額を大幅に減らせます。本記事では銀行系・消費者金融系のおまとめローン5社を金利・限度額・審査スピードで徹底比較し、最適な選択肢を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">高額借入の一本化 → 東京スター銀行・住信SBI</span></p>
          <p><span className="font-bold">ネット完結派 → 住信SBIネット銀行</span></p>
          <p><span className="font-bold">メガバンクの安心感 → 三井住友銀行</span></p>
          <p><span className="font-bold">審査スピード重視 → アイフルおまとめMAX</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">おまとめローンの仕組みとメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          おまとめローンは、複数の借入を1つの新しいローンで完済し、その新しいローンを返済していく仕組みです。最大のメリットは「金利の低下」と「返済管理の一元化」。年18%で複数社から計300万円借りていた場合、年8%のおまとめローンに乗り換えれば月々の利息負担は約2.5万円減ります。返済期間を延ばさずに金利だけ下げれば、総返済額は100万円以上削減できることも珍しくありません。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          さらに返済日が月1回に統一されるため、引落日忘れによる延滞リスクも減少。「いま何社からいくら借りているか」を把握できないまま自転車操業に陥っている方には、家計再建の第一歩として有効です。
        </p>
        <p className="text-muted leading-relaxed">
          一方で注意点もあります。返済期間を延ばして月々の負担を軽くすると、結果的に総返済額が増えるケースも。「金利を下げる」「期間を延ばさない」を両立させるのが正解です。シミュレーションツールで必ず試算してから申込みましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめおまとめローン5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{s.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 金利・条件は2026年4月時点の参考値です。最新条件は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">おまとめローン選びの注意点</h2>
        <p className="text-muted leading-relaxed mb-4">
          おまとめローンを選ぶ際は「金利の上限」だけでなく「適用される実質金利」を必ず確認しましょう。広告では「年4.5%〜」と書かれていても、実際の借入では上限金利が適用されるケースが多いのが実情です。借入額が大きいほど低金利が適用される傾向があるため、複数行に同時申込して条件を比較するのがおすすめ。
        </p>
        <p className="text-muted leading-relaxed">
          また、おまとめ後に元の借入枠を再利用しないことも重要。せっかく一本化しても、また借入を再開してしまうと借入総額が膨らんで完済が遠のきます。一本化を機にカード本体を解約する勇気も必要です。完済までの計画を立て、家計簿アプリで進捗を管理しましょう。
        </p>
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
            おまとめローンは複数借入で返済が苦しくなった方の強い味方。銀行系は低金利だが審査が厳しめ、消費者金融系は審査スピード重視という特徴があります。乗り換え後は家計簿アプリや会計ソフトで支出を可視化し、二度と多重債務に陥らない家計管理を始めましょう。完済を目標にした行動計画こそが、本当の家計再建につながります。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/cashing-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カードローン比較</span>
            <p className="text-xs text-muted mt-1">即日融資・無利息も解説</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">借換え・金利の選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
