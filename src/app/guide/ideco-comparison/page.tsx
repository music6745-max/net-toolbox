import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】iDeCo(イデコ)おすすめ金融機関5選｜手数料・商品・節税を徹底比較",
  description:
    "iDeCoのSBI証券・楽天証券・マネックス証券・松井証券・auカブコム証券を手数料・商品数・節税効果で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/ideco-comparison` },
};

const faqItems = [
  { question: "iDeCoの掛金上限は？", answer: "会社員(企業年金なし)は月23,000円、自営業は月68,000円、公務員は月12,000円、専業主婦は月23,000円。2024年12月から一部上限が引き上げられています。" },
  { question: "iDeCoとNISAどちらを先にやるべき？", answer: "節税効果が高いiDeCoを優先する人が多いですが、60歳まで引き出せないため、流動性重視ならNISA優先もアリ。両方活用するのが理想です。" },
  { question: "iDeCoのデメリットは？", answer: "60歳まで原則引き出し不可、毎月の手数料(国民年金基金連合会等に月171円)、所得がないと節税メリットなしの3点が主なデメリットです。" },
  { question: "スイッチング(商品変更)は何回でもできる？", answer: "はい、iDeCo内での商品変更(スイッチング)は無料で何回でも可能です。ただし売却から買付まで数日かかります。" },
];

const services = [
  { name: "SBI証券", type: "セレクトプラン", rate: "運営管理手数料無料", points: ["eMAXIS Slimシリーズ全16本", "低コストインデックス充実", "iDeCo資産残高でポイント付与"], bestFor: "低コスト運用したい人" },
  { name: "楽天証券", type: "楽天経済圏", rate: "運営管理手数料無料", points: ["楽天ポイント連携", "32本の厳選商品ラインナップ", "楽天証券NISA口座と一元管理"], bestFor: "楽天ユーザー" },
  { name: "マネックス証券", type: "米国株連携", rate: "運営管理手数料無料", points: ["eMAXIS Slim全世界株式(オルカン)採用", "27本の厳選商品", "iDeCoアプリの使いやすさ"], bestFor: "オルカン積立したい人" },
  { name: "松井証券", type: "老舗ネット証券", rate: "運営管理手数料無料", points: ["40本の豊富な商品ラインナップ", "iDeCoサポートデスク充実", "25歳以下は信託報酬還元"], bestFor: "サポート重視の人" },
];

export default function IdecoComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "iDeCo比較", url: `${siteConfig.url}/guide/ideco-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】iDeCo(イデコ)おすすめ金融機関5選" description="iDeCoのSBI証券・楽天証券・マネックス証券・松井証券を手数料・商品数・節税効果で徹底比較。" url={`${siteConfig.url}/guide/ideco-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>iDeCo比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】iDeCo(イデコ)おすすめ金融機関5選｜手数料・商品・節税を徹底比較
        </h1>
        <p className="text-muted leading-relaxed">
          iDeCo(個人型確定拠出年金)は掛金が全額所得控除になる最強の節税制度。年収500万円の会社員が月23,000円を拠出すると、年間約55,000円の節税効果があります。2026年現在、主要4社はすべて運営管理手数料無料ですが、商品ラインナップと使いやすさに差があります。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">低コスト運用重視 → SBI証券</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天証券</span></p>
          <p><span className="font-bold">オルカン一本で積立 → マネックス証券</span></p>
          <p><span className="font-bold">サポート重視・若年層 → 松井証券</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">iDeCoの基本と選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          iDeCoは毎月の掛金が全額所得控除となり、運用益も非課税、受取時も退職所得控除や公的年金控除が適用される「3段階の税制優遇」が最大の魅力です。金融機関を選ぶポイントは「運営管理手数料」「商品ラインナップ」「サポート体制」の3つ。2026年現在、主要ネット証券はいずれも運営管理手数料無料のため、信託報酬の低い商品がどれだけ揃っているかが決め手になります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">サービス比較</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">手数料：{s.rate}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の手数料・商品ラインナップは各金融機関の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((f) => (
            <div key={f.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {f.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            iDeCoは老後資金を準備しながら毎年の税金を減らせる、会社員・自営業者にとって見逃せない制度です。主要ネット証券はすべて運営管理手数料無料のため、eMAXIS Slimシリーズなど低コストインデックスファンドの品揃えで選ぶのが正解。NISAと併用すれば、非課税で効率的に資産形成を進められます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">新NISAの証券会社選び</p>
          </Link>
          <Link href="/guide/crypto-exchange-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">暗号資産取引所比較</span>
            <p className="text-xs text-muted mt-1">分散投資の選択肢</p>
          </Link>
          <Link href="/guide/nisa-for-beginners" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISAの始め方</span>
            <p className="text-xs text-muted mt-1">少額からの資産形成</p>
          </Link>
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">資産管理のしやすさを確認</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
