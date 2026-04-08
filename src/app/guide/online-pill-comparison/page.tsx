import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】低用量ピルオンライン処方比較5選｜料金・配送・サポートを徹底解説",
  description:
    "クリニックフォア・mederi Pill・スマルナ・DMMオンラインクリニック・ルナルナオンライン診療を料金・配送・サポートで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/online-pill-comparison` },
};

const faqItems = [
  { question: "オンラインピル処方は安全ですか？", answer: "医師の問診を経て処方されるため安全です。対面診療と同じ医師の判断で薬が処方されます。" },
  { question: "費用相場はどれくらいですか？", answer: "月額2,000円〜3,500円が相場です。診察料・送料込みのプランが分かりやすくおすすめです。" },
  { question: "対面診療は必要ですか？", answer: "多くのオンラインクリニックは初回からオンライン完結です。ただし血栓症リスクが高い人は対面診察を推奨されます。" },
  { question: "保険は適用されますか？", answer: "避妊目的のピルは保険適用外、月経困難症の治療目的は保険適用となるケースがあります。" },
];

const services = [
  { name: "クリニックフォア", type: "オンライン特化", feature: "業界最大級の処方実績", points: ["月額2,783円〜", "最短翌日到着", "定期便で15%オフ"], bestFor: "信頼性とスピード重視の人。" },
  { name: "mederi Pill", type: "女性向け", feature: "女性のための専門サービス", points: ["月額2,970円〜", "毎月自動でお届け", "LINEで気軽に相談"], bestFor: "気軽に始めたい初心者。" },
  { name: "スマルナ", type: "アプリ型", feature: "アプリで完結", points: ["24時間チャット相談", "薬剤師相談無料", "中絶相談窓口あり"], bestFor: "スマホで全て済ませたい人。" },
  { name: "DMMオンラインクリニック", type: "総合", feature: "DMMの低価格サービス", points: ["定期便で割引", "1分問診で簡単", "配送スピード早い"], bestFor: "コスパ重視。" },
  { name: "ルナルナ オンライン診療", type: "アプリ連携", feature: "ルナルナアプリと連携", points: ["生理周期データを医師と共有", "ピル選びを最適化", "アプリで予約管理"], bestFor: "ルナルナユーザー。" },
];

export default function OnlinePillComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "オンラインピル処方比較", url: `${siteConfig.url}/guide/online-pill-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】低用量ピルオンライン処方比較5選" description="クリニックフォア・mederi Pill・スマルナ・DMM・ルナルナを徹底比較。" url={`${siteConfig.url}/guide/online-pill-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンラインピル処方比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】低用量ピルオンライン処方比較5選｜料金・配送・サポートを徹底解説</h1>
        <p className="text-muted leading-relaxed">忙しい毎日の中で婦人科に通うのは大変。オンラインピル処方なら自宅で診察を受け、薬は最短翌日到着します。本記事では主要5サービスを比較し、自分に合うクリニックを選ぶ基準を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンラインピル処方とは</h2>
        <p className="text-muted leading-relaxed mb-4">医師がオンラインで問診を行い、低用量ピルや中用量ピルを処方するサービスです。スマホ・PCからアクセスでき、診察→決済→配送までが完結します。プライバシーが守られ、忙しい社会人や地方在住者に人気が広がっています。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンラインピル処方5選</h2>
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
          <p className="text-muted leading-relaxed">オンラインピル処方は、忙しい現代女性の強い味方です。料金・配送スピード・サポート体制を比較して、自分のライフスタイルに合うサービスを選びましょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">オンライン診療を予約する</h2>
        <ComparisonTableCTA
          services={[
            { name: "クリニックフォア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大級の実績", price: "月額2,783円〜", badge: "おすすめ" },
            { name: "DMMオンラインクリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "DMMの安心ブランド", price: "月額2,000円台" },
            { name: "mederi Pill", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "女性向け専門", price: "月額2,970円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">通院不要のクリニック比較</p>
          </Link>
          <Link href="/guide/online-counseling-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインカウンセリング</span>
            <p className="text-xs text-muted mt-1">心のケアもオンラインで</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
