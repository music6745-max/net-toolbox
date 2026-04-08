import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】一人旅向け予約サービス比較｜じゃらん・JTB・一休ほか",
  description:
    "一人旅に特化した宿探し。じゃらん・JTB・一休.com・Yahoo!トラベル・楽天トラベルの一人旅プラン・シングル対応・安全面を徹底比較。初めてのソロトラベラー向け完全ガイド。",
  alternates: { canonical: `${siteConfig.url}/guide/solo-travel-guide` },
};

const faqItems = [
  { question: "一人旅で宿泊料金が割高になるのはなぜ？", answer: "旅館の多くは2名1室を前提に料金設計されており、1名利用だと部屋代を1人で負担するため割高に。ただし最近は「一人旅歓迎」プランを出す宿が増えており、シングル対応可の宿を探せば2名利用と同等の1人あたり料金で泊まれます。" },
  { question: "女性一人旅で安全な宿の選び方は？", answer: "駅近・女性専用フロア・セキュリティ24時間体制の宿が安心。口コミで「一人旅」「女性」キーワードを検索し、実際の女性ソロトラベラーのレビューを確認するのがおすすめです。" },
  { question: "一人旅におすすめの予約サイトは？", answer: "クーポン豊富な じゃらん、高級宿のタイムセールがある 一休.com、ツアー型で安心の JTB が人気です。複数サイトを比較して最安値を探すのが基本です。" },
  { question: "一人旅でも食事付きプランはある？", answer: "はい。かに・温泉・郷土料理などを1人前で楽しめるプランが「お一人様歓迎」プランとして多数存在します。部屋食対応の宿を選べば気兼ねなくゆったり食事を楽しめます。" },
];

export default function SoloTravelGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "一人旅向け予約サービス比較", url: `${siteConfig.url}/guide/solo-travel-guide` }]} />
      <ArticleJsonLd headline="【2026年最新】一人旅向け予約サービス比較" description="一人旅向けの予約サイト比較ガイド。" url={`${siteConfig.url}/guide/solo-travel-guide`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span><span>一人旅向け予約サービス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】一人旅向け予約サービス比較｜じゃらん・JTB・一休ほか</h1>
        <p className="text-muted leading-relaxed">近年はソロトラベラー人口が急増し、一人旅専用プランを揃える予約サイトや宿が増えています。シングル対応・安全面・料金の3観点で主要サービスを比較し、一人旅を充実させる選び方を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">一人旅でおすすめの予約サイトの特徴</h2>
        <p className="text-muted leading-relaxed mb-4">
          <a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>は「一人旅特集ページ」を設けており、シングルルーム・お一人様プラン・温泉宿など目的別に絞り込みが可能。<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>は高級宿の一人旅プランが得意で、ご褒美旅行に向いています。<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>は初心者向けに安心サポートが手厚く、行き先選びや相談ができるのが強み。
        </p>
        <p className="text-muted leading-relaxed">
          <a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>はシングル・カプセル・女性専用フロアの絞り込みが可能で都市部の出張・観光に使いやすく、<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>はPayPayユーザーが直前予約するのに便利です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">女性一人旅のための安全チェックポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          ①駅近・治安の良いエリア ②女性専用フロア/女性優先ルーム ③24時間スタッフ常駐 ④オートロック/セキュリティキー ⑤明るいロビー と共用スペースの5点を重視。じゃらんの口コミ検索で「女性一人旅」と検索すると実際のソロ女性ユーザーのレビューが多数見つかり、雰囲気が掴めます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">一人旅の費用を抑えるコツ</h2>
        <p className="text-muted leading-relaxed mb-4">
          ・平日泊で最大半額 ・早割（60日前）＋直前割（7日前）を状況で使い分け ・じゃらんスペシャルウィーク等のキャンペーンを狙う ・ポイント還元の経済圏を1つに集約する。素泊まりプランと地元グルメを組み合わせると、食事付きプランより自由度が高く安上がりに済むことも。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">一人旅のおすすめ宿タイプ別選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          ビジネスホテル：都市観光・安さ重視 ／ 温泉旅館：心身のリフレッシュ ／ ゲストハウス：交流重視・最安 ／ カプセルホテル：女性専用フロアも増加中 ／ 高級旅館：ご褒美・記念日。自分のテーマに合わせて<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>や<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>で絞り込むと効率良く探せます。
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
          <p className="text-muted leading-relaxed">一人旅は気ままで自由な反面、宿選びで失敗すると寂しさや不安が増えます。<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>・<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>・<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>・<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>を上手に使い分け、安全面と満足度の両方を満たす宿を選びましょう。</p>
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
          <Link href="/guide/domestic-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">国内旅行プラン完全ガイド</span><p className="text-xs text-muted mt-1">旅行計画の基本</p></Link>
          <Link href="/guide/ryokan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"><span className="text-sm font-bold hover:text-primary">旅館・ホテル予約比較</span><p className="text-xs text-muted mt-1">主要6社徹底比較</p></Link>
        </div>
      </section>
    </div>
  );
}
