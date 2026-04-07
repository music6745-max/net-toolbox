import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ペット保険比較おすすめ5選｜補償内容・保険料・選び方を徹底解説",
    description:
      "2026年最新のペット保険を徹底比較。アニコム・アイペット・PS保険・楽天ペット保険・FPC保険の補償内容・保険料・選び方を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/pet-insurance-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "アニコム損保",
    type: "業界最大手・窓口精算対応",
    price: "月額1,400円〜",
    plan: "どうぶつ健保ふぁみりぃ等",
    features: "窓口精算対応・動物病院ネットワーク・業界No.1",
    featureDetail: "ペット保険シェアNo.1の業界最大手。全国6,000以上の動物病院で窓口精算対応、健康保険証のようにカードを提示するだけで保険金が差し引かれる便利さが魅力",
    payment: "クレジットカード・口座振替対応",
    items: "犬・猫・鳥・小動物対応",
    pros: [
      "業界シェアNo.1の信頼性",
      "全国6,000病院で窓口精算",
      "保険金請求の手間が少ない",
      "鳥・小動物まで幅広く対応",
      "健康相談サービス無料",
      "ペット予防コンテンツ充実",
    ],
    cons: [
      "保険料は平均より高め",
      "高齢ペットは継続が難しい場合",
      "窓口精算非対応病院もある",
    ],
    bestFor: "保険金請求の手間を減らしたい方、動物病院の窓口精算を重視する方におすすめ。業界最大手の安心感と豊富な対応病院が魅力です。",
    url: "https://www.anicom-sompo.co.jp/",
    badge: "シェアNo.1",
    color: "orange",
  },
  {
    name: "アイペット損保",
    type: "70%プラン・窓口精算対応",
    price: "月額1,240円〜",
    plan: "うちの子・うちの子ライト",
    features: "窓口精算対応・70%補償・動物病院ネットワーク",
    featureDetail: "アニコムと並ぶ大手ペット保険会社。「うちの子」プランは70%補償で人気、全国5,000以上の病院で窓口精算対応。犬種別の保険料設定で純血種・ミックス犬どちらも加入可",
    payment: "クレジットカード・口座振替対応",
    items: "犬・猫対応",
    pros: [
      "70%補償プランあり",
      "全国5,000病院で窓口精算",
      "大手の安心感",
      "犬種別の保険料設定",
      "ライトプランで保険料節約可",
      "手術特化プランも選択可",
    ],
    cons: [
      "鳥・小動物は非対応",
      "高齢ペットの新規加入に制限",
      "保険料は平均的",
    ],
    bestFor: "犬・猫の飼い主で窓口精算を重視する方、70%補償を希望する方におすすめ。大手の安心感とコストパフォーマンスのバランスが取れた保険です。",
    url: "https://www.ipet-ins.com/",
    badge: "70%補償",
    color: "blue",
  },
  {
    name: "PS保険",
    type: "保険料安い・終身継続",
    price: "月額930円〜",
    plan: "50%・70%・100%プラン",
    features: "保険料業界最安級・終身継続・3つの補償プラン",
    featureDetail: "ペットメディカルサポートが提供するコスパ重視の保険。業界最安水準の保険料と、選べる3つの補償プラン(50%・70%・100%)が特徴。一度加入すれば終身継続可能",
    payment: "クレジットカード・口座振替対応",
    items: "犬・猫対応",
    pros: [
      "保険料が業界最安水準",
      "終身継続可能で安心",
      "3つの補償プランから選択",
      "手術費用を手厚く補償",
      "通院・入院・手術全対応",
      "無料電話相談サービスあり",
    ],
    cons: [
      "窓口精算は非対応",
      "保険金請求は後日精算",
      "鳥・小動物は非対応",
    ],
    bestFor: "保険料を安く抑えたい方、終身継続できる安心感を重視する方におすすめ。コストパフォーマンスで選ぶなら業界最高クラスです。",
    url: "https://www.pshoken.co.jp/",
    badge: "業界最安級",
    color: "green",
  },
  {
    name: "楽天ペット保険",
    type: "楽天ポイント還元型",
    price: "月額990円〜",
    plan: "スーパーペット保険",
    features: "楽天ポイント還元・SPU対象・シンプル料金",
    featureDetail: "楽天グループが提供するペット保険。保険料の支払いで楽天ポイントが貯まり、SPU対象で楽天市場の買い物もお得に。シンプルな補償内容と明瞭な料金体系が魅力",
    payment: "楽天カード決済でポイント還元",
    items: "犬・猫対応",
    pros: [
      "楽天ポイントが貯まる",
      "楽天SPUで市場買い物率UP",
      "楽天カード払いで更にお得",
      "シンプルで分かりやすい",
      "Webで簡単申込み",
      "通院・入院・手術補償",
    ],
    cons: [
      "楽天ユーザー以外はメリット少",
      "補償範囲は標準的",
      "窓口精算は非対応",
    ],
    bestFor: "楽天経済圏ユーザー、楽天カードをメインで使う方におすすめ。ポイント還元とSPUアップで実質的な保険料を抑えられます。",
    url: "https://www.rakuten-sonpo.co.jp/pet/",
    badge: "楽天ポイント",
    color: "red",
  },
  {
    name: "FPC保険",
    type: "シンプル補償・保険料安い",
    price: "月額900円〜",
    plan: "フリーペットほけん",
    features: "保険料安い・通院補償重視・シンプル",
    featureDetail: "フェリックスが提供するシンプルなペット保険。保険料は業界最安水準、通院補償に特化した設計で日常の軽いケガや病気に対応。余計な特約がなく保険料を抑えられる",
    payment: "クレジットカード・口座振替対応",
    items: "犬・猫対応",
    pros: [
      "保険料が業界最安水準",
      "通院補償に強い",
      "シンプルな補償内容",
      "継続時の保険料上昇が緩やか",
      "Webで簡単申込み",
      "免責金額なし",
    ],
    cons: [
      "手術補償額はやや少なめ",
      "窓口精算は非対応",
      "特約が少ない",
    ],
    bestFor: "保険料を最安にしたい方、通院補償を重視する飼い主におすすめ。シンプルな補償で不要な特約を削り保険料を抑えられます。",
    url: "https://www.fpc-pet.co.jp/",
    badge: "最安水準",
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
    question: "ペット保険は本当に必要ですか？",
    answer: "ペットの治療費は高額になりがちで、手術では10〜30万円かかることも。人間の健康保険と違い全額自己負担のため、保険で備えておくと安心です。特に若いうちから加入すれば保険料も安く済みます。",
  },
  {
    question: "何歳まで加入できますか？",
    answer: "多くのペット保険は新規加入を0〜10歳前後までに制限しています。高齢になるほど加入が難しくなり、保険料も高額になるため、できるだけ若いうちの加入がおすすめ。継続は終身可能な保険が多いです。",
  },
  {
    question: "窓口精算と後日精算の違いは？",
    answer: "窓口精算は動物病院で保険証を提示するだけで自己負担分のみ支払う方式、後日精算は全額支払った後に保険会社へ請求する方式です。窓口精算は手間が少ない一方、対応病院が限定されます。",
  },
  {
    question: "補償割合はどれを選ぶべき？",
    answer: "50%・70%・100%が一般的。保険料を抑えるなら50%、バランス重視なら70%、手厚い補償なら100%がおすすめ。治療費の高い大型犬や高齢ペットは70%以上が安心です。",
  },
  {
    question: "保険で補償されない治療はありますか？",
    answer: "去勢・避妊手術、予防接種、妊娠・出産関連、歯科治療(歯石除去など)、先天性疾患は多くの保険で補償対象外です。契約前に約款で補償対象外項目を必ず確認しましょう。",
  },
  {
    question: "複数のペットがいる場合は？",
    answer: "多頭割引を提供している保険会社がほとんど。アニコム・アイペットでは2頭目以降の保険料が割引されます。同じ保険会社でまとめると管理も楽になり、割引も適用されるのでおすすめです。",
  },
];

