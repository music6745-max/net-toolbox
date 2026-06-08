import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】FX初心者におすすめの口座5選｜少額・デモ口座から始める",
  description:
    "FX初心者が最初に選ぶべき口座5選。少額取引・デモ口座・スプレッド・サポート体制で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/fx-for-beginners` },
};

const faqItems = [
  { question: "FXはいくらから始められる？", answer: "最小1通貨（約150円）から取引できる口座もあり、現実的には4,000〜5,000円で1,000通貨取引が可能です。まずはデモ口座で操作に慣れ、5万円程度の余剰資金で少額からスタートするのが鉄則です。" },
  { question: "初心者が失敗しやすいポイントは？", answer: "レバレッジのかけすぎ、損切りラインを決めない、感情的なナンピンの3つが代表的な失敗。最初は2〜3倍のレバレッジに抑え、証拠金維持率300%以上を保ち、損切りを自動設定するのが基本です。" },
  { question: "デモ口座はどれくらい使うべき？", answer: "最低2週間〜1ヶ月、できれば通貨ペアを絞って50回以上のトレードを経験してから本番口座に移行するのが推奨。仮想資金でも勝ち癖をつけることで、本番での感情コントロールが身につきます。" },
  { question: "スプレッドって何？どこを見ればいい？", answer: "スプレッドは買値と売値の差で、実質的な取引コスト。米ドル/円で0.2銭以下ならかなり狭い部類。取引回数が多い人ほどスプレッドの狭さを重視し、初心者はまずサポートの手厚さ・アプリの使いやすさを優先しても問題ありません。" },
];

const services = [
  { name: "DMM FX", type: "国内口座数上位", rate: "米ドル/円スプレッド0.2銭原則固定", points: ["平日24時間LINEサポート対応", "最短1時間で口座開設可能", "初心者向けツール・学習コンテンツが充実"], bestFor: "サポート重視で不安なく始めたい初心者。" },
  { name: "GMOクリック証券", type: "取引高世界上位", rate: "米ドル/円スプレッド0.2銭原則固定", points: ["業界最狭水準のスプレッド", "高機能ツール「はっちゅう君」が無料", "GMOポイント還元あり"], bestFor: "コスト重視でアクティブに取引したい人。" },
  { name: "外為どっとコム", type: "老舗・情報量", rate: "米ドル/円スプレッド0.2銭原則固定", points: ["1,000通貨から取引可能（少額OK）", "マーケット情報・セミナーが豊富", "初心者向けコンテンツ業界最多"], bestFor: "学びながら少額で始めたい人。" },
  { name: "松井証券FX", type: "老舗ネット証券", rate: "米ドル/円スプレッド0.2銭原則固定", points: ["1通貨（約150円）から取引可能", "100年以上の歴史ある老舗", "FX以外の金融商品も充実"], bestFor: "超少額でお試しスタートしたい人。" },
  { name: "みんなのFX", type: "スワップポイント高水準", rate: "米ドル/円スプレッド0.2銭原則固定", points: ["スワップポイントが業界上位", "1,000通貨から取引可能", "自動売買「みんなのシストレ」が使える"], bestFor: "長期保有・スワップ狙い・自動売買に興味がある人。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "FX初心者におすすめの口座5選", url: `${siteConfig.url}/guide/fx-for-beginners` },
      ]} />
      <ArticleJsonLd headline="【2026年最新】FX初心者におすすめの口座5選" description="FX初心者が最初に選ぶべき口座5選。少額取引・デモ口座・スプレッド・サポート体制で徹底比較。" url={`${siteConfig.url}/guide/fx-for-beginners`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>FX初心者におすすめの口座</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】FX初心者におすすめの口座5選｜少額・デモ口座から始める</h1>
        <p className="text-muted leading-relaxed">初めてのFXは「まず失敗しないこと」が最優先。デモ口座・少額取引対応・サポート体制・スプレッドの4軸で、初心者に本当におすすめできる5口座を比較します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">サポート重視 → DMM FX</span></p>
          <p><span className="font-bold">コスト重視 → GMOクリック証券</span></p>
          <p><span className="font-bold">学びながら始めたい → 外為どっとコム</span></p>
          <p><span className="font-bold">1通貨から試したい → 松井証券FX</span></p>
          <p><span className="font-bold">自動売買・スワップ → みんなのFX</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">サービス比較</h2>
        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">{s.name}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.type}</span>
              </div>
              <p className="text-sm text-muted mb-3">{s.rate}</p>
              <ul className="space-y-1 mb-3">
                {s.points.map((p) => (<li key={p} className="text-sm flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>{p}</li>))}
              </ul>
              <p className="text-xs bg-background rounded-lg px-3 py-2"><span className="font-bold">おすすめ：</span>{s.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
        <div className="space-y-3">
          {faqItems.map((f) => (
            <div key={f.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {f.question}</h3>
              <p className="text-sm text-muted">A. {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/fx-account-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">FX口座徹底比較</div>
          </Link>
          <Link href="/guide/fx-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">FX会社比較</div>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">投資</div>
            <div className="font-bold text-sm">ネット証券比較</div>
          </Link>
          <Link href="/guide/nisa-for-beginners" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">初心者</div>
            <div className="font-bold text-sm">NISAの始め方</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
