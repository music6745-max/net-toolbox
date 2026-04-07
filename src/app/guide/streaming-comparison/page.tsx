import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】動画配信サービス比較おすすめ6選｜料金・作品数・画質を徹底解説",
    description:
      "2026年最新の動画配信サービスを徹底比較。Amazon Prime Video・Netflix・U-NEXT・Disney+・Hulu・ABEMAプレミアムの月額料金・作品数・画質・特徴を詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/streaming-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const streamingServices = [
  {
    name: "Amazon Prime Video",
    price: "月額600円（年額5,900円）",
    content: "非公開（数万本以上）",
    quality: "4K HDR対応",
    feature:
      "Prime会員特典（送料無料・音楽等）込みで最安、オリジナル作品も充実",
    simultaneous: "同時視聴3台",
    download: "対応",
    pros: [
      "月額600円で動画以外の特典も充実",
      "オリジナル作品が豊富",
      "同時視聴3台",
      "ダウンロード対応",
    ],
    cons: [
      "一部作品は追加課金（レンタル）",
      "UIがやや分かりにくい",
      "見放題と有料が混在",
    ],
    bestFor:
      "コスパ重視の方に最適。月額600円で動画だけでなくAmazonの送料無料・Prime Music・Prime Readingなど多数の特典が利用できます。",
    url: "https://www.amazon.co.jp/primevideo",
    badge: "コスパ最強",
    color: "blue",
  },
  {
    name: "Netflix",
    price: "月額790円〜1,980円（広告つき790円 / スタンダード1,490円 / プレミアム1,980円）",
    content: "非公開（数万本）",
    quality: "4K HDR対応（プレミアム）",
    feature:
      "世界最大の動画配信サービス、オリジナルコンテンツの質と量が圧倒的",
    simultaneous: "プランにより1〜4台",
    download: "対応",
    pros: [
      "オリジナル作品の質が高い",
      "全作品見放題（追加課金なし）",
      "多言語字幕・吹替対応",
      "レコメンド精度が高い",
    ],
    cons: [
      "日本のアニメ・ドラマは他社に劣る場合",
      "最安プランは広告あり",
      "料金が値上げ傾向",
    ],
    bestFor:
      "海外ドラマやオリジナル作品を楽しみたい方におすすめ。全作品が見放題で追加課金がないため、安心して利用できます。",
    url: "https://www.netflix.com/jp/",
    badge: "オリジナル作品No.1",
    color: "red",
  },
  {
    name: "U-NEXT",
    price: "月額2,189円",
    content: "32万本以上（見放題）",
    quality: "4K対応作品あり",
    feature:
      "見放題作品数国内No.1、毎月1,200ポイント付与、雑誌読み放題も込み",
    simultaneous: "同時視聴4台",
    download: "対応",
    pros: [
      "見放題作品数が圧倒的No.1",
      "毎月1,200円分のポイント付与（実質989円）",
      "雑誌190誌以上読み放題",
      "アダルトコンテンツも視聴可能",
    ],
    cons: [
      "月額料金が高め",
      "ポイントを使わないと割高感",
      "UIデザインがやや古い",
    ],
    bestFor:
      "作品数を重視する方に最適。毎月1,200ポイントが付与されるため、実質989円で32万本以上が見放題。雑誌も読み放題で総合的なコンテンツ量は圧倒的です。",
    url: "https://video.unext.jp/",
    badge: "作品数No.1",
    color: "purple",
  },
  {
    name: "Disney+",
    price: "月額990円（年額9,900円）",
    content: "21,000本以上",
    quality: "4K HDR/Dolby Atmos対応",
    feature:
      "ディズニー・ピクサー・マーベル・スターウォーズ・ナショジオの独占配信",
    simultaneous: "同時視聴4台",
    download: "対応",
    pros: [
      "ディズニー関連作品が全て見られる",
      "家族向けコンテンツが充実",
      "同時視聴4台",
      "スター（海外ドラマ・映画）も充実",
    ],
    cons: [
      "日本の作品は少ない",
      "オリジナル以外の一般作品は少なめ",
    ],
    bestFor:
      "お子さまがいるご家庭やディズニー・マーベルファンに最適。ディズニー・ピクサー・マーベル・スターウォーズの作品が全て見られるのはDisney+だけです。",
    url: "https://www.disneyplus.com/ja-jp",
    badge: "ファミリー向け",
    color: "blue",
  },
  {
    name: "Hulu",
    price: "月額1,026円",
    content: "10万本以上",
    quality: "フルHD対応",
    feature:
      "日本テレビ系のドラマ・バラエティの見逃し配信が充実、海外ドラマも豊富",
    simultaneous: "同時視聴4台（条件あり）",
    download: "対応",
    pros: [
      "日テレ系の見逃し配信が充実",
      "海外ドラマのラインナップが豊富",
      "全作品見放題",
      "リアルタイム配信あり",
    ],
    cons: [
      "4K未対応",
      "同時視聴が4台まで（条件あり）",
      "オリジナル作品は少なめ",
    ],
    bestFor:
      "日テレ系のドラマやバラエティを見逃したくない方におすすめ。海外ドラマのラインナップも豊富で、月額1,026円で全作品見放題です。",
    url: "https://www.hulu.jp/",
    badge: "日テレ系に強い",
    color: "green",
  },
  {
    name: "ABEMAプレミアム",
    price: "月額960円（無料プランあり）",
    content: "3万本以上（プレミアム）",
    quality: "フルHD対応",
    feature:
      "基本無料のインターネットTV、プレミアムで見逃し・限定コンテンツ視聴可能",
    simultaneous: "同時視聴2台",
    download: "対応（プレミアム）",
    pros: [
      "無料プランでも多くの番組が視聴可能",
      "恋愛リアリティ番組が充実",
      "格闘技・スポーツ中継が豊富",
      "テレビ的な視聴スタイル",
    ],
    cons: [
      "映画・ドラマの作品数は少なめ",
      "4K未対応",
      "アプリ以外のUI改善の余地あり",
    ],
    bestFor:
      "まずは無料で試したい方や、恋愛リアリティ・格闘技などABEMAオリジナルコンテンツが好きな方に最適。無料プランでも十分楽しめます。",
    url: "https://abema.tv/",
    badge: "無料でも見られる",
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
};

