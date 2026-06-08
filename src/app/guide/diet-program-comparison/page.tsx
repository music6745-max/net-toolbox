import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】パーソナルダイエットプログラム比較5選｜料金・効果・サポートを徹底解説",
  description:
    "ライザップ・チョコザップ・24/7Workout・BEYOND・OUTLINEのパーソナルダイエットプログラムを料金・効果・サポートで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/diet-program-comparison` },
};

const faqItems = [
  { question: "パーソナルジムは本当に痩せますか？", answer: "食事管理とトレーニングを並行することで、ほぼ確実に体重・体脂肪率が下がります。重要なのは終了後のリバウンド対策です。" },
  { question: "費用相場はどれくらいですか？", answer: "2ヶ月コースで20万円〜40万円が相場です。月額制のフィットネス（チョコザップ等）は3,000円〜5,000円と圧倒的に安いです。" },
  { question: "返金保証はありますか？", answer: "ライザップ・24/7Workoutなど多くの大手で30日間全額返金保証があります。" },
  { question: "オンライン指導でも効果ありますか？", answer: "オンライン特化のプログラムも増えており、データ提出+ビデオ通話で十分な効果が期待できます。地方在住でも受けられます。" },
];

const services = [
  { name: "RIZAP（ライザップ）", type: "パーソナル", feature: "結果にコミットの最大手", points: ["完全個室マンツーマン", "全国150店舗以上", "30日間全額返金保証"], bestFor: "本気で短期集中したい人。" },
  { name: "chocoZAP（チョコザップ）", type: "セルフジム", feature: "コンビニジム", points: ["月額3,278円", "24時間営業・全国1,500店舗", "脱毛・ホワイトニングも併設"], bestFor: "気軽に通いたい初心者。" },
  { name: "24/7Workout", type: "パーソナル", feature: "最大手の老舗", points: ["全国130店舗以上", "30日間全額返金保証", "完全個室で人目を気にしない"], bestFor: "ライザップより安く本格指導を受けたい人。" },
  { name: "BEYOND", type: "パーソナル", feature: "コンテスト出場者多数", points: ["美しい体作りに特化", "高品質マシン", "コンテスト出場サポート"], bestFor: "理想の体型を本気で目指す人。" },
  { name: "OUTLINE", type: "女性専用", feature: "女性専用パーソナル", points: ["女性トレーナーのみ", "月会費・追加料金なし", "産後ダイエットOK"], bestFor: "女性で安心して通いたい人。" },
];

export default function DietProgramComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ダイエットプログラム比較", url: `${siteConfig.url}/guide/diet-program-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】パーソナルダイエットプログラム比較5選" description="ライザップ・チョコザップ・24/7Workout・BEYOND・OUTLINEを徹底比較。" url={`${siteConfig.url}/guide/diet-program-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ダイエットプログラム比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】パーソナルダイエットプログラム比較5選｜料金・効果・サポートを徹底解説</h1>
        <p className="text-muted leading-relaxed">『今年こそ痩せたい』を確実に叶えるなら、独学より実績あるプログラムを使う方が効率的です。本記事では本格パーソナルからセルフジムまで主要5サービスを比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">プログラムの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">短期で大きく痩せたいなら高額パーソナル、コスト重視で長期継続するならセルフジム型、女性専用や産後対応など特化型もあります。失敗しないコツは『無料体験を必ず受ける』『複数比較する』ことです。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめダイエットプログラム5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
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
          <p className="text-muted leading-relaxed">ダイエットは継続性が全てです。本気で短期集中したい人はライザップや24/7Workout、長く続けたい人はチョコザップ。まずは無料体験を受けて雰囲気を確かめましょう。</p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">本格的に体を変えたい方へ</p>
          </Link>
          <Link href="/guide/meal-kit-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ミールキット比較</span>
            <p className="text-xs text-muted mt-1">食事管理を効率化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
