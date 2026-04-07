import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】自動車保険比較おすすめ5選｜保険料・補償・ロードサービスを徹底解説",
    description:
      "2026年最新の自動車保険を徹底比較。ソニー損保・SBI損保・アクサダイレクト・三井ダイレクト・チューリッヒの保険料・補償・特徴を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/car-insurance-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "ソニー損保",
    type: "走行距離連動型・人気No.1",
    price: "年間20,000円〜",
    plan: "走った分だけ／ロードサービス無料",
    features: "走行距離連動・無料ロードサービス・顧客満足度上位",
    featureDetail: "「走った分だけ」がコンセプトの走行距離連動型自動車保険。年間走行距離が短い人ほど保険料が安くなる仕組みで、満足度ランキングでも常に上位。事故対応も充実",
    payment: "クレジットカード・口座振替対応",
    items: "全国対応・継続率92%以上",
    pros: [
      "走行距離が少ないと安い",
      "ロードサービスが無料付帯",
      "事故対応の評判が高い",
      "顧客満足度ランキング上位",
      "継続率92%以上の安心感",
      "Web申込みで割引",
    ],
    cons: [
      "走行距離が多いと高い",
      "対面相談はできない",
      "代理店型と比べ自己責任",
    ],
    bestFor: "通勤や週末利用がメインで年間走行距離が少ない方、満足度を重視する方におすすめ。事故対応とロードサービスの充実度が魅力です。",
    url: "https://www.sonysonpo.co.jp/auto/",
    badge: "満足度上位",
    color: "blue",
  },
  {
    name: "SBI損保",
    type: "業界最安水準・ネット完結",
    price: "年間18,000円〜",
    plan: "ネット割最大14,500円",
    features: "業界最安水準・ネット割引大・シンプル",
    featureDetail: "業界最安水準の保険料を実現するネット型自動車保険。インターネット申込みで最大14,500円割引と業界トップクラスの割引額。シンプルでわかりやすい補償プラン",
    payment: "クレジットカード・口座振替対応",
    items: "全国対応",
    pros: [
      "業界最安水準の保険料",
      "ネット割最大14,500円",
      "シンプルでわかりやすい",
      "事故対応24時間365日",
      "ロードサービス標準付帯",
      "継続割引もあり",
    ],
    cons: [
      "対面相談はできない",
      "オプションは少なめ",
      "事故対応の口コミは賛否",
    ],
    bestFor: "とにかく保険料を安くしたい方、シンプルな補償で十分な方におすすめ。インターネットで完結したい方に最適です。",
    url: "https://www.sbisonpo.co.jp/",
    badge: "業界最安",
    color: "green",
  },
  {
    name: "アクサダイレクト",
    type: "外資系大手・カスタマイズ性",
    price: "年間19,000円〜",
    plan: "リスク細分型／カスタマイズ可",
    features: "外資系大手・リスク細分型・選べる補償",
    featureDetail: "外資系大手AXAグループの自動車保険。リスク細分型で年齢・等級・使用状況によって保険料が変動。補償内容を細かくカスタマイズできるため自分に最適なプランが作れます",
    payment: "クレジットカード・口座振替対応",
    items: "全国対応",
    pros: [
      "外資系大手で安心感",
      "リスク細分型で適正価格",
      "補償をカスタマイズ可能",
      "ネット割引が大きい",
      "ロードサービス充実",
      "事故対応も24時間",
    ],
    cons: [
      "プラン選択がやや複雑",
      "若年層は割高な場合",
      "対面相談は不可",
    ],
    bestFor: "補償内容を細かくカスタマイズしたい方、外資系大手の安心感を重視する方におすすめ。自分に必要な補償だけ選びたい方に最適です。",
    url: "https://www.axa-direct.co.jp/",
    badge: "外資系大手",
    color: "blue",
  },
  {
    name: "三井ダイレクト損保",
    type: "三井系・バランス型",
    price: "年間19,500円〜",
    plan: "ネット割最大10,500円",
    features: "三井系大手・バランス補償・継続割引",
    featureDetail: "三井住友海上グループのダイレクト型自動車保険。大手損保のノウハウとネット型の安さを両立。無料ロードサービスや事故対応の評判も良く、バランスの取れた選択肢",
    payment: "クレジットカード・口座振替対応",
    items: "全国対応",
    pros: [
      "三井系大手の安心感",
      "ネット割引最大10,500円",
      "ロードサービス無料付帯",
      "事故対応の評価が高い",
      "継続割引もあり",
      "弁護士費用特約も付帯可",
    ],
    cons: [
      "最安水準ではない",
      "対面相談は基本不可",
      "プラン数はやや多い",
    ],
    bestFor: "大手の安心感と価格のバランスを重視する方におすすめ。事故対応の評判も良く、初めてダイレクト型を選ぶ方にも安心です。",
    url: "https://www.mitsui-direct.co.jp/",
    badge: "バランス型",
    color: "orange",
  },
  {
    name: "チューリッヒ",
    type: "外資系・カスタマイズ豊富",
    price: "年間19,000円〜",
    plan: "ネット割最大21,000円",
    features: "外資系大手・割引大・スーパー自動車保険",
    featureDetail: "スイス本社の外資系大手チューリッヒの自動車保険。ネット割引最大21,000円と業界トップクラスの割引額。スーパー自動車保険ではロードサービスや弁護士費用も充実",
    payment: "クレジットカード・口座振替対応",
    items: "全国対応",
    pros: [
      "ネット割最大21,000円",
      "外資系大手で安心感",
      "ロードサービス充実",
      "事故対応24時間365日",
      "弁護士費用特約も付帯可",
      "プラン選択肢が豊富",
    ],
    cons: [
      "プラン選択が複雑な場合",
      "対面相談はできない",
      "オプション選びが難しい",
    ],
    bestFor: "割引額を最大にしたい方、外資系大手で補償もしっかり選びたい方におすすめ。プランを比較してじっくり選びたい方に最適です。",
    url: "https://www.zurich.co.jp/car/",
    badge: "割引最大",
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
    question: "ダイレクト型と代理店型はどちらがお得ですか？",
    answer: "保険料は一般的にダイレクト型の方が30〜50%安くなります。代理店の中間マージンがないためです。事故対応はどちらも24時間対応で大差ありませんが、対面で相談したい方は代理店型が向いています。",
  },
  {
    question: "ネット申込み割引はどれくらいお得ですか？",
    answer: "会社によって異なりますが、10,000円〜21,000円程度の割引が一般的です。チューリッヒは最大21,000円、SBI損保は14,500円と業界トップクラス。Web申込みするだけで適用されるのでお得です。",
  },
  {
    question: "等級は他社に乗り換えても引き継げますか？",
    answer: "はい、等級は他社に乗り換えても引き継げます。20等級まで割引が大きくなっていくので、長く無事故を続けるほどお得です。乗り換え時は等級証明書の提出が不要なケースも増えています。",
  },
  {
    question: "ロードサービスは無料で付いていますか？",
    answer: "ほとんどのダイレクト型自動車保険では無料でロードサービスが標準付帯されています。レッカー移動・バッテリー上がり・パンク対応・キー閉じ込みなど一般的なトラブルに対応してくれます。",
  },
  {
    question: "弁護士費用特約は必要ですか？",
    answer: "もらい事故の場合、自分の保険会社は示談交渉できないため弁護士費用特約があると安心です。月額数百円で付帯できるため、追加することをおすすめします。家族の他の車両事故にも適用される特約もあります。",
  },
  {
    question: "保険の見直しはいつすればいいですか？",
    answer: "更新月の1〜2ヶ月前が最適です。複数社の見積もりを取って比較し、現在の保険より安く同等以上の補償なら乗り換えを検討しましょう。一括見積もりサイトを使うと効率的に比較できます。",
  },
];

