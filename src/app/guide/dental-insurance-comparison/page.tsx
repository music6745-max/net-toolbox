import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】歯科保険比較おすすめ5選｜保障内容・保険料・選び方を徹底解説",
  description:
    "インプラント・矯正・セラミック治療まで保障される歯科保険を保険料・給付金・加入条件で徹底比較。公的保険でカバーされない自由診療の備え方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/dental-insurance-comparison` },
};

const faqItems = [
  {
    question: "歯科保険と医療保険の違いは？",
    answer:
      "一般の医療保険は歯科治療の給付が限定的ですが、歯科保険は虫歯・歯周病治療・インプラント・矯正・セラミック・ホワイトニングなど歯に特化した保障を提供します。保険金の支払条件も歯科治療に合わせて設計されています。",
  },
  {
    question: "月々の保険料相場は？",
    answer:
      "30代で月1,500〜3,500円、40代で2,000〜4,500円、50代で3,000〜6,000円が相場です。保障範囲や年間給付上限で料金は大きく変わります。",
  },
  {
    question: "加入するメリットは？",
    answer:
      "インプラント1本で30〜50万円、矯正で80〜120万円かかる自由診療を定額の保険料でカバーできます。既に虫歯がある人は加入前に治療を済ませる必要がある場合が多い点に注意しましょう。",
  },
  {
    question: "加入できない歯の状態はありますか？",
    answer:
      "重度の歯周病・未治療の虫歯・既にインプラント治療中などは告知事項で断られる、もしくは該当歯が保障対象外になることがあります。健康な歯のうちに早めの加入が鉄則です。",
  },
];

const plans = [
  { name: "プリベントデンタル", type: "定期", rate: "月2,300円〜", points: ["予防処置も給付対象", "年間上限20万円", "加入年齢は20〜70歳"], bestFor: "歯科クリーニングを定期的に受けている人。" },
  { name: "デンタル・ドクターズ", type: "終身", rate: "月3,200円〜", points: ["インプラント1本20万円給付", "矯正治療も対象", "告知項目が少なめ"], bestFor: "将来のインプラントに備えたい人。" },
  { name: "オリックス生命デンタル", type: "定期", rate: "月1,800円〜", points: ["歯周病治療も給付", "通院日額5,000円", "ネット申込対応"], bestFor: "費用を抑えて基本保障を確保したい人。" },
  { name: "楽天生命歯科", type: "定期", rate: "月2,000円〜", points: ["楽天ポイントで支払い可", "セラミック治療対象", "家族割引あり"], bestFor: "楽天経済圏ユーザー、家族でまとめて加入したい人。" },
  { name: "アフラック歯科特約", type: "特約", rate: "月1,500円〜", points: ["主契約に付帯して加入", "入院・手術給付金と併用", "短期解約可"], bestFor: "既にアフラックに加入している人。" },
];

export default function DentalInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "歯科保険比較", url: `${siteConfig.url}/guide/dental-insurance-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】歯科保険比較おすすめ5選｜保障内容・保険料・選び方を徹底解説" description="インプラント・矯正・セラミック治療まで保障される歯科保険を保険料・給付金・加入条件で徹底比較。" url={`${siteConfig.url}/guide/dental-insurance-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>歯科保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】歯科保険比較おすすめ5選｜保障内容・保険料・選び方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          歯の治療は自由診療の比率が高く、インプラント1本で30〜50万円かかる高額負担が発生します。歯科保険を上手に活用すれば、将来の歯の治療費リスクを抑えつつ定期メンテナンスも給付対象にできます。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">予防重視 → プリベントデンタル</span></p>
          <p><span className="font-bold">将来のインプラント → デンタル・ドクターズ</span></p>
          <p><span className="font-bold">保険料重視 → オリックス生命デンタル</span></p>
          <p><span className="font-bold">家族加入 → 楽天生命歯科</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">歯科保険選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          日本の公的医療保険は虫歯・歯周病の基本治療は3割負担でカバーしますが、インプラント・矯正・セラミック・ホワイトニングなどの審美・機能回復治療は全額自己負担（自由診療）です。歯科保険は「保険料」「給付金」「給付日数・年間上限」「告知条件」「保障期間（定期 or 終身）」の5軸で比較します。若いうちに加入するほど保険料が安く告知も通りやすいので、20〜30代のうちに検討するのがベストです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ歯科保険5商品の詳細</h2>
        <div className="space-y-6">
          {plans.map((p, idx) => (
            <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{p.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考保険料：{p.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 保険料・保障内容は2026年4月時点の参考値。最新情報は各社公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">加入前のチェックポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          まず歯科医院で現在の歯の状態をチェックし、既に進行している虫歯や歯周病があれば治療後に加入しましょう。告知違反は保険金不払いの原因になります。また、年間給付上限と通算上限、待期期間（加入後一定期間は給付されない）も必ず確認してください。医療費控除の対象になる治療費と、保険金で補填された金額の差額計算は会計ソフトに記録しておくと確定申告時に便利です。
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
            歯科保険は「保険料・給付金・告知条件」のバランスで選びましょう。若く歯が健康なうちに加入しておけば保険料を抑えつつ将来の高額治療費に備えられます。年1回の歯科クリーニングとあわせて、家計簿アプリや会計ソフトで保険料・治療費を継続的に管理するのが賢い付き合い方です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">医療費・保険料の管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "医療費控除の集計に", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "家計と事業を一元管理", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">矯正・ホワイトニングのクリニック選び</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">医療保険とのセット加入</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
