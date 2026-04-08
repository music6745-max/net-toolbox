import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】プロテイン・サプリメント比較おすすめ5選｜成分・コスパ・安全性を徹底解説",
  description:
    "プロテイン・マルチビタミン・EAA・クレアチンなど人気サプリメントを成分・コスパ・製造品質で徹底比較。初心者にも選びやすい5ブランドを紹介します。",
  alternates: { canonical: `${siteConfig.url}/guide/supplement-comparison` },
};

const faqItems = [
  {
    question: "プロテインは毎日飲んでもいいですか？",
    answer:
      "タンパク質の摂取量が不足している人にとっては毎日でも問題ありません。ただし腎機能に不安がある方は医師に相談しましょう。成人の1日必要量は体重1kgあたり1.0〜1.6g程度が目安です。",
  },
  {
    question: "ホエイ・カゼイン・ソイの違いは？",
    answer:
      "ホエイは吸収が早くトレーニング後に最適、カゼインはゆっくり吸収され就寝前に向き、ソイは植物性で乳糖不耐症の人にも安心です。目的別に使い分けるのがおすすめです。",
  },
  {
    question: "マルチビタミンは必要ですか？",
    answer:
      "食事バランスが乱れがちな現代人には保険として有効です。特に野菜不足・外食中心の人は検討価値があります。ただし過剰摂取は避け、用法を守って摂取しましょう。",
  },
  {
    question: "海外製と国内製どちらが安全ですか？",
    answer:
      "国内製はGMP認証・添加物規制が厳しく品質が安定しています。海外製は成分量が多くコスパが良い反面、アレルゲンや表示規制の違いに注意が必要です。",
  },
];

const products = [
  { name: "マイプロテイン", type: "プロテイン/EAA", price: "1kg 2,990円〜", points: ["業界最安値クラス", "フレーバー豊富", "世界110か国で販売"], bestFor: "コスパ最優先で続けたい人。" },
  { name: "ザバス", type: "プロテイン", price: "1kg 4,500円前後", points: ["明治製でGMP認証", "国内製造で安心", "コンビニでも購入可能"], bestFor: "品質と入手性を重視する人。" },
  { name: "ビーレジェンド", type: "プロテイン", price: "1kg 3,980円〜", points: ["国内メーカーで低価格", "ユニークなフレーバー", "初心者向けお試しサイズあり"], bestFor: "国産でコスパ重視の人。" },
  { name: "DHC マルチビタミン", type: "マルチビタミン", price: "30日分 370円", points: ["ドラッグストアで手軽に購入", "低価格で継続しやすい", "GMP認証工場で製造"], bestFor: "毎日の栄養補給を手軽にしたい人。" },
  { name: "NOW Foods", type: "総合サプリメント", price: "1,500円〜", points: ["米国大手ブランド", "高純度・低添加物", "種類が非常に豊富"], bestFor: "成分量を重視する人。" },
];

export default function SupplementComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "サプリメント比較", url: `${siteConfig.url}/guide/supplement-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】プロテイン・サプリメント比較おすすめ5選" description="プロテイン・マルチビタミン・EAA・クレアチンなど人気サプリメントを成分・コスパ・製造品質で徹底比較。" url={`${siteConfig.url}/guide/supplement-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>サプリメント比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】プロテイン・サプリメント比較おすすめ5選｜成分・コスパ・安全性を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          筋トレブーム・健康志向の高まりで、プロテインやサプリメントの市場は年々拡大しています。本記事では人気の5ブランドを成分・コスパ・製造品質の3軸で徹底比較し、初心者にも選びやすい1品を見つけるポイントを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">コスパ最優先 → マイプロテイン</span></p>
          <p><span className="font-bold">国内ブランド安心 → ザバス / ビーレジェンド</span></p>
          <p><span className="font-bold">マルチビタミン → DHC</span></p>
          <p><span className="font-bold">高純度サプリ → NOW Foods</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">サプリメント選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          サプリメントは「どんな目的で何を補いたいか」を明確にするところから始まります。筋トレで筋肉量を増やしたい人はホエイプロテインとクレアチン、ダイエット中の人は低脂質なソイプロテインやEAA、健康維持が目的ならマルチビタミンやオメガ3が基本の選択肢です。製造品質ではGMP認証・第三者検査の有無・添加物の種類をチェックしましょう。特に海外ブランドは日本より成分量が多いケースが多い一方で、人工甘味料や着色料の種類が異なるため、体質に合うかどうかを少量から試すのが賢明です。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          コスパで見ると、マイプロテインのような海外直販ブランドが圧倒的に安く、1kgあたり2,990円〜と国内製品の約半額で購入できます。ただし、関税・送料・為替の影響で価格は変動するため、セール時期を狙うのが鉄則。一方で国内ブランドのザバスやビーレジェンドは品質が安定し、コンビニやドラッグストアで気軽に買える利便性があります。続けやすさを考えると、味・溶けやすさ・パッケージの使い勝手も見逃せない要素です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめサプリメント5選の詳細</h2>
        <div className="space-y-6">
          {products.map((p, idx) => (
            <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{p.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{p.price}</p>
              <ul className="space-y-1 mb-4">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{p.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新価格は各ブランドの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">サプリ摂取のコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">食事ベースが基本：</span>サプリは不足分を補うもの。食事を疎かにしない。</li>
            <li>&#9675; <span className="font-bold text-foreground">タイミング：</span>プロテインはトレーニング後30分以内、ビタミンは食後がベスト。</li>
            <li>&#9675; <span className="font-bold text-foreground">過剰摂取注意：</span>脂溶性ビタミン（A・D・E・K）は蓄積されるため上限量に注意。</li>
            <li>&#9675; <span className="font-bold text-foreground">薬との相互作用：</span>常用薬がある場合は医師・薬剤師に相談してから開始。</li>
          </ul>
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
            プロテイン・サプリ選びは「目的・品質・コスパ」の3点で決まります。筋トレ初心者はまずホエイプロテインから始め、健康維持目的ならマルチビタミンを加えるのが王道です。継続が最も重要なので、味と価格で続けやすい製品を選びましょう。家計管理には会計ソフトの活用がおすすめです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告・経理の定番ソフト", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/fitness-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">フィットネスアプリ比較</span>
            <p className="text-xs text-muted mt-1">トレーニング管理に</p>
          </Link>
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">本格的なボディメイクに</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