const faqItems = [
  {
    question: "動画配信サービスはどれが一番安いですか？",
    answer:
      "最安はAmazon Prime Videoの月額600円（年額5,900円で実質月492円）です。ただしABEMAは無料プランがあり、課金なしでも多くの番組を視聴できます。Netflixの広告つきプラン（月額790円）も比較的安価です。",
  },
  {
    question: "作品数が一番多いのはどのサービスですか？",
    answer:
      "見放題作品数が最も多いのはU-NEXTで、32万本以上を見放題で視聴できます。次いでHuluが10万本以上、Disney+が21,000本以上です。ただし作品数だけでなく、見たいジャンルの充実度で選ぶのがおすすめです。",
  },
  {
    question: "4K画質で見られるサービスはどれですか？",
    answer:
      "4K対応しているのはAmazon Prime Video、Netflix（プレミアムプラン）、U-NEXT、Disney+の4サービスです。HuluとABEMAプレミアムはフルHDまでの対応となっています。4K視聴には対応テレビやデバイスも必要です。",
  },
  {
    question: "家族で共有できるサービスはどれがおすすめですか？",
    answer:
      "家族共有におすすめなのはDisney+（同時視聴4台）とU-NEXT（同時視聴4台・ファミリーアカウント対応）です。Amazon Prime Videoも同時視聴3台に対応しています。お子さまがいる家庭にはディズニー作品が充実したDisney+が特におすすめです。",
  },
  {
    question: "無料で使える動画配信サービスはありますか？",
    answer:
      "ABEMAは基本無料で利用でき、多くの番組をリアルタイム配信で視聴可能です。プレミアム（月額960円）に加入すると見逃し視聴や限定コンテンツが利用できます。また、多くのサービスが無料トライアル期間を提供しています。",
  },
  {
    question: "ダウンロードしてオフラインで見られますか？",
    answer:
      "今回紹介した6サービスすべてでダウンロード機能に対応しています（ABEMAはプレミアムのみ）。Wi-Fi環境でダウンロードしておけば、通勤中や外出先でもデータ通信量を気にせず視聴できます。",
  },
  {
    question: "複数のサービスに加入するのはありですか？",
    answer:
      "目的に応じた2〜3サービスの併用は一般的です。例えば、Amazon Prime Video（コスパ）＋Netflix（オリジナル作品）の組み合わせなら月額約1,400円でかなり幅広い作品をカバーできます。まずは無料トライアルで各サービスを試してから決めるのがおすすめです。",
  },
];

