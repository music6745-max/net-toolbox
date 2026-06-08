import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ゴルフスクール比較おすすめ5選｜ライザップゴルフ・ゴルフパフォーマンス他",
  description:
    "ライザップゴルフ・ゴルフパフォーマンス・サンクチュアリゴルフ・チキンゴルフ・ゴルテックを料金・レッスン内容・成果保証で徹底比較。目的別の選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/golf-school-comparison` },
};

const faqItems = [
  { question: "インドアとアウトドアどちらがいいですか？", answer: "基礎スイングの矯正は弾道測定器が使えるインドアが効率的です。コースデビューや飛距離感覚を養うにはアウトドアが有利で、併用するのが理想です。" },
  { question: "レッスン料金の相場はどれくらい？", answer: "マンツーマンのインドアスクールは月30,000〜40,000円、完全パーソナル（ライザップゴルフなど）は2ヶ月で30万円前後が相場です。グループレッスンなら月1万円台も可能です。" },
  { question: "初心者でも通えますか？", answer: "ほとんどのスクールが初心者向けコースを用意しており、クラブの握り方から指導してくれます。レンタルクラブが無料のスクールも多いので手ぶらで通えます。" },
  { question: "成果保証はありますか？", answer: "ライザップゴルフやチキンゴルフなどは30日間全額返金保証があり、初めて通う人でも安心して始められます。" },
];

const services = [
  { name: "ライザップゴルフ", type: "完全個室", rate: "16回298,000円〜", points: ["完全個室のマンツーマンレッスン", "30日間無条件返金保証", "専属トレーナー制"], bestFor: "短期集中で本気で上達したい人。" },
  { name: "ゴルフパフォーマンス", type: "スイング解析", rate: "10回235,000円〜", points: ["最新シミュレーターによるデータ解析", "初心者向けからシングル目標まで", "日本プロゴルフ協会認定コーチ在籍"], bestFor: "論理的にスイングを学びたい人。" },
  { name: "サンクチュアリゴルフ", type: "通い放題", rate: "月16,940円〜", points: ["月額固定で通い放題", "女性専用クラスあり", "23時まで営業で仕事帰りにも◎"], bestFor: "ゆっくり続けたい社会人。" },
  { name: "チキンゴルフ", type: "マンツーマン", rate: "月23,000円〜", points: ["楽しく続けられる指導方針", "30日間全額返金保証", "手ぶらで通える設備"], bestFor: "挫折せず楽しく通いたい人。" },
  { name: "ゴルテック", type: "AI解析", rate: "月22,000円〜", points: ["AIによる自動スイング診断", "低価格でパーソナル受講", "都心部に多数展開"], bestFor: "コスパ重視の都市部在住者。" },
];

export default function GolfSchoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ゴルフスクール比較", url: `${siteConfig.url}/guide/golf-school-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ゴルフスクール比較おすすめ5選" description="ライザップゴルフ・ゴルフパフォーマンス・サンクチュアリゴルフ・チキンゴルフ・ゴルテックを料金・レッスン内容・成果保証で徹底比較。" url={`${siteConfig.url}/guide/golf-school-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>ゴルフスクール比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ゴルフスクール比較おすすめ5選｜ライザップゴルフ・ゴルフパフォーマンスを徹底解説</h1>
        <p className="text-muted leading-relaxed">
          接待ゴルフの復活やコロナ禍を経たアウトドア趣味ブームで、ゴルフを始める社会人が増加。独学では遠回りになりがちなスイングも、専門スクールに通えば最短で100切りが狙えます。2026年時点で人気の5スクールを料金・指導方針・保証制度で比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">短期集中 → ライザップゴルフ</span></p>
          <p><span className="font-bold">データ解析重視 → ゴルフパフォーマンス</span></p>
          <p><span className="font-bold">通い放題 → サンクチュアリゴルフ</span></p>
          <p><span className="font-bold">楽しく続けたい → チキンゴルフ</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ゴルフスクール選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          ゴルフスクールは「パーソナル型 vs グループ型」「インドア vs アウトドア」の軸で分類されます。短期間で結果を出したいならパーソナル×インドア、長く楽しみたいならグループ×通い放題がコスパ良好。ほとんどのスクールで無料体験レッスンがあり、施設の雰囲気やコーチとの相性を事前に確認できます。入会金・クラブレンタル料・シューズ料金など表示価格外の費用も要チェックです。返金保証のあるスクールなら「合わなかった時のリスク」を最小化できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめゴルフスクール5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の税込参考値です。最新情報は各スクール公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">上達を最大化する4つのコツ</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>1. 週1〜2回以上の継続が上達の絶対条件。期間を空けるとスイングの再現性が下がります。</p>
          <p>2. スマホでスイング動画を毎回撮影し、復習に活用しましょう。</p>
          <p>3. インドアで練習したスイングは早めにラウンドで試し、実戦感覚を身につけます。</p>
          <p>4. 基本クラブ（7番アイアン）を徹底的に仕上げてから他のクラブに広げます。</p>
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
          <p className="text-muted leading-relaxed">
            ゴルフスクールは「自分の目的と性格に合うか」が最大のポイント。短期集中・データ解析・通い放題・楽しく継続など、コンセプトは各社で大きく異なります。必ず無料体験に行って施設・コーチと相性を確かめましょう。月謝や道具代は上限を決めて見直し、趣味費の使いすぎを防ぐことも大切です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">趣味費と運動習慣の見直しに役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/exercise-calorie-burn" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">運動消費カロリー計算</span>
            <p className="text-xs text-muted mt-1">ラウンドや練習量の目安に</p>
          </Link>
          <Link href="/guide/sport-club-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スポーツクラブ比較</span>
            <p className="text-xs text-muted mt-1">基礎体力づくりも検討</p>
          </Link>
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス比較</span>
            <p className="text-xs text-muted mt-1">自宅トレーニングで補強</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス比較</span>
            <p className="text-xs text-muted mt-1">運動習慣をつくる</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">趣味の支払いをお得に</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
