import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】がん保険比較おすすめ5選｜保障内容・保険料・選び方を徹底解説",
    description:
      "2026年最新のがん保険を徹底比較。アフラック・チューリッヒ・オリックス・ライフネット・メットライフの保障内容と保険料を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/cancer-insurance-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "アフラック",
    type: "がん保険大手・実績豊富",
    price: "月額1,500円〜",
    plan: "生きるためのがん保険Days1",
    features: "診断給付金・通院保障・大手安心",
    featureDetail: "日本でがん保険を広めた先駆者。診断給付金から通院保障まで充実しており、上皮内新生物も保障対象となるプランが多く、がん治療のトータルサポートが期待できます",
    payment: "クレジットカード・口座振替対応",
    items: "全年齢対応",
    pros: [
      "がん保険のパイオニア",
      "診断給付金が手厚い",
      "上皮内新生物も保障",
      "通院保障も充実",
      "大手の安心感",
      "支払い実績豊富",
    ],
    cons: [
      "保険料はやや高め",
      "プランがやや複雑",
      "カスタマイズが難しい場合",
    ],
    bestFor: "大手の安心感と充実した保障を重視する方におすすめ。診断給付金や通院治療まで幅広く備えたい方に最適です。",
    url: "https://www.aflac.co.jp/",
    badge: "大手安心",
    color: "red",
  },
  {
    name: "チューリッヒ生命",
    type: "ネット専業・シンプル設計",
    price: "月額1,000円〜",
    plan: "終身ガン治療保険プレミアムZ",
    features: "治療重視・ネット申込・低価格",
    featureDetail: "抗がん剤治療・放射線治療・手術治療など、治療を受けた月ごとに給付金が支払われる治療重視の設計。ネット専業で保険料も抑えめです",
    payment: "クレジットカード・口座振替対応",
    items: "全年齢対応",
    pros: [
      "ネットで簡単申込み",
      "保険料が割安",
      "治療重視の保障",
      "月額給付でシンプル",
      "先進医療特約あり",
      "加入手続きが早い",
    ],
    cons: [
      "対面相談は不可",
      "診断給付金は別契約",
      "自分で内容確認必要",
    ],
    bestFor: "保険料を抑えつつ治療に備えたい方、ネットで手軽に契約したい方におすすめです。",
    url: "https://www.zurichlife.co.jp/",
    badge: "治療重視",
    color: "blue",
  },
  {
    name: "オリックス生命",
    type: "シンプル設計・コスパ重視",
    price: "月額1,200円〜",
    plan: "がん保険Believe",
    features: "シンプル・保険料割安・長期保障",
    featureDetail: "シンプルで分かりやすい保障内容と割安な保険料が特徴。診断給付金と入院・手術給付金が基本で、必要に応じて特約を追加できる柔軟設計です",
    payment: "クレジットカード・口座振替対応",
    items: "全年齢対応",
    pros: [
      "シンプルで分かりやすい",
      "保険料が割安",
      "特約でカスタマイズ可能",
      "終身保障対応",
      "通院保障も追加可",
      "長期契約でお得",
    ],
    cons: [
      "基本保障のみだと不安",
      "特約の追加で割高に",
      "対面相談は予約制",
    ],
    bestFor: "シンプルで分かりやすいがん保険を低コストで持ちたい方におすすめ。自分に合わせて特約を選びたい方に最適です。",
    url: "https://www.orixlife.co.jp/",
    badge: "コスパ",
    color: "orange",
  },
  {
    name: "ライフネット生命",
    type: "ネット専業・明朗価格",
    price: "月額900円〜",
    plan: "がん保険ダブルエール",
    features: "ネット完結・保険料割安・透明性",
    featureDetail: "ネット専業生保として保険料の透明性と低価格が強み。診断給付金や治療給付金など必要な保障を自由に組み合わせられるシンプル設計です",
    payment: "クレジットカード・口座振替対応",
    items: "全年齢対応",
    pros: [
      "保険料の透明性が高い",
      "ネットで完結",
      "保険料が割安",
      "シンプルで分かりやすい",
      "相談はオンラインOK",
      "審査が比較的早い",
    ],
    cons: [
      "対面相談は不可",
      "プラン選択は自分で",
      "高齢時の保険料上昇",
    ],
    bestFor: "保険料の安さと透明性を重視する若年層〜ミドル層におすすめ。ネット完結で契約したい方に最適です。",
    url: "https://www.lifenet-seimei.co.jp/",
    badge: "割安",
    color: "green",
  },
  {
    name: "メットライフ生命",
    type: "外資系・自由設計",
    price: "月額1,300円〜",
    plan: "ガードエックス",
    features: "自由設計・外資系・先進医療",
    featureDetail: "外資系ならではの自由設計が特徴で、診断給付金・通院・先進医療など必要な保障を組み合わせ可能。長期入院や再発にも対応する手厚い保障が用意されています",
    payment: "クレジットカード・口座振替対応",
    items: "全年齢対応",
    pros: [
      "自由設計で柔軟",
      "先進医療特約が充実",
      "再発保障に強い",
      "外資系の安定性",
      "多様な特約選択",
      "女性特約もあり",
    ],
    cons: [
      "プランが複雑",
      "保険料は中〜やや高め",
      "選択肢が多くて迷う",
    ],
    bestFor: "自分の状況に合わせて保障を細かく設計したい方におすすめ。再発や長期治療まで備えたい方に最適です。",
    url: "https://www.metlife.co.jp/",
    badge: "自由設計",
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
    question: "がん保険は本当に必要ですか？",
    answer: "公的医療保険でカバーされない先進医療や長期治療費、働けない期間の収入減をカバーできるため、備えがあると安心です。家族構成や貯蓄状況に応じて検討しましょう。",
  },
  {
    question: "上皮内新生物は保障対象ですか？",
    answer: "プランによって異なります。最近の商品は上皮内新生物も診断給付金の対象になっているものが増えていますが、保障額が減額されるケースもあるので契約前に確認しましょう。",
  },
  {
    question: "診断給付金と治療給付金どちらを選ぶべき？",
    answer: "診断給付金は一時金でまとまった資金を受け取れ、治療給付金は長期治療に備えやすいのが特徴です。両方を組み合わせるのが理想的です。",
  },
  {
    question: "若いうちから加入すべきですか？",
    answer: "若いほど保険料が安く加入しやすいため、早めの加入がおすすめです。ただし、健康状態によっては加入できない場合もあるため、健康なうちに検討しましょう。",
  },
  {
    question: "すでに持病がある場合は加入できますか？",
    answer: "告知内容によっては加入できない、または条件付きになる場合があります。引受基準緩和型のがん保険もあるため、複数社で相談してみましょう。",
  },
  {
    question: "終身型と定期型どちらがいいですか？",
    answer: "終身型は一生涯保障が続き、保険料が一定です。定期型は保険料は安いですが、更新時に保険料が上昇します。長期保障を考えるなら終身型が一般的におすすめです。",
  },
];

