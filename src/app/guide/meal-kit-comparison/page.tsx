import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ミールキット比較おすすめ5選｜オイシックス・ヨシケイ・パルシステムを徹底解説",
  description:
    "Oisix(Kit Oisix)・ヨシケイ・パルシステム・らでぃっしゅぼーや・ワタミの宅食ダイレクトのミールキットを料金・調理時間・品質で徹底比較。共働き家庭の時短調理を支援します。",
  alternates: { canonical: `${siteConfig.url}/guide/meal-kit-comparison` },
};

const faqItems = [
  {
    question: "ミールキットは本当に時短になりますか？",
    answer:
      "野菜のカット・調味料の計量がすべて済んでいるため、調理時間は10〜20分で完成します。スーパーへの買い出し時間も削減できるため、共働き家庭では1日あたり1時間以上の時短効果が期待できます。",
  },
  {
    question: "1食あたりの料金はどのくらい？",
    answer:
      "ミールキットの相場は1食あたり600〜1,200円程度。スーパーで自炊するより1〜2割高い価格感ですが、フードロス削減や買い物時間の短縮を考えるとコストパフォーマンスは悪くありません。",
  },
  {
    question: "保存期間はどれくらいですか？",
    answer:
      "冷蔵タイプは賞味期限が3〜5日程度、冷凍タイプは1ヶ月以上保存できます。共働きで使い切れるか不安な方は冷凍タイプから始めるのがおすすめです。",
  },
  {
    question: "アレルギー対応はできますか？",
    answer:
      "Oisix・パルシステムなど大手は原材料表示が明確で、アレルゲンの絞り込み検索にも対応しています。特定の食材を避けたい場合は注文時に必ず確認しましょう。",
  },
];

const services = [
  {
    name: "Oisix（オイシックス） Kit Oisix",
    type: "20分2品・有機野菜",
    price: "1食あたり約700〜1,200円",
    points: [
      "20分で主菜＋副菜の2品が完成",
      "有機野菜・無添加食材へのこだわり",
      "お試しセット最大75%オフ",
    ],
    bestFor: "品質と時短を両立したい共働き家庭。",
  },
  {
    name: "ヨシケイ カットミール",
    type: "毎日配送・5日間プラン",
    price: "1食あたり約600〜800円",
    points: [
      "10〜15分で完成のカット済み食材",
      "毎日配送で常に新鮮",
      "5日間・6日間プランで献立を考えなくてよい",
    ],
    bestFor: "毎日の献立を考えたくない方。",
  },
  {
    name: "パルシステム お料理セット",
    type: "首都圏中心・国産食材",
    price: "1食あたり約600〜900円",
    points: [
      "国産・産直食材中心の安全性",
      "週1回まとめ配送で送料が安い",
      "子育て割引で送料無料・割引あり",
    ],
    bestFor: "国産食材にこだわる首都圏在住の方。",
  },
  {
    name: "らでぃっしゅぼーや ミールキット",
    type: "オーガニック・契約農家直送",
    price: "1食あたり約700〜1,000円",
    points: [
      "独自基準RADIXによる厳しい品質管理",
      "化学調味料・合成着色料無添加",
      "創業38年以上の老舗の安心感",
    ],
    bestFor: "オーガニック志向で品質最優先の方。",
  },
  {
    name: "ワタミの宅食ダイレクト",
    type: "冷凍・湯せん／レンジ調理",
    price: "1食あたり約400〜700円",
    points: [
      "冷凍で長期保存可能",
      "レンジ・湯せんで5分以内の超時短",
      "管理栄養士監修の栄養バランス",
    ],
    bestFor: "包丁を使わず最短で食事を準備したい方。",
  },
];

export default function MealKitComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ミールキット比較", url: `${siteConfig.url}/guide/meal-kit-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ミールキット比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ミールキット比較おすすめ5選｜オイシックス・ヨシケイ・パルシステムを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          共働き世帯の救世主「ミールキット」。野菜のカットから調味料の計量まで済んだ状態で届くため、献立を考える手間も買い物の時間もゼロにできます。2026年現在の主要5サービスを料金・調理時間・品質・配送エリアで徹底比較し、ライフスタイル別の最適解を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">時短×品質 → Oisix Kit Oisix</span></p>
          <p><span className="font-bold">献立を考えたくない → ヨシケイ カットミール</span></p>
          <p><span className="font-bold">国産・首都圏在住 → パルシステム お料理セット</span></p>
          <p><span className="font-bold">オーガニック志向 → らでぃっしゅぼーや</span></p>
          <p><span className="font-bold">冷凍で長期保存 → ワタミの宅食ダイレクト</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ミールキット選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          ミールキットは「調理時間」「価格」「品質」「配送エリア」の4軸で比較するのが基本です。最も差が出るのは調理時間で、Kit Oisixは20分、ヨシケイは10〜15分、ワタミは電子レンジで5分。包丁を使うかどうかも家事負担に直結します。価格は1食あたり400〜1,200円と幅広く、有機野菜・国産・冷凍の有無で変動します。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          配送エリアも重要なポイント。Oisix・ヨシケイは全国対応ですが、パルシステムは首都圏中心、らでぃっしゅぼーやは離島除く全国です。お試しセットが用意されているサービスが多いので、まずはお試し→継続判断という流れがリスクが少なく賢い選び方。共働き家庭・子育て世帯は週2〜3回の利用から始めて、家事負担と家計のバランスを見極めるのが理想です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめミールキット5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{s.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 価格・配送エリアは2026年4月時点の参考値です。最新情報は各社公式サイトでご確認ください。</p>
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
            ミールキットは「時短・品質・献立の悩み解消」を一度に叶える共働き家庭の必須アイテム。スーパー自炊より1〜2割高くなる分、確保できる時間と精神的ゆとりを考えればコストパフォーマンスは抜群です。お試しセットで複数社を比較し、家族のライフスタイルに合うサービスを選びましょう。家計簿アプリで食費全体の中の比重を可視化すれば、無理のない継続利用が実現できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/food-delivery-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">食材宅配サービス比較</span>
            <p className="text-xs text-muted mt-1">食材定期便も合わせてチェック</p>
          </Link>
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">毎日の水もまとめて宅配</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
