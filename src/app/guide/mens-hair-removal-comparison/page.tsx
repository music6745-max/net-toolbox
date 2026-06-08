import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】メンズ医療脱毛クリニック比較5選｜料金・効果・通いやすさを徹底解説",
  description:
    "ゴリラクリニック・湘南美容クリニック・メンズリゼ・メンズエミナル・ドクターコバのメンズ医療脱毛5院を料金・効果・通いやすさで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/mens-hair-removal-comparison` },
};

const faqItems = [
  { question: "メンズ医療脱毛とサロン脱毛の違いは？", answer: "医療脱毛はレーザーで毛根を破壊し永久脱毛、サロン脱毛は減毛効果のみです。回数・料金は医療の方が高いですが効果は確実です。" },
  { question: "ヒゲ脱毛の費用相場は？", answer: "5回コースで7万円〜15万円が相場です。完了まで5〜10回必要なケースが多いです。" },
  { question: "痛みはありますか？", answer: "輪ゴムで弾かれる程度の痛みがあります。麻酔(笑気・クリーム)を選択できる院もあります。" },
  { question: "VIO脱毛は受けられますか？", answer: "全院でVIO脱毛が可能です。デリケートゾーンは衛生・快適性向上で人気が高まっています。" },
];

const services = [
  { name: "ゴリラクリニック", type: "メンズ専門", feature: "メンズ医療脱毛No.1", points: ["全国22院展開", "ヒゲ脱毛コース料金保証", "麻酔オプション豊富"], bestFor: "確実にヒゲをなくしたい人。" },
  { name: "湘南美容クリニック", type: "美容クリニック", feature: "全国最大手", points: ["メンズも対応する大手", "ヒゲ脱毛が安い", "全国に院あり"], bestFor: "コスパとブランド重視。" },
  { name: "メンズリゼ", type: "メンズ専門", feature: "永久保証付き", points: ["照射漏れ・打ち漏れ無料保証", "5種のレーザーから最適選択", "コース終了後の追加照射が安い"], bestFor: "保証重視で安心したい人。" },
  { name: "メンズエミナル", type: "メンズ専門", feature: "リーズナブル", points: ["業界最安級の料金", "麻酔が無料", "全国50院以上"], bestFor: "費用を抑えたい人。" },
  { name: "ドクターコバ", type: "永久保証", feature: "回数無制限プラン", points: ["定額後は無制限通い放題", "確実にツルツルにしたい人向け", "都内中心"], bestFor: "完全に脱毛したい人。" },
];

export default function MensHairRemovalComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "メンズ脱毛比較", url: `${siteConfig.url}/guide/mens-hair-removal-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】メンズ医療脱毛クリニック比較5選" description="ゴリラ・湘南・メンズリゼ・メンズエミナル・ドクターコバ徹底比較。" url={`${siteConfig.url}/guide/mens-hair-removal-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>メンズ脱毛比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】メンズ医療脱毛クリニック比較5選｜料金・効果・通いやすさを徹底解説</h1>
        <p className="text-muted leading-relaxed">ヒゲ剃りから解放されたい男性に医療脱毛は人気急上昇。本記事ではメンズ医療脱毛5院を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめメンズ医療脱毛5院</h2>
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
          <Link href="/guide/hair-removal-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">脱毛サロン比較</span>
            <p className="text-xs text-muted mt-1">サロン脱毛との比較</p>
          </Link>
          <Link href="/guide/aga-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">AGAクリニック比較</span>
            <p className="text-xs text-muted mt-1">男性向け美容医療</p>
          </Link>
          <Link href="/guide/whitening-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ホワイトニングクリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療に近い歯科ケア</p>
          </Link>
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">施術目的別の選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
