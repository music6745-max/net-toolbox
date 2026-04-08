import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { MoshimoBookLink } from "@/components/MoshimoBookLink";

export const metadata: Metadata = {
  title: "【2026年最新】投資・お金の勉強おすすめ書籍10選｜初心者〜中級者向け",
  description:
    "新NISA・iDeCo・インデックス投資・FIRE・家計管理まで、お金の勉強を始める人向けに定番書籍を厳選。読む順番とロードマップ付きで解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/recommended-books-finance` },
};

const faqItems = [
  {
    question: "お金の勉強はどの本から始めるべきですか？",
    answer:
      "『本当の自由を手に入れるお金の大学』や『お金は寝かせて増やしなさい』など、図解多めの入門書から始めるのがおすすめです。いきなり難しい投資本に入ると挫折しやすいので、家計管理→税金・制度→投資の順に読むと効率的です。",
  },
  {
    question: "投資初心者はインデックス投資から始めるべき？",
    answer:
      "はい、歴史的に見てもインデックス投資（特に全世界株・S&P500）は長期で高い勝率を誇る王道戦略です。新NISAの開始により税制メリットも大きく、初心者の第一歩に最適です。",
  },
  {
    question: "仮想通貨や個別株の本は読む必要がある？",
    answer:
      "必須ではありません。まずはインデックス投資と家計管理の基礎を固めてから、余裕資金で個別株や暗号資産を勉強するのが安全です。",
  },
  {
    question: "中古本でも大丈夫ですか？",
    answer:
      "税制度（NISAやiDeCo）や金融商品ラインナップは毎年更新されるため、最新版を選ぶことを強く推奨します。特に2024年以降の新NISA制度に対応した本が安心です。",
  },
];

const books = [
  { title: "本当の自由を手に入れる お金の大学", author: "両@リベ大学長", description: "貯める・稼ぐ・増やす・守る・使うの5つの力を図解で解説。社会人が最初に読むお金の入門書として圧倒的人気。", badge: "入門定番" },
  { title: "お金は寝かせて増やしなさい", author: "水瀬 ケンイチ", description: "インデックス投資の実践書。長期・積立・分散の王道を初心者にもわかりやすく解説。新NISA時代の指針書。" },
  { title: "ジェイソン流お金の増やし方", author: "厚切りジェイソン", description: "資産形成の基本戦略をシンプルに伝える一冊。行動につながるアドバイスが豊富で読みやすい構成。" },
  { title: "敗者のゲーム", author: "チャールズ・エリス", description: "インデックス投資の理論的支柱となった古典。個人投資家がアクティブ運用で市場に勝てない理由を論理的に解説。", badge: "名著" },
  { title: "ウォール街のランダム・ウォーカー", author: "バートン・マルキール", description: "投資本の金字塔。効率的市場仮説からインデックス投資まで、投資理論の全体像を俯瞰できる1冊。", badge: "古典" },
  { title: "サイコロジー・オブ・マネー", author: "モーガン・ハウセル", description: "お金にまつわる心理バイアスを解説。資産形成における最大の敵は相場ではなく自分の感情だと気づかせてくれる良書。" },
  { title: "ほったらかし投資術", author: "山崎 元, 水瀬 ケンイチ", description: "仕事や家事で忙しい人向けの最小労力・最大効率の投資法。新NISA活用術も収録。" },
  { title: "FIRE 最強の早期リタイア術", author: "クリスティー・シェン, ブライス・リャン", description: "経済的自立と早期リタイアを達成するための実用書。支出最適化と投資戦略を具体的に学べます。" },
  { title: "臆病者のための株入門", author: "橘 玲", description: "個別株投資に手を出す前に読んでおきたい、市場と制度の裏側をシビアに暴いた入門書。" },
  { title: "税金で損しない方法 フリーランス編", author: "大河内 薫", description: "副業・フリーランスの税金知識を漫画でやさしく学べる一冊。確定申告を初めてやる人にも優しい構成。" },
];

export default function RecommendedBooksFinancePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "投資・お金の本", url: `${siteConfig.url}/guide/recommended-books-finance` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】投資・お金の勉強おすすめ書籍10選"
        description="新NISA・iDeCo・インデックス投資・FIRE・家計管理まで定番書籍を厳選。"
        url={`${siteConfig.url}/guide/recommended-books-finance`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>投資・お金の本</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">書籍</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】投資・お金の勉強おすすめ書籍10選｜初心者〜中級者向け
        </h1>
        <p className="text-muted leading-relaxed">
          学校では教えてくれないお金の知識は、社会人になってからの行動次第で大きな差になります。新NISA元年を迎えた今、お金の勉強を始めるには絶好のタイミング。本記事では家計管理から投資、税金、FIREまで、お金のテーマを網羅した名著を厳選し、初心者向けに読む順番と一緒にご紹介します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最初の1冊 → 『お金の大学』</span></p>
          <p><span className="font-bold">投資の基礎 → 『お金は寝かせて増やしなさい』</span></p>
          <p><span className="font-bold">本格的に学ぶ → 『ウォール街のランダム・ウォーカー』</span></p>
          <p><span className="font-bold">FIRE志向 → 『FIRE 最強の早期リタイア術』</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">お金の本から学ぶべき理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          SNSには投資や副業の情報が溢れていますが、発信者の利害やポジショントークが混じっていることも少なくありません。書籍は編集者や出版社のチェックが入る分、情報の信頼性が高く、体系的に整理されています。特に資産形成は一度ボタンを掛け違えると取り返しがつかない分野。良書を通じて原則を身につけることが、長期的なリターンを最大化する最短ルートです。
        </p>
        <p className="text-muted leading-relaxed">
          また、お金の本は繰り返し読むことで理解が深まる特徴があります。最初に読んだときはピンと来なかった記述も、実際に投資を始めてから読み返すと「なるほど」と腹落ちする瞬間が訪れます。お気に入りの1冊を手元に置き、年に1〜2回は読み返すのがおすすめです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ書籍10冊</h2>
        {books.map((b) => (
          <MoshimoBookLink key={b.title} title={b.title} author={b.author} description={b.description} badge={b.badge} />
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">読む順番のおすすめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ol className="space-y-3 text-sm text-muted leading-relaxed list-decimal list-inside">
            <li><span className="font-bold text-foreground">Step1: 全体像</span> - 『お金の大学』で家計・税金・投資の地図を頭に入れる</li>
            <li><span className="font-bold text-foreground">Step2: インデックス投資入門</span> - 『お金は寝かせて増やしなさい』『ほったらかし投資術』で王道を学ぶ</li>
            <li><span className="font-bold text-foreground">Step3: 投資理論</span> - 『敗者のゲーム』『ウォール街のランダム・ウォーカー』で長期投資の根拠を理解</li>
            <li><span className="font-bold text-foreground">Step4: 心理学</span> - 『サイコロジー・オブ・マネー』で感情のコントロールを学ぶ</li>
            <li><span className="font-bold text-foreground">Step5: 応用</span> - 『FIRE最強の早期リタイア術』『税金で損しない方法』で実践力を高める</li>
          </ol>
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
            お金の勉強はスタートが早ければ早いほど効果が大きい分野です。まずは『お金の大学』のような図解書で全体像をつかみ、そこから投資・税金・家計管理と興味のある分野を掘り下げていきましょう。読むだけで満足せず、学んだことを家計簿アプリや新NISA口座の開設など小さな行動に繋げるのが一番のリターン源です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">新NISA口座比較</span>
            <p className="text-xs text-muted mt-1">投資を始めるならまずここから</p>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">主要ネット証券の手数料と特徴</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
