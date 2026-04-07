import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】車買取サービス比較おすすめ5選｜高額査定・一括査定・特徴を徹底解説",
    description:
      "2026年最新の車買取サービスを徹底比較。カーセンサー・ガリバー・ビッグモーター・アップル・カーネクストの査定額と特徴を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/car-purchase-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "カーセンサー.net 一括査定",
    type: "一括査定・最大30社",
    price: "査定無料",
    plan: "入力1分／最大30社から連絡",
    features: "リクルート運営・大手中小まで幅広く対応・ネット完結可",
    featureDetail: "リクルートが運営する中古車情報サイト最大手。最大30社の買取業者から一括で査定額が届き、高額査定が狙いやすい。メール連絡希望も選択可能",
    payment: "査定・申込みは無料",
    items: "提携業者最大30社",
    pros: [
      "最大30社から一括で査定額が届く",
      "リクルート運営で信頼感がある",
      "大手から地方業者まで幅広く対応",
      "メール連絡限定にもできる",
      "中古車相場もサイトで確認可能",
      "入力がシンプルで時間がかからない",
    ],
    cons: [
      "電話連絡が多くなる場合がある",
      "提携外の地方業者は含まれない",
      "査定結果の最終確認は実車が必要",
    ],
    bestFor:
      "とにかく高く売りたい方、複数社の査定額を比較して最高値を引き出したい方に最適。リクルート運営の安心感も大きく、車買取初心者にもおすすめです。",
    url: "https://www.carsensor.net/kaitori/",
    badge: "一括査定",
    color: "red",
  },
  {
    name: "ガリバー",
    type: "大手買取専門店・実績No.1",
    price: "査定無料",
    plan: "全国500店舗以上で出張査定可",
    features: "買取実績No.1・オークション相場活用・100日間返品保証",
    featureDetail: "車買取業界最大手で買取実績No.1。全国500店舗以上のネットワークと独自のオークション相場データで高額査定を実現",
    payment: "査定・申込みは無料",
    items: "全国500店舗以上",
    pros: [
      "買取実績No.1の安心感",
      "全国500店舗以上で出張査定対応",
      "独自オークション相場で高額査定",
      "100日間返品保証あり（売却後）",
      "ローン残債がある車も対応",
      "名義変更・廃車手続きも代行",
    ],
    cons: [
      "営業トークがやや強引との声も",
      "他社比較をしないと安く買い叩かれることも",
      "エリアにより営業時間に差あり",
    ],
    bestFor:
      "大手の安心感を重視する方、忙しくて一括査定サイトの複数対応が難しい方におすすめ。実店舗が近くにあれば出張査定もスムーズに受けられます。",
    url: "https://221616.com/",
    badge: "実績No.1",
    color: "blue",
  },
  {
    name: "ビッグモーター",
    type: "買取・販売一体型",
    price: "査定無料",
    plan: "買取・販売一体で高額査定",
    features: "全国対応・買取から販売まで自社完結・高額査定",
    featureDetail: "買取から販売まで自社で完結するため中間マージンを削減し、高額査定が可能。全国に店舗展開で出張査定にも対応",
    payment: "査定・申込みは無料",
    items: "全国対応",
    pros: [
      "買取から販売まで自社完結で高額査定",
      "全国対応で出張査定可能",
      "過走行車・事故車も買取対応",
      "即日現金化も可能",
      "名義変更など手続き代行",
      "ローン残債相談もOK",
    ],
    cons: [
      "過去に問題報道があり信頼性の懸念",
      "査定額の提示の仕方に注意が必要",
      "他社比較で慎重に判断すべき",
    ],
    bestFor:
      "複数の買取業者と比較したうえで、査定額が高い場合に選ぶのがおすすめ。必ず他社と比較検討して判断しましょう。",
    url: "https://www.bigmotor.co.jp/",
    badge: "即日現金化",
    color: "orange",
  },
  {
    name: "アップル",
    type: "中古車買取専門店",
    price: "査定無料",
    plan: "フランチャイズ・全国対応",
    features: "中間マージンゼロ・直販型・高額査定に挑戦",
    featureDetail: "中間業者を通さず直販する独自システムで高額査定を実現。全国にフランチャイズ店舗を展開し、地域密着型の丁寧な対応が特徴",
    payment: "査定・申込みは無料",
    items: "全国200店舗以上",
    pros: [
      "中間マージンなしで高額査定",
      "フランチャイズで地域密着型の対応",
      "事故車・不動車もOK",
      "ローン残債のある車も対応",
      "全国200店舗以上で通いやすい",
      "名義変更等の手続き代行",
    ],
    cons: [
      "店舗により対応品質に差がある",
      "フランチャイズのため独立採算",
      "人気車種以外は査定が伸び悩むことも",
    ],
    bestFor:
      "人気車種を少しでも高く売りたい方、中間マージンを削減した直販型買取を希望する方におすすめ。地域密着の丁寧な対応を求める方にも最適です。",
    url: "https://www.apple-j.co.jp/",
    badge: "直販型",
    color: "purple",
  },
  {
    name: "カーネクスト",
    type: "廃車・事故車専門",
    price: "査定無料",
    plan: "廃車・事故車・不動車対応",
    features: "0円以上買取保証・レッカー無料・還付金対応",
    featureDetail: "廃車・事故車・不動車など他社で買取拒否される車に強い専門業者。0円以上買取保証、レッカー代無料、自動車税の還付金も対応",
    payment: "査定・申込みは無料",
    items: "全国対応",
    pros: [
      "0円以上買取保証で必ず買取成立",
      "廃車・事故車・不動車もOK",
      "レッカー代・引取り費用無料",
      "自動車税の還付金対応",
      "廃車手続き完全代行",
      "全国どこでも対応",
    ],
    cons: [
      "走行可能な人気車種は他社が有利",
      "買取額は相場より低めの場合あり",
      "現金化まで時間がかかる場合あり",
    ],
    bestFor:
      "動かなくなった車、事故車、年式が古すぎる車を処分したい方におすすめ。他社で「値段がつかない」と言われた車でも必ず買取してくれます。",
    url: "https://carnext.jp/",
    badge: "廃車対応",
    color: "green",
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
    question: "車を高く売るコツは何ですか？",
    answer: "複数の買取業者から相見積もりを取ることが最重要です。一社だけでは安く買い叩かれる可能性があるため、最低3〜5社から査定を取りましょう。カーセンサー.net一括査定のような一括査定サイトを使えば、一度の入力で複数社の査定額を比較できます。洗車・車内清掃も査定額アップに効果的です。",
  },
  {
    question: "一括査定サイトのデメリットは何ですか？",
    answer: "一番のデメリットは複数社から電話連絡が一度にかかってくる点です。対応が煩わしいと感じる方も多いでしょう。メール連絡限定を選択できるサイトを選ぶか、電話対応可能な時間帯にまとめて対応するのが賢明です。また、提携外の地方業者は含まれない点にも注意が必要です。",
  },
  {
    question: "ローン残債がある車でも売れますか？",
    answer: "ローン残債がある車も売却可能です。買取額がローン残債を上回る場合は差額が手元に残り、下回る場合は差額を現金で支払うかローンを組み直す必要があります。大手のガリバー・アップル・カーセンサー提携店なら残債処理のサポートも充実しています。",
  },
  {
    question: "事故車・廃車でも売れますか？",
    answer: "事故車・不動車・廃車寸前の車もカーネクストのような専門業者なら0円以上で買取してもらえます。他社で「値段がつかない」と言われた車でも鉄くずとしての価値があるため、廃車手続きの代行も無料で対応してもらえます。",
  },
  {
    question: "査定額は実車を見ないと分からないですか？",
    answer: "はい、最終的な査定額は実車を見て決まります。ネット査定や電話査定はあくまで概算です。ただし車種・年式・走行距離・グレードで概算相場は分かるため、一括査定で各社の目安額を比較してから実車査定に進むのが効率的です。",
  },
  {
    question: "ディーラー下取りと買取専門店どっちがお得？",
    answer: "一般的には買取専門店の方が高く売れることが多いです。ディーラー下取りは手続きが楽ですが、買取相場より10〜30万円安いことも珍しくありません。新車購入時でも下取りではなく一度買取専門店で査定してもらい、差額を確認してから決めるのがおすすめです。",
  },
];

