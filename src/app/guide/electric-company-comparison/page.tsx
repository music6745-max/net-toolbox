import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】電力会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説",
    description:
      "2026年最新の新電力を徹底比較。Looopでんき・ENEOSでんき・楽天でんき・auでんき・TERASELでんきの料金・特典・切り替え方法を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/electric-company-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "Looopでんき",
    type: "市場連動型・基本料金0円",
    price: "基本料金0円",
    plan: "スマートタイムONE／解約金なし",
    features: "基本料金0円・市場連動型・再エネ対応",
    featureDetail: "基本料金が0円で使った分だけ支払う分かりやすい料金体系。市場連動型のため深夜や休日の電気料金が安くなる特徴があります。再生可能エネルギー由来プランも選択可能",
    payment: "クレジットカード・口座振替対応",
    items: "提供エリアは全国（沖縄・離島除く）",
    pros: [
      "基本料金0円でシンプル",
      "解約金・違約金なし",
      "再エネ100%プランも選択可",
      "Webで完結する手続き",
      "深夜・休日の料金が安い",
      "申込みから切替までスムーズ",
    ],
    cons: [
      "市場価格高騰時は料金が上がる",
      "ガスセット割は非対応",
      "ポイント還元は少なめ",
    ],
    bestFor: "基本料金を払いたくない方、昼間在宅の少ない方、再生可能エネルギーを使いたい方におすすめ。シンプルな料金体系で電気代を把握しやすいのが魅力です。",
    url: "https://looop-denki.com/",
    badge: "基本料0円",
    color: "green",
  },
  {
    name: "ENEOSでんき",
    type: "大手石油系・安定供給",
    price: "従量電灯B相当",
    plan: "Vプラン／2年とく2割",
    features: "大手安心・長期契約割引・ENEOSカード特典",
    featureDetail: "石油元売り大手ENEOSが提供する電力サービス。2年契約で料金が安くなる「2年とく2割」を用意。ENEOSカード払いでガソリン代も割引されるセット特典が魅力",
    payment: "クレジットカード・口座振替対応",
    items: "関東・関西・中部・東北・九州・北海道エリア",
    pros: [
      "大手企業で安心感がある",
      "2年契約で月額が安くなる",
      "ENEOSカード払いでガソリン割引",
      "市場連動型ではないので安定",
      "解約金は1,100円のみ",
      "電気使用量が多いほどお得",
    ],
    cons: [
      "引越しの多い方は解約金に注意",
      "基本料金は発生する",
      "一部エリアで未対応",
    ],
    bestFor: "電気使用量が多いファミリー世帯、ENEOSカードユーザー、安定した大手を選びたい方におすすめ。長期契約で大手の安心感と価格メリットを両立できます。",
    url: "https://www.eneos.co.jp/denki/",
    badge: "大手安心",
    color: "orange",
  },
  {
    name: "楽天でんき",
    type: "楽天ポイント還元型",
    price: "プランS／プランM",
    plan: "解約金なし／楽天SPU対象",
    features: "楽天ポイント還元・SPU対象・楽天ガスセット",
    featureDetail: "楽天グループが提供する電力サービス。電気料金200円につき1ポイントの楽天ポイントが貯まるほか、支払いをポイントで充当することも可能。SPU対象で楽天市場の買い物がお得に",
    payment: "クレジットカード・口座振替対応",
    items: "全国エリア対応（離島除く）",
    pros: [
      "楽天ポイントが貯まる・使える",
      "楽天SPUで市場買い物率UP",
      "楽天ガスとセットで更にお得",
      "解約金なし",
      "Webで簡単申込み",
      "楽天カード払いで更にポイント",
    ],
    cons: [
      "楽天経済圏外ではメリット減",
      "市場連動の影響を受けやすい",
      "電気使用量が少ないと割高な場合",
    ],
    bestFor: "楽天経済圏ユーザー、楽天カードをメインで使う方におすすめ。ポイント還元と楽天市場でのSPUアップでトータルコストを大幅に削減できます。",
    url: "https://energy.rakuten.co.jp/",
    badge: "楽天ポイント",
    color: "red",
  },
  {
    name: "auでんき",
    type: "au・UQユーザー向け",
    price: "でんきMプラン",
    plan: "解約金なし／Pontaポイント還元",
    features: "Pontaポイント還元・auセット割・でんきアプリ",
    featureDetail: "KDDIが提供する電力サービス。電気料金に応じて最大5%のPontaポイントが還元されるほか、auでんきアプリで使用量をリアルタイム確認可能。au／UQモバイルとのセット契約がお得",
    payment: "クレジットカード・口座振替対応",
    items: "全国エリア対応",
    pros: [
      "Pontaポイント最大5%還元",
      "auでんきアプリで見える化",
      "au・UQユーザーはセット特典",
      "解約金なし",
      "大手KDDIの安心感",
      "電気使用量が多いほどお得",
    ],
    cons: [
      "au以外だとメリットは限定的",
      "基本料金は発生する",
      "ポイント還元率は使用量で変動",
    ],
    bestFor: "au・UQモバイルユーザー、Pontaポイントを貯めている方に最適。使用量アプリで節電意識も高まり、家族全員で使えばよりお得になります。",
    url: "https://www.au.com/electricity/",
    badge: "au割引",
    color: "orange",
  },
  {
    name: "TERASELでんき",
    type: "伊藤忠系・選べる特典",
    price: "超TERASELプラン",
    plan: "1年契約／選べる特典",
    features: "Amazonギフト券・楽天ポイント・選べる特典",
    featureDetail: "伊藤忠エネクス系列の新電力サービス。契約時に楽天ポイント・Amazonギフト券・PayPayポイントなど複数の特典から好きなものを選択可能。大手企業グループで安定供給",
    payment: "クレジットカード・口座振替対応",
    items: "全国エリア対応（沖縄・離島除く）",
    pros: [
      "選べる契約特典が魅力",
      "伊藤忠グループで安心",
      "電気料金は大手電力より安い",
      "Webで完結する手続き",
      "1年契約で柔軟",
      "キャンペーン特典が豊富",
    ],
    cons: [
      "知名度はやや低め",
      "ガスセット割は非対応",
      "一部エリアで未対応",
    ],
    bestFor: "契約特典で好きなポイントを選びたい方、大手企業グループの安心感を求める方におすすめ。キャンペーン時に申し込むと特典が手厚くなります。",
    url: "https://terasel.jp/",
    badge: "選べる特典",
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
    question: "新電力に切り替えると停電しやすくなりますか？",
    answer: "いいえ、新電力に切り替えても電気の品質や安定性は変わりません。送電網は従来通り大手電力会社が管理しているため、停電リスクは同じです。新電力会社が万が一倒産しても、セーフティネットが機能して電気供給は継続されます。",
  },
  {
    question: "切り替えの手続きは面倒ですか？",
    answer: "とても簡単です。新しい電力会社のWebサイトから申し込むだけで、解約手続きや切替工事は新電力会社が代行してくれます。スマートメーター設置済みなら工事も不要。現在の検針票を用意すれば5〜10分で完了します。",
  },
  {
    question: "賃貸マンションでも切り替えできますか？",
    answer: "賃貸でも個別契約していれば自由に切り替えできます。ただし一括受電方式のマンションは切替不可です。管理会社や大家さんに確認してから申し込みましょう。切替時の工事もないので原状回復の心配もありません。",
  },
  {
    question: "市場連動型プランはお得ですか？",
    answer: "電力市場価格が安定している時期はお得ですが、燃料費高騰時は料金が急上昇するリスクがあります。夜間や休日の電気使用が多い家庭向き。固定型プランと比較して、自身の生活スタイルに合うかを確認しましょう。",
  },
  {
    question: "ガスとセットで契約するとお得ですか？",
    answer: "多くの新電力・新ガス会社がセット割を提供しており、月額数百円〜1,000円程度の割引が受けられます。ただし単体で比較した方が安い場合もあるため、セット前提で選ばず個別料金もチェックしましょう。",
  },
  {
    question: "解約金や違約金はかかりますか？",
    answer: "会社やプランによって異なります。Looopでんきや楽天でんきは解約金無料ですが、ENEOSでんきの2年契約プランは中途解約で1,100円の解約金が発生します。契約期間と解約金は必ず契約前に確認しましょう。",
  },
];

