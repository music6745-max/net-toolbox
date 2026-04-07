import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】FX口座比較おすすめ5選｜スプレッド・スワップ・ツールを徹底解説",
    description:
      "2026年最新のFX口座を徹底比較。GMOクリック証券・DMM FX・外為どっとコム・みんなのFX・SBI FXトレードのスプレッド・スワップ・ツールを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/fx-account-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "GMOクリック証券",
    type: "取引高世界No.1・総合力",
    price: "米ドル円0.2銭〜",
    plan: "スプレッド業界最狭水準",
    features: "取引高世界No.1・高機能ツール・スワップ高水準",
    featureDetail: "FX取引高で世界No.1の実績を誇る大手FX会社。スプレッドは業界最狭水準、プラチナチャートプラスなど本格的な分析ツールが無料で使えます。スワップポイントも高水準",
    payment: "クイック入金対応・手数料無料",
    items: "20通貨ペア・1,000通貨から取引可",
    pros: [
      "取引高世界No.1の信頼性",
      "スプレッド業界最狭水準",
      "高機能チャートツール無料",
      "スワップポイント高水準",
      "スマホアプリの評価が高い",
      "約定力が強くスリッページ少",
    ],
    cons: [
      "最小取引単位が1,000通貨",
      "キャンペーンは控えめ",
      "マイナー通貨ペアは少なめ",
    ],
    bestFor: "信頼性と総合力で選ぶなら最適な業界大手FX会社。初心者から上級者まで幅広く使え、スキャルピング・デイトレ・スイングまで対応できます。",
    url: "https://www.click-sec.com/fx/",
    badge: "世界No.1",
    color: "blue",
  },
  {
    name: "DMM FX",
    type: "初心者向け・シンプル",
    price: "米ドル円0.2銭〜",
    plan: "最短即日取引開始",
    features: "LINEサポート・初心者向けUI・キャッシュバック",
    featureDetail: "口座開設後最短即日で取引開始可能。LINEでのカスタマーサポートが好評、初心者でも使いやすいシンプルなUIが特徴。新規口座開設で最大30万円キャッシュバックの特典あり",
    payment: "クイック入金対応・手数料無料",
    items: "21通貨ペア・10,000通貨から取引",
    pros: [
      "最短即日で取引開始可能",
      "LINE問い合わせ対応",
      "初心者向けシンプルUI",
      "口座開設キャッシュバック豊富",
      "スプレッド狭い",
      "大手DMMグループで安心",
    ],
    cons: [
      "最小取引単位が10,000通貨",
      "マイナー通貨ペア少なめ",
      "スワップはやや低め",
    ],
    bestFor: "初めてFXを始める方、サポートを重視する初心者におすすめ。LINEサポートとシンプルなUIで迷わず取引を始められます。",
    url: "https://fx.dmm.com/",
    badge: "初心者OK",
    color: "red",
  },
  {
    name: "外為どっとコム",
    type: "情報量豊富・老舗",
    price: "米ドル円0.2銭〜",
    plan: "1,000通貨から取引可",
    features: "情報コンテンツ最強・老舗信頼・初心者講座",
    featureDetail: "FX情報コンテンツ量が業界トップクラスの老舗FX会社。マーケット情報・アナリストレポート・動画セミナーが無料で充実。初心者向けの学習コンテンツも豊富",
    payment: "クイック入金対応・手数料無料",
    items: "30通貨ペア・1,000通貨から取引",
    pros: [
      "FX情報コンテンツ業界最強",
      "老舗の信頼と実績",
      "1,000通貨から取引可",
      "初心者向け講座が豊富",
      "アナリストレポート無料",
      "取扱通貨ペアが多い",
    ],
    cons: [
      "スマホアプリの機能は標準的",
      "スプレッド原則固定が例外多め",
      "上級者向け機能は少なめ",
    ],
    bestFor: "FXを基礎から学びたい初心者、情報量を重視する中級者におすすめ。老舗ならではの信頼性と充実した学習コンテンツが魅力です。",
    url: "https://www.gaitame.com/",
    badge: "情報最強",
    color: "green",
  },
  {
    name: "みんなのFX",
    type: "高スワップ・少額取引",
    price: "米ドル円0.2銭〜",
    plan: "1,000通貨から取引可",
    features: "スワップポイント業界最高水準・少額取引対応",
    featureDetail: "スワップポイントが業界最高水準で高金利通貨投資に強いFX会社。1,000通貨から取引可能で少額から始められます。トルコリラ・メキシコペソなど高金利通貨のスワップが魅力",
    payment: "クイック入金対応・手数料無料",
    items: "31通貨ペア・1,000通貨から取引",
    pros: [
      "スワップポイント業界最高水準",
      "1,000通貨から少額取引可",
      "高金利通貨ペアの取扱が豊富",
      "スプレッドも狭い水準",
      "シンプルな取引ツール",
      "法人口座も対応",
    ],
    cons: [
      "情報コンテンツは少なめ",
      "スマホアプリの機能は標準的",
      "知名度は大手より低め",
    ],
    bestFor: "スワップポイント狙いの長期保有派、高金利通貨に投資したい方におすすめ。1,000通貨から始められるので初心者の少額取引にも向いています。",
    url: "https://min-fx.jp/",
    badge: "高スワップ",
    color: "orange",
  },
  {
    name: "SBI FXトレード",
    type: "1通貨〜・最小単位",
    price: "米ドル円0.09銭〜",
    plan: "1通貨から取引可",
    features: "業界最小1通貨〜・SBI系・スプレッド最狭",
    featureDetail: "1通貨単位(約5円〜)から取引可能な業界唯一のFX会社。米ドル円スプレッド0.09銭は業界最狭水準。SBIグループの信頼性と最小取引単位で超少額から始められる",
    payment: "クイック入金対応・手数料無料",
    items: "34通貨ペア・1通貨から取引",
    pros: [
      "業界唯一の1通貨〜取引対応",
      "米ドル円0.09銭で最狭水準",
      "超少額から始められる",
      "SBIグループで安心",
      "取扱通貨ペア数34と豊富",
      "スワップも良水準",
    ],
    cons: [
      "取引ツールは標準的",
      "情報コンテンツはやや控えめ",
      "キャンペーンは地味",
    ],
    bestFor: "超少額から始めたい初心者、スプレッド重視のスキャルパーにおすすめ。1通貨から始められるのでお試し感覚でFXを体験できます。",
    url: "https://www.sbifxt.co.jp/",
    badge: "1通貨〜",
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
    question: "FXは少額からでも始められますか？",
    answer: "はい、SBI FXトレードなら1通貨(約5円〜)から、みんなのFX・外為どっとコムなら1,000通貨から取引可能です。まずは少額で取引に慣れてから徐々に資金を増やすのがおすすめです。",
  },
  {
    question: "スプレッドとは何ですか？",
    answer: "スプレッドは売値と買値の差で、実質的な取引コストのこと。米ドル円で0.2銭の場合、1万通貨取引で20円のコストが発生します。狭いほど有利なので主要FX会社のスプレッドをしっかり比較しましょう。",
  },
  {
    question: "スワップポイントとは？",
    answer: "通貨ペアの金利差から発生する金利収入のこと。高金利通貨(トルコリラ・メキシコペソなど)を買って低金利通貨(円)を売ると毎日スワップを受け取れます。長期保有戦略の重要な収入源です。",
  },
  {
    question: "初心者はどのFX会社を選べばいいですか？",
    answer: "サポートと情報量で選ぶなら外為どっとコム、シンプルなUIならDMM FX、少額から始めるならSBI FXトレードがおすすめ。最初は複数口座開設して比較するのもよい方法です。",
  },
  {
    question: "FX取引に税金はかかりますか？",
    answer: "FXの利益は申告分離課税で税率20.315%(所得税15%・復興特別所得税0.315%・住民税5%)。年間20万円以上の利益が出たら確定申告が必要です。損益通算や繰越控除も活用できます。",
  },
  {
    question: "レバレッジは何倍まで使えますか？",
    answer: "個人口座は最大25倍まで。レバレッジが高いほど少ない資金で大きな取引ができますが、損失も大きくなります。初心者は2〜5倍程度の低レバレッジから始めてリスク管理を学びましょう。",
  },
];

