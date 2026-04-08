import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】料理教室・オンライン料理比較おすすめ5選｜ABCクッキング・ベターホーム・CookLIVE徹底解説",
  description:
    "ABCクッキング・ベターホーム・ホームメイドクッキング・CookLIVE・クラシルレシピ動画を料金・レッスン形式・カリキュラムで徹底比較。通学型からオンライン型まで自分に合う料理学習が見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/cooking-school-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】料理教室・オンライン料理比較おすすめ5選",
    description: "ABCクッキング・ベターホーム・CookLIVEなどを徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${siteConfig.url}/guide/cooking-school-comparison`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const services = [
  {
    name: "ABCクッキングスタジオ",
    type: "業界最大手・通学型",
    price: "1回4,500円〜（コース制）",
    features: "全国120スタジオ以上を展開する業界最大手の料理教室。料理・パン・ケーキ・和菓子と幅広いコースが揃い、駅近の好立地に多数の校舎があるため通いやすさで群を抜いています。少人数制レッスンでプロ講師から直接指導を受けられます。",
    pros: ["全国120スタジオ以上で通いやすい", "コースが料理・パン・ケーキと豊富", "少人数制で指導が手厚い", "体験レッスン500円で気軽"],
    cons: ["コース料金は総額が高め", "予約は早い者勝ち", "勧誘がやや積極的との声も"],
    bestFor: "通学型でしっかり学びたい方、ライセンス取得まで目指したい方に。",
    badge: "店舗数No.1",
  },
  {
    name: "ベターホーム",
    type: "家庭料理特化・伝統校",
    price: "1回約5,500円",
    features: "1963年創業の老舗料理教室。家庭料理の基本に特化しており、和食・洋食・中華・お菓子まで一生使える実用的な技術を学べます。年齢層も幅広く落ち着いた雰囲気が特徴。",
    pros: ["家庭料理の基礎が身につく", "老舗の安定したカリキュラム", "幅広い年齢層に人気", "和食の本格指導"],
    cons: ["料金はやや高め", "店舗数はABCより少ない", "若者向けではない雰囲気"],
    bestFor: "家庭料理の基礎をしっかり学びたい方、和食を極めたい方に。",
    badge: "老舗・本格派",
  },
  {
    name: "ホームメイドクッキング",
    type: "趣味から資格まで",
    price: "1回約5,000円",
    features: "全国80教室以上を展開する料理教室。趣味コースからプロ養成まで幅広いカリキュラムがあり、パン・天然酵母・和菓子など専門コースも人気です。",
    pros: ["天然酵母パン専門コースが人気", "資格取得コースも充実", "少人数制レッスン", "全国展開"],
    cons: ["店舗エリアによっては不便", "総額は高め", "希望コースが満員のことも"],
    bestFor: "パンや天然酵母を本格的に学びたい方、趣味から資格まで目指す方に。",
    badge: "パン特化",
  },
  {
    name: "CookLIVE（オンライン）",
    type: "ライブ配信オンライン",
    price: "月額3,278円〜",
    features: "プロ料理人がライブ配信でレッスンを行うオンライン料理教室。自宅キッチンで実際に作りながら、リアルタイムで質問もできます。録画視聴も可能なので忙しい人にも便利。",
    pros: ["自宅で本格レッスンが受けられる", "ライブで質問できる", "録画も視聴可能", "通学不要で時短"],
    cons: ["スタジオの臨場感はない", "材料は自分で用意", "通信環境が必要"],
    bestFor: "通学が難しい方、自宅で本格料理を学びたい方に。",
    badge: "オンライン人気",
  },
  {
    name: "クラシルレシピ動画",
    type: "短尺動画レシピアプリ",
    price: "無料（プレミアム月額480円）",
    features: "国内最大級のレシピ動画アプリ。1本1分の短い動画で簡単・本格レシピを学べます。プレミアムなら絞り込み検索や買い物リスト機能が使えてさらに便利。",
    pros: ["完全無料で始められる", "1本1分で気軽に視聴", "5万本以上のレシピ", "プレミアムでも月額480円と安価"],
    cons: ["体系的に学ぶには不向き", "対面指導なし", "プロ志向には物足りない"],
    bestFor: "家庭料理のレパートリーを増やしたい方、無料から始めたい方に。",
    badge: "コスパ最強",
  },
];