export default function CancerInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "がん保険比較おすすめ5選", url: `${siteConfig.url}/guide/cancer-insurance-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>がん保険比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">保険</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】がん保険比較おすすめ5選｜保障内容・保険料・選び方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「がん保険って必要？」「どの商品を選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめのがん保険5選（アフラック・チューリッヒ・オリックス・ライフネット・メットライフ）を保障内容と保険料で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">大手の安心感 → アフラック</span>（診断給付金充実）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">治療重視 → チューリッヒ生命</span>（月額給付）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">コスパ重視 → オリックス生命</span>（シンプル設計）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">保険料の安さ → ライフネット生命</span>（ネット完結）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">自由設計 → メットライフ生命</span>（先進医療充実）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why" className="text-primary hover:underline">1. がん保険の必要性</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. がん保険5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各保険の詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. がん保険の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. がん保険の必要性</h2>
        <p className="text-muted leading-relaxed mb-4">日本人の2人に1人ががんになる時代と言われています。がん治療は長期化・高額化の傾向があり、公的医療保険だけでは不十分なケースもあります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128181;", title: "高額な治療費に備える", desc: "先進医療や自由診療など保険適用外の治療費に備えることで、治療の選択肢が広がります。" },
            { icon: "&#127973;", title: "通院治療の長期化", desc: "近年は通院治療が中心となっており、入院だけでは対応できない費用負担に備える必要があります。" },
            { icon: "&#128176;", title: "収入減少をカバー", desc: "治療期間中の収入減や働けない期間の生活費をサポートできます。" },
            { icon: "&#128141;", title: "家族への経済的負担軽減", desc: "万が一の際も家族に経済的な負担を残さずに済みます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. がん保険5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">アフラック</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">チューリッヒ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">オリックス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">ライフネット</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">メット</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "保険料", r: "1500円〜", s: "1000円〜", n: "1200円〜", c: "900円〜", a: "1300円〜" },
                { label: "診断給付金", r: "◎", s: "特約", n: "○", c: "○", a: "○" },
                { label: "治療給付金", r: "○", s: "◎", n: "特約", c: "特約", a: "◎" },
                { label: "先進医療", r: "あり", s: "あり", n: "特約", c: "特約", a: "◎" },
                { label: "申込方法", r: "対面/ネット", s: "ネット", n: "対面/ネット", c: "ネット", a: "対面/ネット" },
                { label: "特徴", r: "大手実績", s: "治療重視", n: "コスパ", c: "透明性", a: "自由設計" },
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
        <h2 className="text-2xl font-bold mb-6">3. 各保険の詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">保険料</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">対象</span><span className="font-bold">{s.items}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">商品詳細</h4>
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
            { scene: "大手の安心感を重視する方", app: "アフラック", reason: "がん保険のパイオニアで診断給付金から通院保障まで手厚く、支払い実績も豊富です。" },
            { scene: "治療ごとの給付金を受け取りたい方", app: "チューリッヒ生命", reason: "抗がん剤・放射線・手術治療を受けた月ごとに給付金が支払われる設計です。" },
            { scene: "シンプルで割安な保険が欲しい方", app: "オリックス生命", reason: "必要な保障に絞ったシンプル設計で保険料を抑えられます。" },
            { scene: "保険料の安さを最優先する方", app: "ライフネット生命", reason: "ネット専業で明朗な保険料設定、若い方ほどお得です。" },
            { scene: "保障内容を自由に設計したい方", app: "メットライフ生命", reason: "特約を自由に組み合わせて必要な保障を構築できます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. がん保険の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "診断給付金の金額と条件", desc: "診断確定時にまとまった一時金を受け取れるかが重要。金額と支払回数を確認しましょう。" },
            { num: "2", title: "通院・治療保障の有無", desc: "現代のがん治療は通院中心。通院・治療給付金がカバーされているかチェックしましょう。" },
            { num: "3", title: "先進医療特約の保障額", desc: "先進医療の技術料は高額なケースもあるため、特約で備えておくと安心です。" },
            { num: "4", title: "上皮内新生物の扱い", desc: "上皮内新生物も主契約と同額保障か、減額支払いかを確認しましょう。" },
            { num: "5", title: "保険料と保障のバランス", desc: "保障内容と保険料のバランスを比較し、無理なく長く続けられる商品を選びましょう。" },
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
            がん保険は保障内容と保険料のバランスで選ぶのが基本です。大手の安心感ならアフラック、治療重視ならチューリッヒ、コスパならオリックス、保険料の安さならライフネット、自由設計ならメットライフがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・大手安心なら「アフラック」</li>
              <li>・治療重視なら「チューリッヒ」</li>
              <li>・コスパなら「オリックス」</li>
              <li>・保険料最安クラスは「ライフネット」</li>
              <li>・自由設計なら「メットライフ」</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/insurance-need-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">必要保障額計算ツールを使う</div>
          <p className="text-xs text-muted">家族構成・収入・住宅ローンから生命保険の必要保障額を自動計算。がん保険の上乗せ検討にも →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">生命保険・医療保険全般</p>
          </Link>
          <Link href="/guide/pet-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ペット保険比較</span>
            <p className="text-xs text-muted mt-1">大切な家族の医療費にも備える</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
