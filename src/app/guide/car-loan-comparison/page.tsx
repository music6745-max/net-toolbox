import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】自動車ローン比較おすすめ5選｜金利・審査・頭金・総返済額を徹底解説",
  description:
    "三菱UFJ銀行マイカーローン・住信SBI・横浜銀行・ろうきん・ディーラーローンを金利・審査・総返済額で徹底比較。新車・中古車購入で数十万円節約するローンの選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/car-loan-comparison` },
};

const faqItems = [
  { question: "銀行ローンとディーラーローンの違いは？", answer: "銀行ローンは金利が1〜3％台と低く総返済額が抑えられます。ディーラーローンは金利4〜8％と高めですが、審査が緩く手続きもスムーズ。300万円を5年借りる場合、金利差で総返済額が30万円以上変わることもあります。" },
  { question: "審査に通るための条件は？", answer: "年収200万円以上、勤続1年以上、他の借入が年収の3割以内、信用情報にキズがないことが基本条件です。年収に対する年間返済額の比率（返済負担率）は25〜30%以内が目安で、超えると審査に通りにくくなります。" },
  { question: "頭金はいくら入れるべき？", answer: "理想は車両価格の20〜30%ですが、低金利ローンを活用するなら無理に頭金を増やす必要はありません。頭金ゼロでも金利2%以下なら、手元資金を運用に回す方が有利なケースもあります。" },
  { question: "金利は固定と変動どちらがいい？", answer: "返済期間が3〜5年と短いマイカーローンでは、金利変動リスクが小さいため変動金利でも問題ありません。金利が低く総返済額が最小になる方を選べばOK。完済前の金利上昇幅は数千円〜1万円程度に収まります。" },
];

const services = [
  { name: "三菱UFJ銀行 マイカーローン", type: "メガバンク", rate: "変動1.50%〜", points: ["メガバンクの安心感", "来店不要・Webで申込完結", "繰上返済手数料無料"], bestFor: "メガバンク口座を持ち安定志向の人。" },
  { name: "住信SBIネット銀行 MR.自動車ローン", type: "ネット銀行", rate: "変動1.775%〜", points: ["Web完結・24時間申込可", "車種・年式制限なし", "借換えにも対応"], bestFor: "ネットで完結させたい人。" },
  { name: "横浜銀行 マイカーローン", type: "地方銀行", rate: "変動0.90%〜", points: ["地方銀行で業界最低クラス", "給与振込口座で優遇", "来店相談可"], bestFor: "神奈川・東京在住で最安を狙う人。" },
  { name: "中央ろうきん マイカーローン", type: "労働金庫", rate: "固定2.40%〜", points: ["労働組合員向けに金利優遇", "全期間固定金利で安心", "返済期間最長10年"], bestFor: "労働組合員・公務員。" },
  { name: "ディーラーローン", type: "販売店提携", rate: "固定3.9%〜6.9%", points: ["店頭で即日契約可", "審査が比較的通りやすい", "残価設定型ローンも選べる"], bestFor: "審査に不安がある人、急いでいる人。" },
];

export default function CarLoanComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "自動車ローン比較", url: `${siteConfig.url}/guide/car-loan-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】自動車ローン比較おすすめ5選" description="三菱UFJ・住信SBI・横浜銀行・ろうきん・ディーラーローンを金利・審査・総返済額で徹底比較。" url={`${siteConfig.url}/guide/car-loan-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>自動車ローン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】自動車ローン比較おすすめ5選｜金利・審査・頭金・総返済額を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          新車購入は住宅に次ぐ高額な買い物。300万円を5年で借りる場合、金利1%の違いで総返済額の差は約8万円、ディーラーローンと銀行ローンの差は30万円以上にもなります。2026年現在の主要5ローンを徹底比較し、総返済額を最小化する選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最安金利 → 横浜銀行マイカーローン</span></p>
          <p><span className="font-bold">安心のメガバンク → 三菱UFJ</span></p>
          <p><span className="font-bold">Web完結 → 住信SBI</span></p>
          <p><span className="font-bold">労組・公務員 → 中央ろうきん</span></p>
          <p><span className="font-bold">急ぎ・審査優先 → ディーラーローン</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">自動車ローン選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          自動車ローンは「金利・審査・返済期間」の3点で総返済額が決まります。銀行ローンは金利1〜3%台と低く、返済期間も最長10年まで選べる反面、審査は厳しめ。ディーラーローンは金利4〜8%と高めですが、審査通過率が高く契約スピードも早いのが特徴です。購入前に仮審査を複数行に申し込み、最も好条件の銀行ローンから検討するのが鉄則。頭金を20%入れるだけで金利優遇が受けられる銀行もあります。クラウド会計ソフトで日々の家計を管理し、返済負担率25%以下を維持すれば審査通過率が格段に上がります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ自動車ローン5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
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
            自動車ローンは総返済額の差が数十万円規模になる重要な選択。銀行ローンを第一候補に複数行で仮審査を取り、条件が悪い場合のみディーラーローンを検討するのが王道です。家計簿アプリや会計ソフトで返済状況を継続管理し、余裕があれば繰上返済で利息を圧縮しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">ローン総額を先に試算する</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/car-loan-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
            <div className="font-bold text-sm mb-1">車ローン専用で試算する</div>
            <p className="text-xs text-muted">車両価格・頭金・金利・期間から、月額と総支払額を確認できます。</p>
          </Link>
          <Link href="/tools/loan-calculator" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <div className="font-bold text-sm mb-1">汎用ローン計算ツール</div>
            <p className="text-xs text-muted">住宅ローンや教育ローンと同じ条件で、返済額を横並び比較できます。</p>
          </Link>
          <Link href="/guide/car-loan-rate-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <div className="font-bold text-sm mb-1">金利差を詳しく見る</div>
            <p className="text-xs text-muted">銀行系・ディーラー系・残価設定型の金利差を確認します。</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <div className="font-bold text-sm mb-1">自動車保険も見直す</div>
            <p className="text-xs text-muted">ローン返済に加えて、保険料を含む維持費を下げます。</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/auto-lease-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">カーリース比較</span>
            <p className="text-xs text-muted mt-1">購入vsリースで比較</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">購入後の必須コスト</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車購入方法比較</span>
            <p className="text-xs text-muted mt-1">新車・中古車・リース</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">もう1つの大きなローン</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
