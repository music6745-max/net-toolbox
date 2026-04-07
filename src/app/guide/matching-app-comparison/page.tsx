import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】マッチングアプリ比較おすすめ5選｜料金・会員数・目的別を徹底解説",
    description:
      "2026年最新のマッチングアプリを徹底比較。Pairs・with・Omiai・タップル・ゼクシィ縁結びの料金・会員数・目的別おすすめを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/matching-app-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "Pairs（ペアーズ）",
    type: "会員数No.1・総合力",
    price: "男性月額3,700円〜／女性無料",
    plan: "月額制・無料会員も可",
    features: "累計2000万人超・コミュニティ機能・真剣度高め",
    featureDetail: "国内最大級の会員数2000万人超。10万以上のコミュニティで趣味や価値観で相手を探しやすい。20代後半〜30代の真剣交際希望者が中心",
    payment: "クレカ・App Store・Google Play対応",
    items: "累計会員数2000万人以上",
    pros: [
      "国内最大級の会員数で出会いの母数が多い",
      "コミュニティ機能で共通の趣味の相手が探せる",
      "年齢層が幅広く20〜40代に対応",
      "本人確認・監視体制が充実で安心",
      "女性は基本無料で利用可能",
      "真剣交際から結婚まで対応",
    ],
    cons: [
      "男性は月額料金が必要",
      "会員数が多すぎて選びきれない場合も",
      "地方はライバルより会員数少なめ",
    ],
    bestFor:
      "マッチングアプリ初心者で、とにかく出会いの母数を重視したい方に最適。真剣交際から結婚相手探しまで幅広い目的に対応しており、迷ったらPairsで間違いありません。",
    url: "https://www.pairs.lv/",
    badge: "会員数No.1",
    color: "red",
  },
  {
    name: "with（ウィズ）",
    type: "心理学・性格診断重視",
    price: "男性月額3,600円〜／女性無料",
    plan: "月額制・無料会員も可",
    features: "メンタリストDaiGo監修・性格診断・20代中心",
    featureDetail: "メンタリストDaiGo監修の心理学・統計学ベースの性格診断で相性の良い相手を提案。内面重視のマッチングで20代に人気",
    payment: "クレカ・App Store・Google Play対応",
    items: "累計会員数800万人以上",
    pros: [
      "性格診断で内面の相性が分かる",
      "共通点の多い相手をおすすめしてくれる",
      "20代ユーザーが中心で若年層向き",
      "メッセージのきっかけが作りやすい",
      "女性は基本無料",
      "UIが洗練されていて使いやすい",
    ],
    cons: [
      "30代以降はややユーザー少なめ",
      "地方は会員数に課題",
      "診断イベントが多くやや煩雑",
    ],
    bestFor:
      "20代で内面重視の相手探しをしたい方、価値観の合うパートナーを見つけたい方におすすめ。心理学診断で相性を可視化できるのが最大の魅力です。",
    url: "https://with.is/",
    badge: "20代人気",
    color: "blue",
  },
  {
    name: "Omiai（オミアイ）",
    type: "真剣交際・婚活向け",
    price: "男性月額3,980円〜／女性無料",
    plan: "月額制・無料会員も可",
    features: "真剣度高め・イエローカード制度・婚活ユーザー多数",
    featureDetail: "名前の通り真剣な出会いを求めるユーザーが集まるアプリ。違反報告に対するイエローカード制度で安全性が高く、結婚前提の交際希望者が多い",
    payment: "クレカ・App Store・Google Play対応",
    items: "累計会員数900万人以上",
    pros: [
      "真剣交際・婚活目的のユーザーが多い",
      "イエローカード制度で安全性が高い",
      "年齢層は20代後半〜30代が中心",
      "Facebook連携で身元が明確",
      "女性は基本無料",
      "シンプルで使いやすいUI",
    ],
    cons: [
      "カジュアルな出会いには不向き",
      "若年層ユーザーはやや少なめ",
      "いいねの消費が早い",
    ],
    bestFor:
      "結婚を視野に入れた真剣交際を希望する方、安心・安全に婚活したい方におすすめ。30代前後の婚活ユーザーが多く、結婚への距離が近いのが特徴です。",
    url: "https://fb.omiai-jp.com/",
    badge: "婚活向け",
    color: "purple",
  },
  {
    name: "タップル",
    type: "カジュアル・趣味マッチング",
    price: "男性月額3,700円〜／女性無料",
    plan: "月額制・無料会員も可",
    features: "サイバーエージェント運営・趣味カテゴリ・スワイプ型",
    featureDetail: "趣味カテゴリから相手を探すスワイプ型マッチング。20代前半の若年層が中心で、恋活・友達探しに向いたカジュアルなアプリ",
    payment: "クレカ・App Store・Google Play対応",
    items: "累計会員数1700万人以上",
    pros: [
      "20代前半の若年層が多い",
      "趣味カテゴリで気軽に相手を探せる",
      "デート機能ですぐに会いやすい",
      "スワイプ型で操作がシンプル",
      "女性は基本無料",
      "マッチング率が高め",
    ],
    cons: [
      "真剣交際・婚活には不向き",
      "30代以降のユーザーは少ない",
      "冷やかしユーザーも一定数存在",
    ],
    bestFor:
      "20代前半で気軽に恋活したい方、趣味仲間やデート相手を見つけたい方におすすめ。スピーディにマッチングしたい方に最適です。",
    url: "https://tapple.me/",
    badge: "20代恋活",
    color: "orange",
  },
  {
    name: "ゼクシィ縁結び",
    type: "リクルート運営・結婚前提",
    price: "男女同額月額4,378円〜",
    plan: "月額制・女性も有料",
    features: "結婚意識高め・価値観診断・お見合いオファー機能",
    featureDetail: "結婚情報誌ゼクシィのリクルート運営。価値観診断で相性の良い相手を毎日紹介。男女同額でサクラ対策も万全、真剣度が非常に高い",
    payment: "クレカ・App Store・Google Play対応",
    items: "累計会員数200万人以上",
    pros: [
      "男女同額で真剣度が非常に高い",
      "リクルート運営で安心感がある",
      "価値観診断で相性の良い相手を毎日紹介",
      "お見合いコンシェルジュでデート調整代行",
      "結婚前提の出会いに特化",
      "サクラ対策が徹底されている",
    ],
    cons: [
      "女性も有料のため母数は少なめ",
      "20代前半のユーザーは少ない",
      "月額料金は他アプリより高め",
    ],
    bestFor:
      "30代以上で真剣に結婚相手を探したい方、信頼できる運営会社で安心して婚活したい方におすすめ。本気で結婚したい人だけが集まる環境です。",
    url: "https://zexy-enmusubi.net/",
    badge: "結婚前提",
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
    question: "マッチングアプリは安全ですか？",
    answer: "大手運営のアプリは本人確認（免許証・保険証等の提出）、24時間監視体制、違反報告機能などで安全対策を徹底しています。特にPairs・Omiai・ゼクシィ縁結びは身分証確認必須のため、安心して利用できます。ただし個人情報の早い段階での開示や金銭要求には注意しましょう。",
  },
  {
    question: "女性は本当に無料で使えますか？",
    answer: "Pairs・with・Omiai・タップルは女性は基本無料で利用できます。メッセージのやり取りも無料です。ただしゼクシィ縁結びは男女同額で女性も有料、その分真剣度の高いユーザーが集まります。",
  },
  {
    question: "どのアプリが結婚につながりやすいですか？",
    answer: "真剣交際・婚活目的ならOmiai・ゼクシィ縁結び・Pairsがおすすめ。特にゼクシィ縁結びは男女同額のため結婚意識の高い会員が多く、リクルート運営の安心感もあります。Pairsは会員数が多く出会いの母数を確保しやすいです。",
  },
  {
    question: "無料のマッチングアプリとの違いは何ですか？",
    answer: "完全無料アプリは本人確認が甘くサクラや業者が多い傾向にあります。有料アプリは本人確認必須・24時間監視・違反者の強制退会など安全対策が充実しており、真剣な出会いを求めるユーザーが集まります。安全性を考えれば有料アプリを選ぶのが賢明です。",
  },
  {
    question: "プロフィール写真はどうすればいいですか？",
    answer: "自然な笑顔の写真、清潔感のある服装、明るい場所で撮った顔がはっきり分かる写真が基本です。自撮り以外に、友人に撮ってもらった写真もおすすめ。趣味や日常のシーンを含む写真もサブ写真に追加すると人柄が伝わりやすくなります。",
  },
  {
    question: "複数アプリの併用はありですか？",
    answer: "併用することで出会いの母数が大幅に増えるためおすすめです。PairsとOmiaiで真剣交際、PairsとタップルでPairsとwithで若年層と、目的別に使い分ける方も多いです。ただしメッセージ管理が煩雑になるため、最大2〜3アプリまでに留めましょう。",
  },
];

