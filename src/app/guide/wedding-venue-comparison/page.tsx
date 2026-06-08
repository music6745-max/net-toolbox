import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】結婚式場・ウェディング比較おすすめ5選｜費用・スタイル・特典を徹底解説",
  description:
    "ホテル・ゲストハウス・専門式場・レストラン・少人数婚など主要ウェディングサービスを費用・特典・口コミで徹底比較。後悔しない式場選びのコツを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/wedding-venue-comparison` },
};

const faqItems = [
  {
    question: "結婚式の費用相場はいくらですか？",
    answer:
      "招待人数50〜80人の挙式・披露宴で300万〜400万円が相場です。ご祝儀収入で差し引くと、自己負担は150万〜200万円程度になります。",
  },
  {
    question: "式場見学は何件くらい行くべき？",
    answer:
      "3〜5件が一般的です。ブライダルフェアでは試食やドレス試着ができ、見積もりも具体化します。複数比較することで100万円以上の差が出ることもあります。",
  },
  {
    question: "持ち込み料って何ですか？",
    answer:
      "ドレス・写真・装花など外部業者を利用する際に式場に支払う料金です。1点あたり数万〜10万円かかるケースがあるため、契約前に必ず確認しましょう。",
  },
  {
    question: "ご祝儀の相場はいくら？",
    answer:
      "友人3万円、上司5万円、親族5〜10万円が一般的です。50人規模なら150万〜180万円程度のご祝儀収入が見込めます。",
  },
];

const venues = [
  { name: "ハナユメ", type: "結婚式場検索", price: "見学で電子マネー進呈", points: ["ハナユメ割で最大100万円OFF", "見学相談無料", "口コミ豊富"], bestFor: "費用を抑えて式場を選びたいカップル。" },
  { name: "ゼクシィ", type: "結婚式場検索", price: "ギフト券キャンペーン", points: ["業界最大手の検索サイト", "ブライダルフェア情報網羅", "成婚者の体験談多数"], bestFor: "情報量で比較したいカップル。" },
  { name: "マイナビウエディング", type: "結婚式場検索", price: "電子マネー進呈", points: ["特典が手厚い", "提携式場が豊富", "相談カウンター無料"], bestFor: "対面相談で進めたいカップル。" },
  { name: "トキハナ", type: "持ち込み自由相談所", price: "相談無料", points: ["持ち込み無料の式場紹介", "中立アドバイザー", "見積もり比較サポート"], bestFor: "持ち込み料金を抑えたいカップル。" },
  { name: "小さな結婚式", type: "少人数婚特化", price: "60万円〜", points: ["挙式のみプランあり", "全国53店舗", "親族のみOK"], bestFor: "家族婚・少人数婚を検討するカップル。" },
];

export default function WeddingVenueComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "結婚式場比較", url: `${siteConfig.url}/guide/wedding-venue-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】結婚式場・ウェディング比較おすすめ5選" description="ホテル・ゲストハウス・専門式場・レストラン・少人数婚など主要ウェディングサービスを費用・特典・口コミで徹底比較。" url={`${siteConfig.url}/guide/wedding-venue-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>結婚式場比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】結婚式場・ウェディング比較おすすめ5選｜費用・スタイル・特典を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          人生最大のイベントの一つである結婚式。式場選びひとつで100万円以上の差が出ることも珍しくありません。主要な式場検索サービス・少人数婚専門サービスを徹底比較し、後悔しない式場選びのコツを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">費用優先 → ハナユメ</span></p>
          <p><span className="font-bold">情報量重視 → ゼクシィ</span></p>
          <p><span className="font-bold">対面相談 → マイナビウエディング</span></p>
          <p><span className="font-bold">持ち込み自由 → トキハナ</span></p>
          <p><span className="font-bold">少人数婚 → 小さな結婚式</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">結婚式場選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          結婚式は大きく分けて「ホテルウェディング」「ゲストハウス」「専門式場」「レストランウェディング」「少人数婚」の5タイプがあります。ホテルは格式とサービス品質が高い一方で費用も高め、ゲストハウスは貸切感とオリジナリティが魅力、レストランは費用を抑えつつ料理にこだわりたいカップルに向いています。少人数婚は親族・親しい友人のみで挙げるスタイルで、コロナ禍以降に急速に普及しました。費用は60万〜150万円と通常の半額以下で済むことも多く、近年人気急上昇中です。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          式場選びで失敗しないためには、必ず3〜5件のブライダルフェアに参加して「総額見積もり」を比較することが鉄則です。最初の見積もりから式直前までに100万円以上値上がりするケースは珍しくないため、衣装代・装花・写真・映像・引出物まで含めた最終想定額で比較しましょう。また、ハナユメ・ゼクシィ・マイナビウエディングなどの式場検索サイトを経由すると、独自の割引特典や電子マネー・ギフト券プレゼントが受けられます。直接申し込みより数十万円安くなるケースもあるため、必ず経由しての見学予約がおすすめです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめウェディングサービス5選の詳細</h2>
        <div className="space-y-6">
          {venues.map((v, idx) => (
            <div key={v.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{v.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{v.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">特典/料金：{v.price}</p>
              <ul className="space-y-1 mb-4">
                {v.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{v.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 特典・料金は2026年4月時点の参考値です。最新内容は各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">費用を抑える6つのコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">オフシーズン挙式：</span>1〜2月、6月、8月は比較的安い。</li>
            <li>&#9675; <span className="font-bold text-foreground">仏滅・平日：</span>大安より20〜30%安くなることも。</li>
            <li>&#9675; <span className="font-bold text-foreground">ナイトウェディング：</span>夕方〜夜の挙式は費用が抑えめ。</li>
            <li>&#9675; <span className="font-bold text-foreground">持ち込み交渉：</span>ドレス・写真は外部発注で大幅節約。</li>
            <li>&#9675; <span className="font-bold text-foreground">フェア成約特典：</span>当日成約で数十万円割引のケース多数。</li>
            <li>&#9675; <span className="font-bold text-foreground">複数式場相見積もり：</span>最低3件で総額比較。</li>
          </ul>
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
        <Link href="/tools/wedding-cost-detail-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors">
          <div className="text-sm font-bold text-primary mb-1">結婚式費用詳細シミュレーターを使う</div>
          <p className="text-xs text-muted">招待人数・地域・スタイルから総費用と自己負担額を試算</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            結婚式場選びは「総額見積もり・複数比較・特典活用」の3点で決まります。最初の印象だけで決めず、必ず3件以上のフェアで相見積もりを取りましょう。式の費用は人生の中でも最大級の支出になるため、家計簿アプリや会計ソフトでしっかり収支を記録しておくと安心です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">式場選びと予算整理に役立つページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/wedding-cost-detail-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式費用シミュレーター</span>
            <p className="text-xs text-muted mt-1">総額と自己負担額の確認に</p>
          </Link>
          <Link href="/tools/wedding-budget-split" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚費用分担メモ</span>
            <p className="text-xs text-muted mt-1">ふたりの負担整理に</p>
          </Link>
          <Link href="/guide/wedding-ring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚指輪比較</span>
            <p className="text-xs text-muted mt-1">指輪予算の確認に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wedding-ring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚指輪比較</span>
            <p className="text-xs text-muted mt-1">指輪選びのポイント</p>
          </Link>
          <Link href="/guide/marriage-agency-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚相談所比較</span>
            <p className="text-xs text-muted mt-1">パートナー探しから</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
