import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】国内旅行プラン完全ガイド｜予約サイト比較と費用節約術",
  description:
    "じゃらん・JTB・一休・Yahoo!トラベルなど主要予約サイトを徹底比較。国内旅行のプランニング・費用節約・予約のコツを完全ガイド。初めての一人旅から家族旅行まで対応。",
  alternates: { canonical: `${siteConfig.url}/guide/domestic-travel-guide` },
};

const faqItems = [
  {
    question: "国内旅行の予約サイトはどこがおすすめですか？",
    answer:
      "ポイント還元重視なら楽天トラベル、クーポンが豊富な じゃらん、高級宿なら一休.com、パッケージツアーならJTB、PayPayユーザーならYahoo!トラベルが使いやすいです。同じ宿でも予約サイトによって料金が異なるため2〜3サイトで比較するのが鉄則です。",
  },
  {
    question: "国内旅行はいつ予約するとお得ですか？",
    answer:
      "早割プランは60〜90日前から予約可能で5〜20%引きになることが多く、直前割は出発7日前以降に空室を埋めるため最大30%引きになることもあります。繁忙期（GW・お盆・年末年始）は早めに、閑散期は直前割を狙うのが賢い選び方です。",
  },
  {
    question: "旅行費用を節約するコツは？",
    answer:
      "平日出発・月曜〜木曜泊は週末の半額近くになることもあります。全国旅行支援や自治体クーポンの活用、ふるさと納税の旅行クーポン返礼品、楽天スーパーSALE・じゃらんスペシャルウィーク中の予約もお得です。",
  },
  {
    question: "宿泊プランの選び方は？",
    answer:
      "食事付きプランは1人あたり2,000〜5,000円程度お得になることが多いです。連泊プランやアーリーチェックインプランを活用すると体力的にもお得に。口コミは総合評価だけでなく「清潔感」「食事」「接客」など項目別に確認するのがポイントです。",
  },
];

const sites = [
  { name: "じゃらんnet", url: "https://www.jalan.net/", feature: "Pontaポイント還元とクーポン発行が豊富", bestFor: "クーポンで安く泊まりたい人" },
  { name: "JTB", url: "https://www.jtb.co.jp/", feature: "パッケージツアーと添乗員付きプランが充実", bestFor: "安心感を重視する家族・シニア層" },
  { name: "一休.com", url: "https://www.ikyu.com/", feature: "高級旅館・ホテルに特化、タイムセールあり", bestFor: "ワンランク上の宿を探す人" },
  { name: "Yahoo!トラベル", url: "https://travel.yahoo.co.jp/", feature: "PayPayポイントが貯まる・使える", bestFor: "PayPay経済圏のユーザー" },
  { name: "楽天トラベル", url: "https://travel.rakuten.co.jp/", feature: "楽天ポイント還元とスーパーSALE", bestFor: "楽天経済圏のユーザー" },
];

