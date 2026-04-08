import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】教員転職サイト比較5選｜公立・私立・塾講師の求人徹底解説",
  description:
    "教員人材センター・イーキャリア・マイナビ教員・教育人材バンク・Education Careerなど教員・教師特化の転職サービスを徹底比較。公立から私立、塾、教育系企業への転身ルートを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/teacher-job-comparison` },
};

const faqItems = [
  { question: "公立教員から私立教員への転職は可能ですか？", answer: "可能です。私立学校は独自採用のため年度途中でも募集があります。教員人材センターや教育人材バンクは私立学校の非公開求人を多数保有しています。" },
  { question: "教員免許がなくても教育業界で働けますか？", answer: "塾講師、教育系企業、EdTechスタートアップ、通信教育などは教員免許不要の求人が豊富です。Education CareerやマイナビなどのIT系にも多く掲載されています。" },
  { question: "40代以降の教員転職は厳しいですか？", answer: "学校現場では経験が評価されやすく、ベテラン層の需要もあります。特に私立の進学校は指導力のある中堅〜ベテラン教員を歓迎します。塾業界はやや若手志向です。" },
  { question: "転職活動はいつ始めるべき？", answer: "私立学校は秋〜冬に採用活動が本格化します。塾や企業は通年採用が基本です。公立→私立の場合は9月頃から情報収集を始め、12月〜2月の内定時期に間に合わせるのが定石です。" },
];

const services = [
  { name: "教員人材センター", type: "教員特化型", feature: "私立学校専門のエージェント", points: ["私立学校の非公開求人多数", "40年以上の実績", "年度途中の採用にも対応"], bestFor: "公立から私立への転職を狙う教員。" },
  { name: "イーキャリア教員", type: "総合型", feature: "全国の教員求人を網羅", points: ["公立・私立・塾まで幅広い", "条件検索が充実", "スカウト機能あり"], bestFor: "選択肢を広く検討したい人。" },
  { name: "マイナビ教員", type: "総合型", feature: "大手ならではの安心感", points: ["学校と教育企業の両方", "キャリア相談に強い", "面接対策が丁寧"], bestFor: "教育業界全般で転職を考える人。" },
  { name: "教育人材バンク", type: "教員特化型", feature: "私立学校の老舗紹介", points: ["首都圏の私立に強い", "非公開求人の質が高い", "長年の学校人事との信頼関係"], bestFor: "首都圏で私立教員を目指す人。" },
  { name: "Education Career", type: "EdTech特化", feature: "教育系企業・EdTechに特化", points: ["EdTechスタートアップに強い", "年収アップ事例多数", "教員免許不問の求人も豊富"], bestFor: "教員からEdTech・教育系企業に転身したい人。" },
];

export default function TeacherJobComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "教員転職比較", url: `${siteConfig.url}/guide/teacher-job-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】教員転職サイト比較5選" description="教員・教師特化の転職サービスを徹底比較。" url={`${siteConfig.url}/guide/teacher-job-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>教員転職比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】教員転職サイト比較5選｜公立・私立・塾講師の求人徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          教員の働き方改革が進む中、公立から私立への転職、塾・予備校、EdTech企業など教育業界内での転身ルートが広がっています。本記事では教員特化の主要5サービスを比較し、自分に合った選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">公立→私立 → 教員人材センター</span></p>
          <p><span className="font-bold">幅広い選択肢 → イーキャリア教員</span></p>
          <p><span className="font-bold">首都圏の私立 → 教育人材バンク</span></p>
          <p><span className="font-bold">教育系企業 → Education Career</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">教員転職市場の現状</h2>
        <p className="text-muted leading-relaxed mb-4">
          長時間労働や部活動指導の負担から、公立学校の教員離れが社会問題となっています。一方で私立学校・塾・EdTech企業では、経験ある教育者の採用ニーズが急拡大中です。転職によって残業時間が半減し、年収も維持または向上するケースは珍しくありません。
        </p>
        <p className="text-muted leading-relaxed">
          教育業界内での転職は一般企業の転職と比べて求人情報の非公開割合が高いのが特徴です。特に私立学校は公募枠が少なく、人材紹介会社経由の非公開求人が中心。複数のエージェントに登録してチャンスを広げましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ教員転職サービス5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
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
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">教員転職成功のポイント</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted leading-relaxed">
          <p><span className="font-bold text-foreground">1. 強みの言語化：</span> 学級経営・授業力・部活指導・生徒対応など数値や具体例で示す。</p>
          <p><span className="font-bold text-foreground">2. 模擬授業対策：</span> 私立学校の面接では模擬授業が必須。15分で完結する授業案を複数準備。</p>
          <p><span className="font-bold text-foreground">3. 教科以外のアピール：</span> ICT活用や英語指導など付加価値を伝える。</p>
          <p><span className="font-bold text-foreground">4. 退職タイミング：</span> 公立は年度末退職が基本。早めに校長に相談を。</p>
          <p><span className="font-bold text-foreground">5. 家族との合意：</span> 給与体系や勤務地が変わるため、事前に話し合いを。</p>
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
            教員転職は情報収集の質が成否を分けます。教員特化のエージェントを複数活用し、学校現場から教育系企業まで幅広く比較検討することで、自分の理想に近い働き方が見つかります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">副業・家計管理ツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "副業収入の管理に", price: "月額制" },
            { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "家計簿アプリ連携", price: "月額制" },
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告の定番", price: "年額制", badge: "定番" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">総合転職サービス比較</p>
          </Link>
          <Link href="/guide/tutoring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン家庭教師比較</span>
            <p className="text-xs text-muted mt-1">副業としての指導機会</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
