import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】太陽光発電比較おすすめ5選｜価格・メーカー・売電を徹底解説",
    description:
      "2026年最新の太陽光発電サービスを徹底比較。タイナビ・ソーラーパートナーズ・グリエネ・ミツモア・エコ発の特徴・価格・メリットを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/solar-power-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "タイナビ",
    type: "一括見積もりサイト最大手",
    price: "完全無料",
    plan: "最大5社一括見積もり",
    features: "業界最大手・厳選350社・完全無料",
    featureDetail: "太陽光発電一括見積もりサイトの最大手。全国350社以上の優良施工会社から最大5社の見積もりを無料で取得可能。独自審査をクリアした業者のみ登録されており安心",
    payment: "見積もり無料・成約後の費用は施工会社次第",
    items: "全国対応",
    pros: [
      "業界最大手で実績豊富",
      "最大5社の一括見積もり",
      "厳選350社以上から選択",
      "完全無料で利用可能",
      "見積もり相談も無料",
      "悪徳業者を排除する審査",
    ],
    cons: [
      "営業電話が来る場合あり",
      "施工会社の選定は自分で",
      "最終契約は別途必要",
    ],
    bestFor: "初めて太陽光発電を検討する方、複数業者の価格を比較したい方におすすめ。最大手の安心感と豊富な選択肢で最適な業者を見つけられます。",
    url: "https://www.tainavi.com/",
    badge: "業界最大手",
    color: "orange",
  },
  {
    name: "ソーラーパートナーズ",
    type: "中間マージンなし・地域密着",
    price: "完全無料",
    plan: "地域優良業者を厳選紹介",
    features: "中間マージンなし・自社施工・厳選業者",
    featureDetail: "営業会社を経由せず、自社施工の地域優良業者を直接紹介するサービス。中間マージンが発生しないため価格が安く、施工品質も高いのが特徴。NHKなど多数メディアで紹介",
    payment: "見積もり無料",
    items: "全国対応",
    pros: [
      "中間マージンがなく安い",
      "自社施工の優良業者のみ",
      "厳しい審査をクリアした業者",
      "メディア紹介の実績",
      "アフターサポート充実",
      "完全無料で利用",
    ],
    cons: [
      "対応業者数はタイナビより少ない",
      "地域によっては選択肢限定",
      "見積もりは1〜3社程度",
    ],
    bestFor: "施工品質と価格のバランスを重視する方、中間マージンのない直接施工を希望する方におすすめ。長期的な安心感を求める方に最適です。",
    url: "https://www.solar-partners.jp/",
    badge: "中間マージン0",
    color: "green",
  },
  {
    name: "グリエネ",
    type: "見積もり比較サイト",
    price: "完全無料",
    plan: "最大5社一括見積もり",
    features: "厳選業者・最大100万円差・専任サポート",
    featureDetail: "全国の優良太陽光発電業者から最大5社の一括見積もりを取得できるサービス。業者によって最大100万円もの価格差が出ることもあり、しっかり比較することで大幅にコスト削減可能",
    payment: "完全無料",
    items: "全国対応",
    pros: [
      "最大100万円の価格差を発見",
      "専任スタッフのサポート付き",
      "厳選業者のみ登録",
      "完全無料で利用可能",
      "口コミ・評価で業者選び",
      "見積もり後のキャンセルOK",
    ],
    cons: [
      "営業電話が来る場合あり",
      "業者数はやや少なめ",
      "対応エリアの確認が必要",
    ],
    bestFor: "とにかく価格を安くしたい方、専任スタッフに相談しながら業者選びをしたい方におすすめ。価格差を徹底的に比較したい方に最適です。",
    url: "https://gri-ene.com/",
    badge: "最大100万円差",
    color: "blue",
  },
  {
    name: "ミツモア",
    type: "総合見積もりプラットフォーム",
    price: "完全無料",
    plan: "AIマッチング見積もり",
    features: "AIマッチング・口コミ豊富・幅広いサービス",
    featureDetail: "太陽光発電以外にも幅広いサービスを扱う総合見積もりサイト。AIによる最適マッチングで質問に答えるだけで見積もりを取得可能。利用者の口コミも豊富で業者選びの参考になります",
    payment: "完全無料",
    items: "全国対応",
    pros: [
      "AIマッチングで簡単",
      "口コミ・評価が豊富",
      "幅広いサービスに対応",
      "完全無料で利用",
      "メッセージで業者と直接連絡",
      "気軽に相見積もり可能",
    ],
    cons: [
      "太陽光専門ではない",
      "業者の質にばらつきあり",
      "業者数は地域で差がある",
    ],
    bestFor: "口コミを重視する方、AIマッチングで簡単に見積もりを取りたい方におすすめ。気軽に複数の業者と話してみたい方に最適です。",
    url: "https://meetsmore.com/",
    badge: "AIマッチング",
    color: "purple",
  },
  {
    name: "エコ発",
    type: "蓄電池も含めた総合見積もり",
    price: "完全無料",
    plan: "太陽光＋蓄電池一括見積もり",
    features: "蓄電池対応・卒FIT対応・専門相談員",
    featureDetail: "太陽光発電と蓄電池をセットで見積もり可能なサービス。卒FIT後の家庭にも適した提案ができ、自家消費型太陽光や蓄電池導入を検討する方にも最適。専門相談員がサポート",
    payment: "完全無料",
    items: "全国対応",
    pros: [
      "蓄電池とのセット見積もり",
      "卒FIT世帯にも最適",
      "専門相談員のサポート",
      "厳選業者のみ紹介",
      "完全無料で利用",
      "自家消費型の提案も可能",
    ],
    cons: [
      "業者数はやや少なめ",
      "知名度はタイナビより低い",
      "営業電話が来る場合あり",
    ],
    bestFor: "蓄電池とセットで導入を検討している方、卒FIT後の家庭、自家消費型を考えている方におすすめ。新しい時代の太陽光活用に最適です。",
    url: "https://www.ecohatsu.com/",
    badge: "蓄電池対応",
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
    question: "太陽光発電の初期費用はどれくらいかかりますか？",
    answer: "一般的な4kWシステムで100万円〜150万円程度が相場です。業者やメーカー、設置条件によって大きく異なるため、複数業者の見積もりを比較することが大切です。補助金を活用すると更に安くなります。",
  },
  {
    question: "投資回収には何年かかりますか？",
    answer: "一般的に8年〜12年程度で初期投資を回収できると言われています。電気代の節約効果と売電収入を合わせることで、長期的には数十万円〜100万円以上の利益が見込めます。",
  },
  {
    question: "雪国や曇りの多い地域でも発電できますか？",
    answer: "雪国でも問題なく発電可能で、雪国向けの設計や雪対策も進化しています。曇りの日は発電量が落ちますが、年間を通じてみれば想定発電量に達するケースが多くあります。",
  },
  {
    question: "賃貸でも太陽光発電を導入できますか？",
    answer: "賃貸物件では基本的に設置できません。ただし、最近は初期費用0円のリース型サービスや、ベランダ設置型の小型ソーラーパネルもあります。持ち家でない場合はこちらを検討しましょう。",
  },
  {
    question: "メンテナンスは必要ですか？",
    answer: "4年に1回程度の定期点検が推奨されています。費用は1回あたり1万円〜3万円程度。パネル自体は20年以上の耐用年数があり、パワーコンディショナーは10〜15年で交換が必要です。",
  },
  {
    question: "卒FIT後はどうすればいいですか？",
    answer: "売電単価が下がるため、自家消費を増やすか蓄電池を導入する方法があります。電気を貯めて夜間に使うことで、電気代の節約効果を高められます。蓄電池導入も併せて検討しましょう。",
  },
];

