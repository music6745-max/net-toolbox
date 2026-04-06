import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ポケットWiFi・ホームルーター比較おすすめ5選｜料金・速度・エリアを徹底解説",
    description:
      "2026年最新のポケットWiFi・ホームルーターを徹底比較。WiMAX（GMOとくとくBB）・楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAirの月額料金・通信速度・対応エリアを詳しく解説。",
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
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: `${siteConfig.url}/guide/wifi-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const wifiServices = [
  {
    name: "WiMAX（GMOとくとくBB）",
    type: "モバイルルーター / ホームルーター",
    price: "月額1,375円〜4,807円",
    plan: "ギガ放題プラスS",
    data: "実質無制限（スタンダードモード）",
    dataDetail: "スタンダードモード：実質無制限。プラスエリアモード：月30GBまで",
    speed: "下り最大4.2Gbps（5G対応）",
    speedDetail: "Speed Wi-Fi HOME 5G L13：下り最大4.2Gbps。モバイルルーターSpeed Wi-Fi 5G X12：下り最大3.9Gbps",
    area: "WiMAX 2+エリア＋au 5G/4G LTEエリア",
    contract: "2年契約（端末代36回分割）",
    pros: [
      "月額料金が他社と比べて最も安い（キャッシュバック込み）",
      "データ実質無制限で速度制限なし",
      "au 5G/4G LTEエリアにも対応で広範囲カバー",
      "モバイルルーターとホームルーターの両方を選べる",
      "最短即日発送で届いたらすぐ使える",
      "高額キャッシュバックキャンペーンが魅力",
    ],
    cons: [
      "キャッシュバック受け取りが約11ヶ月後でやや複雑",
      "建物内や地下ではつながりにくい場合がある",
      "端末代が実質有料（36回分割で支払い）",
    ],
    bestFor:
      "コスパ重視でデータ無制限のWiFiを使いたい方に最適。キャッシュバック込みの実質料金は業界最安クラスで、持ち運びも自宅利用も対応できます。",
    url: "https://gmobb.jp/wimax/",
    badge: "コスパ最強",
    color: "green",
  },
  {
    name: "楽天モバイル（Rakuten WiFi Pocket）",
    type: "モバイルルーター",
    price: "月額1,078円〜3,278円",
    plan: "Rakuten最強プラン",
    data: "3GB / 20GB / 無制限（段階制）",
    dataDetail: "3GBまで1,078円・20GBまで2,178円・無制限3,278円の段階制料金",
    speed: "下り最大150Mbps（5G対応エリア拡大中）",
    speedDetail: "Rakuten WiFi Pocket 2C：下り最大150Mbps。楽天回線5Gエリアでは高速通信可能",
    area: "楽天回線エリア＋パートナー回線（au）エリア",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "データ無制限で月額3,278円は最安クラス",
      "使った分だけの段階制料金で無駄がない",
      "契約期間の縛りなし・解約金なし",
      "端末代が1円キャンペーンで実質無料",
      "楽天ポイントが貯まる・使える",
      "テザリングも無制限",
    ],
    cons: [
      "楽天回線エリア外ではパートナー回線に切り替わる",
      "建物内や地下で電波が弱い場合がある",
      "モバイルルーター端末の最大速度が控えめ",
    ],
    bestFor:
      "縛りなしでデータ無制限のモバイルWiFiを使いたい方に最適。段階制料金なので使わない月は安く、使う月も3,278円で済みます。",
    url: "https://network.mobile.rakuten.co.jp/",
    badge: "縛りなし最安",
    color: "pink",
  },
  {
    name: "ドコモ home 5G",
    type: "ホームルーター",
    price: "月額4,950円",
    plan: "home 5G プラン",
    data: "無制限",
    dataDetail: "データ量無制限。ただし大量通信時は速度制限の場合あり",
    speed: "下り最大4.2Gbps（5G対応）",
    speedDetail: "home 5G HR02：下り最大4.2Gbps。Wi-Fi 6対応で複数端末でも安定",
    area: "ドコモ 5G/4G LTEエリア（全国カバー率99%以上）",
    contract: "契約期間の縛りなし（端末代71,280円・36回分割で実質無料）",
    pros: [
      "ドコモの広いエリアで安定した通信品質",
      "下り最大4.2Gbpsの高速通信",
      "データ量無制限で速度制限がほぼない",
      "工事不要でコンセントに挿すだけ",
      "Wi-Fi 6対応で複数端末でも快適",
      "ドコモスマホとのセット割で最大1,100円割引",
    ],
    cons: [
      "月額4,950円と他社ホームルーターに比べやや高め",
      "登録住所でのみ使用可能（持ち運び不可）",
      "端末代71,280円（36ヶ月利用で実質無料だが途中解約で残債あり）",
    ],
    bestFor:
      "通信品質と安定性を最重視する方に最適。ドコモの広いエリアと高速通信で、光回線の代わりとしても十分な性能です。",
    url: "https://www.docomo.ne.jp/home_5g/",
    badge: "通信品質No.1",
    color: "red",
  },
  {
    name: "ソフトバンクAir",
    type: "ホームルーター",
    price: "月額5,368円（割引後3,080円〜）",
    plan: "Air 4G/5Gプラン",
    data: "無制限",
    dataDetail: "データ量無制限。夜間など混雑時は速度制限の場合あり",
    speed: "下り最大2.1Gbps（5G対応）",
    speedDetail: "Airターミナル5：下り最大2.1Gbps。Wi-Fi 6対応",
    area: "ソフトバンク 5G/4G LTEエリア",
    contract: "契約期間の縛りなし（端末代71,280円・36回分割で実質無料）",
    pros: [
      "スマホセット割で家族のソフトバンクスマホが毎月1,100円割引",
      "SoftBank Airスタート割プラスで最初の2年間は月額割引",
      "工事不要でコンセントに挿すだけ",
      "データ量無制限",
      "Wi-Fi 6対応で複数端末に対応",
      "他社回線からの乗り換えで違約金負担キャンペーンあり",
    ],
    cons: [
      "夜間の混雑時に速度が低下しやすい",
      "登録住所でのみ使用可能（持ち運び不可）",
      "定価月額5,368円は割引終了後に高くなる",
    ],
    bestFor:
      "ソフトバンクスマホユーザーの方に最適。スマホセット割で家族全員のスマホ代が安くなるため、家族で利用するとトータルコストが大幅に下がります。",
    url: "https://www.softbank.jp/internet/air/",
    badge: "スマホセット割",
    color: "blue",
  },
  {
    name: "モバレコAir",
    type: "ホームルーター",
    price: "月額2,167円〜（割引適用時）",
    plan: "モバレコAir 5Gプラン",
    data: "無制限",
    dataDetail: "ソフトバンクAirと同じ回線・端末でデータ量無制限",
    speed: "下り最大2.1Gbps（5G対応）",
    speedDetail: "Airターミナル5（ソフトバンクAirと同一端末）：下り最大2.1Gbps",
    area: "ソフトバンク 5G/4G LTEエリア",
    contract: "契約期間の縛りなし（端末代71,280円・36回分割で実質無料）",
    pros: [
      "ソフトバンクAirと同じ回線・端末で月額料金がさらに安い",
      "独自割引で最初の2年間は月額2,167円〜",
      "17,000円キャッシュバックキャンペーンあり",
      "データ量無制限で使い放題",
      "工事不要でコンセントに挿すだけ",
      "ソフトバンクスマホセット割も適用可能",
    ],
    cons: [
      "夜間の混雑時に速度が低下しやすい（ソフトバンクAirと同じ）",
      "登録住所でのみ使用可能（持ち運び不可）",
      "割引終了後は月額料金が上がる",
    ],
    bestFor:
      "ホームルーターをとにかく安く使いたい方に最適。ソフトバンクAirと同じ回線・端末でありながら、独自割引で月額料金が大幅に安くなります。",
    url: "https://air-mobareco.jp/",
    badge: "ホームルーター最安",
    color: "purple",
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
};

const faqItems = [
  {
    question: "ポケットWiFiとホームルーターの違いは何ですか？",
    answer:
      "ポケットWiFiは持ち運びできるモバイルルーターで、外出先でもインターネットが使えます。ホームルーターは自宅据え置き型で、登録住所でのみ使用可能ですが、通信速度や接続台数でポケットWiFiより優れています。自宅メインならホームルーター、外出先でも使うならポケットWiFiがおすすめです。",
  },
  {
    question: "光回線とホームルーターはどちらがいいですか？",
    answer:
      "通信速度と安定性では光回線が優れていますが、工事が不要で即日使えるのがホームルーターのメリットです。オンラインゲームや大容量データのやり取りが多い方は光回線、手軽に使いたい方や引っ越しが多い方はホームルーターが向いています。",
  },
  {
    question: "データ無制限でも速度制限はかかりますか？",
    answer:
      "WiMAXは2022年に3日間制限が撤廃され、現在は実質無制限です。ドコモhome5Gも基本的に制限なしですが、大量通信時は制限がかかる場合があります。ソフトバンクAir/モバレコAirは夜間の混雑時に速度が低下しやすい傾向があります。",
  },
  {
    question: "マンションでもホームルーターは使えますか？",
    answer:
      "はい、マンションでも問題なく使えます。工事不要でコンセントに挿すだけなので、賃貸でも管理会社への確認は不要です。ただし、高層階や地下では電波が弱くなる場合があるため、各社の8日間お試し制度を活用することをおすすめします。",
  },
  {
    question: "ポケットWiFiの通信速度は動画視聴に十分ですか？",
    answer:
      "はい、一般的な動画視聴には十分です。YouTube（HD画質）の視聴に必要な速度は約5Mbpsで、ポケットWiFiの実測値は通常10〜50Mbps程度です。4K動画やオンラインゲームなど高速通信が必要な場合は、ホームルーターや光回線を検討しましょう。",
  },
  {
    question: "契約前にエリアを確認する方法はありますか？",
    answer:
      "各社の公式サイトでエリアマップを確認できます。WiMAXはUQ WiMAXのエリアマップ、ドコモhome5Gはドコモのサービスエリアマップ、ソフトバンクAir/モバレコAirはソフトバンクの住所別下り最大通信速度ページで確認可能です。",
  },
  {
    question: "ホームルーターは引っ越し先でもそのまま使えますか？",
    answer:
      "はい、各社のマイページやサポート窓口で登録住所を変更すれば、引っ越し先でもそのまま使えます。光回線のような移転工事は不要です。ただし、引っ越し先がサービスエリア内であることを事前に確認しておきましょう。",
  },
];

export default function WifiComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "ポケットWiFi・ホームルーター比較おすすめ5選",
            url: `${siteConfig.url}/guide/wifi-comparison`,
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
        <span>ポケットWiFi・ホームルーター比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            WiFi
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ポケットWiFi・ホームルーター比較おすすめ5選｜料金・速度・エリアを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「工事なしでインターネットを使いたい」「ポケットWiFiとホームルーター、どっちがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのポケットWiFi・ホームルーター5社（WiMAX・楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAir）を月額料金・データ容量・通信速度・対応エリア・契約条件で徹底比較します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              コスパ最重視 → WiMAX（GMOとくとくBB）
            </span>
            （キャッシュバック込みで実質最安）
          </p>
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              縛りなしで気軽に → 楽天モバイル
            </span>
            （解約金なし＋段階制料金）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              通信品質最重視 → ドコモ home 5G
            </span>
            （ドコモ回線で最速＋広エリア）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              ホームルーターを安く → モバレコAir
            </span>
            （ソフトバンクAirと同品質で最安）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-wifi" className="text-primary hover:underline">
              1. ポケットWiFi・ホームルーターのメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 5社の料金・スペック比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各社の詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめWiFi
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. WiFiサービスの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              6. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              7. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why WiFi */}
      <section id="why-wifi" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. ポケットWiFi・ホームルーターのメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          光回線の工事ができない方や、手軽にインターネット環境を整えたい方に、ポケットWiFi・ホームルーターは最適な選択肢です。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128268;",
              title: "工事不要ですぐ使える",
              desc: "届いたその日からインターネットが使えます。光回線のような開通工事は不要。賃貸マンションでも管理会社への確認は必要ありません。",
            },
            {
              icon: "&#128176;",
              title: "光回線より月額料金が安い",
              desc: "光回線は月額4,000〜6,000円程度ですが、ポケットWiFi・ホームルーターなら月額2,000〜5,000円で利用可能。キャッシュバック込みならさらにお得です。",
            },
            {
              icon: "&#128241;",
              title: "引っ越し時も手続き簡単",
              desc: "住所変更の手続きだけで引っ越し先でもそのまま使えます。光回線のような移転工事や新規開通待ちは不要です。",
            },
            {
              icon: "&#128246;",
              title: "5G対応で高速通信が可能",
              desc: "最新のホームルーターは下り最大4.2Gbpsに対応。動画視聴やテレワークなど、日常的な用途には十分な速度を提供します。",
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
          2. 5社の料金・スペック比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">WiMAX</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">楽天モバイル</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">home 5G</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">SB Air</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">モバレコAir</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金",
                  wimax: "1,375〜4,807円",
                  rakuten: "1,078〜3,278円",
                  home5g: "4,950円",
                  sbair: "5,368円",
                  mobareco: "2,167円〜",
                },
                {
                  label: "データ容量",
                  wimax: "実質無制限",
                  rakuten: "無制限（段階制）",
                  home5g: "無制限",
                  sbair: "無制限",
                  mobareco: "無制限",
                },
                {
                  label: "タイプ",
                  wimax: "両対応",
                  rakuten: "モバイル",
                  home5g: "ホーム",
                  sbair: "ホーム",
                  mobareco: "ホーム",
                },
                {
                  label: "最大速度",
                  wimax: "4.2Gbps",
                  rakuten: "150Mbps",
                  home5g: "4.2Gbps",
                  sbair: "2.1Gbps",
                  mobareco: "2.1Gbps",
                },
                {
                  label: "5G対応",
                  wimax: "対応",
                  rakuten: "対応",
                  home5g: "対応",
                  sbair: "対応",
                  mobareco: "対応",
                },
                {
                  label: "持ち運び",
                  wimax: "可能",
                  rakuten: "可能",
                  home5g: "不可",
                  sbair: "不可",
                  mobareco: "不可",
                },
                {
                  label: "契約期間",
                  wimax: "2年",
                  rakuten: "なし",
                  home5g: "なし",
                  sbair: "なし",
                  mobareco: "なし",
                },
                {
                  label: "端末代",
                  wimax: "27,720円(分割)",
                  rakuten: "実質1円",
                  home5g: "実質無料",
                  sbair: "実質無料",
                  mobareco: "実質無料",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.wimax}</td>
                  <td className="border border-card-border p-3">{row.rakuten}</td>
                  <td className="border border-card-border p-3">{row.home5g}</td>
                  <td className="border border-card-border p-3">{row.sbair}</td>
                  <td className="border border-card-border p-3">{row.mobareco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各社の詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {wifiServices.map((wifi, index) => (
            <div
              key={wifi.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{wifi.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[wifi.color]}`}
                >
                  {wifi.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{wifi.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">データ容量</span>
                  <span className="font-bold">{wifi.data}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">タイプ</span>
                  <span className="font-bold">{wifi.type}</span>
                </div>
              </div>

              {/* Plan Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">プラン詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{wifi.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">データ：</span>{wifi.dataDetail}</p>
                  <p className="text-muted mb-1"><span className="font-medium">速度：</span>{wifi.speedDetail}</p>
                  <p className="text-muted"><span className="font-medium">エリア：</span>{wifi.area}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {wifi.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {wifi.pros.map((p) => (
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
                  {wifi.cons.map((c) => (
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
                  href={wifi.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {wifi.name}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用タイプ別おすすめWiFi
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "外出先でもWiFiを使いたい（出張・カフェ作業）",
              wifi: "WiMAX（GMOとくとくBB）",
              reason:
                "モバイルルーターを選べば外出先でも高速通信が可能。データ実質無制限なのでテザリングの代わりにもなります。キャッシュバック込みの実質料金は業界最安クラスです。",
              url: "https://gmobb.jp/wimax/",
            },
            {
              scene: "自宅の光回線代わりに使いたい",
              wifi: "ドコモ home 5G",
              reason:
                "下り最大4.2Gbpsの高速通信で、光回線の代わりとして十分な性能。ドコモの広いエリアカバーと安定した通信品質で、テレワークや動画視聴も快適です。",
              url: "https://www.docomo.ne.jp/home_5g/",
            },
            {
              scene: "とにかく安くホームルーターを使いたい",
              wifi: "モバレコAir",
              reason:
                "ソフトバンクAirと同じ回線・端末でありながら、独自割引で月額2,167円から使えます。キャッシュバックも含めると最安クラスのホームルーターです。",
              url: "https://air-mobareco.jp/",
            },
            {
              scene: "契約の縛りなしで気軽に試したい",
              wifi: "楽天モバイル",
              reason:
                "契約期間の縛りなし・解約金なしで、端末も実質1円。使った分だけの段階制料金なので、合わなければすぐに解約できます。まず試してみたい方に最適です。",
              url: "https://network.mobile.rakuten.co.jp/",
            },
            {
              scene: "家族のスマホ代もまとめて節約したい",
              wifi: "ソフトバンクAir",
              reason:
                "ソフトバンクスマホとのセット割で家族全員のスマホ代が毎月1,100円割引。家族4人なら月4,400円の割引になり、トータルコストが大幅に下がります。",
              url: "https://www.softbank.jp/internet/air/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.wifi}
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
                {item.wifi.split("（")[0]}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. WiFiサービスの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "利用場所を明確にする",
              desc: "自宅のみならホームルーター、外出先でも使うならポケットWiFiを選びましょう。WiMAXなら両方のタイプから選べるので迷った場合に便利です。",
            },
            {
              num: "2",
              title: "月額料金と実質料金を比較する",
              desc: "月額料金だけでなく、キャッシュバックや端末代を含めた実質料金で比較しましょう。WiMAXはキャッシュバック込みで最安、モバレコAirは月額割引で安くなります。",
            },
            {
              num: "3",
              title: "対応エリアを確認する",
              desc: "各社の公式サイトでお住まいの地域がサービスエリア内か確認しましょう。ドコモhome5Gはエリアが最も広く、WiMAXはau回線との併用で広範囲をカバーします。",
            },
            {
              num: "4",
              title: "通信速度の実測値を調べる",
              desc: "カタログスペックだけでなく、実際の通信速度（実測値）を口コミサイトなどで確認しましょう。ドコモhome5GとWiMAXが実測値でも高速です。",
            },
            {
              num: "5",
              title: "契約期間と解約金を確認する",
              desc: "WiMAXは2年契約ですが、楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAirは契約期間の縛りなし。ただし端末分割中の解約は残債が発生します。",
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

      {/* Section 6 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
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

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            ポケットWiFi・ホームルーターは工事不要で手軽にインターネット環境を整えられる優れた選択肢です。5社の特徴を踏まえて、あなたに最適なサービスを選びましょう。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                WiMAX
              </span>
              <span className="text-sm text-muted">
                → キャッシュバック込みで実質最安。持ち運びも自宅も対応。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <span className="font-bold text-pink-700 dark:text-pink-300 flex-shrink-0">
                楽天モバイル
              </span>
              <span className="text-sm text-muted">
                → 縛りなし＋段階制料金。気軽に試せるモバイルWiFi。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                ドコモ home 5G
              </span>
              <span className="text-sm text-muted">
                → 通信品質と速度で最強。光回線の代わりに最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                ソフトバンクAir
              </span>
              <span className="text-sm text-muted">
                → スマホセット割でトータルコスト削減。SBユーザーに。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                モバレコAir
              </span>
              <span className="text-sm text-muted">
                → SB Airと同品質で最安。ホームルーターを安く使うならこれ。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            いずれも工事不要で届いたその日から使えます。まずは気になるサービスに申し込んでみましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          通信速度テストやQRコード作成など、WiFi活用に役立つ無料ツールも用意しています。
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
          あなたに最適なWiFiサービスを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          工事不要で届いたその日からインターネットが使えます。どのサービスもデータ無制限で、合わなければ乗り換えも簡単です。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://gmobb.jp/wimax/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            WiMAX
          </a>
          <a
            href="https://network.mobile.rakuten.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
          >
            楽天モバイル
          </a>
          <a
            href="https://www.docomo.ne.jp/home_5g/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            ドコモ home 5G
          </a>
          <a
            href="https://www.softbank.jp/internet/air/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            ソフトバンクAir
          </a>
          <a
            href="https://air-mobareco.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            モバレコAir
          </a>
        </div>
      </section>
    </div>
  );
}
