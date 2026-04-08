import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "投資アプリおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "資産形成を始めたい初心者へ。SBI証券・楽天証券・マネックス証券・松井証券・PayPay証券を手数料/取扱商品/操作性で徹底比較し最初の1社を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/investment-app-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】投資アプリ比較おすすめ5選｜手数料・取扱商品・初心者向けを徹底解説",
    description:
      "2026年最新の投資アプリを徹底比較。SBI証券・楽天証券・マネックス証券・松井証券・PayPay証券の手数料・取扱商品・使いやすさを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/investment-app-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "SBI証券",
    type: "ネット証券口座数No.1",
    price: "国内株式 売買手数料0円（ゼロ革命）",
    plan: "現物・信用取引手数料0円／投信・米国株・iDeCoも対応",
    features: "国内株0円・外国株9カ国・投信2,600本以上・iDeCo・NISA",
    featureDetail: "ゼロ革命で国内株売買手数料0円。米国株・中国株など外国株9カ国対応。Tポイント・Pontaポイント・dポイント・PayPayポイント・Vポイントが選べる",
    point: "Tポイント・Ponta・dポイント・Vポイント等",
    minimum: "100円から投信積立可能",
    pros: [
      "国内株売買手数料が完全無料（ゼロ革命）",
      "取扱商品数が業界最大級（投信・外国株・債券）",
      "クレカ積立で最大5%還元（三井住友カード）",
      "選べるポイントが豊富（T・Ponta・d・V・PayPay）",
      "新NISAの取扱商品数が業界最多クラス",
      "IPO取扱社数が業界トップクラス",
    ],
    cons: [
      "アプリの操作性が初心者にはやや複雑",
      "サイトの情報量が多く戸惑うことがある",
      "電話サポートの待ち時間が長い場合あり",
    ],
    bestFor:
      "本格的に資産運用を始めたい方、取扱商品の豊富さを求める方に最適。手数料0円で長期投資のコストを最小化できます。",
    url: "https://www.sbisec.co.jp/",
    badge: "口座数No.1",
    color: "blue",
  },
  {
    name: "楽天証券",
    type: "楽天経済圏との連携最強",
    price: "国内株式 売買手数料0円（ゼロコース）",
    plan: "ゼロコースで国内株手数料0円／楽天ポイント連携多数",
    features: "国内株0円・楽天ポイント投資・米国株・iDeCo・NISA",
    featureDetail: "ゼロコースで国内株手数料0円。楽天ポイントで投信・国内株を購入可能。楽天カード積立・楽天キャッシュ積立で還元",
    point: "楽天ポイント",
    minimum: "100円から投信積立可能",
    pros: [
      "国内株売買手数料が0円（ゼロコース）",
      "楽天ポイントで株・投信が買える",
      "楽天カードクレカ積立で最大1%還元",
      "楽天キャッシュ積立も併用可能",
      "日経新聞が無料で読める（マネーブリッジ）",
      "アプリiSPEEDの操作性が高評価",
    ],
    cons: [
      "ポイント付与条件が頻繁に変更される",
      "外国株の取扱国数はSBIより少ない",
      "IPO取扱数はSBIより少ない",
    ],
    bestFor:
      "楽天経済圏ユーザー、楽天ポイントを貯めている方に最適。ポイント投資から始められるので、投資初心者にもおすすめです。",
    url: "https://www.rakuten-sec.co.jp/",
    badge: "楽天経済圏",
    color: "red",
  },
  {
    name: "マネックス証券",
    type: "米国株・分析ツールに強み",
    price: "国内株 1注文ごと55円〜（取引毎手数料）",
    plan: "国内株・米国株・中国株・iDeCo・NISA対応",
    features: "米国株5,000銘柄以上・銘柄スカウター・dポイント還元",
    featureDetail: "米国株取扱銘柄数は業界トップクラス。独自の高度な分析ツール「銘柄スカウター」が無料で利用可能。dカード積立で最大1.1%還元",
    point: "マネックスポイント・dポイント",
    minimum: "100円から投信積立可能",
    pros: [
      "米国株の取扱銘柄数が業界トップクラス（5,000+）",
      "銘柄スカウターの分析機能が無料で高評価",
      "米国株の買付時為替手数料が無料",
      "dカード積立で最大1.1%還元",
      "IPO取扱の完全平等抽選方式",
      "投資情報・セミナーが充実",
    ],
    cons: [
      "国内株売買手数料は完全無料ではない",
      "アプリのUIは他社よりやや古めの印象",
      "口座数はSBI・楽天より少ない",
    ],
    bestFor:
      "米国株を本格的に取引したい方、銘柄分析を重視する方に最適。分析ツールの質はネット証券の中でもトップクラスです。",
    url: "https://www.monex.co.jp/",
    badge: "米国株最強",
    color: "green",
  },
  {
    name: "松井証券",
    type: "100年以上の歴史・サポート充実",
    price: "1日約定50万円以下0円（ボックスレート）",
    plan: "1日定額制の手数料体系／NISA・iDeCo対応",
    features: "50万円以下0円・25歳以下無料・電話サポート充実",
    featureDetail: "1日の約定代金合計50万円までなら売買手数料0円。25歳以下はすべて無料。電話サポートが業界トップクラスで高評価",
    point: "松井証券ポイント",
    minimum: "100円から投信積立可能",
    pros: [
      "1日50万円以下の取引なら手数料0円",
      "25歳以下はすべての取引が無料",
      "電話サポートが充実（顧客満足度トップクラス）",
      "投信信託保有でポイント還元（業界最高水準）",
      "デイトレード向け短期取引にもお得",
      "100年以上の歴史を持つ老舗証券",
    ],
    cons: [
      "50万円超の取引は手数料がかかる",
      "外国株の取扱が米国株のみ",
      "クレカ積立サービスがない",
    ],
    bestFor:
      "少額投資の方、25歳以下の若年層、電話サポートを重視する方に最適。50万円以内の取引が中心ならコスト面で有利です。",
    url: "https://www.matsui.co.jp/",
    badge: "サポート充実",
    color: "orange",
  },
  {
    name: "PayPay証券",
    type: "1,000円から有名企業の株が買える",
    price: "スプレッド0.5〜1%（取引コスト）",
    plan: "1,000円単位で米国株・日本株が購入可能",
    features: "1,000円から株式投資・PayPayポイント連携・スマホ完結",
    featureDetail: "Apple・Amazon・Google・トヨタなど有名企業株が1,000円から購入可能。アプリで完結する手軽さが魅力。PayPayポイントで投資もできる",
    point: "PayPayポイント",
    minimum: "1,000円から株式購入可能",
    pros: [
      "1,000円から有名企業の株が買える",
      "操作が非常にシンプルで初心者向け",
      "スマホアプリだけで完結（PC不要）",
      "PayPayポイントで株が買える",
      "つみたてNISAも対応",
      "米国株・日本株の有名銘柄が買いやすい",
    ],
    cons: [
      "取引コスト（スプレッド）が他社より高め",
      "取扱銘柄数が少ない（厳選された有名企業のみ）",
      "本格的な分析ツールがない",
    ],
    bestFor:
      "投資初心者、少額からまず始めてみたい方、PayPayユーザーに最適。難しい手続きなしで、今日から1,000円で投資を始められます。",
    url: "https://www.paypay-sec.co.jp/",
    badge: "1,000円から",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const faqItems = [
  {
    question: "投資初心者は最初にどの証券会社を選べばいいですか？",
    answer: "投資初心者には楽天証券かSBI証券がおすすめです。手数料が安く、取扱商品も豊富で長く使えます。とにかく少額から始めたい方はPayPay証券（1,000円から）も選択肢です。普段使うポイント（楽天ポイント・Tポイント・PayPay）に合わせて選ぶと、ポイント連携で恩恵が大きくなります。",
  },
  {
    question: "新NISAはどの証券会社で始めるのがお得ですか？",
    answer: "SBI証券と楽天証券が新NISAでも人気No.1・No.2です。両社とも取扱投信本数が2,500本以上、クレカ積立対応、ポイント還元ありで、新NISAに必要な要素が揃っています。三井住友カードユーザーならSBI証券、楽天カードユーザーなら楽天証券がポイント還元面で有利です。",
  },
  {
    question: "国内株の売買手数料を完全無料にできる証券会社はどこですか？",
    answer: "SBI証券（ゼロ革命）と楽天証券（ゼロコース）は、国内株式の現物・信用取引の売買手数料を完全無料化しています。所定の条件を満たせば、何度取引しても手数料はかかりません。松井証券は1日50万円以下なら無料です。",
  },
  {
    question: "クレジットカード積立で還元率が高いのはどこですか？",
    answer: "SBI証券×三井住友カードプラチナプリファードで最大5%還元、SBI証券×三井住友カード（NL）で0.5%還元です。楽天証券×楽天カードは0.5〜1%、マネックス証券×dカードは1.1%還元です。年間の積立額と保有カードに応じて選びましょう。",
  },
  {
    question: "iDeCo（個人型確定拠出年金）はどこで始めるのがいいですか？",
    answer: "iDeCoはSBI証券・楽天証券・マネックス証券のいずれかがおすすめです。3社とも口座管理手数料が無料で、商品ラインナップも充実しています。低コストインデックスファンドを購入できるのが共通のメリットです。",
  },
  {
    question: "投資アプリの安全性は大丈夫ですか？",
    answer: "今回紹介した5社はすべて金融庁登録の証券会社で、投資者保護基金により1人あたり1,000万円まで保護されます。証券会社が破綻しても、預けた現金や株式は分別管理されているため基本的に保護されます。安全性の面では大手ネット証券を選んでおけば安心です。",
  },
];

export default function InvestmentAppComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "投資アプリ比較おすすめ5選", url: `${siteConfig.url}/guide/investment-app-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>投資アプリ比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">資産運用</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】投資アプリ比較おすすめ5選｜手数料・取扱商品・初心者向けを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「投資を始めたいけど、どのアプリを使えばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの投資アプリ・ネット証券5選（SBI証券・楽天証券・マネックス証券・松井証券・PayPay証券）を手数料・取扱商品・ポイント還元・使いやすさで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">本格運用なら → SBI証券</span>（取扱商品最多・手数料0円）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">楽天ユーザー → 楽天証券</span>（ポイント投資・楽天カード積立）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">米国株なら → マネックス証券</span>（5,000銘柄以上）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">初心者・少額 → PayPay証券</span>（1,000円から）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-invest" className="text-primary hover:underline">1. 投資アプリを使うメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 投資アプリ5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各アプリの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. 目的別おすすめアプリ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 投資アプリの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-invest" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 投資アプリを使うメリット</h2>
        <p className="text-muted leading-relaxed mb-4">スマホ完結の投資アプリで、誰でも気軽に資産運用を始められる時代になりました。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128241;", title: "スマホで完結・口座開設も簡単", desc: "店舗に行かずスマホだけで口座開設・取引が完結。マイナンバーカードがあれば最短翌日に取引開始できます。" },
            { icon: "&#128176;", title: "手数料が圧倒的に安い", desc: "ネット証券は対面証券に比べ手数料が劇的に安く、SBI・楽天は国内株手数料0円。長期投資のコストを最小化できます。" },
            { icon: "&#127919;", title: "新NISAで非課税運用が可能", desc: "新NISAで年間最大360万円・生涯1,800万円までの投資益が非課税。20年30年後の資産形成に大きな差が出ます。" },
            { icon: "&#128181;", title: "ポイントで投資も可能", desc: "楽天ポイント・Tポイント・PayPayポイントなど、普段の買い物で貯まるポイントで投資ができ、現金リスクなしで投資体験を始められます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 投資アプリ5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">SBI</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">楽天</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">マネックス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">松井</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">PayPay</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "国内株手数料", s: "0円", r: "0円", m: "55円〜", ma: "50万まで0円", p: "スプレッド" },
                { label: "米国株銘柄", s: "5,400+", r: "4,900+", m: "5,000+", ma: "限定的", p: "厳選100+" },
                { label: "投信本数", s: "2,600+", r: "2,500+", m: "1,200+", ma: "1,800+", p: "限定的" },
                { label: "ポイント", s: "T/Ponta/d/V", r: "楽天", m: "d/マネックス", ma: "松井", p: "PayPay" },
                { label: "クレカ積立", s: "三井住友最大5%", r: "楽天1%", m: "dカード1.1%", ma: "なし", p: "なし" },
                { label: "新NISA", s: "最強クラス", r: "最強クラス", m: "充実", ma: "対応", p: "対応" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.s}</td>
                  <td className="border border-card-border p-3">{row.r}</td>
                  <td className="border border-card-border p-3">{row.m}</td>
                  <td className="border border-card-border p-3">{row.ma}</td>
                  <td className="border border-card-border p-3">{row.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 2026年4月時点の情報です。最新情報は各社公式サイトをご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各アプリの詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">手数料</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">最低額</span><span className="font-bold">{s.minimum}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">ポイント：</span>{s.point}</p>
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
        <h2 className="text-2xl font-bold mb-4">4. 目的別おすすめアプリ</h2>
        <div className="space-y-4">
          {[
            { scene: "新NISAで本格的に積立投資をしたい", app: "SBI証券", reason: "投信取扱本数業界最多。三井住友カードプラチナプリファードでクレカ積立5%還元と、長期積立に最適です。" },
            { scene: "楽天ポイントを貯めながら投資したい", app: "楽天証券", reason: "楽天ポイントで投信・国内株が買える。楽天カードクレカ積立も併用すれば二重三重でポイントが貯まります。" },
            { scene: "米国株（Apple・Google等）を取引したい", app: "マネックス証券", reason: "米国株5,000銘柄以上、買付時為替手数料無料、銘柄スカウターの分析ツールも充実しています。" },
            { scene: "少額のデイトレ・25歳以下の若者", app: "松井証券", reason: "1日50万円以下なら手数料0円、25歳以下は全取引無料。電話サポートも充実しています。" },
            { scene: "投資をまず1,000円から始めてみたい", app: "PayPay証券", reason: "1,000円から有名企業の株が買える。スマホアプリだけで完結する手軽さが魅力です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 投資アプリの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "売買手数料を比較する", desc: "長期投資ではコストが運用成績を大きく左右します。SBI証券・楽天証券は国内株手数料0円なので、取引コストを最小化できます。" },
            { num: "2", title: "取扱商品の豊富さ", desc: "投信本数・米国株銘柄数・債券・FX・iDeCoなど、自分が投資したい商品が揃っているか確認しましょう。" },
            { num: "3", title: "ポイント還元・連携", desc: "楽天経済圏なら楽天証券、Tポイント派ならSBI証券と、普段貯めているポイントとの相性で選ぶと総合的にお得です。" },
            { num: "4", title: "クレカ積立の還元率", desc: "新NISAのクレカ積立はポイント還元で実質利回りが向上します。保有カードの還元率を比較しましょう。" },
            { num: "5", title: "アプリの使いやすさ", desc: "毎日触れるものなので、操作性は重要です。初心者ならPayPay証券、本格派ならSBI証券・楽天証券が高評価です。" },
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
            投資アプリは目的とライフスタイルに合ったものを選ぶことが大切です。本格運用ならSBI証券、楽天経済圏なら楽天証券、米国株ならマネックス証券、サポート重視なら松井証券、初心者ならPayPay証券がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            すべて口座開設無料・維持費無料なので、まずは気になる証券会社で口座を開いて少額から始めてみましょう。新NISAを活用すれば非課税で長期資産形成ができます。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・本格派は「SBI証券」（取扱商品最多・手数料0円）</li>
              <li>・楽天派は「楽天証券」（楽天ポイント連携）</li>
              <li>・米国株なら「マネックス証券」（5,000銘柄）</li>
              <li>・少額デビューは「PayPay証券」（1,000円から）</li>
              <li>・新NISAをフル活用して長期資産形成</li>
            </ul>
          </div>
          <p className="text-xs text-muted mt-4">※ 投資は元本割れリスクがあります。投資判断は自己責任で行い、本記事は特定の銘柄の購入を推奨するものではありません。</p>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/retirement-savings-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">老後資金シミュレーターを使う</div>
          <p className="text-xs text-muted">目標金額と想定利回りから必要な月額積立額を自動計算。投資アプリ選びの判断材料に →</p>
        </Link>
      </section>

      <section className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold mb-2">積立シミュレーター</h2>
        <p className="text-sm text-muted mb-3">毎月の積立額と想定利回りから、将来資産をグラフで可視化します。</p>
        <Link href="/tools/investment-fund-simulator" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">積立投資シミュレーターを使う</Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">クレカ積立に使えるおすすめカードを比較</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">特定口座以外の方の確定申告に便利</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
