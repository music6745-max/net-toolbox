import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】英会話スクール比較5選｜駅前・オンライン・コーチング型を徹底解説",
  description:
    "ベルリッツ・ECC外語学院・GABA・PROGRIT・トライズの英会話スクール5社を駅前・オンライン・コーチングの観点で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/language-school-comparison` },
};

const faqItems = [
  { question: "英会話スクールとオンライン英会話の違いは？", answer: "英会話スクールは対面・少人数・カリキュラム重視、オンライン英会話は安価・自由度が高いのが特徴です。短期で実力を上げたい人はスクール、長期継続ならオンラインが向いています。" },
  { question: "コーチング英会話は本当に効果ありますか？", answer: "PROGRITやトライズは2〜3ヶ月で集中的に学習習慣を作るプログラムで、平均TOEIC100点アップなどの実績があります。料金は高いですが効率は最高クラスです。" },
  { question: "費用相場は？", answer: "駅前スクールで月3〜5万円、コーチング型で2ヶ月50〜70万円、オンラインで月6,000〜2万円が目安です。" },
  { question: "無料体験はありますか？", answer: "ほぼ全スクールで無料体験レッスン・カウンセリングを実施しています。最低3校で体験することをおすすめします。" },
];

const services = [
  { name: "ベルリッツ", type: "駅前", feature: "ビジネス英語の老舗", points: ["140年以上の歴史", "ビジネス英語に強い", "全国主要都市に校舎"], bestFor: "仕事で英語を使う社会人。" },
  { name: "ECC外語学院", type: "駅前", feature: "総合英語学習", points: ["大手で安心", "TOEIC・TOEFL対策あり", "学生〜社会人まで幅広い対応"], bestFor: "総合的に英語を学びたい人。" },
  { name: "GABA", type: "マンツーマン", feature: "個別指導専門", points: ["100%マンツーマンレッスン", "業界最大手のマンツーマン", "全国22校"], bestFor: "じっくり個別指導を受けたい人。" },
  { name: "PROGRIT", type: "コーチング", feature: "短期集中型", points: ["3ヶ月で英語力を一気に上げる", "学習プラン作成と進捗管理", "本田圭佑も愛用"], bestFor: "短期で結果を出したいビジネスパーソン。" },
  { name: "トライズ", type: "コーチング", feature: "1年集中プログラム", points: ["1年で英語マスターを目指す", "1日3時間の学習サポート", "ネイティブコーチ付き"], bestFor: "本気で英語を話せるようになりたい人。" },
];

export default function LanguageSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "英会話スクール比較", url: `${siteConfig.url}/guide/language-school-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】英会話スクール比較5選" description="ベルリッツ・ECC・GABA・PROGRIT・トライズ徹底比較。" url={`${siteConfig.url}/guide/language-school-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>英会話スクール比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】英会話スクール比較5選｜駅前・オンライン・コーチング型を徹底解説</h1>
        <p className="text-muted leading-relaxed">グローバル化が進む2026年、英語力は仕事の評価を大きく変える武器です。本記事では駅前型からコーチング型まで主要5校を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">英会話スクールの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">『何のために英語を学ぶか』を明確にしましょう。日常会話ならGABAやECC、ビジネスならベルリッツ、短期集中ならPROGRITやトライズが適しています。料金だけでなくコーチの質や校舎の通いやすさも比較すべきポイントです。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ英会話スクール5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料体験レッスンを予約する</h2>
        <ComparisonTableCTA
          services={[
            { name: "PROGRIT", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "短期集中コーチング", price: "2ヶ月53万円〜", badge: "効率最強" },
            { name: "ベルリッツ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ビジネス英語に強い", price: "月額制" },
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "オンライン無制限", price: "月6,480円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-english-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン英会話比較</span>
            <p className="text-xs text-muted mt-1">気軽に始められる選択肢</p>
          </Link>
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">スキルアップでキャリア強化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
