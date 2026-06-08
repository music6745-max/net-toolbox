import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】オンラインフィットネス比較おすすめ5選｜LEAN BODY・SOELU・LIVE FITを徹底解説",
  description:
    "LEAN BODY・SOELU・LIVE FIT・トルチャ・Nintendo Sports Connectのオンラインフィットネスを月額料金・レッスン内容・形式で徹底比較。在宅で続けられる運動習慣の選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/online-fitness-comparison` },
};

const faqItems = [
  {
    question: "オンラインフィットネスとジム通いはどちらがいいですか？",
    answer:
      "通う時間がない・続かない方にはオンラインがおすすめ。月額1,000〜3,000円とジムの1/3〜1/5の費用で、24時間いつでも自宅でレッスンを受けられます。器具を使った本格トレーニングをしたい方はジムが向いています。",
  },
  {
    question: "ライブレッスンとビデオレッスンの違いは？",
    answer:
      "ライブはインストラクターとリアルタイムで繋がるためモチベーションを保ちやすく、ビデオは好きな時間に何度でも見られる手軽さが魅力です。ハイブリッドで両方使えるサービスが理想的です。",
  },
  {
    question: "初心者でもついていけますか？",
    answer:
      "ほとんどのサービスが初心者向けレッスンを多数用意しています。難易度別・部位別・所要時間別に検索できるため、5分の朝ヨガから始めるなど無理のない範囲で継続できます。",
  },
  {
    question: "解約は簡単ですか？",
    answer:
      "オンラインで即時解約できるサービスが主流です。多くは無料体験期間があり、合わなければそのまま退会できます。最低利用期間がないか必ず確認しましょう。",
  },
];

const services = [
  {
    name: "LEAN BODY（リーンボディ）",
    type: "ビデオレッスン・国内最大級",
    price: "月額1,628円〜",
    points: [
      "国内最大級900本以上のレッスン動画",
      "AYA・竹脇まりな等の人気インストラクター",
      "2週間無料体験あり",
    ],
    bestFor: "好きな時間に好きなレッスンを受けたい方。",
  },
  {
    name: "SOELU（ソエル）",
    type: "ライブレッスン・ヨガ中心",
    price: "月額3,278円〜",
    points: [
      "1日200本以上のライブレッスン",
      "朝5時から夜まで好きな時間に予約可",
      "30日間100円体験キャンペーン",
    ],
    bestFor: "ライブ感とヨガを重視する方。",
  },
  {
    name: "LIVE FIT",
    type: "オンラインパーソナル",
    price: "月額9,800円〜",
    points: [
      "1対1のオンラインパーソナル指導",
      "食事サポート付き",
      "ジムより安価でパーソナル並みの効果",
    ],
    bestFor: "本気でボディメイクしたい方。",
  },
  {
    name: "トルチャ",
    type: "ライブヨガ・少人数制",
    price: "月額1,980円〜",
    points: [
      "少人数制で姿勢チェックを受けられる",
      "ヨガ・ピラティス・ダンス多彩",
      "月会費が業界最安級",
    ],
    bestFor: "コスパ重視でライブ感も欲しい方。",
  },
  {
    name: "Nintendo Switch Sports / Fit Boxing",
    type: "ゲーム×フィットネス",
    price: "ソフト買切り 5,000〜7,000円",
    points: [
      "ゲーム感覚で楽しく続けられる",
      "月額不要・買切り型",
      "家族で共有可能",
    ],
    bestFor: "運動が苦手で楽しく始めたい方。",
  },
];

export default function OnlineFitnessComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "オンラインフィットネス比較", url: `${siteConfig.url}/guide/online-fitness-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】オンラインフィットネス比較おすすめ5選｜LEAN BODY・SOELU・LIVE FITを徹底解説" description="LEAN BODY・SOELU・LIVE FIT・トルチャ・Nintendo Sports Connectのオンラインフィットネスを月額料金・レッスン内容・形式で徹底比較。在宅で続けられる運動習慣の選び方を解説。" url={`${siteConfig.url}/guide/online-fitness-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンラインフィットネス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】オンラインフィットネス比較おすすめ5選｜LEAN BODY・SOELU・LIVE FITを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          ジムに通う時間がない、人目が気になる、でも運動は続けたい——そんな悩みを解決するのがオンラインフィットネスです。月額1,000〜3,000円の手軽な価格で、自宅でいつでもプロの指導を受けられる時代。2026年現在の主要5サービスを料金・レッスン形式・継続しやすさで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">好きな時間に動画 → LEAN BODY</span></p>
          <p><span className="font-bold">ライブヨガ重視 → SOELU</span></p>
          <p><span className="font-bold">本気のボディメイク → LIVE FIT</span></p>
          <p><span className="font-bold">コスパ最強 → トルチャ</span></p>
          <p><span className="font-bold">楽しく続けたい → Nintendo Switch</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンラインフィットネス選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          オンラインフィットネスは大きく「ビデオ型」「ライブ型」「パーソナル型」の3つに分かれます。ビデオ型は好きな時間に何度でも見られる手軽さが魅力で、LEAN BODYが代表格。ライブ型はインストラクターとリアルタイムで繋がりモチベーションを保ちやすく、SOELUやトルチャが該当します。パーソナル型は1対1指導で効果が出やすい反面、価格が月8,000〜15,000円とやや高めです。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          続けるコツは「無理のない頻度」と「楽しさ」。週2〜3回、1回15〜30分でも継続できれば十分な健康効果があります。料金は月額1,500〜3,500円が相場ですが、無料体験を活用して相性を見極めるのが鉄則。スマホ・タブレット・PCの3デバイス対応のサービスを選ぶと、生活シーンに合わせて使い分けができて便利です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンラインフィットネス5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{s.price}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新のプラン・キャンペーンは各社公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            オンラインフィットネスはジムの1/3〜1/5の費用で運動習慣を作れる、現代人にとって最適な選択肢です。続ける秘訣は「無料体験で複数試す→相性のいいサービスに絞る→週2〜3回の頻度を死守する」の3ステップ。家計簿アプリでサブスク管理をしつつ、健康への投資として継続すれば、医療費削減・QOL向上・自己肯定感アップという複数のリターンが期待できます。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">本気のボディメイクならジムも検討</p>
          </Link>
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">無料アプリも併用して効果アップ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
