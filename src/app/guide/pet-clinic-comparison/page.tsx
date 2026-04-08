import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ペット保険比較5選｜補償範囲・料金・口コミを徹底解説",
  description:
    "アニコム損保・アイペット・楽天少短・FPC・SBIプリズム少短のペット保険5社を補償範囲・料金・口コミで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/pet-clinic-comparison` },
};

const faqItems = [
  { question: "ペット保険は本当に必要？", answer: "犬猫の医療費は人間と異なり全額自己負担です。手術1回で20〜30万円かかることもあるため、若いうちからの加入が安心です。" },
  { question: "保険料はいくら？", answer: "犬で月額2,000〜5,000円、猫で月額1,500〜3,000円が相場です。年齢が上がるほど保険料は高くなります。" },
  { question: "補償割合はどれが良い？", answer: "70%補償が主流ですが、保険料を抑えたいなら50%、安心を求めるなら100%プランも選べます。" },
  { question: "新規加入の年齢制限は？", answer: "多くの保険で7〜12歳までが新規加入可能です。シニア期に入る前の加入が現実的です。" },
];

const services = [
  { name: "アニコム損保", type: "業界最大手", feature: "動物病院ネットワーク最大", points: ["全国6,000以上の対応病院", "窓口精算で立替不要", "健康相談サービスも併設"], bestFor: "通院が多い飼い主。" },
  { name: "アイペット損保", type: "業界2位", feature: "幅広いプラン展開", points: ["手厚い手術プランあり", "終身継続が可能", "多頭割引あり"], bestFor: "複数のペットを飼っている人。" },
  { name: "楽天ペット保険", type: "ネット系", feature: "楽天ポイントが貯まる", points: ["楽天会員にお得", "ネット完結で簡単", "シンプルな商品設計"], bestFor: "楽天ユーザー。" },
  { name: "FPC", type: "格安", feature: "業界最安級の保険料", points: ["月額1,000円台から", "シンプルな1プラン", "手術補償も標準"], bestFor: "コスパ重視の人。" },
  { name: "SBIプリズム少短", type: "ネット系", feature: "SBIグループの安心", points: ["18歳まで継続可能", "通院から手術まで補償", "ネットで簡単加入"], bestFor: "長く安心して続けたい人。" },
];

export default function PetClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ペット保険比較", url: `${siteConfig.url}/guide/pet-clinic-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ペット保険比較5選" description="アニコム・アイペット・楽天・FPC・SBI徹底比較。" url={`${siteConfig.url}/guide/pet-clinic-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ペット保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ペット保険比較5選｜補償範囲・料金・口コミを徹底解説</h1>
        <p className="text-muted leading-relaxed">大切な家族であるペット。万が一の備えとして、人気5社のペット保険を補償範囲・料金・口コミで徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ペット保険選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">補償範囲・補償割合・継続年齢の3点を必ず比較しましょう。一見安く見えても継続更新できなければ意味がありません。複数社の見積もりを取ることが満足度を高めるコツです。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめペット保険5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料一括見積もりサービス</h2>
        <ComparisonTableCTA
          services={[
            { name: "アニコム損保", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "資料請求無料", badge: "おすすめ" },
            { name: "アイペット損保", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "幅広いプラン", price: "資料請求無料" },
            { name: "FPC", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "業界最安級", price: "資料請求無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/pet-food-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ペットフード比較</span>
            <p className="text-xs text-muted mt-1">健康を支える食事選び</p>
          </Link>
          <Link href="/guide/pet-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ペット保険比較(別アプローチ)</span>
            <p className="text-xs text-muted mt-1">他の保険商品も比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
