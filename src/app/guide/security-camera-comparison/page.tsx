import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】防犯カメラ・スマートホームカメラ比較5選",
  description:
    "Tapo・Google Nest Cam・Amazon Blink・SwitchBot・Aqaraの家庭用防犯カメラ5社を価格・機能・録画方式で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/security-camera-comparison` },
};

const faqItems = [
  { question: "屋外用と屋内用は分けて買うべき？", answer: "屋外用は防水・防塵性能(IP65以上)が必要です。屋内用は安価で多機能のものが多く、用途に応じて選び分けましょう。" },
  { question: "クラウド録画は必要？", answer: "盗難・破壊リスクを考えるとクラウド録画推奨です。月額数百円〜利用できます。SDカード録画と併用が理想です。" },
  { question: "プライバシーは大丈夫？", answer: "メーカーの暗号化方式と認証体制を確認しましょう。Google Nest・SwitchBotなど大手が安心です。" },
  { question: "工事は必要？", answer: "Wi-Fi接続型のスマートカメラなら工事不要で設置できます。屋外もコンセント+両面テープ・ネジで設置可能です。" },
];

const services = [
  { name: "TP-Link Tapo C200", type: "屋内", feature: "コスパ最強の屋内カメラ", points: ["3,000円台", "SDカード録画", "首振り機能"], bestFor: "コスパ重視。" },
  { name: "Google Nest Cam", type: "屋内/屋外", feature: "AI認識精度が高い", points: ["人物・動物・車両を識別", "Google Home連携", "クラウド3時間録画無料"], bestFor: "Googleユーザー。" },
  { name: "Amazon Blink", type: "屋外", feature: "電池式で配線不要", points: ["乾電池で2年駆動", "Alexa連携", "屋外設置簡単"], bestFor: "配線したくない屋外設置。" },
  { name: "SwitchBot 屋外カメラ", type: "屋外", feature: "国内サポート", points: ["バッテリー駆動", "ソーラー充電対応", "日本語サポート"], bestFor: "国産安心感重視。" },
  { name: "Aqara G3 Hub", type: "屋内ハブ", feature: "スマートホーム拡張可", points: ["Zigbeeハブ機能内蔵", "ペット監視に最適", "HomeKit対応"], bestFor: "Apple Homeユーザー。" },
];

export default function SecurityCameraComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "防犯カメラ比較", url: `${siteConfig.url}/guide/security-camera-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】防犯カメラ・スマートホームカメラ比較5選" description="Tapo・Nest Cam・Blink・SwitchBot・Aqara徹底比較。" url={`${siteConfig.url}/guide/security-camera-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>防犯カメラ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】防犯カメラ・スマートホームカメラ比較5選</h1>
        <p className="text-muted leading-relaxed">家を守るスマートカメラはDIY派の必須アイテム。本記事では人気5機種を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ防犯カメラ5選</h2>
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
        <h2 className="text-xl font-bold mb-4">カメラ設置と通信環境の確認に役立つ内部ガイド</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/guide/home-security-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ホームセキュリティ比較</span>
            <p className="text-xs text-muted mt-1">プロ設置型との違いを確認</p>
          </Link>
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">Wi-Fi比較</span>
            <p className="text-xs text-muted mt-1">録画に必要な通信環境を見直す</p>
          </Link>
          <Link href="/tools/internet-speed-grade-checker" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">通信速度チェック</span>
            <p className="text-xs text-muted mt-1">クラウド録画前の確認に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/home-security-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ホームセキュリティ比較</span>
            <p className="text-xs text-muted mt-1">プロ設置型の比較</p>
          </Link>
          <Link href="/guide/smart-watch-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマートウォッチ比較</span>
            <p className="text-xs text-muted mt-1">スマートデバイス全般</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
