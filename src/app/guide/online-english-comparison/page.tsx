import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】オンライン英会話比較おすすめ5選｜料金・講師・特徴を徹底解説",
    description:
      "2026年最新のオンライン英会話サービスを徹底比較。DMM英会話・NativeCamp・QQEnglish・Kimini英会話・AQUESの料金・講師・レッスン内容を詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/online-english-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const services = [
  {
    name: "DMM英会話",
    price: "月額6,980円〜",
    lessonLength: "25分",
    instructors: "120カ国以上・10,000人以上",
    method: "オリジナル教材・Daily News等",
    freeTrial: "無料体験2回",
    pros: [
      "120カ国以上の多国籍講師が在籍し、さまざまな英語に触れられる",
      "12,000以上の無料教材が使い放題",
      "24時間365日いつでもレッスン可能",
      "英語学習アプリ「iKnow!」が無料で使える",
      "初心者から上級者まで幅広いレベルに対応",
      "日本語対応講師も多数在籍",
    ],
    cons: [
      "ネイティブ講師プランは月額19,880円〜と高め",
      "講師の質にばらつきがある場合がある",
      "人気講師は予約が取りにくい時間帯がある",
    ],
    bestFor:
      "多国籍な講師と話したい方、豊富な教材で幅広く学びたい方におすすめ。Daily Newsなど時事ネタを使ったレッスンも人気です。",
    url: "https://eikaiwa.dmm.com/",
    badge: "教材数No.1",
    color: "blue",
  },
  {
    name: "NativeCamp",
    price: "月額6,480円",
    lessonLength: "25分（回数無制限）",
    instructors: "130カ国以上・12,000人以上",
    method: "カランメソッド・オリジナル教材",
    freeTrial: "7日間無料トライアル",
    pros: [
      "月額6,480円でレッスン回数無制限、何回でも受け放題",
      "予約不要で「今すぐレッスン」が可能",
      "カランメソッドの正式提携校",
      "130カ国以上の講師が在籍",
      "ファミリープランで家族は月額1,980円",
      "24時間365日いつでも受講可能",
    ],
    cons: [
      "人気講師を予約するにはコイン（別料金）が必要",
      "「今すぐレッスン」は講師を選びにくい",
      "回線品質が講師の環境に依存する場合がある",
    ],
    bestFor:
      "とにかくたくさん英語を話したい方に最適。回数無制限なので、1日に何回でも受講でき、短期間での上達が期待できます。",
    url: "https://nativecamp.net/",
    badge: "回数無制限",
    color: "green",
  },
  {
    name: "QQEnglish",
    price: "月額2,980円〜",
    lessonLength: "25分",
    instructors: "フィリピン人講師・全員正社員・TESOL取得",
    method: "カランメソッド正式認定校・R.E.M.S.",
    freeTrial: "無料体験2回",
    pros: [
      "月額2,980円〜と業界最安クラスの料金設定",
      "講師全員が正社員でTESOL（英語教授法資格）を取得済み",
      "カランメソッド正式認定校で質の高いレッスン",
      "通信環境が安定したオフィスからのレッスン提供",
      "独自メソッド「R.E.M.S.」で効率的な英語習得",
      "日本人スタッフによるサポート体制",
    ],
    cons: [
      "講師はフィリピン人のみ（ネイティブ講師は不在）",
      "深夜帯（0時〜6時）はレッスン枠が少ない",
      "月4回プランだと週1回ペースになる",
    ],
    bestFor:
      "コスパ重視で質の高いレッスンを受けたい方に最適。講師の質が安定しており、カランメソッドで効率的に英語力を伸ばせます。",
    url: "https://www.qqeng.com/",
    badge: "コスパNo.1",
    color: "orange",
  },
  {
    name: "Kimini英会話",
    price: "月額6,380円〜",
    lessonLength: "25分",
    instructors: "フィリピン人講師",
    method: "学研の教材・コース制カリキュラム",
    freeTrial: "10日間無料体験",
    pros: [
      "教育大手の学研グループが運営で信頼性が高い",
      "コース制カリキュラムで学習の道筋が明確",
      "学研の教材をベースにした質の高い教材",
      "10日間の長期無料体験が可能",
      "初心者向けの丁寧なレッスン設計",
      "小中高生向けの学校教育コースも充実",
    ],
    cons: [
      "ネイティブ講師のレッスンは受けられない",
      "上級者向けのコンテンツがやや少ない",
      "深夜の時間帯はレッスンが受けられない",
    ],
    bestFor:
      "英語学習を一から始めたい初心者の方におすすめ。学研の体系的なカリキュラムで、何をどう学べばいいか迷うことがありません。",
    url: "https://kimini.online/",
    badge: "初心者に最適",
    color: "purple",
  },
  {
    name: "AQUES",
    price: "有料お試しレッスン（7回・1,980円）",
    lessonLength: "50分〜150分",
    instructors: "日本人コンシェルジュ＋外国人講師",
    method: "AQUESマンツーマンメソッド・予習不要",
    freeTrial: "有料お試し7回1,980円",
    pros: [
      "日本人コンシェルジュと外国人講師のハイブリッドレッスン",
      "1レッスン50分〜150分の長時間レッスンで集中的に学べる",
      "予習・復習不要のレッスン設計で忙しい人にも最適",
      "メンタリストDaiGoが効果を実感し推薦",
      "自動予約システムで挫折しにくい仕組み",
      "3日おきのペースでレッスンを受け習慣化しやすい",
    ],
    cons: [
      "月額料金は非公開（お試し後に案内）",
      "他社と比較して料金は高め",
      "フィリピン人講師中心で欧米ネイティブは少ない",
    ],
    bestFor:
      "英語学習で何度も挫折した経験がある方におすすめ。自動予約と長時間レッスンで、確実に英語を話す習慣が身につきます。",
    url: "https://aques-talking.com/",
    badge: "挫折防止No.1",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "オンライン英会話は初心者でも大丈夫ですか？",
    answer:
      "はい、初心者の方でも安心して始められます。今回紹介したサービスはすべて初心者向けのコースや教材を用意しています。特にKimini英会話は学研グループの体系的なカリキュラムで、DMM英会話やNativeCampには日本語対応の講師も在籍しています。まずは無料体験で雰囲気を確認してみることをおすすめします。",
  },
  {
    question: "1日何分くらいレッスンを受ければ効果がありますか？",
    answer:
      "一般的には1日25分のレッスンを毎日続けることで効果を実感できます。NativeCampなら回数無制限なので、時間がある日は2〜3レッスン受けることも可能です。AQUESは1レッスン50分〜150分の集中型で、週2〜3回のペースでも効果が出るよう設計されています。大切なのは継続することです。",
  },
  {
    question: "フィリピン人講師とネイティブ講師、どちらが良いですか？",
    answer:
      "目的によって異なります。日常英会話やビジネス英語の基礎を学ぶなら、フィリピン人講師は発音がきれいでコスパが良くおすすめです。ネイティブならではの表現やアクセントを学びたい場合は、DMM英会話のネイティブプランやNativeCampのネイティブ講師がおすすめです。QQEnglishのフィリピン人講師は全員TESOL取得の正社員なので、教える質が安定しています。",
  },
  {
    question: "オンライン英会話の料金相場はいくらですか？",
    answer:
      "月額3,000円〜7,000円が一般的な相場です。最も安いのはQQEnglishの月4回プラン（月額2,980円）で、毎日プランだとDMM英会話（月額6,980円）やNativeCamp（月額6,480円）が標準的です。NativeCampは回数無制限なので、たくさん受ければ受けるほど1レッスンあたりの料金が安くなります。",
  },
  {
    question: "スマホでもレッスンは受けられますか？",
    answer:
      "はい、今回紹介した5社すべてスマホでのレッスンに対応しています。専用アプリやブラウザからレッスンを受講できます。通勤時間や休憩時間など、スキマ時間を活用して学習できるのもオンライン英会話のメリットです。ただし、安定したWi-Fi環境での受講をおすすめします。",
  },
  {
    question: "オンライン英会話でTOEICのスコアは上がりますか？",
    answer:
      "オンライン英会話はスピーキング力の向上に特に効果的ですが、TOEIC対策に特化したコースを提供しているサービスもあります。DMM英会話やQQEnglishにはTOEIC対策教材があり、Kimini英会話にもTOEIC対策コースがあります。リスニング力の向上はTOEICスコアアップにも直結するため、毎日のレッスンで英語に触れる時間を増やすことが重要です。",
  },
  {
    question: "子供にオンライン英会話を受けさせたいのですが、何歳から可能ですか？",
    answer:
      "多くのサービスでは3歳頃から受講可能です。NativeCampには「キッズコース」、DMM英会話にも子供向け教材が用意されています。Kimini英会話は学研グループが運営しているため小中高生向けのコースが充実しています。小さなお子様の場合は、親御さんが横でサポートしながらのレッスンがおすすめです。",
  },
];

