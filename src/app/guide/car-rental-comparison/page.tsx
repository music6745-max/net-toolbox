import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】レンタカー・カーシェア比較おすすめ5選｜料金・予約しやすさを徹底解説",
  description:
    "ニッポンレンタカー・トヨタレンタカー・タイムズカー・カレコ・dカーシェアを料金・ステーション数・予約方法で徹底比較。短時間ならカーシェア、長距離ならレンタカーの選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/car-rental-comparison` },
};

const faqItems = [
  {
    question: "レンタカーとカーシェアの違いは？",
    answer:
      "レンタカーは1日単位の利用で、店舗での貸出・返却が必要。長距離旅行や1日中使う場合に向いています。カーシェアは15分単位など短時間から利用でき、ステーション(駐車場)で借りて同じ場所に返却します。月会費がかかる代わりに、ガソリン代込みで割安。短時間・近距離ならカーシェアが圧倒的にお得です。",
  },
  {
    question: "免責補償・NOC補償は必要ですか？",
    answer:
      "免責補償は事故時の自己負担(5〜10万円)を免除する保険で、ほぼ必須レベル。NOC(ノンオペレーションチャージ)補償は、事故修理中の営業損失補填(2〜5万円)を免除するもので、こちらも加入推奨です。両方加入しても1日2,000円程度なので、万が一のために必ず付けましょう。",
  },
  {
    question: "返却時のガソリン代はどうなりますか？",
    answer:
      "レンタカーは「満タン返し」が原則で、給油せず返却すると割高な精算料金が発生します。カーシェアはガソリン代込みなので、給油は不要(給油すると割引クーポンがもらえる場合あり)。長距離なら満タン返しのレンタカー、近距離往復ならガソリン代込みのカーシェアがお得です。",
  },
  {
    question: "予約はどれくらい前にすべき？",
    answer:
      "繁忙期(GW・お盆・年末年始)は1〜2ヶ月前の予約が必須。直前だと希望車種が取れません。平日や閑散期なら前日でも予約可能。早期予約割引(1ヶ月前で10%オフなど)を活用すれば数千円節約できます。",
  },
];

const services = [
  { name: "ニッポンレンタカー", type: "レンタカー", rate: "全国800店舗超", points: ["業界最大級の店舗数", "ワンウェイ(乗捨)対応", "法人利用の信頼度高い"], bestFor: "全国どこでも借りたい人、出張利用。" },
  { name: "トヨタレンタカー", type: "レンタカー", rate: "全国1,200店舗超", points: ["店舗数No.1・新車中心の整備状態", "ハイブリッド・EVの取扱多数", "JAF会員割引"], bestFor: "新車に乗りたい人、車両品質重視。" },
  { name: "タイムズカー", type: "カーシェア", rate: "ステーション1.4万箇所", points: ["業界最大手・予約即利用可", "15分単位の短時間利用", "ガソリン代・保険料込み"], bestFor: "都市部在住で短時間利用が多い人。" },
  { name: "カレコ・カーシェアリングクラブ", type: "カーシェア", rate: "ステーション3,000箇所超", points: ["三井不動産系列・首都圏中心", "高級車・輸入車も選べる", "月額費無料プランあり"], bestFor: "首都圏在住・週末ドライブ派。" },
  { name: "dカーシェア", type: "カーシェア", rate: "予約サービス型", points: ["複数カーシェア事業者を一括予約", "dポイント連携", "月額無料・利用時のみ料金発生"], bestFor: "複数サービスを比較したい人。" },
];

