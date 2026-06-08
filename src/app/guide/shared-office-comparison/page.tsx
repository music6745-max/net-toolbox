import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】コワーキング・シェアオフィス比較おすすめ5選｜料金・拠点数・法人登記対応を徹底解説",
  description:
    "WeWork・Regus・ビズサークル・THE HUB・BasisPointなどシェアオフィス/コワーキング主要5社を料金・拠点数・法人登記可否・ドロップイン料金で徹底比較。テレワーク拠点に最適な1つが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/shared-office-comparison` },
};

const faqItems = [
  {
    question: "コワーキングとシェアオフィスの違いは？",
    answer:
      "コワーキングはオープンスペースで他の利用者と共有する形式、シェアオフィスは個室や専用デスクなど専有度の高い空間を含みます。実務上は境界が曖昧で、同じ施設で両方のプランが提供されることも多いです。",
  },
  {
    question: "法人登記はできますか？",
    answer:
      "バーチャルオフィスプランやシェアオフィス契約で法人登記が可能な施設が多数あります。ただし金融機関によっては審査で不利になる場合があるため、口座開設・融資予定がある場合は事前確認が必須です。",
  },
  {
    question: "ドロップイン利用は可能？",
    answer:
      "多くの施設でビジター料金（1時間500〜1,500円程度）でのドロップイン利用が可能です。まずはドロップインで雰囲気を確認してから月額契約に進むのがおすすめです。",
  },
  {
    question: "自宅と併用するメリットは？",
    answer:
      "集中作業・来客対応・気分転換の3点でメリットがあります。また子供がいる家庭では、集中したい時だけ近所のコワーキングに行くことで生産性を維持できます。",
  },
];

const offices = [
  { name: "WeWork", type: "グローバル", fee: "月額50,000円〜", points: ["世界120都市以上で利用可", "国内40拠点以上", "おしゃれな空間とネットワーキング"], bestFor: "出張・海外展開する法人、スタートアップ。" },
  { name: "Regus（リージャス）", type: "グローバル", fee: "月額18,000円〜", points: ["世界最大級3,000拠点", "ビジネスラウンジ定額で使い放題", "バーチャルオフィスプランあり"], bestFor: "全国・海外を頻繁に移動する経営者。" },
  { name: "ビズサークル", type: "国内特化", fee: "月額18,000円〜", points: ["関東中心に50拠点以上", "個室オフィスも展開", "月額が比較的リーズナブル"], bestFor: "首都圏で個室を安く借りたい方。" },
  { name: "THE HUB", type: "国内特化", fee: "月額15,000円〜", points: ["法人登記対応プランが豊富", "東京・大阪・名古屋主要都市", "会議室を30分単位で予約可"], bestFor: "法人登記をしたい個人事業主・中小法人。" },
  { name: "BasisPoint", type: "国内特化", fee: "月額16,500円〜", points: ["東京駅・新宿など立地が強い", "ドロップイン利用に強い", "個人プラン・法人プラン両方"], bestFor: "都内のアクセス重視のフリーランス。" },
];

export default function SharedOfficeComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "シェアオフィス比較", url: `${siteConfig.url}/guide/shared-office-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】コワーキング・シェアオフィス比較おすすめ5選" description="主要シェアオフィス/コワーキングを料金・拠点数・法人登記可否で徹底比較。" url={`${siteConfig.url}/guide/shared-office-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>シェアオフィス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】コワーキング・シェアオフィス比較おすすめ5選｜料金・拠点数・法人登記対応を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          テレワーク定着で注目されるシェアオフィス・コワーキング。個人事業主・フリーランス・中小企業にとって、自宅と賃貸オフィスの中間的な選択肢として定着しています。主要5社を料金・拠点数・機能で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">グローバル展開 → WeWork</span></p>
          <p><span className="font-bold">全国出張が多い → Regus</span></p>
          <p><span className="font-bold">個室を安く → ビズサークル</span></p>
          <p><span className="font-bold">法人登記対応 → THE HUB</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">シェアオフィス選びの5つの基準</h2>
        <p className="text-muted leading-relaxed mb-4">
          シェアオフィス・コワーキングを選ぶ際は「立地・料金・法人登記可否・会議室の予約しやすさ・ネット回線の品質」の5点を評価しましょう。特に立地は日々の生産性に直結するため、自宅から30分以内で通える範囲で選ぶのがおすすめです。料金は個室とオープンスペースで2〜3倍違うため、集中作業が多いか他者との交流が多いかで選び分けます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          法人登記の可否は個人事業主から法人成りを検討している方には重要なポイント。バーチャルオフィスプランを含む施設であれば、月額5,000〜10,000円程度で住所貸しが可能です。ただし郵便物転送・電話秘書サービスなどのオプション料金が別途発生することもあるため総額で比較しましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめシェアオフィス5社の詳細</h2>
        <div className="space-y-6">
          {offices.map((o, idx) => (
            <div key={o.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{o.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{o.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{o.fee}</p>
              <ul className="space-y-1 mb-4">
                {o.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{o.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金・拠点は2026年4月時点の参考値です。最新の条件は各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">費用対効果を高めるコツ</h2>
        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ドロップインから始める</h3>
            <p className="text-sm text-muted leading-relaxed">月額契約前にまずドロップインで2〜3箇所試し、雰囲気・ネット速度・集中しやすさを体感してから決めましょう。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">法人登記とセットで経費化</h3>
            <p className="text-sm text-muted leading-relaxed">事業用の契約なら月額料金は全額経費化可能。自宅兼事務所より経費の説明がしやすく、税務調査時のトラブルも避けられます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">複数拠点プランを活用</h3>
            <p className="text-sm text-muted leading-relaxed">Regus・WeWorkは1契約で全拠点利用可能なプランがあり、出張時もそのまま作業できます。出張が多いなら実質的にコスト圧縮になります。</p>
          </div>
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
            シェアオフィスは「立地・料金・法人登記」で選ぶのが正解。個人事業主ならTHE HUBやBasisPointから、法人ならWeWorkやRegusの複数拠点利用プランが王道です。契約前にドロップインで必ず試すのを忘れずに。会計ソフトと併用して経費管理すれば、節税面でも効果的です。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <Link href="/tools/business-trip-allowance-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">出張旅費・日当計算ツールを使う</div>
          <p className="text-xs text-muted">出張日数・役職別の日当を自動計算。旅費規程の整備にも →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/corporate-vpn-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法人向けVPN比較</span>
            <p className="text-xs text-muted mt-1">外出先から安全接続</p>
          </Link>
          <Link href="/guide/remote-work-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">リモートワークツール</span>
            <p className="text-xs text-muted mt-1">生産性を最大化</p>
          </Link>
          <Link href="/guide/company-credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法人クレジットカード</span>
            <p className="text-xs text-muted mt-1">オフィス代の経費管理</p>
          </Link>
          <Link href="/guide/business-bank-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネス銀行口座</span>
            <p className="text-xs text-muted mt-1">事業口座の整備</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
