import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】個人事業主のクレジットカード比較｜プラチナ・ビジネスカード徹底解説",
  description:
    "個人事業主・フリーランス向けのクレジットカードをポイント還元率・年会費・特典・経費管理機能で徹底比較。会計ソフト連携で経理を効率化するベストカードを紹介します。",
  alternates: { canonical: `${siteConfig.url}/guide/business-card-platinum` },
};

const faqItems = [
  {
    question: "個人事業主用カードは個人カードと何が違いますか？",
    answer:
      "ビジネスカードは利用限度額が高く、追加カードや経費管理ツールが付帯します。会計ソフトとのAPI連携で自動仕訳できる商品も多く、経理効率を大きく改善できます。",
  },
  {
    question: "プラチナカードのメリットは？",
    answer:
      "コンシェルジュサービス・空港ラウンジ・出張保険・接待向け優待など特典が手厚く、年会費以上のリターンが見込めます。法人税の経費にもしやすい点も魅力です。",
  },
  {
    question: "開業直後でも申し込めますか？",
    answer:
      "はい。三井住友カード ビジネスオーナーズなど登記簿不要・本人確認のみで申込可能なカードもあります。事業実績不問でフリーランス1年目から発行できます。",
  },
  {
    question: "ポイントは経費に使えますか？",
    answer:
      "Amazonギフト券・キャッシュバック・電子マネー交換などで間接的に経費削減が可能です。マイル交換すれば出張コストの圧縮にもつながります。",
  },
];

const cards = [
  { name: "三井住友カード ビジネスオーナーズ", type: "ゴールド", rate: "年会費5,500円(年間100万円利用で翌年無料)", points: ["登記簿不要・即日発行可", "ポイント還元率最大1.5%", "freee/マネフォと連携"], bestFor: "開業直後・コスパ重視のフリーランス。" },
  { name: "アメックス・ビジネス・プラチナ", type: "プラチナ", rate: "年会費143,000円", points: ["コンシェルジュ24時間対応", "空港ラウンジ無料・同伴者も可", "ホテル上級会員ステータス付与"], bestFor: "出張・接待が多い経営者。" },
  { name: "ダイナースクラブ ビジネスカード", type: "プラチナ", rate: "年会費27,500円", points: ["利用限度額一律の制限なし", "国内外1,500ヶ所のラウンジ", "高級レストランの優待多数"], bestFor: "高額利用・接待を重視する事業主。" },
  { name: "JCBプラチナ法人カード", type: "プラチナ", rate: "年会費33,000円", points: ["プラチナコンシェルジュ", "プライオリティ・パス無料", "ETC・追加カード無料"], bestFor: "国内出張が多い事業主。" },
  { name: "freee Mastercard", type: "ビジネス", rate: "年会費無料", points: ["freee会計と完全連携", "発行スピード最短即日", "明細が自動仕訳"], bestFor: "freeeユーザー・年会費を抑えたい人。" },
];

export default function BusinessCardPlatinumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "個人事業主カード比較", url: `${siteConfig.url}/guide/business-card-platinum` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】個人事業主のクレジットカード比較｜プラチナ・ビジネスカード徹底解説" description="個人事業主・フリーランス向けのクレジットカードをポイント還元率・年会費・特典・経費管理機能で徹底比較。会計ソフト連携で経理を効率化するベストカードを紹介します。" url={`${siteConfig.url}/guide/business-card-platinum`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>個人事業主カード比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">14分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】個人事業主のクレジットカード比較｜プラチナ・ビジネスカード徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          経費の支払いを個人カードで処理していると、確定申告で家事按分が大変になります。事業用カードを1枚持つだけで経理工数は半分以下に。本記事では2026年現在おすすめの5枚を年会費・特典・会計ソフト連携の観点で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">コスパ最強 → 三井住友ビジネスオーナーズ</span></p>
          <p><span className="font-bold">出張・接待 → アメックスビジネスプラチナ</span></p>
          <p><span className="font-bold">高額利用 → ダイナースビジネス</span></p>
          <p><span className="font-bold">freeeユーザー → freee Mastercard</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">事業用カードを持つ3つのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          個人事業主にとって事業専用カードを持つメリットは大きく3つあります。第一に経費管理の効率化。プライベートと事業用の支払いを分けることで、確定申告時の家事按分計算が不要になり、freee・マネーフォワード・弥生といった会計ソフトとAPI連携すれば仕訳作業も自動化できます。第二に税務調査対策。事業利用が明確になり、調査官に対して支出根拠を即座に提示できます。第三に資金繰り改善。通常の支払サイト+カード締日まで実質40〜60日の支払猶予が得られ、キャッシュフローを安定化できます。さらにプラチナ・ゴールドカードなら出張保険・空港ラウンジ・接待優待など、ビジネスを加速する付加価値も享受できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめビジネスカード5枚の詳細</h2>
        <div className="space-y-6">
          {cards.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">年会費：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 年会費・特典は2026年4月時点の参考値です。最新情報は公式サイトでご確認ください。</p>
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
            個人事業主のカード選びは「年会費の元が取れるか」「会計ソフトと連携できるか」が決め手です。年商1,000万円以下なら三井住友ビジネスオーナーズかfreee Mastercardでコストを抑え、年商1,500万円超や出張・接待が多い経営者ならアメックスやダイナースのプラチナカードで時間と信用を買うのが正解。会計ソフトと連携させて経理工数を最小化しましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-platinum-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プラチナカード比較</span>
            <p className="text-xs text-muted mt-1">個人向けプラチナ</p>
          </Link>
          <Link href="/guide/company-credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法人カード比較</span>
            <p className="text-xs text-muted mt-1">法人化後のカード選び</p>
          </Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">freee/弥生/マネフォ</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">インボイス対応</span>
            <p className="text-xs text-muted mt-1">適格請求書の準備</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
