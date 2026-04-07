import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】旅行予約サイトおすすめ比較｜お得に宿泊するコツ",
    description:
      "2026年最新の旅行予約サイトを徹底比較。じゃらんnet・JTB・一休.com・Yahoo!トラベル・アソビュー!の特徴・ポイント還元・お得な使い方を詳しく解説。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/travel-booking-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const bookingServices = [
  {
    name: "じゃらんnet",
    type: "総合宿泊予約",
    pointReturn: "最大10%ポイント還元",
    strength: "リクルート系ポイント連携・口コミ数が豊富",
    feature:
      "リクルートが運営する国内最大級の宿泊予約サイト。Pontaポイントやdポイントとの連携が可能で、ポイント還元率が高い。口コミ・レビューの数が圧倒的に多く、宿選びの参考になる。",
    plans: "国内宿泊・日帰り温泉・レンタカー・遊び体験",
    coupon: "定期的にクーポン配布・じゃらんスペシャルウィーク",
    pros: [
      "ポイント還元率が高い（最大10%）",
      "口コミ・レビュー数が国内最多クラス",
      "Pontaポイント・dポイントと連携可能",
      "クーポン・セールが頻繁に開催",
    ],
    cons: [
      "高級宿の掲載数では一休に劣る",
      "海外ホテルの取り扱いが少ない",
      "サイトの情報量が多くやや探しにくい",
    ],
    bestFor:
      "ポイントを貯めてお得に旅行したい方に最適。Pontaポイントやdポイントを普段使いしている方なら、ポイントの二重取りも可能です。",
    url: "https://www.jalan.net/",
    badge: "ポイント還元No.1",
    color: "orange",
  },
  {
    name: "JTB",
    type: "総合旅行会社",
    pointReturn: "JTBポイント付与",
    strength: "老舗の信頼感・パッケージツアーが充実",
    feature:
      "創業100年以上の歴史を持つ日本最大手の旅行会社。宿泊単体だけでなく、交通+宿泊のパッケージツアーが非常に充実。添乗員付きツアーやダイナミックパッケージなど、旅行スタイルに合わせた多彩なプランが選べる。",
    plans: "国内・海外ツアー・宿泊・航空券・ダイナミックパッケージ",
    coupon: "早期予約割引・タイムセール・会員限定クーポン",
    pros: [
      "パッケージツアーの品揃えが圧倒的",
      "添乗員付きツアーで安心",
      "全国の店舗で対面相談が可能",
      "独自の高品質宿泊プランあり",
    ],
    cons: [
      "宿泊単体の価格は他サイトより高めの場合がある",
      "ネット限定プランが少なめ",
      "ポイント還元率は控えめ",
    ],
    bestFor:
      "初めての旅行先や海外旅行で安心感を重視する方に最適。パッケージツアーなら交通・宿泊・観光がセットで手間いらずです。",
    url: "https://www.jtb.co.jp/",
    badge: "老舗の信頼感",
    color: "red",
  },
  {
    name: "一休.com",
    type: "高級宿泊予約",
    pointReturn: "最大5%ポイント即時利用可",
    strength: "高級ホテル・旅館に特化した厳選ラインナップ",
    feature:
      "ワンランク上のホテル・旅館に特化した宿泊予約サイト。掲載施設を厳選しており、高級旅館やラグジュアリーホテルを中心に質の高い宿泊体験を提供。タイムセールでは高級宿が大幅割引で予約できることも。",
    plans: "高級ホテル・旅館・レストラン予約",
    coupon: "タイムセール・一休ダイヤモンド会員限定プラン",
    pros: [
      "高級宿の掲載数・質がトップクラス",
      "タイムセールで高級宿がお得に",
      "ポイントが即時利用可能",
      "レストラン予約も一緒にできる",
    ],
    cons: [
      "ビジネスホテルなど格安宿の掲載は少ない",
      "掲載施設数は大手予約サイトより少ない",
      "パッケージツアーの取り扱いがない",
    ],
    bestFor:
      "記念日や特別な旅行でワンランク上の宿に泊まりたい方に最適。タイムセールを活用すれば、普段は手が届かない高級宿もお得に予約できます。",
    url: "https://www.ikyu.com/",
    badge: "高級宿に特化",
    color: "purple",
  },
  {
    name: "Yahoo!トラベル",
    type: "総合宿泊予約",
    pointReturn: "最大10%以上PayPayポイント還元",
    strength: "PayPay経済圏との連携でポイントがザクザク貯まる",
    feature:
      "Yahoo! JAPANが運営する旅行予約サイト。PayPayとの連携が最大の強みで、PayPayポイントの還元率が非常に高い。いまだけプランやゾロ目の日クーポンなど独自のキャンペーンも充実。一休.comの宿泊プランも掲載されている。",
    plans: "国内宿泊・ダイナミックパッケージ・レンタカー",
    coupon: "ゾロ目の日クーポン・いまだけプラン・PayPayクーポン",
    pros: [
      "PayPayポイント還元率が非常に高い",
      "一休.comの高級宿プランも予約可能",
      "ゾロ目の日クーポンがお得",
      "Yahoo!プレミアム会員なら還元率アップ",
    ],
    cons: [
      "PayPayを使わない方にはメリットが薄い",
      "海外旅行の取り扱いが少ない",
      "パッケージツアーの種類が限定的",
    ],
    bestFor:
      "PayPayを日常的に使っている方に最適。Yahoo!プレミアム会員ならさらに還元率がアップし、実質的な宿泊費を大幅に抑えられます。",
    url: "https://travel.yahoo.co.jp/",
    badge: "PayPay連携でお得",
    color: "blue",
  },
  {
    name: "アソビュー!",
    type: "体験・レジャー予約",
    pointReturn: "最大2.5%ポイント還元",
    strength: "体験・レジャーの予約に特化した唯一無二のサービス",
    feature:
      "日本最大級の遊び・体験予約サイト。シュノーケリング、パラグライダー、陶芸体験、果物狩りなど約600ジャンル・30,000プランの体験が予約可能。旅先でのアクティビティ予約に最適で、当日予約にも対応している施設が多い。",
    plans: "体験・アクティビティ・レジャー施設チケット・日帰り温泉",
    coupon: "初回利用クーポン・季節限定セール・超特割",
    pros: [
      "体験・アクティビティの品揃え日本最大級",
      "当日予約可能なプランが豊富",
      "電子チケットでスマホ提示のみでOK",
      "割引クーポンで通常より安く体験できる",
    ],
    cons: [
      "宿泊予約には対応していない",
      "地方によっては掲載プランが少ない",
      "人気プランは直前だと売り切れやすい",
    ],
    bestFor:
      "旅先でのアクティビティや週末のお出かけを充実させたい方に最適。宿泊予約サイトと併用することで、旅行全体の満足度が格段にアップします。",
    url: "https://www.asoview.com/",
    badge: "体験予約No.1",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

const faqItems = [
  {
    question: "旅行予約サイトはどれを使えば一番お得ですか？",
    answer:
      "ポイント還元重視ならじゃらんnet（最大10%）やYahoo!トラベル（PayPayポイント最大10%以上）がおすすめです。ただし、使っているポイント経済圏（Pontaポイント、PayPayポイントなど）に合わせて選ぶのが最もお得です。",
  },
  {
    question: "高級ホテルを安く予約するにはどうすればいいですか？",
    answer:
      "一休.comのタイムセールが最も効果的です。通常価格から30〜50%オフになることもあります。また、平日宿泊や直前予約の割引プランも狙い目です。じゃらんやYahoo!トラベルのクーポンと組み合わせるのも有効です。",
  },
  {
    question: "パッケージツアーと個別予約はどちらがお得ですか？",
    answer:
      "一般的に、飛行機を使う遠方への旅行はパッケージツアー（JTBなど）の方がお得になることが多いです。一方、車や電車でのアクセスが便利な近場の旅行は、宿泊単体で予約してポイント還元を受ける方がお得な場合があります。",
  },
  {
    question: "旅行予約のベストタイミングはいつですか？",
    answer:
      "一般的に2〜3ヶ月前の早期予約が最もお得です。早期割引プランが適用されるほか、人気の宿も確保しやすくなります。ただし、直前割引も存在するため、日程に柔軟性がある方は直前予約も狙い目です。",
  },
  {
    question: "旅行予約サイトを複数使い分けるメリットはありますか？",
    answer:
      "大いにあります。例えば、宿泊はじゃらんやYahoo!トラベルでポイント還元を最大化し、現地のアクティビティはアソビュー!で予約するといった使い分けがおすすめです。同じ宿でもサイトによって価格やプラン内容が異なるため、比較して最安を見つけましょう。",
  },
  {
    question: "キャンセル料はどのくらいかかりますか？",
    answer:
      "キャンセルポリシーは宿泊施設やプランによって異なります。一般的には7日前まで無料、3日前から20〜30%、前日50%、当日80〜100%が目安です。予約時に必ずキャンセルポリシーを確認しましょう。無料キャンセル期間が長いプランを選ぶと安心です。",
  },
];

export default function TravelBookingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "旅行予約サイトおすすめ比較",
            url: `${siteConfig.url}/guide/travel-booking-comparison`,
          },
        ]}
      />
      <FAQJsonLd
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>旅行予約サイトおすすめ比較</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            旅行・宿泊
          </span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】旅行予約サイトおすすめ比較｜お得に宿泊するコツ
        </h1>
        <p className="text-muted leading-relaxed">
          「旅行予約サイトが多すぎて、どこで予約すれば一番お得なのかわからない」そんな悩みを持つ方は多いのではないでしょうか。この記事では、2026年現在おすすめの旅行予約サイト5社（じゃらんnet・JTB・一休.com・Yahoo!トラベル・アソビュー!）を特徴・ポイント還元・お得な使い方で徹底比較。あなたの旅行スタイルに合った最適なサイトの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              ポイント重視 → じゃらんnet
            </span>
            （最大10%還元でPontaポイント・dポイントと連携）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              安心重視 → JTB
            </span>
            （パッケージツアー充実・対面相談可能）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              高級宿重視 → 一休.com
            </span>
            （タイムセールで高級宿がお得に）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              PayPayユーザー → Yahoo!トラベル
            </span>
            （PayPayポイント最大10%以上還元）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              体験重視 → アソビュー!
            </span>
            （アクティビティ・レジャー予約に特化）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-booking" className="text-primary hover:underline">
              1. 旅行予約サイトを使うメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 旅行予約サイト5社の特徴比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各サービスの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 旅行タイプ別おすすめサイト
            </a>
          </li>
          <li>
            <a href="#deals-tips" className="text-primary hover:underline">
              5. お得に予約するための5つのコツ
            </a>
          </li>
          <li>
            <a href="#seasonal" className="text-primary hover:underline">
              6. 季節別おすすめの旅行プラン
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              8. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Booking Sites */}
      <section id="why-booking" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 旅行予約サイトを使うメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          旅行予約サイトを活用すれば、自宅にいながら全国の宿泊施設を比較検討でき、ポイント還元やクーポンでお得に予約できます。直接予約にはない独自のメリットを見てみましょう。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128176;",
              title: "ポイント還元でお得に宿泊",
              desc: "旅行予約サイト経由で予約すると、最大10%以上のポイント還元を受けられます。貯まったポイントは次回の旅行や普段の買い物に使えるため、実質的な宿泊費が大幅に下がります。",
            },
            {
              icon: "&#128269;",
              title: "口コミ・レビューで失敗しない宿選び",
              desc: "実際に宿泊した方の口コミやレビューを参考にできるため、写真や公式サイトだけではわからないリアルな情報を事前にチェックできます。",
            },
            {
              icon: "&#127873;",
              title: "クーポン・セールで通常より安く",
              desc: "各サイトが定期的に配布するクーポンやタイムセールを活用すれば、公式サイトよりも安く予約できるケースが多くあります。",
            },
            {
              icon: "&#128197;",
              title: "比較検討が簡単にできる",
              desc: "同じエリアの複数の宿泊施設を料金・評価・設備で一括比較でき、自分に合った宿を効率的に見つけられます。予約の変更やキャンセルもオンラインで完結します。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. 旅行予約サイト5社の特徴比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5社の主要な特徴を一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">じゃらん</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">JTB</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">一休.com</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">Yahoo!トラベル</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">アソビュー!</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "サイト種別",
                  jalan: "宿泊予約",
                  jtb: "総合旅行会社",
                  ikyu: "高級宿予約",
                  yahoo: "宿泊予約",
                  asoview: "体験予約",
                },
                {
                  label: "ポイント還元",
                  jalan: "最大10%",
                  jtb: "JTBポイント",
                  ikyu: "最大5%即時利用",
                  yahoo: "最大10%以上",
                  asoview: "最大2.5%",
                },
                {
                  label: "ポイント種類",
                  jalan: "Pontaポイント",
                  jtb: "JTBポイント",
                  ikyu: "一休ポイント",
                  yahoo: "PayPayポイント",
                  asoview: "アソビューポイント",
                },
                {
                  label: "宿泊施設数",
                  jalan: "約28,000施設",
                  jtb: "約20,000施設",
                  ikyu: "約5,000施設",
                  yahoo: "約17,000施設",
                  asoview: "宿泊なし",
                },
                {
                  label: "パッケージツアー",
                  jalan: "一部あり",
                  jtb: "充実",
                  ikyu: "なし",
                  yahoo: "一部あり",
                  asoview: "なし",
                },
                {
                  label: "海外旅行",
                  jalan: "一部対応",
                  jtb: "充実",
                  ikyu: "なし",
                  yahoo: "一部対応",
                  asoview: "なし",
                },
                {
                  label: "強み",
                  jalan: "口コミ・ポイント",
                  jtb: "ツアー・信頼",
                  ikyu: "高級宿・セール",
                  yahoo: "PayPay連携",
                  asoview: "体験・レジャー",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.jalan}</td>
                  <td className="border border-card-border p-3">{row.jtb}</td>
                  <td className="border border-card-border p-3">{row.ikyu}</td>
                  <td className="border border-card-border p-3">{row.yahoo}</td>
                  <td className="border border-card-border p-3">{row.asoview}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ ポイント還元率・施設数は2026年4月時点の情報です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各サービスの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {bookingServices.map((service, index) => (
            <div
              key={service.name}
              id={`service-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{service.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[service.color]}`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">サイト種別</span>
                  <span className="font-bold">{service.type}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">ポイント還元</span>
                  <span className="font-bold">{service.pointReturn}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">強み</span>
                  <span className="font-bold">{service.strength}</span>
                </div>
              </div>

              {/* Feature Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{service.feature}</p>
                  <p className="text-muted mb-1"><span className="font-medium">取り扱い：</span>{service.plans}</p>
                  <p className="text-muted"><span className="font-medium">クーポン・割引：</span>{service.coupon}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {service.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {service.pros.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">&#9675;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">
                  デメリット
                </h4>
                <ul className="space-y-1">
                  {service.cons.map((c) => (
                    <li
                      key={c}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">&#9651;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={service.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {service.name}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 旅行タイプ別おすすめサイト
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "とにかくお得にポイントを貯めたい",
              service: "じゃらんnet",
              reason:
                "最大10%のポイント還元に加え、Pontaポイントやdポイントとの連携で二重取りが可能。じゃらんスペシャルウィークやクーポンを併用すれば、さらにお得に。口コミ数も多く、宿選びで失敗しにくいのも魅力です。",
              url: "https://www.jalan.net/",
            },
            {
              scene: "パッケージツアーで楽に旅行したい",
              service: "JTB",
              reason:
                "交通+宿泊+観光がセットになったパッケージツアーの品揃えは業界No.1。特に初めての旅行先や海外旅行では、添乗員付きツアーで安心して楽しめます。全国の店舗で対面相談ができるのも大きなメリットです。",
              url: "https://www.jtb.co.jp/",
            },
            {
              scene: "記念日・特別な日にワンランク上の宿に泊まりたい",
              service: "一休.com",
              reason:
                "高級ホテル・旅館に特化した厳選ラインナップが魅力。タイムセールでは通常の30〜50%オフで予約できることもあり、憧れの高級宿に手が届きやすくなります。レストラン予約もできるため、記念日の食事も一緒に手配可能です。",
              url: "https://www.ikyu.com/",
            },
            {
              scene: "PayPayをフル活用してお得に泊まりたい",
              service: "Yahoo!トラベル",
              reason:
                "PayPayポイントの還元率が非常に高く、Yahoo!プレミアム会員ならさらにアップ。ゾロ目の日クーポンやいまだけプランなど独自のキャンペーンも充実しており、PayPay経済圏を使いこなしている方には最もお得な選択肢です。",
              url: "https://travel.yahoo.co.jp/",
            },
            {
              scene: "旅先でのアクティビティ・体験を楽しみたい",
              service: "アソビュー!",
              reason:
                "約600ジャンル・30,000プランの体験が予約可能。シュノーケリング、パラグライダー、陶芸体験、果物狩りなど、旅先でのアクティビティ予約に最適です。当日予約にも対応している施設が多く、急な予定変更にも柔軟に対応できます。",
              url: "https://www.asoview.com/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.service}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.service}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Tips for Getting the Best Deals */}
      <section id="deals-tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. お得に予約するための5つのコツ
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "複数サイトで価格を比較する",
              desc: "同じ宿泊施設でも、予約サイトによって価格やプラン内容が異なります。じゃらん・Yahoo!トラベル・一休.comなど2〜3サイトで比較してから予約しましょう。特にクーポン適用後の実質価格で比較するのがポイントです。",
            },
            {
              num: "2",
              title: "ポイント経済圏に合わせてサイトを選ぶ",
              desc: "普段使っているポイント（Pontaポイント→じゃらん、PayPayポイント→Yahoo!トラベル）に合わせてサイトを選べば、ポイントの二重取りが可能。日常の買い物と旅行でポイントを効率よく貯められます。",
            },
            {
              num: "3",
              title: "早期予約割引を活用する",
              desc: "2〜3ヶ月前の早期予約なら、通常価格から10〜30%オフになるプランが多数。特に人気の宿や繁忙期は早めの予約が必須です。予約後に安いプランが出た場合は、キャンセル・再予約も検討しましょう。",
            },
            {
              num: "4",
              title: "セール・クーポンのタイミングを狙う",
              desc: "じゃらんスペシャルウィーク、Yahoo!トラベルのゾロ目の日クーポン、一休のタイムセールなど、各サイトの定期セールを把握しておきましょう。セール時期に合わせて予約すれば、大幅に節約できます。",
            },
            {
              num: "5",
              title: "平日・オフシーズンを狙う",
              desc: "同じ宿でも平日と週末で料金が大きく異なります。また、GW・お盆・年末年始などの繁忙期を避けるだけで、半額近くになることも。日程に柔軟性があるなら、オフシーズンの平日が最もお得です。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - Seasonal Recommendations */}
      <section id="seasonal" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 季節別おすすめの旅行プラン
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          日本は四季折々の魅力があり、季節によっておすすめの旅行スタイルが変わります。お得に楽しむためのポイントも季節ごとに押さえておきましょう。
        </p>
        <div className="space-y-4">
          {[
            {
              season: "春（3月〜5月）",
              color: "bg-pink-50 dark:bg-pink-900/40 border-pink-200 dark:border-pink-800",
              titleColor: "text-pink-700 dark:text-pink-300",
              highlights: "桜の名所巡り・花見旅行",
              desc: "桜の開花時期に合わせた旅行は大人気。京都・吉野・弘前など桜の名所は早めの予約が必須です。3月上旬〜中旬なら河津桜（静岡）、4月上旬なら関東・関西の桜が見頃。GW前の平日が比較的空いていておすすめです。",
              tip: "GWの予約は2〜3ヶ月前に。GW直前は直前割引が出ることも。",
            },
            {
              season: "夏（6月〜8月）",
              color: "bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800",
              titleColor: "text-blue-700 dark:text-blue-300",
              highlights: "海水浴・花火大会・避暑地",
              desc: "沖縄や離島のビーチリゾート、北海道や信州の避暑地が人気です。アソビュー!でシュノーケリングやSUPなどの体験を予約すれば、旅がさらに充実。夏休み期間は料金が高騰するため、7月上旬や8月下旬が狙い目です。",
              tip: "お盆時期は早期予約必須。6月の梅雨時期は割安でおすすめ。",
            },
            {
              season: "秋（9月〜11月）",
              color: "bg-orange-50 dark:bg-orange-900/40 border-orange-200 dark:border-orange-800",
              titleColor: "text-orange-700 dark:text-orange-300",
              highlights: "紅葉・温泉・グルメ旅",
              desc: "紅葉シーズンの京都・日光・箱根は特に人気。温泉旅館でゆっくり紅葉を楽しむプランがおすすめです。一休.comなら高級温泉旅館がタイムセールでお得に予約できることも。食欲の秋を楽しむグルメ旅も人気です。",
              tip: "紅葉ピーク（11月中旬〜下旬）の京都は3ヶ月前予約を。",
            },
            {
              season: "冬（12月〜2月）",
              color: "bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800",
              titleColor: "text-indigo-700 dark:text-indigo-300",
              highlights: "スキー・温泉・イルミネーション",
              desc: "スキーリゾートや雪景色の温泉宿が人気。年末年始を除けば冬は比較的お得に旅行できるシーズンです。北海道の雪まつり、各地のイルミネーションイベントも魅力。JTBのスキーパッケージならリフト券付きでお得です。",
              tip: "年末年始以外の1〜2月は割安。スキーパッケージが狙い目。",
            },
          ].map((item) => (
            <div
              key={item.season}
              className={`border rounded-xl p-5 ${item.color}`}
            >
              <h3 className={`font-bold mb-2 ${item.titleColor}`}>
                {item.season} - {item.highlights}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-2">
                {item.desc}
              </p>
              <p className="text-xs font-medium text-muted">
                &#128161; {item.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            旅行予約サイトは、それぞれ得意な分野やポイント経済圏が異なります。自分の旅行スタイルや普段使っているポイントに合わせて選ぶことが、お得な旅行への第一歩です。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/40 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">
                じゃらんnet
              </span>
              <span className="text-sm text-muted">
                → 最大10%ポイント還元。口コミ豊富で宿選びに最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/40 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                JTB
              </span>
              <span className="text-sm text-muted">
                → パッケージツアー充実。対面相談で安心の旅行計画。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                一休.com
              </span>
              <span className="text-sm text-muted">
                → 高級宿に特化。タイムセールで憧れの宿がお得に。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                Yahoo!トラベル
              </span>
              <span className="text-sm text-muted">
                → PayPayポイント最大10%以上還元。ゾロ目クーポンも。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                アソビュー!
              </span>
              <span className="text-sm text-muted">
                → 体験・レジャー予約に特化。旅先のアクティビティに。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            複数のサイトを目的に応じて使い分けることで、旅行全体の満足度とお得度が格段にアップします。まずは気になるサイトをチェックしてみましょう。
          </p>
        </div>
      </section>

      {/* Affiliate CTAs */}
      <div className="space-y-6 my-8">
        <h3 className="text-xl font-bold text-center">おすすめ旅行予約サイト</h3>
        <AffiliateCTA serviceName="じゃらんnet" url="https://www.jalan.net/" badge="ポイント還元No.1" description="最大10%ポイント還元・口コミ数が国内最多クラス" color="orange" />
        <AffiliateCTA serviceName="JTB" url="https://www.jtb.co.jp/" badge="老舗の信頼感" description="パッケージツアー充実・対面相談で安心" color="red" />
        <AffiliateCTA serviceName="一休.com" url="https://www.ikyu.com/" badge="高級宿に特化" description="タイムセールで高級ホテル・旅館がお得に" color="purple" />
        <AffiliateCTA serviceName="Yahoo!トラベル" url="https://travel.yahoo.co.jp/" badge="PayPay連携" description="PayPayポイント最大10%以上還元" color="blue" />
        <AffiliateCTA serviceName="アソビュー!" url="https://www.asoview.com/" badge="体験予約No.1" description="約600ジャンルの体験・レジャーが予約可能" color="green" />
      </div>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          QRコード作成やパスワード生成など、日常に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/qr-code-generator"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            QRコード作成ツールを使う
          </Link>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイド記事を見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          あなたに最適な旅行予約サイトを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          ポイント還元やクーポンを活用して、お得に旅行を楽しみましょう。まずは気になるサイトをチェック！
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.jalan.net/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            じゃらんnet
          </a>
          <a
            href="https://www.jtb.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            JTB
          </a>
          <a
            href="https://www.ikyu.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            一休.com
          </a>
          <a
            href="https://travel.yahoo.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Yahoo!トラベル
          </a>
          <a
            href="https://www.asoview.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            アソビュー!
          </a>
        </div>
      </section>
    </div>
  );
}
