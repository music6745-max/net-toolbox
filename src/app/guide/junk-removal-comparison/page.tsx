import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】不用品回収業者比較おすすめ5選｜料金・対応エリア・サービスを徹底解説",
    description:
      "2026年最新の不用品回収業者を徹底比較。エコノバ・片付け堂・KADODE・ECOクリーン・不用品回収センターの料金とサービスを解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/junk-removal-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "エコノバ",
    type: "一括見積もり・全国対応",
    price: "軽トラ8,000円〜",
    plan: "見積無料／最大5社比較",
    features: "一括見積もり・最大5社比較・全国対応",
    featureDetail: "全国の不用品回収業者に一括で見積もり依頼ができるサービス。複数社の料金を比較して最安値で依頼できるため、コスト重視の方に人気です",
    payment: "現金・クレジットカード(業者による)",
    items: "全国対応",
    pros: [
      "最大5社一括見積もり",
      "料金を比較できる",
      "全国対応",
      "無料で利用可能",
      "業者選びが楽",
      "評判を確認できる",
    ],
    cons: [
      "業者の質にばらつき",
      "営業電話が来る場合",
      "提携業者に限定",
    ],
    bestFor: "料金をできるだけ抑えたい方、複数社を比較してから選びたい方におすすめです。",
    url: "https://eco-nova.com/",
    badge: "一括見積",
    color: "green",
  },
  {
    name: "片付け堂",
    type: "全国チェーン・定額制",
    price: "軽トラ9,800円〜",
    plan: "定額パック／不用品処分",
    features: "定額制・全国対応・追加料金なし",
    featureDetail: "全国に展開する不用品回収チェーン。軽トラ・2tトラックなど定額パック料金が分かりやすく、追加料金が発生しにくい安心感があります",
    payment: "現金・クレジットカード対応",
    items: "全国主要都市",
    pros: [
      "定額制で分かりやすい",
      "全国展開で安心",
      "追加料金が発生しにくい",
      "即日対応可能",
      "遺品整理にも対応",
      "女性スタッフ指名可",
    ],
    cons: [
      "最安ではない",
      "エリアによって対応不可",
      "繁忙期は予約が取りにくい",
    ],
    bestFor: "明朗会計で安心して依頼したい方、全国チェーンの安心感を求める方におすすめです。",
    url: "https://www.katazukedo.com/",
    badge: "定額制",
    color: "blue",
  },
  {
    name: "KADODE",
    type: "関東圏特化・低価格",
    price: "軽トラ9,800円〜",
    plan: "定額パック／買取併用",
    features: "買取併用で実質安い・関東対応",
    featureDetail: "関東圏を中心に展開する不用品回収業者。買取可能な品物は買取して回収費用と相殺できるため、実質的な費用を抑えられるのが強みです",
    payment: "現金・クレジットカード対応",
    items: "関東1都6県",
    pros: [
      "買取併用で実質安い",
      "即日対応OK",
      "料金明瞭",
      "遺品整理・生前整理対応",
      "階段作業も追加料金なし",
      "見積もり無料",
    ],
    cons: [
      "対応エリア限定",
      "買取査定の時間がかかる",
      "繁忙期は混雑",
    ],
    bestFor: "関東圏在住で買取可能な品物も一緒に処分したい方、コスパ重視の方におすすめです。",
    url: "https://kadode-c.com/",
    badge: "買取併用",
    color: "orange",
  },
  {
    name: "ECOクリーン",
    type: "関東圏・スピード対応",
    price: "軽トラ9,000円〜",
    plan: "即日回収／定額パック",
    features: "即日対応・深夜OK・関東対応",
    featureDetail: "関東エリアで24時間受付・即日対応に強い不用品回収業者。急な引越しや退去にも対応でき、深夜帯の回収サービスもあります",
    payment: "現金・クレジットカード対応",
    items: "関東エリア",
    pros: [
      "24時間受付",
      "即日対応可能",
      "深夜対応OK",
      "定額パック料金",
      "遺品整理対応",
      "見積もり無料",
    ],
    cons: [
      "関東エリア限定",
      "深夜は割増料金",
      "繁忙期は対応遅め",
    ],
    bestFor: "急ぎで不用品を処分したい方、夜間帯に回収を依頼したい方におすすめです。",
    url: "https://ecoclean.jp/",
    badge: "即日対応",
    color: "purple",
  },
  {
    name: "不用品回収センター",
    type: "全国対応・実績豊富",
    price: "軽トラ8,000円〜",
    plan: "定額パック／遺品整理",
    features: "全国対応・遺品整理士在籍",
    featureDetail: "全国に対応し遺品整理士が在籍する不用品回収業者。個人の部屋から事務所の大掃除、遺品整理まで幅広く対応しているのが特徴です",
    payment: "現金・クレジットカード対応",
    items: "全国主要エリア",
    pros: [
      "全国対応",
      "遺品整理士在籍",
      "定額パックあり",
      "法人対応も可",
      "即日対応可能",
      "実績豊富",
    ],
    cons: [
      "料金は標準的",
      "地域により対応差",
      "繁忙期の対応遅延",
    ],
    bestFor: "遺品整理や法人対応が必要な方、全国エリアで信頼できる業者を探している方におすすめです。",
    url: "https://www.fuyouhin-center.com/",
    badge: "遺品整理",
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
    question: "不用品回収の料金相場はどれくらいですか？",
    answer: "軽トラック1台分で8,000円〜15,000円、2tトラック1台分で30,000円〜50,000円程度が相場です。品目・量・エリアによって変動します。",
  },
  {
    question: "即日回収は可能ですか？",
    answer: "多くの業者で即日対応が可能ですが、繁忙期や土日は予約が取りにくい場合があります。急ぎなら複数社に問い合わせましょう。",
  },
  {
    question: "買取も一緒にお願いできますか？",
    answer: "KADODEなど買取併用型の業者なら可能です。買取金額を回収費用と相殺できるため、実質的な費用を抑えられます。",
  },
  {
    question: "悪徳業者の見分け方は？",
    answer: "無料を謳って後から高額請求する業者、古物商許可や一般廃棄物収集運搬許可を持たない業者は避けましょう。見積もり書を必ず取得することが大切です。",
  },
  {
    question: "見積もりは無料ですか？",
    answer: "ほとんどの業者が見積もりを無料で行っています。複数社から見積もりを取って比較するのがおすすめです。",
  },
  {
    question: "家電リサイクル法対象品目も回収可能ですか？",
    answer: "エアコン・テレビ・冷蔵庫・洗濯機などは家電リサイクル法の対象となり、別途リサイクル料金がかかります。業者が適切に処理してくれるか確認しましょう。",
  },
];

