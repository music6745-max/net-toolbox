import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】NISA初心者におすすめの始め方5ステップ｜証券会社選びから運用まで",
  description:
    "NISAを始める初心者向けの完全ガイド。証券会社選び・商品選定・毎月の積立設定まで5ステップで解説。SBI証券、楽天証券、マネックス証券、松井証券、auカブコム証券を比較。",
  alternates: { canonical: `${siteConfig.url}/guide/nisa-for-beginners` },
};

const faqItems = [
  { question: "NISAを始めるのに必要な初期費用は？", answer: "口座開設費・維持費は完全無料で、最低投資額も100円から可能です。毎月100円の積立投資から始められるため、まとまった資金がなくてもスタートできます。まずは無理のない月5,000円〜10,000円から始めて、慣れてから増額していくのが王道です。" },
  { question: "最初に選ぶべき商品は？", answer: "初心者には全世界株式（オルカン）またはS&P500のインデックス投信が王道です。具体的にはeMAXIS Slim 全世界株式(オール・カントリー)、eMAXIS Slim 米国株式(S&P500)が人気No.1・No.2。信託報酬が年0.05〜0.09%と激安で、世界中または米国の主要企業に自動的に分散投資できます。" },
  { question: "どの証券会社を選べばいいですか？", answer: "普段使う経済圏に合わせるのがおすすめです。楽天ユーザーは楽天証券、三井住友カード(Vポイント)ユーザーはSBI証券、dポイントユーザーはマネックス証券、auユーザーはauカブコム証券。クレカ積立の還元率とポイント連携で年間数千〜数万円の差がつきます。" },
  { question: "積立はいつ買うのがいい？", answer: "タイミングを気にせず毎月自動積立が正解です。ドル・コスト平均法により価格変動のリスクが平準化されます。おすすめは毎月1日または給料日直後の自動買付設定。一度設定すればあとは完全放置でOKで、15〜20年以上の長期保有で複利効果を最大化できます。" },
];

const services = [
  { name: "SBI証券", type: "ネット証券最大手", rate: "口座開設・維持費無料", points: ["投信本数2,900本以上で業界最多クラス", "三井住友カード積立で最大5%還元", "Vポイント・Pontaポイントで投信購入可"], bestFor: "初心者から上級者まで全方位対応。最初の1口座におすすめ。" },
  { name: "楽天証券", type: "楽天経済圏", rate: "口座開設・維持費無料", points: ["楽天カード積立で最大1%還元", "楽天ポイントで投信購入可", "初心者向けアプリが使いやすい"], bestFor: "楽天経済圏ユーザー・スマホ中心で投資したい人。" },
  { name: "マネックス証券", type: "米国株にも強い", rate: "口座開設・維持費無料", points: ["dカード積立で最大1.1%還元", "米国株取扱数5,000銘柄以上", "初心者向けロボアドバイザーあり"], bestFor: "米国株にも興味があるドコモユーザー。" },
  { name: "松井証券", type: "老舗ネット証券", rate: "口座開設・維持費無料", points: ["100年以上の歴史で信頼性抜群", "25歳以下は現物取引手数料完全無料", "電話サポートが充実"], bestFor: "若年層・サポート重視の初心者。" },
  { name: "auカブコム証券", type: "三菱UFJグループ", rate: "口座開設・維持費無料", points: ["au PAYカード積立で最大1%還元", "Pontaポイント連携でポイ活と相性◎", "MUFGブランドの安心感"], bestFor: "auユーザー・ポイ活派。" },
];

export default function NisaForBeginnersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "NISA初心者の始め方", url: `${siteConfig.url}/guide/nisa-for-beginners` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】NISA初心者におすすめの始め方5ステップ" description="NISAを始める初心者向けの完全ガイド。証券会社選び・商品選定・積立設定まで解説。" url={`${siteConfig.url}/guide/nisa-for-beginners`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>NISA初心者の始め方</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">初心者向け</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】NISA初心者におすすめの始め方5ステップ｜証券会社選びから運用まで
        </h1>
        <p className="text-muted leading-relaxed">
          NISAは2024年のリニューアルで年間360万円・生涯1,800万円まで非課税で投資できる最強の資産形成制度に進化しました。しかし初心者にとっては「どの証券会社？」「何の商品を買う？」「いくらから始める？」と悩みどころが多いのも事実。本記事では初心者が迷わず始められる5ステップを、2026年最新情報で完全解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">迷ったら第一候補 → SBI証券</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天証券</span></p>
          <p><span className="font-bold">米国株にも興味 → マネックス証券</span></p>
          <p><span className="font-bold">若年層・初心者 → 松井証券</span></p>
          <p><span className="font-bold">auユーザー → auカブコム証券</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">初心者向けNISAの始め方5ステップ</h2>
        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ステップ1：証券会社を選ぶ</h3>
            <p className="text-sm text-muted">普段使う経済圏に合わせてネット証券を選びます。迷ったらSBI証券か楽天証券が王道。両方とも口座開設無料で、手数料もほぼ無料です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ステップ2：NISA口座を開設する</h3>
            <p className="text-sm text-muted">スマホから本人確認書類をアップロードして最短翌営業日〜1週間で開設完了。総合口座とNISA口座を同時申込できます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ステップ3：投資商品を選ぶ</h3>
            <p className="text-sm text-muted">初心者は全世界株式(オルカン)またはS&P500のインデックス投信一択でOK。信託報酬が年0.05〜0.09%の激安商品から選びましょう。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ステップ4：毎月の積立額を決めて自動設定</h3>
            <p className="text-sm text-muted">まずは月5,000〜10,000円からでOK。クレカ積立を設定すれば最大5%のポイント還元も受けられます。一度設定すればあとは完全放置。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">ステップ5：長期保有でひたすら放置</h3>
            <p className="text-sm text-muted">日々の値動きは気にせず、15〜20年以上の超長期保有で複利効果を最大化。年1回程度リバランスと積立額見直しで十分です。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">初心者におすすめの証券会社5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">手数料：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新情報は各証券会社の公式サイトでご確認ください。</p>
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
            NISAは始めるのが早ければ早いほど複利の恩恵を受けられます。「完璧を目指して始められない」より「とりあえず月5,000円で始めて慣れる」方が正解。SBI証券か楽天証券でオルカンを毎月自動積立、あとは10年20年放置でOK。同時にプログラミングなどのスキルアップで収入源を増やせば、積立額を増やして資産形成スピードを加速できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">投資額を増やすための副業スキルアップ</h2>
        <ComparisonTableCTA
          services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <Link href="/tools/investment-fund-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">積立投資シミュレーターを使う</div>
          <p className="text-xs text-muted">毎月の積立額と想定利回りから、NISAの将来資産をグラフで可視化できます →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座徹底比較</span>
            <p className="text-xs text-muted mt-1">主要証券会社を詳細比較</p>
          </Link>
          <Link href="/guide/ideco-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">iDeCo比較</span>
            <p className="text-xs text-muted mt-1">NISAと併用でさらに節税</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
