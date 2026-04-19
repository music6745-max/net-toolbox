import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】税理士無料紹介サービス比較5選｜個人事業主・法人の失敗しない選び方",
  description:
    "税理士ドットコム・税理士紹介ネットワーク・freee税理士検索・ビスカス・マネフォ紹介を徹底比較。個人事業主・法人向け顧問税理士の選び方、費用相場、相談前に準備する書類まで解説。",
  alternates: { canonical: `${siteConfig.url}/guide/tax-accountant-referral-comparison` },
};

const faqItems = [
  { question: "税理士紹介は本当に無料ですか？", answer: "はい、主要な税理士紹介サービス（税理士ドットコム・freee税理士検索等）は紹介料・相談料ともに完全無料。税理士事務所側が広告費を負担する形式で運営されています。ユーザーは複数税理士から見積り比較のみ可能です。" },
  { question: "税理士はいつから必要ですか？", answer: "売上800〜1,000万円を超える・インボイス登録・法人化検討のタイミング。売上500万円以下なら会計ソフト（freee/マネフォ/弥生）で自力申告が可能。税務調査の通知が来た場合も即相談推奨です。" },
  { question: "税理士の費用相場は？", answer: "個人事業主の顧問料は月1〜3万円＋決算料10〜20万円。法人は月2〜5万円＋決算料20〜40万円。会計ソフト認定税理士なら会計データ連携で業務効率化、顧問料も格安になる事例多数。" },
  { question: "相性の合わない税理士は変更できる？", answer: "はい、可能です。顧問契約は通常1年単位で解約可能。多くの紹介サービスは契約後3ヶ月以内の変更サポート無料付き。期末1〜2ヶ月前での変更がデータ引継ぎスムーズです。" },
];

const services = [
  { name: "税理士ドットコム", url: "https://www.zeiri4.com/", type: "業界最大手", rate: "全国5,800人超の税理士ネットワーク", points: ["コーディネーターによる複数税理士の比較支援", "弁護士ドットコムグループ運営の信頼性", "紹介料・相談料完全無料"], bestFor: "初めて税理士を探す方、複数比較したい方。" },
  { name: "税理士紹介ネットワーク", url: "https://www.zeirishi-network.com/", type: "創業25年以上", rate: "累計20万社の紹介実績", points: ["1999年創業の老舗", "全国47都道府県対応、対面・オンライン選択可", "専任コーディネーターが複数税理士を比較提案"], bestFor: "対面相談も重視したい方、地方在住者。" },
  { name: "freee税理士検索", url: "https://www.freee.co.jp/kojin/advisor/", type: "freee認定", rate: "freee会計との連携最強", points: ["freee会計認定税理士のみ紹介、会計データ連携でスムーズ", "顧問料 月1万円〜の格安税理士も多数", "スタートアップ・ITフリーランス向き"], bestFor: "freee会計を使っている方、IT系フリーランス。" },
  { name: "ビスカス", url: "https://www.viscas.co.jp/", type: "創業30年", rate: "累計15万社の実績", points: ["1997年創業、個人事業主〜大企業まで対応", "相続・事業承継・M&Aなど専門領域に強い", "紹介後3ヶ月のフォロー付き"], bestFor: "相続・M&A等、専門領域で税理士を探す方。" },
  { name: "マネーフォワード税理士紹介", url: "https://biz.moneyforward.com/tax_adviser/", type: "マネフォ連携", rate: "マネフォクラウド対応税理士", points: ["マネーフォワードクラウド連携税理士を紹介", "会計・給与・請求書を一元管理済みの企業に最適", "オンライン面談中心"], bestFor: "マネフォを使っている方、クラウド会計重視。" },
];