export default function JunkRemovalComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "不用品回収業者比較おすすめ5選", url: `${siteConfig.url}/guide/junk-removal-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>不用品回収業者比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">生活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】不用品回収業者比較おすすめ5選｜料金・対応エリア・サービスを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「引越しで不用品を一気に処分したい」「信頼できる業者を知りたい」そんな疑問にお答えします。この記事では、2026年現在おすすめの不用品回収業者5選（エコノバ・片付け堂・KADODE・ECOクリーン・不用品回収センター）を料金・対応エリア・サービスで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-green-700 dark:text-green-300">料金重視 → エコノバ</span>（一括見積もり）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">安心感重視 → 片付け堂</span>（全国チェーン）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">買取併用 → KADODE</span>（関東圏）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">即日対応 → ECOクリーン</span>（24時間受付）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">遺品整理 → 不用品回収センター</span>（遺品整理士）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why" className="text-primary hover:underline">1. 不用品回収業者を使うメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 不用品回収5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各業者の詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 不用品回収業者の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 不用品回収業者を使うメリット</h2>
        <p className="text-muted leading-relaxed mb-4">自治体の粗大ゴミ回収は時間や品目に制約があります。不用品回収業者なら大量の不用品を一度に処分でき、時間の節約にもつながります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128230;", title: "一度に大量処分", desc: "粗大ゴミ・家電・家具など種類を問わず、一度に処分できるのが最大のメリットです。" },
            { icon: "&#9201;", title: "時間の節約", desc: "運び出しから処分まで業者に任せられるため、重い家具を自分で運ぶ必要がありません。" },
            { icon: "&#128293;", title: "即日対応可能", desc: "急な引越しや退去にも即日対応してくれる業者が多く、スケジュールに合わせやすい。" },
            { icon: "&#128176;", title: "買取併用でお得", desc: "買取可能な品物は回収費用と相殺できるため、実質的な費用を抑えられます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 不用品回収5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">エコノバ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">片付け堂</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">KADODE</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ECO</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">不用品C</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "軽トラ料金", r: "8000円〜", s: "9800円〜", n: "9800円〜", c: "9000円〜", a: "8000円〜" },
                { label: "対応エリア", r: "全国", s: "全国", n: "関東", c: "関東", a: "全国主要" },
                { label: "即日対応", r: "業者次第", s: "○", n: "○", c: "◎", a: "○" },
                { label: "買取", r: "業者次第", s: "△", n: "◎", c: "△", a: "△" },
                { label: "遺品整理", r: "△", s: "○", n: "○", c: "○", a: "◎" },
                { label: "特徴", r: "一括見積", s: "定額制", n: "買取併用", c: "24h受付", a: "遺品整理" },
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
            { scene: "料金をとにかく抑えたい方", app: "エコノバ", reason: "複数社一括見積もりで最安値の業者を選べます。" },
            { scene: "明朗会計で安心したい方", app: "片付け堂", reason: "全国チェーンで定額パックが分かりやすく追加料金の心配が少ない。" },
            { scene: "買取可能な品物もある関東圏の方", app: "KADODE", reason: "買取併用で実質費用を抑えられます。" },
            { scene: "急いで回収してほしい方", app: "ECOクリーン", reason: "24時間受付で即日・深夜対応も可能です。" },
            { scene: "遺品整理・生前整理が必要な方", app: "不用品回収センター", reason: "遺品整理士が在籍しており丁寧な対応が期待できます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 不用品回収業者の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "許可証の有無を確認", desc: "一般廃棄物収集運搬許可・古物商許可を持つ業者を選びましょう。無許可業者は不法投棄のリスクがあります。" },
            { num: "2", title: "料金体系の分かりやすさ", desc: "見積もりに全費用が含まれているか、追加料金の有無を事前に確認しましょう。" },
            { num: "3", title: "複数社で相見積もり", desc: "最低でも2〜3社から見積もりを取って比較することで適正価格が分かります。" },
            { num: "4", title: "口コミ・評判を確認", desc: "実際の利用者の口コミを見て、対応の質やトラブルの有無を確認しましょう。" },
            { num: "5", title: "買取サービスの有無", desc: "買取可能な品物があるなら買取併用型の業者を選ぶと費用を抑えられます。" },
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
            不用品回収業者は料金・対応エリア・サービス内容で選ぶのが基本です。料金重視ならエコノバ、安心感なら片付け堂、買取併用ならKADODE、即日対応ならECOクリーン、遺品整理なら不用品回収センターがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・料金重視なら「エコノバ」の一括見積もり</li>
              <li>・全国チェーンの安心なら「片付け堂」</li>
              <li>・買取併用で実質安いのは「KADODE」</li>
              <li>・即日対応なら「ECOクリーン」</li>
              <li>・遺品整理は「不用品回収センター」</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/moving-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">引越し業者比較</span>
            <p className="text-xs text-muted mt-1">引越しと一緒に不用品整理</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車買取サービス比較</span>
            <p className="text-xs text-muted mt-1">乗らなくなった車の処分に</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
