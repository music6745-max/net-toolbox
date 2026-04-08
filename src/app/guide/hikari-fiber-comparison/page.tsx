import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { AdSenseUnit } from "@/components/AdSenseUnit";

export const metadata: Metadata = {
  title: "光回線おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "ネットが遅い・料金を見直したい方へ。NURO光・auひかり・ドコモ光・ソフトバンク光・楽天ひかりを速度/料金/キャンペーンで徹底比較し最適な1社を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/hikari-fiber-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】光回線比較おすすめ5選｜料金・速度・キャンペーンを徹底解説",
    description:
      "2026年最新の光回線を徹底比較。NURO光・auひかり・ドコモ光・ソフトバンク光・楽天ひかりの料金・速度・キャンペーンを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/hikari-fiber-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "NURO光",
    type: "最大2Gbps・速度重視",
    price: "月額5,200円〜",
    plan: "2年契約／工事費実質無料",
    features: "下り最大2Gbps・独自回線で混雑に強い・高額キャッシュバック",
    featureDetail: "独自のダークファイバー回線を使用し、下り最大2Gbpsを実現。オンラインゲーム・動画配信で圧倒的な速度を発揮。新規申込で45,000円前後のキャッシュバックも魅力",
    payment: "クレジットカード・口座振替対応",
    items: "提供エリアは関東・東海・関西・九州の一部",
    pros: [
      "下り最大2Gbpsで業界最速クラス",
      "独自回線で夜間も混雑しにくい",
      "高額キャッシュバックキャンペーンが豊富",
      "工事費実質無料",
      "ソフトバンクスマホとのセット割対応",
      "月額料金も相対的に安い",
    ],
    cons: [
      "提供エリアが限定的",
      "開通工事が2回必要で時間がかかる",
      "マンションプランは一部非対応",
    ],
    bestFor:
      "提供エリア内にお住まいで、とにかく速度を重視する方に最適。オンラインゲーマーや4K/8K動画視聴、リモートワークで快適な通信環境を求める方におすすめです。",
    url: "https://www.nuro.jp/",
    badge: "速度最速",
    color: "red",
  },
  {
    name: "auひかり",
    type: "独自回線・auユーザー向け",
    price: "月額5,610円〜",
    plan: "3年契約／工事費実質無料",
    features: "独自回線・auスマートバリュー・高額キャッシュバック",
    featureDetail: "NTT以外の独自回線を使用し安定した速度を実現。auスマートバリューでau/UQモバイルの月額料金が割引。代理店経由なら6万円以上のキャッシュバックも",
    payment: "クレジットカード・口座振替対応",
    items: "提供エリアは全国（関西・東海の一部を除く）",
    pros: [
      "独自回線で安定した速度",
      "auスマートバリューで月額最大1,100円割引",
      "代理店経由で高額キャッシュバック",
      "工事費実質無料",
      "マンション・戸建て両対応",
      "最大10Gbpsプランも提供",
    ],
    cons: [
      "関西・東海の一部で提供エリア外",
      "3年契約の縛りあり",
      "解約時の撤去費用が必要な場合あり",
    ],
    bestFor:
      "au・UQモバイルユーザーや、安定した独自回線を希望する方におすすめ。代理店キャンペーンを活用すれば実質料金を大幅に抑えられます。",
    url: "https://www.au.com/internet/",
    badge: "au割引",
    color: "orange",
  },
  {
    name: "ドコモ光",
    type: "ドコモユーザー向け・提供エリア最大",
    price: "月額5,720円〜",
    plan: "2年契約／工事費無料キャンペーン",
    features: "ドコモ光セット割・全国対応・プロバイダ選択可",
    featureDetail: "NTTフレッツ光回線を利用し全国ほぼ全域で提供。ドコモのスマホとセットで月額最大1,100円割引。GMOとくとくBB等の優良プロバイダを選択可能",
    payment: "クレジットカード・口座振替対応",
    items: "フレッツ光対応エリア全国",
    pros: [
      "全国ほぼ全域で利用可能",
      "ドコモスマホとのセット割で家族全員お得",
      "プロバイダを20社以上から選択可",
      "dポイントが貯まる・使える",
      "工事費無料キャンペーン実施中",
      "v6プラス対応プロバイダで速度改善",
    ],
    cons: [
      "プロバイダ選びで速度に差が出る",
      "独自回線系より速度は劣る場合あり",
      "プロバイダにより料金が異なる",
    ],
    bestFor:
      "ドコモユーザー、全国どこでも利用したい方、プロバイダを自分で選びたい方におすすめ。GMOとくとくBB選択で高速通信とキャッシュバックを両立できます。",
    url: "https://www.docomo.ne.jp/hikari/",
    badge: "全国対応",
    color: "red",
  },
  {
    name: "ソフトバンク光",
    type: "ソフトバンクユーザー向け",
    price: "月額5,720円〜",
    plan: "2年契約／工事費実質無料",
    features: "おうち割光セット・全国対応・乗換サポート",
    featureDetail: "フレッツ光回線を利用し全国対応。ソフトバンク・ワイモバイルのスマホとセットで月額最大1,100円割引。他社からの乗換費用を最大10万円まで還元",
    payment: "クレジットカード・口座振替対応",
    items: "フレッツ光対応エリア全国",
    pros: [
      "全国ほぼ全域で利用可能",
      "おうち割光セットでスマホ料金割引",
      "他社違約金を最大10万円還元",
      "工事費実質無料",
      "IPv6高速ハイブリッド対応",
      "代理店キャッシュバックも豊富",
    ],
    cons: [
      "光BBユニット必須で月額追加料金",
      "解約時の違約金に注意",
      "独自回線系より速度はやや劣る",
    ],
    bestFor:
      "ソフトバンク・ワイモバイルユーザー、他社からの乗換を検討している方に最適。違約金還元キャンペーンで乗換コストを抑えられます。",
    url: "https://www.softbank.jp/ybb/",
    badge: "乗換お得",
    color: "blue",
  },
  {
    name: "楽天ひかり",
    type: "楽天ユーザー向け・シンプル料金",
    price: "月額4,180円〜",
    plan: "3年契約／楽天モバイル併用で1年無料",
    features: "楽天ポイント還元・楽天モバイル併用割・SPU対象",
    featureDetail: "楽天モバイルとのセットで1年間月額無料キャンペーン。楽天市場のSPU対象で楽天ポイントが貯まりやすい。シンプルな料金体系が魅力",
    payment: "クレジットカード・口座振替対応",
    items: "フレッツ光対応エリア全国",
    pros: [
      "楽天モバイル併用で1年間無料",
      "SPU対象で楽天ポイント還元率UP",
      "シンプルで分かりやすい料金体系",
      "全国ほぼ全域で利用可能",
      "プロバイダ料込みで追加費用なし",
      "IPv6対応で高速通信",
    ],
    cons: [
      "楽天ユーザー以外はメリットが薄い",
      "キャッシュバックキャンペーンは少なめ",
      "3年契約の縛りあり",
    ],
    bestFor:
      "楽天モバイルユーザーや楽天経済圏の方におすすめ。1年間無料キャンペーンと楽天ポイント還元でトータルコストを大幅に削減できます。",
    url: "https://network.mobile.rakuten.co.jp/hikari/",
    badge: "楽天割",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

const faqItems = [
  {
    question: "光回線で一番速いのはどこですか？",
    answer: "NURO光が下り最大2Gbpsで業界最速クラスです。独自のダークファイバー回線を使用しているため夜間の混雑にも強く、オンラインゲームや4K動画視聴に最適です。ただし提供エリアが限定的なため、エリア外ならauひかりの10Gbpsプランも検討しましょう。",
  },
  {
    question: "マンションでも光回線は使えますか？",
    answer: "ほとんどの光回線はマンションプランを用意しています。ただし建物の設備（VDSL方式／光配線方式）で速度が変わります。光配線方式なら戸建てと同等の速度が出ますが、VDSL方式は最大100Mbps程度に制限されます。契約前に建物の対応状況を確認しましょう。",
  },
  {
    question: "乗り換え時の違約金はどうすればいいですか？",
    answer: "ソフトバンク光の「あんしん乗り換えキャンペーン」やauひかりの「乗りかえスタートサポート」を利用すれば、他社の違約金を最大10万円まで還元してもらえます。代理店経由の申込みでさらにキャッシュバックも受けられる場合があります。",
  },
  {
    question: "工事費はかかりますか？",
    answer: "光回線の新規開通には工事が必要です。工事費は2〜4万円程度ですが、多くの事業者が「実質無料」キャンペーンを実施中。分割払いの金額と同額を月額料金から割引する形式が一般的です。ただし契約期間内に解約すると残債が請求されるので注意が必要です。",
  },
  {
    question: "スマホとのセット割はどれくらいお得ですか？",
    answer: "各キャリアのスマホとのセット割で月額最大1,100円の割引が受けられます。家族全員が同じキャリアなら、人数分の割引が適用されるため大幅なコストダウンが可能。au→auひかり、ドコモ→ドコモ光、ソフトバンク→ソフトバンク光、楽天→楽天ひかりを選ぶのが基本です。",
  },
  {
    question: "IPv6（v6プラス）とは何ですか？",
    answer: "従来のIPv4より新しい通信方式で、混雑を回避して高速通信ができる技術です。フレッツ光系の回線（ドコモ光・ソフトバンク光・楽天ひかり）では、IPv6対応プロバイダを選ぶことで夜間でも速度低下が起きにくくなります。無料オプションのことが多いので必ず有効にしましょう。",
  },
];

export default function HikariFiberComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <ItemListJsonLd
        name="光回線おすすめ比較"
        items={services.map((s) => ({ name: s.name, url: s.url }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "光回線比較おすすめ5選", url: `${siteConfig.url}/guide/hikari-fiber-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>光回線比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">通信</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】光回線比較おすすめ5選｜料金・速度・キャンペーンを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「光回線はどれを選べばお得なの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの光回線5選（NURO光・auひかり・ドコモ光・ソフトバンク光・楽天ひかり）を料金・速度・キャンペーン・スマホセット割で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">速度重視なら → NURO光</span>（下り最大2Gbps）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">auユーザー → auひかり</span>（スマートバリューで割引）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">ドコモユーザー → ドコモ光</span>（全国対応・セット割）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">ソフトバンクユーザー → ソフトバンク光</span>（違約金還元）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">楽天ユーザー → 楽天ひかり</span>（1年無料特典）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-hikari" className="text-primary hover:underline">1. 光回線のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 光回線5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 光回線の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-hikari" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 光回線のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">光回線はモバイル回線より圧倒的に高速・安定で、データ容量無制限で使えます。</p>
        <div className="space-y-3">
          {[
            { icon: "&#9889;", title: "高速・低遅延で快適", desc: "下り最大1〜10Gbpsの高速通信で、4K動画・オンラインゲーム・テレワークも快適。ping値も低く遅延に強いのが特徴です。" },
            { icon: "&#128200;", title: "データ容量無制限", desc: "モバイル回線と違い通信量制限がないため、動画視聴やテレワークでも安心して使えます。" },
            { icon: "&#128241;", title: "スマホとのセット割", desc: "各キャリアの光回線とスマホをセットにすると月額最大1,100円×家族人数の割引が受けられます。" },
            { icon: "&#127969;", title: "家族全員で共有可能", desc: "Wi-Fiルーター経由で家族全員のスマホ・PC・タブレット・ゲーム機を一括接続できます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 光回線5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">NURO</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">au</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">ドコモ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">SB</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">楽天</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "最大速度", r: "2Gbps", s: "1/10Gbps", n: "1Gbps", c: "1Gbps", a: "1Gbps" },
                { label: "月額(戸建)", r: "5,200円", s: "5,610円", n: "5,720円", c: "5,720円", a: "4,180円" },
                { label: "提供エリア", r: "一部", s: "ほぼ全国", n: "全国", c: "全国", a: "全国" },
                { label: "セット割", r: "ソフトバンク", s: "au/UQ", n: "ドコモ", c: "ソフトバンク", a: "楽天モバイル" },
                { label: "キャンペーン", r: "CB45,000円", s: "CB6万円超", n: "工事費無料", c: "違約金10万還元", a: "1年無料" },
                { label: "おすすめ", r: "速度重視", s: "auユーザー", n: "ドコモユーザー", c: "SBユーザー", a: "楽天ユーザー" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.r}</td>
                  <td className="border border-card-border p-3">{row.s}</td>
                  <td className="border border-card-border p-3">{row.n}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 数値は2026年4月時点の情報です。各サービスの公式情報を必ずご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サービスの詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">エリア</span><span className="font-bold">{s.items}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">決済：</span>{s.payment}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">{s.pros.map((p) => (<li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>))}</ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">{s.cons.map((c) => (<li key={c} className="text-sm text-muted flex items-start gap-2"><span className="text-red-500 mt-0.5">&#9651;</span>{c}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめ</h2>
        <div className="space-y-4">
          {[
            { scene: "オンラインゲームや4K動画を快適に楽しみたい", app: "NURO光", reason: "下り最大2Gbpsの高速通信と独自回線の安定性で、ゲーマーや動画視聴ユーザーに最適です。" },
            { scene: "au・UQモバイルユーザーで家族割を活用したい", app: "auひかり", reason: "auスマートバリューで家族全員のスマホ料金が割引され、代理店経由で高額キャッシュバックも狙えます。" },
            { scene: "ドコモユーザーで全国どこでも使いたい", app: "ドコモ光", reason: "全国対応で引越しでも継続利用しやすく、ドコモのスマホとセット割でdポイントも貯まります。" },
            { scene: "他社から乗換して違約金負担を抑えたい", app: "ソフトバンク光", reason: "あんしん乗り換えキャンペーンで他社違約金を最大10万円まで還元してもらえます。" },
            { scene: "楽天モバイルと合わせて通信費を圧縮したい", app: "楽天ひかり", reason: "楽天モバイル併用で1年間無料、楽天市場のSPUアップで楽天ポイント還元率もUP。" },
          ].map((item) => (
            <div key={item.scene} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.app}</p>
              <p className="text-sm text-muted leading-relaxed">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. 光回線の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "スマホキャリアとのセット割", desc: "au・ドコモ・ソフトバンク・楽天モバイルそれぞれに対応する光回線を選べば月額最大1,100円×家族人数分の割引が受けられます。" },
            { num: "2", title: "提供エリアを確認する", desc: "NURO光やauひかりは独自回線のためエリアが限定的。必ず公式サイトで自宅住所が対応しているか確認しましょう。" },
            { num: "3", title: "実質料金（月額＋キャッシュバック）で比較", desc: "月額料金だけでなく、キャッシュバック・工事費無料・違約金還元を加味した3年総額で比較するのが鉄則です。" },
            { num: "4", title: "IPv6（v6プラス）対応", desc: "混雑時間帯でも速度が出やすいIPv6対応プロバイダを選びましょう。無料オプションのことが多いです。" },
            { num: "5", title: "契約期間と違約金を確認", desc: "2年／3年の縛りが一般的。短期で解約予定なら縛りなしプランも検討しましょう。" },
          ].map((item) => (
            <div key={item.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
                <div><h3 className="font-bold text-sm mb-1">{item.title}</h3><p className="text-sm text-muted">{item.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            光回線はスマホキャリアとのセット割と提供エリアで選ぶのが基本です。速度重視ならNURO光、auユーザーならauひかり、全国対応ならドコモ光、乗換ならソフトバンク光、楽天経済圏なら楽天ひかりがおすすめです。実質料金と3年総額で比較しましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・速度最速なら「NURO光」（下り2Gbps）</li>
              <li>・auユーザーは「auひかり」でスマートバリュー</li>
              <li>・全国対応なら「ドコモ光」</li>
              <li>・乗換なら「ソフトバンク光」の違約金還元</li>
              <li>・スマホキャリアとのセット割を必ず活用</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/fiber-fee-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">料金シミュレーターを使う</div>
          <p className="text-xs text-muted">速度プラン・家族人数・スマホ割引を入力するだけで、月額・年間・3年総額を試算できます →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ポケットWiFi比較</span>
            <p className="text-xs text-muted mt-1">外でも使える持ち運びWi-Fiを比較</p>
          </Link>
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">スマホ料金を見直すならこちら</p>
          </Link>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/tools/internet-speed-grade-checker" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">通信速度の用途適性チェッカーを使う</div>
          <p className="text-xs text-muted">Mbps入力で動画・ゲーム・会議の可否を判定 →</p>
        </Link>
        <Link href="/tools/broadband-comparison-tool" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">光回線×スマホセット割シミュレーター</div>
          <p className="text-xs text-muted">トータル通信費をランキング表示 →</p>
        </Link>
      </section>

      <AdSenseUnit adSlot="0000000000" adFormat="auto" />
    </div>
  );
}