export default function PetInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ペット保険比較おすすめ5選", url: `${siteConfig.url}/guide/pet-insurance-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ペット保険比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">保険</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ペット保険比較おすすめ5選｜補償内容・保険料・選び方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「ペット保険はどれを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのペット保険5選（アニコム・アイペット・PS保険・楽天ペット保険・FPC保険）を補償内容・保険料・窓口精算対応で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-orange-700 dark:text-orange-300">窓口精算 → アニコム損保</span>（シェアNo.1）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">70%補償 → アイペット損保</span>（バランス良）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">保険料重視 → PS保険</span>（業界最安級）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">楽天経済圏 → 楽天ペット保険</span>（ポイント還元）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">シンプル重視 → FPC保険</span>（最安水準）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-pet" className="text-primary hover:underline">1. ペット保険のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. ペット保険5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. ペット保険の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-pet" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ペット保険のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ペットの治療費は全額自己負担のため、高額な手術や長期治療では数十万円の出費になることもあります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "高額な治療費をカバー", desc: "手術や入院で10〜30万円以上の治療費が発生することも。保険で50〜100%の費用をカバーできます。" },
            { icon: "&#128137;", title: "通院・入院・手術を補償", desc: "日常の通院から入院・手術まで幅広く補償。怪我や病気の心配が減り安心して治療を受けられます。" },
            { icon: "&#128046;", title: "様々な動物に対応", desc: "犬・猫が中心ですが、鳥・うさぎ・ハムスターなど小動物に対応する保険もあります。" },
            { icon: "&#128241;", title: "窓口精算で手続き簡単", desc: "対応病院なら保険証提示だけで自己負担分のみ支払い、請求手続きの手間が省けます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. ペット保険5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">アニコム</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">アイペット</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">PS保険</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">楽天</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">FPC</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "月額(最安)", r: "1,400円〜", s: "1,240円〜", n: "930円〜", c: "990円〜", a: "900円〜" },
                { label: "補償割合", r: "50/70%", s: "50/70%", n: "50/70/100%", c: "50%", a: "50/70%" },
                { label: "窓口精算", r: "対応", s: "対応", n: "非対応", c: "非対応", a: "非対応" },
                { label: "対応動物", r: "幅広い", s: "犬猫", n: "犬猫", c: "犬猫", a: "犬猫" },
                { label: "終身継続", r: "可", s: "可", n: "可", c: "可", a: "可" },
                { label: "おすすめ", r: "手間減", s: "バランス", n: "最安", c: "楽天派", a: "シンプル" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">月額</span><span className="font-bold">{s.price}</span></div>
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
            { scene: "保険金請求の手間を減らしたい", app: "アニコム損保", reason: "全国6,000以上の動物病院で窓口精算対応、カード提示だけで完了する便利さが最大のメリットです。" },
            { scene: "バランス良く70%補償が欲しい", app: "アイペット損保", reason: "70%補償プラン「うちの子」と大手の安心感、窓口精算対応でバランスの取れた選択肢です。" },
            { scene: "保険料を最安で抑えたい", app: "PS保険", reason: "業界最安水準の保険料と3つの補償プランから選べる柔軟性。コスパ重視なら間違いなし。" },
            { scene: "楽天経済圏で生活している", app: "楽天ペット保険", reason: "保険料支払いで楽天ポイントが貯まり、SPUアップで楽天市場の買い物もお得になります。" },
            { scene: "シンプルで通院メインの補償", app: "FPC保険", reason: "通院補償に強く、余計な特約がないシンプル設計。日常の軽い病気・ケガに備えたい方に最適。" },
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
        <h2 className="text-2xl font-bold mb-4">5. ペット保険の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "補償割合を決める", desc: "50%・70%・100%から選択。保険料と補償のバランスで決めましょう。大型犬や高齢ペットは70%以上が安心です。" },
            { num: "2", title: "窓口精算 vs 後日精算", desc: "手続きの手間を減らしたいなら窓口精算対応の保険、保険料を抑えたいなら後日精算がおすすめです。" },
            { num: "3", title: "補償対象の範囲を確認", desc: "通院・入院・手術のどこまでカバーするか、補償対象外項目(去勢・予防接種等)を契約前に必ず確認しましょう。" },
            { num: "4", title: "終身継続と年齢制限", desc: "新規加入の年齢制限と終身継続できるかをチェック。若いうちに加入して終身継続できる保険が理想です。" },
            { num: "5", title: "保険料の推移を確認", desc: "年齢とともに保険料は上がります。10歳時・15歳時の保険料シミュレーションで長期的な負担を把握しましょう。" },
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
            ペット保険は補償割合・窓口精算対応・保険料で選ぶのが基本です。手間を減らすならアニコム、バランス重視ならアイペット、保険料最安ならPS保険、楽天経済圏なら楽天ペット保険、シンプル重視ならFPC保険がおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・窓口精算重視は「アニコム損保」</li>
              <li>・バランスなら「アイペット損保」70%</li>
              <li>・最安級は「PS保険」</li>
              <li>・若いうちに加入するのが鉄則</li>
              <li>・補償対象外項目を必ず事前確認</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">保険比較</span>
            <p className="text-xs text-muted mt-1">生命保険・医療保険の比較</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">保険料支払いでポイント還元</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