export default function OnlineEnglishComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "オンライン英会話比較おすすめ5選",
            url: `${siteConfig.url}/guide/online-english-comparison`,
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
        <span>オンライン英会話比較おすすめ5選</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            英語学習
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】オンライン英会話比較おすすめ5選｜料金・講師・特徴を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「オンライン英会話って結局どれがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのオンライン英会話サービス5社（DMM英会話・NativeCamp・QQEnglish・Kimini英会話・AQUES）を料金・講師の質・レッスン内容・無料体験で徹底比較。初心者からビジネス英語、TOEIC対策まで、あなたの目的に合った最適なサービスの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">結論：迷ったらこれ！</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              コスパ最強・回数無制限なら → NativeCamp
            </span>
            （月額6,480円で何回でもレッスン受け放題）
          </p>
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              とにかく安く始めたいなら → QQEnglish
            </span>
            （月額2,980円〜・講師全員がプロ資格保持）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              教材の豊富さで選ぶなら → DMM英会話
            </span>
            （12,000以上の教材・120カ国の講師）
          </p>
        </div>
        <div className="mt-4">
          <a
            href="https://nativecamp.net/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            NativeCampを7日間無料で試す
          </a>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-online-english" className="text-primary hover:underline">
              1. オンライン英会話が選ばれる理由
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. オンライン英会話5社の料金・スペック比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各サービスの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#by-purpose" className="text-primary hover:underline">
              4. 目的別おすすめオンライン英会話
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. オンライン英会話の選び方5つのポイント
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

      {/* Section 1 - Why Online English */}
      <section id="why-online-english" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. オンライン英会話が選ばれる理由
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          通学型の英会話スクールと比べて、オンライン英会話には多くのメリットがあります。2026年現在、オンライン英会話の利用者数は年々増加しており、英語学習の主流になりつつあります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128176;",
              title: "通学型の10分の1以下の料金",
              desc: "通学型英会話スクールは月額2万円〜5万円が相場ですが、オンライン英会話なら月額3,000円〜7,000円で毎日レッスンが受けられます。QQEnglishなら月額2,980円から始められます。",
            },
            {
              icon: "&#128354;",
              title: "24時間365日いつでもレッスン可能",
              desc: "早朝でも深夜でも、自分の都合の良い時間にレッスンが受けられます。NativeCampなら予約不要で思い立った瞬間にレッスン開始できます。",
            },
            {
              icon: "&#127968;",
              title: "自宅から受講OK・通学不要",
              desc: "パソコンやスマホがあれば自宅からレッスンを受けられます。通学の時間と交通費を節約でき、忙しい社会人や子育て中の方にも最適です。",
            },
            {
              icon: "&#127758;",
              title: "世界中の講師とマンツーマンレッスン",
              desc: "フィリピン、アメリカ、イギリスなど世界中の講師と1対1でレッスンが受けられます。グループレッスンと違い、自分のペースで学習を進められます。",
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

      {/* Mid CTA */}
      <div className="bg-card-bg border-2 border-primary/30 rounded-xl p-5 mb-10 text-center">
        <p className="text-sm font-bold mb-3">
          まずは無料で体験してみませんか？
        </p>
        <a
          href="https://nativecamp.net/"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          NativeCampを7日間無料で体験する
        </a>
        <p className="text-xs text-muted mt-2">7日間無料トライアル・レッスン回数無制限</p>
      </div>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. オンライン英会話5社の料金・スペック比較表
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
                  <span className="text-blue-600 dark:text-blue-400">DMM英会話</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">NativeCamp</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">QQEnglish</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">Kimini英会話</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">AQUES</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金",
                  dmm: "6,980円〜",
                  native: "6,480円",
                  qq: "2,980円〜",
                  kimini: "6,380円〜",
                  aques: "お試し7回1,980円",
                },
                {
                  label: "1レッスン時間",
                  dmm: "25分",
                  native: "25分",
                  qq: "25分",
                  kimini: "25分",
                  aques: "50分〜150分",
                },
                {
                  label: "レッスン回数",
                  dmm: "1日1回〜",
                  native: "無制限",
                  qq: "月4回〜",
                  kimini: "1日1回〜",
                  aques: "週3回〜",
                },
                {
                  label: "講師の国籍",
                  dmm: "120カ国以上",
                  native: "130カ国以上",
                  qq: "フィリピン",
                  kimini: "フィリピン",
                  aques: "フィリピン・日本人",
                },
                {
                  label: "講師の特徴",
                  dmm: "多国籍",
                  native: "多国籍",
                  qq: "全員正社員・TESOL取得",
                  kimini: "研修済み",
                  aques: "日本人サポート付き",
                },
                {
                  label: "レッスン方式",
                  dmm: "オリジナル教材",
                  native: "カランメソッド対応",
                  qq: "カランメソッド正式認定",
                  kimini: "学研カリキュラム",
                  aques: "独自メソッド",
                },
                {
                  label: "無料体験",
                  dmm: "2回",
                  native: "7日間",
                  qq: "2回",
                  kimini: "10日間",
                  aques: "有料7回1,980円",
                },
                {
                  label: "受講可能時間",
                  dmm: "24時間",
                  native: "24時間",
                  qq: "24時間",
                  kimini: "6〜24時",
                  aques: "5〜25時",
                },
                {
                  label: "予約",
                  dmm: "必要",
                  native: "不要（今すぐ可）",
                  qq: "必要",
                  kimini: "必要",
                  aques: "自動予約",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.dmm}</td>
                  <td className="border border-card-border p-3">{row.native}</td>
                  <td className="border border-card-border p-3">{row.qq}</td>
                  <td className="border border-card-border p-3">{row.kimini}</td>
                  <td className="border border-card-border p-3">{row.aques}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各サービスの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {services.map((svc, index) => (
            <div
              key={svc.name}
              id={`svc-${svc.name.toLowerCase().replace(/\s/g, "")}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{svc.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[svc.color]}`}
                >
                  {svc.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{svc.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">レッスン時間</span>
                  <span className="font-bold">{svc.lessonLength}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">講師</span>
                  <span className="font-bold">{svc.instructors}</span>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      レッスン方式
                    </span>
                    <span>{svc.method}</span>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      無料体験
                    </span>
                    <span>{svc.freeTrial}</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
                    <span className="text-primary block text-xs mb-1 font-bold">
                      料金
                    </span>
                    <span className="font-bold">{svc.price}</span>
                  </div>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {svc.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {svc.pros.map((p) => (
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
                  {svc.cons.map((c) => (
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
                  href={svc.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {svc.name}の公式サイトを見る
                </a>
                <p className="text-xs text-muted mt-2">
                  {svc.freeTrial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-10">
        <h3 className="text-lg font-bold mb-2 text-center">
          すべてのサービスに無料体験あり！まずは試してみよう
        </h3>
        <p className="text-sm text-muted text-center mb-4">
          どのサービスが自分に合うかは、実際に体験してみるのが一番です。無料体験で講師やレッスンの雰囲気を確認しましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://nativecamp.net/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            NativeCamp 7日間無料
          </a>
          <a
            href="https://www.qqeng.com/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            QQEnglish 無料体験2回
          </a>
          <a
            href="https://kimini.online/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Kimini 10日間無料
          </a>
        </div>
      </div>

      {/* Section 4 - By Purpose */}
      <section id="by-purpose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 目的別おすすめオンライン英会話
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "初心者・英語に自信がない方",
              service: "Kimini英会話",
              reason:
                "学研グループの体系的なカリキュラムで、英語学習の道筋が明確です。何をどう学べばいいか迷う初心者の方でも、コースに沿って進めるだけで着実にレベルアップできます。10日間の無料体験で自分に合うか確認できます。",
              url: "https://kimini.online/",
            },
            {
              scene: "ビジネス英語を身につけたい方",
              service: "DMM英会話",
              reason:
                "ビジネスシーン別の教材が充実しており、プレゼンテーション・会議・メール・電話対応など実践的なビジネス英語が学べます。120カ国以上の講師がいるため、取引先の国に合わせた英語練習も可能です。",
              url: "https://eikaiwa.dmm.com/",
            },
            {
              scene: "子供に英語を学ばせたい方",
              service: "NativeCamp",
              reason:
                "キッズコースが充実しており、回数無制限なので子供の興味があるときに何度でもレッスンが受けられます。ファミリープランなら2人目以降は月額1,980円とお得。楽しみながら英語に触れる機会を増やせます。",
              url: "https://nativecamp.net/",
            },
            {
              scene: "TOEIC対策をしたい方",
              service: "QQEnglish",
              reason:
                "TOEIC対策専用のカリキュラムがあり、講師全員がTESOLを取得したプロフェッショナルです。カランメソッドでリスニング力・スピーキング力を同時に鍛えられ、TOEICスコアアップに直結します。月額2,980円〜とコスパも抜群です。",
              url: "https://www.qqeng.com/",
            },
            {
              scene: "英語学習で何度も挫折した方",
              service: "AQUES",
              reason:
                "自動予約システムで「予約を忘れてサボる」ことを防止。日本人コンシェルジュがモチベーション管理をサポートし、外国人講師との実践レッスンで確実に英語力が身につきます。予習・復習不要の設計も挫折防止のポイントです。",
              url: "https://aques-talking.com/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.service}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.service}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. オンライン英会話の選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "料金とレッスン単価",
              desc: "月額料金だけでなく、1レッスンあたりの単価を比較しましょう。NativeCampは回数無制限なので受ければ受けるほどお得に。QQEnglishは月4回プランで月額2,980円と最安クラスです。",
            },
            {
              num: "2",
              title: "講師の質と国籍",
              desc: "フィリピン人講師は発音がきれいでコスパが良く人気です。QQEnglishは全員TESOL取得の正社員。多国籍な講師と話したいならDMM英会話やNativeCampがおすすめです。",
            },
            {
              num: "3",
              title: "レッスン教材とカリキュラム",
              desc: "DMM英会話は12,000以上の教材が無料で使い放題。Kimini英会話は学研のコース制カリキュラム。QQEnglishはカランメソッド正式認定校。目的に合った教材があるか確認しましょう。",
            },
            {
              num: "4",
              title: "予約の取りやすさ・受講時間",
              desc: "NativeCampは予約不要で「今すぐレッスン」が可能。忙しい方には大きなメリットです。AQUESは自動予約でサボり防止。自分のライフスタイルに合った予約方式を選びましょう。",
            },
            {
              num: "5",
              title: "無料体験の内容",
              desc: "必ず無料体験を受けてから決めましょう。Kimini英会話は10日間、NativeCampは7日間と長期間の体験が可能。実際にレッスンを受けて講師やシステムの使い勝手を確認することが大切です。",
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
            オンライン英会話は、自宅から手軽に英語を学べるコスパ抜群の学習方法です。この記事で比較した5社は、いずれも実績のある信頼性の高いサービスで、無料体験（または格安のお試しレッスン）が用意されています。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                DMM英会話
              </span>
              <span className="text-sm text-muted">
                → 12,000以上の教材と120カ国の講師。教材の豊富さで選ぶならこれ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                NativeCamp
              </span>
              <span className="text-sm text-muted">
                → 月額6,480円でレッスン回数無制限。たくさん話したい方に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">
                QQEnglish
              </span>
              <span className="text-sm text-muted">
                → 月額2,980円〜の最安値。講師全員がTESOL取得のプロ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                Kimini英会話
              </span>
              <span className="text-sm text-muted">
                → 学研グループの体系的カリキュラム。初心者に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                AQUES
              </span>
              <span className="text-sm text-muted">
                → 自動予約と日本人サポートで挫折を防止。継続が不安な方に。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            迷ったらまずは無料体験を2〜3社試してみて、自分に合ったサービスを見つけましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          英語学習に役立つツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          文字数カウントや文章校正など、英語学習に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/character-counter"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            文字数カウントツールを使う
          </Link>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイド記事を見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          NativeCampで英会話を始めよう
        </h2>
        <p className="text-sm text-muted mb-5">
          月額6,480円でレッスン回数無制限。予約不要で思い立った瞬間にレッスンを開始できます。130カ国以上の講師と24時間365日いつでも英会話レッスンが可能。7日間の無料トライアルで、まずは気軽に体験してみてください。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://nativecamp.net/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            NativeCamp公式サイトへ
          </a>
          <a
            href="https://www.qqeng.com/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            QQEnglishを見る
          </a>
          <a
            href="https://eikaiwa.dmm.com/"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            DMM英会話を見る
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
    </div>
  );
}
