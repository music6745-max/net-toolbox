import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ネット証券比較おすすめ5選｜手数料・NISA・取扱銘柄を徹底解説",
    description:
      "2026年最新のネット証券を徹底比較。SBI証券・楽天証券・マネックス証券・松井証券・auカブコム証券の手数料・NISA対応・ツールを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/online-broker-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "SBI証券",
    type: "口座数No.1・総合力",
    price: "国内株手数料0円",
    plan: "ゼロ革命・NISA対応",
    features: "取扱銘柄数最多・Tポイント投資・IPO実績豊富",
    featureDetail: "国内口座数No.1のネット証券。国内株式手数料が条件達成で0円、外国株・投資信託・IPOも充実。Tポイント・Pontaポイント・Vポイントで投資信託購入も可能",
    payment: "三井住友カード決済でポイント還元",
    items: "国内株・米国株9カ国・投資信託・IPO・iDeCo",
    pros: [
      "国内株式手数料が条件達成で0円",
      "取扱銘柄数が業界最多クラス",
      "IPO実績が豊富",
      "Vポイント・Pontaなど複数ポイント対応",
      "三井住友カードで投信積立ポイント還元",
      "米国株9カ国以上の対応",
    ],
    cons: [
      "ツールが多機能で初心者に複雑",
      "カスタマーサポートは混雑しがち",
      "サイトUIがやや古め",
    ],
    bestFor: "取扱銘柄の多さと手数料の安さで選ぶなら最適な総合力No.1証券。IPO狙いや外国株取引もしたい中上級者、ポイント投資をしたい初心者にもおすすめです。",
    url: "https://www.sbisec.co.jp/",
    badge: "総合力No.1",
    color: "blue",
  },
  {
    name: "楽天証券",
    type: "楽天ポイント投資・初心者向け",
    price: "国内株手数料0円",
    plan: "ゼロコース・NISA対応",
    features: "楽天ポイント投資・楽天経済圏・日経新聞無料",
    featureDetail: "楽天グループのネット証券で口座数業界2位。楽天ポイントで投資信託購入可能、楽天カードクレカ積立でポイント還元。楽天銀行マネーブリッジで金利優遇も魅力",
    payment: "楽天カード決済・楽天キャッシュ決済対応",
    items: "国内株・米国株・中国株・投資信託・iDeCo",
    pros: [
      "国内株式手数料ゼロコース",
      "楽天ポイントで投資信託が買える",
      "楽天カード積立で1%ポイント還元",
      "日経テレコン無料で利用可",
      "初心者向けツールが使いやすい",
      "マネーブリッジで普通預金金利UP",
    ],
    cons: [
      "米国株取扱数はSBIに劣る",
      "IPO銘柄数は少なめ",
      "クレカ還元率が変動する",
    ],
    bestFor: "楽天経済圏ユーザーや投資初心者におすすめ。楽天ポイントで気軽に投資を始められ、クレカ積立やSPUアップで楽天ライフ全体がお得になります。",
    url: "https://www.rakuten-sec.co.jp/",
    badge: "楽天ポイント",
    color: "red",
  },
  {
    name: "マネックス証券",
    type: "米国株・分析ツール重視",
    price: "国内株110円〜",
    plan: "NISA対応・米国株手数料割安",
    features: "米国株取扱数最多・銘柄スカウター・IPO公平抽選",
    featureDetail: "米国株取扱銘柄数がネット証券トップクラスで約5,000銘柄以上。独自ツール「銘柄スカウター」で企業分析が強力。IPO抽選は完全平等抽選で初心者にもチャンスあり",
    payment: "マネックスカードで投信積立ポイント還元",
    items: "米国株・中国株・国内株・投資信託・iDeCo",
    pros: [
      "米国株約5,000銘柄で業界最多級",
      "銘柄スカウターで企業分析が充実",
      "IPO完全平等抽選で当たりやすい",
      "マネックスカード1.1%還元",
      "中国株も豊富に取扱",
      "投資情報コンテンツが充実",
    ],
    cons: [
      "国内株手数料はSBI・楽天より高め",
      "ツールが本格派で初心者に難しい",
      "ポイントプログラムはシンプル",
    ],
    bestFor: "米国株投資を本格的に始めたい方、銘柄分析ツールを重視する中級者以上におすすめ。IPO抽選も平等なので初心者のチャレンジ投資にも向いています。",
    url: "https://www.monex.co.jp/",
    badge: "米国株No.1",
    color: "green",
  },
  {
    name: "松井証券",
    type: "老舗・サポート重視",
    price: "1日50万円まで0円",
    plan: "ボックスレート・NISA対応",
    features: "100年超の老舗・電話サポート・デイトレ向け",
    featureDetail: "日本初のネット専業証券として長い歴史。1日の約定代金50万円まで手数料無料、デイトレード向け「一日信用取引」は金利0円。専任サポートが充実しており初心者に優しい",
    payment: "クレジットカード積立未対応",
    items: "国内株・米国株・投資信託・iDeCo・FX",
    pros: [
      "1日50万円まで手数料無料",
      "デイトレ向け一日信用取引が強力",
      "老舗のサポート体制が充実",
      "電話問い合わせ対応が丁寧",
      "ツールが初心者にも分かりやすい",
      "株主優待検索機能が便利",
    ],
    cons: [
      "米国株取扱数は少なめ",
      "クレカ積立非対応",
      "ポイント還元サービスなし",
    ],
    bestFor: "電話サポートを重視する初心者、デイトレードを始めたい方におすすめ。100年超の老舗企業の安心感と丁寧なサポート体制が魅力です。",
    url: "https://www.matsui.co.jp/",
    badge: "老舗安心",
    color: "purple",
  },
  {
    name: "auカブコム証券",
    type: "au・MUFG系・安定志向",
    price: "1日100万円まで0円",
    plan: "NISA対応・au経済圏特典",
    features: "Pontaポイント投資・auユーザー特典・MUFG系",
    featureDetail: "MUFG系列の安定感あるネット証券。auじぶん銀行との連携で金利優遇、Pontaポイントで投資信託購入可能。au PAYカード決済で投信積立のポイント還元も",
    payment: "au PAYカードで投信積立ポイント還元",
    items: "国内株・米国株・投資信託・iDeCo・プチ株",
    pros: [
      "1日100万円まで手数料無料",
      "Pontaポイントで投資可能",
      "au PAYカード積立でポイント還元",
      "MUFG系で安心感がある",
      "auじぶん銀行連携で金利優遇",
      "プチ株(単元未満株)対応",
    ],
    cons: [
      "米国株取扱数は限定的",
      "IPO取扱数は少なめ",
      "au以外のメリットは限定的",
    ],
    bestFor: "au・UQモバイルユーザー、Pontaポイントを貯めている方におすすめ。MUFG系列の安定感と少額投資(プチ株)対応で初心者にも使いやすい証券会社です。",
    url: "https://kabu.com/",
    badge: "au経済圏",
    color: "orange",
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
    question: "ネット証券と対面証券はどちらがいいですか？",
    answer: "コストや利便性を重視するならネット証券が圧倒的におすすめです。手数料が対面証券の1/10以下で、いつでもスマホから取引可能。相談を重視する方は対面、コストと自由度を重視するならネット証券を選びましょう。",
  },
  {
    question: "NISAはどの証券会社で口座開設すべきですか？",
    answer: "SBI証券・楽天証券が投資信託の本数・クレカ積立還元率ともに優秀です。楽天経済圏なら楽天証券、最大数の銘柄と多様なポイント還元ならSBI証券がおすすめ。NISA口座は1人1口座しか持てないので慎重に選びましょう。",
  },
  {
    question: "初心者はどの証券会社から始めればいいですか？",
    answer: "操作のしやすさと情報量で楽天証券かSBI証券がおすすめ。普段貯めているポイントや使っているクレジットカードと連携できる証券を選ぶと、ポイント投資やクレカ積立でお得に始められます。",
  },
  {
    question: "複数の証券会社で口座開設してもいいですか？",
    answer: "はい、一般口座・特定口座は複数証券会社で開設可能です。IPOは抽選数を増やせるし、各社の得意分野を使い分けできます。ただしNISA口座は1人1口座なので注意しましょう。",
  },
  {
    question: "米国株取引の手数料はどこが安いですか？",
    answer: "SBI証券・楽天証券・マネックス証券の3社が最安水準で、約定代金の0.495%(上限22ドル)です。取扱銘柄数ではマネックス証券が約5,000銘柄で最多級、SBI証券も豊富な銘柄を扱っています。",
  },
  {
    question: "IPOに当選しやすい証券会社はどこですか？",
    answer: "SBI証券がIPO実績トップで引受数も多いため当選確率が高いです。マネックス証券は完全平等抽選なので初心者にもチャンスあり。複数証券会社で同時に申込むと当選確率を上げられます。",
  },
];

