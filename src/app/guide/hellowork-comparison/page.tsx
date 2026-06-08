import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】公務員試験対策スクール比較5選｜独学・通信・通学を徹底解説",
  description:
    "クレアール・LEC・TAC・伊藤塾・大原の公務員試験対策スクール5社を料金・合格実績・サポートで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/hellowork-comparison` },
};

const faqItems = [
  { question: "公務員試験対策はいつから？", answer: "本格的には1年前からが理想。短期集中なら半年〜9ヶ月でも合格可能です。" },
  { question: "費用相場は？", answer: "20万〜50万円が相場です。クレアールやスタディングはオンライン特化で20万円以下。" },
  { question: "独学と予備校どちらが良い？", answer: "教材の質・最新情報・面接対策を考えると予備校が有利。コストを抑えたい場合はオンライン予備校がおすすめ。" },
  { question: "面接対策は重要？", answer: "近年は人物重視の傾向が強く、面接対策の有無が合否を分けます。" },
];

const services = [
  { name: "クレアール", type: "オンライン特化", feature: "コスパ最強", points: ["価格が安い", "オンライン特化", "教材が充実"], bestFor: "コスパ重視。" },
  { name: "LEC東京リーガルマインド", type: "通学+通信", feature: "業界最大手", points: ["全国校舎展開", "合格者数No.1クラス", "幅広い試験対応"], bestFor: "対面サポートが欲しい人。" },
  { name: "TAC", type: "通学+通信", feature: "資格スクール大手", points: ["公務員講座実績豊富", "過去問解説豊富", "全国展開"], bestFor: "実績重視。" },
  { name: "伊藤塾", type: "総合", feature: "伊藤真の実績", points: ["論文・面接に強い", "オンライン対応", "ハイクラス志望に人気"], bestFor: "国家総合職志望者。" },
  { name: "資格の大原", type: "通学", feature: "通学型の老舗", points: ["全国校舎多数", "ライブ授業中心", "面接サポート充実"], bestFor: "通学型を求める人。" },
];

export default function HelloworkComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "公務員試験対策比較", url: `${siteConfig.url}/guide/hellowork-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】公務員試験対策スクール比較5選" description="クレアール・LEC・TAC・伊藤塾・大原徹底比較。" url={`${siteConfig.url}/guide/hellowork-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>公務員試験対策比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】公務員試験対策スクール比較5選｜独学・通信・通学を徹底解説</h1>
        <p className="text-muted leading-relaxed">安定した職業として根強い人気の公務員。本記事では試験対策スクール5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ公務員試験対策5社</h2>
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
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">民間企業も検討</p>
          </Link>
          <Link href="/guide/career-coaching-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">キャリアコーチング</span>
            <p className="text-xs text-muted mt-1">キャリア設計</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
