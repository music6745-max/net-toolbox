import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】夏の電気代節約ガイド｜エアコン徹底活用で月3000円カット",
  description:
    "猛暑でも電気代を抑える夏の節約術を徹底解説。エアコンの設定温度・運転モード・扇風機併用・冷蔵庫・待機電力まで、すぐ使えるテクニックを網羅。",
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
      "使用量の多い世帯ほど効果大。夏場の月間400kWh超の家庭なら、新電力への切替で年間1〜2万円の節約になるケースが多く、切替費用も無料です。",
  },
];

const tips = [
  { title: "エアコンは自動運転モードに", effect: "最大20%削減", desc: "弱運転より自動の方が効率的。センサーで最適な風量に自動調整。" },
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
      <ArticleJsonLd headline="【2026年最新】夏の電気代節約ガイド｜エアコン徹底活用で月3000円カット" description="猛暑でも電気代を抑える夏の節約術。エアコン・扇風機・冷蔵庫・待機電力まで網羅。" url={`${siteConfig.url}/guide/summer-electricity-saving`} />
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
          【2026年最新】夏の電気代節約ガイド｜エアコン徹底活用で月3000円カット
        </h1>
        <p className="text-muted leading-relaxed">
          総務省の家計調査によると、夏場の電気代は冬場に次いで高く、エアコンが消費電力の約6割を占めます。正しい使い方と小さな工夫で、猛暑でも月2,000〜3,000円の削減が可能です。すぐ実践できるテクニックを厳選して解説します。
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
          夏の電気代の約60%をエアコンが占めます。外気温が高いほど室外機の放熱効率が落ち、同じ室温を保つにもより多くの電力が必要になります。さらに冷蔵庫の負荷も増え、庫内温度を保つために消費電力が約10%増加。待機電力も合わせると、何もしていなくても毎月1,000円以上が無駄になっている家庭が多数存在します。節約の鉄則は「一番大きな消費源から順に対策する」こと。つまりエアコンの効率化が最優先です。
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
        <h2 className="text-2xl font-bold mb-4">電力会社切替で年1〜2万円節約</h2>
        <p className="text-muted leading-relaxed mb-4">
          2016年の電力自由化以降、新電力会社への乗り換えが自由にできるようになりました。夏場に400kWh以上使う一般家庭なら、従量電灯Bから市場連動型や定額プランへの切替で年間1〜2万円の削減が可能です。切替工事は不要、スマートメーターも無料交換、違約金も原則ありません。比較サイトで5分あれば自分に合う会社が見つかります。
        </p>
        <p className="text-muted leading-relaxed">
          ガス・電気セット割を提供する会社なら、光熱費全体でさらに安くなることも。家族構成・使用量・昼夜の生活パターンを元に最適なプランを選びましょう。
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
            夏の電気代はエアコンの正しい使い方＋電力会社の見直しの2段構えで大幅にカットできます。設定温度・自動運転・フィルター掃除の3点セットだけで月1,000円以上、さらに新電力切替を組み合わせれば年2万円以上の節約も現実的です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "光熱費も自動で家計簿化",
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
            <p className="text-xs text-muted mt-1">新電力に切替えて節約</p>
          </Link>
          <Link href="/guide/winter-heating-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">冬の暖房器具比較</span>
            <p className="text-xs text-muted mt-1">冬の光熱費対策</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