export default function SolarPowerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "太陽光発電比較おすすめ5選", url: `${siteConfig.url}/guide/solar-power-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>太陽光発電比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">エコ</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】太陽光発電比較おすすめ5選｜価格・メーカー・売電を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「太陽光発電を導入したい」「業者選びで失敗したくない」そんな方に向けて、2026年現在おすすめの太陽光発電一括見積もりサービス5選（タイナビ・ソーラーパートナーズ・グリエネ・ミツモア・エコ発）を価格・特徴・サポートで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-orange-700 dark:text-orange-300">業界最大手 → タイナビ</span>（350社以上）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">中間マージン0 → ソーラーパートナーズ</span>（自社施工）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">価格重視 → グリエネ</span>（最大100万円差）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">口コミ重視 → ミツモア</span>（AIマッチング）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">蓄電池セット → エコ発</span>（卒FIT対応）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-solar" className="text-primary hover:underline">1. 太陽光発電のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 一括見積もりサービス5社比較</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 業者の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-solar" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 太陽光発電のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">電気代高騰が続く現在、太陽光発電は家計の防衛手段として注目されています。長期的な経済メリットも大きく、環境にも優しい選択肢です。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128176;", title: "電気代を大幅に節約", desc: "自家消費で電気代が大幅に下がり、年間10万円〜20万円の節約も可能。電気代高騰時代の強い味方です。" },
            { icon: "&#128184;", title: "売電収入が得られる", desc: "余剰電力を電力会社に売ることで収入が得られます。FIT制度により10年間は固定価格での買取が保証されます。" },
            { icon: "&#127807;", title: "環境に優しい", desc: "CO2排出を削減し、地球温暖化対策に貢献できます。再生可能エネルギーで持続可能な暮らしを実現します。" },
            { icon: "&#128737;", title: "災害時の備えにも", desc: "停電時も自立運転モードで電気が使えるため、災害時の備えとしても安心。蓄電池併用で更に万全です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 一括見積もりサービス5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">タイナビ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">ソラパ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">グリエネ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ミツモア</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">エコ発</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "登録業者数", r: "350社+", s: "厳選", n: "厳選", c: "多数", a: "厳選" },
                { label: "見積もり数", r: "最大5社", s: "1〜3社", n: "最大5社", c: "複数", a: "複数" },
                { label: "費用", r: "無料", s: "無料", n: "無料", c: "無料", a: "無料" },
                { label: "特徴", r: "最大手", s: "中間0", n: "価格差", c: "口コミ", a: "蓄電池" },
                { label: "サポート", r: "充実", s: "充実", n: "専任", c: "標準", a: "専門員" },
                { label: "おすすめ", r: "初心者", s: "品質派", n: "節約派", c: "口コミ派", a: "卒FIT" },
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
            { scene: "初めて太陽光発電を検討する方", app: "タイナビ", reason: "業界最大手で350社以上の優良業者から最大5社の見積もりを取得できます。初心者でも安心です。" },
            { scene: "施工品質と長期保証を重視する方", app: "ソーラーパートナーズ", reason: "中間マージンがなく自社施工の優良業者のみ。価格と品質のバランスが優れています。" },
            { scene: "とにかく価格を安くしたい方", app: "グリエネ", reason: "業者により最大100万円もの価格差があり、専任スタッフのサポートで最適な業者を見つけられます。" },
            { scene: "口コミや評価を重視する方", app: "ミツモア", reason: "AIマッチングで簡単に見積もりが取れ、利用者の口コミも豊富で安心して業者選びができます。" },
            { scene: "蓄電池とセットで導入したい方", app: "エコ発", reason: "蓄電池とのセット見積もりに対応し、卒FIT後の家庭にも最適な提案が受けられます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 業者の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "必ず複数業者で相見積もり", desc: "業者によって価格に最大100万円の差が出ることもあります。最低3社以上の見積もりを比較しましょう。" },
            { num: "2", title: "施工実績と評判を確認", desc: "施工件数や口コミ、施工会社の運営年数をチェック。長く運営している会社ほど安心です。" },
            { num: "3", title: "保証内容を細かく確認", desc: "メーカー保証10年・出力保証25年・施工保証10年などが標準。保証内容と期間を必ず比較しましょう。" },
            { num: "4", title: "アフターサポート体制", desc: "故障時の対応スピードや定期メンテナンスの有無は長期運用に必須。連絡先や対応時間も確認を。" },
            { num: "5", title: "補助金制度を活用", desc: "国や自治体の補助金を活用すれば導入コストを大幅に削減できます。業者に相談して最適な制度を確認。" },
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
            太陽光発電は業者選びで価格・品質が大きく変わります。必ず複数の見積もりを取得し、保証内容やアフターサポートを比較しましょう。一括見積もりサイトを活用すれば効率的に最適な業者を見つけられます。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・初心者は「タイナビ」で業者選び</li>
              <li>・品質重視なら「ソーラーパートナーズ」</li>
              <li>・価格重視なら「グリエネ」</li>
              <li>・蓄電池セットなら「エコ発」</li>
              <li>・必ず複数見積もりで価格比較を</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">電気料金プランも一緒に見直し</p>
          </Link>
          <Link href="/guide/gas-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ガス会社比較</span>
            <p className="text-xs text-muted mt-1">光熱費全体を最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
