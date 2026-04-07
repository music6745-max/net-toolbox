import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説",
    description:
      "2026年最新の転職サイト・転職エージェントを徹底比較。doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職の求人数・サポート体制・対象年齢層を詳しく解説。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: `${siteConfig.url}/guide/job-site-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const jobSites = [
  {
    name: "doda",
    jobCount: "約24万件以上（非公開求人含む）",
    support: "キャリアアドバイザー＋採用プロジェクト担当のダブルサポート",
    ageGroup: "20代〜40代（幅広い年齢層に対応）",
    feature: "転職サイトとエージェントの一体型サービス",
    fee: "完全無料",
    pros: [
      "転職サイトとエージェントを1つのサービスで利用可能",
      "求人数が業界トップクラスで幅広い業種・職種をカバー",
      "キャリアアドバイザーと採用プロジェクト担当のダブルサポート体制",
      "年収査定やキャリアタイプ診断など独自ツールが充実",
      "スカウトメールで企業から直接オファーが届く",
      "転職フェア・セミナーなどイベントが豊富",
    ],
    cons: [
      "求人数が多い分、希望に合わない案件のメールが増えることがある",
      "担当アドバイザーの質にばらつきがある場合がある",
      "ハイクラス特化ではないため年収800万円以上の求人はやや少なめ",
    ],
    bestFor:
      "初めての転職で手厚いサポートが欲しい方、転職サイトとエージェントの両方を使いたい方に最適。幅広い求人から選びたい方におすすめです。",
    url: "https://doda.jp/",
    badge: "総合力No.1",
    color: "blue",
  },
  {
    name: "リクルートエージェント",
    jobCount: "約60万件以上（非公開求人含む）",
    support: "専任キャリアアドバイザーによる個別サポート",
    ageGroup: "20代〜50代（全年齢層に対応）",
    feature: "業界最大手の転職エージェント",
    fee: "完全無料",
    pros: [
      "業界最大の求人数を保有（非公開求人も多数）",
      "各業界に精通した専任キャリアアドバイザーが在籍",
      "面接対策・書類添削などのサポートが充実",
      "全国主要都市に拠点があり地方の転職にも強い",
      "転職実績No.1の安心感と信頼性",
      "独自の面接力向上セミナーを無料で受講可能",
    ],
    cons: [
      "担当者によっては連絡頻度が多いと感じる場合がある",
      "求人紹介のペースが早く、じっくり検討したい方には合わないことも",
      "3ヶ月のサポート期限がある（延長可能な場合あり）",
    ],
    bestFor:
      "とにかく多くの求人から選びたい方、実績のある大手エージェントを利用したい方に最適。地方在住で転職を考えている方にもおすすめです。",
    url: "https://www.r-agent.com/",
    badge: "求人数No.1",
    color: "red",
  },
  {
    name: "マイナビ転職",
    jobCount: "約2万件以上",
    support: "転職サポートコンテンツ＋転職フェア",
    ageGroup: "20代〜30代前半（若手に強い）",
    feature: "20代・第二新卒の転職に特化",
    fee: "完全無料",
    pros: [
      "20代・第二新卒向けの求人が非常に豊富",
      "未経験歓迎の求人が多く、キャリアチェンジしやすい",
      "使いやすいアプリで手軽に求人検索・応募が可能",
      "転職フェアが全国各地で定期開催されている",
      "適性診断や自己分析ツールが充実",
      "大手企業からベンチャー企業まで幅広く掲載",
    ],
    cons: [
      "30代後半以降の求人は他社と比べて少なめ",
      "ハイクラス・管理職向けの求人は限定的",
      "エージェントサービスは別サービス（マイナビエージェント）で別途登録が必要",
    ],
    bestFor:
      "20代の転職・第二新卒での転職を考えている方に最適。未経験からの業種チェンジを目指す方にもおすすめです。",
    url: "https://tenshoku.mynavi.jp/",
    badge: "20代に強い",
    color: "green",
  },
  {
    name: "ビズリーチ",
    jobCount: "約12万件以上",
    support: "ヘッドハンターによるスカウト型サポート",
    ageGroup: "30代〜50代（ハイクラス層向け）",
    feature: "年収600万円以上のハイクラス転職に特化",
    fee: "基本無料（プレミアムプラン：月額5,478円）",
    pros: [
      "年収600万円以上のハイクラス求人が豊富",
      "優秀なヘッドハンターからスカウトが届く",
      "経営幹部・管理職・専門職の求人が充実",
      "企業から直接スカウトが届くため、市場価値がわかる",
      "外資系・グローバル企業の求人も多数掲載",
      "年収1,000万円以上の求人も多数保有",
    ],
    cons: [
      "全機能を利用するには有料プレミアムプランへの加入が必要",
      "年収500万円未満の方にはスカウトが少ない場合がある",
      "自分で積極的に応募するよりスカウト待ちの傾向がある",
    ],
    bestFor:
      "現在の年収が500万円以上で、さらなるキャリアアップを目指す方に最適。管理職や専門職への転職を考えている30代〜40代におすすめです。",
    url: "https://www.bizreach.jp/",
    badge: "ハイクラス特化",
    color: "orange",
  },
  {
    name: "エン転職",
    jobCount: "約1万件以上",
    support: "面接対策レポート＋企業口コミ情報",
    ageGroup: "20代〜30代（若手〜中堅層向け）",
    feature: "企業の口コミ・評判が充実した転職サイト",
    fee: "完全無料",
    pros: [
      "企業の口コミ・評判情報が豊富で入社後のミスマッチを防げる",
      "面接対策レポートで事前に企業の面接傾向がわかる",
      "動画で職場の雰囲気を確認できる企業も多い",
      "「気になるリスト」機能で企業からのアプローチを受けやすい",
      "入社後の活躍を重視したマッチング精度の高さ",
      "転職お祝い金制度がある（条件あり）",
    ],
    cons: [
      "求人数は大手エージェントと比べると少なめ",
      "ハイクラス求人や管理職求人は限定的",
      "エージェントサービスは別サービス（エンエージェント）で別途登録が必要",
    ],
    bestFor:
      "入社後のミスマッチを防ぎたい方、企業の内部情報や口コミを重視する方に最適。慎重に転職先を選びたい方におすすめです。",
    url: "https://employment.en-japan.com/",
    badge: "口コミ充実",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

const faqItems = [
  {
    question: "転職サイトと転職エージェントの違いは何ですか？",
    answer:
      "転職サイトは自分で求人を検索して直接応募するサービスです。一方、転職エージェントは専任のキャリアアドバイザーが求人紹介・面接対策・年収交渉などを代行してくれるサービスです。dodaのように両方を兼ね備えたサービスもあります。初めての転職にはエージェントの利用がおすすめです。",
  },
  {
    question: "転職サイトは何社くらい登録すべきですか？",
    answer:
      "2〜3社に登録するのがおすすめです。1社だけでは求人の選択肢が限られますし、担当アドバイザーとの相性もあるため、複数社を比較して自分に合ったサービスを選ぶのが効果的です。たとえばdodaとリクルートエージェントの大手2社＋ビズリーチなど特化型1社という組み合わせが人気です。",
  },
  {
    question: "転職サイトの利用は本当に無料ですか？",
    answer:
      "はい、この記事で紹介している転職サイト・エージェントはビズリーチのプレミアムプランを除きすべて完全無料で利用できます。転職エージェントは求人企業から成功報酬を受け取るビジネスモデルのため、求職者は費用がかかりません。ビズリーチも基本機能は無料で利用可能です。",
  },
  {
    question: "在職中でも転職活動はできますか？",
    answer:
      "もちろん可能です。むしろ在職中の転職活動が一般的で、約7割の方が在職中に転職活動を行っています。転職エージェントを利用すれば、面接日程の調整や企業とのやりとりを代行してもらえるため、忙しい方でも効率的に転職活動を進められます。",
  },
  {
    question: "未経験の業種・職種への転職は可能ですか？",
    answer:
      "可能です。特にマイナビ転職やdodaには未経験歓迎の求人が多数掲載されています。20代であればポテンシャル採用で業種チェンジしやすく、30代以降でも関連スキルをアピールすることで未経験分野への転職は十分可能です。エージェントに相談すれば具体的なアドバイスがもらえます。",
  },
  {
    question: "転職活動にはどれくらいの期間がかかりますか？",
    answer:
      "一般的に3ヶ月〜6ヶ月程度が目安です。内訳は、自己分析・情報収集に2〜4週間、応募・書類選考に2〜4週間、面接に4〜8週間、内定・退職手続きに4週間程度です。ただし、ハイクラス転職やキャリアチェンジの場合はさらに時間がかかることがあります。",
  },
  {
    question: "転職で年収アップは期待できますか？",
    answer:
      "転職者の約3〜4割が年収アップに成功しています。特にビズリーチなどのハイクラス転職サービスでは年収アップ率が高い傾向にあります。年収交渉は転職エージェントに任せるのが効果的で、市場価値に基づいた適切な年収提示を企業に行ってもらえます。",
  },
];

export default function JobSiteComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "転職サイト比較おすすめ5選",
            url: `${siteConfig.url}/guide/job-site-comparison`,
          },
        ]}
      />
      <FAQJsonLd
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>転職サイト比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            キャリア
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「転職サイトが多すぎてどれを使えばいいかわからない」そんな悩みを解決します。この記事では、2026年現在おすすめの転職サイト・転職エージェント5社（doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職）を求人数・サポート体制・対象年齢層で徹底比較。あなたの年代やキャリアに合った転職サイトの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：迷ったらこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              総合力で選ぶなら → doda
            </span>
            （転職サイト＋エージェント一体型で使いやすい）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              求人数で選ぶなら → リクルートエージェント
            </span>
            （業界最大の求人数・全国対応）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              20代・第二新卒なら → マイナビ転職
            </span>
            （若手向け求人が豊富）
          </p>
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              ハイクラスなら → ビズリーチ
            </span>
            （年収600万円以上の求人に特化）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              口コミ重視なら → エン転職
            </span>
            （企業の内部情報・評判が充実）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-change-job" className="text-primary hover:underline">
              1. 転職サイトを使うべき理由
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 転職サイト5社の比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各転職サイトの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#by-age" className="text-primary hover:underline">
              4. 年代別おすすめ転職サイト
            </a>
          </li>
          <li>
            <a href="#how-to-job-hunt" className="text-primary hover:underline">
              5. 転職活動の進め方
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              6. 転職サイトの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              8. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Use Job Sites */}
      <section id="why-change-job" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 転職サイトを使うべき理由
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          転職サイト・転職エージェントは、効率的に転職活動を進めるための必須ツールです。以下のようなメリットがあります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128269;",
              title: "非公開求人にアクセスできる",
              desc: "転職エージェントが保有する求人の約60〜80%は非公開求人です。一般の転職サイトには掲載されない好条件の求人に応募できます。",
            },
            {
              icon: "&#128188;",
              title: "プロによるキャリアアドバイス",
              desc: "専任のキャリアアドバイザーが、あなたの経歴やスキルに合った求人を提案。客観的な視点でキャリアプランを一緒に考えてくれます。",
            },
            {
              icon: "&#128221;",
              title: "書類添削・面接対策のサポート",
              desc: "履歴書・職務経歴書の添削、面接対策のアドバイスを受けられます。通過率を大幅にアップさせることが可能です。",
            },
            {
              icon: "&#128176;",
              title: "年収交渉を代行してくれる",
              desc: "自分では言いにくい年収交渉や入社日の調整をエージェントが代行。転職で年収アップを実現しやすくなります。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. 転職サイト5社の比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">doda</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">リクルート</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">マイナビ</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">ビズリーチ</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">エン転職</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "求人数",
                  doda: "約24万件",
                  recruit: "約60万件",
                  mynavi: "約2万件",
                  bizreach: "約12万件",
                  en: "約1万件",
                },
                {
                  label: "サポート体制",
                  doda: "ダブルサポート",
                  recruit: "専任アドバイザー",
                  mynavi: "コンテンツ充実",
                  bizreach: "ヘッドハンター",
                  en: "口コミ・レポート",
                },
                {
                  label: "対象年齢層",
                  doda: "20〜40代",
                  recruit: "20〜50代",
                  mynavi: "20〜30代前半",
                  bizreach: "30〜50代",
                  en: "20〜30代",
                },
                {
                  label: "特徴",
                  doda: "サイト+エージェント一体型",
                  recruit: "業界最大手",
                  mynavi: "若手・未経験に強い",
                  bizreach: "ハイクラス特化",
                  en: "企業口コミ充実",
                },
                {
                  label: "料金",
                  doda: "無料",
                  recruit: "無料",
                  mynavi: "無料",
                  bizreach: "基本無料",
                  en: "無料",
                },
                {
                  label: "非公開求人",
                  doda: "あり（多数）",
                  recruit: "あり（業界最多）",
                  mynavi: "なし",
                  bizreach: "あり",
                  en: "なし",
                },
                {
                  label: "スカウト機能",
                  doda: "あり",
                  recruit: "なし",
                  mynavi: "あり",
                  bizreach: "あり（メイン機能）",
                  en: "あり",
                },
                {
                  label: "面接対策",
                  doda: "あり",
                  recruit: "あり（セミナーも）",
                  mynavi: "コンテンツのみ",
                  bizreach: "ヘッドハンター経由",
                  en: "面接レポート",
                },
                {
                  label: "地方求人",
                  doda: "全国対応",
                  recruit: "全国対応",
                  mynavi: "全国対応",
                  bizreach: "都市部中心",
                  en: "全国対応",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.doda}</td>
                  <td className="border border-card-border p-3">{row.recruit}</td>
                  <td className="border border-card-border p-3">{row.mynavi}</td>
                  <td className="border border-card-border p-3">{row.bizreach}</td>
                  <td className="border border-card-border p-3">{row.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 求人数は2026年4月時点の概算値です。非公開求人を含む場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各転職サイトの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {jobSites.map((site, index) => (
            <div
              key={site.name}
              id={`site-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{site.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[site.color]}`}
                >
                  {site.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">求人数</span>
                  <span className="font-bold">{site.jobCount}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">対象年齢層</span>
                  <span className="font-bold">{site.ageGroup}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">料金</span>
                  <span className="font-bold">{site.fee}</span>
                </div>
              </div>

              {/* Feature & Support */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">特徴</span>
                  <span className="font-bold">{site.feature}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">サポート体制</span>
                  <span className="font-bold">{site.support}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {site.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {site.pros.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">&#9675;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">
                  デメリット
                </h4>
                <ul className="space-y-1">
                  {site.cons.map((c) => (
                    <li
                      key={c}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">&#9651;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={site.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {site.name}の公式サイトを見る
                </a>
                <p className="text-xs text-muted mt-2">
                  登録無料・最短3分で完了
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - By Age Group */}
      <section id="by-age" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 年代別おすすめ転職サイト
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          年代によって転職市場の状況やおすすめのサービスは異なります。あなたの年代に合った転職サイトを選びましょう。
        </p>
        <div className="space-y-6">
          {/* 20代 */}
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-full">
                20代
              </span>
              ポテンシャル採用で可能性が広い
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              20代は未経験でも採用される「ポテンシャル採用」が活発な年代です。第二新卒枠も含め、キャリアチェンジのチャンスが最も大きい時期。複数の転職サイトに登録して、できるだけ多くの選択肢を持つことが重要です。
            </p>
            <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
              <p>
                <span className="font-bold text-green-700 dark:text-green-300">第1位：マイナビ転職</span>
                {" "}― 20代・第二新卒向けの求人が最も充実。未経験歓迎の求人も多数。
              </p>
              <p>
                <span className="font-bold text-blue-700 dark:text-blue-300">第2位：doda</span>
                {" "}― エージェントサポートで初めての転職も安心。求人数も豊富。
              </p>
              <p>
                <span className="font-bold text-purple-700 dark:text-purple-300">第3位：エン転職</span>
                {" "}― 企業の口コミで入社後のミスマッチを防げる。
              </p>
            </div>
          </div>

          {/* 30代 */}
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                30代
              </span>
              経験を活かしたキャリアアップ
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              30代は即戦力としての採用がメインとなります。これまでの経験やスキルを活かした転職が中心で、年収アップも十分に狙える年代です。エージェントを活用して、非公開求人にアクセスすることが成功のカギになります。
            </p>
            <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
              <p>
                <span className="font-bold text-red-700 dark:text-red-300">第1位：リクルートエージェント</span>
                {" "}― 業界最大の求人数から即戦力求人を紹介。面接対策も充実。
              </p>
              <p>
                <span className="font-bold text-blue-700 dark:text-blue-300">第2位：doda</span>
                {" "}― 転職サイト＋エージェントで効率的に活動。年収査定ツールも便利。
              </p>
              <p>
                <span className="font-bold text-orange-700 dark:text-orange-300">第3位：ビズリーチ</span>
                {" "}― 年収500万円以上なら登録必須。ヘッドハンターからスカウトが届く。
              </p>
            </div>
          </div>

          {/* 40代 */}
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-bold px-3 py-1 rounded-full">
                40代
              </span>
              専門性とマネジメント経験が武器
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              40代の転職は求人数が限られる一方、専門性やマネジメント経験が高く評価されます。ハイクラス特化型サービスを中心に、管理職・幹部候補のポジションを狙うのがおすすめです。時間がかかる可能性があるため、在職中に余裕を持って活動を始めましょう。
            </p>
            <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
              <p>
                <span className="font-bold text-orange-700 dark:text-orange-300">第1位：ビズリーチ</span>
                {" "}― 管理職・経営幹部の求人が豊富。年収1,000万円以上も多数。
              </p>
              <p>
                <span className="font-bold text-red-700 dark:text-red-300">第2位：リクルートエージェント</span>
                {" "}― 圧倒的な求人数で40代向けの求人もカバー。全国対応。
              </p>
              <p>
                <span className="font-bold text-blue-700 dark:text-blue-300">第3位：doda</span>
                {" "}― 幅広い求人＋エージェントサポートで安心の転職活動。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - How to Job Hunt */}
      <section id="how-to-job-hunt" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 転職活動の進め方
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          転職活動を成功させるためのステップを解説します。計画的に進めることで、効率よく理想の転職先を見つけられます。
        </p>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "自己分析・キャリアの棚卸し（1〜2週間）",
              desc: "まずは自分のスキル・経験・強み・弱みを整理しましょう。「なぜ転職したいのか」「転職で何を実現したいのか」を明確にすることが重要です。dodaの年収査定やキャリアタイプ診断などのツールも活用できます。",
            },
            {
              num: "2",
              title: "転職サイト・エージェントに登録（1日）",
              desc: "大手2〜3社に登録するのがおすすめです。転職サイト（doda等）とエージェント（リクルートエージェント等）の両方に登録することで、自分で探す求人とプロに紹介してもらう求人の両方をカバーできます。",
            },
            {
              num: "3",
              title: "求人選び・書類作成（2〜4週間）",
              desc: "キャリアアドバイザーと面談し、希望条件に合った求人を紹介してもらいます。同時に履歴書・職務経歴書を作成し、添削サポートを受けましょう。書類の完成度が選考通過率を大きく左右します。",
            },
            {
              num: "4",
              title: "応募・面接（4〜8週間）",
              desc: "10〜20社程度に応募するのが一般的です。面接対策はエージェントのサポートを最大限活用しましょう。模擬面接や企業ごとの面接傾向のアドバイスがもらえます。在職中の方は日程調整もエージェントに任せられます。",
            },
            {
              num: "5",
              title: "内定・退職手続き（2〜4週間）",
              desc: "内定が出たら、年収交渉はエージェントに任せましょう。入社日の調整や退職手続きのアドバイスも受けられます。一般的に退職は1〜2ヶ月前に申し出るのがマナーです。円満退職を心がけましょう。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 転職サイトの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "求人数の多さ",
              desc: "求人数が多いほど選択肢が広がります。リクルートエージェント（約60万件）やdoda（約24万件）は業界トップクラスの求人数を誇り、幅広い業種・職種をカバーしています。",
            },
            {
              num: "2",
              title: "サポート体制の充実度",
              desc: "書類添削・面接対策・年収交渉の代行など、サポートが充実しているかを確認しましょう。dodaのダブルサポートやリクルートエージェントの面接力向上セミナーは特におすすめです。",
            },
            {
              num: "3",
              title: "対象年齢層・キャリアレベル",
              desc: "自分の年齢やキャリアレベルに合ったサービスを選ぶことが重要です。20代ならマイナビ転職、ハイクラスならビズリーチなど、得意分野が異なります。",
            },
            {
              num: "4",
              title: "非公開求人の有無",
              desc: "転職エージェントの大きなメリットの一つが非公開求人です。好条件の求人ほど非公開で募集されることが多いため、エージェントサービスの利用がおすすめです。",
            },
            {
              num: "5",
              title: "口コミ・企業情報の充実度",
              desc: "入社後のミスマッチを防ぐために、企業の内部情報や口コミが確認できるかも重要なポイントです。エン転職は口コミ情報が特に充実しています。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            転職サイト・転職エージェントは、効率的な転職活動に欠かせないツールです。この記事で比較した5社は、いずれも実績のあるサービスで無料で利用できます（ビズリーチのプレミアムプランを除く）。まずは2〜3社に登録して、自分に合ったサービスを見つけましょう。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                doda
              </span>
              <span className="text-sm text-muted">
                → 総合力No.1。転職サイト＋エージェント一体型で初めての転職にも安心。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                リクルートエージェント
              </span>
              <span className="text-sm text-muted">
                → 求人数No.1。業界最大手の信頼感と全国対応の手厚いサポート。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                マイナビ転職
              </span>
              <span className="text-sm text-muted">
                → 20代・第二新卒に強い。未経験からのキャリアチェンジにも対応。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">
                ビズリーチ
              </span>
              <span className="text-sm text-muted">
                → ハイクラス転職に特化。年収600万円以上の方は登録必須。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                エン転職
              </span>
              <span className="text-sm text-muted">
                → 口コミ・企業情報が充実。入社後のミスマッチを防ぎたい方に。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            転職は人生の大きな転機です。複数の転職サイトを活用して情報収集を行い、後悔のない転職を実現しましょう。
          </p>
        </div>
      </section>

      {/* Related Guide CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          キャリアに役立つツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          履歴書作成やテキスト処理など、転職活動に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/web-tools-for-work"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            仕事効率化ツールを見る
          </Link>
          <Link
            href="/guide/side-business-tools"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            副業ツールガイドを見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まずは転職サイトに登録してみよう
        </h2>
        <p className="text-sm text-muted mb-5">
          転職を成功させる第一歩は、転職サイトへの登録です。すべて無料で利用でき、登録は最短3分で完了します。複数社に登録して、自分に合ったサービスを見つけましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://doda.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            dodaに登録する
          </a>
          <a
            href="https://www.r-agent.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            リクルートエージェントに登録する
          </a>
          <a
            href="https://www.bizreach.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            ビズリーチに登録する
          </a>
        </div>
      </section>

      {/* Affiliate Comparison Table CTA */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">専門職向け転職サービス</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ファルマスタッフ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+95U5WY+276A+63OYA",
              highlight: "薬剤師転職専門・業界トップクラスの求人数",
              price: "無料登録",
              badge: "薬剤師向け",
            },
          ]}
        />
      </section>
    </div>
  );
}
