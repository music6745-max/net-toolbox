import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】スポーツクラブ・スイミングスクール比較おすすめ5選｜料金・設備・プログラムを徹底解説",
  description:
    "コナミ・セントラル・ティップネス・ルネサンス・メガロスなど総合スポーツクラブを料金・プール・プログラムで徹底比較。子ども向けスイミングスクールの選び方も解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/sport-club-comparison` },
};

const faqItems = [
  { question: "総合スポーツクラブと24時間ジムの違いは？", answer: "総合型はプール・スタジオ・サウナ・キッズスクールまで揃い月会費1万円前後、24時間ジムはマシン中心で月7,000円前後。プログラムやプール目当てなら総合型、筋トレ特化なら24時間ジムが向いています。" },
  { question: "子どものスイミングスクール費用は？", answer: "週1回で月6,000〜8,500円、年会費・スクールバス代・進級テスト代が別途かかるクラブもあります。兄弟割引や体験入会特典を活用しましょう。" },
  { question: "入会金無料キャンペーンはいつ？", answer: "3月・9月の新生活シーズンと、7月の夏キャンペーンが狙い目です。Web申込限定で月会費半額などの特典もあります。" },
  { question: "長期的に続けるコツは？", answer: "自宅・会社から片道20分以内の施設を選ぶのが鉄則です。無理なスケジュールは続かないため、週2〜3回の通いやすさを優先しましょう。" },
];

const clubs = [
  { name: "コナミスポーツクラブ", type: "総合", rate: "月9,900円〜", points: ["全国300店舗の相互利用", "キッズスイミングに強み", "法人会員制度あり"], bestFor: "家族で利用したい・出張先でも通いたい人。" },
  { name: "セントラルスポーツ", type: "総合", rate: "月10,450円〜", points: ["プール・スタジオが充実", "水泳選手育成プログラム", "シニア向けクラスも豊富"], bestFor: "本格的に水泳を学びたい人、子供の習い事にも。" },
  { name: "ティップネス", type: "総合", rate: "月9,680円〜", points: ["暗闇系スタジオで話題", "月4回プランあり", "24時間店舗も併設"], bestFor: "スタジオレッスン重視の20〜40代。" },
  { name: "ルネサンス", type: "総合", rate: "月10,890円〜", points: ["温浴施設が充実", "ヨガ・ピラティスも", "シニア健康増進プログラム"], bestFor: "運動後のリラクゼーションも楽しみたい人。" },
  { name: "メガロス", type: "総合", rate: "月9,680円〜", points: ["ホットヨガスタジオ併設", "法人福利厚生対応多数", "LAVA系列"], bestFor: "ヨガ・ホットヨガを中心にしたい人。" },
];

export default function SportClubComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "スポーツクラブ・スイミングスクール比較", url: `${siteConfig.url}/guide/sport-club-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】スポーツクラブ・スイミングスクール比較おすすめ5選｜料金・設備・プログラムを徹底解説" description="コナミ・セントラル・ティップネスなど総合スポーツクラブを料金・プール・プログラムで徹底比較。" url={`${siteConfig.url}/guide/sport-club-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>スポーツクラブ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】スポーツクラブ・スイミングスクール比較おすすめ5選｜料金・設備・プログラムを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          プール・スタジオ・マシンジムが揃う総合スポーツクラブは、家族全員の運動拠点になります。入会金・月会費・相互利用制度・キッズスイミングの質を比較して、通いやすい一軒を選びましょう。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">家族利用・出張多 → コナミスポーツクラブ</span></p>
          <p><span className="font-bold">水泳を本格的に → セントラルスポーツ</span></p>
          <p><span className="font-bold">スタジオ重視 → ティップネス</span></p>
          <p><span className="font-bold">ヨガ中心 → メガロス</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">スポーツクラブ選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          総合スポーツクラブは「プール・マシンジム・スタジオ・お風呂」が1施設に揃うのが魅力です。月会費は9,000〜12,000円が相場で、回数制プラン・時間帯限定プランを使えば5,000〜7,000円まで下げられます。キッズスイミングは週1回で月6,000〜8,500円、送迎バスや進級テストの頻度もクラブによって差があります。最重要は立地：片道20分以内の施設を選ぶのが継続のコツです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめスポーツクラブ5社の詳細</h2>
        <div className="space-y-6">
          {clubs.map((c, idx) => (
            <div key={c.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{c.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考月会費：{c.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。実際の料金は店舗によって異なります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">入会の裏ワザと継続のコツ</h2>
        <p className="text-muted leading-relaxed mb-4">
          入会金無料キャンペーンは3月・9月と7月が狙い目。法人会員制度や福利厚生サービス（リロクラブ・ベネフィットステーション）経由で入会すると個人契約より月1,000〜3,000円安くなるケースもあります。会費は固定費として把握し、利用頻度が月4回を切るようなら会員種別の見直しや退会も検討しましょう。
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
            スポーツクラブは「立地×設備×月会費」のバランスで選びましょう。家族全員で使うなら相互利用可の全国チェーン、水泳を本格的に習うなら指導実績のあるクラブ、スタジオレッスン中心ならプログラム数の多い施設が正解です。継続利用のために、利用頻度と運動量を定期的に見直しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">会費と運動習慣の見直しに役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/exercise-calorie-burn" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">運動消費カロリー計算</span>
            <p className="text-xs text-muted mt-1">運動量の目安を数値化</p>
          </Link>
          <Link href="/tools/calorie-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">基礎代謝計算</span>
            <p className="text-xs text-muted mt-1">毎日の消費カロリー確認に</p>
          </Link>
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">クラブ外の習慣化も支援</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">短期集中で結果を出すなら</p>
          </Link>
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス比較</span>
            <p className="text-xs text-muted mt-1">自宅派はこちら</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