export default function FxAccountComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "FX口座比較おすすめ5選", url: `${siteConfig.url}/guide/fx-account-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>FX口座比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">投資</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】FX口座比較おすすめ5選｜スプレッド・スワップ・ツールを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「どのFX会社で口座開設すべき？」そんな疑問にお答えします。この記事では、2026年現在おすすめのFX口座5選（GMOクリック証券・DMM FX・外為どっとコム・みんなのFX・SBI FXトレード）をスプレッド・スワップ・ツールで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">総合力 → GMOクリック証券</span>（取引高世界No.1）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">初心者 → DMM FX</span>（LINEサポート）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">情報重視 → 外為どっとコム</span>（老舗信頼）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">スワップ狙い → みんなのFX</span>（業界最高）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">少額取引 → SBI FXトレード</span>（1通貨〜）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-fx" className="text-primary hover:underline">1. FX取引のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. FX口座5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. FX口座の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-fx" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. FX取引のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">FXは少額・24時間・レバレッジ取引が可能で、副業や資産運用の選択肢として人気です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "少額から始められる", desc: "数千円〜1万円程度の証拠金から取引可能。1通貨単位の会社なら約5円から始められます。" },
            { icon: "&#9200;", title: "24時間取引可能", desc: "平日ならいつでも取引でき、副業・兼業でも通勤時間や夜間に取引できます。" },
            { icon: "&#128200;", title: "レバレッジで効率運用", desc: "最大25倍のレバレッジで少ない資金で大きな取引が可能。資金効率が高いのが特徴です。" },
            { icon: "&#128181;", title: "スワップポイント収入", desc: "高金利通貨を保有するだけで毎日スワップポイント(金利差収入)を得られます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. FX口座5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">GMO</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">DMM</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">外為com</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">みんな</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">SBI</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "米ドル円SP", r: "0.2銭", s: "0.2銭", n: "0.2銭", c: "0.2銭", a: "0.09銭" },
                { label: "最小単位", r: "1,000", s: "10,000", n: "1,000", c: "1,000", a: "1通貨" },
                { label: "通貨ペア", r: "20", s: "21", n: "30", c: "31", a: "34" },
                { label: "スワップ", r: "高水準", s: "普通", n: "普通", c: "最高水準", a: "高水準" },
                { label: "情報量", r: "豊富", s: "標準", n: "最強", c: "少なめ", a: "標準" },
                { label: "おすすめ", r: "総合力", s: "初心者", n: "情報派", c: "スワップ派", a: "少額派" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">スプレッド</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">最小単位</span><span className="font-bold">{s.items}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">入金：</span>{s.payment}</p>
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
            { scene: "信頼性と総合力で選びたい", app: "GMOクリック証券", reason: "取引高世界No.1の信頼性、スプレッド最狭水準、高機能ツールで初心者から上級者まで使えます。" },
            { scene: "初めてFXを始める初心者", app: "DMM FX", reason: "LINEサポートとシンプルUIで迷わず始められ、最短即日から取引開始できます。" },
            { scene: "FXを基礎から学びたい", app: "外為どっとコム", reason: "老舗の信頼性と業界最強の情報コンテンツで、FXの基礎からしっかり学べます。" },
            { scene: "スワップポイント狙いの長期派", app: "みんなのFX", reason: "スワップ業界最高水準、高金利通貨ペアが豊富で長期保有での運用に最適です。" },
            { scene: "超少額からお試しで始めたい", app: "SBI FXトレード", reason: "業界唯一の1通貨(約5円)から取引可能、スプレッドも最狭水準でお試しに最適です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. FX口座の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "スプレッドの狭さを比較", desc: "取引コストに直結するのでスプレッドが狭い会社を選びましょう。主要通貨ペアで比較するのが基本です。" },
            { num: "2", title: "スワップポイントの高さ", desc: "長期保有派はスワップ重視。高金利通貨の買いポジションを持つならスワップの高い会社が有利です。" },
            { num: "3", title: "取引単位(最小ロット)", desc: "初心者は1,000通貨や1通貨から始められる会社が安心。慣れてから10,000通貨に増やしましょう。" },
            { num: "4", title: "取引ツールの使いやすさ", desc: "スマホアプリの評価とPCツールの機能を確認。初心者はシンプル、上級者は高機能を選びましょう。" },
            { num: "5", title: "サポート体制と情報量", desc: "初心者は電話・LINEサポート、情報コンテンツの充実度で選ぶと学習効率が上がります。" },
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
            FX口座はスプレッド・スワップ・取引単位・サポートで選ぶのが基本です。総合力ならGMOクリック証券、初心者はDMM FX、情報重視は外為どっとコム、スワップ派はみんなのFX、少額派はSBI FXトレードがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・総合力は「GMOクリック証券」(世界No.1)</li>
              <li>・初心者は「DMM FX」のLINEサポート</li>
              <li>・情報量は「外為どっとコム」が最強</li>
              <li>・スワップ狙いは「みんなのFX」</li>
              <li>・少額派は「SBI FXトレード」の1通貨〜</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">株式投資を始めたい方はこちら</p>
          </Link>
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">スマホで気軽に始める投資</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