export default function CarRentalComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "レンタカー比較", url: `${siteConfig.url}/guide/car-rental-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】レンタカー・カーシェア比較おすすめ5選" description="ニッポンレンタカー・トヨタレンタカー・タイムズカー・カレコ・dカーシェアを料金・ステーション数・予約方法で徹底比較。" url={`${siteConfig.url}/guide/car-rental-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>レンタカー比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】レンタカー・カーシェア比較おすすめ5選｜料金・予約しやすさを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          車を所有しなくても、必要な時だけ借りて使えるレンタカーとカーシェア。維持費年間40万円超の自家用車に比べ圧倒的に経済的で、若い世代を中心に「カーシェア派」が増えています。本記事ではレンタカー大手2社・カーシェア大手3社を料金・店舗数・予約のしやすさで徹底比較し、用途別の最適サービスを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">用途別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">長距離旅行・1日利用 → ニッポン/トヨタレンタカー</span></p>
          <p><span className="font-bold">短時間・近距離利用 → タイムズカー</span></p>
          <p><span className="font-bold">首都圏で高級車も → カレコ</span></p>
          <p><span className="font-bold">月会費を払いたくない → dカーシェア</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">レンタカーとカーシェアの選び分け</h2>
        <p className="text-muted leading-relaxed mb-4">
          利用時間で選ぶのが基本です。「3時間以内」ならカーシェア、「6時間以上」ならレンタカーがお得。例えば6時間利用ならタイムズカーは約4,500円ですが、レンタカー(コンパクトカー)も6時間パックで5,500円程度。3時間ならカーシェアは約2,200円、レンタカーは6時間契約しか無いため5,500円かかります。短時間利用ほどカーシェアの割安感が際立ちます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          一方、長距離移動ならレンタカーが有利。カーシェアには「距離料金(16円/km)」が加算されるため、200km以上走るとレンタカーより割高に。家族旅行や観光ドライブはレンタカー一択です。
        </p>
        <p className="text-muted leading-relaxed">
          月の利用頻度も重要。月3回以上使うならカーシェアの月会費(880円〜)は元が取れます。月1〜2回ならdカーシェアのような「月会費無料・利用時のみ料金発生」型がベスト。年に数回しか乗らないなら、その都度レンタカーを借りる方がお得です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめレンタカー・カーシェア5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">特徴：{s.rate}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金・店舗数は2026年4月時点の参考値です。最新条件は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">節約のコツと注意点</h2>
        <p className="text-muted leading-relaxed mb-4">
          レンタカーは「早割」「ネット予約限定割引」を活用すると最大30%安くなります。じゃらんレンタカーや楽天トラベルなど比較サイト経由の予約も安いケースが多いので、必ず複数チャンネルで料金を比較しましょう。カーシェアは時間超過料金が割高なので、余裕を持った返却時刻設定が重要。10分の遅延でも数千円のペナルティが発生することがあります。
        </p>
        <p className="text-muted leading-relaxed">
          また、カーシェアでは前のユーザーの忘れ物・汚れチェックを必ず実施し、出発前に写真撮影を忘れずに。後から「自分が壊した」と疑われるトラブルを避けられます。交通費・レジャー費は家計簿アプリに記録し、年間支出を把握すれば、自家用車購入とどちらが得かも判断しやすくなります。
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
            「短時間ならカーシェア、長距離ならレンタカー」が大原則。タイムズカーは都市部の最強プレイヤー、トヨタ・ニッポンレンタカーは旅行・出張の鉄板選択肢です。月の利用回数を家計簿アプリで記録し、自家用車との損益分岐点を見極めれば、車に縛られない自由なライフスタイルが実現できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">車を借りる・持つ費用の比較ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/car-expense-yearly-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車の年間維持費計算</span>
            <p className="text-xs text-muted mt-1">自家用車との損益分岐点に</p>
          </Link>
          <Link href="/tools/fuel-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">燃費・ガソリン代計算</span>
            <p className="text-xs text-muted mt-1">長距離利用の実費を確認</p>
          </Link>
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">定額で車を持つ選択肢</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">月額定額で新車に乗る</p>
          </Link>
          <Link href="/guide/travel-booking-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行予約サイト比較</span>
            <p className="text-xs text-muted mt-1">パック旅行もチェック</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
