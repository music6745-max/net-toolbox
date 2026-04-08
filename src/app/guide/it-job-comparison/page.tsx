import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】IT・エンジニア転職サイト比較5選｜求人数・年収・サポート徹底解説",
  description:
    "レバテックキャリア・マイナビIT・type・Green・paizaなどIT・エンジニア特化の転職サービスを求人数・年収水準・サポート体制で徹底比較。未経験から年収800万円以上のハイクラスまで解説。",
  alternates: { canonical: `${siteConfig.url}/guide/it-job-comparison` },
};

const faqItems = [
  { question: "未経験でもIT転職できますか？", answer: "可能ですが年齢とポテンシャルが重要です。20代なら未経験歓迎の求人が豊富ですが、30代以降は独学・スクール経験・ポートフォリオが必須になります。Greenやpaizaは実力主義のためスキルテスト結果で勝負できます。" },
  { question: "エージェントとスカウト型サイトどちらがよいですか？", answer: "現職が忙しい人はスカウト型（Green、ビズリーチ、paiza）、キャリア相談や書類添削を受けたい人はエージェント型（レバテックキャリア、マイナビIT）が向いています。併用が最も効率的です。" },
  { question: "フリーランスエンジニアへの転向相談もできますか？", answer: "レバテックはレバテックフリーランスという姉妹サービスがあり、正社員とフリーランスの両軸で相談可能です。案件単価相場を把握したうえで交渉できるのが強みです。" },
  { question: "年収を上げるコツは？", answer: "市場価値の高いスキル（クラウド、モダンフレームワーク、英語）を身につけ、複数エージェント同時進行で競わせるのが定番です。現職の年収を正確に伝え、現年収より2割高い希望を最初から提示しましょう。" },
];

const services = [
  { name: "レバテックキャリア", type: "エージェント", feature: "IT・Web特化の最大手", points: ["IT・Web業界特化で求人15万件超", "年収600万円以上の案件が豊富", "キャリアアドバイザーが技術に精通"], bestFor: "経験3年以上のエンジニアで年収アップを狙う人。" },
  { name: "マイナビIT AGENT", type: "エージェント", feature: "大手総合エージェントのIT版", points: ["大手・優良企業の独占求人多数", "20代〜30代前半に強い", "書類添削・面接対策が丁寧"], bestFor: "初めての転職で手厚いサポートが欲しい若手。" },
  { name: "type転職エージェント", type: "エージェント", feature: "一都三県の正社員求人に強い", points: ["首都圏のIT・Web案件が豊富", "年収交渉代行に定評", "営業・管理部門の求人も併せ持つ"], bestFor: "首都圏で着実にキャリアを積みたい人。" },
  { name: "Green", type: "ダイレクトリクルーティング", feature: "ベンチャー・スタートアップの宝庫", points: ["企業から直接スカウトが届く", "カジュアル面談から気軽に応募可能", "Web系ベンチャー求人が多数"], bestFor: "自分のペースで転職活動したい現役エンジニア。" },
  { name: "paizaキャリア", type: "スキルマッチ型", feature: "コーディングテスト結果で応募", points: ["スキルランクで書類選考免除", "未経験〜上級まで幅広く対応", "プログラミング学習コンテンツ付き"], bestFor: "実力に自信がある、または伸ばしたい人。" },
];

export default function ITJobComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "IT転職比較", url: `${siteConfig.url}/guide/it-job-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】IT・エンジニア転職サイト比較5選｜求人数・年収・サポート徹底解説" description="レバテックキャリア・マイナビIT・type・Green・paizaなどIT・エンジニア特化の転職サービスを徹底比較。" url={`${siteConfig.url}/guide/it-job-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>IT・エンジニア転職比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】IT・エンジニア転職サイト比較5選｜求人数・年収・サポート徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          IT人材の需要は2026年も過去最高水準を維持しています。単純な求人数だけでなく、自分のキャリアフェーズと働き方に合った転職サービスを選ぶことが、年収アップと理想のキャリア実現の最短ルートです。本記事では主要5サービスを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">経験者で年収アップ → レバテックキャリア</span></p>
          <p><span className="font-bold">丁寧なサポート重視 → マイナビIT AGENT</span></p>
          <p><span className="font-bold">ベンチャー志向 → Green</span></p>
          <p><span className="font-bold">実力勝負 → paizaキャリア</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">IT転職市場の現状</h2>
        <p className="text-muted leading-relaxed mb-4">
          経済産業省の試算ではIT人材は2030年に最大79万人不足するとされ、特にクラウド・AI・セキュリティ領域の経験者は引く手あまたです。リモートワーク案件も定着し、地方在住でも首都圏の企業で高年収を得るチャンスが広がっています。一方で、未経験からの転職は年齢が上がるほど厳しくなるため、20代のうちに動くか、明確なポートフォリオを用意することが重要です。
        </p>
        <p className="text-muted leading-relaxed">
          転職成功のコツは「複数サービスの併用」です。エージェント1社で2〜3ヶ月待つよりも、エージェント2社＋スカウト型2社を並行利用した方が情報量と選択肢が圧倒的に増えます。内定獲得率も体感3倍近く変わります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめIT転職サービス5選の詳細</h2>
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
        <h2 className="text-2xl font-bold mb-4">IT転職成功のステップ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted leading-relaxed">
          <p><span className="font-bold text-foreground">1. 市場価値の棚卸し：</span> 使用言語・担当フェーズ・マネジメント経験を書き出し、現在の年収相場を把握します。</p>
          <p><span className="font-bold text-foreground">2. 複数サービスに登録：</span> エージェント2社＋スカウト型2社で面談枠を確保します。</p>
          <p><span className="font-bold text-foreground">3. 職務経歴書をGitHub風に：</span> 成果を数値で記述し、使用技術スタックを明記します。</p>
          <p><span className="font-bold text-foreground">4. 面接で逆質問を準備：</span> 開発環境・チーム構成・レビュー文化を必ず確認します。</p>
          <p><span className="font-bold text-foreground">5. 内定は複数取ってから決める：</span> 1社目の内定承諾期限前に最低2社の内定を揃えて交渉材料にします。</p>
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
            IT・エンジニア転職は売り手市場ですが、サービス選びで結果は大きく変わります。経験者はレバテックキャリアで年収相場を把握しつつGreenで企業の生の声に触れる、若手はマイナビIT AGENTで丁寧にサポートを受ける、というように組み合わせ戦略が最適解です。複数登録は無料なので、まずは気軽に面談を受けてみましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">おすすめIT転職サービスに申し込む</h2>
        <ComparisonTableCTA
          services={[
            { name: "doda", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "IT求人も豊富な総合エージェント", price: "無料", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "転職後のフリーランス会計にも", price: "月額制" },
            { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "副業収入の管理に", price: "月額制" },
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
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">未経験からの学習ルート</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
