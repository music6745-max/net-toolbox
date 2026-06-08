import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】歯科クリニック比較おすすめ5選｜インプラント・矯正歯科を徹底解説",
  description:
    "インプラント・マウスピース矯正・ワイヤー矯正・ホワイトニングを提供する主要歯科クリニックを料金・症例数・保証で徹底比較。失敗しない歯科選びのポイントを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/dental-clinic-comparison` },
};

const faqItems = [
  {
    question: "インプラントの費用相場はいくらですか？",
    answer:
      "1本あたり30万〜50万円が相場です。骨造成やCT診断など追加処置が必要な場合はさらに10万〜20万円加算されます。医療費控除の対象になるため、確定申告で一定額が戻ります。",
  },
  {
    question: "マウスピース矯正とワイヤー矯正どちらがいいですか？",
    answer:
      "見た目や取り外しやすさを重視するならマウスピース、重度の歯列不正や抜歯が必要なケースならワイヤーが基本です。マウスピースは軽〜中度の症例に限られるため、事前診断で適応を確認しましょう。",
  },
  {
    question: "歯科クリニック選びで重視すべきポイントは？",
    answer:
      "症例数・医師の経歴・使用メーカー・保証制度・アフターケア体制の5点を比較しましょう。格安を謳うクリニックは追加費用やアフターケア不足のケースもあるため、総額での比較が重要です。",
  },
  {
    question: "治療費は医療費控除の対象になりますか？",
    answer:
      "インプラント・大人の矯正（咀嚼機能改善目的）・抜歯などは医療費控除の対象です。年間10万円超の医療費があれば、確定申告で所得税の還付が受けられます。美容目的のホワイトニングは対象外です。",
  },
];

const clinics = [
  { name: "ゴリラクリニック系列の歯科", type: "インプラント", price: "30万円〜/本", points: ["院内ラボで即日修復対応", "10年保証あり", "ガイドサージェリー採用で精度高"], bestFor: "短期間で確実に治療を終えたい人。" },
  { name: "Oh my teeth（オーマイティース）", type: "マウスピース矯正", price: "33万円〜", points: ["LINEで進捗管理できる", "通院回数が最小限", "部分矯正プランが豊富"], bestFor: "忙しくて通院回数を減らしたい人。" },
  { name: "ウィ・スマイル", type: "マウスピース矯正", price: "月額3,000円〜", points: ["月額制で始めやすい", "全国140院以上", "夜間・休日対応院多数"], bestFor: "初期費用を抑えたい人。" },
  { name: "スターホワイトニング", type: "ホワイトニング", price: "2,750円/回〜", points: ["都度払いで通える", "歯科医師監修", "短時間施術で効果実感"], bestFor: "結婚式・面接前など短期集中で白くしたい人。" },
  { name: "キレイライン矯正", type: "マウスピース矯正", price: "33万円〜", points: ["前歯特化で費用を抑制", "全国提携院で通いやすい", "治療期間も短め"], bestFor: "前歯だけ整えたい人。" },
];

export default function DentalClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "歯科クリニック比較", url: `${siteConfig.url}/guide/dental-clinic-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】歯科クリニック比較おすすめ5選｜インプラント・矯正歯科を徹底解説" description="インプラント・マウスピース矯正・ワイヤー矯正・ホワイトニングを提供する主要歯科クリニックを料金・症例数・保証で徹底比較。" url={`${siteConfig.url}/guide/dental-clinic-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>歯科クリニック比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】歯科クリニック比較おすすめ5選｜インプラント・矯正歯科を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          インプラント・矯正・ホワイトニングは、クリニック選びで費用と仕上がりが大きく変わる医療分野です。2026年時点で人気の主要クリニック5院を、料金・症例数・保証制度・アフターケアの観点で徹底比較。失敗しない選び方のポイントを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">インプラント → ゴリラクリニック系列</span></p>
          <p><span className="font-bold">通院少なめの矯正 → Oh my teeth</span></p>
          <p><span className="font-bold">月額で矯正 → ウィ・スマイル</span></p>
          <p><span className="font-bold">短期ホワイトニング → スターホワイトニング</span></p>
          <p><span className="font-bold">前歯だけ矯正 → キレイライン矯正</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">歯科クリニック選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          歯科治療は「医師の技術差」「使用材料のグレード」「保証体制」で結果に大きな差が出ます。同じインプラントでも国内外のメーカーによって耐久性や成功率が異なり、安いだけのクリニックは保証期間が短かったり、トラブル時の対応が不十分なケースがあります。カウンセリングは無料で受けられる院がほとんどなので、最低でも2〜3院で相談し、治療計画書の内容と総額見積もりを比較した上で決めましょう。特にインプラントや矯正は数十万円単位の自由診療になるため、分割払い・デンタルローン・医療費控除を活用して負担を抑えるのが賢い選択です。また、通いやすい立地かどうかも長期治療では重要な要素で、仕事帰りに寄れる駅近・夜間診療対応の院を選ぶと、通院の中断リスクを下げられます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          近年はマウスピース矯正の普及で矯正の心理的ハードルが大きく下がりました。LINEやアプリで進捗管理できるサービスも増え、通院回数が従来の半分以下になるケースもあります。一方で、重度の歯列不正や抜歯を伴うケースではワイヤー矯正が必要になるため、初診時の適応診断が非常に重要です。「マウスピースで治ると言われたのに結局ワイヤーに切り替えた」というトラブルを避けるには、複数院でセカンドオピニオンを受けるのが確実です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ歯科クリニック5院の詳細</h2>
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
        <h2 className="text-2xl font-bold mb-4">費用を抑えるコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">医療費控除：</span>年間10万円超（またはモニター価格適用外）の治療費は確定申告で還付。</li>
            <li>&#9675; <span className="font-bold text-foreground">デンタルローン：</span>金利3〜6%で分割払いが可能。クレジット分割より安価。</li>
            <li>&#9675; <span className="font-bold text-foreground">モニター制度：</span>症例撮影の協力で10〜30%割引されるクリニックも。</li>
            <li>&#9675; <span className="font-bold text-foreground">複数院カウンセリング：</span>無料カウンセリングで見積もりを比較するだけで数十万円の差が出ることも。</li>
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
            歯科クリニック選びは「症例数・保証・総額」の3点で決まります。インプラント・矯正は決して安い買い物ではないため、必ず複数院のカウンセリングを受け、治療計画と見積もりを見比べてから決断しましょう。支払った治療費は医療費控除で一部戻ってきますので、領収書は必ず保管し、確定申告ソフトで記録を残しておくと安心です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">治療費とあわせて確認したい歯科・美容ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/dental-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科保険比較</span>
            <p className="text-xs text-muted mt-1">将来の歯科治療費に備える保険選び</p>
          </Link>
          <Link href="/guide/whitening-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ホワイトニング比較</span>
            <p className="text-xs text-muted mt-1">歯の見た目を整える施術を比較</p>
          </Link>
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療を総合的に検討</p>
          </Link>
          <Link href="/guide/lasik-ico-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">レーシック・ICL比較</span>
            <p className="text-xs text-muted mt-1">視力矯正手術の選び方</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療を総合的に検討</p>
          </Link>
          <Link href="/guide/lasik-ico-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">レーシック・ICL比較</span>
            <p className="text-xs text-muted mt-1">視力矯正手術の選び方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
