import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】管理職・エグゼクティブ転職比較5選｜年収1000万以上のハイクラス求人",
  description:
    "ビズリーチ・JAC Recruitment・リクルートダイレクトスカウト・dodaX・エンワールドなど管理職・エグゼクティブ向け転職サービスを年収・ヘッドハンター・外資対応で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/executive-job-comparison` },
};

const faqItems = [
  { question: "年収1000万円以上の求人は本当にありますか？", answer: "ビズリーチやJAC Recruitmentには年収1000万〜3000万円クラスの求人が多数あります。経営幹部、CxO、部長職、外資系マネージャーなどがメイン層です。" },
  { question: "ハイクラス転職は時間がかかりますか？", answer: "一般求人より選考プロセスが長く、面接回数も3〜6回が通常です。内定までは通常3〜6ヶ月を見込んでください。現職を続けながらじっくり進めるのが鉄則です。" },
  { question: "ヘッドハンター型とエージェント型の違いは？", answer: "ヘッドハンター型（ビズリーチ、リクルートダイレクトスカウト）は登録情報を基にスカウトが届く受動型。エージェント型（JAC、エンワールド）は担当者と面談し能動的に求人紹介を受けます。両方併用が理想です。" },
  { question: "外資系に強いサービスは？", answer: "エンワールドとJAC Recruitmentが外資系に強みを持ちます。英文レジュメの添削や英語面接対策も可能で、バイリンガル人材のハイクラス求人が豊富です。" },
];

const services = [
  { name: "ビズリーチ", type: "スカウト型", feature: "ハイクラス転職の代名詞", points: ["登録するだけでスカウト多数", "年収1000万円以上求人の宝庫", "ヘッドハンターの質が高い"], bestFor: "現職を続けながら良い話を待ちたい経営幹部・管理職。" },
  { name: "JAC Recruitment", type: "両面型エージェント", feature: "外資・ハイクラスに特化", points: ["コンサルタントが業界に精通", "外資系・グローバル企業に強い", "ミドル〜シニア層の実績豊富"], bestFor: "40代以上で専門性を活かしたい管理職。" },
  { name: "リクルートダイレクトスカウト", type: "スカウト型", feature: "リクルート運営の安心感", points: ["年収800万〜2000万円の求人", "完全無料で利用可能", "ヘッドハンター3000名以上"], bestFor: "幅広い選択肢から検討したいハイクラス層。" },
  { name: "dodaX", type: "スカウト型", feature: "dodaのハイクラス版", points: ["ヘッドハンター型と求人公開型の融合", "非公開求人が豊富", "スカウト精度が高い"], bestFor: "dodaユーザーからのステップアップ。" },
  { name: "エンワールド", type: "外資特化エージェント", feature: "グローバル人材の転職に強い", points: ["外資系・日系グローバル企業中心", "英文レジュメ対策が手厚い", "入社後サポートが充実"], bestFor: "外資系で働きたいバイリンガル管理職。" },
];

export default function ExecutiveJobComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "エグゼクティブ転職比較", url: `${siteConfig.url}/guide/executive-job-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】管理職・エグゼクティブ転職比較5選" description="管理職・エグゼクティブ向け転職サービスを徹底比較。" url={`${siteConfig.url}/guide/executive-job-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>エグゼクティブ転職比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】管理職・エグゼクティブ転職比較5選｜年収1000万以上のハイクラス求人
        </h1>
        <p className="text-muted leading-relaxed">
          部長・役員・CxO・外資マネージャークラスの転職は、一般求人サイトとは全く異なるルートを使うのが鉄則です。ヘッドハンターとの信頼関係、非公開求人の質、選考プロセスの支援体制で勝負が決まります。本記事では主要5サービスを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">スカウト待ち型 → ビズリーチ</span></p>
          <p><span className="font-bold">外資・シニア層 → JAC Recruitment</span></p>
          <p><span className="font-bold">幅広く情報収集 → リクルートダイレクトスカウト</span></p>
          <p><span className="font-bold">バイリンガル → エンワールド</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">エグゼクティブ転職市場の特徴</h2>
        <p className="text-muted leading-relaxed mb-4">
          ハイクラス転職市場はコロナ以降活況が続いており、特にDX推進・経営企画・CFO・CTOなどの求人が急増しています。日本企業の人材流動化が進み、外部から幹部人材を招く経営判断が一般化しました。年収1500万〜3000万円クラスの案件もめずらしくありません。
        </p>
        <p className="text-muted leading-relaxed">
          ハイクラス転職の特徴は「非公開求人が9割」という点です。公開求人は表の情報にすぎず、本当の好条件求人はヘッドハンターやエージェントの内部で共有されています。複数のサービスに登録し、信頼できるヘッドハンターを2〜3名確保することが成功の近道です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめエグゼクティブ転職サービス5選</h2>
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
        <h2 className="text-2xl font-bold mb-4">ハイクラス転職成功のコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted leading-relaxed">
          <p><span className="font-bold text-foreground">1. 職務経歴書を経営者視点で：</span> 売上・コスト・人員規模など数値での実績を明記。</p>
          <p><span className="font-bold text-foreground">2. 複数スカウト型に登録：</span> ビズリーチ＋リクルートダイレクトスカウトで情報量を最大化。</p>
          <p><span className="font-bold text-foreground">3. ヘッドハンター選び：</span> 業界専門性と提案力のあるヘッドハンターを見極める。</p>
          <p><span className="font-bold text-foreground">4. 現職は守秘義務を厳守：</span> 情報漏洩リスクを避けるためSNSや発言に注意。</p>
          <p><span className="font-bold text-foreground">5. リファレンスチェック対策：</span> 信頼できる前職上司・同僚に事前相談を。</p>
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
            エグゼクティブ転職は情報戦かつ長期戦です。スカウト型2社＋エージェント型1〜2社で体制を整え、半年〜1年スパンでじっくり動くのが成功パターン。現職のパフォーマンスを落とさず、水面下で準備することが何より大切です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">経営・資産管理ツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "個人資産の管理にも", price: "月額制" },
            { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "役員報酬・配当管理", price: "月額制" },
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
          <Link href="/guide/business-card-platinum" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プラチナカード比較</span>
            <p className="text-xs text-muted mt-1">ハイクラスのステータス</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
