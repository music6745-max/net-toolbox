import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】春の転職完全ガイド｜ベストタイミングと成功手順を徹底解説",
  description:
    "3月〜5月は求人数が年間最大級。春の転職を成功させるタイミング・準備・書類作成・面接対策・内定後の手順までを完全ガイド。年収アップ事例も紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/spring-job-change-tips` },
};

const faqItems = [
  {
    question: "春に転職するメリットは何ですか？",
    answer:
      "3月〜5月は企業の新年度予算が確定し、欠員補充と新規事業立ち上げの両方で求人が年間最多になります。競合応募者は多いものの、ポジション数もそれ以上に増えるため選択肢が広がるのが最大の利点です。",
  },
  {
    question: "春転職の準備はいつから始めるべきですか？",
    answer:
      "理想は前年の11月〜1月。職務経歴書のブラッシュアップ、希望企業のリサーチ、エージェント登録を先に済ませておくと、3月の求人ピークに即応募できます。繁忙期を避けて冷静に動けるのも利点です。",
  },
  {
    question: "複数のエージェントを併用すべきですか？",
    answer:
      "はい。大手総合型・業界特化型・スカウト型の3種を併用するのが鉄則です。非公開求人の情報は担当者ごとに大きく異なるため、2〜3社同時利用で機会損失を防げます。",
  },
  {
    question: "年収交渉はどう進めればいいですか？",
    answer:
      "内定提示後、口頭ではなく書面での条件提示を必ず確認します。現年収＋希望額の根拠（スキル・資格・実績）を数値で示し、エージェント経由で交渉するのが成功率が高い方法です。",
  },
];

const steps = [
  { month: "11〜1月", title: "準備期", points: ["自己分析と希望条件の整理", "職務経歴書の雛形作成", "転職エージェント複数登録"] },
  { month: "2〜3月", title: "応募ピーク", points: ["新年度求人に一斉応募", "書類添削を受けて完成度UP", "1次面接の予約調整"] },
  { month: "4〜5月", title: "面接・内定", points: ["2次・最終面接", "条件交渉と内定承諾", "現職の退職手続き"] },
  { month: "6月〜", title: "入社", points: ["有休消化と引継ぎ", "新職場オンボーディング", "試用期間の評価獲得"] },
];

export default function SpringJobChangeTipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "春の転職ガイド", url: `${siteConfig.url}/guide/spring-job-change-tips` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】春の転職完全ガイド｜ベストタイミングと成功手順を徹底解説" description="3月〜5月は求人数が年間最大級。春の転職を成功させるタイミング・準備・書類作成・面接対策・内定後の手順までを完全ガイド。" url={`${siteConfig.url}/guide/spring-job-change-tips`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>春の転職ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">ガイド</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】春の転職完全ガイド｜ベストタイミングと成功手順を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          3月〜5月は企業の新年度予算が動き、年間で最も求人が増える季節です。準備さえ整えておけば、年収アップと理想のキャリアの両方を狙える黄金期間です。本ガイドでは、準備から入社までの4ステップを時系列で徹底解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">春転職が有利な3つの理由</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>1. 新年度予算確定で求人数が年間最多</p>
          <p>2. 欠員補充＋新規事業の両方で採用加速</p>
          <p>3. 入社が7月以降なら賞与も満額支給されやすい</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">なぜ春転職がベストタイミングなのか</h2>
        <p className="text-muted leading-relaxed mb-4">
          日本企業の多くは4月に新年度を迎え、前年度中に人員計画と採用予算を確定させます。そのため1月後半から3月にかけて求人公開が急増し、4〜5月に面接・内定が集中します。厚生労働省の有効求人倍率データでも、例年この期間は年間平均より0.1〜0.2ポイント高く推移します。特に経験者採用は即戦力ニーズが強く、面接から内定までの期間も短縮される傾向にあります。ただしライバルも増えるため、1月までに準備を終えて3月の公開と同時に応募する「先行応募」が成功の鍵を握ります。
        </p>
        <p className="text-muted leading-relaxed">
          反対に夏場（7〜8月）は求人数が落ち込み、10月の中途入社枠を狙う第二のピークが秋に訪れますが、求人数は春の6〜7割程度にとどまります。キャリアアップを最大化するなら、間違いなく春の採用市場を活用すべきです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">春転職 4ステップ スケジュール</h2>
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div key={s.month} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.month}</span>
              </div>
              <ul className="space-y-1">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">書類と面接の勝ちパターン</h2>
        <p className="text-muted leading-relaxed mb-4">
          職務経歴書では「何をやったか」ではなく「どんな成果を出したか」を数値で示すのが鉄則です。売上◯％アップ、コスト◯万円削減、チーム◯名マネジメントなど、具体的な実績を冒頭3行に配置すると書類通過率が大幅に上がります。面接では企業研究の深さが差を生みます。中期経営計画・IR資料・直近のプレスリリースに目を通し、面接官に「当社のことをよく調べていますね」と言わせることがゴールです。
        </p>
        <p className="text-muted leading-relaxed">
          退職理由はネガティブ表現を避け「◯◯を実現したいから」という前向き表現に統一。現職批判は一切しないのが社会人としての礼儀です。逆質問では「入社後の具体的な期待値」「1年後の評価基準」を必ず聞くと、熱意も伝わり入社後のギャップも防げます。
        </p>
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
            春の転職は求人数・条件交渉力・入社タイミングの3点で年間最強です。前年11月から準備を始め、複数エージェントを併用し、3月に一斉応募するのが成功パターン。退職後の税金・社会保険の手続きも忘れずに、新しいキャリアを最高のスタートで切りましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">おすすめ転職エージェント</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ネイティブキャンプ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM",
              highlight: "英語力UPで年収アップを狙う",
              price: "月6,480円",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">自分に合うサイトを見つける</p>
          </Link>
          <Link href="/guide/new-graduate-financial-tips" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">新社会人のお金管理</span>
            <p className="text-xs text-muted mt-1">入社前後のマネープラン</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
