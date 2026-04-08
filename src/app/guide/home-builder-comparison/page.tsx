import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】注文住宅ハウスメーカー比較5選｜価格・性能・保証を徹底解説",
  description:
    "積水ハウス・住友林業・一条工務店・タマホーム・アイフルホームの注文住宅ハウスメーカー5社を価格・性能・保証で徹底比較。一括資料請求のコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/home-builder-comparison` },
};

const faqItems = [
  { question: "ハウスメーカーと工務店の違いは？", answer: "ハウスメーカーは全国規模で標準化された商品力と保証が強み、工務店は地域密着で柔軟な設計と価格が魅力です。性能を重視するならハウスメーカー、自由度なら工務店が向いています。" },
  { question: "坪単価の相場は？", answer: "ローコスト系で40〜60万円/坪、中堅で60〜80万円/坪、大手プレミアムで80〜120万円/坪が目安です。30坪なら本体価格1500万〜3600万円のレンジが一般的です。" },
  { question: "一括資料請求は本当にお得？", answer: "複数社の見積を比較することで、同条件で平均200万円以上の値引きを引き出せるケースもあります。タウンライフ家づくりやLIFULL HOME'Sなどの一括サービスが便利です。" },
  { question: "断熱性能はどれくらい必要？", answer: "2026年基準ではUA値0.46以下（HEAT20 G2）が推奨。光熱費と快適性が大きく変わるため、後悔しないためにも必須スペックです。" },
];

const services = [
  { name: "積水ハウス", type: "大手プレミアム", feature: "業界最大手の総合力", points: ["業界No.1の販売実績", "鉄骨・木造両方対応", "60年保証システム"], bestFor: "ブランド力と保証重視の人。" },
  { name: "住友林業", type: "大手木造", feature: "木の家のスペシャリスト", points: ["国産材を中心とした上質な木造", "デザイン性が高い", "ZEH基準を標準クリア"], bestFor: "木の温もりとデザインを両立したい人。" },
  { name: "一条工務店", type: "高性能", feature: "高気密高断熱の代表格", points: ["全棟を耐震等級3で設計", "全館床暖房が標準", "性能対コストが最強クラス"], bestFor: "性能と省エネを最優先したい人。" },
  { name: "タマホーム", type: "ローコスト", feature: "低価格×標準仕様充実", points: ["大安心の家など人気商品", "坪単価40万円台から", "全国展開で施工管理が安定"], bestFor: "価格を抑えたい子育て世代。" },
  { name: "アイフルホーム", type: "FC型", feature: "LIXILグループのフランチャイズ", points: ["LIXIL設備が標準", "ZEH対応プランあり", "土地探しからサポート"], bestFor: "設備重視で予算を抑えたい人。" },
];

export default function HomeBuilderComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ハウスメーカー比較", url: `${siteConfig.url}/guide/home-builder-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】注文住宅ハウスメーカー比較5選" description="積水ハウス・住友林業・一条工務店・タマホーム・アイフルホームを徹底比較。" url={`${siteConfig.url}/guide/home-builder-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ハウスメーカー比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】注文住宅ハウスメーカー比較5選｜価格・性能・保証を徹底解説</h1>
        <p className="text-muted leading-relaxed">人生最大の買い物である注文住宅。ハウスメーカー選びで満足度の8割が決まると言われます。本記事では大手5社を価格・性能・保証で徹底比較し、後悔しない選び方を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">注文住宅選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">注文住宅は同じ坪数でも会社により総額が1000万円以上変わります。失敗しないコツは『複数社から見積もりを取る』『性能数値（UA値・耐震等級）を必ず確認する』『標準仕様の中身を比較する』の3点です。一括資料請求サイトを活用すると効率的に比較できます。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめハウスメーカー5選</h2>
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
          <p className="text-muted leading-relaxed">後悔しない注文住宅は『複数社の比較見積もり』が必須です。一括資料請求サービスでカタログを取り寄せ、気になる3社程度に絞ってモデルハウスを訪問しましょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料一括資料請求サービス</h2>
        <ComparisonTableCTA
          services={[
            { name: "タウンライフ家づくり", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "間取りプランも無料作成", price: "完全無料", badge: "人気" },
            { name: "LIFULL HOME'S 注文住宅", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "国内最大級の登録社数", price: "完全無料" },
            { name: "持ち家計画", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "厳選ハウスメーカー紹介", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">最適な住宅ローンを選ぶ</p>
          </Link>
          <Link href="/guide/mortgage-rate-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン金利比較</span>
            <p className="text-xs text-muted mt-1">金利タイプの選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