export default function CarInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車保険比較おすすめ5選", url: `${siteConfig.url}/guide/car-insurance-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>自動車保険比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">保険</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】自動車保険比較おすすめ5選｜保険料・補償・ロードサービスを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「自動車保険を安くしたい」「どの保険を選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめのダイレクト型自動車保険5選（ソニー損保・SBI損保・アクサダイレクト・三井ダイレクト・チューリッヒ）を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">満足度重視 → ソニー損保</span>（走行距離連動）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">最安重視 → SBI損保</span>（業界最安水準）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">外資系 → アクサダイレクト</span>（カスタマイズ）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">バランス型 → 三井ダイレクト</span>（大手安心）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">割引大 → チューリッヒ</span>（最大21,000円）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-direct" className="text-primary hover:underline">1. ダイレクト型のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 自動車保険5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 自動車保険の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-direct" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ダイレクト型自動車保険のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ダイレクト型は代理店を介さずネットで直接契約できる自動車保険です。中間マージンがないため、代理店型より大幅に保険料が安くなります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "保険料が30〜50%安い", desc: "代理店の中間マージンがないため、同じ補償内容でもダイレクト型は30〜50%安くなるケースが多くあります。" },
            { icon: "&#128241;", title: "Webで簡単手続き", desc: "見積もり・申込み・更新などすべてWebで完結。24時間いつでも手続きできて便利です。" },
            { icon: "&#127881;", title: "ネット申込み割引", desc: "Web申込みで10,000円〜21,000円もの割引が受けられます。電話や郵送より大幅にお得です。" },
            { icon: "&#128737;", title: "事故対応も24時間", desc: "ダイレクト型でも事故対応は24時間365日。ロードサービスも標準付帯で安心です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 自動車保険5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">ソニー</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">SBI</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">アクサ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">三井</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">チューリッヒ</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "最安料金", r: "20,000円〜", s: "18,000円〜", n: "19,000円〜", c: "19,500円〜", a: "19,000円〜" },
                { label: "ネット割", r: "あり", s: "14,500円", n: "あり", c: "10,500円", a: "21,000円" },
                { label: "ロードサービス", r: "無料", s: "無料", n: "無料", c: "無料", a: "無料" },
                { label: "事故対応", r: "高評価", s: "標準", n: "標準", c: "高評価", a: "標準" },
                { label: "特徴", r: "走行距離", s: "業界最安", n: "細分型", c: "三井系", a: "割引大" },
                { label: "おすすめ", r: "満足度", s: "節約", n: "外資系", c: "バランス", a: "割引重視" },
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
        <p className="text-xs text-muted mt-2">※ 数値は2026年4月時点の情報です。保険料は条件により変動します。各サービスの公式情報を必ずご確認ください。</p>
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
            { scene: "年間走行距離が短い人", app: "ソニー損保", reason: "走行距離連動型で走った分だけ支払うため、週末ドライバーや通勤距離が短い方に最適です。" },
            { scene: "とにかく保険料を最安に", app: "SBI損保", reason: "業界最安水準の料金とネット割14,500円の組み合わせで、コストを限界まで抑えられます。" },
            { scene: "補償をカスタマイズしたい", app: "アクサダイレクト", reason: "リスク細分型で必要な補償だけ選択可能。外資系大手の安心感もあります。" },
            { scene: "大手安心とバランス", app: "三井ダイレクト損保", reason: "三井系大手のノウハウとネット型の安さを両立。事故対応の評判も良好です。" },
            { scene: "割引額を最大にしたい", app: "チューリッヒ", reason: "ネット割引最大21,000円と業界トップクラス。スーパー自動車保険なら補償も充実します。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 自動車保険の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "必要な補償内容を確認", desc: "対人・対物賠償は無制限が基本。車両保険・人身傷害・搭乗者傷害も自分の状況に合わせて選びましょう。" },
            { num: "2", title: "複数社の見積もりを比較", desc: "同じ条件でも会社によって保険料に2〜3万円以上の差が出ることがあります。最低3社は比較しましょう。" },
            { num: "3", title: "ロードサービスの内容", desc: "レッカー距離・バッテリー対応・宿泊費など、いざという時のサービス内容を確認しておきましょう。" },
            { num: "4", title: "事故対応の評判", desc: "保険会社選びでは事故対応の評価も重要。口コミサイトや満足度ランキングをチェックしましょう。" },
            { num: "5", title: "弁護士費用特約も検討", desc: "もらい事故時に保険会社は示談交渉できないため、弁護士費用特約は付けておくのがおすすめです。" },
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
            自動車保険は補償内容と保険料のバランスで選ぶのが基本です。満足度重視ならソニー損保、最安ならSBI損保、割引大ならチューリッヒがおすすめです。必ず複数社で見積もりを取りましょう。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・走行距離が短いなら「ソニー損保」</li>
              <li>・最安なら「SBI損保」</li>
              <li>・割引最大は「チューリッヒ」（21,000円）</li>
              <li>・大手安心なら「三井ダイレクト」</li>
              <li>・必ず複数社で見積もり比較を</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">生命保険・医療保険も見直し</p>
          </Link>
          <Link href="/guide/pet-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ペット保険比較</span>
            <p className="text-xs text-muted mt-1">家族の備えを総合的に検討</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
