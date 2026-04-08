import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】旅館・ホテル予約サイト徹底比較6選｜じゃらん・JTB・一休ほか",
  description:
    "じゃらん・JTB・一休.com・Yahoo!トラベル・楽天トラベル・Booking.comの国内宿泊予約サイト6社を料金・ポイント・宿泊プラン・クーポンで徹底比較。用途別の最適な選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/ryokan-comparison` },
};

const faqItems = [
  { question: "同じ宿でも予約サイトによって料金が違うのはなぜ？", answer: "予約サイトごとに宿と契約する料金体系が異なり、独自のクーポンやポイント還元を上乗せするため料金が変わります。同じ宿・同じ日程でも2〜3サイト比較すると数千円〜1万円の差が出ることは珍しくありません。" },
  { question: "ポイント還元とクーポンどちらが得？", answer: "ポイント還元は日常の買い物でも使えるため経済圏ユーザーに有利、クーポンは即時値引きのため現金志向の方に向いています。楽天経済圏なら楽天トラベル、PayPayユーザーならYahoo!トラベル、Pontaならじゃらんがおすすめです。" },
  { question: "高級旅館を安く予約するコツは？", answer: "一休.comのタイムセールやJTBの特別プランが狙い目。公式サイトと比較して最安値を選ぶのが基本です。平日泊・直前割プランを組み合わせるとさらにお得になります。" },
  { question: "海外サイトBooking.comは安全？", answer: "大手の予約サイトで世界中で利用されており安全性は高いです。ただしキャンセルポリシーや税・サービス料の表示が国内サイトと異なるため、予約確定前に総額を必ず確認してください。" },
];

const sites = [
  { name: "じゃらんnet", url: "https://www.jalan.net/", feature: "Pontaポイント還元・クーポン配布が豊富", bestFor: "クーポンで安く泊まりたい人" },
  { name: "JTB", url: "https://www.jtb.co.jp/", feature: "パッケージツアーとサポート体制", bestFor: "安心を重視する家族旅行・シニア層" },
  { name: "一休.com", url: "https://www.ikyu.com/", feature: "高級旅館・ホテル特化、タイムセールあり", bestFor: "ワンランク上の宿を探す人" },
  { name: "Yahoo!トラベル", url: "https://travel.yahoo.co.jp/", feature: "PayPayポイントが貯まる・使える", bestFor: "PayPay経済圏ユーザー" },
  { name: "楽天トラベル", url: "https://travel.rakuten.co.jp/", feature: "楽天ポイント還元・スーパーSALE", bestFor: "楽天経済圏ユーザー" },
  { name: "Booking.com", url: "https://www.booking.com/", feature: "世界最大級の品揃え・海外宿に強い", bestFor: "海外旅行と合わせて利用する人" },
];

export default function RyokanComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "旅館・ホテル予約サイト比較", url: `${siteConfig.url}/guide/ryokan-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】旅館・ホテル予約サイト徹底比較6選" description="主要6サイトを徹底比較し用途別の最適な選び方を解説。" url={`${siteConfig.url}/guide/ryokan-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span><span>旅館・ホテル予約サイト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】旅館・ホテル予約サイト徹底比較6選｜じゃらん・JTB・一休ほか</h1>
        <p className="text-muted leading-relaxed">同じ宿でも予約サイトによって料金は1万円以上変わることがあります。本記事では主要6サイトの特徴を徹底比較し、目的別に最適な使い分けを解説します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">用途別おすすめ早見表</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">クーポン重視 → じゃらん</span></p>
          <p><span className="font-bold">パッケージツアー → JTB</span></p>
          <p><span className="font-bold">高級宿・記念日 → 一休.com</span></p>
          <p><span className="font-bold">PayPay経済圏 → Yahoo!トラベル</span></p>
          <p><span className="font-bold">楽天経済圏 → 楽天トラベル</span></p>
          <p><span className="font-bold">海外宿も予約 → Booking.com</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">予約サイトの選び方の基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          宿泊予約サイトを選ぶ際の軸は「料金・ポイント還元・品揃え・サポート」の4つ。ポイント還元は普段の買い物でも使える経済圏を優先すると実質的な値引き効果が最大化されます。品揃えは<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>と<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>が国内最大級、高級宿に絞るなら<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>が最適です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要予約サイト6社の詳細比較</h2>
        <div className="space-y-6">
          {sites.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
              </div>
              <p className="text-sm text-muted mb-3">{s.feature}</p>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{s.name}公式サイトを見る →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">賢い使い分けのコツ</h2>
        <p className="text-muted leading-relaxed mb-4">
          最安値を見つけるには「まず<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>と<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>で基本料金を確認、次にクーポンを適用、最後に<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>で他サイト比較」という流れが鉄板です。記念日や高級宿なら<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>のタイムセール、パッケージ派なら<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>のダイナミックパッケージをチェックしましょう。
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
          <p className="text-muted leading-relaxed">予約サイトは1つに絞らず複数を使い分けるのが正解です。普段使いの経済圏に合わせつつ、旅行シーンに応じて<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>・<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>・<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>・<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>を切り替えることで、年間の旅行予算を数万円単位で節約できます。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計・経費管理に役立つツール</h2>
        <ComparisonTableCTA services={[
          { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告・経理の定番ソフト", price: "年額制", badge: "定番" },
          { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
          { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
        ]} />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/domestic-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">国内旅行プラン完全ガイド</span><p className="text-xs text-muted mt-1">計画と節約のコツ</p></Link>
          <Link href="/guide/business-trip-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">出張予約サイト比較</span><p className="text-xs text-muted mt-1">ビジネスユーザー向け</p></Link>
        </div>
      </section>
    </div>
  );
}
