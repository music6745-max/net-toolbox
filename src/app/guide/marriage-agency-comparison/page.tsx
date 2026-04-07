import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】結婚相談所比較おすすめ5選｜料金・会員数・成婚率を徹底解説",
    description:
      "2026年最新の結婚相談所を徹底比較。IBJメンバーズ・パートナーエージェント・ツヴァイ・ゼクシィ縁結びエージェント・オーネットの料金・会員数・成婚率を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/marriage-agency-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "IBJメンバーズ",
    type: "ハイクラス・成婚率重視",
    price: "初期費用約18万円〜",
    plan: "エントリー／アシスト／プライム",
    features: "業界最大級会員数・手厚いサポート・成婚率50%超",
    featureDetail: "日本結婚相談所連盟(IBJ)の会員数約8万人超の業界最大級ネットワーク。専任カウンセラーによる手厚いサポートと、成婚率50%超の実績が魅力。ハイクラス向けの本気の出会い",
    payment: "クレジットカード・銀行振込対応",
    items: "全国店舗対応・オンライン併用可",
    pros: [
      "業界最大級の会員数約8万人",
      "成婚率50%以上の実績",
      "専任カウンセラーが手厚くサポート",
      "お見合いセッティング代行",
      "ハイクラスの会員が多い",
      "全国店舗で対面サポート",
    ],
    cons: [
      "料金は業界高水準",
      "初期費用が高額",
      "活動期間のコミットが必要",
    ],
    bestFor: "本気で結婚を考えている方、手厚いサポートを受けたい方、成婚率を重視する方におすすめ。料金は高めですが成婚実績は業界トップクラスです。",
    url: "https://www.loungemembers.com/",
    badge: "成婚率No.1",
    color: "red",
  },
  {
    name: "パートナーエージェント",
    type: "コンシェルジュ型・成婚重視",
    price: "初期費用約12万円〜",
    plan: "コンシェルジュコース／プライム",
    features: "成婚コンシェルジュ・PDCA型婚活・成婚退会率高",
    featureDetail: "タメニー株式会社が運営。専任コンシェルジュが婚活のPDCAを回し、1年以内の成婚退会率が業界トップクラス。定期的な活動状況レビューで効率的に婚活を進められる",
    payment: "クレジットカード・銀行振込対応",
    items: "全国店舗対応・オンライン併用可",
    pros: [
      "1年以内成婚退会率が高い",
      "PDCA型の効率的な婚活",
      "成婚コンシェルジュ専任制",
      "月1回以上の活動レビュー",
      "全国店舗で対面サポート",
      "返金保証制度あり",
    ],
    cons: [
      "初期費用が高め",
      "活動のコミット必須",
      "カウンセラーとの相性要確認",
    ],
    bestFor: "効率的に1年以内の結婚を目指す方、コンシェルジュのサポートを受けながら計画的に婚活したい方におすすめです。",
    url: "https://www.p-a.jp/",
    badge: "成婚特化",
    color: "orange",
  },
  {
    name: "ツヴァイ",
    type: "大手・会員数豊富",
    price: "初期費用約11万円〜",
    plan: "パーソナルサポート／紹介プラン",
    features: "イオン系列・会員数約9万人・全国店舗",
    featureDetail: "イオングループ系列の結婚相談所で会員数約9万人。全国50店舗以上の支店があり対面サポート充実。価値観マッチング診断で相性の良い相手を紹介してくれる",
    payment: "クレジットカード・銀行振込対応",
    items: "全国50店舗対応",
    pros: [
      "会員数約9万人で業界最大級",
      "全国50店舗以上の支店網",
      "イオングループで安心",
      "価値観マッチング診断あり",
      "成婚料0円プランあり",
      "初期費用が他社より安め",
    ],
    cons: [
      "担当者が頻繁に変わる場合あり",
      "成婚率の公表なし",
      "オンライン機能は標準的",
    ],
    bestFor: "大手の安心感を求める方、全国どこでも対面サポートを受けたい方におすすめ。会員数の多さと店舗網の広さが強みです。",
    url: "https://www.zwei.com/",
    badge: "大手安心",
    color: "blue",
  },
  {
    name: "ゼクシィ縁結びエージェント",
    type: "初期費用安い・コスパ重視",
    price: "初期費用約3.3万円〜",
    plan: "シンプル／スタンダード／プレミア",
    features: "リクルート系・料金業界最安級・成婚料0円",
    featureDetail: "リクルートが運営する結婚相談所。初期費用約3.3万円と業界最安級で始めやすく、成婚料も0円。月会費のみで活動できるコスパの良さと若年層の会員が多いのが特徴",
    payment: "クレジットカード対応",
    items: "全国主要都市店舗対応",
    pros: [
      "初期費用約3.3万円と最安級",
      "成婚料0円で安心",
      "リクルート運営で信頼性高",
      "若年層(20〜30代)会員が多い",
      "全国主要都市で対面サポート",
      "無料相談もオンライン可",
    ],
    cons: [
      "カウンセラー1人あたり担当多め",
      "会員数は中堅クラス",
      "手厚さはプレミア級には劣る",
    ],
    bestFor: "初期費用を抑えて婚活を始めたい方、20〜30代で若い出会いを求める方におすすめ。コスパ重視の婚活ならNo.1の選択肢です。",
    url: "https://zexy-enmusubi-agent.jp/",
    badge: "最安級",
    color: "green",
  },
  {
    name: "オーネット",
    type: "老舗・会員数業界最大級",
    price: "初期費用約11万円〜",
    plan: "プレミアム／ライト／スタンダード",
    features: "楽天系・会員数約5万人・診断型マッチング",
    featureDetail: "楽天グループ(オーネット株式会社)が運営する老舗結婚相談所。30年以上の歴史と約5万人の会員数。「結婚チャンステスト」で自分に合う相手の数を無料診断できる独自サービスあり",
    payment: "クレジットカード・銀行振込対応",
    items: "全国40店舗以上対応",
    pros: [
      "30年超の老舗の実績",
      "会員数約5万人",
      "結婚チャンステスト無料",
      "全国40店舗以上",
      "楽天グループで安心",
      "成婚料0円プランあり",
    ],
    cons: [
      "初期費用は平均的",
      "カウンセラーの対応に差",
      "オンライン機能は標準的",
    ],
    bestFor: "老舗の実績と安心感を求める方、結婚チャンステストで自分の市場価値を知りたい方におすすめ。長年の経験で安定したサポートを受けられます。",
    url: "https://onet.rakuten.co.jp/",
    badge: "老舗実績",
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
    question: "結婚相談所とマッチングアプリはどう違いますか？",
    answer: "結婚相談所は独身証明や年収証明の提出必須で本気度の高い会員のみ、カウンセラーのサポートあり。マッチングアプリは気軽に始められる反面、本気度はバラつきあり。真剣に結婚を目指すなら相談所がおすすめです。",
  },
  {
    question: "結婚相談所の費用相場はどれくらい？",
    answer: "初期費用3〜20万円、月会費1〜2万円、成婚料0〜30万円が一般的。1年活動で総額30〜60万円程度。成婚率や手厚さで料金が変わるので、予算と希望する活動スタイルに合わせて選びましょう。",
  },
  {
    question: "どれくらいの期間で成婚できますか？",
    answer: "平均的な活動期間は6ヶ月〜1年半。パートナーエージェントは1年以内成婚退会率が高く、IBJメンバーズの平均成婚期間は約5ヶ月。積極的に活動すれば1年以内の成婚も十分可能です。",
  },
  {
    question: "入会審査はありますか？",
    answer: "ほとんどの結婚相談所で独身証明書・本人確認書類・収入証明書・学歴証明書などの提出が必須です。これにより会員の本気度と信頼性が担保されます。書類がない場合は入会できません。",
  },
  {
    question: "返金保証制度はありますか？",
    answer: "パートナーエージェントなど一部の結婚相談所では、一定期間内に成婚しなかった場合の返金保証制度があります。条件は会社によって異なるため、契約前に詳細を必ず確認しましょう。",
  },
  {
    question: "オンラインだけで婚活できますか？",
    answer: "多くの結婚相談所がオンライン面談・お見合いに対応しています。ゼクシィ縁結びエージェントはオンライン面談OK、店舗に行かずに活動可能。地方在住や忙しい方にはオンライン併用がおすすめです。",
  },
];

