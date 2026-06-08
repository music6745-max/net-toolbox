import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】旅行予約アプリ徹底比較おすすめ5選｜国内・海外・ホテル・航空券を解説",
  description:
    "じゃらん・楽天トラベル・Booking.com・Agoda・エクスペディアの旅行予約アプリを料金・品揃え・ポイント還元で徹底比較。国内外の最安予約のコツとキャンセル規定も解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/travel-app-comparison` },
};

const faqItems = [
  { question: "最安で予約する方法は？", answer: "1つのアプリに絞らず、複数アプリで同じ宿・便を比較するのが鉄則。楽天・じゃらんは国内、Booking.com・Agodaは海外に強い傾向。セール期間（毎月5の倍数の日、楽天スーパーセールなど）を狙うとさらに安くなります。" },
  { question: "ポイント還元はどこがお得？", answer: "楽天トラベルは楽天ポイント最大10倍、じゃらんはリクルートポイントが貯まります。Booking.comのGeniusプログラムは連泊で最大20%オフです。" },
  { question: "キャンセル規定の違いは？", answer: "国内アプリは宿泊日当日キャンセル料100%が一般的。海外アプリは「返金不可（最安）」「キャンセル無料」プランを選べる場合が多いので、予定が不確定なら後者を選びましょう。" },
  { question: "航空券も同時予約できますか？", answer: "エクスペディア・Booking.com・楽天トラベルは航空券＋ホテルのセット予約が可能で、単体予約より総額が安くなることがあります。" },
];

const apps = [
  { name: "楽天トラベル", type: "国内中心", rate: "実質ポイント還元最大20%", points: ["楽天ポイントが貯まる・使える", "スーパーセール時は大幅割引", "国内宿泊施設数が豊富"], bestFor: "楽天経済圏ユーザー、国内旅行メイン。" },
  { name: "じゃらん", type: "国内中心", rate: "リクルートポイント1%〜", points: ["じゃらん限定の特別プランあり", "クチコミ数が日本最大級", "温泉宿に強い"], bestFor: "国内温泉旅行を計画する人。" },
  { name: "Booking.com", type: "海外中心", rate: "Genius会員で最大20%オフ", points: ["世界28万軒以上の宿泊施設", "キャンセル無料プランが豊富", "日本語サポート対応"], bestFor: "海外旅行・出張が多い人。" },
  { name: "Agoda", type: "海外中心", rate: "AgodaCash還元あり", points: ["アジア圏の宿に強み", "シークレットセールが豊富", "クレジットカード割引あり"], bestFor: "アジア旅行を計画する人。" },
  { name: "エクスペディア", type: "総合", rate: "会員限定プランで最大30%オフ", points: ["航空券＋ホテルのセット", "レンタカーも同時予約", "マイル連携あり"], bestFor: "パッケージ旅行を組みたい人。" },
];

export default function TravelAppComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "旅行予約アプリ比較", url: `${siteConfig.url}/guide/travel-app-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】旅行予約アプリ徹底比較おすすめ5選｜国内・海外・ホテル・航空券を解説" description="じゃらん・楽天トラベル・Booking.com・Agoda・エクスペディアを料金・品揃え・ポイント還元で徹底比較。" url={`${siteConfig.url}/guide/travel-app-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>旅行予約アプリ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】旅行予約アプリ徹底比較おすすめ5選｜国内・海外・ホテル・航空券を解説
        </h1>
        <p className="text-muted leading-relaxed">
          旅行予約アプリによって同じ宿でも数千円〜1万円以上差が出ることは珍しくありません。国内・海外・出張・家族旅行の用途別に、最安で予約するためのアプリ選びとテクニックを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">楽天ユーザー → 楽天トラベル</span></p>
          <p><span className="font-bold">温泉・国内 → じゃらん</span></p>
          <p><span className="font-bold">海外旅行 → Booking.com</span></p>
          <p><span className="font-bold">パッケージ → エクスペディア</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">旅行予約アプリ選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          旅行予約アプリは「品揃え」「最低価格保証」「ポイント還元率」「キャンセル規定」「付帯サービス（航空券・レンタカー）」の5点で比較しましょう。国内ホテルは楽天トラベル・じゃらん、海外ホテルはBooking.com・Agoda、パッケージ旅行はエクスペディアが強い傾向があります。複数アプリで同一宿の価格を比較し、最も安いアプリ＋ポイント還元効果込みで決めるのが賢い選び方。クレジットカードの旅行保険や海外旅行保険もあわせて確認を。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ旅行予約アプリ5選の詳細</h2>
        <div className="space-y-6">
          {apps.map((a, idx) => (
            <div key={a.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{a.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{a.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">還元・特徴：{a.rate}</p>
              <ul className="space-y-1 mb-4">
                {a.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{a.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 還元率・プランは2026年4月時点の参考値です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">最安予約のテクニック</h2>
        <p className="text-muted leading-relaxed mb-4">
          ①同じ宿を複数アプリで価格比較。②楽天スーパーセール・じゃらんセールなどのタイミングを狙う。③キャンセル無料プランで早めに仮押さえし、価格が下がったら予約し直す。④旅費は予算表と領収書メモに分けて管理。⑤マイル・ポイント積算の経路を逆算して予約チャネルを選ぶ——この5つを習慣化するだけで年間の旅費を大幅に削減できます。
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
            旅行予約は「アプリの使い分け×タイミング×ポイント還元」の3点で大きく差が出ます。国内なら楽天トラベル・じゃらん、海外ならBooking.com・Agoda、パッケージならエクスペディアを基本に、複数アプリで常に比較する習慣をつけましょう。予約後は旅費・保険・現地移動費をまとめて確認すると、旅行全体の予算管理がしやすくなります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">旅行予約後に役立つツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/travel-budget-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行予算シミュレーター</span>
            <p className="text-xs text-muted mt-1">予約後の総額整理に</p>
          </Link>
          <Link href="/tools/flight-mile-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フライトマイル計算</span>
            <p className="text-xs text-muted mt-1">航空券予約前の比較に</p>
          </Link>
          <Link href="/guide/travel-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行保険比較</span>
            <p className="text-xs text-muted mt-1">予約後の補償確認に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/travel-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行保険比較</span>
            <p className="text-xs text-muted mt-1">海外旅行の必須アイテム</p>
          </Link>
          <Link href="/guide/car-rental-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">レンタカー比較</span>
            <p className="text-xs text-muted mt-1">現地の移動手段</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
