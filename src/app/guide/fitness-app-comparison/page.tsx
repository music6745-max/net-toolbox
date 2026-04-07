import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】フィットネスアプリ比較おすすめ5選｜機能・料金・目的別に徹底解説",
    description:
      "2026年最新のフィットネスアプリを徹底比較。Nike Training Club・MyFitnessPal・FiNC・あすけん・Freeleticsの機能・料金・ワークアウト内容を詳しく解説。",
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
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/fitness-app-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const fitnessApps = [
  {
    name: "Nike Training Club",
    type: "ワークアウト特化型",
    price: "無料（一部プレミアム機能あり）",
    plan: "無料プラン / プレミアムプラン",
    workouts: "200種類以上のワークアウト動画",
    workoutDetail: "筋トレ・ヨガ・HIIT・ランニングなど多彩なメニュー。15〜60分のプログラム対応",
    diet: "食事管理機能なし",
    devices: "iOS / Android / Web",
    pros: [
      "基本機能がすべて無料で使える",
      "プロトレーナーによる高品質な動画レッスン",
      "初心者から上級者まで幅広いレベルに対応",
      "ヨガ・HIIT・筋トレなどジャンルが豊富",
      "Apple Watch・Wear OS連携に対応",
      "オフラインでもダウンロード済み動画を再生可能",
    ],
    cons: [
      "食事管理機能がない",
      "日本語対応が一部不完全",
      "パーソナライズ機能はプレミアム限定",
    ],
    bestFor:
      "自宅でトレーニングしたい方、動画を見ながら運動したい方に最適。無料で高品質なワークアウト動画が使い放題なのは大きなメリットです。",
    url: "https://www.nike.com/ntc-app",
    badge: "無料で高品質",
    color: "green",
  },
  {
    name: "MyFitnessPal",
    type: "食事管理・カロリー記録型",
    price: "無料 / プレミアム月額1,200円",
    plan: "無料プラン / プレミアムプラン（月額1,200円・年額6,000円）",
    workouts: "運動記録・カロリー消費計算",
    workoutDetail: "運動のカロリー消費を記録。400種類以上のエクササイズデータベース搭載",
    diet: "食品データベース1,400万件以上。バーコードスキャン対応",
    devices: "iOS / Android / Web",
    pros: [
      "世界最大級の食品データベース（1,400万件以上）",
      "バーコードスキャンで簡単にカロリー記録",
      "三大栄養素（PFC）の詳細な分析が可能",
      "Garmin・Fitbit・Apple Watchなど多数のデバイスと連携",
      "目標体重に合わせたカロリー設定",
      "コミュニティ機能でモチベーション維持",
    ],
    cons: [
      "日本の食品データが少なめ（手動登録が必要な場合あり）",
      "詳細な栄養分析はプレミアム限定",
      "広告が多い（無料プラン）",
    ],
    bestFor:
      "食事管理・カロリー計算をしっかり行いたい方に最適。ダイエット目的で食事内容を記録・分析したい方におすすめです。",
    url: "https://www.myfitnesspal.com/",
    badge: "食事管理No.1",
    color: "blue",
  },
  {
    name: "FiNC",
    type: "総合ヘルスケア型",
    price: "無料 / FiNC Plus 月額960円",
    plan: "無料プラン / FiNC Plus（月額960円）",
    workouts: "AI提案のワークアウトメニュー",
    workoutDetail: "AIが体型・目標に合わせたトレーニングメニューを自動提案。動画付きで初心者でも安心",
    diet: "食事写真をAIが自動解析してカロリー計算",
    devices: "iOS / Android",
    pros: [
      "AIが個人に最適化されたメニューを提案",
      "食事写真をAIが自動解析してカロリー計算",
      "歩数・体重・睡眠・生理など総合的に健康管理",
      "ポイントが貯まりフィットネスグッズと交換可能",
      "日本企業開発で日本語・日本食に完全対応",
      "管理栄養士監修のコンテンツが豊富",
    ],
    cons: [
      "AI解析の精度がやや不安定な場合がある",
      "高度なトレーニング機能は物足りない",
      "FiNC Plusの特典がやや分かりにくい",
    ],
    bestFor:
      "総合的な健康管理をしたい方、日本語で使いやすいアプリを探している方に最適。AIによる食事解析と運動提案で初心者でも続けやすいです。",
    url: "https://finc.com/",
    badge: "AI健康管理",
    color: "pink",
  },
  {
    name: "あすけん",
    type: "食事記録・ダイエット支援型",
    price: "無料 / プレミアム月額480円",
    plan: "無料プラン / プレミアムプラン（月額480円・年額3,600円）",
    workouts: "基本的な運動記録",
    workoutDetail: "ウォーキング・ランニング・筋トレなどの運動記録と消費カロリー計算",
    diet: "食事写真AI解析・14万件以上の日本食データベース",
    devices: "iOS / Android / Web",
    pros: [
      "日本食のデータベースが圧倒的に豊富（14万件以上）",
      "食事写真をAIが自動で栄養素を解析",
      "管理栄養士からのアドバイスが毎日届く",
      "プレミアムでも月額480円と格安",
      "600万ダウンロード突破の国内No.1食事管理アプリ",
      "コンビニ・外食メニューのデータが充実",
    ],
    cons: [
      "トレーニング機能は限定的",
      "無料プランでは一部の栄養素が非表示",
      "海外の食品データは少なめ",
    ],
    bestFor:
      "ダイエット目的で食事管理をしたい方に最適。日本食のデータベースが最も充実しており、コンビニ弁当や外食メニューもすぐに記録できます。",
    url: "https://www.asken.jp/",
    badge: "日本食データ最強",
    color: "purple",
  },
  {
    name: "Freeletics",
    type: "AIパーソナルトレーニング型",
    price: "無料 / コーチプラン月額1,450円",
    plan: "無料プラン / コーチプラン（月額1,450円・年間プランで割引あり）",
    workouts: "AIコーチによる個別トレーニングプラン",
    workoutDetail: "自重トレーニング中心。AIが体力レベルに合わせて自動調整。5〜30分の短時間メニュー",
    diet: "栄養ガイド・レシピ提案（コーチプラン）",
    devices: "iOS / Android",
    pros: [
      "AIコーチが毎回最適なトレーニングを自動生成",
      "器具不要の自重トレーニングで場所を選ばない",
      "5〜30分の短時間メニューで忙しい人でも続けやすい",
      "トレーニングの強度をAIが自動調整",
      "音声ガイド付きでフォームを確認しながら実施",
      "全世界6,000万人以上のユーザーデータに基づくAI",
    ],
    cons: [
      "AIコーチ機能はコーチプラン（有料）限定",
      "ウェイトトレーニングには不向き",
      "日本語のUIがやや不自然な箇所がある",
    ],
    bestFor:
      "自宅で短時間で効率よく鍛えたい方に最適。AIが自動でメニューを組んでくれるので、何をすればいいか迷わずトレーニングに集中できます。",
    url: "https://www.freeletics.com/",
    badge: "AIコーチ搭載",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "フィットネスアプリは無料でも十分使えますか？",
    answer:
      "はい、多くのフィットネスアプリは無料プランでも基本的な機能を利用できます。Nike Training Clubは無料で高品質なワークアウト動画が見放題、あすけんも無料で食事記録と基本的な栄養分析が可能です。ただし、AIによる個別最適化や詳細な分析を使いたい場合は有料プランがおすすめです。",
  },
  {
    question: "ダイエット目的ならどのアプリがおすすめですか？",
    answer:
      "ダイエット目的なら食事管理が充実した「あすけん」がおすすめです。日本食のデータベースが最も豊富で、コンビニや外食メニューもすぐに記録できます。カロリーだけでなく栄養バランスも管理でき、管理栄養士からのアドバイスも毎日届きます。月額480円と非常にリーズナブルです。",
  },
  {
    question: "筋トレ・ボディメイク目的ならどのアプリが良いですか？",
    answer:
      "筋トレ目的なら「Nike Training Club」または「Freeletics」がおすすめです。Nike Training Clubは無料で多彩なワークアウト動画が利用可能。Freeleticsは AIコーチが体力レベルに合わせたメニューを自動生成してくれるので、効率的にトレーニングできます。",
  },
  {
    question: "Apple WatchやFitbitと連携できるアプリはどれですか？",
    answer:
      "Nike Training ClubはApple WatchおよびWear OSに対応しています。MyFitnessPalはGarmin・Fitbit・Apple Watch・Samsung Healthなど最も多くのデバイスと連携可能です。FiNCはiOSヘルスケア・Google Fitと連携できます。",
  },
  {
    question: "初心者でも続けやすいフィットネスアプリはどれですか？",
    answer:
      "初心者には「FiNC」または「あすけん」がおすすめです。FiNCはAIが個人に合わせた簡単なメニューを提案してくれ、あすけんは食事記録から始められるので運動が苦手な方でも取り組みやすいです。どちらも日本語完全対応で使いやすい設計です。",
  },
  {
    question: "食事管理と運動管理の両方ができるアプリはありますか？",
    answer:
      "「FiNC」が食事管理と運動管理を最もバランスよく提供しています。AIによる食事写真解析と運動メニュー提案の両方に対応しています。「MyFitnessPal」も食事記録と運動記録の両方が可能ですが、日本食のデータベースはFiNCやあすけんに比べるとやや少なめです。",
  },
];

