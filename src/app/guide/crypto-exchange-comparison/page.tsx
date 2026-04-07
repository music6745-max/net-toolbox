import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】仮想通貨取引所比較おすすめ5選｜手数料・取扱通貨・セキュリティを徹底解説",
    description:
      "2026年最新の暗号資産取引所を徹底比較。コインチェック・bitFlyer・GMOコイン・bitbank・DMM Bitcoinの手数料・取扱通貨・セキュリティを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/crypto-exchange-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "コインチェック",
    type: "国内最大級・初心者向け",
    price: "販売所手数料無料",
    plan: "アプリDL数No.1",
    features: "アプリ使いやすさNo.1・取扱通貨豊富・初心者向け",
    featureDetail: "国内最大級の暗号資産取引所。アプリのダウンロード数は国内No.1を誇り、シンプルなUIで初心者でも使いやすいのが魅力。取扱通貨も豊富で、500円から購入可能",
    payment: "銀行振込・コンビニ入金・クイック入金",
    items: "国内対応・マネックスグループ",
    pros: [
      "アプリが使いやすい",
      "取扱通貨が豊富",
      "500円から購入可能",
      "マネックスグループで安心",
      "貸暗号資産サービスあり",
      "NFTマーケットも運営",
    ],
    cons: [
      "販売所のスプレッドが広い",
      "取引所の取扱銘柄は少ない",
      "過去にハッキング履歴あり",
    ],
    bestFor: "暗号資産投資が初めての方、シンプルなアプリで簡単に取引したい方におすすめ。少額から始められるので入門に最適です。",
    url: "https://coincheck.com/",
    badge: "アプリNo.1",
    color: "blue",
  },
  {
    name: "bitFlyer",
    type: "ビットコイン取引量No.1",
    price: "取引所手数料0.01〜0.15%",
    plan: "1円から購入可能",
    features: "セキュリティ最高水準・取引量No.1・1円から購入",
    featureDetail: "ビットコイン取引量国内No.1の取引所。世界水準のセキュリティと7年以上ハッキングゼロの実績を持つ。1円という少額から購入可能で、Tポイントとの交換サービスも提供",
    payment: "銀行振込・住信SBIネット銀行クイック入金",
    items: "国内対応",
    pros: [
      "ビットコイン取引量No.1",
      "セキュリティが業界最高水準",
      "ハッキング被害ゼロの実績",
      "1円から購入可能",
      "Tポイント交換サービス",
      "プロ向けの取引ツールも充実",
    ],
    cons: [
      "販売所スプレッドは広め",
      "取扱通貨は他社より少なめ",
      "アプリUIは賛否あり",
    ],
    bestFor: "セキュリティを最優先する方、ビットコイン中心に取引したい方におすすめ。安心して長期保有したい方に最適です。",
    url: "https://bitflyer.com/",
    badge: "取引量No.1",
    color: "orange",
  },
  {
    name: "GMOコイン",
    type: "GMO系・各種手数料無料",
    price: "入出金・送金手数料無料",
    plan: "Maker -0.01%／Taker 0.05%",
    features: "各種手数料無料・GMO系・取扱通貨多い",
    featureDetail: "GMOインターネットグループの暗号資産取引所。日本円入出金手数料・暗号資産送金手数料がすべて無料。Maker取引ではマイナス手数料で実質報酬がもらえる仕組み",
    payment: "銀行振込・即時入金対応",
    items: "国内対応・GMOグループ",
    pros: [
      "入出金・送金手数料が無料",
      "GMOグループで安心感",
      "Makerでマイナス手数料",
      "取扱通貨が豊富",
      "レバレッジ取引も対応",
      "貸暗号資産サービスあり",
    ],
    cons: [
      "アプリのUIは賛否あり",
      "サポート対応は標準的",
      "板取引は慣れが必要",
    ],
    bestFor: "手数料を抑えたい方、頻繁に入出金する方におすすめ。Maker取引でマイナス手数料を狙えるアクティブなトレーダーにも最適です。",
    url: "https://coin.z.com/jp/",
    badge: "手数料無料",
    color: "green",
  },
  {
    name: "bitbank",
    type: "アルトコイン板取引が強い",
    price: "Maker -0.02%／Taker 0.12%",
    plan: "全銘柄板取引対応",
    features: "板取引・アルトコイン豊富・セキュリティ高い",
    featureDetail: "全取扱銘柄を板取引（取引所形式）で取引できる珍しい取引所。販売所のスプレッドを気にせずアルトコインを安く購入可能。第三者機関のセキュリティ評価でも高評価",
    payment: "銀行振込",
    items: "国内対応",
    pros: [
      "全銘柄が板取引対応",
      "アルトコインを安く購入可",
      "Makerでマイナス手数料",
      "セキュリティ評価が高い",
      "アプリのチャートが優秀",
      "リップル取引量国内最大級",
    ],
    cons: [
      "初心者には板取引が難しい",
      "クイック入金非対応",
      "スマホアプリは機能限定",
    ],
    bestFor: "アルトコインを安く購入したい方、板取引で本格的に投資したい方におすすめ。スプレッドを気にせず取引したい中級者以上に最適です。",
    url: "https://bitbank.cc/",
    badge: "板取引強い",
    color: "purple",
  },
  {
    name: "DMM Bitcoin",
    type: "DMM系・レバレッジ取引強い",
    price: "各種手数料無料",
    plan: "現物・レバレッジ対応",
    features: "DMM系・レバレッジ豊富・各種手数料無料",
    featureDetail: "DMMグループが運営する暗号資産取引所。レバレッジ取引の取扱銘柄数が業界トップクラスで、各種手数料も無料。サポート体制も24時間で初心者にも安心",
    payment: "銀行振込・クイック入金対応",
    items: "国内対応・DMMグループ",
    pros: [
      "各種手数料が無料",
      "レバレッジ銘柄数が豊富",
      "DMMグループで安心",
      "24時間サポート対応",
      "アプリが使いやすい",
      "新規口座開設キャンペーン豊富",
    ],
    cons: [
      "現物の取扱銘柄は少なめ",
      "販売所形式のみの銘柄も",
      "レバレッジはリスク大",
    ],
    bestFor: "DMMグループの安心感を求める方、レバレッジ取引にも挑戦したい方におすすめ。24時間サポートで初心者でも安心して取引できます。",
    url: "https://bitcoin.dmm.com/",
    badge: "DMM系",
    color: "red",
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
    question: "暗号資産取引所を選ぶ基準は何ですか？",
    answer: "セキュリティ・手数料・取扱通貨数・使いやすさが主な基準です。特にセキュリティは最重要で、過去にハッキング被害がない取引所を選ぶことをおすすめします。手数料も取引コストに直結するため重要です。",
  },
  {
    question: "販売所と取引所の違いは何ですか？",
    answer: "販売所は取引所と直接売買する形式で、初心者でも簡単ですがスプレッド（実質手数料）が広めです。取引所はユーザー同士で売買する板取引で、スプレッドが狭く安く購入できますが操作にやや慣れが必要です。",
  },
  {
    question: "口座開設にはどれくらい時間がかかりますか？",
    answer: "申込みから取引開始まで最短即日〜数日程度です。本人確認書類を提出し、Web完結型の本人確認なら最短即日で口座開設が完了します。郵送方式の場合は数日かかることもあります。",
  },
  {
    question: "暗号資産の利益にはどれくらい税金がかかりますか？",
    answer: "暗号資産の利益は雑所得に分類され、給与所得などと合算して総合課税されます。最大税率は所得税45%＋住民税10%で55%。利益が出たら確定申告が必要なので、取引履歴は必ず保管しておきましょう。",
  },
  {
    question: "セキュリティ対策は何をすればいいですか？",
    answer: "二段階認証（2FA）の設定は必須です。IPアドレス制限やメール通知も有効。長期保有する場合はハードウェアウォレットへの移管も検討しましょう。パスワードは複雑なものを設定し使い回さないことが重要です。",
  },
  {
    question: "少額から始められますか？",
    answer: "はい、ほとんどの取引所で500円〜1,000円程度から購入可能です。bitFlyerなら1円から購入できるため、お試しで始めるのに最適。投資は余剰資金で行い、リスクを理解した上で取引しましょう。",
  },
];

