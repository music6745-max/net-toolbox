import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】サブスク管理術完全ガイド｜年5万円節約する見直し方法",
  description:
    "増えすぎたサブスクを賢く管理し、年5万円以上節約する具体的な方法を解説。家計簿アプリの活用、解約タイミング、固定費見直しのコツまで。",
  alternates: { canonical: `${siteConfig.url}/guide/subscription-management` },
};

const faqItems = [
  {
    question: "サブスクは月いくらまでが適正ですか？",
    answer:
      "手取りの3〜5%を目安にするのが一般的です。手取り25万円なら7,500円〜12,500円程度。それ以上なら固定費を圧迫している可能性があります。",
  },
  {
    question: "解約を忘れがちなサービスの管理方法は？",
    answer:
      "家計簿アプリ（マネーフォワードME・Zaimなど）を使うとカード明細から自動でサブスクを検出してくれます。スプレッドシートで一覧化するのも有効です。",
  },
  {
    question: "無料期間だけ使うのは問題ないですか？",
    answer:
      "規約上は問題ありませんが、解約忘れに注意。スマホのカレンダーやリマインダーアプリに「無料期間終了日」を必ず登録しましょう。",
  },
  {
    question: "通信費もサブスクに含めるべきですか？",
    answer:
      "光回線・スマホ料金は月額固定の代表格。サブスクと一緒に見直すと年5〜10万円の節約も可能です。格安SIMや乗り換え先光回線の比較も同時に行いましょう。",
  },
];

const steps = [
  { num: "1", title: "全サブスクをリストアップ", desc: "クレジットカード明細・銀行引落・キャリア決済を3か月分洗い出し、サービス名・月額・利用頻度を一覧化します。家計簿アプリで自動検出すると漏れが防げます。" },
  { num: "2", title: "利用頻度で4分類", desc: "「毎日／週1以上／月数回／3か月以上未使用」に分類。3か月以上使っていないものは即解約候補です。" },
  { num: "3", title: "重複サービスをまとめる", desc: "音楽配信・動画配信・クラウドストレージで重複契約していないか確認。家族プラン・年払いに切り替えると割安になることも。" },
  { num: "4", title: "年払いと月払いを比較", desc: "年払いに切り替えると10〜20%安くなるサービスが多数。長く使うことが確定しているものは年払いがお得です。" },
  { num: "5", title: "解約日をカレンダー登録", desc: "無料期間や更新日をカレンダーアプリに登録。Googleカレンダーで通知設定すれば解約忘れによる課金事故を防げます。" },
  { num: "6", title: "通信費もまとめて見直し", desc: "光回線・スマホ・サブスクを一緒に見直すと年10万円以上の固定費削減も。格安SIMへの乗り換えと光回線の見直しは効果絶大です。" },
];

export default function SubscriptionManagementPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "サブスク管理術", url: `${siteConfig.url}/guide/subscription-management` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>サブスク管理術</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">節約</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】サブスク管理術完全ガイド｜年5万円節約する見直し方法
        </h1>
        <p className="text-muted leading-relaxed">
          動画・音楽・電子書籍・クラウド・アプリ──気がつけばサブスクだらけになっていませんか？月数百円のサービスでも積み重なれば年間数万円の出費に。賢く管理して家計を引き締める方法を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">この記事のポイント</h2>
        <ul className="space-y-1 text-sm text-slate-800 dark:text-slate-100">
          <li>・全サブスクの可視化で「気づかぬ課金」を防ぐ</li>
          <li>・重複・未使用サービスの整理で年5万円削減</li>
          <li>・通信費とまとめて見直せば年10万円以上の節約も</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">サブスクが家計を圧迫する理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          1つあたりは月額500〜1,500円と少額でも、10個契約すれば月15,000円・年間18万円の固定費になります。一度契約すると忘れがちで、家計簿に「便利だから」とそのまま残り続けるのが落とし穴。総務省家計調査でも、世帯あたりのサブスク支出は年々増加傾向にあり、見直しが急務です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">サブスク見直しの6ステップ</h2>
        <div className="space-y-3">
          {steps.map((s) => (
            <div key={s.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s.num}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-muted">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
            サブスク管理は「可視化→整理→自動化」の3ステップが鉄則です。家計簿アプリを使って毎月の固定費を自動で記録し、四半期ごとに見直す習慣をつけましょう。スマホ・光回線などの通信費も同じタイミングで見直すと、家計のスリム化効果は飛躍的に高まります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">通信費もまとめて節約</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ごえんモバイル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8LLFCI+424K+TS3OI",
              highlight: "シンプル・低価格の格安SIM",
              price: "月額制",
              badge: "コスパ",
            },
            {
              name: "ITSUKI光",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8NDQ5U+4VXM+5YRHE",
              highlight: "シンプル料金の光回線",
              price: "月額制",
            },
            {
              name: "BB.exciteモバイル Fit",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8M6UYA+7JY+2BCWEQ",
              highlight: "段階制プランでムダなく使える",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">スマホ料金を見直すならこちら</p>
          </Link>
          <Link href="/guide/streaming-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">動画配信比較</span>
            <p className="text-xs text-muted mt-1">動画サブスクを最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
