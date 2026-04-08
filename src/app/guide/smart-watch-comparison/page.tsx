import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "スマートウォッチおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "健康管理や運動を続けたい方へ。Apple Watch・Garmin・Fitbitなど人気5モデルのバッテリー・機能・対応OSを徹底比較し、ライフスタイル別に最適な1本を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/smart-watch-comparison` },
};

const faqItems = [
  {
    question: "スマートウォッチで何ができますか？",
    answer:
      "通知確認・電子決済・心拍/睡眠/血中酸素モニタリング・運動記録・GPSナビ・LINE返信などができます。健康管理と通知確認の両立が最大のメリットです。",
  },
  {
    question: "Apple WatchはiPhoneがないと使えませんか？",
    answer:
      "はい、Apple WatchはiPhone専用です。Androidユーザーは Galaxy Watch・Pixel Watch・Garmin・Fitbitから選びます。",
  },
  {
    question: "バッテリー持ちはどれくらいですか？",
    answer:
      "Apple Watchは約18時間〜36時間、Galaxy Watchは約40時間、Fitbitは約10日、Garminは機種により最大2週間以上。バッテリー重視ならGarminかFitbitが圧倒的です。",
  },
  {
    question: "防水・運動向きのモデルは？",
    answer:
      "GarminのForeRunner/Fenixシリーズはランニング・トライアスロンで定番。Apple Watch Ultraもダイビング対応です。プール・海で使うなら5ATM以上の防水を選びましょう。",
  },
];

const watches = [
  { name: "Apple Watch Series 10", type: "Apple", rate: "59,800円〜", points: ["iPhoneとの連携が圧倒的", "心電図・血中酸素・睡眠分析", "Apple Payで非接触決済"], bestFor: "iPhoneユーザー全般・初めての1本に。" },
  { name: "Apple Watch Ultra 2", type: "Apple", rate: "128,800円〜", points: ["最大36時間バッテリー", "100m防水でダイビング対応", "高精度GPSで登山・トレランに最適"], bestFor: "アウトドア・本格運動派。" },
  { name: "Garmin Venu 3", type: "マルチOS", rate: "65,780円〜", points: ["最大14日のロングバッテリー", "詳細なヘルス・スリープ分析", "iPhone/Android両対応"], bestFor: "バッテリー重視・ランナー・登山愛好者。" },
  { name: "Fitbit Charge 6", type: "マルチOS", rate: "23,800円〜", points: ["最大7日バッテリー", "心拍・睡眠スコア・ストレス管理", "Google Pay/マップ対応"], bestFor: "コスパ重視・健康管理メインの方。" },
  { name: "Galaxy Watch 7", type: "Android", rate: "45,800円〜", points: ["GalaxyスマホとのSamsung Health連携", "体組成測定・睡眠コーチング", "Google Wallet対応"], bestFor: "Galaxy/Pixelユーザー。" },
];

export default function SmartWatchComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "スマートウォッチ比較", url: `${siteConfig.url}/guide/smart-watch-comparison` },
        ]}
      />
      <ArticleJsonLd headline="スマートウォッチおすすめ5選【2026年最新】徹底比較｜選び方も解説" description="健康管理や運動を続けたい方へ。Apple Watch・Garmin・Fitbitなど人気5モデルのバッテリー・機能・対応OSを徹底比較し、ライフスタイル別に最適な1本を解説します。" url={`${siteConfig.url}/guide/smart-watch-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>スマートウォッチ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          スマートウォッチおすすめ5選【2026年最新】徹底比較｜選び方も解説
        </h1>
        <p className="text-muted leading-relaxed">
          スマートウォッチは2026年現在、健康管理・電子決済・通知確認の必須ガジェットになりました。本記事ではApple Watch・Garmin・Fitbit・Galaxy Watchの主要5モデルを「対応OS・バッテリー・運動機能・価格」で徹底比較し、用途別の最適解を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">iPhoneユーザー → Apple Watch Series 10</span></p>
          <p><span className="font-bold">アウトドア派 → Apple Watch Ultra 2 / Garmin</span></p>
          <p><span className="font-bold">バッテリー重視 → Garmin Venu 3</span></p>
          <p><span className="font-bold">コスパ重視 → Fitbit Charge 6</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">スマートウォッチ選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          スマートウォッチ選びは「使っているスマホのOS」で大半が決まります。iPhoneユーザーならApple Watch一択クラスで親和性が高く、Androidユーザーは Galaxy Watch / Pixel Watch / Garmin / Fitbitから選ぶ形に。次に重視したいのが「バッテリー持ち」と「健康機能」。Apple Watchは1〜2日に1回の充電が必要ですが、GarminやFitbitは1〜2週間持つモデルも多く、睡眠計測重視なら充電頻度の少ないモデルが圧倒的に便利です。
        </p>
        <p className="text-muted leading-relaxed">
          運動機能も大きな差別化ポイント。ランニング・トライアスロン・登山にはGarminシリーズが定番で、心拍ゾーン・GPSログ・トレーニング負荷管理といった専門機能が充実しています。日常の健康管理メインなら2〜3万円台のFitbitでも十分な性能です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめスマートウォッチ5モデルの詳細</h2>
        <div className="space-y-6">
          {watches.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新価格は各メーカーの公式サイトでご確認ください。</p>
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
          <p className="text-muted leading-relaxed">
            スマートウォッチはOS連携・バッテリー・運動機能の3軸で選ぶのが正解。iPhoneユーザーはApple Watch Series 10、本格運動はGarmin・Apple Watch Ultra、コスパならFitbit Charge 6が鉄板です。健康データを継続管理することで生活習慣の見直しや医療費削減にもつながります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "経費・確定申告管理に", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/smartphone-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマートフォン比較</span>
            <p className="text-xs text-muted mt-1">連携するスマホを選ぶ</p>
          </Link>
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">健康管理を強化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
