import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】法人クレジットカード比較おすすめ5選｜年会費・限度額・ポイント還元を徹底解説",
  description:
    "法人・個人事業主向けクレジットカードを年会費・利用限度額・ポイント還元・追加カード発行枚数・ビジネス特典で徹底比較。経費精算の効率化と節税に役立つ1枚が見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/company-credit-card-comparison` },
};

const faqItems = [
  {
    question: "法人クレジットカードと個人カードの違いは？",
    answer:
      "法人カードは会社名義で発行され、経費と個人支出を明確に分離できます。利用限度額が個人カードより高く、追加カードを複数発行でき、会計ソフト連携や空港ラウンジなどビジネス向け特典も充実しています。経費精算の手間削減と節税管理の面でも有利です。",
  },
  {
    question: "個人事業主でも法人カードは作れますか？",
    answer:
      "はい。多くの法人カードは個人事業主も申し込み可能で、登記簿謄本不要・本人確認書類のみで発行できるケースも増えています。開業届の控えがあれば審査がスムーズになります。",
  },
  {
    question: "年会費無料の法人カードはありますか？",
    answer:
      "三井住友カード ビジネスオーナーズや楽天ビジネスカードなど、初年度無料・条件付き永年無料の法人カードがあります。コスト最優先ならまず無料カードから始めるのがおすすめです。",
  },
  {
    question: "審査で重視されるポイントは？",
    answer:
      "設立年数・売上・代表者の個人信用情報が見られます。設立1年未満でも、代表者の信用情報が健全であれば審査通過の可能性は十分あります。複数枚同時申込は避け、1枚ずつ段階的に申し込みましょう",
  },
];

const cards = [
  { name: "三井住友カード ビジネスオーナーズ", type: "VISA/Mastercard", fee: "永年無料", points: ["年会費永年無料で追加カード18枚まで無料", "対象店舗で最大1.5%還元", "個人事業主・法人代表者どちらも申込可"], bestFor: "コストを抑えて経費管理を始めたい個人事業主。" },
  { name: "JCB CARD Biz", type: "JCB", fee: "初年度無料", points: ["最短3営業日発行のスピード発行", "会計ソフト連携無料（freee・弥生）", "空港ラウンジサービス無料利用"], bestFor: "会計ソフトと連携して経費精算を自動化したい方。" },
  { name: "アメリカン・エキスプレス・ビジネス・ゴールド", type: "AMEX", fee: "36,300円", points: ["利用限度額に一律の上限なし", "プライオリティ・パス年2回無料", "経営セミナーやビジネスラウンジ利用可"], bestFor: "出張が多い役員・経営者。" },
  { name: "楽天ビジネスカード", type: "VISA", fee: "2,200円＋個人プレミアム", points: ["楽天市場の利用でポイント還元率5倍", "楽天ポイントが経費として貯まる", "楽天プレミアムカードとセット契約"], bestFor: "楽天経済圏をビジネスでも活用したい方。" },
  { name: "NTTファイナンス Bizカード ゴールド", type: "VISA", fee: "11,000円", points: ["利用額の1.0%キャッシュバック", "追加カード発行無料", "最高1億円の海外旅行保険"], bestFor: "シンプルな高還元率を求める中小企業。" },
];

export default function CompanyCreditCardComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "法人クレジットカード比較", url: `${siteConfig.url}/guide/company-credit-card-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】法人クレジットカード比較おすすめ5選｜年会費・限度額・ポイント還元を徹底解説" description="法人・個人事業主向けクレジットカードを年会費・利用限度額・ポイント還元・追加カード発行枚数・ビジネス特典で徹底比較。" url={`${siteConfig.url}/guide/company-credit-card-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>法人クレジットカード比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】法人クレジットカード比較おすすめ5選｜年会費・限度額・ポイント還元を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          法人クレジットカードは経費管理の効率化・キャッシュフロー改善・節税管理の3点で、事業運営に欠かせないツールです。2026年現在の主要5枚を年会費・限度額・ポイント還元・ビジネス特典で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">コスト最優先 → 三井住友カード ビジネスオーナーズ</span></p>
          <p><span className="font-bold">会計ソフト連携 → JCB CARD Biz</span></p>
          <p><span className="font-bold">出張・役員カード → アメックス・ビジネス・ゴールド</span></p>
          <p><span className="font-bold">楽天経済圏活用 → 楽天ビジネスカード</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">法人クレジットカード選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          法人クレジットカードを選ぶ際は「年会費・利用限度額・追加カード枚数・ポイント還元率・会計ソフト連携・付帯保険」の6点を総合的に評価します。特に追加カード枚数は従業員数が増えた際の拡張性を左右するため、今後の成長も見据えて選びましょう。年会費無料カードは初心者向けですが、利用限度額が30〜80万円と低めに設定されているケースが多く、広告宣伝費や仕入れで月間利用額が高くなる場合は、ゴールド以上の上位カードを検討する価値があります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          また、経費精算の効率化には会計ソフトとのAPI連携が必須です。freee会計・マネーフォワード クラウド会計・弥生会計オンラインと連携することで、カード明細を自動仕訳でき、月末の経理作業を1/3以下に削減できます。法人カードとクラウド会計ソフトはセットで導入するのが鉄則です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ法人クレジットカード5枚の詳細</h2>
        <div className="space-y-6">
          {cards.map((c, idx) => (
            <div key={c.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{c.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">年会費：{c.fee}</p>
              <ul className="space-y-1 mb-4">
                {c.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{c.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 年会費・特典は2026年4月時点の参考値です。最新の条件は各カード会社の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">法人カード導入の3つのメリット</h2>
        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">1. 経費精算の自動化</h3>
            <p className="text-sm text-muted leading-relaxed">会計ソフトとAPI連携すれば、カード明細が自動で仕訳され、領収書管理もデジタル化できます。経理作業時間を月10時間以上削減できるケースも少なくありません。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">2. キャッシュフロー改善</h3>
            <p className="text-sm text-muted leading-relaxed">支払いを最大60日先延ばしにでき、短期の運転資金に余裕が生まれます。月商が大きい事業者ほど効果は大きく、利息ゼロで実質的な短期融資として機能します。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">3. ポイント還元による実質コストダウン</h3>
            <p className="text-sm text-muted leading-relaxed">月50万円利用で還元率1.0%なら年間6万円の還元。広告宣伝費・サーバー代・出張費など全ての経費でポイントが貯まり、事業コストが実質的に下がります。</p>
          </div>
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
            法人クレジットカードは「年会費・限度額・ポイント還元・会計ソフト連携」を軸に選ぶのが正解。個人事業主なら年会費無料の三井住友カード ビジネスオーナーズから、成長中の中小企業ならJCB CARD Biz、役員・経営者ならアメックス・ビジネス・ゴールドが王道です。クラウド会計ソフトと併用すれば経理業務の大幅効率化が実現します。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <Link href="/tools/invoice-tax-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">インボイス税額計算ツールを使う</div>
          <p className="text-xs text-muted">適格・非適格取引の税額差を即座に計算。仕入れ経費の意思決定に役立ちます →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">法人カード連携に必須</p>
          </Link>
          <Link href="/guide/business-bank-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネス銀行口座比較</span>
            <p className="text-xs text-muted mt-1">法人口座と合わせて開設</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">請求書・インボイス比較</span>
            <p className="text-xs text-muted mt-1">経理DXをまとめて整備</p>
          </Link>
          <Link href="/guide/business-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネスローン比較</span>
            <p className="text-xs text-muted mt-1">運転資金調達の選択肢</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
