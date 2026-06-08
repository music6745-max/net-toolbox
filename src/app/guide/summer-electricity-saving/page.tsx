import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】夏の電気代節約ガイド｜エアコンと電力プランの見直し",
  description:
    "猛暑でも電気代を抑える夏の節約術を解説。エアコンの設定温度・運転モード・扇風機併用・冷蔵庫・待機電力・電力プラン見直しまで整理。",
  alternates: { canonical: `${siteConfig.url}/guide/summer-electricity-saving` },
};

const faqItems = [
  {
    question: "エアコンはつけっぱなしと小まめにオンオフどちらが得ですか？",
    answer:
      "30分以内の外出ならつけっぱなしが有利です。エアコンは起動時に最も電力を消費するため、短時間のオンオフは逆効果。ただし2時間以上家を空けるなら消した方が節約になります。",
  },
  {
    question: "設定温度は何度がベストですか？",
    answer:
      "環境省推奨は28度ですが、快適性を重視するなら26〜27度＋扇風機の併用が現実的。1度上げるごとに約10%の電気代削減効果があります。",
  },
  {
    question: "冷房と除湿どちらが安いですか？",
    answer:
      "機種によります。再熱除湿は一度冷やした空気を温め直すため冷房より高くなりがち。弱冷房除湿なら冷房とほぼ同等か若干安い傾向です。取扱説明書で方式を確認しましょう。",
  },
  {
    question: "電力会社の切り替えは本当に安くなりますか？",
    answer:
      "使用量の多い世帯ほど効果が出やすい傾向があります。ただし燃料費調整額や市場連動の有無で結果が変わるため、直近12か月の使用量を使って比較するのが安全です。",
  },
];

const tips = [
  { title: "エアコンは自動運転モードに", effect: "削減余地大", desc: "弱運転より自動の方が効率的なケースが多い。センサーで最適な風量に自動調整。" },
  { title: "扇風機・サーキュレーターと併用", effect: "約10%削減", desc: "冷気を循環させ体感温度を2〜3度下げる。設定温度を上げられる。" },
  { title: "フィルターを2週間に1回掃除", effect: "約5%削減", desc: "目詰まりで消費電力が15%以上増加。掃除機で吸うだけでOK。" },
  { title: "室外機周りを空ける", effect: "約5%削減", desc: "室外機の周囲に物を置かず、直射日光も遮ると効率が上がる。" },
  { title: "カーテン・遮熱フィルム", effect: "約15%削減", desc: "窓からの熱流入を防ぐだけで冷房効率が劇的に改善。" },
];

export default function SummerElectricitySavingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "夏の電気代節約", url: `${siteConfig.url}/guide/summer-electricity-saving` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】夏の電気代節約ガイド｜エアコンと電力プランの見直し" description="猛暑でも電気代を抑える夏の節約術。エアコン・扇風機・冷蔵庫・待機電力・電力プラン見直しまで網羅。" url={`${siteConfig.url}/guide/summer-electricity-saving`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>夏の電気代節約</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">節約</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】夏の電気代節約ガイド｜エアコンと電力プランの見直し
        </h1>
        <p className="text-muted leading-relaxed">
          夏場の電気代はエアコン、冷蔵庫、待機電力の影響を受けやすく、生活パターンによって負担が大きく変わります。まずは消費電力の大きい家電から見直し、必要に応じて電力プランも比較する流れで整理します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">今すぐできる3つのこと</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>1. エアコンを「自動運転」に切り替える</p>
          <p>2. フィルターを掃除する</p>
          <p>3. 電力会社の料金プランを見直す</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">夏の電気代が高くなる仕組み</h2>
        <p className="text-muted leading-relaxed mb-4">
          夏の電気代はエアコンの使用時間に大きく左右されます。外気温が高いほど室外機の放熱効率が落ち、同じ室温を保つにもより多くの電力が必要になります。さらに冷蔵庫の負荷も増え、庫内温度を保つための消費電力が増えやすくなります。節約の鉄則は「一番大きな消費源から順に対策する」こと。つまりエアコンの効率化が最優先です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">すぐ効果が出る節約テクニック5選</h2>
        <div className="space-y-6">
          {tips.map((t, idx) => (
            <div key={t.title} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{t.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{t.effect}</span>
              </div>
              <p className="text-sm text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">電力会社切替で確認するポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          2016年の電力自由化以降、新電力会社への乗り換えが自由にできるようになりました。ただし、どの家庭でも必ず安くなるわけではありません。使用量、契約アンペア、燃料費調整額、昼夜の使用時間帯、市場連動の有無を見て比較する必要があります。
        </p>
        <p className="text-muted leading-relaxed">
          ガス・電気セット割を提供する会社なら、光熱費全体で安くなることもあります。直近12か月の検針票を見ながら、家族構成・使用量・昼夜の生活パターンを元に最適なプランを選びましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">計算ツールで確認する</h2>
        <p className="text-muted leading-relaxed mb-4">
          節約額は家電の消費電力、使用時間、電力単価で変わります。感覚だけで判断せず、まずは自宅の条件に近い数値で試算すると、優先すべき対策が見えやすくなります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/electricity-saving-calc" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電気代節約計算</span>
            <p className="text-xs text-muted mt-1">使用時間と単価から削減額を試算</p>
          </Link>
          <Link href="/tools/electricity-cost" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電気代計算</span>
            <p className="text-xs text-muted mt-1">家電ごとの目安料金を計算</p>
          </Link>
          <Link href="/tools/electricity-bill-compare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電気料金比較</span>
            <p className="text-xs text-muted mt-1">プラン差をざっくり比較</p>
          </Link>
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
            夏の電気代はエアコンの正しい使い方と電力プランの見直しを組み合わせて抑えます。設定温度・自動運転・フィルター掃除の3点から始め、使用量が多い家庭は検針票を使って電力会社も比較しましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">新電力に切替えて節約</p>
          </Link>
          <Link href="/tools/electricity-saving-calc" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電気代節約計算</span>
            <p className="text-xs text-muted mt-1">対策ごとの節約額を試算</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
