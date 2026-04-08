import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AdSenseUnit } from "@/components/AdSenseUnit";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ガス会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説",
    description:
      "2026年最新の都市ガス・新ガス会社を徹底比較。レモンガス・東京ガス・大阪ガス・東邦ガス・ニチガスの料金・特典・切り替え方法を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/gas-company-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "レモンガス",
    type: "新ガス会社・電気セット割",
    price: "わくわくプラン",
    plan: "解約金なし／電気セット割",
    features: "都市ガスより安い・電気セット割・解約金なし",
    featureDetail: "首都圏で展開する新ガス会社。東京ガスの一般料金より平均5%安い料金設定で、電気とのセット契約で更に割引が受けられます。Webから簡単に申し込み可能で工事不要",
    payment: "クレジットカード・口座振替対応",
    items: "東京・神奈川・千葉・埼玉エリア",
    pros: [
      "東京ガスより約5%安い",
      "電気セット割でさらにお得",
      "解約金・違約金なし",
      "Webで簡単申込み",
      "工事不要で切替可能",
      "ガス機器修理サービス付き",
    ],
    cons: [
      "対応エリアが首都圏中心",
      "知名度はやや低め",
      "店舗での相談は不可",
    ],
    bestFor: "首都圏在住で都市ガス料金を見直したい方、電気とまとめてお得にしたい方におすすめ。シンプルに料金を下げたい単身〜ファミリー世帯に向いています。",
    url: "https://lemongas.co.jp/",
    badge: "5%安い",
    color: "green",
  },
  {
    name: "東京ガス",
    type: "大手都市ガス・安定供給",
    price: "一般料金／パッチョポイント",
    plan: "電気セット割／長期契約特典",
    features: "大手安心・パッチョポイント・電気セット割",
    featureDetail: "首都圏の都市ガス最大手。長年の実績と全国規模のサービス網を持ち、ガス機器のメンテナンスや修理対応もスピーディー。電気とセット契約で月額料金が割引になります",
    payment: "クレジットカード・口座振替対応",
    items: "東京・神奈川・千葉・埼玉・茨城・栃木・群馬",
    pros: [
      "都市ガス最大手で安心感",
      "パッチョポイントが貯まる",
      "電気セット割が利用可能",
      "ガス機器の修理対応が早い",
      "全国の有名ガス会社",
      "Web会員サービスが充実",
    ],
    cons: [
      "新ガス会社より料金は割高",
      "他社との価格差を感じる場合",
      "プラン選択が複雑な場合あり",
    ],
    bestFor: "とにかく大手の安心感を重視する方、ガス機器の修理サポートを重視する方におすすめ。長期的に安定したサービスを求める方に最適です。",
    url: "https://home.tokyo-gas.co.jp/",
    badge: "大手安心",
    color: "red",
  },
  {
    name: "大阪ガス",
    type: "関西大手・電気もセット",
    price: "一般料金／マイ大阪ガス",
    plan: "電気セット割／スタイルプラン",
    features: "関西大手・電気セット割・暮らしのサポート",
    featureDetail: "関西エリアを中心に展開する大手都市ガス会社。電気とのセット契約で月額が割引になるほか、暮らしのトラブル相談やリフォームサービスも提供。マイ大阪ガスでポイントも貯まります",
    payment: "クレジットカード・口座振替対応",
    items: "大阪・京都・兵庫・奈良・滋賀・和歌山",
    pros: [
      "関西最大手で安心",
      "電気セット割が利用可能",
      "マイ大阪ガスでポイント還元",
      "暮らしのサポートが充実",
      "ガス機器修理も迅速対応",
      "Webでの手続きも簡単",
    ],
    cons: [
      "新ガス会社より料金は高め",
      "プランによっては割引が少ない",
      "関西エリア限定",
    ],
    bestFor: "関西エリア在住で大手の安心感とサポートを重視する方におすすめ。電気と一緒に契約して月額をシンプルにまとめたい家庭にも最適です。",
    url: "https://home.osakagas.co.jp/",
    badge: "関西大手",
    color: "orange",
  },
  {
    name: "東邦ガス",
    type: "中部大手・地域密着",
    price: "一般料金／がすてきポイント",
    plan: "電気セット割／長期契約割",
    features: "中部大手・がすてきポイント・電気セット割",
    featureDetail: "愛知・岐阜・三重を中心とする中部エリアの大手都市ガス会社。電気とのセット契約で割引が受けられるほか、がすてきポイントが貯まる会員サービスも提供。地域密着で安心",
    payment: "クレジットカード・口座振替対応",
    items: "愛知・岐阜・三重エリア",
    pros: [
      "中部エリアの大手で安心",
      "電気セット割で割引",
      "がすてきポイントが貯まる",
      "ガス機器修理も迅速",
      "地域密着の手厚いサポート",
      "長期契約割引もあり",
    ],
    cons: [
      "新ガス会社より割高",
      "中部エリア限定",
      "オンライン手続きが少なめ",
    ],
    bestFor: "中部エリア在住で地域密着の大手会社を選びたい方におすすめ。電気とのセット契約で月額をまとめたい家庭にも最適です。",
    url: "https://www.tohogas.co.jp/",
    badge: "中部大手",
    color: "orange",
  },
  {
    name: "ニチガス",
    type: "新ガス会社・首都圏中心",
    price: "新生活応援プラン",
    plan: "解約金なし／電気セット割",
    features: "都市ガスより安い・電気セット割・LPガスも",
    featureDetail: "首都圏を中心に都市ガス・LPガスを供給する新ガス会社。東京ガスより安い料金設定で、電気とのセット契約も可能。LPガス利用エリアでも検討できる選択肢の広さが魅力",
    payment: "クレジットカード・口座振替対応",
    items: "関東1都6県エリア",
    pros: [
      "東京ガスより安い料金",
      "電気セット割が利用可能",
      "LPガスも提供",
      "解約金なし",
      "Webで簡単申込み",
      "首都圏で実績豊富",
    ],
    cons: [
      "対応エリアが関東中心",
      "プランがやや複雑",
      "ガス機器修理は別料金",
    ],
    bestFor: "関東エリアで都市ガスもLPガスも検討したい方、新ガス会社で料金を下げたい方におすすめ。電気とまとめたい家庭にも向いています。",
    url: "https://www.nichigas.co.jp/",
    badge: "新ガス",
    color: "blue",
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
    question: "新ガス会社に切り替えると安全性は大丈夫ですか？",
    answer: "はい、安全性は変わりません。ガス管は従来通り大手ガス会社が管理しているため、ガス漏れ対応や保安体制は同じです。新ガス会社が万が一倒産しても、セーフティネットでガス供給は継続されます。",
  },
  {
    question: "切り替え工事は必要ですか？",
    answer: "都市ガスの場合、工事は一切不要です。Webから申し込むだけで、解約手続きや切替も新ガス会社が代行してくれます。ガスメーターや配管はそのまま使用できるので、立会いも基本的に不要です。",
  },
  {
    question: "賃貸でもガス会社を切り替えできますか？",
    answer: "個別契約の都市ガスなら自由に切り替え可能です。ただし管理会社や大家さん指定のガス会社がある場合は事前確認が必要です。LPガスの場合は契約形態によって切り替えできないケースもあります。",
  },
  {
    question: "電気とのセット割はどれくらい安くなりますか？",
    answer: "会社によりますが、月額数百円〜1,000円程度の割引が一般的です。年間にすると6,000円〜12,000円ほどお得になるケースが多く、まとめて契約することで管理もシンプルになります。",
  },
  {
    question: "ガス機器の修理はどこに頼めばいいですか？",
    answer: "大手ガス会社なら自社で修理対応してくれますが、新ガス会社の場合は別途修理サービスへの依頼が必要なケースもあります。契約前に修理対応の有無を確認しておくと安心です。",
  },
  {
    question: "解約金や違約金はかかりますか？",
    answer: "会社やプランによって異なります。レモンガスやニチガスは解約金無料ですが、長期契約プランでは中途解約に手数料が発生する場合もあります。契約前に必ず解約条件を確認しましょう。",
  },
];