export default function StreamingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "動画配信サービス比較おすすめ6選",
            url: `${siteConfig.url}/guide/streaming-comparison`,
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
        <span>動画配信サービス比較おすすめ6選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            動画配信
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】動画配信サービス比較おすすめ6選｜料金・作品数・画質を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「動画配信サービスが多すぎてどれを選べばいいかわからない」そんな疑問にお答えします。この記事では、2026年現在おすすめの動画配信サービス6社（Amazon Prime Video・Netflix・U-NEXT・Disney+・Hulu・ABEMAプレミアム）を月額料金・作品数・画質・特徴で徹底比較。あなたに最適なサービスの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              コスパ重視 → Amazon Prime Video
            </span>
            （月額600円で動画＋送料無料＋音楽など特典満載）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              オリジナル作品重視 → Netflix
            </span>
            （質の高いオリジナル作品が全て見放題）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              作品数重視 → U-NEXT
            </span>
            （32万本以上で国内No.1＋毎月1,200ポイント）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              お子さまがいるご家庭 → Disney+
            </span>
            （ディズニー・ピクサー・マーベルが全て見られる）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-streaming" className="text-primary hover:underline">
              1. 動画配信サービスを選ぶメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 動画配信サービス6社の料金・スペック比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各サービスの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめサービス
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. 動画配信サービスの選び方5つのポイント
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

      {/* Section 1 - Why Streaming */}
      <section id="why-streaming" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 動画配信サービスを選ぶメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          動画配信サービス（VOD）は、月額定額で映画・ドラマ・アニメなどが見放題。レンタルショップに行く手間もなく、いつでもどこでも楽しめます。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#127916;",
              title: "数万本の作品が見放題",
              desc: "月額600円〜2,189円で数万本の映画・ドラマ・アニメが見放題。レンタル1本300〜500円と比べると圧倒的にお得です。",
            },
            {
              icon: "&#128241;",
              title: "スマホ・タブレット・TVどこでも視聴",
              desc: "スマートフォン、タブレット、PC、スマートTV、Fire TV Stickなど様々なデバイスで視聴可能。通勤中でも自宅でも楽しめます。",
            },
            {
              icon: "&#128229;",
              title: "ダウンロードでオフライン視聴",
              desc: "Wi-Fi環境で作品をダウンロードしておけば、外出先でもデータ通信量を気にせず視聴できます。飛行機内や地下鉄でも快適です。",
            },
            {
              icon: "&#127775;",
              title: "ここでしか見られないオリジナル作品",
              desc: "Netflix・Amazon・Disney+などは独自のオリジナル作品を制作。映画館レベルのクオリティの作品を自宅で楽しめます。",
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
          2. 動画配信サービス6社の料金・スペック比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは6社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">Prime Video</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">Netflix</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">U-NEXT</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">Disney+</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">Hulu</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">ABEMA</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金",
                  prime: "600円",
                  netflix: "790〜1,980円",
                  unext: "2,189円",
                  disney: "990円",
                  hulu: "1,026円",
                  abema: "960円（無料あり）",
                },
                {
                  label: "作品数",
                  prime: "数万本以上",
                  netflix: "数万本",
                  unext: "32万本以上",
                  disney: "21,000本以上",
                  hulu: "10万本以上",
                  abema: "3万本以上",
                },
                {
                  label: "画質",
                  prime: "4K HDR",
                  netflix: "4K HDR",
                  unext: "4K対応あり",
                  disney: "4K HDR",
                  hulu: "フルHD",
                  abema: "フルHD",
                },
                {
                  label: "同時視聴",
                  prime: "3台",
                  netflix: "プランによる",
                  unext: "4台",
                  disney: "4台",
                  hulu: "4台（条件あり）",
                  abema: "2台",
                },
                {
                  label: "ダウンロード",
                  prime: "対応",
                  netflix: "対応",
                  unext: "対応",
                  disney: "対応",
                  hulu: "対応",
                  abema: "対応（プレミアム）",
                },
                {
                  label: "無料プラン",
                  prime: "なし",
                  netflix: "なし",
                  unext: "なし",
                  disney: "なし",
                  hulu: "なし",
                  abema: "あり",
                },
                {
                  label: "追加課金",
                  prime: "一部あり",
                  netflix: "なし",
                  unext: "一部あり",
                  disney: "なし",
                  hulu: "なし",
                  abema: "なし",
                },
                {
                  label: "強いジャンル",
                  prime: "総合・オリジナル",
                  netflix: "海外ドラマ・オリジナル",
                  unext: "総合・アニメ",
                  disney: "ディズニー・マーベル",
                  hulu: "日テレ・海外ドラマ",
                  abema: "バラエティ・スポーツ",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.prime}</td>
                  <td className="border border-card-border p-3">{row.netflix}</td>
                  <td className="border border-card-border p-3">{row.unext}</td>
                  <td className="border border-card-border p-3">{row.disney}</td>
                  <td className="border border-card-border p-3">{row.hulu}</td>
                  <td className="border border-card-border p-3">{row.abema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金・作品数は2026年4月時点の情報です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各サービスの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {streamingServices.map((service, index) => (
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
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{service.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">作品数</span>
                  <span className="font-bold">{service.content}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">画質</span>
                  <span className="font-bold">{service.quality}</span>
                </div>
              </div>

              {/* Feature Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{service.feature}</p>
                  <p className="text-muted mb-1"><span className="font-medium">同時視聴：</span>{service.simultaneous}</p>
                  <p className="text-muted"><span className="font-medium">ダウンロード：</span>{service.download}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
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
          4. 利用タイプ別おすすめサービス
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "とにかく安く映画やドラマを楽しみたい",
              service: "Amazon Prime Video",
              reason:
                "月額600円（年額なら実質月492円）で数万本が見放題。さらにAmazonの送料無料・Prime Music・Prime Readingなどの特典もセットです。コスパは断トツNo.1です。",
              url: "https://www.amazon.co.jp/primevideo",
            },
            {
              scene: "海外ドラマやオリジナル作品を楽しみたい",
              service: "Netflix",
              reason:
                "世界最大級の動画配信サービスで、オリジナル作品の質と量は他社の追随を許しません。全作品見放題で追加課金なし。多言語対応で語学学習にも活用できます。",
              url: "https://www.netflix.com/jp/",
            },
            {
              scene: "とにかく作品数が多いサービスがいい",
              service: "U-NEXT",
              reason:
                "見放題32万本以上は国内No.1。映画・ドラマ・アニメ・バラエティとジャンルも幅広く、毎月1,200ポイント付与で新作レンタルも楽しめます。雑誌190誌読み放題もセットです。",
              url: "https://video.unext.jp/",
            },
            {
              scene: "子どもと一緒に家族で楽しみたい",
              service: "Disney+",
              reason:
                "ディズニー・ピクサー・マーベル・スターウォーズの作品が全て見られるのはDisney+だけ。お子さま向けコンテンツが充実しており、同時視聴4台で家族それぞれが楽しめます。",
              url: "https://www.disneyplus.com/ja-jp",
            },
            {
              scene: "日本のドラマ・バラエティが好き",
              service: "Hulu",
              reason:
                "日本テレビ系のドラマ・バラエティの見逃し配信が最も充実。放送翌日には配信されるため、録画の手間が不要です。海外ドラマのラインナップも豊富で月額1,026円と手頃です。",
              url: "https://www.hulu.jp/",
            },
            {
              scene: "まずは無料で試してみたい",
              service: "ABEMAプレミアム",
              reason:
                "ABEMAは基本無料でリアルタイム配信を楽しめるインターネットTV。恋愛リアリティや格闘技など独自コンテンツが人気です。気に入ったらプレミアム（月額960円）にアップグレードできます。",
              url: "https://abema.tv/",
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

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 動画配信サービスの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "見たいジャンル・作品があるか確認する",
              desc: "まずは自分が見たいジャンルや作品が配信されているか確認しましょう。ディズニー系ならDisney+、日テレ系ならHulu、幅広いジャンルならU-NEXTが強いです。",
            },
            {
              num: "2",
              title: "月額料金と予算のバランスを考える",
              desc: "最安はAmazon Prime Videoの月額600円。無料で使えるABEMAもあります。U-NEXTは高めですが毎月1,200ポイント付与で実質989円。自分の予算に合ったサービスを選びましょう。",
            },
            {
              num: "3",
              title: "画質・音質にこだわるなら4K対応を確認",
              desc: "大画面テレビで楽しむなら4K HDR対応のサービスがおすすめ。Amazon Prime Video・Netflix（プレミアム）・Disney+が4K HDRに対応しています。",
            },
            {
              num: "4",
              title: "同時視聴台数を確認する",
              desc: "家族で使うなら同時視聴台数が重要。Disney+とU-NEXTは4台、Amazon Prime Videoは3台まで同時視聴可能。一人暮らしなら気にする必要はありません。",
            },
            {
              num: "5",
              title: "無料トライアルで実際に試す",
              desc: "多くのサービスが無料トライアル期間を提供しています。UIの使いやすさや作品ラインナップは実際に使ってみないとわかりません。まずは試してから決めましょう。",
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
            動画配信サービスは、それぞれ得意なジャンルや特徴が異なります。自分の視聴スタイルや予算に合ったサービスを選ぶことが大切です。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                Prime Video
              </span>
              <span className="text-sm text-muted">
                → 月額600円でコスパ最強。動画以外の特典も充実。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                Netflix
              </span>
              <span className="text-sm text-muted">
                → オリジナル作品の質No.1。全作品見放題で安心。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                U-NEXT
              </span>
              <span className="text-sm text-muted">
                → 見放題32万本以上で作品数No.1。毎月1,200ポイント付与。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                Disney+
              </span>
              <span className="text-sm text-muted">
                → ディズニー・マーベルファン必携。家族向けNo.1。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                Hulu
              </span>
              <span className="text-sm text-muted">
                → 日テレ系の見逃し配信に強い。海外ドラマも豊富。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                ABEMA
              </span>
              <span className="text-sm text-muted">
                → 無料プランあり。恋愛リアリティ・格闘技が充実。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            多くのサービスが無料トライアルを提供しているので、まずは気になるサービスを実際に試してみましょう。
          </p>
        </div>
      </section>

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
          あなたに最適な動画配信サービスを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          月額600円から始められる動画配信サービス。無料トライアルを活用して、自分に合ったサービスを見つけましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.amazon.co.jp/primevideo"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Prime Video
          </a>
          <a
            href="https://www.netflix.com/jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Netflix
          </a>
          <a
            href="https://video.unext.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            U-NEXT
          </a>
          <a
            href="https://www.disneyplus.com/ja-jp"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Disney+
          </a>
          <a
            href="https://www.hulu.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Hulu
          </a>
          <a
            href="https://abema.tv/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            ABEMA
          </a>
        </div>
      </section>
    </div>
  );
}
