import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】冬の暖房器具比較ガイド｜電気・ガス・灯油のコストと選び方",
  description:
    "エアコン・石油ファンヒーター・ガスファンヒーター・こたつ・電気ストーブを光熱費・暖房能力・安全性で徹底比較。部屋の広さ別おすすめも紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/winter-heating-comparison` },
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    question: "一番安い暖房器具はどれですか？",
    answer:
      "6畳程度ならエアコン、10畳以上なら石油ファンヒーターが光熱費最安です。エアコンはCOP（成績係数）が高く、投入電力の3〜4倍の熱を作れるためコスパ抜群です。",
  },
  {
    question: "エアコンは冬場に向かないと聞きましたが本当ですか？",
    answer:
      "古い機種では外気温0度以下で効率が落ちましたが、最新の寒冷地向けエアコンは−25度でも暖房可能です。暖気が上に溜まるのでサーキュレーターで循環させると効率が更にUP。",
  },
  {
    question: "石油ファンヒーターとガスファンヒーターどちらが良いですか？",
    answer:
      "立ち上がりの速さはどちらも同等ですが、燃料補給の手間がないガスが利便性で勝ります。一方で灯油は地域によって大幅に安く、灯油配達サービスを使えば手間も軽減できます。",
  },
  {
    question: "こたつや電気毛布は節約になりますか？",
    answer:
      "なります。こたつは消費電力が約200W、電気毛布は50W程度と他の暖房の1/10以下。局所暖房と組み合わせれば冬の電気代を大幅にカットできます。",
  },
];

const heaters = [
  { name: "エアコン（最新型）", type: "電気", cost: "約20円/h", points: ["部屋全体を効率的に暖房", "最新機種は寒冷地でも使用可能", "初期費用が高いが長期的にお得"], bestFor: "6〜14畳の一般的なリビング。" },
  { name: "石油ファンヒーター", type: "灯油", cost: "約18円/h", points: ["立ち上がりが最速", "広い部屋でもパワフルに暖房", "灯油補給の手間あり"], bestFor: "広いLDKや寒冷地。" },
  { name: "ガスファンヒーター", type: "都市ガス", cost: "約35円/h", points: ["燃料補給不要で便利", "ガス栓が必要", "立ち上がり速い"], bestFor: "ガス栓完備の戸建て・マンション。" },
  { name: "こたつ", type: "電気", cost: "約5円/h", points: ["消費電力が圧倒的に少ない", "局所的にしか暖まらない", "昭和の知恵が最強節電"], bestFor: "一人暮らしや在宅ワーク時の足元暖房。" },
  { name: "電気ストーブ", type: "電気", cost: "約25円/h", points: ["即暖性に優れる", "狭い範囲向け", "乾燥しにくい"], bestFor: "洗面所や書斎などスポット用途。" },
];

export default function WinterHeatingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "冬の暖房器具比較", url: `${siteConfig.url}/guide/winter-heating-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】冬の暖房器具比較ガイド｜電気・ガス・灯油のコストと選び方" description="エアコン・石油ファンヒーター・ガスファンヒーター・こたつ・電気ストーブを光熱費・暖房能力・安全性で徹底比較。" url={`${siteConfig.url}/guide/winter-heating-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>冬の暖房器具比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">14分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】冬の暖房器具比較ガイド｜電気・ガス・灯油のコストと選び方
        </h1>
        <p className="text-muted leading-relaxed">
          冬の光熱費は年間で最も高くなる季節。暖房器具の選び方次第で月数千円〜1万円の差がつきます。エアコン・石油・ガス・こたつ・電気ストーブの5種類を、燃料費・暖房能力・安全性で徹底比較しました。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">部屋の広さ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>6〜10畳 → エアコン＋こたつ併用</p>
          <p>12〜18畳 → 石油ファンヒーター</p>
          <p>スポット暖房 → 電気ストーブ</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">暖房器具選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          暖房器具を選ぶときは「部屋の広さ・使用時間・安全性」の3軸で考えます。1時間あたりの燃料費だけで判断すると失敗します。たとえば電気ストーブは即暖性が魅力ですが連続使用には向きません。エアコンは立ち上がりが遅いものの長時間運転に強く、トータルで見ると最安です。灯油ファンヒーターは寒冷地で圧倒的な実力を発揮しますが、燃料補給と換気の手間があります。ご家庭の生活パターンに合わせて、メイン暖房1台＋サブ暖房1台の組み合わせが最も合理的な選択です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要5種類の詳細比較</h2>
        <div className="space-y-6">
          {heaters.map((h, idx) => (
            <div key={h.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{h.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{h.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考燃料費：{h.cost}</p>
              <ul className="space-y-1 mb-4">
                {h.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{h.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 燃料費は2026年4月時点の目安。灯油・電気・ガスの単価は地域により変動します。</p>
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
            メイン暖房はエアコンまたは石油ファンヒーター、サブにこたつや電気毛布を組み合わせるのが冬の光熱費を抑える黄金パターンです。電力会社・ガス会社の切替と合わせて行えば、年間数万円の節約も現実的です。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/summer-electricity-saving" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">夏の電気代節約</span>
            <p className="text-xs text-muted mt-1">夏場の光熱費対策</p>
          </Link>
          <Link href="/guide/gas-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ガス会社比較</span>
            <p className="text-xs text-muted mt-1">ガス料金を下げる</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
