import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】自転車保険比較おすすめ5選｜義務化対応・保険料・補償内容を徹底解説",
  description:
    "au損保・セブン-イレブン・楽天損保・ZuttoRide・三井住友海上の自転車保険を保険料・補償・示談交渉サービスで徹底比較。義務化エリアと加入のポイントも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/bicycle-insurance-comparison` },
};

const faqItems = [
  {
    question: "自転車保険は本当に必要ですか？",
    answer:
      "歩行者との接触事故で1億円近い賠償命令が出た判例もあり、家計に与えるダメージは甚大です。多くの自治体で加入が義務化されており、月150〜300円程度で個人賠償責任1億円が付帯できるため、加入する価値は十分にあります。",
  },
  {
    question: "火災保険や自動車保険の特約と重複しませんか？",
    answer:
      "個人賠償責任特約はすでに加入している火災保険・自動車保険・クレジットカードに付帯しているケースがあります。重複契約は無駄なので、加入前に必ず既存契約を確認しましょう。",
  },
  {
    question: "家族全員を補償するプランはありますか？",
    answer:
      "ほとんどの自転車保険に「家族プラン」があり、本人＋配偶者＋同居の親族＋別居の未婚の子まで補償対象になります。月300〜500円前後で家族全員カバーできるためコスパが良いです。",
  },
  {
    question: "義務化エリアで未加入だとどうなりますか？",
    answer:
      "罰則はない自治体がほとんどですが、事故時に高額賠償を全額自己負担するリスクがあります。東京都・大阪府・兵庫県・神奈川県など全国30以上の自治体で加入義務化されています。",
  },
];

const services = [
  {
    name: "au損保 Bycle",
    type: "ネット完結・示談交渉付き",
    price: "月額340円〜（本人型）",
    points: [
      "個人賠償責任2億円・示談交渉サービス付き",
      "ロードサービス無料付帯（自転車レッカー）",
      "auユーザー以外も加入可能",
    ],
    bestFor: "示談交渉サービスを重視する方、ロードサービスも欲しい方。",
  },
  {
    name: "セブン-イレブン 自転車保険",
    type: "コンビニ加入・即日加入",
    price: "年額3,990円〜（本人型）",
    points: [
      "セブン-イレブンの店頭・ネットで簡単加入",
      "個人賠償責任3億円・示談交渉付き",
      "三井住友海上引受で安心感",
    ],
    bestFor: "今すぐ義務化に対応したい方、コンビニで手続きしたい方。",
  },
  {
    name: "楽天損保 サイクルアシスト",
    type: "楽天ポイント貯まる",
    price: "年額3,520円〜（本人型）",
    points: [
      "個人賠償責任3億円補償",
      "楽天ポイントで支払い・受取りが可能",
      "示談交渉サービス付帯",
    ],
    bestFor: "楽天経済圏を活用しているユーザー。",
  },
  {
    name: "ZuttoRide サイクルケア",
    type: "盗難補償特化",
    price: "年額2,980円〜",
    points: [
      "ロードバイク・クロスバイクの盗難補償が手厚い",
      "ロードサービス・パンク修理対応",
      "高額自転車ユーザー向けプラン充実",
    ],
    bestFor: "ロードバイクなど高額自転車を所有する方。",
  },
  {
    name: "三井住友海上 ネットde保険＠さいくる",
    type: "大手損保・家族プラン充実",
    price: "年額3,990円〜（家族型）",
    points: [
      "個人賠償責任無制限プランあり",
      "家族全員が補償対象",
      "大手損保の安心感とサポート体制",
    ],
    bestFor: "家族全員を補償したい方、大手損保を選びたい方。",
  },
];

export default function BicycleInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自転車保険比較", url: `${siteConfig.url}/guide/bicycle-insurance-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】自転車保険比較おすすめ5選｜義務化対応・保険料・補償内容を徹底解説" description="au損保・セブン-イレブン・楽天損保・ZuttoRide・三井住友海上の自転車保険を保険料・補償・示談交渉サービスで徹底比較。義務化エリアと加入のポイントも解説。" url={`${siteConfig.url}/guide/bicycle-insurance-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>自転車保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】自転車保険比較おすすめ5選｜義務化対応・保険料・補償内容を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          全国30以上の自治体で加入が義務化されている自転車保険。歩行者との接触事故では1億円近い賠償命令が出た判例もあり、月数百円の保険料で家計を守る重要な備えになります。2026年現在の主要5社の保険料・補償内容・示談交渉サービスを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">示談交渉とロードサービス → au損保 Bycle</span></p>
          <p><span className="font-bold">即日加入したい → セブン-イレブン 自転車保険</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天損保 サイクルアシスト</span></p>
          <p><span className="font-bold">高額ロードバイク → ZuttoRide サイクルケア</span></p>
          <p><span className="font-bold">家族全員カバー → 三井住友海上 ネットde保険＠さいくる</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">自転車保険選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          自転車保険は「個人賠償責任補償」と「自分のケガの補償」の2つで成り立ちます。重要なのは前者で、最低でも1億円、できれば無制限の補償額を選びましょう。過去には小学生が起こした事故で9,521万円の賠償命令が出たケースもあります。さらに「示談交渉サービス」が付いていると、相手方との交渉を保険会社が代行してくれるため精神的負担が大きく減ります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          注意したいのが既存契約との重複です。火災保険・自動車保険・クレジットカードに「個人賠償責任特約」が付帯しているケースは多く、月100〜200円の特約追加だけで自転車事故もカバーできることがあります。新規加入前に必ず手元の保険証券を確認しましょう。家族プランを選ぶと本人＋配偶者＋同居親族＋別居の未婚の子まで補償対象となり、コスパが大きく上がります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ自転車保険5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考保険料：{s.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 保険料は2026年4月時点の参考値です。最新のプラン内容・保険料は各社公式サイトでご確認ください。</p>
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
            自転車保険は月数百円の出費で1億円超の賠償リスクから家計を守れる、コスパの高い備えです。義務化エリアの方はもちろん、義務化されていなくても加入を強く推奨します。既存の火災・自動車保険との重複を避けつつ、家族プラン・示談交渉サービス付きを優先して選ぶのが正解。補償額や既存保険の特約を定期的に見直せば、無駄な保険や重複契約を削減しながら安心を確保できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">自転車保険の見直しに役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/insurance-need-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">保険必要額計算</span>
            <p className="text-xs text-muted mt-1">補償額の考え方を整理</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">家計全体の保険も見直す</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">特約や重複補償の確認に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">生命保険・医療保険も合わせて見直し</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">自動車保険の特約も要チェック</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