export default function MarriageAgencyComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "結婚相談所比較おすすめ5選", url: `${siteConfig.url}/guide/marriage-agency-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>結婚相談所比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">婚活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】結婚相談所比較おすすめ5選｜料金・会員数・成婚率を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「結婚相談所はどれを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの結婚相談所5選（IBJメンバーズ・パートナーエージェント・ツヴァイ・ゼクシィ縁結びエージェント・オーネット）を料金・会員数・成婚率で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">成婚率重視 → IBJメンバーズ</span>（50%超）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">効率婚活 → パートナーエージェント</span>（PDCA型）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">大手安心 → ツヴァイ</span>（会員9万人）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">コスパ重視 → ゼクシィ縁結び</span>（初期費3万円〜）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">老舗実績 → オーネット</span>（30年超）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-agency" className="text-primary hover:underline">1. 結婚相談所のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 結婚相談所5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 結婚相談所の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-agency" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 結婚相談所のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">結婚相談所はマッチングアプリとは一線を画す本気度の高い出会いと、専門家のサポートを受けられる婚活の本命です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128141;", title: "本気度の高い出会い", desc: "独身証明書・収入証明書などの提出必須で、結婚を真剣に考えている会員のみが登録しています。" },
            { icon: "&#128105;", title: "専任カウンセラーのサポート", desc: "プロのアドバイスを受けながら婚活の進め方・お見合いの段取りまでサポートしてもらえます。" },
            { icon: "&#128200;", title: "効率的な婚活が可能", desc: "条件に合う相手を紹介してもらえるので、時間をかけずに効率良く理想の相手と出会えます。" },
            { icon: "&#128187;", title: "オンライン対応も充実", desc: "最近はオンライン面談・お見合いに対応する相談所が増え、地方在住・忙しい方でも活動可能です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 結婚相談所5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">IBJ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">PA</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">ツヴァイ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">ゼクシィ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">オーネット</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "初期費用", r: "約18万〜", s: "約12万〜", n: "約11万〜", c: "約3.3万〜", a: "約11万〜" },
                { label: "会員数", r: "約8万", s: "約6万", n: "約9万", c: "約3万", a: "約5万" },
                { label: "成婚率", r: "50%超", s: "高水準", n: "非公表", c: "非公表", a: "非公表" },
                { label: "サポート", r: "手厚い", s: "PDCA型", n: "標準", c: "標準", a: "標準" },
                { label: "店舗数", r: "全国", s: "全国", n: "50店舗超", c: "主要都市", a: "40店舗超" },
                { label: "おすすめ", r: "本気派", s: "効率派", n: "大手安心", c: "コスパ", a: "老舗派" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">初期費用</span><span className="font-bold">{s.price}</span></div>
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
            { scene: "本気で1年以内に結婚したい", app: "IBJメンバーズ", reason: "業界最大級の会員数と成婚率50%超の実績、手厚いサポートで短期決戦の婚活に最適です。" },
            { scene: "効率的にPDCAで婚活を進めたい", app: "パートナーエージェント", reason: "成婚コンシェルジュと月1レビューで計画的に婚活、1年以内成婚退会率が業界トップクラスです。" },
            { scene: "大手の安心感と全国店舗", app: "ツヴァイ", reason: "イオン系列で会員数約9万人、全国50店舗以上で地方在住でも対面サポートを受けられます。" },
            { scene: "初期費用を抑えて始めたい", app: "ゼクシィ縁結びエージェント", reason: "初期費用約3.3万円と業界最安級、成婚料0円でコスパ良く婚活を始められます。" },
            { scene: "老舗の実績と信頼で選びたい", app: "オーネット", reason: "30年超の歴史を持つ楽天系相談所。結婚チャンステストで自分の市場価値も無料でわかります。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 結婚相談所の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "料金総額を確認", desc: "初期費用・月会費・成婚料の総額で比較。1年活動の総額が30〜60万円になるのが一般的です。" },
            { num: "2", title: "会員数と会員層", desc: "会員数の多さと、自分の希望する年齢層・年収層が多いかを確認。大手は会員数、中規模はマッチング精度で選びましょう。" },
            { num: "3", title: "サポートの手厚さ", desc: "専任カウンセラー制か、カウンセラー1人あたりの担当人数、月のお見合い成立数で手厚さが変わります。" },
            { num: "4", title: "成婚率・成婚退会率", desc: "成婚率公表会社は成婚実績の指標になります。IBJやPAは数字を公開しているので安心材料になります。" },
            { num: "5", title: "無料相談で体験", desc: "多くの相談所が無料相談を実施。カウンセラーとの相性、雰囲気、システムを実際に確認してから決めましょう。" },
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
            結婚相談所は料金・会員数・サポートの手厚さで選ぶのが基本です。成婚率重視ならIBJメンバーズ、効率婚活ならパートナーエージェント、大手安心ならツヴァイ、コスパ重視ならゼクシィ縁結び、老舗ならオーネットがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・成婚率なら「IBJメンバーズ」50%超</li>
              <li>・効率派は「パートナーエージェント」</li>
              <li>・コスパなら「ゼクシィ縁結び」3万円〜</li>
              <li>・無料相談で複数社を比較するのが鉄則</li>
              <li>・総額30〜60万円/年の予算感を持つ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/matching-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">マッチングアプリ比較</span>
            <p className="text-xs text-muted mt-1">気軽に始めたい方はこちら</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">保険比較</span>
            <p className="text-xs text-muted mt-1">結婚後の保険見直しに</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