export default function OnlineBrokerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ネット証券比較おすすめ5選", url: `${siteConfig.url}/guide/online-broker-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ネット証券比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">投資</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ネット証券比較おすすめ5選｜手数料・NISA・取扱銘柄を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「どのネット証券で口座開設すべき？」そんな疑問にお答えします。この記事では、2026年現在おすすめのネット証券5選（SBI証券・楽天証券・マネックス証券・松井証券・auカブコム証券）を手数料・NISA対応・取扱銘柄・ツールで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">総合力No.1 → SBI証券</span>（取扱銘柄最多）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">初心者 → 楽天証券</span>（楽天ポイント投資）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">米国株 → マネックス証券</span>（約5,000銘柄）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">サポート重視 → 松井証券</span>（老舗安心）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">auユーザー → auカブコム証券</span>（Ponta投資）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-net" className="text-primary hover:underline">1. ネット証券のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. ネット証券5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. ネット証券の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-net" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ネット証券のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ネット証券は対面証券と比較して手数料が圧倒的に安く、いつでもスマホで取引できる点が最大の魅力です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "手数料が圧倒的に安い", desc: "対面証券の1/10以下の手数料で取引可能。大手ネット証券では国内株式手数料が無料化されています。" },
            { icon: "&#128241;", title: "スマホで24時間取引可能", desc: "専用アプリで場所を選ばず取引でき、リアルタイムで相場をチェックできます。" },
            { icon: "&#127775;", title: "ポイント投資やクレカ積立", desc: "普段貯めているポイントで投資信託購入、クレカ積立でポイント還元を受けながら資産形成できます。" },
            { icon: "&#128187;", title: "豊富な情報ツール", desc: "企業分析ツール・スクリーニング・アナリストレポートなど、対面証券並みの情報が無料で使えます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. ネット証券5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">SBI</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">楽天</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">マネックス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">松井</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">auカブ</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "国内株手数料", r: "0円", s: "0円", n: "110円〜", c: "50万迄0円", a: "100万迄0円" },
                { label: "米国株銘柄", r: "6,000+", s: "5,000+", n: "5,000+", c: "少なめ", a: "少なめ" },
                { label: "投信本数", r: "2,600+", s: "2,600+", n: "1,300+", c: "1,800+", a: "1,600+" },
                { label: "クレカ積立", r: "Vポイント", s: "楽天", n: "マネックス", c: "なし", a: "au PAY" },
                { label: "IPO実績", r: "多い", s: "普通", n: "平等抽選", c: "少ない", a: "少ない" },
                { label: "おすすめ", r: "総合力", s: "初心者", n: "米国株", c: "サポート", a: "auユーザー" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">手数料</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">取扱</span><span className="font-bold">{s.items}</span></div>
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
            { scene: "幅広い商品を取引したい中上級者", app: "SBI証券", reason: "取扱銘柄数No.1で国内株・米国株・IPO・投資信託すべて業界トップクラス。ポイント対応も豊富です。" },
            { scene: "投資初心者で楽天ユーザー", app: "楽天証券", reason: "楽天ポイントで投資を始められ、楽天カード積立でポイント還元。初心者向けツールが使いやすいです。" },
            { scene: "米国株をメインに取引したい", app: "マネックス証券", reason: "米国株約5,000銘柄で業界最多級。銘柄スカウターで企業分析も充実しています。" },
            { scene: "デイトレードや電話相談を重視", app: "松井証券", reason: "1日50万円まで手数料無料、一日信用取引の金利0円、老舗の丁寧なサポートが魅力です。" },
            { scene: "au・Pontaユーザー", app: "auカブコム証券", reason: "PontaポイントとauPAYカード積立でポイント還元、MUFG系列の安定感もメリット。" },
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
        <h2 className="text-2xl font-bold mb-4">5. ネット証券の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "手数料体系を比較", desc: "国内株式手数料0円が主流ですが、条件やコース選択で変わります。自分の取引スタイルに合う手数料を選びましょう。" },
            { num: "2", title: "取扱商品の種類と銘柄数", desc: "国内株のみなら問題ないですが、米国株・投資信託・IPOをやりたいなら取扱数の多いSBI・マネックスがおすすめです。" },
            { num: "3", title: "ポイント投資・クレカ積立", desc: "普段貯めているポイントや使っているクレカに対応した証券を選ぶと、実質的な還元率が高くなります。" },
            { num: "4", title: "情報ツールの使いやすさ", desc: "初心者ならシンプルなアプリ、中上級者なら分析ツールの充実度で選ぶと使い勝手が良くなります。" },
            { num: "5", title: "NISA・iDeCo対応", desc: "NISAは投資信託本数、iDeCoは手数料・商品ラインナップで比較。長期運用するならサポートも重要です。" },
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
            ネット証券は手数料の安さと取扱商品、ポイント還元で選ぶのが基本です。総合力ならSBI証券、楽天ユーザーなら楽天証券、米国株ならマネックス証券、サポート重視なら松井証券、auユーザーならauカブコム証券がおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・総合力なら「SBI証券」(口座数No.1)</li>
              <li>・初心者は「楽天証券」でポイント投資</li>
              <li>・米国株は「マネックス証券」が最多</li>
              <li>・サポート重視は「松井証券」の老舗力</li>
              <li>・NISA口座は1人1口座のみ選択慎重に</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">スマホで気軽に投資を始めたい方へ</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">クレカ積立対応カードの選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
