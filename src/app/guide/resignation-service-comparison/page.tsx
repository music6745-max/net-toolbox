import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】退職代行サービス比較5選｜料金・対応範囲・成功率を徹底解説",
  description:
    "退職代行モームリ・ガーディアン・SARABA・退職代行Jobs・弁護士法人みやびの料金・対応範囲・成功率を徹底比較。即日退職や有給消化交渉まで網羅。",
  alternates: { canonical: `${siteConfig.url}/guide/resignation-service-comparison` },
};

const faqItems = [
  { question: "退職代行を使えば本当に辞められますか？", answer: "労働者には退職の自由が認められており、ほぼ100%辞められます。代行業者経由で意思表示しても法的に有効です。ただし会社からの貸与物返却などは自分で行う必要があります。" },
  { question: "弁護士・労組・民間業者の違いは？", answer: "弁護士は未払い残業代請求や訴訟まで対応可能、労組は団体交渉権で有給・退職金交渉が可能、民間業者は意思伝達のみで交渉不可です。料金は弁護士が最も高くなります。" },
  { question: "費用相場はどれくらいですか？", answer: "民間業者で2〜3万円、労組系で2.5〜3万円、弁護士系で5〜10万円が相場です。追加料金なしの定額プランが安心です。" },
  { question: "ばれずに辞められますか？", answer: "代行業者が会社と交渉するため、出社せず電話も不要で退職可能です。多くのケースで翌日から出社不要となります。" },
];

const services = [
  { name: "退職代行モームリ", type: "労組提携", feature: "メディア露出が多い人気サービス", points: ["料金22,000円と業界最安級", "労働組合と提携で交渉可能", "後払い・分割払い対応"], bestFor: "とにかく安く確実に辞めたい人。" },
  { name: "退職代行ガーディアン", type: "労働組合", feature: "東京労働経済組合運営", points: ["全国対応・追加料金なし", "退職率100%の実績", "LINEで24時間相談可"], bestFor: "信頼性重視で迷っている人。" },
  { name: "退職代行SARABA", type: "労働組合", feature: "業界最大手の老舗", points: ["即日退職に強い", "24時間365日対応", "返金保証あり"], bestFor: "今すぐ辞めたいが交渉も必要な人。" },
  { name: "退職代行Jobs", type: "労組+弁護士監修", feature: "弁護士監修で安心", points: ["料金27,000円〜", "現金後払いOK", "転職サポート無料"], bestFor: "次の仕事も探したい人。" },
  { name: "弁護士法人みやび", type: "弁護士法人", feature: "未払い金請求まで完全対応", points: ["未払い残業代・退職金請求OK", "訴訟まで一貫対応", "料金55,000円〜"], bestFor: "ブラック企業で金銭請求も考えたい人。" },
];

export default function ResignationServiceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "退職代行比較", url: `${siteConfig.url}/guide/resignation-service-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】退職代行サービス比較5選" description="退職代行モームリ・ガーディアン・SARABA・Jobs・みやびを徹底比較。" url={`${siteConfig.url}/guide/resignation-service-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>退職代行比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】退職代行サービス比較5選｜料金・対応範囲・成功率を徹底解説</h1>
        <p className="text-muted leading-relaxed">「退職を切り出せない」「上司が怖い」「即日辞めたい」そんな悩みを解決するのが退職代行サービスです。本記事では、料金・対応範囲・運営主体（民間/労組/弁護士）の違いを比較し、自分に合うサービスを選ぶ基準を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">退職代行を使う前に知っておくべきこと</h2>
        <p className="text-muted leading-relaxed mb-4">退職代行は「辞める意思を会社に伝える」サービスですが、運営主体によってできることが大きく変わります。民間業者は単なる伝達のみ、労働組合は団体交渉権を持つため有給消化や退職日交渉が可能、弁護士は未払い賃金請求や訴訟まで対応できます。費用は安いほど対応範囲が狭くなる傾向です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ退職代行サービス5選</h2>
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
          <p className="text-muted leading-relaxed">退職は労働者の権利です。心身の健康を最優先に、自分の状況に合うサービスを選びましょう。安さ重視ならモームリ、信頼性ならガーディアン、金銭請求も視野に入れるなら弁護士法人みやびがおすすめです。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">退職後の転職もサポート</h2>
        <ComparisonTableCTA
          services={[
            { name: "doda", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "退職後すぐに動ける転職エージェント", price: "無料", badge: "定番" },
            { name: "リクルートエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "業界最大手の求人数", price: "無料" },
            { name: "マイナビエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "20代に手厚いサポート", price: "無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">辞めた後の次の一歩</p>
          </Link>
          <Link href="/guide/legal-consultation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法律相談サービス比較</span>
            <p className="text-xs text-muted mt-1">トラブル時の相談先</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