export default function GasCompanyComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ガス会社比較おすすめ5選", url: `${siteConfig.url}/guide/gas-company-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ガス会社比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">光熱費</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ガス会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「ガス代を安くしたい」「新ガス会社って大丈夫？」そんな疑問にお答えします。この記事では、2026年現在おすすめのガス会社5選（レモンガス・東京ガス・大阪ガス・東邦ガス・ニチガス）を料金・特典・切り替え方法で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-green-700 dark:text-green-300">首都圏で安く → レモンガス</span>（東京ガスより5%安い）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">首都圏で大手安心 → 東京ガス</span>（パッチョポイント）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">関西エリア → 大阪ガス</span>（電気セット割）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">中部エリア → 東邦ガス</span>（地域密着）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">都市ガス＋LP → ニチガス</span>（選択肢広い）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-gas" className="text-primary hover:underline">1. ガス会社見直しのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. ガス会社5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. ガス会社の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-gas" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ガス会社見直しのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">2017年の都市ガス自由化以降、ガス会社を自由に選べるようになり、従来の大手ガス会社より安くなるケースが多くあります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "ガス代を節約できる", desc: "新ガス会社に切り替えるだけで年間数千円〜1万円以上の節約になるケースが多く、手続きも簡単です。" },
            { icon: "&#127881;", title: "電気とのセット割", desc: "電気とまとめて契約することで月額数百円〜1,000円の割引が受けられ、支払いもシンプルになります。" },
            { icon: "&#128737;", title: "保安体制は変わらない", desc: "ガス管や保安体制は従来の大手ガス会社が管理しているため、安全性は同じで安心です。" },
            { icon: "&#128241;", title: "Webで簡単手続き", desc: "ほとんどの新ガス会社はWebから5〜10分で申し込み可能。工事不要で立会いも不要です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. ガス会社5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">レモン</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">東京</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">大阪</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">東邦</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">ニチガス</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "対応エリア", r: "首都圏", s: "首都圏", n: "関西", c: "中部", a: "関東" },
                { label: "料金水準", r: "安い", s: "標準", n: "標準", c: "標準", a: "安い" },
                { label: "解約金", r: "0円", s: "0円", n: "0円", c: "0円", a: "0円" },
                { label: "電気セット割", r: "あり", s: "あり", n: "あり", c: "あり", a: "あり" },
                { label: "ポイント", r: "なし", s: "パッチョ", n: "マイ大阪", c: "がすてき", a: "なし" },
                { label: "おすすめ", r: "節約志向", s: "大手志向", n: "関西大手", c: "中部大手", a: "選択肢" },
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
            { scene: "首都圏で料金を下げたい単身者", app: "レモンガス", reason: "東京ガスより約5%安い料金で、解約金もないため気軽に試せます。電気セットでさらにお得です。" },
            { scene: "首都圏で大手の安心感を求めるファミリー", app: "東京ガス", reason: "都市ガス最大手で修理対応もスピーディー。パッチョポイントも貯まります。" },
            { scene: "関西エリアの家庭", app: "大阪ガス", reason: "関西最大手で電気セット割やマイ大阪ガスのポイント還元も魅力です。" },
            { scene: "中部エリアの家庭", app: "東邦ガス", reason: "地域密着の大手で、ガス機器修理対応も手厚い。電気セット割も利用可能です。" },
            { scene: "関東で都市ガスとLPガス両方検討したい方", app: "ニチガス", reason: "都市ガス・LPガス両方に対応し、料金も大手より安い設定で選択肢が広がります。" },
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
        <h2 className="text-2xl font-bold mb-4">5. ガス会社の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "対応エリアを確認", desc: "新ガス会社は対応エリアが限定されているため、自宅住所が対応エリアか必ず確認しましょう。" },
            { num: "2", title: "電気とのセット割を検討", desc: "電気と一緒に契約することで月額数百円〜1,000円の割引が受けられるケースが多くあります。" },
            { num: "3", title: "ガス機器修理対応の有無", desc: "新ガス会社は修理対応が別料金の場合もあるため、サポート内容を契約前に必ず確認しましょう。" },
            { num: "4", title: "ポイント還元や特典を比較", desc: "貯めているポイントに合わせて選ぶと、実質的な節約効果が高まります。" },
            { num: "5", title: "解約金と契約期間を確認", desc: "引越し予定があるなら解約金無料プランを選びましょう。長期契約は割引が大きい場合もあります。" },
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
            ガス会社はエリアと料金、そしてサポート内容で選ぶのが基本です。首都圏で節約したいならレモンガス、大手の安心感なら東京ガス、関西なら大阪ガス、中部なら東邦ガスがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・首都圏で安いなら「レモンガス」</li>
              <li>・大手安心なら「東京ガス」</li>
              <li>・関西なら「大阪ガス」のセット割</li>
              <li>・中部なら「東邦ガス」</li>
              <li>・切り替えはWebで5〜10分・工事不要</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/gas-fee-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">都市ガス料金シミュレーターを使う</div>
          <p className="text-xs text-muted">地域・使用量から月額・年間ガス代と切替時の節約額を即試算 →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">電気とセットで光熱費を節約</p>
          </Link>
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">暮らしのコストを見直すならこちら</p>
          </Link>
        </div>
      </section>

      <AdSenseUnit adSlot="0000000000" adFormat="auto" />
    </div>
  );
}
