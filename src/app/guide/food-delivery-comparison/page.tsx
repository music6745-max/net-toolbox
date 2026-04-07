import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】食材宅配サービス比較おすすめ5選｜料金・品質・配送エリアを徹底解説",
    description:
      "2026年最新の食材宅配サービスを徹底比較。Oisix・らでぃっしゅぼーや・パルシステム・コープデリ・ヨシケイの料金・品質・配送エリアを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/food-delivery-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "Oisix（オイシックス）",
    type: "ミールキット・有機野菜",
    price: "週5,000円〜（おまかせ）",
    plan: "おいしっくすくらぶ（年会費・入会金無料）",
    features: "Kit Oisix（20分ミールキット）・有機野菜・厳選食材",
    featureDetail: "20分で2品作れるKit Oisixが大人気。有機野菜・無添加食品にこだわり、独自の安全基準で厳選。お試しセットも豊富",
    delivery: "全国宅配対応（ヤマト運輸）",
    safety: "独自の安全基準で農薬を厳しく管理",
    pros: [
      "Kit Oisixで20分で2品作れる時短効果",
      "有機野菜・無添加食品の品質が高い",
      "全国配送対応（離島除く）",
      "お試しセットがお得（最大75%オフ）",
      "週ごとに購入量を調整可能",
      "妊娠中・育児中の特別プランあり",
    ],
    cons: [
      "他社より価格がやや高め",
      "送料がかかる（一定額以上で無料）",
      "週次プランの選択肢が複雑",
    ],
    bestFor:
      "共働き家庭で時短調理をしたい方、有機野菜にこだわりたい方に最適。Kit Oisixは料理が苦手な方でもおいしい一品が作れます。",
    url: "https://www.oisix.com/",
    badge: "ミールキット人気",
    color: "orange",
  },
  {
    name: "らでぃっしゅぼーや",
    type: "オーガニック・契約農家直送",
    price: "週3,000円〜（ぱれっとコース）",
    plan: "RADIX（独自基準）の有機野菜定期便",
    features: "有機野菜・契約農家直送・伝統食品",
    featureDetail: "創業38年以上の老舗。独自基準RADIXに基づく契約栽培。野菜の旬を味わえる定期便「ぱれっと」が代表サービス",
    delivery: "全国宅配（一部地域除く）",
    safety: "独自基準RADIX（農薬・添加物制限）",
    pros: [
      "創業38年以上の老舗で安心感",
      "独自基準RADIXによる厳しい品質管理",
      "定期便「ぱれっと」で旬の野菜が届く",
      "化学調味料・合成着色料無添加",
      "全国宅配対応",
      "野菜の鮮度・味が高評価",
    ],
    cons: [
      "価格はスーパーより高め",
      "ぱれっとの内容は選べない",
      "送料が別途必要",
    ],
    bestFor:
      "オーガニック志向の方、旬の野菜を味わいたい方に最適。野菜の品質にこだわる方なら満足度の高いサービスです。",
    url: "https://www.radishbo-ya.co.jp/",
    badge: "オーガニック老舗",
    color: "green",
  },
  {
    name: "パルシステム",
    type: "首都圏中心の生協宅配",
    price: "週3,000円〜（出資金1,000円）",
    plan: "1都11県対応・出資金1,000円〜2,000円",
    features: "国産・産直中心・離乳食・時短食材",
    featureDetail: "首都圏を中心にした生協（コープ）系。国産・産直にこだわった食材中心。離乳食・幼児食・時短食材も豊富で子育て世帯に人気",
    delivery: "1都11県（首都圏中心）",
    safety: "独自基準・国産優先・産直",
    pros: [
      "国産・産直にこだわった食材中心",
      "離乳食・幼児食が充実",
      "子育て割引で送料無料・割引あり",
      "週1回の決まった曜日で配送",
      "原材料の表示が明確",
      "生協ならではのお手頃価格",
    ],
    cons: [
      "対応エリアが首都圏中心（1都11県）",
      "出資金1,000〜2,000円が必要（退会時返金）",
      "曜日固定で配送日を選べない",
    ],
    bestFor:
      "首都圏在住で子育て世帯の方、国産食材にこだわる方に最適。子育て割引や離乳食対応で、小さいお子さんがいる家庭にぴったりです。",
    url: "https://www.pal-system.co.jp/",
    badge: "子育て世帯人気",
    color: "blue",
  },
  {
    name: "コープデリ",
    type: "1都7県の最大級生協",
    price: "週2,000円〜（出資金500円〜）",
    plan: "1都7県・組合員数480万人超",
    features: "豊富な品揃え・低価格・生活全般カバー",
    featureDetail: "首都圏で最大級の生協宅配。組合員数は480万人超。食材だけでなく、日用品・衣類・赤ちゃん用品まで幅広くカバー",
    delivery: "1都7県（東京・神奈川・千葉・埼玉・栃木・茨城・群馬・長野・新潟）",
    safety: "コープ独自基準・国産中心",
    pros: [
      "品揃えが業界最大級（食品〜日用品）",
      "価格がスーパーと同等またはお得",
      "週1回まとめて届くので買い物時短",
      "組合員数480万人で安心感",
      "子育て割引で送料無料・割引",
      "不在時の置き配にも対応",
    ],
    cons: [
      "対応エリアが限定的（首都圏中心）",
      "出資金500円〜が必要（退会時返金）",
      "オーガニック食材は限定的",
    ],
    bestFor:
      "首都圏在住で日用品もまとめて宅配したい方、できるだけ安く食材宅配を始めたい方に最適。家計重視の生協系サービスです。",
    url: "https://www.coopdeli.jp/",
    badge: "生協最大級",
    color: "red",
  },
  {
    name: "ヨシケイ",
    type: "夕食ミールキット専門",
    price: "1食300円〜（2人分）",
    plan: "週単位の夕食キットコース",
    features: "夕食食材を毎日宅配・献立付き・調理時間短い",
    featureDetail: "夕食用の食材と献立を毎日宅配する老舗サービス。下処理済みのカット野菜などで調理時間も短縮。週1回・毎日配送が選べる",
    delivery: "全国宅配（一部地域除く）",
    safety: "国産野菜中心・栄養士監修メニュー",
    pros: [
      "毎日の献立を考える手間がゼロ",
      "栄養士監修で栄養バランスが良い",
      "1食300円〜と低価格",
      "下処理済みで調理時間が短い",
      "毎日配送 or 週1配送が選べる",
      "入会金・年会費・配送料すべて無料",
    ],
    cons: [
      "夕食メニューが基本（朝食・昼食はなし）",
      "メニューを大幅にアレンジしにくい",
      "毎日配送は不在時の受け取りに注意",
    ],
    bestFor:
      "毎日の献立を考えるのが負担な共働き家庭、栄養バランスを重視する方に最適。とにかく夕食準備を時短したい方におすすめです。",
    url: "https://yoshikei-dvlp.co.jp/",
    badge: "献立おまかせ",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const faqItems = [
  {
    question: "食材宅配のメリットは何ですか？",
    answer: "（1）スーパーに買い物に行く時間を節約できる、（2）重い荷物を運ばなくて良い、（3）品質や産地が明確で安心、（4）献立を考える手間が減る、（5）食品ロスが減る、などのメリットがあります。特に共働き家庭や子育て世帯、高齢者家庭で重宝されています。",
  },
  {
    question: "最初に試すならどのサービスがいいですか？",
    answer: "Oisixのお試しセットは最大75%オフでとてもお得なので、まずは試してみるのがおすすめです。首都圏在住ならパルシステムやコープデリの組合員加入も低コストで始められます。本契約前にお試しできる仕組みがあるサービスを選びましょう。",
  },
  {
    question: "全国対応している食材宅配はどれですか？",
    answer: "Oisix・らでぃっしゅぼーや・ヨシケイは全国（一部地域除く）対応です。パルシステム・コープデリは首都圏中心のエリア限定なので、関東以外の方は前者から選びましょう。",
  },
  {
    question: "ミールキット（時短食材）はどのサービスがおすすめですか？",
    answer: "Kit Oisix（オイシックス）が業界トップの人気で、20分で2品作れる手軽さが評価されています。ヨシケイは毎日夕食キットを届けてくれるので、毎日の献立を考える手間がゼロになります。共働き家庭にはどちらもおすすめです。",
  },
  {
    question: "オーガニック野菜にこだわりたい場合は？",
    answer: "らでぃっしゅぼーやとオイシックスがオーガニック志向の代表です。らでぃっしゅぼーやは独自基準RADIX、オイシックスも独自の安全基準で農薬や添加物を厳しく管理しています。両社とも有機野菜の品質に定評があります。",
  },
  {
    question: "送料はどのくらいかかりますか？",
    answer: "サービスや購入金額によって異なります。多くのサービスでは一定額以上の購入で送料無料になります。生協系（パルシステム・コープデリ）は子育て世帯割引で送料無料・割引が受けられます。ヨシケイは配送料が完全無料です。",
  },
];

export default function FoodDeliveryComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "食材宅配サービス比較おすすめ5選", url: `${siteConfig.url}/guide/food-delivery-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>食材宅配サービス比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">食生活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】食材宅配サービス比較おすすめ5選｜料金・品質・配送エリアを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「食材宅配を始めたいけど、どこがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの食材宅配5選（Oisix・らでぃっしゅぼーや・パルシステム・コープデリ・ヨシケイ）を料金・品質・配送エリア・ミールキットで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold text-orange-700 dark:text-orange-300">時短ミールキット → Oisix</span>（Kit Oisixが業界トップ）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">オーガニック志向 → らでぃっしゅぼーや</span>（独自基準RADIX）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">子育て世帯 → パルシステム</span>（離乳食・国産中心）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">献立おまかせ → ヨシケイ</span>（夕食キット毎日配送）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-food" className="text-primary hover:underline">1. 食材宅配のメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 食材宅配5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サービスの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめサービス</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 食材宅配の選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-food" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 食材宅配のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">食材宅配サービスを活用すれば、毎日の食生活がぐっと楽になります。</p>
        <div className="space-y-3">
          {[
            { icon: "&#9201;", title: "買い物の時間を節約", desc: "週1回の宅配で、スーパーへの買い物時間と移動時間をまるごと節約。共働き家庭や子育て世帯に大きな時短効果があります。" },
            { icon: "&#127960;", title: "重い荷物を運ばなくて良い", desc: "米・水・調味料など重い食材を玄関まで運んでくれます。妊婦さんや高齢者の方にも嬉しいポイント。" },
            { icon: "&#127807;", title: "産地・品質が明確で安心", desc: "国産・有機・無添加など、品質基準が明確。スーパーよりも安心できる食材を選べます。" },
            { icon: "&#128221;", title: "献立を考える手間が減る", desc: "ミールキットやおまかせコースなら献立作成不要。栄養バランスもプロが考えてくれます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 食材宅配5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">Oisix</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">らでぃっしゅ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">パル</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">コープデリ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ヨシケイ</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "週料金目安", o: "5,000円〜", r: "3,000円〜", p: "3,000円〜", c: "2,000円〜", y: "1食300円〜" },
                { label: "配送エリア", o: "全国", r: "全国", p: "1都11県", c: "1都7県+", y: "全国" },
                { label: "強み", o: "ミールキット", r: "オーガニック", p: "子育て世帯", c: "品揃え最大", y: "夕食特化" },
                { label: "オーガニック", o: "重視", r: "最重視", p: "国産優先", c: "限定的", y: "国産中心" },
                { label: "ミールキット", o: "Kit Oisix", r: "あり", p: "時短食材あり", c: "あり", y: "毎日キット" },
                { label: "出資金", o: "なし", r: "なし", p: "1,000円〜", c: "500円〜", y: "なし" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.o}</td>
                  <td className="border border-card-border p-3">{row.r}</td>
                  <td className="border border-card-border p-3">{row.p}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 2026年4月時点の情報です。最新情報は各社公式サイトをご確認ください。</p>
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
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金目安</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">配送</span><span className="font-bold">{s.delivery}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">安全基準：</span>{s.safety}</p>
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
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめサービス</h2>
        <div className="space-y-4">
          {[
            { scene: "共働きで時短調理をしたい", app: "Oisix（Kit Oisix）", reason: "20分で2品作れるKit Oisixが業界トップ。料理が苦手でもおいしい一品が確実に作れます。" },
            { scene: "オーガニックにこだわりたい", app: "らでぃっしゅぼーや", reason: "独自基準RADIXによる契約農家直送。創業38年以上の老舗で品質への信頼が高いです。" },
            { scene: "子育て中で離乳食も欲しい", app: "パルシステム", reason: "離乳食・幼児食が充実しており、子育て割引で送料無料・割引も受けられます。首都圏在住なら必須級。" },
            { scene: "食材も日用品もまとめて宅配", app: "コープデリ", reason: "品揃え業界最大級。日用品・赤ちゃん用品まで一度の配送でまとめて受け取れます。" },
            { scene: "毎日の夕食準備を完全おまかせ", app: "ヨシケイ", reason: "栄養士監修の夕食キットを毎日宅配。献立作成も買い物も不要で、フライパン1つで作れる時短メニュー多数。" },
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
        <h2 className="text-2xl font-bold mb-4">5. 食材宅配の選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "配送エリアを確認する", desc: "パルシステム・コープデリは首都圏中心。それ以外の地域はOisix・らでぃっしゅぼーや・ヨシケイなど全国対応サービスから選びましょう。" },
            { num: "2", title: "目的に合った特徴を選ぶ", desc: "時短ならOisix・ヨシケイ、オーガニックなららでぃっしゅぼーや、品揃えならコープデリと、目的別に最適なサービスは変わります。" },
            { num: "3", title: "予算と料金体系の確認", desc: "週いくらまで使えるかを決めて、料金プランを比較しましょう。送料・出資金も含めた総コストで判断するのがポイントです。" },
            { num: "4", title: "ミールキットの有無", desc: "献立作成や調理時間を減らしたいなら、ミールキットが充実したサービスを選びましょう。Kit Oisixやヨシケイがおすすめです。" },
            { num: "5", title: "お試しセットで品質確認", desc: "本契約前にお試しセットを利用すれば、実際の品質や使い勝手を確認できます。Oisixは特にお得なお試しセットを提供しています。" },
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
            食材宅配サービスは目的・地域・ライフスタイルに合わせて選ぶことが大切です。時短ならOisix、オーガニックなららでぃっしゅぼーや、子育て世帯ならパルシステム、品揃えならコープデリ、献立おまかせならヨシケイがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・時短ミールキットなら「Oisix」（Kit Oisix）</li>
              <li>・オーガニック派は「らでぃっしゅぼーや」</li>
              <li>・首都圏子育て世帯は「パルシステム」</li>
              <li>・品揃え重視は「コープデリ」</li>
              <li>・献立おまかせは「ヨシケイ」（夕食特化）</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">毎日の水まわりを快適にするサービス</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">食材宅配の支払いにもお得なカード</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
