import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】脱毛サロン・医療脱毛クリニック比較おすすめ5選｜料金・効果・痛みを徹底解説",
    description:
      "2026年最新の脱毛サロン・医療脱毛を徹底比較。ミュゼ・銀座カラー・ストラッシュ・リゼクリニック・湘南美容クリニックの料金・効果・特徴を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/hair-removal-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "ミュゼプラチナム",
    type: "脱毛サロン・低価格・店舗数最大",
    price: "両ワキ+Vライン100円〜",
    plan: "回数制・通い放題プランあり",
    features: "全国170店舗以上・低価格キャンペーン・痛みが少ない",
    featureDetail: "全国最大級の店舗数を誇る脱毛サロン。S.S.C.方式の光脱毛で痛みが少なく初心者でも安心。期間限定の100円キャンペーンでお試し可能",
    payment: "クレカ・現金・分割払い対応",
    items: "全国170店舗以上",
    pros: [
      "全国170店舗以上で通いやすい",
      "100円から始められる圧倒的な低価格",
      "S.S.C.方式で痛みが少ない",
      "予約システムが使いやすい",
      "肌に優しくデリケートゾーンもOK",
      "初心者向けのわかりやすい料金体系",
    ],
    cons: [
      "サロン脱毛なので回数が多く必要",
      "完全な永久脱毛ではない",
      "医療脱毛と比べて効果が緩やか",
    ],
    bestFor:
      "脱毛初心者で、まずは低価格で試してみたい方に最適。全国に店舗があり引っ越し・転勤があっても通いやすく、痛みに不安がある方にもおすすめです。",
    url: "https://musee-pla.com/",
    badge: "店舗数最大",
    color: "red",
  },
  {
    name: "銀座カラー",
    type: "脱毛サロン・全身脱毛特化",
    price: "全身脱毛通い放題月額3,500円〜",
    plan: "通い放題・分割払いOK",
    features: "全身脱毛特化・保湿ケア付き・予約が取りやすい",
    featureDetail: "全身脱毛に特化した老舗サロン。保湿効果の高いイオン導入ケア付きで肌もスベスベに。予約保証システムで希望日時に通いやすい",
    payment: "クレカ・現金・分割払い対応",
    items: "全国50店舗以上",
    pros: [
      "全身脱毛通い放題プランあり",
      "保湿ケア付きで肌荒れ対策も",
      "予約保証システムで通いやすい",
      "学割・乗換割などの割引豊富",
      "月額制で分割払いが可能",
      "接客対応の評判が良い",
    ],
    cons: [
      "店舗数はミュゼより少なめ",
      "医療脱毛と比べて回数が必要",
      "全国対応は都市部中心",
    ],
    bestFor:
      "全身脱毛をじっくり通い放題で受けたい方、肌ケアも同時に行いたい方におすすめ。予約が取りやすく、通いやすさを重視する方に最適です。",
    url: "https://ginza-calla.jp/",
    badge: "全身脱毛",
    color: "blue",
  },
  {
    name: "ストラッシュ",
    type: "脱毛サロン・SHR脱毛",
    price: "全身脱毛6回95,400円〜",
    plan: "回数制・月額制選択可",
    features: "SHR脱毛・日焼け肌OK・痛みほぼなし",
    featureDetail: "最新のSHR脱毛方式で痛みがほとんどなく、日焼け肌や産毛にも対応。毛周期に関係なく通えるため短期間で完了しやすい",
    payment: "クレカ・現金・分割払い対応",
    items: "全国40店舗以上",
    pros: [
      "SHR脱毛で痛みがほぼゼロ",
      "日焼け肌・色黒肌にも対応",
      "産毛にも効果が高い",
      "毛周期に関係なく通える",
      "短期間で全身脱毛完了",
      "美肌成分入りのジェルで肌ケア",
    ],
    cons: [
      "店舗数は大手サロンより少ない",
      "効果の感じ方に個人差あり",
      "キャンペーン割引は他社より控えめ",
    ],
    bestFor:
      "痛みに弱い方、日焼け肌で他のサロンで断られた方、短期間で脱毛を完了したい方におすすめ。産毛にも効果があるので顔脱毛にも最適です。",
    url: "https://stlassh.com/",
    badge: "痛みゼロ",
    color: "purple",
  },
  {
    name: "リゼクリニック",
    type: "医療脱毛・永久脱毛",
    price: "全身脱毛5回64,800円〜",
    plan: "回数制・追加費用なし",
    features: "3種類のレーザー使い分け・医療脱毛・追加費用無料",
    featureDetail: "3種類のレーザー機器を毛質・肌質に合わせて使い分ける医療脱毛。麻酔・剃毛・キャンセル料など追加費用が一切かからない明朗会計が魅力",
    payment: "クレカ・現金・医療ローン対応",
    items: "全国26院",
    pros: [
      "医療レーザーで永久脱毛効果",
      "3種類のレーザーで毛質に最適化",
      "追加費用一切なしの明朗会計",
      "麻酔クリーム無料で痛み対策",
      "打ち漏れ再照射無料保証",
      "医師による診察で安心",
    ],
    cons: [
      "店舗数はサロンより少ない",
      "サロンより料金は高め",
      "痛みはサロンより強い",
    ],
    bestFor:
      "永久脱毛効果を求める方、追加費用を心配せずに通いたい方におすすめ。医療機関ならではの安心感と、3種類のレーザー使い分けで効果を最大化できます。",
    url: "https://www.rizeclinic.com/",
    badge: "永久脱毛",
    color: "green",
  },
  {
    name: "湘南美容クリニック",
    type: "医療脱毛・最大手",
    price: "全身脱毛6回77,400円〜",
    plan: "回数制・コース豊富",
    features: "全国110院以上・医療脱毛最大手・メンズ脱毛も対応",
    featureDetail: "全国110院以上を展開する医療美容クリニック最大手。医療脱毛の症例実績も豊富で、メンズ脱毛やVIO脱毛も人気。院移動自由で通いやすい",
    payment: "クレカ・現金・医療ローン対応",
    items: "全国110院以上",
    pros: [
      "全国110院以上で通いやすい",
      "医療脱毛で永久脱毛効果",
      "症例数が多く安心感がある",
      "院移動が自由",
      "メンズ脱毛・VIOも充実",
      "ポイント制度でお得に通える",
    ],
    cons: [
      "人気院は予約が取りにくい",
      "追加オプション料金がかかる場合あり",
      "接客は院により差がある",
    ],
    bestFor:
      "医療脱毛を受けたいが通いやすさも重視する方、院移動の自由度を求める方におすすめ。メンズ脱毛や他の美容メニューも同時検討したい方にも最適です。",
    url: "https://www.sbc-datsumou.com/",
    badge: "最大手",
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
    question: "脱毛サロンと医療脱毛の違いは何ですか？",
    answer: "脱毛サロンは光脱毛で痛みが少なく価格も安いですが、永久脱毛効果はなく回数が多く必要です（全身10〜18回程度）。医療脱毛は医療用レーザーを使用し永久脱毛効果が得られ、必要回数も5〜8回と少なく済みます。料金は医療脱毛の方が高めですが、総合的にはコスパが良い場合も多いです。",
  },
  {
    question: "脱毛にはどれくらいの期間がかかりますか？",
    answer: "脱毛サロンの場合、全身脱毛で1〜2年（10〜18回）、医療脱毛の場合は半年〜1年（5〜8回）が目安です。毛周期に合わせて2〜3ヶ月おきに通うのが基本。最新のSHR脱毛なら毛周期を無視して通えるため、ストラッシュなどで半年程度で完了することも可能です。",
  },
  {
    question: "脱毛の痛みはどれくらいですか？",
    answer: "痛みの強さは医療脱毛＞光脱毛（IPL/S.S.C）＞SHR脱毛の順です。医療脱毛はゴムで弾かれるような強めの痛みですが、麻酔クリームで軽減可能。サロンの光脱毛は痛みが少なく、特にSHR脱毛（ストラッシュ等）はほとんど痛みがありません。",
  },
  {
    question: "追加料金はかかりますか？",
    answer: "サロン・クリニックによって大きく異なります。リゼクリニックは追加費用が一切かからない明朗会計が特徴。一方、シェービング代・キャンセル料・麻酔代・処置料などが別途かかるところもあるため、総額で比較するのが重要です。",
  },
  {
    question: "VIO脱毛は恥ずかしくないですか？",
    answer: "施術者は全員女性（クリニックは女性看護師希望可）でプロフェッショナル。紙ショーツを履いて必要な部分だけ露出する配慮もあります。最初は緊張しますが、2〜3回通えば慣れる方がほとんどです。清潔感と快適さのメリットは大きいので、多くの方が受けています。",
  },
  {
    question: "日焼け肌でも脱毛できますか？",
    answer: "一般的な光脱毛・レーザー脱毛は日焼け肌には対応できません（やけどのリスク）。ただしSHR脱毛（ストラッシュ等）は日焼け肌・色黒肌・金髪・産毛にも対応可能。夏場や日焼けしやすい方はSHR脱毛を選ぶと安心です。",
  },
];

