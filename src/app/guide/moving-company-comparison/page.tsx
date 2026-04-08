import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】引越し業者比較おすすめ5選｜料金・サービス・一括見積もりを徹底解説",
    description:
      "2026年最新の引越し業者を徹底比較。サカイ引越センター・アート引越センター・アリさんマークの引越社・日本通運・ヤマトホームコンビニエンスの料金とサービスを解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/moving-company-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "サカイ引越センター",
    type: "大手・作業品質No.1",
    price: "単身30,000円〜／家族80,000円〜",
    plan: "見積もり無料・コース多数",
    features: "作業品質最高クラス・ダスキン掃除サービス付き・全国対応",
    featureDetail: "業界売上高No.1の大手引越し業者。丁寧な梱包・搬入で評判が高く、ダスキンとの連携で掃除サービスも付く充実のサポート",
    payment: "クレカ・現金・後払い対応",
    items: "全国200拠点以上",
    pros: [
      "業界売上高No.1の安心感",
      "作業品質が業界トップクラス",
      "ダスキンの掃除サービス付き",
      "全国200拠点以上で対応エリア広い",
      "エアコン工事・ピアノ運搬も対応",
      "研修を受けた専属スタッフ",
    ],
    cons: [
      "料金は他社より高めの傾向",
      "繁忙期は予約が取りにくい",
      "値引き交渉の余地は少なめ",
    ],
    bestFor:
      "品質・安心感を重視する方、家具・家電の丁寧な扱いを求める方におすすめ。多少料金が高くてもトラブルなく引越しを済ませたい方に最適です。",
    url: "https://www.hikkoshi-sakai.co.jp/",
    badge: "作業品質",
    color: "green",
  },
  {
    name: "アート引越センター",
    type: "大手・女性安心プラン",
    price: "単身35,000円〜／家族85,000円〜",
    plan: "見積もり無料・女性スタッフ指定可",
    features: "女性スタッフ限定プラン・エコ資材・丁寧な梱包",
    featureDetail: "女性スタッフのみで対応する「レディースパック」が人気。繰り返し使えるエコ資材「エコ楽ボックス」で荷造りの手間を削減",
    payment: "クレカ・現金・後払い対応",
    items: "全国180拠点以上",
    pros: [
      "女性スタッフ限定プランで安心",
      "エコ楽ボックスで梱包の手間削減",
      "建物養生など現場管理が丁寧",
      "家具の配置替えサービス無料",
      "アフターサービスが充実",
      "全国180拠点以上で対応",
    ],
    cons: [
      "料金は平均より高め",
      "レディースパックは割増料金",
      "時期により予約が取りにくい",
    ],
    bestFor:
      "一人暮らしの女性や、丁寧な作業を求める方におすすめ。女性スタッフ限定プランで防犯面でも安心、荷物を大切に扱ってもらえます。",
    url: "https://www.the0123.com/",
    badge: "女性安心",
    color: "purple",
  },
  {
    name: "アリさんマークの引越社",
    type: "大手・コスパ重視",
    price: "単身25,000円〜／家族70,000円〜",
    plan: "見積もり無料・値引き交渉可",
    features: "料金交渉OK・全国対応・経済パック",
    featureDetail: "料金交渉に応じてもらいやすい大手業者。経済パックなど低価格プランが豊富で、コスパ重視の方に人気",
    payment: "クレカ・現金・後払い対応",
    items: "全国100拠点以上",
    pros: [
      "値引き交渉に応じやすい",
      "経済パックで低価格実現",
      "大手ならではの安心感",
      "全国対応で長距離引越しもOK",
      "段ボール無料サービス",
      "家財保険完備",
    ],
    cons: [
      "作業品質は担当者により差がある",
      "繁忙期は大幅割増",
      "一部地域で対応できない場合あり",
    ],
    bestFor:
      "大手の安心感とコスパを両立したい方におすすめ。値引き交渉に前向きで、予算を抑えつつも信頼できる業者に任せたい方に最適です。",
    url: "https://www.2626.co.jp/",
    badge: "コスパ重視",
    color: "red",
  },
  {
    name: "日本通運",
    type: "物流大手・単身パック",
    price: "単身パック15,000円〜／家族60,000円〜",
    plan: "単身パックが格安",
    features: "単身パックS/L・大手物流会社・全国どこでも",
    featureDetail: "物流大手の信頼感と、単身者向けの「単身パック」が最大の魅力。専用ボックスに荷物を詰める定額制で、長距離引越しでも格安",
    payment: "クレカ・現金・後払い対応",
    items: "全国対応",
    pros: [
      "単身パックが業界最安クラス",
      "長距離引越しでも定額で安心",
      "物流大手の信頼感",
      "全国どこでも対応可能",
      "荷物追跡サービスあり",
      "海外引越しにも対応",
    ],
    cons: [
      "専用ボックスに入らない荷物は追加料金",
      "家族向けは他社より割高になる場合も",
      "営業時間内の対応がメイン",
    ],
    bestFor:
      "一人暮らしで荷物が少ない方、長距離引越しを安く済ませたい方におすすめ。単身パックは業界最安クラスで、地方への引越しに最適です。",
    url: "https://www.nittsu.co.jp/hikkoshi/",
    badge: "単身最安",
    color: "blue",
  },
  {
    name: "ヤマトホームコンビニエンス",
    type: "単身向け・小荷物専門",
    price: "単身引越しらくらくパック17,000円〜",
    plan: "らくらくパック・ミニ引越便",
    features: "ヤマト運輸連携・小荷物OK・全国対応",
    featureDetail: "クロネコヤマトグループの引越しサービス。少量の荷物を格安で運べる「ミニ引越便」や「らくらくパック」が特徴的",
    payment: "クレカ・現金・コンビニ払い対応",
    items: "全国対応",
    pros: [
      "少量の荷物を格安で運べる",
      "ヤマト運輸グループの安心感",
      "全国どこでも対応",
      "ダンボール無料提供",
      "当日受付も可能",
      "保険・補償が充実",
    ],
    cons: [
      "家族向けプランは他社が有利",
      "大型家具の運搬は割高",
      "料金変動が大きい時期あり",
    ],
    bestFor:
      "荷物が少ない一人暮らしの方、近距離の引越しを格安で済ませたい方におすすめ。ヤマト運輸グループの信頼感と小荷物対応が魅力です。",
    url: "https://www.008008.jp/",
    badge: "小荷物対応",
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
    question: "引越し料金はどれくらいが相場ですか？",
    answer: "単身・通常期・同一都道府県内で3〜5万円、家族4人・通常期・同一都道府県内で8〜15万円が目安です。3〜4月の繁忙期は1.5〜2倍に跳ね上がることも。長距離引越しや大型家具が多い場合はさらに高くなります。相場を知るには一括見積もりサイトが便利です。",
  },
  {
    question: "一括見積もりサイトを使うべきですか？",
    answer: "はい、強くおすすめします。複数社から見積もりを取ることで最安値が分かり、値引き交渉の材料にもなります。SUUMO引越しや引越し侍などの一括見積もりサイトを使えば、一度の入力で複数社から連絡が来ます。ただし電話が多くかかってくる点には注意が必要です。",
  },
  {
    question: "引越しが安い時期はいつですか？",
    answer: "通常期の6月・11月・1月が最も安く、特に平日・大安以外の午後便がお得です。逆に3月下旬〜4月上旬は繁忙期で料金が1.5〜2倍に跳ね上がります。可能なら繁忙期を避け、土日祝を避けて平日に引越しするのが節約のコツです。",
  },
  {
    question: "単身パックと通常引越しはどちらがお得ですか？",
    answer: "荷物が少ない（専用ボックスに収まる）なら単身パックが圧倒的に安いです。日通の単身パックSなら1.5万円〜、Lなら2万円〜が相場。ただし専用ボックスに入らない大型家具や大量の荷物がある場合は通常プランの方がお得になることもあります。",
  },
  {
    question: "値引き交渉はどれくらいできますか？",
    answer: "複数社の相見積もりを取り、「他社はこの金額でした」と伝えることで20〜30%の値引きも可能です。特にアリさんマーク引越社など値引き交渉に前向きな業者は交渉しやすい傾向。訪問見積もりの最終決定を後日にすることも交渉力UPのコツです。",
  },
  {
    question: "不用品の処分はどうすればいいですか？",
    answer: "引越し業者が不用品回収を有料オプションで対応している場合があります（サカイ・アート等）。自治体の粗大ごみ回収・リサイクルショップ・ジモティなどを併用すれば処分費用を抑えられます。家電4品目はリサイクル券が必要なので、業者に依頼するのが楽です。",
  },
];

