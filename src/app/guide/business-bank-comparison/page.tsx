import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ビジネス銀行口座比較おすすめ5選｜振込手数料・APIゴ連携・開設スピードを徹底解説",
  description:
    "法人・個人事業主向けのビジネス銀行口座を振込手数料・会計ソフトAPI連携・開設スピード・デビットカード発行可否で徹底比較。オンライン完結で開設できるネット銀行を中心に紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/business-bank-comparison` },
};

const faqItems = [
  {
    question: "個人事業主でも法人口座を開設できますか？",
    answer:
      "ビジネス専用口座として屋号付きの個人事業主口座を開設できます。ネット銀行ならオンライン完結・最短翌営業日で開設でき、屋号名義で入出金を管理できるため経費分離に有効です。",
  },
  {
    question: "メガバンクとネット銀行どちらがいい？",
    answer:
      "振込手数料・開設スピード・API連携の観点ではネット銀行が圧倒的に有利です。ただし融資の相談やATM網の広さを重視するならメガバンクとの併用がおすすめです。",
  },
  {
    question: "法人口座の開設にどれくらいかかりますか？",
    answer:
      "ネット銀行なら最短翌営業日〜1週間、メガバンクは審査を含め2〜4週間かかります。事業内容・登記簿謄本・本人確認書類を用意しておけばスムーズです。",
  },
  {
    question: "振込手数料を抑える方法は？",
    answer:
      "同一銀行間の振込を無料化する銀行を選ぶ、または月間振込件数に応じた手数料優遇プランに加入するのが基本。月30件以上振込がある事業者なら月額制プランがお得です。",
  },
];

const banks = [
  { name: "GMOあおぞらネット銀行", type: "ネット銀行", fee: "同行0円・他行145円〜", points: ["API連携が充実しfreee・マネフォ即連携", "最短翌営業日開設", "デビットカード発行無料"], bestFor: "会計ソフト連携を重視する個人事業主・スタートアップ。" },
  { name: "住信SBIネット銀行 法人口座", type: "ネット銀行", fee: "同行0円・他行145円〜", points: ["月10件まで他行宛振込無料", "代表者がSBI証券を保有ならメリット大", "住宅ローン・事業ローンも相談可"], bestFor: "SBIグループを総合活用したい経営者。" },
  { name: "楽天銀行 法人口座", type: "ネット銀行", fee: "同行52円・他行150円〜", points: ["楽天市場・楽天ペイ連携", "楽天ポイント付与", "月額固定プランで振込手数料を圧縮"], bestFor: "楽天経済圏でEC事業を行う法人。" },
  { name: "PayPay銀行 法人口座", type: "ネット銀行", fee: "同行0円・他行145円", points: ["振込手数料が業界最安クラス", "Yahoo!ショッピング・PayPay連携", "デビット発行・海外送金対応"], bestFor: "振込手数料を限界まで抑えたい事業者。" },
  { name: "三井住友銀行 ビジネス口座", type: "メガバンク", fee: "同行165円・他行550円", points: ["信用力のあるメガバンク口座", "融資相談・手形取引対応", "支店ATM網が全国に充実"], bestFor: "取引先との信頼性・融資を重視する法人。" },
];

export default function BusinessBankComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ビジネス銀行口座比較", url: `${siteConfig.url}/guide/business-bank-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】ビジネス銀行口座比較おすすめ5選" description="法人・個人事業主向けのビジネス銀行口座を振込手数料・会計ソフトAPI連携・開設スピード・デビットカード発行可否で徹底比較。" url={`${siteConfig.url}/guide/business-bank-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ビジネス銀行口座比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ビジネス銀行口座比較おすすめ5選｜振込手数料・API連携・開設スピードを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          法人・個人事業主の事業運営では、ビジネス専用の銀行口座が必須です。事業用と個人用を分けることで経理が簡素化され、確定申告時のトラブルも大幅に減ります。2026年現在の主要5行を振込手数料・API連携・開設スピードで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">API連携重視 → GMOあおぞらネット銀行</span></p>
          <p><span className="font-bold">手数料最安 → PayPay銀行 法人口座</span></p>
          <p><span className="font-bold">EC事業者 → 楽天銀行 法人口座</span></p>
          <p><span className="font-bold">融資・信用力 → 三井住友銀行</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ビジネス銀行口座選びの5つの基準</h2>
        <p className="text-muted leading-relaxed mb-4">
          ビジネス口座選びで重視したいのは「振込手数料・API連携・開設スピード・デビット/キャッシュカード発行・口座維持手数料」の5点です。振込手数料は月間の振込件数が多い事業者ほど累積で大きな差になります。月50件の振込がある場合、1件あたり100円の差は年間6万円のコスト差になります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          会計ソフトとのAPI連携は経理業務の自動化に直結します。freee・マネーフォワード・弥生と連携できる銀行を選べば、入出金明細が自動取得され、仕訳の大半が自動化されます。ネット銀行は口座維持手数料が無料のケースが多く、取引が少ない月でもコスト負担がないのも強みです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめビジネス銀行口座5行の詳細</h2>
        <div className="space-y-6">
          {banks.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">振込手数料：{b.fee}</p>
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
        <p className="text-xs text-muted mt-3">※ 手数料・条件は2026年4月時点の参考値です。最新の条件は各銀行の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ネット銀行を併用する戦略</h2>
        <p className="text-muted leading-relaxed mb-4">
          実務では「メガバンク1行＋ネット銀行2行」の併用が王道です。メガバンクは取引先への信頼性・融資相談を担い、ネット銀行は振込手数料の削減・会計ソフト連携を担います。さらにPayPay銀行と楽天銀行のように、経済圏が異なるネット銀行を組み合わせることで、仕入れ先や取引先に応じて最安の振込ルートを選べます。
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
            ビジネス銀行口座は「手数料・API連携・信用力」のバランスで選ぶのが正解。メインはネット銀行で手数料を抑え、融資が必要になったらメガバンクと併用する戦略が最も合理的です。会計ソフトと連携すれば経理負担が劇的に減るため、開設後は必ずAPI連携を設定しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">会計ソフトを併用しよう</h2>
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
        <Link href="/tools/withholding-tax-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">源泉徴収税額計算ツールを使う</div>
          <p className="text-xs text-muted">報酬支払時の源泉徴収額を自動計算。外注費の振込時に便利 →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/company-credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法人クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">口座と合わせて整備</p>
          </Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">API連携で自動仕訳</p>
          </Link>
          <Link href="/guide/business-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネスローン比較</span>
            <p className="text-xs text-muted mt-1">運転資金の選択肢</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">請求書・インボイス比較</span>
            <p className="text-xs text-muted mt-1">経理DXに必須</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
