import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】カーリース比較おすすめ5選｜頭金0円・月額料金・契約期間を徹底解説",
  description:
    "ニコノリ・KINTO・定額カルモくん・コスモMyカーリース・SOMPOで乗ーるなど主要カーリース5社の月額料金・契約年数・走行距離制限・残価設定を徹底比較。頭金0円で新車に乗れる賢い選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/auto-lease-comparison` },
};

const faqItems = [
  {
    question: "カーリースと購入はどちらがお得ですか？",
    answer:
      "初期費用を抑えたい・税金や車検費用を月額に組み込みたい人にはカーリースが向いています。長期保有して走行距離が多い人、最終的に資産として残したい人は購入が向きます。3〜7年で乗り換える前提ならリースの方が総額を抑えやすい傾向があります。",
  },
  {
    question: "走行距離制限はどのくらいありますか？",
    answer:
      "一般的に月間1,000〜2,000km、年間12,000〜24,000km程度の制限があります。超過すると1kmあたり5〜15円の追加料金が発生するのが一般的です。長距離通勤者やレジャー利用が多い方は無制限プランや上限の高いプランを選びましょう。",
  },
  {
    question: "途中解約はできますか？",
    answer:
      "原則として中途解約は不可、または高額な違約金が発生します。契約期間中の支払い総額に近い金額を請求されるケースもあるため、ライフプランの変化を見越して契約年数を選ぶことが重要です。",
  },
  {
    question: "メンテナンスや車検費用は含まれますか？",
    answer:
      "プランによって異なります。メンテナンスパックを付けると月額が2,000〜5,000円ほど上乗せされる代わりに、車検・オイル交換・タイヤ交換・消耗品交換などが定額になります。家計管理を重視するなら付帯がおすすめです。",
  },
  {
    question: "契約満了後はどうなりますか？",
    answer:
      "返却・乗り換え・買い取り・再リースから選べる会社が多いです。残価設定型の場合は契約時に決めた残価で買い取ることも可能。会社によっては「もらえるオプション」があり、追加料金なしで車をもらえるプランも用意されています。",
  },
];

const services = [
  { name: "定額カルモくん", type: "オリックス系", rate: "月額10,820円〜", points: ["最長11年契約で月額を圧縮", "もらえるオプションあり", "メンテプラン充実"], bestFor: "長期で月額を抑えつつ最終的に車をもらいたい人。" },
  { name: "ニコノリ", type: "ニコニコレンタカー系", rate: "月額5,500円〜", points: ["業界最安値水準のプラン", "ボーナス払い併用OK", "全国の店舗で納車相談可"], bestFor: "とにかく月額を安くしたい人。" },
  { name: "KINTO", type: "トヨタ系", rate: "月額15,950円〜", points: ["任意保険・税金・メンテ全て込み", "トヨタ・レクサス車両", "申込から納車まで早い"], bestFor: "トヨタの新車に手間なく乗りたい人。" },
  { name: "コスモMyカーリース", type: "コスモ石油系", rate: "月額11,330円〜", points: ["全国のコスモSSでメンテ可", "ガソリン割引特典付き", "残価設定なしプランあり"], bestFor: "近所のSSでメンテも済ませたい人。" },
  { name: "SOMPOで乗ーる", type: "SOMPO・DeNA系", rate: "月額13,200円〜", points: ["国産・輸入車から選べる", "任意保険込みプランあり", "オンライン完結で契約OK"], bestFor: "輸入車も含めて広く検討したい人。" },
];

export default function AutoLeaseComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "カーリース比較", url: `${siteConfig.url}/guide/auto-lease-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>カーリース比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】カーリース比較おすすめ5選｜頭金0円・月額料金・契約期間を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          頭金0円・税金コミコミ・月額定額で新車に乗れるカーリースは、家計管理がしやすく若年層からシニアまで人気が拡大中。2026年現在の主要5社を月額料金・契約年数・走行距離・残価設定で比較し、損しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">月額最安 → ニコノリ</span></p>
          <p><span className="font-bold">最終的に車をもらう → 定額カルモくん</span></p>
          <p><span className="font-bold">トヨタ車を手間なく → KINTO</span></p>
          <p><span className="font-bold">輸入車も検討 → SOMPOで乗ーる</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">カーリース選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          カーリースは「車両価格 − 残価」を契約期間で割って月額化する仕組みです。同じ車種でも残価設定の有無、走行距離上限、メンテナンス付帯の有無で総額が大きく変わります。短期2年と長期11年を比較すると、同じ月額でも総支払額は2倍以上になることも珍しくありません。さらに任意保険、車検、税金、消耗品交換が月額に含まれるかで実質コストが変わるため、表面の金額だけでなく「コミコミ条件」を必ず確認しましょう。最近はオンライン契約完結型も増え、来店なしで申し込み・審査・納車まで進められるサービスも一般的になっています。
        </p>
        <p className="text-muted leading-relaxed">
          また、リースは原則「原状回復」が必要なため、内装の汚損や事故での価値低下が違約金につながることもあります。チャイルドシートでシートが傷つきやすい子育て世帯や、ペットを乗せる方は「もらえるオプション」を選んだ方が安心です。契約前に複数社から見積もりを取り、月額・諸費用・残価条件を一覧化して比較するのが鉄則です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめカーリース5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新プランは各社公式サイトでご確認ください。</p>
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
            カーリースは「月額・走行距離・残価・付帯サービス」の4点を一覧化して比較するのが正解。ライフプランが安定している人は長期で月額を圧縮、短期で乗り換えたい人は2〜5年プランが有利です。契約後の家計管理は会計ソフトや家計簿アプリで月々の固定費を可視化すれば、車関連支出をムリなくコントロールできます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
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
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車購入比較</span>
            <p className="text-xs text-muted mt-1">新車・中古車の選び方</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">任意保険のコスト削減</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
