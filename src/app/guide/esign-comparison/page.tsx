import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】電子契約サービス比較5選｜法人向け料金・機能・連携を徹底解説",
  description:
    "クラウドサイン・freeeサイン・GMOサイン・ドキュサイン・電子印鑑GMOの電子契約サービス5社を料金・機能・連携で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/esign-comparison` },
};

const faqItems = [
  { question: "電子契約は法的に有効ですか？", answer: "電子署名法により紙の契約書と同等の法的効力があります。2022年の改定で押印不要・電子化が加速しました。" },
  { question: "どんなコスト削減効果がありますか？", answer: "印紙代・郵送費・人件費の削減で年間数十万〜数百万円の効果が一般的です。契約締結スピードも数日→数時間に短縮されます。" },
  { question: "無料プランはありますか？", answer: "クラウドサイン・freeeサインなど多くで無料プランがあります。月の送信数に制限がありますが、小規模事業者なら十分使えます。" },
  { question: "海外取引にも使えますか？", answer: "ドキュサインは世界180カ国以上で利用されており、国際取引に強いです。国内中心ならクラウドサインやGMOサインがおすすめ。" },
];

const services = [
  { name: "クラウドサイン", type: "国内シェアNo.1", feature: "弁護士ドットコム運営", points: ["国内シェア80%超", "シンプルな操作性", "無料プランで月3件まで送信可"], bestFor: "国内取引中心の中小企業。" },
  { name: "freeeサイン", type: "国産", feature: "freee連携で会計まで一気通貫", points: ["freee会計と連動", "請求書送付と契約締結を統合", "電子帳簿保存法対応"], bestFor: "freeeユーザー。" },
  { name: "GMOサイン", type: "国産", feature: "実印・認印の使い分けが可能", points: ["契約電子化で日本最大級", "法的効力の強い実印タイプあり", "月額9,680円〜"], bestFor: "重要契約も電子化したい人。" },
  { name: "ドキュサイン", type: "海外", feature: "世界シェアNo.1", points: ["180カ国以上で利用", "多言語対応", "海外パートナーとの契約に強い"], bestFor: "グローバル企業。" },
  { name: "電子印鑑GMOサイン", type: "国産", feature: "印鑑文化に最適化", points: ["印影画像のカスタマイズ", "押印業務をそのまま電子化", "コスト効率が高い"], bestFor: "印鑑文化に慣れた組織。" },
];

export default function EsignComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "電子契約比較", url: `${siteConfig.url}/guide/esign-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】電子契約サービス比較5選" description="クラウドサイン・freeeサイン・GMO・ドキュサイン徹底比較。" url={`${siteConfig.url}/guide/esign-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>電子契約比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】電子契約サービス比較5選｜法人向け料金・機能・連携を徹底解説</h1>
        <p className="text-muted leading-relaxed">脱ハンコ・テレワーク対応で電子契約は今や必須インフラ。本記事では国内シェア上位のサービスを中心に5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">電子契約導入のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">紙の契約書1通あたり印紙代・郵送費・人件費を含めて約3,000〜5,000円かかると言われます。電子契約なら送信1件あたり数十円〜数百円。月20件なら年間数十万円の削減効果が期待できます。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ電子契約サービス5選</h2>
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
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">電子契約と相性の良い会計</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">インボイス対応比較</span>
            <p className="text-xs text-muted mt-1">電子帳簿保存法対応</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
