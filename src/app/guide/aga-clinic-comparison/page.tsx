import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】AGA治療クリニック比較5選｜料金・効果・オンライン対応を徹底解説",
  description:
    "AGAスキンクリニック・湘南美容クリニック・クリニックフォア・DMMオンラインクリニック・Bezクリニックを料金・効果・オンライン対応で徹底比較。月額費用と無料カウンセリング情報を網羅。",
  alternates: { canonical: `${siteConfig.url}/guide/aga-clinic-comparison` },
};

const faqItems = [
  { question: "AGA治療はいつから効果が出ますか？", answer: "個人差がありますが3〜6ヶ月で抜け毛減少を実感、6〜12ヶ月で発毛効果を実感する人が多いです。最低でも6ヶ月の継続が推奨されます。" },
  { question: "オンライン診療と対面どちらが良いですか？", answer: "通院の手間と料金を抑えたい人はオンライン、頭皮検査や注入治療を受けたい人は対面が向いています。初診のみ対面にする選択肢もあります。" },
  { question: "保険は適用されますか？", answer: "AGA治療は美容目的とみなされ自由診療のため保険適用外です。月額1万円〜3万円が相場で、高度な治療ほど費用が上がります。" },
  { question: "副作用はありますか？", answer: "フィナステリド・デュタステリドには性機能低下などの報告があります。必ず医師の問診を受け、自己判断で個人輸入薬を使うのは避けましょう。" },
];

const services = [
  { name: "AGAスキンクリニック", type: "大手専門", feature: "全国60院以上の最大手", points: ["症例数220万件超の実績", "オリジナル発毛薬「Rebirth」", "全額返金保証制度あり"], bestFor: "実績重視で本格的に発毛を目指したい人。" },
  { name: "湘南美容クリニック", type: "美容クリニック", feature: "美容と毛髪を同時相談可能", points: ["全国院数No.1で通いやすい", "初診料・血液検査料無料", "オンライン診療と通院の併用OK"], bestFor: "美容医療と一緒にトータルケアしたい人。" },
  { name: "クリニックフォア", type: "オンライン特化", feature: "完全オンラインで手軽", points: ["最短当日診療・薬は翌日到着", "月額1,760円〜の予防プラン", "全国どこからでも受診可"], bestFor: "通院せず手軽に治療を始めたい人。" },
  { name: "DMMオンラインクリニック", type: "オンライン特化", feature: "DMMが運営する低価格サービス", points: ["定期便で割引が大きい", "1分間問診で簡単スタート", "薬は最短翌日到着"], bestFor: "コスパ重視の若年層。" },
  { name: "Bezクリニック", type: "オンライン特化", feature: "新興のオンラインAGA", points: ["初月実質無料キャンペーン", "LINEで簡単予約", "薬代以外の追加費用ゼロ"], bestFor: "とにかく初期費用を抑えたい人。" },
];

export default function AgaClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "AGAクリニック比較", url: `${siteConfig.url}/guide/aga-clinic-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】AGA治療クリニック比較5選" description="AGAスキンクリニック・湘南美容・クリニックフォア・DMM・Bezクリニックを徹底比較。" url={`${siteConfig.url}/guide/aga-clinic-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>AGAクリニック比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】AGA治療クリニック比較5選｜料金・効果・オンライン対応を徹底解説</h1>
        <p className="text-muted leading-relaxed">薄毛が気になり始めたら、放置するより早期治療が圧倒的に効率的です。AGA治療は継続的な医薬品治療が中心のため、料金・利便性・サポート体制でクリニックを選ぶことが重要。本記事では2026年時点で評価の高い5院を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">AGA治療の基本</h2>
        <p className="text-muted leading-relaxed mb-4">AGA（男性型脱毛症）は進行性の症状で、何もしなければ徐々に薄毛が広がります。フィナステリド・デュタステリド（抜け毛抑制）+ ミノキシジル（発毛促進）の組み合わせが標準治療で、医師の処方が必要です。月額1万円前後から始められるため、初期費用は意外と高くありません。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめAGAクリニック5選</h2>
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
          <p className="text-muted leading-relaxed">AGA治療は早く始めるほど結果が出やすい分野です。実績重視ならAGAスキンクリニック、コスパ重視ならクリニックフォアやDMMオンラインなど、まずは無料カウンセリングから始めてみましょう。複数院を比較してから決めるのが失敗しないコツです。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">AGA・オンライン診療の検討に役立つ内部ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインクリニック比較</span>
            <p className="text-xs text-muted mt-1">通院しない診療の選択肢を確認</p>
          </Link>
          <Link href="/guide/hairloss-women-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">女性向け薄毛治療比較</span>
            <p className="text-xs text-muted mt-1">症状や相談先の違いを確認</p>
          </Link>
          <Link href="/guide/online-doctor-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">診療アプリの使い方を確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">通院不要のクリニック比較</p>
          </Link>
          <Link href="/guide/medical-checkup-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">人間ドック比較</span>
            <p className="text-xs text-muted mt-1">健康投資のための情報</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
