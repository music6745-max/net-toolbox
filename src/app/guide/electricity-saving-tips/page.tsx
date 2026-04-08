import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】電気代節約完全ガイド｜今日からできる10の方法",
  description:
    "電気代を月3,000円以上節約する具体策を徹底解説。エアコン・冷蔵庫・待機電力の見直しから電力会社切替まで、家計に効くテクニックをまとめました。",
  alternates: { canonical: `${siteConfig.url}/guide/electricity-saving-tips` },
};

const faqItems = [
  {
    question: "電気代はどれくらい節約できますか？",
    answer:
      "家電の使い方を見直すだけで月1,000〜2,000円、電力会社を切り替えると月2,000〜3,000円の節約も可能です。両方組み合わせれば年間6万円以上の削減も現実的です。",
  },
  {
    question: "エアコンと扇風機どちらが節約になりますか？",
    answer:
      "夏場はエアコンを28度設定にして扇風機やサーキュレーターを併用するのが最も効率的です。エアコンをこまめに消すより、つけっぱなしのほうが省エネの場合もあります。",
  },
  {
    question: "古い家電は買い替えたほうがお得ですか？",
    answer:
      "10年以上前の冷蔵庫・エアコン・洗濯機は最新省エネモデルに買い替えると年間1〜2万円の電気代差が出ます。買い替え費用と相殺しても3〜5年で元が取れるケースが多いです。",
  },
  {
    question: "待機電力はどれくらい無駄ですか？",
    answer:
      "経済産業省のデータでは家庭の消費電力の約5〜6%が待機電力。年間6,000円以上にのぼります。スイッチ付き電源タップで一括オフが効果的です。",
  },
];

const tips = [
  { num: "1", title: "エアコンの設定温度を見直す", desc: "夏28度・冬20度を目安に設定し、扇風機・サーキュレーターを併用するだけで年間1万円以上の節約になります。フィルター掃除も月1回行いましょう。" },
  { num: "2", title: "冷蔵庫の詰め込みすぎを防ぐ", desc: "冷蔵庫は7割程度に抑え、冷凍庫はぎっしり詰めるのが理想。設定温度も「強」から「中」に変えるだけで電気代が下がります。" },
  { num: "3", title: "LED照明に切り替える", desc: "白熱電球からLEDに変えると消費電力は約1/8。寿命も40倍長く、リビング・寝室・廊下から順次切り替えると効果絶大です。" },
  { num: "4", title: "待機電力をカットする", desc: "テレビ・電子レンジ・パソコンなど使っていない家電のコンセントを抜く、スイッチ付き電源タップで一括オフ。年間6,000円の節約も狙えます。" },
  { num: "5", title: "洗濯はまとめ洗い・お風呂の残り湯を活用", desc: "洗濯機を毎日回すより2日に1回のまとめ洗いが効率的。お風呂の残り湯を使えば水道代と給湯代も同時に節約できます。" },
  { num: "6", title: "電気ポット・炊飯器の保温をやめる", desc: "保温機能は意外と電気を使います。必要なときだけ沸かす、ご飯は冷凍保存して電子レンジで温める方が経済的です。" },
  { num: "7", title: "電力会社を切り替える", desc: "新電力に切り替えるだけで年間1〜3万円の節約が可能。切り替え費用は無料で工事も不要、ライフスタイルに合ったプランを選びましょう。" },
  { num: "8", title: "時間帯別プランを活用", desc: "在宅時間が夜中心なら夜間料金が安いプランがお得。電気を使う時間帯を意識的に夜にずらすことで料金を抑えられます。" },
  { num: "9", title: "最新家電へ買い替える", desc: "10年以上前の冷蔵庫・エアコン・洗濯機は買い替えで年1〜2万円の節約に。省エネ性能ラベルの星マークをチェックしましょう。" },
  { num: "10", title: "見える化で意識を変える", desc: "スマートメーター連携アプリやワットチェッカーで使用量を見える化すると、家族全員の節約意識が高まります。" },
];

export default function ElectricitySavingTipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "電気代節約", url: `${siteConfig.url}/guide/electricity-saving-tips` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】電気代節約完全ガイド｜今日からできる10の方法" description="電気代を月3,000円以上節約する具体策を徹底解説。エアコン・冷蔵庫・待機電力の見直しから電力会社切替まで、家計に効くテクニックをまとめました。" url={`${siteConfig.url}/guide/electricity-saving-tips`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>電気代節約</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">節約</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】電気代節約完全ガイド｜今日からできる10の方法
        </h1>
        <p className="text-muted leading-relaxed">
          値上がりが続く電気代を、家計の負担を減らしながら賢く節約する方法を10個まとめました。家電の使い方の見直しから電力会社の切り替えまで、誰でも実践できるコツを紹介します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">この記事のポイント</h2>
        <ul className="space-y-1 text-sm text-slate-800 dark:text-slate-100">
          <li>・家電の使い方見直しで月1,000〜2,000円節約</li>
          <li>・電力会社切替でさらに月2,000〜3,000円削減</li>
          <li>・年間6万円以上のコストダウンも現実的</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">電気代が上がる主な原因</h2>
        <p className="text-muted leading-relaxed mb-4">
          近年の電気代高騰は燃料価格の上昇と再エネ賦課金の増加が大きな要因です。家庭で消費する電力の約5割はエアコン・冷蔵庫・照明・給湯の4分野が占めるため、ここを見直すと効果が出やすくなります。とくに古い家電を使い続けていたり、待機電力をそのままにしている家庭は、月の電気代の20%以上を「気づかぬ無駄」で支払っていることも珍しくありません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">今日からできる節約テクニック10</h2>
        <div className="space-y-3">
          {tips.map((t) => (
            <div key={t.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{t.num}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{t.title}</h3>
                  <p className="text-sm text-muted">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
            電気代節約は「日々の習慣の見直し」と「電力会社の切り替え」の二本柱が基本です。エアコン・冷蔵庫・照明・待機電力を意識するだけで月数千円、さらに新電力プランへの切替を組み合わせれば年間6万円以上の節約も狙えます。通信費（光回線・スマホ）と合わせて見直せば、家計のインフラコストを大幅に圧縮できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">通信費もまとめて節約するなら</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "TCOMヒカリ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8GTYIA+3HKU+1ZG8B6",
              highlight: "高額キャッシュバック対応の光回線",
              price: "月額制",
              badge: "高還元",
            },
            {
              name: "ITSUKI光",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8NDQ5U+4VXM+5YRHE",
              highlight: "シンプル料金の光回線",
              price: "月額制",
            },
            {
              name: "ごえんモバイル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8LLFCI+424K+TS3OI",
              highlight: "シンプル・低価格の格安SIM",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">新電力切替で電気代をさらに節約</p>
          </Link>
          <Link href="/guide/gas-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ガス会社比較</span>
            <p className="text-xs text-muted mt-1">ガス代もセット見直しで節約</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