export default function DomesticTravelGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "国内旅行プラン完全ガイド", url: `${siteConfig.url}/guide/domestic-travel-guide` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】国内旅行プラン完全ガイド｜予約サイト比較と費用節約術" description="じゃらん・JTB・一休・Yahoo!トラベルなど主要予約サイトを徹底比較。国内旅行のプランニング・費用節約・予約のコツを完全ガイド。" url={`${siteConfig.url}/guide/domestic-travel-guide`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>国内旅行プラン完全ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">実践ガイド</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】国内旅行プラン完全ガイド｜予約サイト比較と費用節約術
        </h1>
        <p className="text-muted leading-relaxed">
          同じ宿・同じ日程でも予約方法によって料金は数千円〜数万円変わります。主要予約サイトの特徴比較から、早割・直前割の活用、閑散期を狙った節約術まで、国内旅行を安く楽しく満喫するコツを徹底解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">この記事で分かること</h2>
        <ul className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <li>・主要予約サイト5社の特徴と使い分け</li>
          <li>・旅行費用を最大30%抑える予約のタイミング</li>
          <li>・目的別のおすすめプラン選びのコツ</li>
          <li>・全国旅行支援・自治体クーポンの活用法</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">国内旅行の計画を立てる基本ステップ</h2>
        <p className="text-muted leading-relaxed mb-4">
          国内旅行の計画は「目的地→日程→交通手段→宿→現地アクティビティ」の順で固めるとスムーズです。まず行きたいエリアと滞在日数を決め、新幹線・飛行機・高速バス・マイカーから最適な交通手段を選択。その後、予約サイトで宿を比較しながら総額を抑える組み合わせを探ります。最近はダイナミックパッケージ（交通＋宿のセット予約）が個別予約より1〜3万円安くなるケースも多く、JTBや<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>のパック商品を一度チェックするのがおすすめです。
        </p>
        <p className="text-muted leading-relaxed">
          家族旅行なら子供料金の有無、一人旅ならシングル対応の宿、カップルなら記念日プランなど、旅の目的に合わせた専用プランを選ぶと満足度が上がります。<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>はワンランク上の宿を得意としており、記念日やご褒美旅行に向いています。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要予約サイト5社の比較</h2>
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
        <h2 className="text-2xl font-bold mb-4">費用を抑える予約のタイミング</h2>
        <p className="text-muted leading-relaxed mb-4">
          宿泊料金は需給で変動するため、予約のタイミングで大きく変わります。繁忙期（GW・夏休み・年末年始・三連休）は3ヶ月前までに「早割プラン」で押さえるのが鉄則。平日や閑散期なら直前1週間を切ってから「直前割」を狙うと最大30%引きが狙えます。<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>や<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>では日替わりクーポンが配布されており、予約前にクーポン一覧を確認するだけで数千円変わります。
        </p>
        <p className="text-muted leading-relaxed">
          また、楽天スーパーSALEや じゃらんスペシャルウィーク、一休の半額プラン公開などキャンペーン時期に予約すると、ポイント還元込みで実質20%以上お得になることも。<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>はSPU対象なので楽天市場のポイント倍率も上がります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">宿泊プラン選びの実践テクニック</h2>
        <p className="text-muted leading-relaxed mb-4">
          同じ宿でもプランによって2,000〜10,000円の差が出ます。夕食付きプランは素泊まりより高く見えますが、単品注文よりトータルでお得なケースが多数。連泊プラン・アーリーチェックイン・レイトチェックアウト付きプランは実質料金が安くなります。口コミ評価は総合点ではなく「清潔感」「食事」「立地」「接客」の項目別スコアを必ず確認しましょう。<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>や<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>の口コミは実際の宿泊者に限定されているため信頼度が高いです。
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
            国内旅行を安く楽しむには「予約サイトの比較」「タイミング」「プラン選び」の3点が鍵。<a href="https://www.jalan.net/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">じゃらん</a>、<a href="https://www.jtb.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">JTB</a>、<a href="https://www.ikyu.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">一休.com</a>、<a href="https://travel.yahoo.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Yahoo!トラベル</a>、<a href="https://travel.rakuten.co.jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">楽天トラベル</a>をジャンルと経済圏で使い分け、早割と直前割を賢く活用すれば旅行費用は大きく節約できます。旅費の記録は家計簿アプリや会計ソフトに残しておくと次回の旅行予算も立てやすくなります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計・旅費管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/overseas-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">海外旅行準備完全ガイド</span>
            <p className="text-xs text-muted mt-1">パスポート・保険・両替の基本</p>
          </Link>
          <Link href="/guide/ryokan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅館・ホテル予約サイト比較</span>
            <p className="text-xs text-muted mt-1">主要6サイトを徹底比較</p>
          </Link>
          <Link href="/guide/solo-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">一人旅向け予約サービス比較</span>
            <p className="text-xs text-muted mt-1">ソロトラベラー必見</p>
          </Link>
          <Link href="/guide/travel-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行保険比較</span>
            <p className="text-xs text-muted mt-1">万一に備える安心の選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
