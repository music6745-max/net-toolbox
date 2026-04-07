import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】不動産投資会社比較おすすめ5選｜特徴・実績・サポートを徹底解説",
    description:
      "2026年最新の不動産投資会社を徹底比較。RENOSY・GAテクノロジーズ・シノケン・プロパティエージェント・JPリターンズの特徴・実績・サポートを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/real-estate-investment-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "RENOSY",
    type: "AI活用・中古マンション投資",
    price: "物件価格2,000万円〜",
    plan: "AI分析／管理代行サービス",
    features: "AI物件選定・都心中古マンション・管理代行",
    featureDetail: "AIを活用した物件選定で都心の中古マンション投資を提案。購入後の管理代行サービスも充実しており、初心者でも安心して始められる不動産投資会社として知られています",
    payment: "現金・ローン対応",
    items: "東京・大阪・名古屋エリア中心",
    pros: [
      "AIによる物件選定で高精度",
      "都心中古マンションに強い",
      "管理代行サービス付き",
      "初心者向けサポートが充実",
      "オンライン面談対応",
      "運営会社が東証上場",
    ],
    cons: [
      "物件エリアが都市部中心",
      "新築物件は扱いが少ない",
      "最低投資額はやや高め",
    ],
    bestFor: "都心の中古マンションで堅実に不動産投資を始めたい初心者〜中級者におすすめ。AI分析と管理代行を活用して効率的に運用したい方に最適です。",
    url: "https://www.renosy.com/",
    badge: "AI選定",
    color: "blue",
  },
  {
    name: "GAテクノロジーズ",
    type: "RENOSY運営・総合不動産",
    price: "物件価格2,000万円〜",
    plan: "中古マンション／新築区分",
    features: "東証上場・DX推進・総合力",
    featureDetail: "RENOSYを運営する東証上場企業。不動産テックを活用した物件提案から購入後の管理まで一気通貫でサポート。データに基づいた投資判断が可能です",
    payment: "現金・ローン対応",
    items: "全国主要都市",
    pros: [
      "東証上場の安心感",
      "不動産テックで効率的",
      "総合的なサポート体制",
      "オンライン完結可能",
      "データに基づく提案",
      "豊富な物件情報",
    ],
    cons: [
      "提案物件が限定される場合",
      "地方物件は少なめ",
      "営業の連絡頻度が高い",
    ],
    bestFor: "上場企業の安心感と不動産テックを重視したい方におすすめ。データドリブンな投資判断で効率的に運用したい方に最適です。",
    url: "https://www.ga-tech.co.jp/",
    badge: "東証上場",
    color: "green",
  },
  {
    name: "シノケンハーモニー",
    type: "新築アパート・マンション投資",
    price: "物件価格2,500万円〜",
    plan: "新築アパート／新築マンション",
    features: "新築特化・自己資金少なめOK",
    featureDetail: "新築アパート・マンション投資に特化した不動産投資会社。頭金が少なくても始められるプランが特徴で、土地なしからの一棟投資も可能です",
    payment: "現金・ローン対応",
    items: "首都圏・関西・福岡エリア",
    pros: [
      "新築物件に強い",
      "頭金少なめで始められる",
      "一棟投資にも対応",
      "長期にわたる管理サポート",
      "実績30年以上",
      "セミナーが充実",
    ],
    cons: [
      "物件価格は高め",
      "新築なのでリスクも",
      "エリアが限定される",
    ],
    bestFor: "新築物件で長期安定運用を目指したい方、自己資金が少なくても不動産投資を始めたい方におすすめ。",
    url: "https://www.shinoken.com/",
    badge: "新築特化",
    color: "orange",
  },
  {
    name: "プロパティエージェント",
    type: "都心新築マンション投資",
    price: "物件価格2,500万円〜",
    plan: "新築・中古マンション",
    features: "都心特化・東証プライム上場",
    featureDetail: "東京都心エリアに特化した新築・中古マンション投資を提案。東証プライム上場企業で、購入後の賃貸管理までワンストップで対応してくれます",
    payment: "現金・ローン対応",
    items: "東京23区中心",
    pros: [
      "都心エリアに特化",
      "東証プライム上場",
      "ワンストップ対応",
      "セミナーが豊富",
      "管理実績が高い",
      "長期保有向け提案",
    ],
    cons: [
      "都心のみで物件価格高め",
      "地方投資は不可",
      "初期費用が高い",
    ],
    bestFor: "東京都心の資産価値の高いマンションで長期運用したい方におすすめ。上場企業の安心感と都心特化のノウハウを求める方に最適です。",
    url: "https://www.propertyagent.co.jp/",
    badge: "都心特化",
    color: "purple",
  },
  {
    name: "JPリターンズ",
    type: "中古マンション・家賃保証",
    price: "物件価格2,000万円〜",
    plan: "中古マンション／家賃保証",
    features: "家賃保証・ワンルーム投資",
    featureDetail: "都心のワンルームマンション投資に強く、家賃保証サービスも用意されている不動産投資会社。空室リスクを抑えた運用が可能で、初心者にも人気です",
    payment: "現金・ローン対応",
    items: "東京23区中心",
    pros: [
      "家賃保証で空室リスク低減",
      "都心ワンルームに強い",
      "初心者向けセミナー",
      "管理代行サービス",
      "サブリース対応",
      "手厚いサポート",
    ],
    cons: [
      "家賃保証は割引がある",
      "物件価格はやや高め",
      "契約内容の確認が必要",
    ],
    bestFor: "空室リスクを抑えて安定収入を得たい初心者におすすめ。家賃保証を活用して手間なく運用したい方に最適です。",
    url: "https://jp-returns.com/",
    badge: "家賃保証",
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
    question: "不動産投資は少額から始められますか？",
    answer: "頭金ゼロや少額から始められるプランを用意する会社もありますが、ローン審査や諸費用を考えると最低でも数十万円〜100万円程度の自己資金があると安心です。",
  },
  {
    question: "サラリーマンでも不動産投資は可能ですか？",
    answer: "はい、可能です。安定した収入があるサラリーマンはローン審査に通りやすく、不動産投資に向いていると言われています。多くの会社でサラリーマン向けセミナーも開催されています。",
  },
  {
    question: "空室リスクはどう対処すればいいですか？",
    answer: "都心など需要の高いエリアの物件を選ぶ、家賃保証サービスを利用する、信頼できる管理会社に委託するなどの方法があります。リスクをゼロにすることはできません。",
  },
  {
    question: "新築と中古どちらがおすすめですか？",
    answer: "目的によって異なります。新築は長期安定運用・節税効果を狙う方に、中古は利回り重視・初期費用を抑えたい方におすすめです。",
  },
  {
    question: "ローンは誰でも組めますか？",
    answer: "年収・勤続年数・信用情報などで審査されます。年収500万円以上・勤続3年以上が目安ですが、会社や物件によって条件は異なります。",
  },
  {
    question: "確定申告は必要ですか？",
    answer: "不動産所得が発生する場合は確定申告が必要です。減価償却などを活用することで節税効果も期待できます。税理士への相談もおすすめです。",
  },
];