export default function FitnessAppComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "フィットネスアプリ比較おすすめ5選",
            url: `${siteConfig.url}/guide/fitness-app-comparison`,
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
        <span>フィットネスアプリ比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            健康・フィットネス
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】フィットネスアプリ比較おすすめ5選｜機能・料金・目的別に徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「健康のために運動を始めたいけど、どのアプリがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのフィットネスアプリ5選（Nike Training Club・MyFitnessPal・FiNC・あすけん・Freeletics）を機能・料金・ワークアウト内容・食事管理の観点で徹底比較。あなたの目的に合った最適なアプリの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：目的別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              無料で本格トレーニング → Nike Training Club
            </span>
            （200種類以上の動画が無料）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              食事管理・ダイエット → あすけん
            </span>
            （日本食データ最強・月額480円）
          </p>
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              総合的な健康管理 → FiNC
            </span>
            （AI食事解析+運動+歩数+体重）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              短時間で効率よく鍛えたい → Freeletics
            </span>
            （AIコーチが毎回最適メニューを生成）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-fitness" className="text-primary hover:underline">
              1. フィットネスアプリを使うメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. フィットネスアプリ5選の機能・料金比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各アプリの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 目的別おすすめフィットネスアプリ
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. フィットネスアプリの選び方5つのポイント
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

      {/* Section 1 - Why Fitness Apps */}
      <section id="why-fitness" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. フィットネスアプリを使うメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          フィットネスアプリを活用することで、ジムに通わなくても効率的に健康管理・体づくりが可能です。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128170;",
              title: "自宅でプロレベルのトレーニング",
              desc: "動画付きのワークアウトプログラムで、ジムに通わなくてもプロトレーナーの指導を受けられます。初心者向けの簡単なメニューから上級者向けのハードなプログラムまで対応。",
            },
            {
              icon: "&#127860;",
              title: "食事管理で効率的なダイエット",
              desc: "カロリー計算や栄養バランスの管理がアプリで簡単に。食事写真を撮るだけでAIが自動解析してくれるアプリもあり、面倒な手入力の手間が省けます。",
            },
            {
              icon: "&#129302;",
              title: "AIによるパーソナライズ",
              desc: "最新のフィットネスアプリはAIが個人の体力レベルや目標に合わせたメニューを自動提案。ジムのパーソナルトレーナーのような個別指導を低コストで受けられます。",
            },
            {
              icon: "&#128200;",
              title: "データで成果を可視化",
              desc: "体重・体脂肪率・運動量・栄養バランスなどのデータを記録・グラフ化。成果が目に見えることでモチベーションの維持につながります。",
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
          2. フィットネスアプリ5選の機能・料金比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5つのアプリの主要機能を一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">Nike Training Club</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">MyFitnessPal</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">FiNC</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">あすけん</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">Freeletics</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金",
                  ntc: "無料",
                  mfp: "無料/1,200円",
                  finc: "無料/960円",
                  asken: "無料/480円",
                  free: "無料/1,450円",
                },
                {
                  label: "タイプ",
                  ntc: "ワークアウト",
                  mfp: "食事管理",
                  finc: "総合ヘルスケア",
                  asken: "食事記録",
                  free: "AIトレーニング",
                },
                {
                  label: "ワークアウト動画",
                  ntc: "200種類以上",
                  mfp: "なし",
                  finc: "AI提案",
                  asken: "基本的",
                  free: "AIコーチ",
                },
                {
                  label: "食事管理",
                  ntc: "なし",
                  mfp: "1,400万件DB",
                  finc: "AI写真解析",
                  asken: "14万件日本食DB",
                  free: "栄養ガイド",
                },
                {
                  label: "AI機能",
                  ntc: "一部あり",
                  mfp: "一部あり",
                  finc: "食事解析AI",
                  asken: "食事解析AI",
                  free: "AIコーチ",
                },
                {
                  label: "日本語対応",
                  ntc: "一部対応",
                  mfp: "対応",
                  finc: "完全対応",
                  asken: "完全対応",
                  free: "一部対応",
                },
                {
                  label: "ウェアラブル連携",
                  ntc: "Apple Watch",
                  mfp: "多数対応",
                  finc: "ヘルスケア",
                  asken: "ヘルスケア",
                  free: "Apple Watch",
                },
                {
                  label: "対応OS",
                  ntc: "iOS/Android",
                  mfp: "iOS/Android/Web",
                  finc: "iOS/Android",
                  asken: "iOS/Android/Web",
                  free: "iOS/Android",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.ntc}</td>
                  <td className="border border-card-border p-3">{row.mfp}</td>
                  <td className="border border-card-border p-3">{row.finc}</td>
                  <td className="border border-card-border p-3">{row.asken}</td>
                  <td className="border border-card-border p-3">{row.free}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。プランや機能は変更される場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各アプリの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {fitnessApps.map((app, index) => (
            <div
              key={app.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{app.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[app.color]}`}
                >
                  {app.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{app.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">タイプ</span>
                  <span className="font-bold">{app.type}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">対応デバイス</span>
                  <span className="font-bold">{app.devices}</span>
                </div>
              </div>

              {/* Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">機能詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{app.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">ワークアウト：</span>{app.workoutDetail}</p>
                  <p className="text-muted"><span className="font-medium">食事管理：</span>{app.diet}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {app.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {app.pros.map((p) => (
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
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">
                  デメリット
                </h4>
                <ul className="space-y-1">
                  {app.cons.map((c) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 目的別おすすめフィットネスアプリ
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "ダイエット・減量したい",
              app: "あすけん",
              reason:
                "食事管理がダイエット成功の8割を占めると言われています。あすけんは日本食のデータベースが最も充実しており、毎日の食事を簡単に記録・分析。管理栄養士のアドバイスも受けられるため、健康的に痩せたい方に最適です。",
            },
            {
              scene: "自宅で本格的なトレーニングをしたい",
              app: "Nike Training Club",
              reason:
                "プロトレーナーによる200種類以上のワークアウト動画が無料で視聴可能。初心者向けの15分メニューから上級者向けの60分メニューまで幅広く対応。器具なしでも始められます。",
            },
            {
              scene: "忙しくて時間がない",
              app: "Freeletics",
              reason:
                "5〜30分の短時間ワークアウトが中心で、AIコーチが毎回最適なメニューを自動生成。器具不要の自重トレーニングなので、場所も時間も選ばず効率よく運動できます。",
            },
            {
              scene: "総合的に健康管理したい",
              app: "FiNC",
              reason:
                "食事・運動・体重・歩数・睡眠を一つのアプリで管理。AIによる食事写真解析と運動メニュー提案で、初心者でも無理なく健康的な生活習慣を身につけられます。",
            },
            {
              scene: "カロリー計算を正確に行いたい",
              app: "MyFitnessPal",
              reason:
                "世界最大級の食品データベース（1,400万件以上）と三大栄養素の詳細分析で、最も正確なカロリー管理が可能。バーコードスキャン機能で手軽に記録できます。",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.app}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. フィットネスアプリの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "目的を明確にする",
              desc: "ダイエット（食事管理重視）なのか、筋トレ（トレーニング重視）なのか、総合的な健康管理なのかで最適なアプリが変わります。食事管理ならあすけん・MyFitnessPal、トレーニングならNike Training Club・Freeleticsがおすすめです。",
            },
            {
              num: "2",
              title: "無料プランで試す",
              desc: "ほとんどのフィットネスアプリには無料プランがあります。まずは無料で使ってみて、操作性や機能が自分に合うか確認してから有料プランに切り替えましょう。",
            },
            {
              num: "3",
              title: "日本語対応の充実度を確認",
              desc: "海外製アプリは日本語対応が不完全な場合があります。特に食事管理では日本食のデータベースが重要。あすけん・FiNCは日本食に完全対応しています。",
            },
            {
              num: "4",
              title: "デバイス連携を確認",
              desc: "Apple Watch・Fitbit・Garminなどのウェアラブルデバイスを使っている方は、連携対応しているアプリを選びましょう。MyFitnessPalが最も多くのデバイスに対応しています。",
            },
            {
              num: "5",
              title: "継続しやすさを重視する",
              desc: "最も大切なのは続けること。UIが見やすい、操作が簡単、記録が面倒でないなど、自分が毎日使い続けられるアプリを選びましょう。食事写真のAI解析機能があると記録が楽になります。",
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
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
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
            フィットネスアプリは目的に合ったものを選ぶことが大切です。ダイエット・食事管理なら「あすけん」、本格トレーニングなら「Nike Training Club」、総合的な健康管理なら「FiNC」、短時間で効率よく鍛えたいなら「Freeletics」、正確なカロリー管理なら「MyFitnessPal」がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            どのアプリも無料プランで基本的な機能を試せるので、まずはダウンロードして自分に合うか確認してみましょう。大切なのは継続すること。自分が使いやすいと感じるアプリを選んで、健康的な生活を始めてみてください。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・ダイエットなら食事管理が充実した「あすけん」（月額480円）</li>
              <li>・無料で本格トレーニングなら「Nike Training Club」</li>
              <li>・AI による総合健康管理なら「FiNC」</li>
              <li>・短時間効率トレーニングなら「Freeletics」</li>
              <li>・まずは無料プランで試してから有料プランを検討</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/guide/streaming-comparison"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              動画配信サービス比較おすすめ6選
            </span>
            <p className="text-xs text-muted mt-1">
              Amazon Prime Video・Netflix・U-NEXTなどを徹底比較
            </p>
          </Link>
          <Link
            href="/guide/cloud-storage-comparison"
            className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-sm font-bold hover:text-primary">
              クラウドストレージ比較おすすめ5選
            </span>
            <p className="text-xs text-muted mt-1">
              Google Drive・iCloud+・OneDriveなどを徹底比較
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
