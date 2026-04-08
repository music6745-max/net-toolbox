import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】海外旅行準備完全ガイド｜パスポート・保険・予約サイト活用術",
  description:
    "海外旅行の準備をステップ別に完全解説。パスポート・ビザ・海外旅行保険・航空券・宿泊予約・両替・通信手段まで。JTB・じゃらん・一休など予約サイトの使い分けも紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/overseas-travel-guide` },
};

const faqItems = [
  { question: "海外旅行の準備はいつから始めるべき？", answer: "パスポート取得に2週間〜1ヶ月、ビザ取得が必要な国はさらに1〜2ヶ月かかります。航空券は早割狙いで2〜3ヶ月前、ホテルは1〜2ヶ月前の予約がおすすめ。初めての海外旅行なら出発3ヶ月前から準備を始めると余裕を持って進められます。" },
  { question: "海外旅行保険は必須ですか？", answer: "必須ではありませんが加入を強く推奨します。海外では医療費が高額になりやすく、盲腸の手術で数百万円請求されるケースも。クレジットカード付帯保険は補償額が限られるため、不足分を別途加入するのが安全です。" },
  { question: "航空券とホテルはどこで予約すればいい？", answer: "航空券＋ホテルのセット予約（ダイナミックパッケージ）はJTBなどの旅行会社が得意です。宿単体なら一休.comやBooking.comも比較対象に。比較サイトを2〜3社使って最安値を探すのが賢明です。" },
  { question: "現地でのお金はどう持っていけば安全？", answer: "現金は必要最小限にし、クレジットカードと海外対応デビットカードを併用するのが基本。Wise や Revolutなどのマルチカレンシーカードは両替手数料が安く便利です。" },
];

export default function OverseasTravelGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "海外旅行準備完全ガイド", url: `${siteConfig.url}/guide/overseas-travel-guide` }]} />
      <ArticleJsonLd headline="【2026年最新】海外旅行準備完全ガイド｜パスポート・保険・予約サイト活用術" description="海外旅行の準備をステップ別に完全解説。" url={`${siteConfig.url}/guide/overseas-travel-guide`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span><span>海外旅行準備完全ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">実践ガイド</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】海外旅行準備完全ガイド｜パスポート・保険・予約サイト活用術</h1>
        <p className="text-muted leading-relaxed">初めての海外旅行は準備項目が多く不安なもの。パスポート取得からビザ・保険・航空券・宿・両替・通信手段まで、出発までに整えるべき項目を時系列でチェックリスト形式に解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">出発3ヶ月前：パスポート・ビザ・航空券</h2>
        <p className="text-muted leading-relaxed mb-4">
          海外旅行で最も時間がかかるのがパスポート取得です。申請から受領まで1週間〜1ヶ月、繁忙期はさらに遅れます。残存有効期間も国によって「入国時に6ヶ月以上」必要なことがあるため必ず確認を。ビザが必要な国（中国・ロシア・インド等）は渡航日の1〜2ヶ月前に申請が必要です。航空券は出発の2〜3ヶ月前が最安値ゾーンとされ、<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>などの旅行会社のダイナミックパッケージを活用すると航空券とホテルを合わせて大幅に安くなることがあります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">出発1ヶ月前：宿泊予約と海外旅行保険</h2>
        <p className="text-muted leading-relaxed mb-4">
          宿泊予約は国内でも使える<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>の海外プランや、<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>の海外ホテル予約も選択肢になります。海外サイトのBooking.comやAgodaと併用し、複数サイトで同じ宿を検索して最安値を見つけましょう。海外旅行保険はクレジットカード付帯分の補償額・補償項目・利用条件（自動付帯／利用付帯）を必ず確認し、不足分は保険会社のネット加入で補いましょう。
        </p>
        <p className="text-muted leading-relaxed">
          JTBのパッケージツアーは空港送迎・現地ガイド・食事手配までついた安心プランが多く、初めての方や親御さんとの旅行におすすめ。<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB公式サイト</a>で方面別の特集ページを見ると計画のヒントになります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">出発1週間前：両替・通信・持ち物</h2>
        <p className="text-muted leading-relaxed mb-4">
          現地通貨は空港より市中銀行や外貨両替専門店の方がレートが良いです。最近はWise・Revolut・ソニー銀行などのマルチカレンシー口座と国際デビットカードの組み合わせが人気で、両替手数料を大幅に削減できます。通信手段は海外SIM・ポケットWi-Fi・eSIMの3択。eSIMは出発前にオンラインで設定可能で最も手軽です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">出発前日・当日のチェックリスト</h2>
        <p className="text-muted leading-relaxed mb-4">
          パスポート・航空券（eチケット控え）・海外旅行保険証・現金・クレカ・スマホ充電器・変換プラグ・常備薬・ホテル予約確認書を必ず確認。空港には国際線で出発3時間前に到着するのが安心です。国内旅行に慣れていれば<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>や<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>で成田・羽田・関空近郊の前泊ホテルを予約しておくと翌朝の移動が楽になります。
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
          <p className="text-muted leading-relaxed">海外旅行の成否は準備段階で8割決まります。パスポート取得・ビザ・航空券・宿・保険・両替・通信を時系列でスケジュール化し、<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>や<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>などの予約サイトを活用することで、トラブルなく安く快適な旅を実現できます。</p>
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
          <Link href="/guide/domestic-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">国内旅行プラン完全ガイド</span><p className="text-xs text-muted mt-1">予約サイト比較と節約術</p></Link>
          <Link href="/guide/travel-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">旅行保険比較</span><p className="text-xs text-muted mt-1">海外旅行の必須アイテム</p></Link>
        </div>
      </section>
    </div>
  );
}
