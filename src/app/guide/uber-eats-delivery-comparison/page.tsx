import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】フードデリバリーアプリ比較おすすめ4選｜Uber Eats・出前館・menu・Wolt",
  description:
    "Uber Eats・出前館・menu・Woltの配達料・手数料・加盟店数・クーポン・対応エリアを徹底比較。シーン別・お得度別の選び方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/uber-eats-delivery-comparison` },
};

const faqItems = [
  {
    question: "どのフードデリバリーが一番安いですか？",
    answer:
      "配達料と最低注文金額を合わせた総額では、出前館のクーポン利用時やmenuのポイント還元時が最安になるケースが多いです。ただし近距離なら配達料無料キャンペーンのあるUber Eatsが有利な場合もあります。複数アプリを併用しクーポン最適化するのがコツです。",
  },
  {
    question: "加盟店が一番多いのはどのサービスですか？",
    answer:
      "全国展開では出前館が強く、大都市圏では Uber Eatsが圧倒的な加盟店数を誇ります。地方都市では出前館が唯一対応しているエリアも多く、住んでいる場所によって最適解が変わります。",
  },
  {
    question: "配達員としての稼ぎやすさはどう違いますか？",
    answer:
      "Uber Eatsはインセンティブ制で時給換算が変動、出前館は固定報酬＋ブースト制、Woltはスケジュールシフト制など仕組みが異なります。副業として始める場合はUber Eatsと出前館の併用が主流です。",
  },
  {
    question: "初回クーポンはどれがお得ですか？",
    answer:
      "各社とも1,000〜3,000円分の初回クーポンを配布しており、紹介コードを使えばさらに上乗せされます。初回は4サービスそれぞれで1回ずつ注文するのが最もお得な使い方です。",
  },
];

const services = [
  { name: "Uber Eats", type: "世界最大手", rate: "配達料0〜500円", points: ["加盟店数・対応エリアとも国内トップクラス", "サブスク Uber One で配達料無料", "配達スピードが速い"], bestFor: "大都市圏在住で選択肢を最重視したい人。" },
  { name: "出前館", type: "国内老舗", rate: "配達料0〜450円", points: ["全国47都道府県をカバー", "大手チェーン店との提携が強い", "LINEクーポンとPayPay連携がお得"], bestFor: "地方在住・チェーン店中心に注文したい人。" },
  { name: "menu", type: "テイクアウト対応", rate: "配達料200〜500円", points: ["テイクアウト予約にも強い", "ポイント還元率が高い", "KDDI傘下で安定運営"], bestFor: "ポイント還元でお得に使いたい人。" },
  { name: "Wolt", type: "北欧発", rate: "配達料99〜350円", points: ["サポート対応が業界随一の丁寧さ", "配達員のシフト制で質が安定", "地方中核都市でも展開"], bestFor: "トラブル時のサポートを重視する人。" },
];

export default function UberEatsDeliveryComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "フードデリバリー比較", url: `${siteConfig.url}/guide/uber-eats-delivery-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】フードデリバリーアプリ比較おすすめ4選｜Uber Eats・出前館・menu・Wolt" description="Uber Eats・出前館・menu・Woltの配達料・手数料・加盟店数・クーポン・対応エリアを徹底比較。" url={`${siteConfig.url}/guide/uber-eats-delivery-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>フードデリバリー比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】フードデリバリーアプリ比較おすすめ4選｜Uber Eats・出前館・menu・Wolt
        </h1>
        <p className="text-muted leading-relaxed">
          コロナ禍以降すっかり定着したフードデリバリー。主要4サービスは配達料・加盟店・クーポンで差があり、うまく使い分ければ月数千円単位で節約可能です。2026年時点の主要4アプリの最新仕様を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">選択肢重視 → Uber Eats</span></p>
          <p><span className="font-bold">全国対応・チェーン店 → 出前館</span></p>
          <p><span className="font-bold">ポイント還元 → menu</span></p>
          <p><span className="font-bold">サポート品質 → Wolt</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">フードデリバリー選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          フードデリバリーで意識すべきは「配達料・サービス料・最低注文金額・クーポン」の4要素です。商品価格は店舗がアプリ向けに5〜20%上乗せしているケースが多く、テイクアウトより割高になるのが通例。そのぶん配達料無料キャンペーンやサブスク（Uber Oneなど）を活用すると実質価格が下がります。複数アプリを比較して同じ店舗でも安い方を選ぶ「クロス注文」が節約上級者の基本テクニックです。雨の日や深夜は加算料金が発生することも覚えておきましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめフードデリバリー4社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考配達料：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金・対応エリアは2026年4月時点の参考値です。最新情報は各サービスの公式アプリ・サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">フードデリバリー節約の5つのコツ</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>1. 初回クーポンを4社すべてで使い切ると合計1万円以上お得になります。</p>
          <p>2. 2人前以上まとめ注文で配達料を割り勘にすると1人あたりのコストが下がります。</p>
          <p>3. 店舗受け取り（ピックアップ）機能を使えば配達料が完全無料に。</p>
          <p>4. Uber One・出前館プレミアム会員などサブスクは月4回以上使うなら元が取れます。</p>
          <p>5. 家計簿アプリで利用額を可視化することで使いすぎを防げます。</p>
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
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            フードデリバリーは1社に絞るより、複数アプリを使い分けるほうがお得で選択肢も広がります。都市圏ならUber Eats、地方なら出前館をベースに、ポイント還元のmenu、サポート重視のWoltを補完的に活用するのがおすすめです。月々の利用額は家計簿アプリや会計ソフトで必ず可視化し、外食費とのバランスを見直しましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/meal-kit-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ミールキット比較</span>
            <p className="text-xs text-muted mt-1">自炊と外食のバランスに</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">ポイント還元を最大化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