export default function RealEstateInvestmentComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "不動産投資会社比較おすすめ5選", url: `${siteConfig.url}/guide/real-estate-investment-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>不動産投資会社比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">投資</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】不動産投資会社比較おすすめ5選｜特徴・実績・サポートを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「不動産投資を始めたい」「どの会社を選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめの不動産投資会社5選（RENOSY・GAテクノロジーズ・シノケン・プロパティエージェント・JPリターンズ）を特徴・実績・サポートで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">AI活用で始める → RENOSY</span>（都心中古マンション）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">上場企業の安心感 → GAテクノロジーズ</span>（DX推進）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">新築で長期運用 → シノケン</span>（新築特化）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">都心特化 → プロパティエージェント</span>（23区中心）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">家賃保証重視 → JPリターンズ</span>（空室リスク低減）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why" className="text-primary hover:underline">1. 不動産投資のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 不動産投資会社5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各社の詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 不動産投資会社の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 不動産投資のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">不動産投資は家賃収入による安定収益と、資産形成を同時に狙える長期投資として人気があります。信頼できる会社選びが成功のカギです。</p>
        <div className="space-y-3">
          {[
            { icon: "&#127960;", title: "安定した家賃収入", desc: "入居者がいれば毎月安定した家賃収入が得られ、長期的なキャッシュフローを作れます。" },
            { icon: "&#128200;", title: "資産形成・年金対策", desc: "ローン完済後は資産として残り、老後の年金を補う収入源にもなります。" },
            { icon: "&#128181;", title: "節税効果", desc: "減価償却や経費計上により所得税・住民税の節税効果が期待できます。" },
            { icon: "&#128737;", title: "団信によるリスクヘッジ", desc: "団体信用生命保険に加入することで、万一の際も家族に資産を残せます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 不動産投資会社5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">RENOSY</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">GA</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">シノケン</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">プロパティ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">JP</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "物件タイプ", r: "中古マンション", s: "総合", n: "新築アパマン", c: "都心マンション", a: "中古マンション" },
                { label: "最低価格", r: "2000万〜", s: "2000万〜", n: "2500万〜", c: "2500万〜", a: "2000万〜" },
                { label: "エリア", r: "都心", s: "全国", n: "首都圏等", c: "東京23区", a: "東京23区" },
                { label: "管理代行", r: "あり", s: "あり", n: "あり", c: "あり", a: "あり" },
                { label: "上場", r: "上場親会社", s: "東証上場", n: "上場", c: "プライム", a: "非上場" },
                { label: "特徴", r: "AI選定", s: "DX推進", n: "新築特化", c: "都心特化", a: "家賃保証" },
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
        <h2 className="text-2xl font-bold mb-6">3. 各社の詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">価格</span><span className="font-bold">{s.price}</span></div>
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
            { scene: "初心者でAI提案を活用したい方", app: "RENOSY", reason: "AIによる物件選定と管理代行でリスクを抑えた運用が可能です。" },
            { scene: "上場企業の安心感を重視する方", app: "GAテクノロジーズ", reason: "東証上場でDX推進しており、データに基づいた提案が特徴です。" },
            { scene: "新築で長期運用したい方", app: "シノケンハーモニー", reason: "新築特化で頭金少なめでも始められるプランが充実。" },
            { scene: "都心マンションを狙う方", app: "プロパティエージェント", reason: "東京23区特化で資産価値の高い物件を提案してくれます。" },
            { scene: "空室リスクを最小化したい方", app: "JPリターンズ", reason: "家賃保証サービスで空室時も安定収入が確保できます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 不動産投資会社の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "会社の実績と信頼性", desc: "上場企業かどうか、運営年数や取扱物件数など信頼性を示す指標を確認しましょう。" },
            { num: "2", title: "取扱物件のエリアとタイプ", desc: "都心マンションか地方一棟か、新築か中古か自分の目的に合う物件を扱っているかチェック。" },
            { num: "3", title: "管理サポートの充実度", desc: "購入後の管理代行・入居者募集・家賃保証などサポート内容を比較しましょう。" },
            { num: "4", title: "提案内容の透明性", desc: "利回り・諸経費・リスクまで明確に説明してくれる会社を選ぶことが大切です。" },
            { num: "5", title: "セミナーや相談の活用", desc: "無料セミナーや個別相談で会社の雰囲気や担当者の質を確認してから決めましょう。" },
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
            不動産投資会社は実績・エリア・サポート内容で選ぶのが基本です。初心者ならRENOSY、上場企業の安心感ならGAテクノロジーズ、新築ならシノケン、都心特化ならプロパティエージェント、家賃保証ならJPリターンズがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・初心者は「RENOSY」のAI選定が安心</li>
              <li>・上場企業なら「GAテクノロジーズ」</li>
              <li>・新築なら「シノケンハーモニー」</li>
              <li>・都心特化なら「プロパティエージェント」</li>
              <li>・家賃保証なら「JPリターンズ」</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">株式・投資信託で資産形成</p>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">NISA対応の証券口座選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