export default function CarPurchaseComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "車買取サービス比較おすすめ5選", url: `${siteConfig.url}/guide/car-purchase-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>車買取サービス比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">車</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】車買取サービス比較おすすめ5選｜高額査定・一括査定・特徴を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「車を少しでも高く売りたい」そんな方に向けて、2026年現在おすすめの車買取サービス5選（カーセンサー一括査定・ガリバー・ビッグモーター・アップル・カーネクスト）を査定額・特徴・対応エリアで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">最高値を狙う → カーセンサー一括査定</span>（最大30社）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">安心感重視 → ガリバー</span>（実績No.1）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">即日現金化 → ビッグモーター</span>（販売一体型）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">直販型高額査定 → アップル</span>（中間マージンゼロ）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">廃車・事故車 → カーネクスト</span>（0円以上保証）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-car" className="text-primary hover:underline">1. 車買取サービスのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 車買取5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 車買取サービスの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-car" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 車買取サービスのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ディーラー下取りより買取専門店の方が10〜30万円高く売れることも珍しくありません。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "下取りより高額になることが多い", desc: "買取専門店はオークション相場を活用するため、ディーラー下取りより10〜30万円高くなるケースも珍しくありません。" },
            { icon: "&#128200;", title: "一括査定で最高値を引き出せる", desc: "複数社の査定を比較することで最高値を引き出せます。業者間の競争原理が働くのが最大の強みです。" },
            { icon: "&#128736;", title: "名義変更・書類手続きを代行", desc: "買取店が名義変更や廃車手続きを全て代行してくれるため、売主は書類を渡すだけでOKです。" },
            { icon: "&#127969;", title: "出張査定で手間いらず", desc: "自宅まで査定員が来てくれる出張査定なら、わざわざ店舗に行く手間がかかりません。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 車買取サービス5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">カーセンサー</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">ガリバー</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">BM</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">アップル</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">カーネクスト</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "種別", r: "一括査定", s: "買取店", n: "買取販売", c: "買取店", a: "廃車専門" },
                { label: "提携/店舗", r: "最大30社", s: "500+店舗", n: "全国", c: "200+店舗", a: "全国対応" },
                { label: "査定", r: "無料", s: "無料", n: "無料", c: "無料", a: "無料" },
                { label: "事故車", r: "業者次第", s: "対応", n: "対応", c: "対応", a: "得意" },
                { label: "出張査定", r: "業者次第", s: "対応", n: "対応", c: "対応", a: "無料" },
                { label: "おすすめ", r: "最高値狙い", s: "安心感", n: "即現金化", c: "直販高額", a: "廃車・事故車" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">対応</span><span className="font-bold">{s.items}</span></div>
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
            { scene: "とにかく1円でも高く売りたい", app: "カーセンサー.net 一括査定", reason: "最大30社から一括で査定額が届くため、業者間の競争原理で最高値を引き出せます。" },
            { scene: "大手の安心感を重視したい", app: "ガリバー", reason: "業界実績No.1で全国500店舗以上。100日間返品保証など安心のサポート体制が魅力です。" },
            { scene: "すぐに現金化したい", app: "ビッグモーター", reason: "買取から販売まで自社完結型で即日現金化にも対応。急ぎの場合に便利です。" },
            { scene: "人気車種を直販型で高額売却したい", app: "アップル", reason: "中間マージンゼロの直販型で、人気車種は特に高額査定が期待できます。" },
            { scene: "動かない・事故車を処分したい", app: "カーネクスト", reason: "0円以上買取保証で廃車・事故車・不動車でも必ず買取成立。レッカー代も無料です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 車買取サービスの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "必ず複数社で相見積もり", desc: "1社だけでは安く買い叩かれるリスクあり。最低3〜5社の査定を取り比較しましょう。一括査定サイトが効率的です。" },
            { num: "2", title: "車の状態で業者を選ぶ", desc: "人気車種・低走行なら大手買取店、廃車・事故車ならカーネクストなど専門業者を選ぶと有利です。" },
            { num: "3", title: "査定前に洗車・清掃", desc: "洗車・車内清掃で見栄えを良くするだけで数万円査定額が変わることも。小さな手間で大きな効果。" },
            { num: "4", title: "装備品・オプションをアピール", desc: "ナビ・ETC・ドラレコ・純正パーツなど、査定員に漏れなく伝えることで評価がアップします。" },
            { num: "5", title: "ディーラー下取りと比較", desc: "新車購入時も下取りではなく買取専門店と比較すること。数十万円差がつくことも珍しくありません。" },
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
            車を少しでも高く売るには複数社の相見積もりが鉄則です。最高値を狙うならカーセンサー一括査定、安心感ならガリバー、即日現金化ならビッグモーター、直販型高額査定ならアップル、廃車・事故車ならカーネクストがおすすめ。査定前の洗車・清掃も査定額アップに効果的です。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・最高値を狙うなら「カーセンサー一括査定」</li>
              <li>・大手安心感なら「ガリバー」</li>
              <li>・廃車・事故車なら「カーネクスト」</li>
              <li>・必ず3〜5社から相見積もりを取る</li>
              <li>・ディーラー下取りより買取専門店が高額な場合多数</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">乗り換え時の保険も合わせて見直し</p>
          </Link>
          <Link href="/guide/moving-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">引越し業者比較</span>
            <p className="text-xs text-muted mt-1">引越しに合わせて車の整理を</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