export default function MatchingAppComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "マッチングアプリ比較おすすめ5選", url: `${siteConfig.url}/guide/matching-app-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>マッチングアプリ比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">恋活・婚活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】マッチングアプリ比較おすすめ5選｜料金・会員数・目的別を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「マッチングアプリはどれを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのマッチングアプリ5選（Pairs・with・Omiai・タップル・ゼクシィ縁結び）を料金・会員数・目的別に徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：目的別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">初心者・母数重視 → Pairs</span>（国内最大級2000万人）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">20代・内面重視 → with</span>（心理学診断）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">真剣交際 → Omiai</span>（婚活向け・安全性高）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">若年層・恋活 → タップル</span>（20代前半中心）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">結婚前提 → ゼクシィ縁結び</span>（リクルート運営）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-app" className="text-primary hover:underline">1. マッチングアプリのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. マッチングアプリ5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各アプリの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. 目的別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. マッチングアプリの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-app" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. マッチングアプリのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">時間や場所を選ばず、自分の理想に近い相手を効率的に探せるのがマッチングアプリの強みです。</p>
        <div className="space-y-3">
          {[
            { icon: "&#9200;", title: "時間や場所を選ばず出会える", desc: "スマホ一つで通勤中・自宅で気軽に相手探しができます。忙しい社会人でも隙間時間で活用可能です。" },
            { icon: "&#128269;", title: "理想に近い相手を探せる", desc: "年齢・職業・趣味・価値観でフィルターをかけて探せるため、対面では出会えないタイプの相手と出会えます。" },
            { icon: "&#128737;", title: "安全対策が充実", desc: "大手運営のアプリは本人確認必須、24時間監視、違反報告制度など安全対策が充実しています。" },
            { icon: "&#128221;", title: "メッセージで事前に相性確認", desc: "会う前にメッセージで価値観や人柄を確認できるため、時間とお金の無駄を減らせます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. マッチングアプリ5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">Pairs</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">with</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">Omiai</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">タップル</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">ゼクシィ</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "会員数", r: "2000万+", s: "800万+", n: "900万+", c: "1700万+", a: "200万+" },
                { label: "男性月額", r: "3,700円", s: "3,600円", n: "3,980円", c: "3,700円", a: "4,378円" },
                { label: "女性料金", r: "無料", s: "無料", n: "無料", c: "無料", a: "4,378円" },
                { label: "年齢層", r: "20〜40代", s: "20代中心", n: "20後半〜30", c: "20代前半", a: "30代中心" },
                { label: "目的", r: "万能", s: "恋活", n: "婚活", c: "恋活", a: "結婚前提" },
                { label: "特徴", r: "コミュ機能", s: "性格診断", n: "安全性", c: "スワイプ", a: "男女同額" },
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">会員数</span><span className="font-bold">{s.items}</span></div>
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
        <h2 className="text-2xl font-bold mb-4">4. 目的別おすすめ</h2>
        <div className="space-y-4">
          {[
            { scene: "マッチングアプリ初心者で迷っている", app: "Pairs", reason: "国内最大級の会員数で出会いの母数が多く、コミュニティ機能で共通の趣味の相手も探しやすい万能アプリです。" },
            { scene: "内面や価値観を重視したい20代", app: "with", reason: "メンタリストDaiGo監修の心理学診断で相性の良い相手を提案してくれるため、内面重視の相手探しに最適です。" },
            { scene: "真剣交際・結婚を前提にしたい", app: "Omiai", reason: "真剣な婚活ユーザーが多く、イエローカード制度で安全性も高いため安心して婚活できます。" },
            { scene: "気軽にデート相手を探したい", app: "タップル", reason: "スワイプ型で操作が簡単、デート機能ですぐに会える関係が作りやすく、20代前半に人気です。" },
            { scene: "結婚を本気で考えている30代", app: "ゼクシィ縁結び", reason: "男女同額で真剣度が高く、リクルート運営の安心感もあり、結婚前提の出会いに特化しています。" },
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
        <h2 className="text-2xl font-bold mb-4">5. マッチングアプリの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "目的を明確にする", desc: "恋活・婚活・友達探しで選ぶべきアプリが変わります。真剣交際ならOmiaiやゼクシィ縁結び、気軽な出会いならタップルがおすすめ。" },
            { num: "2", title: "年齢層を確認する", desc: "アプリごとにメインの年齢層が異なります。20代前半ならタップル・with、30代以上ならPairs・ゼクシィ縁結びが最適です。" },
            { num: "3", title: "会員数と地方対応", desc: "地方在住の場合は会員数の多いPairs・タップルが有利。都市部なら選択肢は豊富です。" },
            { num: "4", title: "安全対策を確認", desc: "本人確認必須・24時間監視・違反報告機能があるアプリを選びましょう。大手運営なら安心です。" },
            { num: "5", title: "まずは無料会員で試す", desc: "どのアプリも無料会員で登録・検索・いいねまで可能。雰囲気を掴んでから有料プランに進みましょう。" },
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
            マッチングアプリは目的と年齢層で選ぶのが基本です。初心者や母数重視ならPairs、20代で内面重視ならwith、真剣交際ならOmiai、気軽な恋活ならタップル、結婚前提ならゼクシィ縁結びがおすすめ。複数併用で出会いの母数を増やすのも効果的です。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・迷ったら「Pairs」で間違いなし</li>
              <li>・20代で内面重視なら「with」</li>
              <li>・真剣婚活なら「Omiai」「ゼクシィ縁結び」</li>
              <li>・気軽な恋活なら「タップル」</li>
              <li>・女性は基本無料（ゼクシィ縁結びを除く）</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">デート費用をお得にするカードを比較</p>
          </Link>
          <Link href="/guide/online-english-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン英会話比較</span>
            <p className="text-xs text-muted mt-1">自分磨きにおすすめのサービス</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
