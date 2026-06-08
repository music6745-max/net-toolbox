import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ベビー用品・おむつ定期便比較おすすめ5選｜Amazon・楽天・コープを徹底解説",
  description:
    "Amazonファミリー・楽天ママ割・コープデリ・パルシステム・西松屋アプリのベビー用品定期便を割引率・対応商品・配送エリアで徹底比較。子育て世帯のおむつ購入を最適化。",
  alternates: { canonical: `${siteConfig.url}/guide/baby-goods-comparison` },
};

const faqItems = [
  {
    question: "おむつの定期便は本当にお得ですか？",
    answer:
      "Amazonファミリーなら最大15%オフ、楽天ママ割ならポイント還元が大幅アップなど、通常購入より5〜15%安く買えるケースが多いです。月のおむつ代3,000〜5,000円なら年間2,000〜9,000円の節約に繋がります。",
  },
  {
    question: "サイズが変わったときはどうすればいいですか？",
    answer:
      "ほとんどの定期便サービスはマイページから次回配送のサイズ変更・スキップ・キャンセルが簡単にできます。子どもの成長に合わせて柔軟に対応可能です。",
  },
  {
    question: "離乳食やミルクも定期便にできますか？",
    answer:
      "Amazonファミリー・コープデリ・パルシステムは離乳食・粉ミルク・ベビー用品も定期便対象です。まとめて購入することで配送料の節約と時短の両方が叶います。",
  },
  {
    question: "出産前から登録できますか？",
    answer:
      "Amazonファミリーや楽天ママ割は妊娠中から登録可能で、出産準備品の購入時から特典が使えます。出産予定日を登録するとサンプルボックスがもらえる特典もあります。",
  },
];

const services = [
  {
    name: "Amazonファミリー（定期おトク便）",
    type: "Amazon会員特典・最大15%オフ",
    price: "プライム会員 月600円／年5,900円",
    points: [
      "おむつ・おしりふきが最大15%オフ",
      "翌日配送・玄関先まで届く",
      "ベビー用品・離乳食も対応",
    ],
    bestFor: "Amazonをよく使う方、配送スピード重視。",
  },
  {
    name: "楽天ママ割",
    type: "楽天ポイント還元率アップ",
    price: "登録無料",
    points: [
      "子どもの誕生月に特典クーポン",
      "楽天市場の買い物でポイントアップ",
      "おむつ・ベビーカー・チャイルドシートも対象",
    ],
    bestFor: "楽天経済圏でポイントを貯めたい方。",
  },
  {
    name: "コープデリ",
    type: "首都圏中心・離乳食充実",
    price: "出資金500円〜・週次配送",
    points: [
      "離乳食・幼児食のオリジナル商品が豊富",
      "子育て割引で配送料無料・割引",
      "おむつ・ミルクのまとめ買い可",
    ],
    bestFor: "首都圏で離乳食重視の方。",
  },
  {
    name: "パルシステム",
    type: "国産・産直食材中心",
    price: "出資金1,000〜2,000円・週次配送",
    points: [
      "国産・無添加にこだわった離乳食",
      "ベビー特典で送料無料・割引",
      "1都11県対応",
    ],
    bestFor: "国産・安全性最優先の首都圏ファミリー。",
  },
  {
    name: "西松屋アプリ・通販",
    type: "ベビー専門店・低価格",
    price: "送料550円（4,950円以上で無料）",
    points: [
      "業界最安水準のベビー用品価格",
      "PB商品が豊富でコスパ抜群",
      "実店舗で受取り可能",
    ],
    bestFor: "とにかく安くベビー用品を揃えたい方。",
  },
];

export default function BabyGoodsComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ベビー用品比較", url: `${siteConfig.url}/guide/baby-goods-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】ベビー用品・おむつ定期便比較おすすめ5選｜Amazon・楽天・コープを徹底解説" description="Amazonファミリー・楽天ママ割・コープデリ・パルシステム・西松屋アプリのベビー用品定期便を割引率・対応商品・配送エリアで徹底比較。子育て世帯のおむつ購入を最適化。" url={`${siteConfig.url}/guide/baby-goods-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ベビー用品比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ベビー用品・おむつ定期便比較おすすめ5選｜Amazon・楽天・コープを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          子育て世帯にとっておむつ・ミルク・おしりふきは月3,000〜10,000円の固定費。重い荷物を持って買い物に行く負担も大きいため、定期便サービスを活用するだけで時間とお金の両方を節約できます。2026年現在の主要5サービスを割引率・配送・対応商品で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最大15%オフで賢く → Amazonファミリー</span></p>
          <p><span className="font-bold">楽天ポイント貯めたい → 楽天ママ割</span></p>
          <p><span className="font-bold">離乳食重視 → コープデリ</span></p>
          <p><span className="font-bold">国産・安全性重視 → パルシステム</span></p>
          <p><span className="font-bold">最安値で揃える → 西松屋</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ベビー用品定期便の選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          ベビー用品定期便を選ぶときのポイントは「割引率」「配送頻度の柔軟性」「対象商品の広さ」の3つ。Amazonファミリーは定期おトク便で最大15%オフ、楽天ママ割はポイント還元率がアップする仕組みで、それぞれ実質的な割引額は近い水準になります。コープ系は出資金が必要ですが、離乳食・幼児食の質と種類が充実しており、首都圏在住なら検討価値が高いです。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          おむつのサイズは生後数ヶ月で頻繁に変わるため、配送をスキップしたり次回サイズを変更できる機能が必須です。どのサービスもマイページから簡単に変更可能なので、ストレスなく続けられます。出産前から登録するとお得なクーポン・サンプルがもらえるサービスも多いので、妊娠中から準備しておくのがおすすめ。複数サービスを併用しても会費が安いものばかりなので、上手に使い分けることで子育て費用を最適化できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめベビー用品定期便5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{s.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金・割引率は2026年4月時点の参考値です。最新情報は各社公式サイトでご確認ください。</p>
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
            ベビー用品の定期便は「重い・かさばる・頻繁に必要」という3つの育児ストレスを一気に解消してくれる強力な味方です。割引率はどのサービスも5〜15%と大差ないため、自分のライフスタイルとよく使うECサイトに合わせて選ぶのが正解。家計簿アプリで子育て費用を可視化し、定期便・ふるさと納税・ポイント還元をフル活用すれば、子育ての固定費を年数万円単位で削減できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">子育て費用の見直しに役立つツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/baby-growth-tracker" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">赤ちゃん成長記録</span>
            <p className="text-xs text-muted mt-1">サイズ変更や購入時期の目安に</p>
          </Link>
          <Link href="/tools/birth-cost-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">出産費用シミュレーター</span>
            <p className="text-xs text-muted mt-1">出産前後の支出を整理</p>
          </Link>
          <Link href="/tools/child-allowance-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">児童手当シミュレーター</span>
            <p className="text-xs text-muted mt-1">育児予算の収入側も確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/food-delivery-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">食材宅配サービス比較</span>
            <p className="text-xs text-muted mt-1">家族の食事もまとめて宅配</p>
          </Link>
          <Link href="/guide/furusato-tax-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ふるさと納税サイト比較</span>
            <p className="text-xs text-muted mt-1">日用品の返礼品で節税</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