const faqItems = [
  { question: "料理初心者でも大丈夫ですか？", answer: "はい。ABCクッキングやベターホームには包丁の持ち方から教える初心者向けクラスがあります。CookLIVEでも基礎コースを選べば安心です。" },
  { question: "通学とオンラインどちらが良い？", answer: "強制力と本格指導が欲しいなら通学型、自宅でマイペースなら オンラインがおすすめです。両方併用する方も増えています。" },
  { question: "資格は取れますか？", answer: "ABCクッキングやホームメイドクッキングではライセンス取得コースがあり、講師資格を目指せます。趣味目的なら資格は不要です。" },
  { question: "材料費は別ですか？", answer: "通学型は材料費込みのレッスン料金が一般的です。オンラインは自分で材料を用意する必要があります。" },
  { question: "何回くらい通えば上達しますか？", answer: "週1回・3ヶ月（約12回）で基本料理は一通りできるようになります。継続が最も重要です。" },
  { question: "体験レッスンはありますか？", answer: "ABCクッキングは500円体験レッスン、ベターホームは1日1回完結型の体験会があります。CookLIVEは無料体験を実施することもあります。" },
];

export default function CookingSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "料理教室比較", url: `${siteConfig.url}/guide/cooking-school-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>料理教室比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">趣味・スキル</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】料理教室・オンライン料理比較おすすめ5選
        </h1>
        <p className="text-muted leading-relaxed">
          自炊スキルを上げたい、結婚や同棲を機に料理を学び始めたい、子どもにも栄養ある食事を作ってあげたい——そんな目的別に、ABCクッキング・ベターホーム・ホームメイドクッキング・CookLIVE・クラシルの5社を徹底比較。料金・レッスン形式・カリキュラムから、あなたに最適な学び方を見つけましょう。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">通学・最大手 → ABCクッキング</span></p>
          <p><span className="font-bold">家庭料理基本 → ベターホーム</span></p>
          <p><span className="font-bold">パン・酵母 → ホームメイド</span></p>
          <p><span className="font-bold">在宅で本格 → CookLIVE</span></p>
          <p><span className="font-bold">無料で始める → クラシル</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 料理を学ぶメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          自炊スキルがあると、食費を月数万円節約できるだけでなく、健康管理・時短・家族との時間といった多面的な恩恵があります。外食やデリバリーに頼りがちな現代人ほど、料理を学ぶ価値は大きいといえるでしょう。さらにレシピアプリ・オンラインレッスン・通学型スクールと選択肢が豊富になり、誰でも気軽に始められる時代になりました。
        </p>
        <p className="text-muted leading-relaxed">
          本記事では「通学型」「オンライン型」「無料アプリ型」の3カテゴリをカバーし、それぞれの代表的なサービスを比較します。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">ABC</th>
                <th className="border border-card-border p-3 text-left">ベター</th>
                <th className="border border-card-border p-3 text-left">ホーム</th>
                <th className="border border-card-border p-3 text-left">CookLIVE</th>
                <th className="border border-card-border p-3 text-left">クラシル</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "形式", a: "通学", b: "通学", c: "通学", d: "オンライン", e: "アプリ" },
                { label: "料金", a: "4,500円〜/回", b: "5,500円/回", c: "5,000円/回", d: "月3,278円〜", e: "無料/480円" },
                { label: "店舗数", a: "120+", b: "30+", c: "80+", d: "全国対応", e: "全国対応" },
                { label: "資格", a: "○", b: "△", c: "○", d: "×", e: "×" },
                { label: "初心者", a: "◎", b: "◎", c: "◎", d: "○", e: "○" },
                { label: "おすすめ", a: "本格派", b: "家庭料理", c: "パン特化", d: "在宅派", e: "節約派" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                  <td className="border border-card-border p-3">{row.b}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.d}</td>
                  <td className="border border-card-border p-3">{row.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サービス詳細レビュー</h2>
        <div className="space-y-8">
          {services.map((s, i) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{i + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
              </div>
              <p className="text-sm text-muted mb-4 leading-relaxed">{s.features}</p>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                  <ul className="space-y-1">{s.pros.map((p) => (<li key={p} className="text-sm text-muted">○ {p}</li>))}</ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                  <ul className="space-y-1">{s.cons.map((c) => (<li key={c} className="text-sm text-muted">△ {c}</li>))}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((i) => (
            <div key={i.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {i.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {i.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            料理学習は「目的」と「ライフスタイル」に合わせて選ぶのが鉄則です。本格派はABCクッキング、家庭料理ならベターホーム、パンならホームメイド、在宅派はCookLIVE、無料スタートはクラシル。まずは体験レッスンや無料アプリで自分に合うか確かめましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/meal-kit-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ミールキット比較</span>
            <p className="text-xs text-muted mt-1">時短調理キットも便利</p>
          </Link>
          <Link href="/guide/food-delivery-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フードデリバリー比較</span>
            <p className="text-xs text-muted mt-1">忙しい日はデリバリーで</p>
          </Link>
          <Link href="/guide/online-english-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン英会話比較</span>
            <p className="text-xs text-muted mt-1">同じくオンライン学習</p>
          </Link>
          <Link href="/author" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">編集部について</span>
            <p className="text-xs text-muted mt-1">レビュー基準と編集方針</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
