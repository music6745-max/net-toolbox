import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】オンライン診療アプリ比較5選｜診療科目・料金・処方薬の即日配送を徹底解説",
  description:
    "クリニクス・curon・ファストドクター・SOKUYAKU・LINEドクターのオンライン診療アプリ5社を診療科目・料金・処方薬配送で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/online-doctor-comparison` },
};

const faqItems = [
  { question: "オンライン診療は保険適用されますか？", answer: "多くの診療で保険適用です。健康保険証をアプリに登録すれば従来の対面診療と同じ自己負担割合で受診できます。" },
  { question: "薬はどうやって受け取りますか？", answer: "処方せんが薬局に送られ、薬は自宅配送または近隣薬局で受け取れます。最短当日受取可能なサービスもあります。" },
  { question: "どんな症状で使えますか？", answer: "発熱・風邪・花粉症・皮膚科・不眠症・ピル処方・AGA治療など幅広く対応しています。緊急性が高い症状は対面受診を推奨します。" },
  { question: "深夜・休日も受診できますか？", answer: "ファストドクターなど一部サービスでは24時間365日対応しています。深夜の急な発熱でも安心です。" },
];

const services = [
  { name: "クリニクス", type: "総合", feature: "メドレー運営の老舗", points: ["全国の医療機関と連携", "幅広い診療科目に対応", "保険診療メイン"], bestFor: "信頼性重視の人。" },
  { name: "curon", type: "総合", feature: "クロン", points: ["主要都市での導入実績多数", "医療機関の選択肢が豊富", "保険診療対応"], bestFor: "近隣病院を選びたい人。" },
  { name: "ファストドクター", type: "夜間・救急", feature: "24時間対応", points: ["夜間・休日に強い", "往診サービスもあり", "発熱外来として人気"], bestFor: "深夜の急病時。" },
  { name: "SOKUYAKU", type: "薬即日配送", feature: "薬の即日配送", points: ["診察→処方→配送が当日完結", "ドラッグストア提携", "薬代込みプランあり"], bestFor: "薬をすぐに受け取りたい人。" },
  { name: "LINEドクター", type: "LINE連携", feature: "LINEで完結", points: ["LINEアプリから予約・診察", "操作が簡単", "決済もLINE Pay対応"], bestFor: "LINEに慣れているユーザー。" },
];

export default function OnlineDoctorComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "オンライン診療比較", url: `${siteConfig.url}/guide/online-doctor-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】オンライン診療アプリ比較5選" description="クリニクス・curon・ファストドクター・SOKUYAKU・LINEドクター徹底比較。" url={`${siteConfig.url}/guide/online-doctor-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンライン診療比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】オンライン診療アプリ比較5選｜診療科目・料金・処方薬の即日配送を徹底解説</h1>
        <p className="text-muted leading-relaxed">仕事で病院に行く時間が取れない人、深夜の急な発熱、感染症対策など、オンライン診療の需要は急増中。本記事では主要5サービスを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンライン診療の流れ</h2>
        <p className="text-muted leading-relaxed mb-4">① アプリ予約 → ② スマホで医師の診察 → ③ 処方せん発行 → ④ 薬の受け取り。最短15分で診察、最短当日に薬が届くサービスもあります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンライン診療5選</h2>
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
        <h2 className="text-xl font-bold mb-4">オンライン診療の予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "DMMオンラインクリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "DMMの低価格", price: "保険＋自由診療", badge: "人気" },
            { name: "クリニックフォア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "業界最大級", price: "保険＋自由診療" },
            { name: "ファストドクター", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "24時間対応", price: "保険診療" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインクリニック比較</span>
            <p className="text-xs text-muted mt-1">他のオンライン診療</p>
          </Link>
          <Link href="/guide/medical-checkup-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">人間ドック比較</span>
            <p className="text-xs text-muted mt-1">健康投資の選択肢</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