export default function TaxAccountantReferralPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "税理士無料紹介比較", url: `${siteConfig.url}/guide/tax-accountant-referral-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】税理士無料紹介サービス比較5選｜個人事業主・法人の失敗しない選び方" description="税理士紹介サービスの選び方と主要5社比較" url={`${siteConfig.url}/guide/tax-accountant-referral-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>税理士無料紹介比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">税務・会計</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】税理士無料紹介サービス比較5選｜個人事業主・法人の失敗しない選び方</h1>
        <p className="text-muted leading-relaxed">
          「顧問税理士をどこで探せばいいかわからない」「費用相場が不明」——こんな悩みを解決するのが、税理士無料紹介サービス。全国5,000〜数万人の税理士から、業種・地域・課題で最適な税理士を無料マッチングしてくれます。本記事では主要5サービスの特徴・比較、選び方のポイントを徹底解説。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">業種別おすすめ税理士紹介サービス</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">初めて税理士を探す → 税理士ドットコム</span></p>
          <p><span className="font-bold">IT・フリーランス（freee利用） → freee税理士検索</span></p>
          <p><span className="font-bold">マネフォ利用 → マネーフォワード税理士紹介</span></p>
          <p><span className="font-bold">相続・事業承継 → ビスカス</span></p>
          <p><span className="font-bold">地方・対面重視 → 税理士紹介ネットワーク</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">税理士無料紹介サービスの仕組み</h2>
        <p className="text-muted leading-relaxed mb-4">
          税理士紹介サービスは、税理士事務所から広告費を得て運営されるため、ユーザーは相談料・紹介料ともに完全無料。コーディネーターがユーザーの業種・規模・課題をヒアリングし、登録税理士の中から最適な候補を複数提示してくれます。各税理士と面談後、気に入った相手と契約するだけ。契約義務はなく、「話を聞いて決める」が基本です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">税理士紹介サービス5社詳細比較</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>)}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
              <a href={b.url} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors">公式サイトで詳細 →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">税理士を選ぶ5つのポイント</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 業種経験：</span>同業他社の顧問経験があるか（飲食/IT/建設等）。業種特化税理士は仕訳・節税の勘所が違う。</p>
          <p><span className="font-bold text-foreground">2. 会計ソフト対応：</span>freee/マネフォ/弥生のいずれに対応か。連携ソフトでの経理効率が段違い。</p>
          <p><span className="font-bold text-foreground">3. インボイス対応：</span>適格請求書発行事業者登録のサポート可否。2023年開始の新制度への対応が鍵。</p>
          <p><span className="font-bold text-foreground">4. 節税提案の積極性：</span>顧問料を上回る節税提案ができる税理士かどうか。年間節税10〜30万円を目安に。</p>
          <p><span className="font-bold text-foreground">5. コミュニケーションの頻度：</span>月1回の定例MTG・メール対応速度・チャット対応可否等、自社の業務スタイルに合うか。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2 text-foreground">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">まずは無料相談から</h2>
        <ComparisonTableCTA
          services={[
            { name: "税理士ドットコム", url: "https://www.zeiri4.com/", highlight: "全国5,800人超のネットワーク、業界最大手", price: "紹介料無料", badge: "業界最大手" },
            { name: "freee税理士検索", url: "https://www.freee.co.jp/kojin/advisor/", highlight: "freee連携税理士で会計業務効率化", price: "紹介料無料", badge: "IT系特化" },
            { name: "ビスカス", url: "https://www.viscas.co.jp/", highlight: "創業30年、相続・事業承継に強い", price: "紹介料無料", badge: "専門領域" },
          ]}
        />
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">会計</div><div className="font-bold text-sm">確定申告ソフト比較</div></Link>
          <Link href="/guide/freelance-startup-bundle-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">独立</div><div className="font-bold text-sm">フリーランス独立バンドル</div></Link>
          <Link href="/guide/inheritance-tax-preparation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">相続</div><div className="font-bold text-sm">相続税対策完全ガイド</div></Link>
          <Link href="/guide/accountant-cloud-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">クラウド</div><div className="font-bold text-sm">会計事務所クラウド連携</div></Link>
        </div>
      </section>
    </div>
  );
}
