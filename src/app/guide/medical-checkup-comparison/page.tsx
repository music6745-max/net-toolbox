import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】人間ドック・健康診断比較おすすめ5選｜料金・検査項目・受診方法を徹底解説",
  description:
    "人間ドック・脳ドック・PET検査・基本健診など主要コースを料金・検査項目・所要時間で徹底比較。会社員から自営業まで、目的別の賢い選び方と受診タイミングを解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/medical-checkup-comparison` },
};

const faqItems = [
  {
    question: "人間ドックと健康診断の違いは？",
    answer:
      "健康診断は労働安全衛生法で定められた最低限の検査（身長・体重・血圧・尿・血液・胸部X線など）、人間ドックは任意で受ける精密検査で50〜100項目を一度にチェックします。会社員の定期健診でカバーできない胃・大腸・脳・婦人科系は人間ドックで補完するのが基本です。",
  },
  {
    question: "受診費用の相場はいくらですか？",
    answer:
      "日帰り人間ドック（基本）で3万〜6万円、1泊2日の精密ドックで6万〜15万円、脳ドックは2万〜5万円、PET-CTがん検診は10万〜15万円が相場です。協会けんぽや健保組合加入者は補助で半額以下になるケースも多いので、まず健保の案内を確認しましょう。",
  },
  {
    question: "何歳から受けるべきですか？",
    answer:
      "30代から2年に1回、40代以降は毎年の受診が推奨されます。家族にがんや生活習慣病の既往がある場合は30歳前から年1回ペースで受ける方が安心です。女性は乳がん・子宮頸がん検診を含むレディースドック、男性は前立腺PSA検査の追加を検討しましょう。",
  },
  {
    question: "医療費控除の対象になりますか？",
    answer:
      "基本的に人間ドックは予防目的のため対象外ですが、検査で重大な疾病が発見され治療に移行した場合はその年の健診費用も医療費控除対象になります。領収書は必ず5年間保管しましょう。",
  },
];

const courses = [
  { name: "日帰り人間ドック（スタンダード）", type: "総合", rate: "3〜6万円", points: ["胃カメラ or バリウム選択", "血液・尿・心電図・胸部X線", "半日で終了・当日結果説明"], bestFor: "初めて人間ドックを受ける30代・40代。" },
  { name: "1泊2日 精密ドック", type: "総合", rate: "8〜15万円", points: ["上部・下部内視鏡も実施", "腹部エコー・MRI・CT付き", "管理栄養士の食事指導込み"], bestFor: "50代以降、家族にがん既往がある人。" },
  { name: "脳ドック", type: "専門", rate: "2〜5万円", points: ["頭部MRI・MRA", "脳動脈瘤・脳梗塞の早期発見", "所要時間1〜2時間"], bestFor: "40代以降、高血圧・喫煙習慣がある人。" },
  { name: "PET-CTがん検診", type: "専門", rate: "10〜15万円", points: ["全身のがん有無を一度に検査", "早期がん発見率が高い", "年1回の受診が推奨"], bestFor: "がん家系の方、50代以降の総点検希望者。" },
  { name: "レディースドック", type: "女性向け", rate: "4〜8万円", points: ["乳がん・子宮頸がん検査", "婦人科医師による診察", "女性技師対応の施設も多い"], bestFor: "30代以降の女性、妊活前チェックにも。" },
];

export default function MedicalCheckupComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "人間ドック・健康診断比較", url: `${siteConfig.url}/guide/medical-checkup-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】人間ドック・健康診断比較おすすめ5選｜料金・検査項目・受診方法を徹底解説" description="人間ドック・脳ドック・PET検査・基本健診など主要コースを料金・検査項目・所要時間で徹底比較。" url={`${siteConfig.url}/guide/medical-checkup-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>人間ドック・健康診断比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】人間ドック・健康診断比較おすすめ5選｜料金・検査項目・受診方法を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          病気の早期発見は医療費と時間の節約につながります。会社の健診だけで安心していると見落としがちな胃・大腸・脳・がん検診を、目的別にどう組み合わせるかを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">初めて受ける30代 → 日帰り人間ドック</span></p>
          <p><span className="font-bold">50代以降の総点検 → 1泊2日精密ドック</span></p>
          <p><span className="font-bold">がん家系 → PET-CT検診</span></p>
          <p><span className="font-bold">女性・妊活前 → レディースドック</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">健診・人間ドック選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          会社員の定期健診は法定項目のみなので、胃・大腸・脳・婦人科系は自腹で補完する必要があります。自営業・フリーランスの方は自治体の特定健診（40歳以上）を受けつつ、2年に1回は人間ドックでの精密検査を推奨。健保組合加入者はほとんどの場合、人間ドック費用の7〜9割を補助してくれる制度があり、実質自己負担1〜2万円で受けられます。予約は3〜6ヶ月前から埋まるので、年明けと年度末は特に早めの予約が鉄則です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ健診コース5種の詳細</h2>
        <div className="space-y-6">
          {courses.map((c, idx) => (
            <div key={c.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{c.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考費用：{c.rate}</p>
              <ul className="space-y-1 mb-4">
                {c.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{c.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の一般的な相場です。実際の料金は各医療機関で異なります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">賢い受診の進め方</h2>
        <p className="text-muted leading-relaxed mb-4">
          まず加入している健康保険組合のマイページで補助額と提携施設リストを確認しましょう。協会けんぽなら生活習慣病予防健診が年1回約7,000円で受けられ、プラス数千円で乳がん・子宮がん検診も追加できます。会社員は人間ドック休暇制度を活用し、自営業・副業の方は医療費や診断結果を家計簿アプリやメモで一元管理しておくと翌年の申告も楽です。
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
            健診は「目的別に組み合わせる」のが正解。会社の定期健診＋2年に1回の人間ドック＋年代に応じた専門ドックが基本形です。健保補助を最大限活用すれば自己負担は大きく抑えられ、早期発見による医療費節約効果も絶大。予約と記録管理を習慣化しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">健診後にあわせて確認したいガイド・ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">検査後のフォローアップに</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">医療保険の見直し</p>
          </Link>
          <Link href="/tools/blood-pressure" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">血圧チェックツール</span>
            <p className="text-xs text-muted mt-1">健診結果の血圧目安を確認</p>
          </Link>
          <Link href="/tools/bmi-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">BMI計算ツール</span>
            <p className="text-xs text-muted mt-1">体重管理の目安をすぐに計算</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">検査後のフォローアップに</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">医療保険の見直し</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