export default function ElectricCompanyComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "電力会社比較おすすめ5選", url: `${siteConfig.url}/guide/electric-company-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>電力会社比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">光熱費</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】電力会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「電気代を安くしたい」「どの新電力を選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの電力会社5選（Looopでんき・ENEOSでんき・楽天でんき・auでんき・TERASELでんき）を料金・特典・切り替え方法で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-green-700 dark:text-green-300">基本料0円なら → Looopでんき</span>（シンプル料金）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">大手安心なら → ENEOSでんき</span>（2年割引）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">楽天経済圏 → 楽天でんき</span>（SPU対象）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">auユーザー → auでんき</span>（Ponta還元）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">特典重視 → TERASELでんき</span>（選べる特典）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-shinden" className="text-primary hover:underline">1. 新電力のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 電力会社5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 電力会社の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-shinden" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 新電力のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">2016年の電力自由化以降、電力会社を自由に選べるようになり、従来の大手電力より安くなるケースが多くあります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "電気代を節約できる", desc: "新電力に切り替えるだけで年間数千円〜1万円以上の節約になるケースが多く、手続きも簡単です。" },
            { icon: "&#127881;", title: "ポイント還元や特典", desc: "楽天・Ponta・Amazonギフト券など、電気代に応じてポイントや特典がもらえるサービスが豊富です。" },
            { icon: "&#127807;", title: "再生可能エネルギー対応", desc: "CO2排出の少ない再エネ由来プランを選ぶことで、環境に優しい暮らしを実現できます。" },
            { icon: "&#128241;", title: "Webで使用量を確認", desc: "アプリやWebで電気使用量をリアルタイムで確認でき、節電意識も高まります。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 電力会社5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">Looop</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">ENEOS</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">楽天</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">au</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">TERASEL</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "基本料金", r: "0円", s: "あり", n: "あり", c: "あり", a: "あり" },
                { label: "契約期間", r: "なし", s: "2年", n: "なし", c: "なし", a: "1年" },
                { label: "解約金", r: "0円", s: "1,100円", n: "0円", c: "0円", a: "0円" },
                { label: "ポイント", r: "なし", s: "Tポイント", n: "楽天", c: "Ponta", a: "選べる" },
                { label: "ガスセット", r: "なし", s: "あり", n: "あり", c: "なし", a: "なし" },
                { label: "おすすめ", r: "シンプル派", s: "大手志向", n: "楽天ユーザー", c: "auユーザー", a: "特典重視" },
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
            { scene: "基本料金を払いたくない単身者", app: "Looopでんき", reason: "基本料金0円で使った分だけ支払うシンプルな料金体系。解約金もないので気軽に試せます。" },
            { scene: "電気使用量が多いファミリー世帯", app: "ENEOSでんき", reason: "使用量が多いほど割引が効き、2年契約で更に安くなります。大手の安心感も魅力です。" },
            { scene: "楽天経済圏で生活している方", app: "楽天でんき", reason: "電気料金で楽天ポイントが貯まり、SPUアップで楽天市場の買い物もお得になります。" },
            { scene: "au・UQモバイルユーザー", app: "auでんき", reason: "Pontaポイント最大5%還元と、auスマホとのセット契約でトータルで大幅節約できます。" },
            { scene: "契約特典を重視したい方", app: "TERASELでんき", reason: "楽天・Amazon・PayPayなど好きな特典を選択可能。大手伊藤忠グループで安心です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 電力会社の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "検針票で現在の使用量を確認", desc: "過去12ヶ月の使用量と料金を把握し、各社のシミュレーターで比較すれば正確な節約額がわかります。" },
            { num: "2", title: "ライフスタイルに合うプラン選び", desc: "昼間在宅が多いなら昼割、夜型なら深夜割、市場連動型は夜間使用が多い方に向いています。" },
            { num: "3", title: "ポイント還元や特典を比較", desc: "楽天・Ponta・Tポイントなど自分が貯めているポイントに合わせると実質的な節約効果が高まります。" },
            { num: "4", title: "契約期間と解約金を確認", desc: "引越し予定があるなら解約金無料プランを選びましょう。長期契約なら割引も大きくなります。" },
            { num: "5", title: "ガスセット割も検討", desc: "電気とガスをセットで契約すると月額数百円〜1,000円程度お得になるケースがあります。" },
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
            電力会社は使用量とライフスタイル、そして貯めているポイントで選ぶのが基本です。シンプルならLooopでんき、大手安心ならENEOSでんき、楽天ユーザーなら楽天でんき、auユーザーならauでんきがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・基本料0円なら「Looopでんき」</li>
              <li>・大手安心なら「ENEOSでんき」の2年割</li>
              <li>・楽天経済圏は「楽天でんき」</li>
              <li>・auユーザーは「auでんき」でPonta還元</li>
              <li>・切り替えはWebで5〜10分で完了</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/hikari-fiber-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">光回線比較</span>
            <p className="text-xs text-muted mt-1">ネット回線を見直して通信費節約</p>
          </Link>
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">スマホ料金を見直すならこちら</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
