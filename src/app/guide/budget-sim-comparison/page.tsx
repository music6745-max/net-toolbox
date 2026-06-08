import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】格安SIM(MVNO)おすすめ10選｜料金・速度・キャンペーンを徹底比較",
  description:
    "ahamo・LINEMO・povo2.0・UQモバイル・ワイモバイル・楽天モバイル・mineo・IIJmio・日本通信SIM・NUROモバイルの格安SIMを料金・速度・キャンペーンで比較。",
  alternates: { canonical: `${siteConfig.url}/guide/budget-sim-comparison` },
};

const faqItems = [
  { question: "格安SIMに乗り換えるといくら節約できる？", answer: "大手キャリア(月7,000円前後)から格安SIM(月1,000〜3,000円)に変えると年間5万円以上の節約になります。" },
  { question: "速度は遅くなりますか？", answer: "ahamo/LINEMO/povo/UQモバイルはキャリア直系で速度低下少なめ。MVNO(IIJmio等)は昼休みに遅くなることがあります。" },
  { question: "乗り換えにMNP手数料はかかりますか？", answer: "2021年4月以降、MNP転出手数料は全キャリア無料。契約解除料もほぼ撤廃されています。" },
  { question: "eSIMとは？", answer: "物理SIMカードなしで契約できる仕組み。オンラインで即時開通でき、povo2.0やIIJmioなどが対応。デュアルSIM運用にも便利です。" },
];

const services = [
  { name: "ahamo", type: "ドコモ回線", rate: "月2,970円(20GB)", points: ["ドコモ品質の高速回線", "5分かけ放題付き", "海外91ヵ国でそのまま使える"], bestFor: "安定した速度と通話を求める人" },
  { name: "LINEMO", type: "ソフトバンク回線", rate: "月990円(3GB)〜", points: ["LINEギガフリー(通話・ビデオも対象)", "ソフトバンク品質の回線", "ミニプラン990円が最安クラス"], bestFor: "LINE中心の使い方の人" },
  { name: "povo2.0", type: "au回線", rate: "基本0円+トッピング", points: ["基本料0円でサブ回線に最適", "データ使い放題24時間330円", "自分だけのプランをカスタマイズ"], bestFor: "サブ回線・従量課金したい人" },
  { name: "UQモバイル", type: "au回線", rate: "月1,078円(4GB)〜", points: ["安定したau回線品質", "店舗サポートあり", "自宅セット割でさらに安く"], bestFor: "店舗サポートが必要な人" },
  { name: "楽天モバイル", type: "楽天回線", rate: "月1,078円(3GB)〜3,278円(無制限)", points: ["データ無制限で月3,278円", "楽天Link通話で国内通話無料", "楽天ポイント還元"], bestFor: "データ無制限で使いたい人" },
  { name: "IIJmio", type: "ドコモ/au回線", rate: "月850円(2GB)〜", points: ["業界最安クラスの料金", "eSIM対応・複数回線割引", "データシェア・繰越対応"], bestFor: "とにかく安さ重視の人" },
];

export default function BudgetSimComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "格安SIM比較", url: `${siteConfig.url}/guide/budget-sim-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】格安SIM(MVNO)おすすめ10選" description="ahamo・LINEMO・povo2.0・UQモバイル・楽天モバイル・IIJmioの格安SIMを料金・速度・キャンペーンで比較。" url={`${siteConfig.url}/guide/budget-sim-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>格安SIM比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】格安SIM(MVNO)おすすめ10選｜料金・速度・キャンペーンを徹底比較
        </h1>
        <p className="text-muted leading-relaxed">
          大手キャリアから格安SIMへ乗り換えるだけで、毎月のスマホ代を4,000〜6,000円節約できます。2026年現在、キャリア直系のahamo・LINEMO・povoは速度と安定性で人気。一方、IIJmioや楽天モバイルは圧倒的な安さが魅力です。用途に合った最適プランを見つけましょう。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">速度重視・通話もしたい → ahamo</span></p>
          <p><span className="font-bold">LINE中心・最安で使いたい → LINEMO</span></p>
          <p><span className="font-bold">サブ回線・従量課金 → povo2.0</span></p>
          <p><span className="font-bold">店舗サポート必要 → UQモバイル</span></p>
          <p><span className="font-bold">データ無制限 → 楽天モバイル</span></p>
          <p><span className="font-bold">とにかく安さ最優先 → IIJmio</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">格安SIMの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          格安SIMを選ぶ基準は「月額料金」「通信速度」「サポート体制」の3つ。キャリア直系(ahamo/LINEMO/povo/UQモバイル/ワイモバイル)は本家回線をそのまま使えるため速度低下が少なく、MVNOは価格が安い反面、混雑時間帯に速度が落ちることがあります。通話をよくする人はかけ放題の有無、データをたくさん使う人は大容量プランや無制限プランをチェックしましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">サービス比較</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{s.rate}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の料金・キャンペーンは各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((f) => (
            <div key={f.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {f.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            格安SIMへの乗り換えは、固定費削減の王道として年間5万円以上の節約が見込めます。速度重視ならキャリア直系のahamo・LINEMO・povo、コスト最優先ならIIJmio・楽天モバイルがベスト。MNP手数料は無料、eSIMなら即日開通できるため、乗り換えのハードルは非常に低くなっています。まずは現在の月額料金と比較してみましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">Wi-Fi比較</span>
            <p className="text-xs text-muted mt-1">自宅回線の見直しに</p>
          </Link>
          <Link href="/guide/smartphone-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマートフォン比較</span>
            <p className="text-xs text-muted mt-1">端末選びのポイント</p>
          </Link>
          <Link href="/guide/esim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">eSIM比較</span>
            <p className="text-xs text-muted mt-1">即日開通できる回線選び</p>
          </Link>
          <Link href="/guide/mobile-router-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">モバイルルーター比較</span>
            <p className="text-xs text-muted mt-1">外出先の通信費も見直す</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
