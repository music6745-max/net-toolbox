import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】パーソナルジム比較おすすめ5選｜料金・効果・特徴を徹底解説",
    description:
      "2026年最新のパーソナルジムを徹底比較。RIZAP・24/7Workout・BEYOND・チキンジム・ASPIの料金・効果・特徴を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/personal-gym-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "RIZAP",
    type: "業界最大手・結果にコミット",
    price: "2ヶ月327,800円〜",
    plan: "16回コース／30日全額返金保証",
    features: "業界最大手・実績豊富・全額返金保証",
    featureDetail: "「結果にコミット」で有名な業界最大手のパーソナルジム。全国に120店舗以上を展開し、累計17万人以上の実績。30日間の全額返金保証もあり、本気でボディメイクしたい方に",
    payment: "一括・分割払い対応",
    items: "全国120店舗以上",
    pros: [
      "業界最大手で実績豊富",
      "全国に店舗が多い",
      "30日全額返金保証",
      "完全個室で集中できる",
      "食事指導が手厚い",
      "卒業後のフォローも充実",
    ],
    cons: [
      "料金が高い",
      "食事制限が厳しい",
      "リバウンドの心配",
    ],
    bestFor: "本気で短期間に結果を出したい方、有名ジムの安心感を重視する方におすすめ。料金は高めですが効果と実績は折り紙付きです。",
    url: "https://www.rizap.jp/",
    badge: "業界最大手",
    color: "red",
  },
  {
    name: "24/7Workout",
    type: "コスパ重視・継続しやすい",
    price: "2ヶ月215,600円〜",
    plan: "16回コース／30日全額返金保証",
    features: "コスパ重視・極端な食事制限なし・全国対応",
    featureDetail: "極端な食事制限を行わず、3食しっかり食べながら痩せるメソッドが特徴のパーソナルジム。RIZAPより安い料金で継続しやすく、リバウンドしにくい体作りができると評判",
    payment: "一括・分割払い対応",
    items: "全国80店舗以上",
    pros: [
      "RIZAPより安い料金",
      "極端な食事制限なし",
      "3食食べながら痩せる",
      "全国80店舗以上",
      "30日全額返金保証",
      "リバウンドしにくい",
    ],
    cons: [
      "店舗数はRIZAPより少なめ",
      "短期での激変は難しい",
      "知名度はRIZAPに劣る",
    ],
    bestFor: "コスパよく無理なく痩せたい方、極端な食事制限が苦手な方におすすめ。健康的に長期的なボディメイクを目指す方に最適です。",
    url: "https://247-workout.jp/",
    badge: "コスパ良",
    color: "green",
  },
  {
    name: "BEYOND",
    type: "コンテスト出場経験トレーナー",
    price: "2ヶ月215,600円〜",
    plan: "16回コース／返金保証あり",
    features: "プロトレーナー在籍・本格的・コンテスト出場者",
    featureDetail: "コンテスト出場経験のあるプロトレーナーが多数在籍するパーソナルジム。本格的なボディメイクを学べる環境で、ただ痩せるだけでなく美しい体を作りたい方に最適",
    payment: "一括・分割払い対応",
    items: "全国50店舗以上",
    pros: [
      "プロトレーナー在籍",
      "美しい体作りに特化",
      "コンテスト挑戦も可能",
      "店舗数も増加中",
      "返金保証あり",
      "本格的な指導が受けられる",
    ],
    cons: [
      "店舗はまだ拡大中",
      "本気度が求められる",
      "ダイエット目的だけならオーバースペック",
    ],
    bestFor: "ただ痩せるだけでなく美しいボディラインを作りたい方、本格的なトレーニングを学びたい方におすすめ。コンテスト挑戦したい方にも最適です。",
    url: "https://beyond-gym.com/",
    badge: "プロ仕様",
    color: "purple",
  },
  {
    name: "チキンジム",
    type: "完全オーダーメイド・初心者向け",
    price: "2ヶ月224,400円〜",
    plan: "全額返金保証／ウェアレンタル無料",
    features: "オーダーメイド・初心者向け・手ぶらOK",
    featureDetail: "ウェア・シューズ・タオル・水まで全て無料でレンタルできる手ぶらOKのパーソナルジム。完全オーダーメイドのプログラムで初心者にも丁寧に指導してくれる安心感",
    payment: "一括・分割払い対応",
    items: "全国30店舗以上",
    pros: [
      "完全手ぶらでOK",
      "ウェア・シューズ無料",
      "オーダーメイドプログラム",
      "初心者に優しい指導",
      "全額返金保証",
      "通いやすい料金設定",
    ],
    cons: [
      "店舗数はまだ少なめ",
      "知名度は低め",
      "上級者向けではない",
    ],
    bestFor: "パーソナルジムが初めての方、手ぶらで通いたい方におすすめ。優しい指導で安心して始められるので運動初心者にも最適です。",
    url: "https://chicken-gym.com/",
    badge: "手ぶらOK",
    color: "orange",
  },
  {
    name: "ASPI",
    type: "女性専用・美ボディ特化",
    price: "2ヶ月237,600円〜",
    plan: "全額返金保証／女性トレーナー",
    features: "女性専用・美ボディ・女性トレーナー在籍",
    featureDetail: "女性専用のパーソナルジムで、美しいくびれや美脚作りに特化したプログラムを提供。女性トレーナーも在籍しており、男性の目を気にせずトレーニングに集中できる環境",
    payment: "一括・分割払い対応",
    items: "都市圏中心",
    pros: [
      "女性専用で安心",
      "女性トレーナー在籍",
      "美ボディに特化",
      "完全個室",
      "全額返金保証",
      "女性ならではの悩みに対応",
    ],
    cons: [
      "店舗が都市圏中心",
      "料金は標準的",
      "男性は利用不可",
    ],
    bestFor: "女性専用ジムで安心してトレーニングしたい方、美しいくびれや美脚を作りたい方におすすめ。女性特有の悩みに対応した指導が受けられます。",
    url: "https://aspi-gym.com/",
    badge: "女性専用",
    color: "blue",
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
    question: "パーソナルジムと普通のジムの違いは何ですか？",
    answer: "パーソナルジムはマンツーマンで専属トレーナーが指導してくれるのが特徴です。普通のジムより料金は高めですが、効率的に結果を出せるため短期集中でボディメイクしたい方に向いています。",
  },
  {
    question: "本当に2ヶ月で痩せられますか？",
    answer: "個人差はありますが、多くのパーソナルジムでは2ヶ月で5〜10kg程度の減量が可能です。トレーナーの指導通りにトレーニングと食事管理を続けることが成功の鍵となります。",
  },
  {
    question: "リバウンドしませんか？",
    answer: "卒業後の生活習慣次第です。RIZAPや24/7Workoutなど多くのジムは卒業後のフォロープログラムを提供しています。リバウンドを防ぐには卒業後も適度な運動と食事管理を続けることが重要です。",
  },
  {
    question: "運動経験がなくても大丈夫ですか？",
    answer: "はい、ほとんどの利用者は運動初心者です。トレーナーが体力レベルに合わせたプログラムを組んでくれるため、運動が苦手な方でも安心して通えます。チキンジムなど初心者向けジムも増えています。",
  },
  {
    question: "食事制限はどれくらい厳しいですか？",
    answer: "ジムによって異なります。RIZAPは厳しめの糖質制限が中心ですが、24/7Workoutは3食しっかり食べながら痩せるメソッド。極端な制限が苦手な方は無理のないジムを選びましょう。",
  },
  {
    question: "全額返金保証は本当に使えますか？",
    answer: "多くのジムで30日間の全額返金保証が用意されており、実際に利用可能です。ただし条件があるため契約前に必ず詳細を確認しましょう。返金条件は無料カウンセリングで質問できます。",
  },
];

