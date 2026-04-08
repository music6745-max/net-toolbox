import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】眼科クリニック比較おすすめ5選｜レーシック・コンタクト処方を徹底解説",
  description:
    "レーシック・ICL・オルソケラトロジー・コンタクト処方を扱う主要眼科クリニックを料金・症例数・保証期間で徹底比較。視力矯正手術の選び方を詳しく解説。",
  alternates: { canonical: `${siteConfig.url}/guide/eye-clinic-comparison` },
};

const faqItems = [
  {
    question: "レーシックとICLはどちらがいいですか？",
    answer:
      "強度近視・角膜が薄い方はICL、軽度〜中度近視はレーシックが一般的です。ICLは可逆性が高く将来取り外せる点がメリットですが、費用はレーシックの2倍程度になります。",
  },
  {
    question: "視力矯正手術の費用相場は？",
    answer:
      "レーシック両眼で15万〜35万円、ICL両眼で45万〜70万円が相場です。医療費控除の対象で、所得税が戻る可能性があります。",
  },
  {
    question: "術後の視力は一生持続しますか？",
    answer:
      "レーシックは加齢による老眼や再近視化が起こることがあります。ICLは眼内に入るため長期安定性が高いですが、加齢性の視力低下は防げません。",
  },
  {
    question: "コンタクトレンズの処方は保険が効きますか？",
    answer:
      "検査料・診察料は基本的に保険適用です。ただし定期検診を怠ると保険適用外となるクリニックもあるため、通院スケジュールに注意しましょう。",
  },
];

const clinics = [
  { name: "品川近視クリニック", type: "レーシック/ICL", price: "レーシック15万円〜", points: ["国内最大級の症例数", "20年以上の実績", "術後ケア充実"], bestFor: "実績重視で安心して受けたい人。" },
  { name: "新宿近視クリニック", type: "レーシック/ICL", price: "レーシック20万円〜", points: ["都内駅近の通いやすさ", "最新機器導入", "分割払い対応"], bestFor: "都心で仕事帰りに通いたい人。" },
  { name: "SBC眼科（湘南美容）", type: "ICL中心", price: "ICL45万円〜", points: ["全国展開で通いやすい", "LINE予約対応", "会員割引あり"], bestFor: "全国どこからでも通いたい人。" },
  { name: "神戸神奈川アイクリニック", type: "レーシック/ICL", price: "レーシック18万円〜", points: ["関西最大規模", "万全の保証制度", "症例実績豊富"], bestFor: "関西在住でしっかり相談したい人。" },
  { name: "先進会眼科", type: "ICL専門", price: "ICL55万円〜", points: ["ICL症例数豊富", "眼内レンズ専門医在籍", "術後フォロー無料"], bestFor: "ICLを確実に受けたい人。" },
];

export default function EyeClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "眼科クリニック比較", url: `${siteConfig.url}/guide/eye-clinic-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】眼科クリニック比較おすすめ5選｜レーシック・コンタクト処方を徹底解説" description="レーシック・ICL・オルソケラトロジー・コンタクト処方を扱う主要眼科クリニックを料金・症例数・保証期間で徹底比較。" url={`${siteConfig.url}/guide/eye-clinic-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>眼科クリニック比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】眼科クリニック比較おすすめ5選｜レーシック・コンタクト処方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          視力矯正手術・コンタクトレンズ処方を扱う主要眼科クリニックを、症例数・料金・保証制度の観点で徹底比較。2026年の最新トレンドと、後悔しないクリニック選びのコツを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">実績重視 → 品川近視クリニック</span></p>
          <p><span className="font-bold">都心で通いやすさ重視 → 新宿近視クリニック</span></p>
          <p><span className="font-bold">ICL専門性重視 → 先進会眼科</span></p>
          <p><span className="font-bold">関西エリア → 神戸神奈川アイクリニック</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">視力矯正手術の種類と特徴</h2>
        <p className="text-muted leading-relaxed mb-4">
          視力矯正手術は大きくレーシックとICL（眼内コンタクトレンズ）に分かれます。レーシックは角膜をレーザーで削って屈折を調整する方法で、費用が比較的安く、手術時間も片眼10分程度と短いのが特徴です。一方ICLは眼内にレンズを挿入する方法で、角膜を削らないため可逆性があり、将来レンズを取り出すことができます。近視が強い人や角膜が薄い人はレーシックが適応外となるため、ICLが主な選択肢になります。料金はICLの方がレーシックの約2倍で、両眼で45万〜70万円が相場です。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          どちらも日帰り手術で、術後の痛みは麻酔と鎮痛剤でほぼコントロールできます。翌日から日常生活に戻れますが、1週間程度は激しい運動や洗顔時の目への水接触を避ける必要があります。術後の定期検診は3か月・半年・1年と続き、これらも料金に含まれているかをクリニックごとに確認しましょう。格安クリニックでは検診費が別途かかる場合もあります。また、視力矯正手術は医療費控除の対象になるため、確定申告で所得税が一部戻ります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ眼科クリニック5院の詳細</h2>
        <div className="space-y-6">
          {clinics.map((c, idx) => (
            <div key={c.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{c.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{c.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新の適用料金は各クリニックの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">クリニック選びのチェックポイント</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">年間症例数：</span>医師個人で500件以上が目安。</li>
            <li>&#9675; <span className="font-bold text-foreground">保証期間：</span>レーシック5〜10年、ICL生涯保証がベスト。</li>
            <li>&#9675; <span className="font-bold text-foreground">適応検査の丁寧さ：</span>安易に適応と判定するクリニックは避ける。</li>
            <li>&#9675; <span className="font-bold text-foreground">使用機器：</span>最新フェムトセカンドレーザーや最新型ICLレンズを採用しているか。</li>
            <li>&#9675; <span className="font-bold text-foreground">料金の総額表示：</span>検診・薬代を含めた総額で比較。</li>
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
            眼科クリニック選びは「症例数・保証・総額」の3軸で判断するのが基本です。医療費控除を使えば実質負担を大きく減らせるため、治療費の領収書は必ず保管して確定申告を行いましょう。無料の適応検査は複数院で受けて比較するのが鉄則です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">医療費控除の確定申告に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告・医療費控除に対応", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/lasik-ico-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">レーシック・ICL比較</span>
            <p className="text-xs text-muted mt-1">視力矯正手術の詳細比較</p>
          </Link>
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">インプラント・矯正歯科</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
