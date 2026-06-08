import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】出張に便利な予約サイト比較｜領収書・法人契約・ポイント還元",
  description:
    "出張族必見。じゃらん・JTB・一休・Yahoo!トラベル・楽天トラベルの出張利用の使い勝手を徹底比較。領収書発行・経費精算・マイル/ポイント戦略まで解説。",
  alternates: { canonical: `${siteConfig.url}/guide/business-trip-comparison` },
};

const faqItems = [
  { question: "出張の宿はどのサイトで予約するとお得？", answer: "ポイント還元とクーポン併用でじゃらん・楽天トラベルがコスパ良し。PayPayを使うならYahoo!トラベル、ワンランク上の宿なら一休.comが向いています。会社精算ならポイントは個人還元で賢く貯める戦略が定番です。" },
  { question: "領収書は全サイトで発行できますか？", answer: "主要予約サイトはすべて宛名指定の領収書をマイページからダウンロード可能です。但し書きは「宿泊代として」が一般的。インボイス制度対応のため適格請求書発行事業者番号の確認も忘れずに。" },
  { question: "法人契約プランはどうすれば使える？", answer: "JTBや楽天トラベルには法人向け出張手配サービスがあります。個人事業主はビジネスカード、領収書保存、日当ルールをあわせて整理すると、出張後の精算時間とコストを同時に削減できます。" },
  { question: "マイル・ポイントを最大化する方法は？", answer: "航空券はマイル付与率の高いANA/JAL公式で、宿は還元率の高い楽天/Yahoo!トラベルで分けて予約するのがセオリー。クレカはビジネスゴールド以上で決済するとさらに還元率が上がります。" },
];

export default function BusinessTripComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "出張予約サイト比較", url: `${siteConfig.url}/guide/business-trip-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】出張に便利な予約サイト比較" description="出張族必見の予約サイト徹底比較。" url={`${siteConfig.url}/guide/business-trip-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span><span>出張予約サイト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】出張に便利な予約サイト比較｜領収書・法人契約・ポイント還元</h1>
        <p className="text-muted leading-relaxed">月数回の出張を繰り返すビジネスパーソンにとって、予約サイト選びは年間の経費とポイント獲得額を大きく左右します。領収書発行・インボイス対応・ポイント還元の観点で主要サイトを比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">出張予約で重視すべき4つのポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          ビジネス利用では「料金・領収書・チェックイン時間・Wi-Fi環境」が最重要。直前予約が多い出張族にとっては当日朝の予約でも確実に空室が取れる<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>や<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>の在庫の厚さが武器になります。高速Wi-Fi・デスク環境・早朝チェックアウト対応の宿を絞り込めるフィルター機能も出張族には必須です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">領収書とインボイス制度への対応</h2>
        <p className="text-muted leading-relaxed mb-4">
          <a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>・<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>・<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>・<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>はいずれもマイページから宛名指定領収書のPDFをダウンロード可能。インボイス制度に対応した適格請求書の発行可否は宿ごとに異なるため、予約前に必ず確認を。<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>の法人向け出張手配サービスを利用すれば、複数泊まとめての請求書発行も可能で経理業務の効率化につながります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ポイント・マイル最大化戦略</h2>
        <p className="text-muted leading-relaxed mb-4">
          出張宿泊費は月数万円〜十数万円に及ぶため、ポイント還元の差がそのまま差額に。楽天トラベルはSPU対象のため楽天市場のポイント倍率が上がる副次効果があります。Yahoo!トラベルはPayPayポイントの高還元キャンペーンが頻繁に実施されます。一休.comはプレミアムランクに応じて追加ポイントが付与されるため、月1〜2回の出張を繰り返す人にも恩恵があります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">経費精算を効率化する方法</h2>
        <p className="text-muted leading-relaxed mb-4">
          出張経費は宿泊費・交通費・日当・通信費を分けて記録し、領収書はスマホで撮影してクラウド保存すると後から確認しやすくなります。出張頻度が高い個人事業主は、出張手当の基準と精算フローを先に決めておくと、年間の事務時間を大きく削減できます。
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
          <p className="text-muted leading-relaxed">出張予約は「<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>・<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>で日常利用、<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>で重要出張、<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>で法人契約」という使い分けが定番。予約後は日当・領収書・移動費を同じルールで記録すると、経費精算まで迷わず進められます。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">出張費用の整理に役立つツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/business-trip-allowance-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">出張手当計算</span>
            <p className="text-xs text-muted mt-1">日当・宿泊費の目安作りに</p>
          </Link>
          <Link href="/tools/travel-budget-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行予算シミュレーター</span>
            <p className="text-xs text-muted mt-1">出張総額の事前確認に</p>
          </Link>
          <Link href="/guide/business-card-platinum" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネスカード比較</span>
            <p className="text-xs text-muted mt-1">出張決済とポイント管理に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/ryokan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">旅館・ホテル予約サイト比較</span><p className="text-xs text-muted mt-1">主要6社徹底比較</p></Link>
          <Link href="/guide/business-card-platinum" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">ビジネスカード比較</span><p className="text-xs text-muted mt-1">出張族に最適な1枚</p></Link>
        </div>
      </section>
    </div>
  );
}