export default function CryptoExchangeComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "仮想通貨取引所比較おすすめ5選", url: `${siteConfig.url}/guide/crypto-exchange-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>仮想通貨取引所比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">投資</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】仮想通貨取引所比較おすすめ5選｜手数料・取扱通貨・セキュリティを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「暗号資産投資を始めたい」「どの取引所を選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめの暗号資産取引所5選（コインチェック・bitFlyer・GMOコイン・bitbank・DMM Bitcoin）を手数料・セキュリティ・取扱通貨で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">初心者向け → コインチェック</span>（アプリNo.1）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">セキュリティ → bitFlyer</span>（取引量No.1）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">手数料無料 → GMOコイン</span>（送金無料）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">板取引 → bitbank</span>（アルト強い）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">レバレッジ → DMM Bitcoin</span>（DMM系）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-crypto" className="text-primary hover:underline">1. 暗号資産投資のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 取引所5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 取引所の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-crypto" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 暗号資産投資のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">暗号資産は近年注目される投資対象で、少額から始められ24時間取引可能なのが特徴です。リスクは大きいですが、分散投資の一環として注目を集めています。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128181;", title: "少額から始められる", desc: "500円〜1,000円程度の少額から購入可能。bitFlyerなら1円から始められるため、お試しに最適です。" },
            { icon: "&#128338;", title: "24時間365日取引可能", desc: "株式市場と違って24時間取引できるため、自分のライフスタイルに合わせて取引できます。" },
            { icon: "&#127760;", title: "分散投資の選択肢", desc: "株式・債券とは異なる値動きをするため、ポートフォリオの分散投資先として注目されています。" },
            { icon: "&#128176;", title: "貸暗号資産サービス", desc: "保有している暗号資産を取引所に貸し出すことで、利息のような収益を得られるサービスもあります。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 取引所5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">コインチェック</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">bitFlyer</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">GMO</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">bitbank</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">DMM</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "最低購入額", r: "500円", s: "1円", n: "数百円", c: "数百円", a: "数百円" },
                { label: "送金手数料", r: "有料", s: "有料", n: "無料", c: "有料", a: "無料" },
                { label: "取引所手数料", r: "0%", s: "0.01〜0.15%", n: "Maker -0.01%", c: "Maker -0.02%", a: "0%" },
                { label: "レバレッジ", r: "なし", s: "あり", n: "あり", c: "なし", a: "豊富" },
                { label: "セキュリティ", r: "標準", s: "最高水準", n: "高い", c: "高評価", a: "高い" },
                { label: "おすすめ", r: "初心者", s: "セキュリティ", n: "節約", c: "板取引", a: "レバレッジ" },
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
        <p className="text-xs text-muted mt-2">※ 数値は2026年4月時点の情報です。各サービスの公式情報を必ずご確認ください。投資は自己責任でお願いします。</p>
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
                <p className="text-sm"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
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
            { scene: "暗号資産投資が初めての方", app: "コインチェック", reason: "アプリの使いやすさNo.1で500円から購入可能。シンプルなUIで初心者でも迷わず取引できます。" },
            { scene: "セキュリティを最優先したい方", app: "bitFlyer", reason: "業界最高水準のセキュリティと7年以上ハッキングゼロの実績。長期保有にも安心です。" },
            { scene: "手数料を抑えたい方", app: "GMOコイン", reason: "入出金・送金手数料が無料で、Makerならマイナス手数料も。コストを抑えたい方に最適です。" },
            { scene: "アルトコインを安く買いたい方", app: "bitbank", reason: "全銘柄が板取引対応でスプレッドを気にせず購入可能。中級者以上の本格派におすすめです。" },
            { scene: "レバレッジ取引にも挑戦したい方", app: "DMM Bitcoin", reason: "レバレッジ取引の銘柄数が業界トップクラスで、各種手数料も無料。24時間サポートも安心です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 取引所の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "セキュリティ対策を確認", desc: "二段階認証・コールドウォレット管理・過去のハッキング履歴をチェック。資産を守るうえで最重要です。" },
            { num: "2", title: "手数料を比較", desc: "取引手数料・スプレッド・入出金手数料・送金手数料など、すべてのコストを総合的に比較しましょう。" },
            { num: "3", title: "取扱通貨数を確認", desc: "ビットコイン以外のアルトコインを購入したいなら取扱通貨数の多い取引所を選びましょう。" },
            { num: "4", title: "アプリの使いやすさ", desc: "毎日使うアプリだからこそUIの使いやすさは重要。実際にアプリを試してから本登録するのもおすすめです。" },
            { num: "5", title: "金融庁登録の有無", desc: "必ず金融庁登録済みの暗号資産交換業者を選びましょう。海外取引所は規制の対象外でリスクが高めです。" },
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
            暗号資産取引所はセキュリティ・手数料・使いやすさで選ぶのが基本です。初心者ならコインチェック、セキュリティ重視ならbitFlyer、手数料節約ならGMOコインがおすすめです。投資は必ず余剰資金で行いましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・初心者は「コインチェック」</li>
              <li>・セキュリティ重視は「bitFlyer」</li>
              <li>・手数料節約は「GMOコイン」</li>
              <li>・板取引なら「bitbank」</li>
              <li>・投資は自己責任・余剰資金で</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">株式投資・NISA口座も検討</p>
          </Link>
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">投資全般を見直すならこちら</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
