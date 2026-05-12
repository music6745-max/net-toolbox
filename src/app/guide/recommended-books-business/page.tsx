import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { MoshimoBookLink } from "@/components/MoshimoBookLink";

export const metadata: Metadata = {
  title: "【2026年最新】ビジネス書おすすめ10選｜ビジネスパーソン必読の定番",
  description:
    "若手〜中堅ビジネスパーソン向けに、マネジメント・戦略・思考法・マーケティングの定番ビジネス書を厳選。読む順番とポイント解説付き。",
  alternates: { canonical: `${siteConfig.url}/guide/recommended-books-business` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "ビジネス書は何冊くらい読めばいい？",
    answer:
      "量より質です。月に1〜2冊でも、繰り返し読んで実務に活かせれば十分な成果に繋がります。100冊読むより1冊を3回読む方が行動変容に結びつきやすいという研究結果もあります。",
  },
  {
    question: "新刊と古典、どちらを読むべき？",
    answer:
      "古典（ロングセラー）を優先するのがおすすめです。『7つの習慣』『人を動かす』などの古典は時代を超えた原則を扱っており、流行りの新刊は半年後には廃れるケースも多いためです。",
  },
  {
    question: "忙しくて読書時間が取れません",
    answer:
      "通勤時間の耳読書（Audible等）や要約サービス（flier等）を活用しましょう。通勤30分×週5日で月10時間の読書時間が生まれます。",
  },
  {
    question: "読んだ内容がすぐに忘れてしまいます",
    answer:
      "アウトプット前提で読むのが効果的。読書ノートを作り、3つだけ「明日から実践すること」を書き出してみましょう。読書の定着率が劇的に上がります。",
  },
];

const books = [
  { title: "7つの習慣", author: "スティーブン・R・コヴィー", description: "世界3,000万部超の自己啓発・ビジネスの金字塔。人格形成と効果的なリーダーシップの原則を体系化した必読書。", badge: "古典" },
  { title: "人を動かす", author: "デール・カーネギー", description: "1936年初版の人間関係構築の名著。対人コミュニケーションの原則は現代でも色褪せない普遍性を持っています。", badge: "古典" },
  { title: "イシューからはじめよ", author: "安宅 和人", description: "問題解決のスタート地点「イシューの設定」の重要性を解説。コンサル・戦略思考を学ぶなら必読の1冊。" },
  { title: "エッセンシャル思考", author: "グレッグ・マキューン", description: "「より少なく、しかしより良く」を実現する思考法。選択と集中の大切さを教えてくれる現代の名著。" },
  { title: "ファクトフルネス", author: "ハンス・ロスリング", description: "データとファクトを基に世界を正しく見るための10の習慣。意思決定の質を高めたいビジネスパーソン必読。" },
  { title: "THE TEAM 5つの法則", author: "麻野 耕司", description: "チームを強くするための5つの法則を科学的に解説。マネージャー・リーダー層に刺さる現代のチーム論。" },
  { title: "ハイ・アウトプット マネジメント", author: "アンドリュー・S・グローブ", description: "Intel元CEOによる名著。マネジメントの原則とレバレッジの最大化方法を体系的に学べます。", badge: "マネジメント定番" },
  { title: "GIVE & TAKE", author: "アダム・グラント", description: "ギバー・テイカー・マッチャーの3分類から人間関係の本質を読み解く名著。長期的な成功の法則を示しています。" },
  { title: "USJのジェットコースターはなぜ後ろ向きに走ったのか？", author: "森岡 毅", description: "V字回復の立役者による、マーケティング思考のリアルな実践記。数字と戦略の力を実感できます。" },
  { title: "1兆ドルコーチ", author: "エリック・シュミット 他", description: "Google・Apple・Intuitなどシリコンバレーの巨人たちを育てた伝説のコーチの哲学を凝縮した1冊。" },
];

export default function RecommendedBooksBusinessPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ビジネス書", url: `${siteConfig.url}/guide/recommended-books-business` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】ビジネス書おすすめ10選"
        description="若手〜中堅ビジネスパーソン向けに定番ビジネス書を厳選。"
        url={`${siteConfig.url}/guide/recommended-books-business`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ビジネス書</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">書籍</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ビジネス書おすすめ10選｜ビジネスパーソン必読の定番
        </h1>
        <p className="text-muted leading-relaxed">
          毎年数千冊のビジネス書が刊行されますが、本当に役立つ名著は実はほんの一握り。本記事では「10年後も読まれるであろう」普遍的な原則を扱った定番書を厳選しました。新人・中堅・マネージャー、それぞれのキャリア段階で手元に置きたい10冊を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">キャリア段階別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">新人 → 『7つの習慣』『人を動かす』</span></p>
          <p><span className="font-bold">中堅 → 『イシューからはじめよ』『エッセンシャル思考』</span></p>
          <p><span className="font-bold">管理職 → 『ハイ・アウトプット マネジメント』『THE TEAM』</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ビジネス書を読む意義</h2>
        <p className="text-muted leading-relaxed mb-4">
          ビジネス書は「先人の経験・知恵の圧縮ファイル」です。著者が数十年かけて培ったノウハウを、数時間の読書で追体験できるのは圧倒的なコスパ。特に若手のうちはロールモデルが社内に少ないケースも多く、書籍から学ぶメンターは貴重な存在になります。また、古典と呼ばれる書籍には時代を越えて通用する原則が凝縮されており、一度身につければ一生使えるスキル資産となります。
        </p>
        <p className="text-muted leading-relaxed">
          読書の効果を最大化するコツは「アウトプット前提で読む」こと。読んだあとにチームメンバーに要約を話す、ブログにまとめる、すぐに実務で試すなど、能動的な行動と結びつけると記憶への定着率が飛躍的に上がります。
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
            ビジネス書選びで重要なのは「自分の現在地に必要な1冊」を見極めること。流行や書店のランキングよりも、自分が今抱えている課題に答えてくれる書籍を選びましょう。まずは本記事の中から気になる1冊を手に取り、3回繰り返し読んで実務に反映してみてください。月1冊×3年間続ければ、必ず周囲との差が開いてくるはずです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/ebook-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電子書籍サービス比較</span>
            <p className="text-xs text-muted mt-1">Kindle・楽天Kobo・BOOK☆WALKERを比較</p>
          </Link>
          <Link href="/guide/recommended-books-self-development" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自己啓発書おすすめ</span>
            <p className="text-xs text-muted mt-1">人生を変える自己啓発の定番</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
