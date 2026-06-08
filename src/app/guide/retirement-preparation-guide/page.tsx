import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】定年退職前後のお金管理ガイド｜年金・退職金・健康保険を徹底解説",
  description:
    "50代から始める定年退職の準備を完全ガイド。年金受取・退職金運用・健康保険切替・確定申告まで、損しないためのポイントを分かりやすく解説。",
  alternates: { canonical: `${siteConfig.url}/guide/retirement-preparation-guide` },
};

const faqItems = [
  {
    question: "退職金は一時金と年金どちらが得ですか？",
    answer:
      "退職所得控除が使える一時金受取の方が税制優遇が大きく、多くの場合こちらが有利です。ただし企業年金の利回りが高い場合や相続対策としては年金受取が適することもあります。",
  },
  {
    question: "年金はいつから受給すべきですか？",
    answer:
      "65歳受給が基本ですが、繰下げ受給（最大75歳まで）すると1ヶ月ごとに0.7%増額されます。長生きリスクに備えるなら繰下げも有効です。健康状態や生活費を加味して決めましょう。",
  },
  {
    question: "退職後の健康保険はどうしますか？",
    answer:
      "選択肢は3つ。(1)任意継続、(2)国民健康保険、(3)家族の扶養に入る。保険料は世帯状況と前年所得により大きく変わるので、退職前に必ず試算すべきです。",
  },
  {
    question: "退職後の確定申告は必要ですか？",
    answer:
      "年途中で退職した場合は原則必要です。年末調整を受けていないため所得税の精算が必要で、医療費控除・ふるさと納税なども合わせて申告すると還付が受けられます。",
  },
];

const steps = [
  { title: "ねんきん定期便を確認", desc: "50歳以降は将来の見込額が記載。受給額の目安を把握して老後資金プランの基礎にする。" },
  { title: "退職金の額を試算", desc: "就業規則や人事部に確認。額が確定したら一時金・年金・併用のどれが税務上有利か計算。" },
  { title: "iDeCo・NISAの活用", desc: "50代からでも遅くない。退職金の一部を退職後にNISAで運用する出口戦略も重要。" },
  { title: "健康保険の切替準備", desc: "退職前に任意継続と国保の保険料を比較。家族の扶養可否も確認しておく。" },
  { title: "退職後の働き方", desc: "再雇用・嘱託・パート・起業など選択肢は多様。年金と給与のバランスに注意。" },
];

export default function RetirementPreparationGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "定年退職ガイド", url: `${siteConfig.url}/guide/retirement-preparation-guide` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】定年退職前後のお金管理ガイド｜年金・退職金・健康保険を徹底解説" description="50代から始める定年退職の準備を完全ガイド。年金受取・退職金運用・健康保険切替・確定申告を解説。" url={`${siteConfig.url}/guide/retirement-preparation-guide`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>定年退職ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">ガイド</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】定年退職前後のお金管理ガイド｜年金・退職金・健康保険を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          定年退職は人生最大のマネーイベント。年金・退職金・健康保険・税金と、関係する制度が多岐にわたります。知っているかどうかで数十万円〜数百万円の差が生まれるポイントを、分かりやすくまとめました。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">50代から準備したい3点</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>1. 年金見込額をねんきん定期便で把握</p>
          <p>2. 退職金の受取方法を税務視点で比較</p>
          <p>3. 健康保険・税金の手続きを事前確認</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">定年退職で直面する5つのお金の課題</h2>
        <p className="text-muted leading-relaxed mb-4">
          定年退職では収入が一気に減る一方で、医療・介護・住宅維持など支出は継続します。まず押さえるべきは「公的年金」「退職金」「企業年金」の3つの柱。次に健康保険・介護保険・住民税といった固定費の見直しです。住民税は前年所得ベースで課税されるため、退職翌年も現役並みの金額が請求される点に注意が必要。退職金の一部を翌年の税金用にプールしておくのが基本戦略です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">退職前後でやるべき5ステップ</h2>
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">退職金の賢い運用方法</h2>
        <p className="text-muted leading-relaxed mb-4">
          退職金を一括で運用商品に投入するのは危険です。証券会社や銀行から勧められる「退職金特別プラン」は手数料が高い仕組債や毎月分配型投信が多く、長期で見ると損失リスクが高まります。基本は生活防衛資金（3〜5年分の生活費）を確保した上で、残りをNISAの積立枠で少しずつ時間分散するのが鉄則です。インフレ対策として全額を預金にするのも危険ですが、リスクを取りすぎるのはもっと危険です。
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
            定年退職は情報格差がそのまま金額差になる最大のライフイベントです。退職金の受取方法・健康保険の選択・税金の精算まで、事前に準備すれば数十万円単位で手元資金を増やせます。不安があれば税理士・FPへの相談も有効です。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">退職金運用の第一歩</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">保険比較</span>
            <p className="text-xs text-muted mt-1">退職後の保障見直し</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
