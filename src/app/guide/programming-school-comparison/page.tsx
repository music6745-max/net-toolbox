import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】プログラミングスクール比較おすすめ5選｜料金・言語・転職支援を徹底解説",
    description:
      "2026年最新のプログラミングスクールを徹底比較。テックアカデミー・DMM WEBCAMP・RUNTEQ・SkillHacks・Progateの料金・学習言語・転職サポートを詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/programming-school-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const schools = [
  {
    name: "テックアカデミー（TechAcademy）",
    shortName: "テックアカデミー",
    price: "月額174,900円〜",
    totalPrice: "174,900円〜（4週間プラン）",
    duration: "4週間〜16週間",
    languages: "Ruby, PHP, Java, Python, Swift, Kotlin, HTML/CSS, JavaScript",
    format: "完全オンライン",
    jobSupport: "転職サポートあり（テックアカデミーキャリア）",
    mentor: "現役エンジニアのメンターが週2回マンツーマン",
    pros: [
      "30以上の豊富なコースから目的に合った学習が選べる",
      "現役エンジニアによる週2回のマンツーマンメンタリング",
      "毎日15時〜23時のチャットサポートで質問し放題",
      "受講終了後もカリキュラムの閲覧が可能",
      "副業・フリーランス向けの実案件紹介制度あり",
      "1週間の無料体験で事前に相性を確認できる",
    ],
    cons: [
      "自主学習が基本のため、自己管理力が求められる",
      "メンタリングは週2回のみで、対面指導はない",
      "コース数が多く、初心者はどれを選ぶか迷いやすい",
    ],
    bestFor:
      "副業やフリーランスでプログラミングを活かしたい方に最適。豊富なコースと実案件紹介があり、学んだスキルをすぐに収入に結びつけやすい環境です。",
    url: "https://techacademy.jp/",
    badge: "副業・フリーランスに強い",
    color: "blue",
  },
  {
    name: "DMM WEBCAMP",
    shortName: "DMM WEBCAMP",
    price: "月額169,800円〜",
    totalPrice: "169,800円〜（短期集中コース）",
    duration: "4週間〜16週間",
    languages: "Ruby, Ruby on Rails, HTML/CSS, JavaScript, Python",
    format: "オンライン＋通学（東京・大阪）",
    jobSupport: "転職保証付き（転職できなければ全額返金）",
    mentor: "専属キャリアアドバイザーが転職まで伴走",
    pros: [
      "転職成功率98%、転職保証付きで安心",
      "未経験者に特化したカリキュラム設計",
      "チーム開発の経験ができ、実務に近い学習ができる",
      "経済産業省認定の給付金対象で最大70%OFF",
      "卒業後もキャリアサポートが継続",
      "DMMグループの企業ネットワークを活かした求人紹介",
    ],
    cons: [
      "転職保証には年齢制限（30歳未満）がある",
      "転職コースは学習期間が長め（3〜4ヶ月）",
      "教室利用は東京・大阪のみ",
    ],
    bestFor:
      "未経験からエンジニアに転職したい方に最もおすすめ。転職保証と手厚いキャリアサポートで、確実にエンジニア転職を実現できます。",
    url: "https://web-camp.io/",
    badge: "転職保証No.1",
    color: "purple",
  },
  {
    name: "RUNTEQ（ランテック）",
    shortName: "RUNTEQ",
    price: "550,000円（一括）",
    totalPrice: "550,000円（一括払い）",
    duration: "約9ヶ月（1,000時間）",
    languages: "Ruby, Ruby on Rails, HTML/CSS, JavaScript, SQL",
    format: "完全オンライン",
    jobSupport: "Web系自社開発企業への転職サポート",
    mentor: "現役エンジニアによるコードレビュー",
    pros: [
      "1,000時間の圧倒的な学習量で実務レベルのスキルが身につく",
      "Web系自社開発企業への就職実績が豊富",
      "現役エンジニアによる丁寧なコードレビュー",
      "オリジナルのポートフォリオ制作を重視",
      "卒業生コミュニティが活発で人脈が広がる",
      "技術試験対策やCS基礎のカリキュラムもカバー",
    ],
    cons: [
      "学習期間が9ヶ月と長い",
      "一括払いで初期費用が高い（分割対応あり）",
      "Ruby on Rails特化のため、他言語を学びたい人には不向き",
    ],
    bestFor:
      "Web系自社開発企業でエンジニアとして本格的に働きたい方向け。長期間かけて実務レベルのスキルを確実に身につけたい人に最適です。",
    url: "https://runteq.jp/",
    badge: "実務レベル",
    color: "green",
  },
  {
    name: "SkillHacks（スキルハックス）",
    shortName: "SkillHacks",
    price: "69,800円（買い切り）",
    totalPrice: "69,800円（買い切り・追加費用なし）",
    duration: "無期限（自分のペースで学習）",
    languages: "Ruby, Ruby on Rails, HTML/CSS, Bootstrap",
    format: "完全オンライン（動画講座）",
    jobSupport: "転職サポートなし（別途転職サービスあり）",
    mentor: "LINE@で無期限の質問サポート",
    pros: [
      "69,800円の買い切りで追加費用が一切かからない",
      "自分のペースで無期限に学習できる",
      "94本以上のわかりやすい動画講座",
      "LINE@で講師に無期限で質問できる",
      "他のHacksシリーズ（動画編集、デザイン等）も展開",
      "副業・教養として気軽にプログラミングを始められる",
    ],
    cons: [
      "転職サポートは含まれていない",
      "学習内容はRuby中心で範囲が限定的",
      "対面指導やチーム開発の体験はない",
    ],
    bestFor:
      "コストを最小限に抑えてプログラミングを学びたい方に最適。副業や教養としてプログラミングの基礎を身につけたい方におすすめです。",
    url: "https://skillhacks.co.jp/",
    badge: "コスパ最強",
    color: "orange",
    isAffiliate: true,
  },
  {
    name: "Progate（プロゲート）",
    shortName: "Progate",
    price: "月額1,078円〜",
    totalPrice: "月額1,078円（有料プラン）/ 無料プランあり",
    duration: "無期限（サブスクリプション）",
    languages: "HTML/CSS, JavaScript, Ruby, Python, Java, Go, SQL, React, Node.js",
    format: "完全オンライン（ブラウザ完結）",
    jobSupport: "なし",
    mentor: "なし（自主学習型）",
    pros: [
      "月額1,078円と圧倒的に安い（無料プランもあり）",
      "環境構築不要でブラウザだけで即学習開始",
      "イラスト中心のスライドで直感的に理解できる",
      "15言語以上の幅広い言語に対応",
      "スマホアプリでも学習可能",
      "プログラミングの適性を試すのに最適",
    ],
    cons: [
      "基礎レベルまでの内容で実務レベルには不十分",
      "メンターや質問サポートがない",
      "転職・副業に直結するスキルは身につきにくい",
    ],
    bestFor:
      "プログラミングに興味があるけど、まずは気軽に試してみたい超初心者に最適。月額1,078円（無料プランもあり）で始められます。",
    url: "https://prog-8.com/",
    badge: "超初心者向け",
    color: "teal",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

const faqItems = [
  {
    question: "プログラミングスクールと独学、どちらがおすすめですか？",
    answer:
      "目的によります。エンジニア転職を目指すなら、カリキュラムが体系化されていて転職サポートもあるスクールがおすすめです。教養や趣味として学ぶなら、Progateやドットインストールなどで独学から始めるのも良い選択です。独学で挫折した経験がある方は、メンター付きのスクールを検討しましょう。",
  },
  {
    question: "未経験からエンジニア転職は本当にできますか？",
    answer:
      "はい、未経験からエンジニアに転職した実績は多数あります。DMM WEBCAMPは転職成功率98%を公表しており、転職保証制度もあります。ただし、30代以上は選考が厳しくなる傾向があるため、早めの行動がおすすめです。学習期間は最低3〜6ヶ月は見ておきましょう。",
  },
  {
    question: "プログラミングスクールの費用はどれくらいかかりますか？",
    answer:
      "月額1,078円（Progate）から550,000円（RUNTEQ）まで幅広く、目的やサポート内容によって大きく異なります。経済産業省の給付金対象スクール（DMM WEBCAMPなど）なら最大70%が給付され、実質負担を大幅に減らせます。まずは無料体験やカウンセリングで自分に合ったプランを確認しましょう。",
  },
  {
    question: "どのプログラミング言語を学ぶべきですか？",
    answer:
      "目的によって最適な言語は異なります。Web開発ならRubyやJavaScript、AI・データ分析ならPython、スマホアプリならSwift（iOS）やKotlin（Android）が人気です。迷ったらWeb開発で需要の高いRubyかJavaScriptから始めるのがおすすめです。",
  },
  {
    question: "働きながらプログラミングスクールに通えますか？",
    answer:
      "はい、多くのスクールが働きながら学べるプランを用意しています。テックアカデミーは完全オンラインで夜間のメンタリングに対応、SkillHacksは買い切り型で自分のペースで学習できます。DMM WEBCAMPにも夜間・休日プランがあります。1日2〜3時間の学習時間を確保できれば十分です。",
  },
  {
    question: "プログラミングスクールの給付金制度とは何ですか？",
    answer:
      "経済産業省が認定する「リスキリングを通じたキャリアアップ支援事業」や「専門実践教育訓練給付金」の対象スクールでは、受講料の最大70%（上限56万円）が給付されます。DMM WEBCAMPやテックアカデミーの一部コースが対象です。ハローワークでの手続きが必要なため、事前に確認しましょう。",
  },
  {
    question: "プログラミングスクール卒業後の年収はどれくらいですか？",
    answer:
      "未経験からエンジニア転職した場合、初年度の年収は300〜400万円程度が一般的です。経験を積むことで2〜3年目には400〜600万円、5年以上のベテランになると600〜1,000万円以上も可能です。フリーランスエンジニアの場合、スキル次第で年収1,000万円以上を稼ぐ人もいます。",
  },
];

export default function ProgrammingSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "プログラミングスクール比較おすすめ5選",
            url: `${siteConfig.url}/guide/programming-school-comparison`,
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
        <span>プログラミングスクール比較おすすめ5選</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            プログラミング
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】プログラミングスクール比較おすすめ5選｜料金・言語・転職支援を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「プログラミングスクールが多すぎて、どれを選べばいいかわからない」そんな悩みを解決します。この記事では、2026年現在おすすめのプログラミングスクール5社（テックアカデミー・DMM
          WEBCAMP・RUNTEQ・SkillHacks・Progate）を料金・学習言語・転職サポート・受講形式で徹底比較。副業・転職・フリーランスなど目的別のおすすめや、失敗しない選び方も解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：目的別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              エンジニア転職なら → DMM WEBCAMP
            </span>
            （転職保証付き・転職成功率98%）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              副業・フリーランスなら → テックアカデミー
            </span>
            （実案件紹介あり・豊富なコース）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              本格エンジニアを目指すなら → RUNTEQ
            </span>
            （1,000時間の実務レベル学習）
          </p>
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              コスパ重視なら → SkillHacks
            </span>
            （69,800円買い切り・無期限サポート）
          </p>
          <p>
            <span className="font-bold text-teal-700 dark:text-teal-300">
              まず試してみたいなら → Progate
            </span>
            （月額1,078円・無料プランあり）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-school" className="text-primary hover:underline">
              1. プログラミングスクールが注目される理由
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. プログラミングスクール5社の比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各スクールの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#by-purpose" className="text-primary hover:underline">
              4. 目的別おすすめスクール
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. 失敗しないプログラミングスクールの選び方
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              6. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              7. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Programming School */}
      <section id="why-school" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. プログラミングスクールが注目される理由
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          2026年現在、IT人材の需要は年々増加しており、プログラミングスキルの習得はキャリアアップの大きな武器になっています。プログラミングスクールが注目されている主な理由を見てみましょう。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128188;",
              title: "エンジニア人材の深刻な不足",
              desc: "経済産業省の試算では、2030年に最大約79万人のIT人材が不足すると予測されています。未経験からでもエンジニアとして就職・転職できるチャンスが広がっています。",
            },
            {
              icon: "&#128176;",
              title: "副業・フリーランスの収入源",
              desc: "Web制作やアプリ開発のスキルがあれば、副業で月5〜30万円の収入を得ることも可能です。クラウドソーシングサイトにはプログラミング案件が豊富にあります。",
            },
            {
              icon: "&#128640;",
              title: "独学の挫折率は約90%",
              desc: "プログラミングの独学は挫折率が高いと言われています。スクールではメンターのサポートや体系的なカリキュラムにより、効率的に学習を進められます。",
            },
            {
              icon: "&#127891;",
              title: "給付金制度で受講料を大幅削減",
              desc: "経済産業省認定のスクールなら受講料の最大70%が給付されます。実質負担を大幅に軽減でき、投資対効果の高い学習が可能です。",
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
          2. プログラミングスクール5社の比較表
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
                  <span className="text-blue-600 dark:text-blue-400">テックアカデミー</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">DMM WEBCAMP</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">RUNTEQ</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">SkillHacks</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-teal-600 dark:text-teal-400">Progate</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "料金",
                  ta: "174,900円〜",
                  dmm: "169,800円〜",
                  runteq: "550,000円",
                  sh: "69,800円",
                  pg: "月額1,078円",
                },
                {
                  label: "料金体系",
                  ta: "期間制",
                  dmm: "期間制",
                  runteq: "一括払い",
                  sh: "買い切り",
                  pg: "月額制",
                },
                {
                  label: "学習期間",
                  ta: "4〜16週間",
                  dmm: "4〜16週間",
                  runteq: "約9ヶ月",
                  sh: "無期限",
                  pg: "無期限",
                },
                {
                  label: "主な言語",
                  ta: "Ruby, PHP, Python等",
                  dmm: "Ruby, Python",
                  runteq: "Ruby on Rails",
                  sh: "Ruby",
                  pg: "15言語以上",
                },
                {
                  label: "受講形式",
                  ta: "完全オンライン",
                  dmm: "オンライン+通学",
                  runteq: "完全オンライン",
                  sh: "動画講座",
                  pg: "ブラウザ完結",
                },
                {
                  label: "メンター",
                  ta: "週2回（現役エンジニア）",
                  dmm: "専属アドバイザー",
                  runteq: "コードレビュー",
                  sh: "LINE質問",
                  pg: "なし",
                },
                {
                  label: "転職サポート",
                  ta: "あり",
                  dmm: "転職保証付き",
                  runteq: "あり（自社開発企業）",
                  sh: "なし",
                  pg: "なし",
                },
                {
                  label: "給付金対象",
                  ta: "一部コース対象",
                  dmm: "対象（最大70%OFF）",
                  runteq: "対象",
                  sh: "非対象",
                  pg: "非対象",
                },
                {
                  label: "おすすめ層",
                  ta: "副業・フリーランス",
                  dmm: "エンジニア転職",
                  runteq: "本格エンジニア",
                  sh: "教養・副業",
                  pg: "超初心者",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.ta}</td>
                  <td className="border border-card-border p-3">{row.dmm}</td>
                  <td className="border border-card-border p-3">{row.runteq}</td>
                  <td className="border border-card-border p-3">{row.sh}</td>
                  <td className="border border-card-border p-3">{row.pg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。キャンペーンや給付金により変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各スクールの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {schools.map((school, index) => (
            <div
              key={school.name}
              id={`school-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{school.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[school.color]}`}
                >
                  {school.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">料金</span>
                  <span className="font-bold">{school.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">学習期間</span>
                  <span className="font-bold">{school.duration}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">受講形式</span>
                  <span className="font-bold">{school.format}</span>
                </div>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">主な学習言語</span>
                  <span>{school.languages}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">転職サポート</span>
                  <span>{school.jobSupport}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {school.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {school.pros.map((p) => (
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
                  {school.cons.map((c) => (
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
                  href={school.url}
                  target="_blank"
                  rel={
                    school.isAffiliate
                      ? "nofollow sponsored noopener noreferrer"
                      : "nofollow noopener noreferrer"
                  }
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {school.shortName}の公式サイトを見る
                </a>
                {school.shortName === "テックアカデミー" && (
                  <p className="text-xs text-muted mt-2">
                    1週間の無料体験あり
                  </p>
                )}
                {school.shortName === "DMM WEBCAMP" && (
                  <p className="text-xs text-muted mt-2">
                    無料カウンセリング受付中・転職保証付き
                  </p>
                )}
                {school.shortName === "Progate" && (
                  <p className="text-xs text-muted mt-2">
                    無料プランで今すぐ始められる
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - By Purpose */}
      <section id="by-purpose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 目的別おすすめスクール
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "副業でプログラミング収入を得たい",
              school: "テックアカデミー",
              reason:
                "副業向けの実案件紹介制度があり、学んだスキルをすぐに収入に結びつけられます。Web制作やWordPressなど副業で需要の高いスキルを効率的に習得でき、メンターのサポートで実案件にも安心して取り組めます。",
              url: "https://techacademy.jp/",
              isAffiliate: false,
            },
            {
              scene: "未経験からエンジニアに転職したい",
              school: "DMM WEBCAMP",
              reason:
                "転職成功率98%、転職できなければ全額返金の転職保証付き。未経験者に特化したカリキュラムとDMMグループの企業ネットワークで、確実にエンジニア転職を実現できます。給付金で最大70%OFFになるのも魅力です。",
              url: "https://web-camp.io/",
              isAffiliate: false,
            },
            {
              scene: "フリーランスエンジニアとして独立したい",
              school: "RUNTEQ",
              reason:
                "1,000時間の圧倒的な学習量で、フリーランスとして通用する実務レベルのスキルが身につきます。ポートフォリオ制作にも力を入れており、案件獲得時のアピール材料になります。卒業生コミュニティも活発です。",
              url: "https://runteq.jp/",
              isAffiliate: false,
            },
            {
              scene: "教養としてプログラミングを学びたい",
              school: "SkillHacks / Progate",
              reason:
                "コストを抑えて気軽に学ぶならSkillHacks（69,800円買い切り）またはProgate（月額1,078円）がおすすめ。SkillHacksは動画講座で無期限サポート付き、Progateはブラウザだけで手軽に始められます。まずはProgateの無料プランで適性を試してみましょう。",
              url: "https://prog-8.com/",
              isAffiliate: false,
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.school}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel={
                  item.isAffiliate
                    ? "nofollow sponsored noopener noreferrer"
                    : "nofollow noopener noreferrer"
                }
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.school}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 失敗しないプログラミングスクールの選び方
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "学習の目的を明確にする",
              desc: "転職・副業・フリーランス・教養など、目的によって最適なスクールは大きく異なります。転職目的なら転職保証のあるDMM WEBCAMP、副業ならテックアカデミー、教養ならProgate・SkillHacksなど、まず目的を明確にしましょう。",
            },
            {
              num: "2",
              title: "料金と学習期間のバランスを確認する",
              desc: "安いからと言って自分に合うとは限りません。料金だけでなく、学習時間の確保やサポート内容も含めたトータルのコスパで判断しましょう。給付金対象スクールなら実質負担を大幅に減らせます。",
            },
            {
              num: "3",
              title: "無料体験・カウンセリングを必ず受ける",
              desc: "ほとんどのスクールが無料体験や無料カウンセリングを提供しています。実際のカリキュラムの雰囲気やメンターとの相性を確認してから決めることで、ミスマッチを防げます。テックアカデミーは1週間の無料体験を提供しています。",
            },
            {
              num: "4",
              title: "メンター・講師の質をチェックする",
              desc: "現役エンジニアがメンターかどうかは重要なポイントです。実務経験のあるメンターからは、教科書にはないリアルな知識やコツを学べます。テックアカデミーやRUNTEQは現役エンジニアがメンターを務めています。",
            },
            {
              num: "5",
              title: "卒業後のサポート内容を確認する",
              desc: "カリキュラム終了後もキャリアサポートが受けられるか、教材の閲覧が可能かを確認しましょう。DMM WEBCAMPは卒業後もキャリアサポートが継続し、テックアカデミーは受講後もカリキュラムを閲覧できます。",
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

      {/* Section 6 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
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

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            プログラミングスクール選びで最も大切なのは、自分の目的に合ったスクールを選ぶことです。この記事で比較した5社は、それぞれ異なる強みを持っており、あなたの目的に合ったスクールが必ず見つかります。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                テックアカデミー
              </span>
              <span className="text-sm text-muted">
                → 副業・フリーランス向け。豊富なコースと実案件紹介で収入に直結。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                DMM WEBCAMP
              </span>
              <span className="text-sm text-muted">
                → エンジニア転職No.1。転職保証と給付金で安心して転職を目指せる。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                RUNTEQ
              </span>
              <span className="text-sm text-muted">
                → 本格派向け。1,000時間の学習で実務レベルのスキルを確実に習得。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">
                SkillHacks
              </span>
              <span className="text-sm text-muted">
                → コスパ最強。69,800円買い切りで無期限学習・無期限質問サポート。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
              <span className="font-bold text-teal-700 dark:text-teal-300 flex-shrink-0">
                Progate
              </span>
              <span className="text-sm text-muted">
                → 超初心者の第一歩。無料プランで今すぐプログラミングを体験。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            まずは無料体験や無料カウンセリングを活用して、自分に合ったスクールを見つけましょう。複数のスクールを比較検討することで、最適な選択ができます。
          </p>
        </div>
      </section>

      {/* SkillHacks Affiliate CTA */}
      <AffiliateCTA
        serviceName="SkillHacks（スキルハックス）"
        url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM"
        description="業界最安値のオンラインプログラミングスクール。動画で学べて質問し放題。初心者でも安心のサポート体制。"
        badge="業界最安値"
        color="purple"
      />

      {/* Winスクール Affiliate CTA */}
      <AffiliateCTA
        serviceName="Winスクール"
        url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH"
        description="全国各地に教室を展開する個人レッスンのプログラミングスクール。資格取得に強く、就転職サポートも充実。"
        badge="全国展開"
        color="blue"
      />

      {/* Python Winner (Winスクール) Affiliate CTA */}
      <AffiliateCTA
        serviceName="Python Winner（Winスクール）"
        url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9"
        description="Winスクールが提供するPython特化コース。AI・データ分析に必要なスキルを個人レッスンで効率的に習得できます。"
        badge="Python特化"
        color="green"
      />

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          開発に役立つツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          JSON整形・パスワード生成・Base64変換など、Web開発で役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/developer-tools-guide"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            開発者向けツールガイドを見る
          </Link>
          <Link
            href="/guide/job-site-comparison"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            転職サイト比較も見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まずは無料で始めてみよう
        </h2>
        <p className="text-sm text-muted mb-5">
          プログラミング学習は最初の一歩が最も大切です。多くのスクールが無料体験やカウンセリングを提供しているので、気になるスクールから試してみましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://techacademy.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            テックアカデミー無料体験
          </a>
          <a
            href="https://web-camp.io/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            DMM WEBCAMP無料カウンセリング
          </a>
          <a
            href="https://prog-8.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Progateで無料で始める
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
    </div>
  );
}
