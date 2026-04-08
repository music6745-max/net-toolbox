import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】自動車ローン金利徹底比較｜銀行・ディーラー・残価設定を解説",
  description:
    "銀行マイカーローン・ディーラーローン・残価設定型クレジットの金利・手数料・審査基準を徹底比較。総支払額を数十万円圧縮するための賢い借り方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/car-loan-rate-comparison` },
};

const faqItems = [
  {
    question: "銀行ローンとディーラーローンはどちらが得ですか？",
    answer:
      "金利だけ見れば銀行マイカーローン（年1%〜2%台）のほうがディーラーローン（年4%〜8%）より圧倒的に有利です。ただしディーラーは手続きが簡単で、値引き交渉とセットで使えるメリットがあります。",
  },
  {
    question: "残価設定型クレジットのデメリットは？",
    answer:
      "毎月の支払いは抑えられますが、最終回に残価を一括または再ローンで支払う必要があり、走行距離制限・カスタム制限・原状回復義務があります。総支払額は通常ローンより高くなりがちです。",
  },
  {
    question: "事前審査は何社まで申し込んでよいですか？",
    answer:
      "短期間に多数申し込むと信用情報に履歴が残るため、まずは2〜3行に絞って比較するのがおすすめです。仮審査の段階では信用スコアへの影響は限定的です。",
  },
  {
    question: "頭金はいくらが目安ですか？",
    answer:
      "車両価格の20%程度が一般的な目安。頭金が多いほど金利優遇を受けやすく、総支払額も抑えられます。ボーナス併用を活用するのも有効です。",
  },
];

const loans = [
  { name: "住信SBIネット銀行 MR.自動車ローン", type: "ネット銀行", rate: "年1.775%〜3.975%", points: ["来店不要・全国対応", "保証料込みで諸費用ゼロ", "繰上返済手数料無料"], bestFor: "ネットで完結させたい人、低金利を優先する人。" },
  { name: "横浜銀行マイカーローン", type: "地方銀行", rate: "年0.9%〜2.4%", points: ["業界最低水準クラスの金利", "対面とWeb両対応", "団信付帯あり"], bestFor: "神奈川・東京エリアで対面相談したい人。" },
  { name: "JAバンクマイカーローン", type: "JA", rate: "年1.85%〜3.35%", points: ["全国どこでも申込可能", "農業従事者は金利優遇", "中古車・バイクにも対応"], bestFor: "地域密着で借りたい人、JA組合員。" },
  { name: "ろうきんマイカーローン", type: "労働金庫", rate: "年2.4%〜3.9%", points: ["勤労者に手厚い審査", "団体会員は金利優遇", "教育・住宅と併用可"], bestFor: "労働組合員・公務員・教職員。" },
  { name: "ディーラーローン（残価設定型）", type: "信販系", rate: "年3.9%〜8.0%", points: ["手続きが店頭で完結", "値引き交渉と一体化", "残価設定で月々の支払い軽減"], bestFor: "短期間で乗り換えたい人、面倒を避けたい人。" },
];

export default function CarLoanRateComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車ローン金利比較", url: `${siteConfig.url}/guide/car-loan-rate-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】自動車ローン金利徹底比較｜銀行・ディーラー・残価設定を解説" description="銀行マイカーローン・ディーラーローン・残価設定型クレジットの金利・手数料・審査基準を徹底比較。総支払額を数十万円圧縮するための賢い借り方を解説します。" url={`${siteConfig.url}/guide/car-loan-rate-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>自動車ローン金利比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】自動車ローン金利徹底比較｜銀行・ディーラー・残価設定を解説
        </h1>
        <p className="text-muted leading-relaxed">
          車は人生で2番目に大きな買い物。300万円を5年返済する場合、金利が3%違えば総支払額は約25万円変わります。2026年現在の主要マイカーローン5種を金利・手数料・審査で徹底比較し、賢い選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最安金利重視 → 横浜銀行マイカーローン</span></p>
          <p><span className="font-bold">ネット完結 → 住信SBIネット銀行</span></p>
          <p><span className="font-bold">地域密着 → JAバンクマイカーローン</span></p>
          <p><span className="font-bold">手続き簡単 → ディーラーローン</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">自動車ローン選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          自動車ローンは「金利・諸費用・返済期間」の3点で総支払額が決まります。一般に銀行マイカーローンは年1〜3%台、ディーラーローンは年4〜8%台と差が大きく、300万円を5年返済すると総支払額の差は20万〜30万円に達します。さらに団体信用生命保険・保証料・繰上返済手数料の有無も比較すべきポイントです。最近はネット銀行が全国対応の低金利商品を投入しており、来店不要でWebだけで契約まで完結できるサービスも増えています。事前審査は必ず2〜3行で並行して進め、最も条件のよいローンを選びましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめマイカーローン5社の詳細</h2>
        <div className="space-y-6">
          {loans.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 金利は2026年4月時点の参考値です。最新の適用金利は各金融機関の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">総支払額を抑える5つのコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 頭金は2割を目安に：</span>頭金が多いほど借入額が減り、金利優遇も受けやすくなります。</p>
          <p><span className="font-bold text-foreground">2. 返済期間は5年以内を目安に：</span>長期化すると総支払利息が膨らみます。</p>
          <p><span className="font-bold text-foreground">3. 銀行2〜3行で同時審査：</span>ディーラー提示の金利と必ず比較しましょう。</p>
          <p><span className="font-bold text-foreground">4. 繰上返済を活用：</span>ボーナス時の繰上返済は利息圧縮効果が大きいです。</p>
          <p><span className="font-bold text-foreground">5. 残価設定型は要注意：</span>月額は安く見えても総額は割高になりがち。</p>
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
            自動車ローンは金利差がそのまま総支払額に直結します。手続きの楽さでディーラーローンを選ぶ前に、銀行マイカーローンの仮審査だけでも通しておくと交渉材料にも使えます。さらに自動車保険・税金・燃料費を合わせた総保有コストを家計簿アプリで管理すれば、年間数万円の節約も狙えます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <Link href="/tools/loan-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">ローン返済シミュレータを使う</div>
          <p className="text-xs text-muted">借入額・金利・期間から毎月の返済額と総支払利息を自動計算 →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/car-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">マイカーローン比較</span>
            <p className="text-xs text-muted mt-1">基本の比較ガイド</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">新車購入比較</span>
            <p className="text-xs text-muted mt-1">車の選び方</p>
          </Link>
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">所有 vs リース</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">維持費を最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
