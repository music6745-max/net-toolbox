import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ふるさと納税サイト比較おすすめ5選｜還元率・返礼品・ポイントを徹底解説",
    description:
      "2026年最新のふるさと納税サイトを徹底比較。楽天ふるさと納税・さとふる・ふるなび・ふるさとチョイス・au PAY ふるさと納税の還元率・返礼品数・ポイント還元を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/furusato-tax-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "楽天ふるさと納税",
    type: "楽天市場連携・ポイント還元最強",
    price: "実質負担2,000円（控除上限内）",
    plan: "通常購入と同じ手順／楽天会員向け",
    features: "楽天ポイント還元・SPU対象・楽天市場の返礼品検索",
    featureDetail: "楽天市場と同じ操作で寄附可能。SPU・お買い物マラソン・5と0のつく日などキャンペーン併用で最大30%以上のポイント還元も狙える",
    payment: "クレカ・楽天ペイ・楽天ポイント支払い対応",
    items: "約60万点以上",
    pros: [
      "楽天ポイントが貯まる・使える（実質還元率が業界最高クラス）",
      "お買い物マラソン・SPU併用で大幅還元",
      "楽天市場と同じ操作感で迷わず使える",
      "クレカ決済でポイント二重取り可能",
      "楽天会員ならアカウント新規作成不要",
      "返礼品レビュー数が多く品質を判断しやすい",
    ],
    cons: [
      "楽天会員でないとメリットが薄い",
      "サイトが情報量が多く比較しづらい場合がある",
      "ポイント還元率はキャンペーン依存",
    ],
    bestFor:
      "楽天市場をよく利用する方に最適。SPUやキャンペーンを併用すれば実質還元率は他社を圧倒します。楽天経済圏ユーザーなら一択と言えます。",
    url: "https://www.rakuten.co.jp/",
    badge: "ポイント還元最強",
    color: "red",
  },
  {
    name: "さとふる",
    type: "認知度No.1・配送が早い",
    price: "実質負担2,000円（控除上限内）",
    plan: "会員登録のみで利用可能",
    features: "PayPayポイント還元・最短1週間配送・自治体掲載数多数",
    featureDetail: "ソフトバンクグループ運営。PayPayポイントが貯まり、自治体専用倉庫で配送が早い。さとふるの日キャンペーンでポイント還元も豊富",
    payment: "クレカ・PayPay・キャリア決済・コンビニ払い対応",
    items: "約50万点以上",
    pros: [
      "テレビCMでの認知度が高く安心感がある",
      "返礼品の配送が業界最速クラス（最短1週間）",
      "PayPayポイントが貯まる",
      "操作画面がシンプルで初心者にも使いやすい",
      "自治体公認サイトとしての信頼性",
      "ワンストップ特例申請がオンライン完結",
    ],
    cons: [
      "ポイント還元率は楽天には及ばない",
      "掲載自治体数はふるさとチョイスより少ない",
      "高還元のキャンペーンは時期限定",
    ],
    bestFor:
      "ふるさと納税初心者や、できるだけ早く返礼品を受け取りたい方におすすめ。PayPayユーザーならポイント還元のメリットも享受できます。",
    url: "https://www.satofull.jp/",
    badge: "配送最速",
    color: "blue",
  },
  {
    name: "ふるなび",
    type: "家電・Amazonギフト還元に強い",
    price: "実質負担2,000円（控除上限内）",
    plan: "会員登録のみで利用可能",
    features: "ふるなびコイン還元・家電返礼品が豊富・Amazonギフト交換可",
    featureDetail: "寄附金額に応じてふるなびコインが貯まり、PayPay残高やAmazonギフトカードに交換可能。家電返礼品の品揃えが業界トップクラス",
    payment: "クレカ・Amazon Pay・PayPay・楽天ペイ対応",
    items: "約45万点以上",
    pros: [
      "家電製品の返礼品が業界最多クラス",
      "ふるなびコインがAmazonギフト等に交換可能",
      "実質還元率が高い（コイン+クレカポイント）",
      "高額寄附向けのキャンペーンが充実",
      "ふるなびプレミアムで高級グルメも豊富",
      "事前エントリーで還元率アップ",
    ],
    cons: [
      "コイン還元のためには事前エントリーが必要",
      "ふるなびコインの有効期限あり",
      "サイト構造がやや複雑",
    ],
    bestFor:
      "家電製品を返礼品として受け取りたい方、Amazonギフトカードで実質還元を受けたい方に最適。寄附金額が大きい方ほどメリットが大きいサイトです。",
    url: "https://furunavi.jp/",
    badge: "家電返礼品最多",
    color: "purple",
  },
  {
    name: "ふるさとチョイス",
    type: "掲載自治体・返礼品数No.1",
    price: "実質負担2,000円（控除上限内）",
    plan: "会員登録のみで利用可能",
    features: "全自治体掲載・災害支援寄附・お礼品検索が豊富",
    featureDetail: "全国1,788自治体すべてに対応する業界最大級のサイト。災害支援寄附やガバメントクラウドファンディングなど社会貢献メニューも充実",
    payment: "クレカ・PayPay・Amazon Pay・コンビニ・銀行振込対応",
    items: "約65万点以上",
    pros: [
      "全国1,788自治体すべてに対応（業界最多）",
      "返礼品数が業界最大クラスで選択肢が豊富",
      "災害支援寄附で被災地に直接貢献できる",
      "ガバメントクラウドファンディングが利用可能",
      "決済方法が豊富（クレカ・銀行振込・コンビニ等）",
      "ワンストップ特例のオンライン申請に対応",
    ],
    cons: [
      "ポイント還元プログラムがない",
      "ポイント目的の方には旨味が少ない",
      "サイトの情報量が多く迷うことがある",
    ],
    bestFor:
      "とにかく豊富な選択肢から返礼品を選びたい方、ポイントよりも社会貢献や応援したい自治体への寄附を重視する方におすすめです。",
    url: "https://www.furusato-tax.jp/",
    badge: "掲載数最大",
    color: "green",
  },
  {
    name: "au PAY ふるさと納税",
    type: "Pontaポイント還元・au経済圏",
    price: "実質負担2,000円（控除上限内）",
    plan: "au IDで会員登録",
    features: "Pontaポイント還元・au PAY決済・auユーザー特典",
    featureDetail: "寄附金額に応じてPontaポイントが貯まる。au PAY残高での支払いが可能で、auじぶん銀行と組み合わせれば現金還元のような効果も",
    payment: "au PAY・au PAYカード・他社クレカ対応",
    items: "約30万点以上",
    pros: [
      "Pontaポイントが寄附金額に応じて貯まる",
      "au PAY決済で実質還元率アップ",
      "auユーザー向けの特別キャンペーンが豊富",
      "Pontaポイントで寄附することも可能",
      "三太郎の日などのキャンペーン併用可",
      "シンプルで分かりやすいUI",
    ],
    cons: [
      "掲載自治体・返礼品数は他社より少ない",
      "auユーザー以外にはメリットが少ない",
      "ポイント還元率は楽天に及ばない",
    ],
    bestFor:
      "auユーザー、Pontaポイントを貯めている方、au PAYを日常的に使う方に最適。au経済圏ユーザーならポイント還元のメリットを享受できます。",
    url: "https://furusato.wowma.jp/",
    badge: "Ponta貯まる",
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
    question: "ふるさと納税の控除上限額はどう調べますか？",
    answer: "各ふるさと納税サイトに「控除上限額シミュレーター」が用意されています。年収・家族構成・他の控除の有無を入力するだけで、自分の上限額が分かります。正確な金額は源泉徴収票や確定申告書を元に計算してください。上限を超えた寄附は自己負担となるため注意が必要です。",
  },
  {
    question: "ワンストップ特例制度とは何ですか？",
    answer: "確定申告不要で寄附金控除を受けられる制度です。年間の寄附先が5自治体以内で、給与所得者など確定申告が不要な方が対象。各自治体に申請書を送付するだけで、住民税から控除されます。さとふる・ふるなび・楽天ふるさと納税などはオンラインでワンストップ申請が完結できます。",
  },
  {
    question: "実質還元率が一番高いのはどのサイトですか？",
    answer: "楽天ふるさと納税が最も還元率が高くなりやすいです。SPU・お買い物マラソン・5と0のつく日・楽天カード決済などを組み合わせると、実質還元率20〜30%以上も狙えます。ふるなびもふるなびコイン+Amazonギフト交換で高還元を実現できます。",
  },
  {
    question: "家電を返礼品でもらえるサイトはどこですか？",
    answer: "ふるなびが家電返礼品の品揃え業界トップクラスです。テレビ・パソコン・カメラ・調理家電など幅広く扱っています。ただし家電は還元率が30%以下に制限されているため、寄附金額に対する家電の価値は比較的低めです。",
  },
  {
    question: "確定申告が必要なケースはどんな時ですか？",
    answer: "（1）年間の寄附先が6自治体以上、（2）医療費控除など他の確定申告が必要な控除がある、（3）給与所得者でない（自営業など）、これらに該当する場合は確定申告が必要です。確定申告すると所得税の還付と住民税の控除の両方を受けられます。",
  },
  {
    question: "ふるさと納税はいつまでに行えばいいですか？",
    answer: "その年の12月31日までに寄附の決済が完了している必要があります。年末は駆け込み寄附でアクセスが集中するため、12月中旬までに済ませるのがおすすめです。ワンストップ特例申請は翌年1月10日必着なので、年末ギリギリの寄附は申請が間に合わない場合があります。",
  },
];