export default function HairRemovalComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "脱毛サロン比較おすすめ5選", url: `${siteConfig.url}/guide/hair-removal-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>脱毛サロン比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">美容</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】脱毛サロン・医療脱毛比較おすすめ5選｜料金・効果・痛みを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「脱毛サロンと医療脱毛どっちを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの脱毛サロン・医療脱毛5選（ミュゼ・銀座カラー・ストラッシュ・リゼクリニック・湘南美容クリニック）を料金・効果・痛み・通いやすさで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-red-700 dark:text-red-300">低価格で試したい → ミュゼ</span>（100円キャンペーン）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">全身通い放題 → 銀座カラー</span>（保湿ケア付き）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">痛みが不安 → ストラッシュ</span>（SHR脱毛）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">永久脱毛効果 → リゼクリニック</span>（追加費用なし）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">全国で通いたい → 湘南美容クリニック</span>（110院以上）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-datsumo" className="text-primary hover:underline">1. 脱毛のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 脱毛5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サロン・クリニックの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 脱毛サロン・クリニックの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-datsumo" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 脱毛のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ムダ毛処理から解放され、清潔感と自信が得られるのが脱毛の大きなメリットです。</p>
        <div className="space-y-3">
          {[
            { icon: "&#9200;", title: "自己処理の手間から解放", desc: "毎日のカミソリ・毛抜き処理から解放され、朝の準備時間が大幅に短縮されます。" },
            { icon: "&#10024;", title: "肌荒れ・カミソリ負け防止", desc: "自己処理による肌トラブル（カミソリ負け・埋没毛・黒ずみ）を予防できます。" },
            { icon: "&#128170;", title: "清潔感と自信UP", desc: "ムダ毛がない状態は清潔感があり、水着や薄着の季節も自信を持って過ごせます。" },
            { icon: "&#128176;", title: "長期的にはコスパ◎", desc: "自己処理グッズ購入費・時間を考えると、脱毛は長期的に見てコスパが良い投資です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 脱毛サロン・クリニック5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">ミュゼ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">銀座カラー</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ストラッシュ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">リゼ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">湘南</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "種類", r: "サロン", s: "サロン", n: "サロン", c: "医療", a: "医療" },
                { label: "脱毛方式", r: "S.S.C.", s: "IPL", n: "SHR", c: "レーザー", a: "レーザー" },
                { label: "料金目安", r: "100円〜", s: "月3,500円", n: "95,400円", c: "64,800円", a: "77,400円" },
                { label: "痛み", r: "少ない", s: "少ない", n: "ほぼなし", c: "強め", a: "強め" },
                { label: "店舗数", r: "170+", s: "50+", n: "40+", c: "26", a: "110+" },
                { label: "効果", r: "抑毛", s: "抑毛", n: "抑毛", c: "永久", a: "永久" },
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
        <p className="text-xs text-muted mt-2">※ 料金は全身脱毛の目安です。各社の公式情報を必ずご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サロン・クリニックの詳細レビュー</h2>
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">店舗数</span><span className="font-bold">{s.items}</span></div>
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
            { scene: "まずは低価格でお試ししたい", app: "ミュゼプラチナム", reason: "100円キャンペーンで気軽に始められ、全国170店舗以上で通いやすいため脱毛初心者に最適です。" },
            { scene: "全身脱毛を通い放題でじっくり受けたい", app: "銀座カラー", reason: "全身脱毛通い放題プランがあり、保湿ケアもセット。予約保証システムで通いやすいのが魅力。" },
            { scene: "痛みに弱い・日焼け肌で断られた", app: "ストラッシュ", reason: "SHR脱毛で痛みがほぼなく、日焼け肌や産毛にも対応可能。他のサロンで断られた方にもおすすめ。" },
            { scene: "永久脱毛効果を求める", app: "リゼクリニック", reason: "3種類のレーザーを使い分け、追加費用なしの明朗会計で永久脱毛を受けられます。" },
            { scene: "医療脱毛を近所で受けたい", app: "湘南美容クリニック", reason: "全国110院以上で通いやすく、院移動も自由。メンズ脱毛やVIO脱毛にも対応しています。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 脱毛サロン・クリニックの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "サロン脱毛か医療脱毛か", desc: "永久脱毛効果を求めるなら医療脱毛、痛みを抑えて低価格で始めたいならサロン脱毛がおすすめです。" },
            { num: "2", title: "総額（追加費用込み）で比較", desc: "シェービング代・キャンセル料・麻酔代など追加費用込みの総額で比較しましょう。リゼクリニックは追加費用ゼロが強みです。" },
            { num: "3", title: "通いやすさ（店舗数・立地）", desc: "脱毛は10回以上通うのが一般的。自宅や職場から通いやすい場所にあるかを必ず確認しましょう。" },
            { num: "4", title: "予約の取りやすさ", desc: "人気サロン・クリニックは予約が取りにくい場合があります。予約保証システムの有無もチェック。" },
            { num: "5", title: "無料カウンセリングで相談", desc: "ほとんどのサロン・クリニックで無料カウンセリングを実施しています。複数を比較してから決めるのがおすすめです。" },
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
            脱毛サロン・医療脱毛は目的と予算で選ぶのが基本です。低価格で試すならミュゼ、全身通い放題なら銀座カラー、痛みが気になるならストラッシュ、永久脱毛効果ならリゼクリニック、通いやすさ重視なら湘南美容クリニックがおすすめ。無料カウンセリングで複数を比較してから決めましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・低価格なら「ミュゼ」</li>
              <li>・全身通い放題なら「銀座カラー」</li>
              <li>・痛みが不安なら「ストラッシュ」（SHR）</li>
              <li>・永久脱毛なら「リゼクリニック」「湘南」</li>
              <li>・総額と通いやすさで選ぶのが鉄則</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">美容と合わせて体型管理も</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">医療保険比較</span>
            <p className="text-xs text-muted mt-1">万が一に備える保険を比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