export default function MovingCompanyComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "引越し業者比較おすすめ5選", url: `${siteConfig.url}/guide/moving-company-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>引越し業者比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">生活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】引越し業者比較おすすめ5選｜料金・サービス・一括見積もりを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「引越し業者はどこを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの引越し業者5選（サカイ・アート・アリさん・日本通運・ヤマトホームコンビニエンス）を料金・サービス・単身パックの有無で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-green-700 dark:text-green-300">品質重視 → サカイ引越センター</span>（業界No.1）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">女性安心 → アート引越センター</span>（レディースパック）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">コスパ重視 → アリさんマーク</span>（値引き交渉可）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">単身者 → 日本通運</span>（単身パック最安）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">小荷物 → ヤマトホーム</span>（ミニ引越便）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-move" className="text-primary hover:underline">1. 引越し業者選びの重要性</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 引越し業者5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各業者の詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 引越し業者の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-move" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 引越し業者選びの重要性</h2>
        <p className="text-muted leading-relaxed mb-4">業者選びで料金が2倍以上変わることも。品質と料金のバランスが重要です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "業者で料金が大きく変わる", desc: "同じ条件でも業者によって料金が2倍以上変わることも。複数社の見積もりで最安値を見つけましょう。" },
            { icon: "&#128736;", title: "作業品質に差がある", desc: "家具の傷・破損・紛失など、業者の品質によりトラブルのリスクが大きく変わります。" },
            { icon: "&#128197;", title: "繁忙期は要予約", desc: "3〜4月は繁忙期で予約が取りにくく料金も高騰。早めの予約が必須です。" },
            { icon: "&#9989;", title: "保険・補償が安心", desc: "大手業者は家財保険・補償制度が充実。万が一のトラブルでも安心です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 引越し業者5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">サカイ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">アート</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">アリさん</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">日通</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">ヤマト</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "単身料金", r: "30,000円", s: "35,000円", n: "25,000円", c: "15,000円", a: "17,000円" },
                { label: "家族料金", r: "80,000円", s: "85,000円", n: "70,000円", c: "60,000円", a: "-" },
                { label: "品質", r: "◎", s: "◎", n: "○", c: "○", a: "○" },
                { label: "単身パック", r: "なし", s: "なし", n: "なし", c: "あり", a: "あり" },
                { label: "特徴", r: "作業品質", s: "女性安心", n: "値引き可", c: "単身最安", a: "小荷物" },
                { label: "対応", r: "全国", s: "全国", n: "全国", c: "全国", a: "全国" },
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
        <p className="text-xs text-muted mt-2">※ 料金は通常期の目安です。時期・距離・荷物量により変動します。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各業者の詳細レビュー</h2>
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
            { scene: "家具を大切に扱ってほしい", app: "サカイ引越センター", reason: "業界売上No.1で作業品質が業界トップクラス。高価な家具・家電も安心して任せられます。" },
            { scene: "一人暮らしの女性で防犯面が心配", app: "アート引越センター", reason: "女性スタッフのみで対応する「レディースパック」があり、安心して引越しできます。" },
            { scene: "料金を抑えたいが大手の安心感も欲しい", app: "アリさんマークの引越社", reason: "大手の中でも値引き交渉に応じやすく、経済パックなど低価格プランも豊富です。" },
            { scene: "一人暮らしで荷物が少ない", app: "日本通運", reason: "単身パックS/Lが業界最安クラス。専用ボックスに収まれば長距離でも定額で安心です。" },
            { scene: "少量の荷物だけ運びたい", app: "ヤマトホームコンビニエンス", reason: "ミニ引越便・らくらくパックで少量の荷物を格安で運べます。ヤマト運輸の信頼感も◎。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 引越し業者の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "必ず3社以上から相見積もり", desc: "業者により料金が2倍以上変わることも。一括見積もりサイトで最低3社の見積もりを取り、最安値と交渉材料にしましょう。" },
            { num: "2", title: "繁忙期を避ける", desc: "3〜4月の繁忙期は料金が1.5〜2倍。可能なら6月・11月・1月の通常期を狙いましょう。" },
            { num: "3", title: "単身者は単身パックを活用", desc: "荷物が少ないなら日通・ヤマトの単身パックが最安。専用ボックスに収まるか確認しましょう。" },
            { num: "4", title: "口コミ・評判を確認", desc: "料金だけでなく作業品質・スタッフ対応の口コミもチェック。SNSや評価サイトを活用しましょう。" },
            { num: "5", title: "補償・保険の確認", desc: "家財保険・補償制度が整っているかを確認。大手業者なら基本的に安心です。" },
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
            引越し業者は品質と料金のバランスで選ぶのが基本です。品質ならサカイ、女性安心ならアート、コスパならアリさん、単身者なら日通、小荷物ならヤマトがおすすめ。必ず3社以上から相見積もりを取り、繁忙期を避けて予約しましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・品質重視なら「サカイ引越センター」</li>
              <li>・一人暮らし女性は「アート」のレディースパック</li>
              <li>・単身者は「日通」の単身パックが最安</li>
              <li>・必ず3社以上から相見積もりを取る</li>
              <li>・3〜4月の繁忙期は避ける</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/moving-cost-detail-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors mb-6">
          <div className="text-sm font-bold text-primary mb-1">引越し費用詳細見積もりシミュレーターを使う</div>
          <p className="text-xs text-muted">距離・荷物量・時期で概算と見積もりレンジを確認</p>
        </Link>
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/hikari-fiber-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">光回線比較</span>
            <p className="text-xs text-muted mt-1">引越し先で契約する光回線を比較</p>
          </Link>
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">新生活におすすめのサーバー</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