export default function PersonalGymComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "パーソナルジム比較おすすめ5選", url: `${siteConfig.url}/guide/personal-gym-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>パーソナルジム比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">健康</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】パーソナルジム比較おすすめ5選｜料金・効果・特徴を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「本気で痩せたい」「どのパーソナルジムを選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめのパーソナルジム5選（RIZAP・24/7Workout・BEYOND・チキンジム・ASPI）を料金・効果・特徴で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">業界最大手 → RIZAP</span>（120店舗）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">コスパ重視 → 24/7Workout</span>（食事制限緩め）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">本格派 → BEYOND</span>（コンテスト経験）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">初心者 → チキンジム</span>（手ぶらOK）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">女性専用 → ASPI</span>（美ボディ）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-personal" className="text-primary hover:underline">1. パーソナルジムのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. パーソナルジム5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. パーソナルジムの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-personal" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. パーソナルジムのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">パーソナルジムは専属トレーナーがマンツーマンで指導してくれる短期集中型のジムです。普通のジムより効率的に結果を出せるのが最大の魅力です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#127947;", title: "マンツーマン指導", desc: "専属トレーナーが付きっきりで指導してくれるため、正しいフォームで効率的にトレーニングできます。" },
            { icon: "&#127858;", title: "食事管理サポート", desc: "トレーナーが食事メニューもアドバイス。LINEで毎日報告するなど、徹底した食事管理で結果につなげます。" },
            { icon: "&#9203;", title: "短期集中で結果", desc: "2〜3ヶ月の短期集中プログラムで、目に見える結果が出やすいのが特徴。モチベーション維持にも繋がります。" },
            { icon: "&#127942;", title: "全額返金保証", desc: "多くのジムで30日間の全額返金保証があるため、合わなかった場合のリスクも最小限に抑えられます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. パーソナルジム5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">RIZAP</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">24/7</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">BEYOND</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">チキン</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">ASPI</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "2ヶ月料金", r: "327,800円", s: "215,600円", n: "215,600円", c: "224,400円", a: "237,600円" },
                { label: "店舗数", r: "120+", s: "80+", n: "50+", c: "30+", a: "都市圏" },
                { label: "返金保証", r: "30日", s: "30日", n: "あり", c: "あり", a: "あり" },
                { label: "食事制限", r: "厳しい", s: "緩め", n: "本格的", c: "標準", a: "標準" },
                { label: "特徴", r: "実績豊富", s: "コスパ", n: "プロ", c: "手ぶら", a: "女性専用" },
                { label: "おすすめ", r: "本気派", s: "継続派", n: "美ボディ", c: "初心者", a: "女性" },
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
            { scene: "本気で短期間に結果を出したい方", app: "RIZAP", reason: "業界最大手の安心感と豊富な実績で、本気でボディメイクしたい方に最適です。" },
            { scene: "コスパよく無理なく痩せたい方", app: "24/7Workout", reason: "RIZAPより安く、極端な食事制限なしで継続しやすい。リバウンドしにくい体作りができます。" },
            { scene: "美しいボディラインを作りたい方", app: "BEYOND", reason: "コンテスト出場経験のあるプロトレーナーが在籍し、本格的なボディメイクが学べます。" },
            { scene: "パーソナルジム初心者", app: "チキンジム", reason: "ウェアやシューズも全て無料レンタルで完全手ぶらOK。初心者にも丁寧な指導が魅力です。" },
            { scene: "女性専用のジムで通いたい方", app: "ASPI", reason: "女性専用で女性トレーナーも在籍。男性の目を気にせず美ボディ作りに集中できます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. パーソナルジムの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "通いやすい立地", desc: "週2〜3回通うため、自宅や職場から近い店舗を選びましょう。続けやすさが結果に直結します。" },
            { num: "2", title: "料金と支払い方法", desc: "総額だけでなく、分割払いや月額制の有無もチェック。無理なく続けられる料金プランを選びましょう。" },
            { num: "3", title: "食事指導の内容", desc: "極端な制限が苦手なら緩めのジムを、本気で結果を出したいなら厳しめのジムを選ぶと良いでしょう。" },
            { num: "4", title: "全額返金保証の有無", desc: "30日間の全額返金保証があれば安心。万が一合わなかった場合のリスクヘッジになります。" },
            { num: "5", title: "無料カウンセリングを活用", desc: "ほとんどのジムで無料カウンセリングを実施。実際の雰囲気やトレーナーとの相性を確認しましょう。" },
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
            パーソナルジムは料金・指導方針・通いやすさで選ぶのが基本です。本気派ならRIZAP、コスパ重視なら24/7Workout、初心者ならチキンジム、女性ならASPIがおすすめです。まずは無料カウンセリングで雰囲気を確認しましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・本気派は「RIZAP」</li>
              <li>・コスパ重視は「24/7Workout」</li>
              <li>・初心者は「チキンジム」（手ぶらOK）</li>
              <li>・女性は「ASPI」（女性専用）</li>
              <li>・まずは無料カウンセリングへ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">自宅トレーニングも併用</p>
          </Link>
          <Link href="/guide/hair-removal-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">脱毛サロン比較</span>
            <p className="text-xs text-muted mt-1">美容ケアも検討</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
