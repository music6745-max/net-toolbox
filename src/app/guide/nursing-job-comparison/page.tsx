import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】看護師転職サイト比較5選｜求人数・サポート・祝い金を徹底解説",
  description:
    "看護roo!・レバウェル看護・マイナビ看護師・ナースではたらこ・看護プロなど看護師特化の転職サービスを求人数・サポート・祝い金で徹底比較。病棟・クリニック・訪問看護別の選び方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/nursing-job-comparison` },
};

const faqItems = [
  { question: "看護師転職サイトは本当に無料ですか？", answer: "はい、求職者側は完全無料です。採用が決まった際に企業側が紹介料を支払う仕組みのため、サポートを何度受けても費用は発生しません。" },
  { question: "複数サイトに登録しても大丈夫ですか？", answer: "問題ありません。むしろ非公開求人のカバー率を上げるために3社程度の併用が推奨されます。ただし同じ求人に重複応募しないよう管理表を作りましょう。" },
  { question: "ブランク明けでも転職できますか？", answer: "ブランク歓迎の求人は多数あります。クリニックや健診センター、介護施設などは夜勤なし・残業少なめで復職しやすい職場です。マイナビ看護師はブランク相談に強みがあります。" },
  { question: "祝い金はもらえますか？", answer: "2021年の職業安定法改正で医療系の祝い金は禁止されています。祝い金を謳うサイトは注意が必要です。本当の価値はサポートの質と求人の質で判断しましょう。" },
];

const services = [
  { name: "看護roo!", type: "総合型", feature: "看護師転職の定番", points: ["求人数5万件以上", "面接同行や条件交渉が手厚い", "履歴書添削テンプレートが豊富"], bestFor: "初めての転職で手厚いサポートが欲しい看護師。" },
  { name: "レバウェル看護（旧看護のお仕事）", type: "総合型", feature: "LINEで気軽に相談", points: ["公開求人12万件超", "職場のリアル情報を提供", "LINEでサクサク連絡"], bestFor: "職場の雰囲気や人間関係を重視したい人。" },
  { name: "マイナビ看護師", type: "総合型", feature: "大手の安心サポート", points: ["全国47都道府県対応", "ブランク・復職相談に強い", "病院以外の求人も豊富"], bestFor: "地方勤務・ブランク復帰・キャリアチェンジ希望者。" },
  { name: "ナースではたらこ", type: "逆指名型", feature: "行きたい病院を指名できる", points: ["全国の医療機関をほぼ網羅", "非公開の逆指名求人に対応", "日本最大級の求人データ"], bestFor: "特定の病院に絞って応募したい人。" },
  { name: "看護プロ", type: "地域密着型", feature: "関東・東海に強い", points: ["職場情報の独自取材", "利用者満足度が高い", "小回りの利くサポート"], bestFor: "関東・東海エリアで働きたい看護師。" },
];

export default function NursingJobComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "看護師転職比較", url: `${siteConfig.url}/guide/nursing-job-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】看護師転職サイト比較5選" description="看護師特化の転職サービスを求人数・サポート・祝い金で徹底比較。" url={`${siteConfig.url}/guide/nursing-job-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>看護師転職比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】看護師転職サイト比較5選｜求人数・サポート・祝い金を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          看護師は慢性的な人手不足で売り手市場が続いており、夜勤なし・年収アップ・ワークライフバランス重視など、自分の希望に合う職場を選びやすい環境です。本記事では主要5社の特徴と使い分け方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">初めての転職 → 看護roo!</span></p>
          <p><span className="font-bold">気軽に相談したい → レバウェル看護</span></p>
          <p><span className="font-bold">ブランク復帰 → マイナビ看護師</span></p>
          <p><span className="font-bold">行きたい病院がある → ナースではたらこ</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">看護師転職市場の特徴</h2>
        <p className="text-muted leading-relaxed mb-4">
          看護師の有効求人倍率は常時2倍を超えており、特に都市部では3倍以上の地域もあります。病院以外にもクリニック、訪問看護、企業内看護師、治験コーディネーターなど働き方の選択肢が広がっています。転職サイトを賢く使えば、年収アップ・夜勤軽減・残業減少を同時に叶えることも十分可能です。
        </p>
        <p className="text-muted leading-relaxed">
          複数サイトに登録する最大の理由は「非公開求人」のカバーです。条件の良い求人は公開されず、エージェント経由でしか紹介されないケースが多いため、3社程度に登録して情報収集することで良質な求人にアクセスできます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ看護師転職サイト5選</h2>
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
        <h2 className="text-2xl font-bold mb-4">職場タイプ別の選び方</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted leading-relaxed">
          <p><span className="font-bold text-foreground">急性期病院：</span> スキルアップ重視。看護roo!とレバウェル看護が強い。</p>
          <p><span className="font-bold text-foreground">クリニック：</span> 夜勤なし・残業少。マイナビ看護師が豊富。</p>
          <p><span className="font-bold text-foreground">訪問看護：</span> 自由度高・高給与傾向。レバウェル看護が得意。</p>
          <p><span className="font-bold text-foreground">介護施設：</span> 夜勤あり高収入。求人数ではナースではたらこ。</p>
          <p><span className="font-bold text-foreground">治験コーディネーター：</span> 土日休み・年収安定。マイナビ看護師に相談。</p>
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
            看護師転職は情報戦です。複数サイトを併用して非公開求人にアクセスし、条件を比較したうえで最適な職場を選びましょう。働き方の多様化が進んでいる今こそ、自分らしいキャリアを描くチャンスです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">転職後の家計管理ツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "副業収入の管理にも", price: "月額制" },
            { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "家計簿アプリ連携", price: "月額制" },
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告の定番", price: "年額制", badge: "定番" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">総合転職サービス比較</p>
          </Link>
          <Link href="/guide/medical-checkup-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">人間ドック比較</span>
            <p className="text-xs text-muted mt-1">健康チェックサービス</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
