import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { MoshimoBookLink } from "@/components/MoshimoBookLink";

export const metadata: Metadata = {
  title: "【2026年最新】健康・ダイエットおすすめ書籍10選｜科学的エビデンス重視",
  description:
    "ダイエット・食事・運動・睡眠・メンタルまで、科学的根拠に基づいた健康書籍を厳選。流行に流されず一生使える健康知識を手に入れましょう。",
  alternates: { canonical: `${siteConfig.url}/guide/recommended-books-health` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "健康本を選ぶときに気をつけることは？",
    answer:
      "「科学的根拠（エビデンス）」を明記している本を選びましょう。『〇〇するだけで痩せる』のような断定表現や、根拠の薄い経験則ベースの本は避けるのが無難です。",
  },
  {
    question: "どんなダイエット本が効果的ですか？",
    answer:
      "特定の食材やメソッドに偏ったものより、栄養学・行動経済学の原則に基づいた総合的な本がおすすめ。『FIT FOR LIFE』や『科学的に正しい食事』のような書籍は長期的な指針になります。",
  },
  {
    question: "医師が書いた本なら安心？",
    answer:
      "医師の肩書きでも根拠の薄い本は多数あります。参考文献や論文の引用が多い、査読つき論文をベースにしているかどうかを確認しましょう。",
  },
  {
    question: "メンタルヘルスの本も必要ですか？",
    answer:
      "現代人にとって、メンタルの健康は身体以上に重要です。ストレスや不安への対処法を学ぶことで、食事や運動の継続力も大きく変わります。",
  },
];

const books = [
  { title: "LIFESPAN 老いなき世界", author: "デビッド・A・シンクレア", description: "ハーバード大学の老化研究者による、老化を病気として捉えるパラダイムシフトを提示した話題作。", badge: "話題作" },
  { title: "Eat & Run", author: "スコット・ジュレク", description: "ウルトラマラソン界のレジェンドが綴る植物性食品中心のライフスタイル。食事と運動の関係を再考させられます。" },
  { title: "最高の体調", author: "鈴木 祐", description: "進化医学・栄養学・行動経済学をベースに、現代人の不調の原因と対処法を網羅的に解説する実用書。" },
  { title: "世界一シンプルで科学的に証明された究極の食事", author: "津川 友介", description: "カリフォルニア大学の医師による、膨大な論文に基づく「体に良い食事」の結論を提示した名著。", badge: "エビデンス重視" },
  { title: "FIT FOR LIFE", author: "ハーヴィー・ダイアモンド", description: "ナチュラル・ハイジーン（自然健康法）の基本を学べるロングセラー。食事と消化の関係を見直すきっかけに。", badge: "古典" },
  { title: "スタンフォード式 最高の睡眠", author: "西野 精治", description: "スタンフォード大学睡眠研究の第一人者が解説する、最高のパフォーマンスを生む睡眠術。" },
  { title: "運動脳", author: "アンデシュ・ハンセン", description: "運動が脳機能と精神状態に与える影響を科学的に解明。うつ・不安・集中力低下に悩むすべての人へ。" },
  { title: "スマホ脳", author: "アンデシュ・ハンセン", description: "スマホ依存が脳と心に与える影響を科学的に解説したベストセラー。健康な生活にデジタルデトックスは必須。" },
  { title: "医師が教える食事術 最強の教科書", author: "牧田 善二", description: "糖尿病専門医による、現代人が抱える食事の問題点と改善策をわかりやすく解説した実用書。" },
  { title: "筋トレが最強のソリューションである", author: "Testosterone", description: "筋トレの素晴らしさを軽快な語り口で伝えるベストセラー。体と心を整える基礎的な運動習慣を学べます。" },
];

export default function RecommendedBooksHealthPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "健康・ダイエット書籍", url: `${siteConfig.url}/guide/recommended-books-health` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】健康・ダイエットおすすめ書籍10選"
        description="ダイエット・食事・運動・睡眠・メンタルまで科学的根拠に基づいた健康書籍を厳選。"
        url={`${siteConfig.url}/guide/recommended-books-health`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>健康・ダイエット書籍</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">書籍</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】健康・ダイエットおすすめ書籍10選｜科学的エビデンス重視
        </h1>
        <p className="text-muted leading-relaxed">
          健康情報はネットに溢れていますが、流行やマーケティングに踊らされると逆効果になることも。本記事では科学的根拠のしっかりした健康・ダイエット書籍を厳選し、一生使える普遍的な知識を身につけるためのおすすめ10冊を紹介します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">食事改善 → 『世界一シンプルで科学的に証明された究極の食事』</span></p>
          <p><span className="font-bold">総合的な健康 → 『最高の体調』</span></p>
          <p><span className="font-bold">睡眠改善 → 『スタンフォード式 最高の睡眠』</span></p>
          <p><span className="font-bold">運動習慣 → 『運動脳』『筋トレが最強のソリューション』</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">健康書籍は「エビデンス」で選ぶ</h2>
        <p className="text-muted leading-relaxed mb-4">
          健康・ダイエット分野は流行のサイクルが非常に速く、昨日の常識が今日の非常識になることもしばしばです。だからこそ、流行に左右されない「科学的エビデンス」に基づいた書籍を選ぶことが重要。参考文献・論文の引用が豊富で、著者の専門性が明確な書籍なら、情報の寿命も長く、長期的な健康の指針になります。
        </p>
        <p className="text-muted leading-relaxed">
          また、健康は「食事・運動・睡眠・メンタル」の4本柱で成り立っています。どれか1つに偏るより、それぞれの分野からバランスよく本を選ぶと、相乗効果で生活の質が大きく向上します。特に睡眠とメンタルは軽視されがちですが、長期的な健康にはもっとも効く要素です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ書籍10冊</h2>
        {books.map((b) => (
          <MoshimoBookLink key={b.title} title={b.title} author={b.author} description={b.description} badge={b.badge} />
        ))}
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
            健康は「知る」だけでは変わらず、「続ける」ことで初めて成果が出る分野です。本記事で紹介した書籍は、どれも流行に流されない普遍的な原則を扱っています。まずは食事・運動・睡眠のうち、自分が一番課題と感じる分野から1冊選び、小さな行動に繋げてみてください。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">運動習慣化のお供に</p>
          </Link>
          <Link href="/guide/supplement-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">サプリメント比較</span>
            <p className="text-xs text-muted mt-1">不足栄養素を効率補給</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
