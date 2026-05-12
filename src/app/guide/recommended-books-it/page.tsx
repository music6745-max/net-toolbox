import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { MoshimoBookLink } from "@/components/MoshimoBookLink";

export const metadata: Metadata = {
  title: "【2026年最新】IT・プログラミング学習おすすめ書籍10選｜初心者〜中級者向け",
  description:
    "プログラミング未経験からWebエンジニアを目指す人向けに、IT・プログラミング学習の定番書籍を厳選。Python・JavaScript・アルゴリズム・設計・インフラまで網羅したロードマップ付き。",
  alternates: { canonical: `${siteConfig.url}/guide/recommended-books-it` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "プログラミング初心者はまず何の本を読むべきですか？",
    answer:
      "『リーダブルコード』と『プログラミング入門書（Python or JavaScript）』から始めるのが王道です。読みやすいコードの感覚を最初に掴めると、その後の独学効率が大きく変わります。",
  },
  {
    question: "書籍と動画、どちらで学ぶべき？",
    answer:
      "両方の併用がベストです。動画は概念の取っ掛かりに、書籍は体系的な知識と辞書的な参照に向いています。書籍は手元に置いて何度も読み返すのが上達の近道です。",
  },
  {
    question: "電子書籍と紙の本どちらが良いですか？",
    answer:
      "コードを写経しながら学ぶなら紙が便利、検索性と持ち運びやすさなら電子書籍が優位です。技術書は改訂が多いため、電子書籍のほうが最新版へアクセスしやすい面もあります。",
  },
  {
    question: "洋書は読むべきですか？",
    answer:
      "中級者以上には強くおすすめします。日本語訳が出ない良書も多く、公式ドキュメントや論文を読む耐性もつきます。まずは日本語訳のある『Clean Code』や『Pragmatic Programmer』から入りましょう。",
  },
];

const books = [
  { title: "リーダブルコード", author: "Dustin Boswell, Trevor Foucher", description: "可読性の高いコードを書くための実践的なテクニックを凝縮。変数命名・コメント・制御フロー・テストまで、全エンジニア必読の定番。", badge: "定番" },
  { title: "プリンシプル オブ プログラミング", author: "上田 勲", description: "ソフトウェア開発の原則・経験則・法則を101個に整理。設計判断に迷ったときの指針書として長く使えます。" },
  { title: "達人プログラマー 第2版", author: "David Thomas, Andrew Hunt", description: "プラグマティック・プログラマーの名著。職人としてのエンジニアの在り方と、日々の小さな習慣の積み上げ方を学べます。", badge: "ロングセラー" },
  { title: "みんなのPython 第4版", author: "柴田 淳", description: "Python入門の鉄板。基本文法から標準ライブラリ、クラス設計、Web連携までを体系的に学べます。初学者に最適。" },
  { title: "JavaScript本格入門 改訂新版", author: "山田 祥寛", description: "ES2015以降のモダンJavaScriptを網羅。フロントエンド学習の土台として10年以上定評のある定番教科書。" },
  { title: "リファクタリング 第2版", author: "Martin Fowler", description: "コードの臭いとリファクタリング手法を体系化した古典。設計力を伸ばしたい中級者への登竜門的な一冊。", badge: "中級者向け" },
  { title: "Clean Architecture", author: "Robert C. Martin", description: "アーキテクチャ設計の原則SOLIDと依存関係の整理方法を丁寧に解説。大規模開発に入る前に必ず読みたい書籍。" },
  { title: "Webを支える技術", author: "山本 陽平", description: "HTTP・URI・HTML・REST APIなどWebの基礎技術を俯瞰できる一冊。バックエンド・フロントエンド問わず全Web開発者の必読書。" },
  { title: "達人に学ぶDB設計徹底指南書", author: "ミック", description: "正規化・キー設計・アンチパターンまでRDB設計の勘所を網羅。DB設計で迷子にならないためのバイブル。" },
  { title: "イラスト図解式 この一冊で全部わかるネットワークの基本", author: "福永 勇二", description: "TCP/IP・DNS・ルーティングなどインフラの前提知識をビジュアルで一気に押さえられる入門書。" },
];

