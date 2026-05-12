import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { MoshimoBookLink } from "@/components/MoshimoBookLink";

export const metadata: Metadata = {
  title: "【2026年最新】自己啓発おすすめ書籍10選｜人生と習慣を変える名著",
  description:
    "習慣・マインドセット・モチベーション・目標達成の定番自己啓発書を厳選。読む順番と実践のコツも一緒に紹介します。",
  alternates: { canonical: `${siteConfig.url}/guide/recommended-books-self-development` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "自己啓発書は効果があるのですか？",
    answer:
      "読むだけでは効果はほぼゼロですが、書かれている習慣や行動を1つでも実践すれば人生は確実に変わります。重要なのは「量ではなく実践率」。1冊から1行動を目指しましょう。",
  },
  {
    question: "自己啓発書で騙されないコツは？",
    answer:
      "根拠の薄い精神論や「100%成功する」のような断定表現に注意しましょう。科学的研究・統計・実例が豊富な本を選ぶと、再現性の高い情報に出会えます。",
  },
  {
    question: "続けて読むべき？たまに読むべき？",
    answer:
      "迷いが生じたとき、人生の節目のタイミングで読み返すのがおすすめ。同じ本を1年後に読み返すと、前回は読み飛ばした一節が響く経験ができます。",
  },
  {
    question: "日本語訳と原著どちらがいい？",
    answer:
      "まずは日本語訳で読み、特に気に入った本は原著に挑戦するのもおすすめ。翻訳で失われるニュアンスがあり、理解が深まります。",
  },
];

const books = [
  { title: "7つの習慣", author: "スティーブン・R・コヴィー", description: "自己啓発書の王様。主体性・目的意識・優先順位など人生を貫く7つの原則を、豊富な事例とともに学べます。", badge: "金字塔" },
  { title: "完訳 成功哲学", author: "ナポレオン・ヒル", description: "1937年刊行の古典。成功者500人への調査から導き出された「思考は現実化する」の原典です。", badge: "古典" },
  { title: "アトミック・ハビッツ", author: "ジェームズ・クリアー", description: "習慣形成の科学を体系化したベストセラー。1%の小さな改善を積み上げる具体的なフレームワークを学べます。" },
  { title: "やり抜く力 GRIT", author: "アンジェラ・ダックワース", description: "IQや才能より重要な「やり抜く力」の正体を科学的に解き明かした名著。継続の大切さを再認識させてくれます。" },
  { title: "嫌われる勇気", author: "岸見 一郎, 古賀 史健", description: "アドラー心理学を対話形式で解説。他者との関係に悩むすべての人に響く1冊として国民的ベストセラーに。", badge: "日本発" },
  { title: "鋼の自己肯定感", author: "宮崎 直子", description: "自己肯定感を科学的に高める実践書。シリコンバレー流のマインド術を凝縮した現代の自己啓発書。" },
  { title: "夜と霧", author: "ヴィクトール・E・フランクル", description: "強制収容所での体験から「人生の意味」を問う名著。逆境における心の持ち方に深い示唆を与えます。" },
  { title: "人生がときめく片づけの魔法", author: "近藤 麻理恵", description: "物との向き合い方から人生観まで変えると話題の世界的ベストセラー。整理整頓は自己啓発の入り口です。" },
  { title: "マインドセット「やればできる！」の研究", author: "キャロル・S・ドゥエック", description: "固定思考と成長思考の違いを科学的に証明した名著。子育て・教育・自己成長の必読書です。" },
  { title: "スタンフォード式 最高の睡眠", author: "西野 精治", description: "パフォーマンスの土台である睡眠を最大化する方法を科学的に解説。自己投資の第一歩は良質な眠りから。" },
];

export default function RecommendedBooksSelfDevelopmentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自己啓発書", url: `${siteConfig.url}/guide/recommended-books-self-development` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】自己啓発おすすめ書籍10選"
        description="習慣・マインドセット・モチベーション・目標達成の定番自己啓発書を厳選。"
        url={`${siteConfig.url}/guide/recommended-books-self-development`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>自己啓発書</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">書籍</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】自己啓発おすすめ書籍10選｜人生と習慣を変える名著
        </h1>
        <p className="text-muted leading-relaxed">
          自己啓発書は「読むだけで終わる」と揶揄されがちですが、本当に良い本は行動の質を変え、長期的な人生観を形作ります。本記事では「一度読めば価値観が更新される」ような厳選10冊を、初心者向けに読む順番とあわせて解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">テーマ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">習慣を作りたい → 『アトミック・ハビッツ』</span></p>
          <p><span className="font-bold">人間関係に悩む → 『嫌われる勇気』</span></p>
          <p><span className="font-bold">続かない自分を変えたい → 『やり抜く力 GRIT』</span></p>
          <p><span className="font-bold">人生観の軸を作りたい → 『7つの習慣』『夜と霧』</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">自己啓発書は「行動」とセットで読む</h2>
        <p className="text-muted leading-relaxed mb-4">
          自己啓発書の最大の罠は「読んだだけで変わった気になる」ことです。本を閉じた瞬間から現実は何も変わっていません。変化を生み出すには、読んだ内容のうち1つだけでも「今日の自分のルーチン」に組み込むのが最も効果的。たとえば『アトミック・ハビッツ』を読んだら「2分ルール（新しい習慣は2分以内で終わる形から始める）」を実際に試してみる、といった具合です。
        </p>
        <p className="text-muted leading-relaxed">
          また、自己啓発書は同じテーマの本を3〜5冊並行して読むと、著者に共通する原則が浮かび上がり、普遍的な法則として自分の中に定着します。特に習慣形成・目標達成・人間関係の3領域は重複して読むことで理解が深まるテーマです。
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
            自己啓発書は「情報を得る本」ではなく「行動を変える本」と捉えるのがコツです。1冊読んで1行動を実践する、それを1年続ければ12個の新しい習慣があなたのものになります。まずは本記事の中から1冊、気になる書籍を手に取ることから始めてみてください。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/recommended-books-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネス書おすすめ</span>
            <p className="text-xs text-muted mt-1">働くすべての人に役立つ定番</p>
          </Link>
          <Link href="/guide/recommended-books-health" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">健康・ダイエット書籍</span>
            <p className="text-xs text-muted mt-1">体を整える本で自己投資を加速</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
