import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】通信制高校おすすめ比較5選｜学費・サポート・進学実績を徹底解説",
  description:
    "N高・S高・第一学院・ルネサンス・クラーク記念国際高校の通信制高校5校を学費・サポート・進学実績で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/online-high-school-comparison` },
};

const faqItems = [
  { question: "通信制高校の学費はどれくらい？", answer: "公立で年間2〜5万円、私立で年間20〜80万円が相場です。就学支援金制度を使えば実質負担額を大幅に減らせます。" },
  { question: "大学進学はできますか？", answer: "可能です。N高・S高など進学実績の豊富な学校もあり、東大・京大・早慶への合格者も毎年輩出しています。" },
  { question: "卒業資格は全日制と同じですか？", answer: "高校卒業資格は全日制と同等です。進学・就職・公務員試験すべて問題なく受けられます。" },
  { question: "全日制から転入できますか？", answer: "ほとんどの通信制高校で随時転入を受け入れています。学年途中からでも編入可能です。" },
];

const services = [
  { name: "N高等学校", type: "ネット主体", feature: "業界最大手のN高", points: ["生徒数2.6万人超", "プログラミングや起業教育が充実", "ネットコース・通学コース選択可"], bestFor: "ITスキルを伸ばしたい生徒。" },
  { name: "S高等学校", type: "ネット主体", feature: "N高姉妹校", points: ["VR授業が標準", "全国どこでも受講可", "進学実績豊富"], bestFor: "VR・新しい学びを体験したい生徒。" },
  { name: "第一学院高校", type: "通学+ネット", feature: "全国50校以上", points: ["全国に学習センター", "個別カウンセリング充実", "資格取得サポートあり"], bestFor: "通学型サポートを受けたい生徒。" },
  { name: "ルネサンス高校", type: "ネット主体", feature: "eスポーツ・芸能", points: ["eスポーツコース・声優コースあり", "リアルスクーリングは年4日", "卒業率99%超"], bestFor: "好きなことに専念したい生徒。" },
  { name: "クラーク記念国際高校", type: "通学型", feature: "歴史ある通信制", points: ["全国50箇所以上のキャンパス", "国際コース・スポーツコースあり", "全日制に近い手厚いサポート"], bestFor: "全日制に近い形で通学したい生徒。" },
];

export default function OnlineHighSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "通信制高校比較", url: `${siteConfig.url}/guide/online-high-school-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】通信制高校おすすめ比較5選" description="N高・S高・第一学院・ルネサンス・クラーク徹底比較。" url={`${siteConfig.url}/guide/online-high-school-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>通信制高校比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】通信制高校おすすめ比較5選｜学費・サポート・進学実績を徹底解説</h1>
        <p className="text-muted leading-relaxed">通信制高校は「自分のペースで学びたい」「全日制に合わない」生徒の選択肢として急速に広がっています。本記事では人気5校を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">通信制高校を選ぶポイント</h2>
        <p className="text-muted leading-relaxed mb-4">通信制高校選びでは『学費』『サポート体制』『進学実績』『コースの多様性』の4点が重要です。資料請求は無料なので、最低でも3校は取り寄せて比較しましょう。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ通信制高校5校</h2>
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
        <h2 className="text-xl font-bold mb-4">進路と学習計画に役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/education-cost-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">教育費シミュレーター</span>
            <p className="text-xs text-muted mt-1">学費と支援金の検討に</p>
          </Link>
          <Link href="/tools/study-plan-generator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">学習計画ジェネレーター</span>
            <p className="text-xs text-muted mt-1">自宅学習の設計に</p>
          </Link>
          <Link href="/guide/tutoring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">学習塾比較</span>
            <p className="text-xs text-muted mt-1">進学サポートも確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/tutoring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">学習塾比較</span>
            <p className="text-xs text-muted mt-1">学習サポートの選び方</p>
          </Link>
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール</span>
            <p className="text-xs text-muted mt-1">将来のキャリアを準備</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
