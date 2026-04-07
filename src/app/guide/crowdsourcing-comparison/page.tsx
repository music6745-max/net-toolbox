import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】クラウドソーシング比較おすすめ5選｜手数料・案件数・初心者向けを徹底解説",
    description:
      "2026年最新のクラウドソーシングサイトを徹底比較。クラウドワークス・ランサーズ・ココナラ・シュフティ・Bizseekの手数料・案件数・特徴を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/crowdsourcing-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "クラウドワークス",
    type: "国内最大級・案件数No.1",
    price: "システム手数料 5〜20%（金額帯別）",
    plan: "10万円以下20%・10〜20万円10%・20万円超5%",
    features: "案件数業界最多・スキル不問の簡単案件から専門案件まで",
    featureDetail: "東証プライム上場の最大手。会員数570万人、案件数も業界最多。データ入力・ライティング・デザイン・開発まで幅広い案件が見つかる",
    payment: "出金手数料500円（楽天銀行は100円）",
    category: "ライティング・デザイン・開発・データ入力等",
    pros: [
      "案件数・会員数が業界最大級で仕事が見つけやすい",
      "東証プライム上場で安心感がある",
      "初心者向けの簡単タスクが豊富",
      "プロクラウドワーカー認定で高単価案件にアクセス",
      "仮払い制度で報酬未払いリスクが低い",
      "スマホアプリで案件管理がしやすい",
    ],
    cons: [
      "システム手数料が最大20%と高め",
      "低単価案件も多く玉石混交",
      "競合が多く案件獲得の競争率が高い",
    ],
    bestFor:
      "クラウドソーシングを初めて使う方、まず案件数の多さから始めたい方に最適。プロフィールを整えれば継続案件も獲得しやすくなります。",
    url: "https://crowdworks.jp/",
    badge: "最大手",
    color: "blue",
  },
  {
    name: "ランサーズ",
    type: "国内2大プラットフォーム",
    price: "システム手数料 一律16.5%",
    plan: "報酬から一律16.5%（税込）の手数料",
    features: "認定ランサー制度・スキルシェア・直接依頼機能",
    featureDetail: "クラウドワークスと並ぶ国内2大クラウドソーシング。認定ランサー制度があり、優良ワーカーには高単価の直接依頼が来やすい",
    payment: "出金手数料550円（楽天銀行は無料）",
    category: "ライティング・デザイン・開発・翻訳・動画編集等",
    pros: [
      "認定ランサー制度で実績が可視化され信頼を得やすい",
      "直接依頼機能でクライアントから声がかかる",
      "報酬の振込最短翌営業日対応",
      "報酬未払い対応の仮払いシステム",
      "クラウドワークスと並ぶ案件数",
      "法人クライアントが多く高単価案件あり",
    ],
    cons: [
      "システム手数料16.5%は他社と比べやや高め",
      "認定ランサーになるまでハードルがある",
      "初心者の単価は低めになりがち",
    ],
    bestFor:
      "本気でクラウドソーシングを長期的に取り組みたい方、認定ランサーを目指してスキルアップしたい方におすすめ。実績を積めば直接依頼で安定収入も期待できます。",
    url: "https://www.lancers.jp/",
    badge: "認定ランサー制度",
    color: "orange",
  },
  {
    name: "ココナラ",
    type: "スキル販売型マーケット",
    price: "販売手数料 22%（税込）",
    plan: "売上から一律22%（税込）の手数料",
    features: "自分のスキルを商品として出品・購入者が選ぶ形式",
    featureDetail: "「自分のスキルを売る」マーケットプレイス型。クラウドワークス等とは逆で、自分から営業せず購入者を待つスタイル。占い・相談など多彩なジャンル",
    payment: "出金手数料3,000円未満160円・3,000円以上無料",
    category: "デザイン・ライティング・占い・悩み相談・動画・音楽等",
    pros: [
      "自分から営業せず待つだけで購入される",
      "占い・相談・趣味系など多彩なジャンルあり",
      "出品ページが資産になり継続的に売れる",
      "認知度が高く購入者が多い",
      "電話相談・ビデオチャットなど新しい形式に対応",
      "ポートフォリオとしても活用できる",
    ],
    cons: [
      "販売手数料22%は業界最高水準",
      "出品しても売れるまで時間がかかる",
      "競合が多く埋もれやすい",
    ],
    bestFor:
      "自分のスキルや得意分野を商品として売りたい方、占い・相談・趣味系のサービスを提供したい方に最適。本業の合間に副業として始めやすいスタイルです。",
    url: "https://coconala.com/",
    badge: "スキル販売",
    color: "purple",
  },
  {
    name: "シュフティ",
    type: "主婦向け・スキマ時間案件",
    price: "システム手数料 10%（税込11%）",
    plan: "報酬から11%（税込）の手数料",
    features: "主婦・主夫向けの簡単タスク・在宅ワークに特化",
    featureDetail: "主婦の在宅ワークに特化したクラウドソーシング。データ入力・アンケート・記事作成など、スキマ時間にできる案件が中心",
    payment: "出金手数料550円",
    category: "データ入力・アンケート・ライティング・テスター等",
    pros: [
      "システム手数料が業界最安クラス（10%）",
      "主婦向けの簡単案件が豊富",
      "スマホだけで完結する案件も多い",
      "スキル不要のタスク案件が充実",
      "コツコツ稼ぎたい方に向いている",
      "登録・利用料は完全無料",
    ],
    cons: [
      "案件数はクラウドワークス等より少ない",
      "高単価の専門案件は少ない",
      "知名度が他社より低い",
    ],
    bestFor:
      "家事や育児の合間にスキマ時間で稼ぎたい主婦・主夫の方、専門スキルがなくても始めたい方に最適。コツコツ型の副業に向いています。",
    url: "https://app.shufti.jp/",
    badge: "手数料安い",
    color: "pink",
  },
  {
    name: "Bizseek",
    type: "システム手数料が業界最安",
    price: "システム手数料 5〜10%（業界最安）",
    plan: "10万円以下10%・10万円超5%",
    features: "業界最安手数料・少数精鋭・直接交渉重視",
    featureDetail: "他社と比べてシステム手数料が安いのが最大の特徴。10万円超の案件は手数料5%。受注者の手取りが多くなる",
    payment: "出金手数料550円（5万円以上は無料）",
    category: "ライティング・デザイン・開発・翻訳等",
    pros: [
      "システム手数料が業界最安（最大5%）",
      "高額案件ほど手取りが多くなる",
      "5万円以上の出金手数料が無料",
      "ライバルが少ない狙い目案件あり",
      "クライアントとの直接交渉がしやすい",
      "シンプルで使いやすいUI",
    ],
    cons: [
      "案件数は大手2社より圧倒的に少ない",
      "知名度が低くクライアント数も限定的",
      "初心者向け案件は少なめ",
    ],
    bestFor:
      "ある程度実績がある中級者以上の方、手取り額を重視したい方に最適。高単価案件が安定的に取れるなら、手数料の安さで他社より稼げます。",
    url: "https://www.bizseek.jp/",
    badge: "手数料最安",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

const faqItems = [
  {
    question: "クラウドソーシング初心者はどこから始めるべきですか？",
    answer: "まずはクラウドワークスかランサーズの2大手から始めるのがおすすめです。案件数が圧倒的に多く、初心者向けの簡単タスクからプロ向け案件まで幅広く揃っています。両方に登録して、案件を比較しながら自分に合うサイトを見つけるのも良い方法です。",
  },
  {
    question: "システム手数料はどこが一番安いですか？",
    answer: "Bizseekが業界最安で、10万円超の案件なら5%の手数料です。シュフティも10〜11%と低めです。クラウドワークス・ランサーズは16.5〜20%、ココナラは22%と高めなので、手取り重視ならBizseekやシュフティがおすすめです。",
  },
  {
    question: "クラウドソーシングだけで生計を立てられますか？",
    answer: "可能ですが、専門スキル（ライティング・デザイン・プログラミング・動画編集など）と継続的な営業力が必要です。月20〜50万円稼ぐフリーランスも多くいます。最初は副業から始めて、実績を積みながら徐々に本業化するのが現実的です。",
  },
  {
    question: "報酬の未払いリスクはないですか？",
    answer: "クラウドワークス・ランサーズには「仮払い制度」があり、クライアントが事前に報酬をプラットフォームに預ける仕組みです。納品完了後に確実に支払われるため、未払いリスクを大幅に軽減できます。直接取引や仮払いなしの案件は注意が必要です。",
  },
  {
    question: "副業がバレないか心配です",
    answer: "確定申告で「住民税を普通徴収」に設定すれば、会社に副業所得が通知される可能性を下げられます。また、年間20万円以下の副業所得は所得税の申告不要ですが、住民税は別途申告が必要な点に注意。会社の就業規則も事前に確認しましょう。",
  },
  {
    question: "スキルがなくても稼げる案件はありますか？",
    answer: "データ入力・アンケート回答・体験談募集・モニター・タスク作業など、特別なスキル不要の案件は多数あります。シュフティやクラウドワークスのタスク案件から始めると、初心者でもすぐに収入を得られます。ただし単価は低めなので、慣れたらライティング等にステップアップしましょう。",
  },
];

export default function CrowdsourcingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "クラウドソーシング比較おすすめ5選", url: `${siteConfig.url}/guide/crowdsourcing-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>クラウドソーシング比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">副業</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】クラウドソーシング比較おすすめ5選｜手数料・案件数・初心者向けを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「クラウドソーシングで副業を始めたいけど、どこを使えばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのクラウドソーシング5選（クラウドワークス・ランサーズ・ココナラ・シュフティ・Bizseek）を手数料・案件数・特徴・初心者向けに徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">案件数最多 → クラウドワークス</span>（業界最大手・初心者にも◎）</p>
          <p><span className="font-bold text-orange-700 dark:text-orange-300">本格的に取り組む → ランサーズ</span>（認定ランサー制度）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">スキル販売型 → ココナラ</span>（待つだけ・占いも可）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">手数料の安さ → Bizseek</span>（最大5%・手取り重視）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-crowdsourcing" className="text-primary hover:underline">1. クラウドソーシングのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. クラウドソーシング5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サイトの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめサイト</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. クラウドソーシングの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-crowdsourcing" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. クラウドソーシングのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">クラウドソーシングを活用すれば、自宅にいながら誰でも副業や本業を始められます。</p>
        <div className="space-y-3">
          {[
            { icon: "&#127968;", title: "在宅で完結・通勤不要", desc: "案件の受注から納品まですべてオンラインで完結。家事や育児の合間、本業終わりの隙間時間に取り組めます。" },
            { icon: "&#128176;", title: "未経験から始められる", desc: "データ入力やアンケートなど、特別なスキルがなくても始められる案件が豊富。実績を積みながらスキルアップできます。" },
            { icon: "&#127919;", title: "好きな案件・時間を選べる", desc: "自分のスキルや興味に合った案件を選択可能。1日1時間からでも、土日だけでも、自分のペースで取り組めます。" },
            { icon: "&#128276;", title: "報酬未払いリスクが低い", desc: "大手プラットフォームには仮払い制度があり、クライアントが事前に報酬を預ける仕組みのため、未払いリスクを軽減できます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. クラウドソーシング5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">クラウドワークス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">ランサーズ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">ココナラ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-pink-600 dark:text-pink-400">シュフティ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">Bizseek</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "手数料", c: "5〜20%", l: "16.5%", co: "22%", s: "11%", b: "5〜10%" },
                { label: "案件数", c: "業界最多", l: "業界最多級", co: "スキル販売型", s: "中規模", b: "少数" },
                { label: "形式", c: "受注型", l: "受注型", co: "出品型", s: "受注型", b: "受注型" },
                { label: "出金手数料", c: "500円(楽天100円)", l: "550円(楽天無料)", co: "160円〜無料", s: "550円", b: "550円(5万+無料)" },
                { label: "仮払い", c: "あり", l: "あり", co: "あり", s: "あり", b: "あり" },
                { label: "向き", c: "初心者", l: "中上級者", co: "スキル販売", s: "主婦・スキマ", b: "中上級者" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.l}</td>
                  <td className="border border-card-border p-3">{row.co}</td>
                  <td className="border border-card-border p-3">{row.s}</td>
                  <td className="border border-card-border p-3">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 2026年4月時点の情報です。最新情報は各社公式サイトをご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サイトの詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">手数料</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">出金</span><span className="font-bold">{s.payment}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">案件カテゴリ：</span>{s.category}</p>
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
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめサイト</h2>
        <div className="space-y-4">
          {[
            { scene: "副業を始めたい初心者", app: "クラウドワークス", reason: "案件数が業界最多で、初心者向けの簡単タスクが豊富。まずは登録してプロフィールを作成するところから始めましょう。" },
            { scene: "本格的にフリーランスを目指したい", app: "ランサーズ", reason: "認定ランサー制度で実績を可視化。優良ワーカーには直接依頼が来やすく、安定収入につながります。" },
            { scene: "自分のスキル・経験を商品化したい", app: "ココナラ", reason: "出品ページを作ったら待つだけのスタイル。デザイン・占い・相談など多彩なジャンルで自分らしく稼げます。" },
            { scene: "主婦・主夫でスキマ時間に稼ぎたい", app: "シュフティ", reason: "主婦向けの簡単タスクが豊富で、手数料も10%と業界最安クラス。家事・育児の合間に最適です。" },
            { scene: "実績がある中級者以上で手取り重視", app: "Bizseek", reason: "システム手数料が業界最安（最大5%）。高単価案件を受注できるなら、手取りで他社を上回ります。" },
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
        <h2 className="text-2xl font-bold mb-4">5. クラウドソーシングの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "案件数の多さ", desc: "案件が多いほど自分に合った仕事が見つかりやすくなります。クラウドワークス・ランサーズの2大手は案件数が圧倒的です。" },
            { num: "2", title: "システム手数料", desc: "手数料が安いほど手取りが増えます。同じ案件でも手数料5%と22%では報酬に大きな差が出るので、長期的にはコスト面も重要です。" },
            { num: "3", title: "得意ジャンルとの相性", desc: "ライティング・デザイン・開発など、自分の得意分野の案件が多いサイトを選ぶと効率的に稼げます。" },
            { num: "4", title: "仮払い制度の有無", desc: "報酬未払いリスクを避けるため、必ず仮払い制度のあるプラットフォームを選びましょう。" },
            { num: "5", title: "出金手数料", desc: "毎月出金するなら出金手数料も無視できません。楽天銀行ならランサーズが無料、Bizseekは5万円以上で無料です。" },
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
            クラウドソーシングは目的とスキルに合ったサイトを選ぶことが大切です。初心者ならクラウドワークス、本気で取り組むならランサーズ、スキル販売ならココナラ、主婦の方はシュフティ、手数料重視ならBizseekがおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            複数サイトに登録して案件の比較から始めるのも良い方法です。実績を積めば月10万円・20万円と収入アップも夢ではありません。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・初心者は「クラウドワークス」（業界最大手）</li>
              <li>・本格派は「ランサーズ」（認定ランサー制度）</li>
              <li>・スキル販売なら「ココナラ」（待つだけ）</li>
              <li>・主婦・スキマ時間は「シュフティ」</li>
              <li>・手取り重視は「Bizseek」（手数料最安）</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業に必要なWebツール完全ガイド</span>
            <p className="text-xs text-muted mt-1">副業を始めるためのWebツールを徹底解説</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">副業の確定申告を効率化するソフト</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
