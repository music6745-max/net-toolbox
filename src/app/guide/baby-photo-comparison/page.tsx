import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ニューボーンフォト・出張撮影比較5選｜料金・撮影スタイルを徹底解説",
  description:
    "fotowa・OurPhoto・LOVEGRAPH・スタジオアリス・スタジオマリオの出張・スタジオベビーフォト撮影サービスを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/baby-photo-comparison` },
};

const faqItems = [
  { question: "ニューボーンフォトの撮影時期は？", answer: "生後2〜3週間がベストとされます。新生児期特有の丸まったポーズが撮れる貴重な時期です。" },
  { question: "出張撮影とスタジオどちらが良い？", answer: "自宅でリラックスして撮りたいなら出張、衣装やセットが豊富なスタジオが好みならスタジオがおすすめです。" },
  { question: "費用相場は？", answer: "出張撮影で2〜4万円(データ込)、スタジオで3〜6万円が相場です。" },
  { question: "兄弟姉妹も一緒に撮れる？", answer: "可能です。家族写真として記念になるため、同時撮影プランを選ぶ家庭が増えています。" },
];

const services = [
  { name: "fotowa", type: "出張撮影", feature: "業界最大級の出張", points: ["全国対応", "1人1人にカメラマン", "21,780円〜定額"], bestFor: "全国どこでも気軽に。" },
  { name: "OurPhoto", type: "出張撮影", feature: "コスパ重視", points: ["1時間11,000円〜", "全国対応", "シンプルプラン"], bestFor: "費用を抑えたい人。" },
  { name: "LOVEGRAPH", type: "出張撮影", feature: "おしゃれな写真", points: ["ナチュラル系撮影に強い", "若手カメラマン多数", "SNS映え"], bestFor: "雑誌風の写真が欲しい人。" },
  { name: "スタジオアリス", type: "スタジオ", feature: "全国490店舗以上", points: ["業界最大手", "衣装500点以上", "キャラクター撮影あり"], bestFor: "豪華に楽しみたい家族。" },
  { name: "スタジオマリオ", type: "スタジオ", feature: "コスパとクオリティ", points: ["撮影料0円キャンペーン", "プロカメラマン在籍", "全国350店舗"], bestFor: "コスパとクオリティ重視。" },
];

export default function BabyPhotoComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ニューボーンフォト比較", url: `${siteConfig.url}/guide/baby-photo-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ニューボーンフォト・出張撮影比較5選" description="fotowa・OurPhoto・LOVEGRAPH・アリス・マリオ徹底比較。" url={`${siteConfig.url}/guide/baby-photo-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ニューボーンフォト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ニューボーンフォト・出張撮影比較5選</h1>
        <p className="text-muted leading-relaxed">赤ちゃんの今しか撮れない瞬間を残す撮影サービス5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめベビーフォト5選</h2>
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
        <h2 className="text-xl font-bold mb-4">出産準備と記念撮影に役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/birth-cost-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">出産費用シミュレーター</span>
            <p className="text-xs text-muted mt-1">撮影費を含めた準備費確認に</p>
          </Link>
          <Link href="/tools/baby-growth-tracker" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">赤ちゃん成長記録</span>
            <p className="text-xs text-muted mt-1">撮影時期の記録にも使える</p>
          </Link>
          <Link href="/guide/photo-studio-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フォトスタジオ比較</span>
            <p className="text-xs text-muted mt-1">七五三・家族写真も検討</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/photo-studio-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フォトスタジオ比較</span>
            <p className="text-xs text-muted mt-1">七五三・成人式</p>
          </Link>
          <Link href="/guide/baby-goods-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビー用品比較</span>
            <p className="text-xs text-muted mt-1">出産準備にも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