export default function FurusatoTaxComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ふるさと納税サイト比較おすすめ5選", url: `${siteConfig.url}/guide/furusato-tax-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ふるさと納税サイト比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">節税</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ふるさと納税サイト比較おすすめ5選｜還元率・返礼品・ポイントを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「ふるさと納税はどのサイトで申し込めばお得なの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのふるさと納税サイト5選（楽天ふるさと納税・さとふる・ふるなび・ふるさとチョイス・au PAY ふるさと納税）を還元率・返礼品数・ポイント還元・使いやすさで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">楽天ユーザーなら → 楽天ふるさと納税</span>（SPU併用で実質還元率最強）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">初心者・最速配送 → さとふる</span>（PayPay還元・配送最速）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">家電がほしい → ふるなび</span>（家電品揃え業界トップ）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">選択肢の豊富さ → ふるさとチョイス</span>（全自治体掲載）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-furusato" className="text-primary hover:underline">1. ふるさと納税のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. ふるさと納税サイト5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サイトの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめサイト</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. ふるさと納税サイトの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-furusato" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ふるさと納税のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ふるさと納税は、実質負担2,000円で全国の特産品を受け取れるお得な制度です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "実質2,000円で豪華返礼品", desc: "控除上限額の範囲内なら、寄附額から2,000円を引いた金額が翌年の所得税・住民税から控除されます。実質負担2,000円で、寄附額の3割相当の返礼品がもらえます。" },
            { icon: "&#127881;", title: "全国の名産品が選べる", desc: "肉・魚介・米・果物・お酒など、各地の名産品から自由に選べます。家電や旅行券、体験型返礼品もあり、選ぶ楽しみがあります。" },
            { icon: "&#127968;", title: "地方自治体を応援できる", desc: "好きな自治体や応援したい地域に直接寄附できます。災害支援寄附やガバメントクラウドファンディングで社会貢献も可能です。" },
            { icon: "&#128181;", title: "サイト経由でポイントも貯まる", desc: "楽天ふるさと納税なら楽天ポイント、さとふるならPayPayポイント、ふるなびならふるなびコインと、サイト経由でさらにポイントも還元されます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. ふるさと納税サイト5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">楽天</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">さとふる</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ふるなび</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">チョイス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">au PAY</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "返礼品数", r: "60万+", s: "50万+", n: "45万+", c: "65万+", a: "30万+" },
                { label: "ポイント", r: "楽天P最強", s: "PayPay", n: "ふるなびコイン", c: "なし", a: "Ponta" },
                { label: "決済", r: "楽天Pay/カード", s: "PayPay/カード", n: "Amazon Pay/カード", c: "豊富", a: "au PAY" },
                { label: "配送", r: "標準", s: "最速", n: "標準", c: "標準", a: "標準" },
                { label: "ワンストップ", r: "オンライン対応", s: "オンライン対応", n: "オンライン対応", c: "オンライン対応", a: "対応" },
                { label: "おすすめ", r: "楽天ユーザー", s: "初心者", n: "家電狙い", c: "選択肢重視", a: "auユーザー" },
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
        <p className="text-xs text-muted mt-2">※ 数値は2026年4月時点の情報です。各サイトの公式情報を必ずご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サイトの詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">負担</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">返礼品数</span><span className="font-bold">{s.items}</span></div>
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
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめサイト</h2>
        <div className="space-y-4">
          {[
            { scene: "とにかく実質還元率を最大化したい", app: "楽天ふるさと納税", reason: "SPU・お買い物マラソン・5と0のつく日・楽天カード決済を組み合わせれば、実質還元率20〜30%以上も狙えます。楽天経済圏ユーザーなら一択です。" },
            { scene: "ふるさと納税が初めてで不安", app: "さとふる", reason: "認知度No.1で安心感があり、操作画面もシンプル。配送も業界最速クラスで、初めての方でも迷わず使えます。" },
            { scene: "家電製品を返礼品でもらいたい", app: "ふるなび", reason: "家電返礼品の品揃えが業界トップクラス。さらにふるなびコインがAmazonギフトカード等に交換できるため実質還元率も高めです。" },
            { scene: "ポイントよりも応援したい自治体に寄附したい", app: "ふるさとチョイス", reason: "全国1,788自治体すべてに対応。災害支援寄附やガバメントクラウドファンディングなど、社会貢献メニューが豊富です。" },
            { scene: "auユーザーでPontaポイントを貯めたい", app: "au PAY ふるさと納税", reason: "Pontaポイントが貯まり、au PAY決済で実質還元率もアップ。auユーザー向け特別キャンペーンも豊富です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. ふるさと納税サイトの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "ポイント還元を重視するか", desc: "楽天ポイントを貯めているなら楽天ふるさと納税、PayPayならさとふる、Pontaならau PAYと、普段使うポイントで選ぶと実質還元率が上がります。" },
            { num: "2", title: "返礼品の品揃えを確認する", desc: "ふるさとチョイスは全自治体掲載で品揃えが業界最大。家電狙いならふるなびと、目的の返礼品が掲載されているか事前にチェックしましょう。" },
            { num: "3", title: "決済方法と使いやすさ", desc: "楽天はクレカ・楽天ペイ、さとふるはPayPay対応など、自分が普段使う決済方法に対応しているか確認しましょう。" },
            { num: "4", title: "ワンストップ特例の対応", desc: "5自治体以内なら確定申告不要のワンストップ特例が便利。さとふる・ふるなび・楽天ふるさと納税はオンライン申請に対応しています。" },
            { num: "5", title: "配送スピード", desc: "年末駆け込み寄附で年内に返礼品を受け取りたい場合は、配送が早いさとふるが安心です。" },
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
            ふるさと納税は実質負担2,000円で全国の特産品が受け取れるお得な制度です。サイト選びで実質還元率が大きく変わるため、自分のライフスタイルに合ったサイトを選びましょう。楽天経済圏なら「楽天ふるさと納税」、初心者なら「さとふる」、家電狙いなら「ふるなび」がおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・実質還元率最強なら「楽天ふるさと納税」（SPU併用）</li>
              <li>・初心者には「さとふる」（最速配送・PayPay還元）</li>
              <li>・家電狙いなら「ふるなび」（業界最多家電）</li>
              <li>・選択肢重視なら「ふるさとチョイス」（全自治体）</li>
              <li>・控除上限額を必ずシミュレーターで確認</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">ふるさと納税にも使えるおすすめカードを比較</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">ふるさと納税の確定申告にも便利なソフト</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
