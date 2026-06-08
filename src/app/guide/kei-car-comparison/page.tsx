import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】軽自動車おすすめ比較5選｜N-BOX/タント/スペーシア/ハスラー/ワゴンR",
  description:
    "N-BOX・タント・スペーシア・ハスラー・ワゴンRの人気軽自動車5車種を価格・燃費・室内空間で徹底比較。中古と新車の選び方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/kei-car-comparison` },
};

const faqItems = [
  { question: "軽自動車の維持費は普通車と比べてどれくらい安い？", answer: "年間で5〜10万円安くなります。自動車税・重量税・自動車保険・燃費でコスト差が生まれます。" },
  { question: "新車と中古どちらがお得？", answer: "予算優先なら中古、保証と最新装備なら新車です。中古でも3年落ち程度なら状態が良く、新車より3〜5割安く買えます。" },
  { question: "ローンと残価設定どちらが良い？", answer: "残価設定は月々の支払いが安いですが、走行距離制限と最終支払いが必要です。長く乗るなら通常ローン、3〜5年で乗り換えなら残価設定が有利です。" },
  { question: "カーリースのメリットは？", answer: "頭金不要・税金込み・点検費込みで月額固定。所有にこだわらない人には負担が少なく便利な選択肢です。" },
];

const services = [
  { name: "ホンダ N-BOX", type: "スーパーハイト", feature: "軽自動車販売台数No.1", points: ["広い室内空間", "安全装備が充実", "リセールバリューが高い"], bestFor: "ファミリーで使いたい人。" },
  { name: "ダイハツ タント", type: "スーパーハイト", feature: "ミラクルオープンドア", points: ["スライドドアが大きく開く", "後席シートの自由度が高い", "子育て世代に人気"], bestFor: "子どもの乗り降りを楽にしたい人。" },
  { name: "スズキ スペーシア", type: "スーパーハイト", feature: "燃費No.1クラス", points: ["軽ハイトで燃費トップクラス", "マイルドハイブリッド標準", "実用性が高い"], bestFor: "燃費と実用性重視の人。" },
  { name: "スズキ ハスラー", type: "クロスオーバー", feature: "アウトドア向き", points: ["SUV風スタイリング", "2WD/4WD選択可", "アウトドアグッズと相性抜群"], bestFor: "アウトドア・キャンプ派。" },
  { name: "スズキ ワゴンR", type: "ハイト", feature: "コンパクト軽の定番", points: ["価格が手頃", "燃費良好", "取り回しが楽"], bestFor: "セカンドカーや街乗りメイン。" },
];

export default function KeiCarComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "軽自動車比較", url: `${siteConfig.url}/guide/kei-car-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】軽自動車おすすめ比較5選" description="N-BOX/タント/スペーシア/ハスラー/ワゴンR徹底比較。" url={`${siteConfig.url}/guide/kei-car-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>軽自動車比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】軽自動車おすすめ比較5選｜N-BOX/タント/スペーシア/ハスラー/ワゴンR</h1>
        <p className="text-muted leading-relaxed">維持費が安く取り回しの良い軽自動車は、ファミリーにもセカンドカーにも大人気。本記事では人気5車種の特徴と選び方を徹底解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">軽自動車選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">家族構成・走行距離・主な用途で選ぶ軽自動車は変わります。ファミリーならN-BOXやタント、燃費重視ならスペーシア、アウトドアならハスラーなど、ライフスタイルに合うものを選びましょう。一括見積もりサービスを使えば最安値で買えます。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ軽自動車5車種</h2>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">維持費を抑える保険選び</p>
          </Link>
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">頭金不要のカーリース</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