export default function RecommendedBooksItPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "IT書籍おすすめ", url: `${siteConfig.url}/guide/recommended-books-it` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】IT・プログラミング学習おすすめ書籍10選"
        description="プログラミング未経験からWebエンジニアを目指す人向けに、IT・プログラミング学習の定番書籍を厳選。"
        url={`${siteConfig.url}/guide/recommended-books-it`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>IT書籍おすすめ</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">書籍</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】IT・プログラミング学習おすすめ書籍10選｜初心者〜中級者向け
        </h1>
        <p className="text-muted leading-relaxed">
          プログラミング学習は「情報源の質」で伸びが決まります。YouTubeや無料記事だけでは点の知識に留まりがちですが、体系的にまとめられた良書を1冊読み通すだけで、視界が一気にクリアになります。本記事では未経験から現役エンジニアまで役立つIT書籍を厳選し、学習ロードマップと合わせて紹介します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最初の1冊 → 『リーダブルコード』</span></p>
          <p><span className="font-bold">Python入門 → 『みんなのPython』</span></p>
          <p><span className="font-bold">設計力UP → 『Clean Architecture』</span></p>
          <p><span className="font-bold">Web全体像 → 『Webを支える技術』</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">IT・プログラミング書籍で学ぶメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          インターネット上には無料の学習記事が溢れていますが、断片的で情報の鮮度もばらばらです。対して技術書は、プロのエンジニアや編集者が体系立てて整理した知識の集合体。未経験者が独学する際には「迷子になりにくい」という大きな利点があります。また、1冊を通読することで用語や概念の繋がりが頭の中で地図として構築され、後から触れる情報の吸収速度も格段に上がります。読書は最も費用対効果の高い学習投資のひとつと言えるでしょう。
        </p>
        <p className="text-muted leading-relaxed">
          おすすめの読み方は「最初は完璧に理解しようとせず通読→サンプルコードを写経→手を動かしながら再読」の3ステップ。最初の通読では6割理解できれば十分です。写経を経て再読すれば、最初は読み飛ばしていた行間の意図まで読み取れるようになります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ書籍10冊</h2>
        {books.map((b) => (
          <MoshimoBookLink key={b.title} title={b.title} author={b.author} description={b.description} badge={b.badge} />
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">学習ロードマップ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ol className="space-y-3 text-sm text-muted leading-relaxed list-decimal list-inside">
            <li><span className="font-bold text-foreground">Step1: 基礎文法</span> - 『みんなのPython』または『JavaScript本格入門』で言語の基礎を固める</li>
            <li><span className="font-bold text-foreground">Step2: コード作法</span> - 『リーダブルコード』で保守しやすいコードの書き方を学ぶ</li>
            <li><span className="font-bold text-foreground">Step3: Web基礎</span> - 『Webを支える技術』でHTTP・APIの全体像を把握</li>
            <li><span className="font-bold text-foreground">Step4: DB設計</span> - 『達人に学ぶDB設計徹底指南書』で実務DB設計力を身につける</li>
            <li><span className="font-bold text-foreground">Step5: 設計・アーキテクチャ</span> - 『リファクタリング』『Clean Architecture』で中級者の壁を超える</li>
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
            IT書籍は「一度読んで終わり」ではなく、何度も読み返して知識を熟成させていくものです。最初は『リーダブルコード』『Webを支える技術』など薄めの定番から入り、徐々に『Clean Architecture』『リファクタリング』などの骨太な書籍に挑戦しましょう。本と並行して実際に手を動かし、小さなアプリを作り続ければ、1年後には見違えるほどコーディング力が伸びているはずです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">独学と並行して活用する選択肢</p>
          </Link>
          <Link href="/guide/developer-tools-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">開発者ツールガイド</span>
            <p className="text-xs text-muted mt-1">エンジニアの必須ツール集</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
