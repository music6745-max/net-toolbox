import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】新社会人のお金管理完全ガイド｜口座・家計簿・投資の始め方",
  description:
    "初任給を受け取る新社会人向けに、銀行口座・クレカ・家計簿アプリ・積立NISA・保険の選び方を徹底解説。給料の何割を貯金すべきかも明確に紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/new-graduate-financial-tips` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "給料の何割を貯金すべきですか？",
    answer:
      "一人暮らしなら手取りの10〜15%、実家暮らしなら30〜40%が目安。まずは生活費6ヶ月分の生活防衛資金を貯め、その後NISAでの積立投資に移行するのが王道です。",
  },
  {
    question: "新社会人は投資を始めた方がいいですか？",
    answer:
      "はい、ぜひ始めましょう。少額からでもNISAのつみたて投資枠を使えば月1,000円から始められます。20代は時間という最大の武器があり、複利効果を最大化できる世代です。",
  },
  {
    question: "クレジットカードは何枚持つべきですか？",
    answer:
      "メイン1枚＋サブ1枚の計2枚がベスト。年会費無料の高還元カードと、交通系や特定店舗に強いカードの組み合わせが最強です。枚数を増やしすぎると管理が煩雑になります。",
  },
  {
    question: "社会人1年目の生命保険は必要ですか？",
    answer:
      "独身で扶養家族がいないなら医療保険のみで十分です。会社員は傷病手当金があるため、民間保険への加入は最小限で構いません。保険料は手取りの5%以下に抑えましょう。",
  },
];

const steps = [
  { title: "給与振込口座を決める", desc: "メインバンクはネット銀行がおすすめ。住信SBI・楽天・PayPay銀行など手数料無料で使い勝手抜群。" },
  { title: "生活防衛資金を貯める", desc: "給料3〜6ヶ月分を普通預金にキープ。急な失業や病気に備える最優先の貯蓄。" },
  { title: "家計簿アプリで管理", desc: "マネーフォワードなどで自動仕訳。口座・カードを連携させるだけで家計の見える化が完成。" },
  { title: "つみたてNISAを始める", desc: "月1,000円からでOK。長期・分散・積立の3原則で20年後に大きな差が生まれる。" },
  { title: "スキルアップ投資", desc: "資格取得や副業の学習に年10万円程度。お金よりもキャリアへの投資が最大のリターンを生む。" },
];

export default function NewGraduateFinancialTipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "新社会人のお金管理", url: `${siteConfig.url}/guide/new-graduate-financial-tips` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】新社会人のお金管理完全ガイド｜口座・家計簿・投資の始め方" description="初任給を受け取る新社会人向けに、銀行口座・クレカ・家計簿・NISA・保険の選び方を徹底解説。" url={`${siteConfig.url}/guide/new-graduate-financial-tips`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>新社会人のお金管理</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">ガイド</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】新社会人のお金管理完全ガイド｜口座・家計簿・投資の始め方
        </h1>
        <p className="text-muted leading-relaxed">
          社会人1年目のお金管理は、その後の数十年のマネーリテラシーを左右します。初任給を受け取る前に「使う・貯める・増やす」の3つの仕組みを整えれば、周囲の同世代と大きく差をつけられます。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">新社会人のマネー3原則</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>1. 先取り貯蓄で強制積立</p>
          <p>2. 家計簿アプリで見える化</p>
          <p>3. NISAで長期積立投資</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">社会人1年目の家計の基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          初任給の手取りは額面の約80%前後。ここから家賃・光熱費・通信費・食費・保険・交際費を差し引いた残りが自由に使えるお金です。まず押さえたいのは「先取り貯蓄」。給料日に自動的に別口座へ振り替える設定をすれば、残りで生活する習慣が身につきます。家計簿アプリを使えば自動的にカテゴリ分類されるため、手書きの面倒さはありません。最初の3ヶ月で自分の支出パターンを把握し、以降は無理のない予算を立てるのが成功の秘訣です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">初任給から始める5ステップ</h2>
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">避けるべき落とし穴</h2>
        <p className="text-muted leading-relaxed mb-4">
          新社会人がやりがちな失敗は「リボ払い・不要な保険・高金利ローン・衝動買い・付き合いの飲み会」の5点です。特にリボ払いは年利15%という高利率で、残高が雪だるま式に膨らみます。クレカは必ず一括払いに設定し、明細を月1回チェックする習慣をつけましょう。
        </p>
        <p className="text-muted leading-relaxed">
          また会社でよく勧誘される貯蓄型保険は、手数料の塊であることが多いため要注意。掛け捨ての医療保険＋つみたてNISAに分けるのが現代の正解です。
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
            社会人1年目で身につけたお金の習慣は一生モノの財産です。先取り貯蓄＋家計簿アプリ＋つみたてNISAの3点セットで、20年後の資産形成に圧倒的な差が生まれます。金融リテラシーは最強の自己投資です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理におすすめのツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "口座・カード連携で自動家計簿",
              price: "月額制",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "副業の確定申告にも対応",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">積立投資を始めるなら</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">初めての1枚を選ぶ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
