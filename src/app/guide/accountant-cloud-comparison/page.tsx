import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】会計事務所クラウド連携比較｜freee・弥生・マネフォを徹底解説",
  description:
    "顧問税理士・会計事務所と顧問先がクラウド会計でデータ共有する方法を解説。freee・弥生・マネーフォワードの連携機能・料金・対応事務所数を徹底比較します。",
  alternates: { canonical: `${siteConfig.url}/guide/accountant-cloud-comparison` },
};

const faqItems = [
  {
    question: "顧問税理士に会計データを共有するメリットは？",
    answer:
      "リアルタイムで決算進捗を確認でき、月次決算が早まります。紙の領収書受け渡しが不要になり、税理士費用も2〜3割削減できる事例が多いです。",
  },
  {
    question: "税理士事務所はどのクラウドに対応していますか？",
    answer:
      "freee認定アドバイザーは7,500件以上、マネフォ公認メンバーは2,000件以上、弥生PAP会員は12,000件以上が登録されています。地域や業種で対応事務所を検索できます。",
  },
  {
    question: "クラウド連携のセキュリティは大丈夫ですか？",
    answer:
      "主要サービスはISO27001認証を取得し、通信は全てTLS暗号化。金融機関と同等のセキュリティ基準を満たしています。多要素認証も標準提供されます。",
  },
  {
    question: "途中でクラウドを切り替えできますか？",
    answer:
      "CSVエクスポート機能で過去データを移行できますが、勘定科目体系が変わるため移行作業に1〜2ヶ月要します。期首または決算後の切り替えがおすすめです。",
  },
];

const services = [
  { name: "freee会計", type: "クラウド会計", rate: "月980円〜（個人）/月2,680円〜（法人）", points: ["顧問契約数No.1の認定アドバイザー", "申告書作成まで完結", "法人プランでもバンキング連携無料"], bestFor: "起業直後・知識ゼロから始めたい人。" },
  { name: "マネーフォワード クラウド会計", type: "クラウド会計", rate: "月800円〜（個人）/月2,980円〜（法人）", points: ["金融機関連携数2,400以上", "他社サービスとAPI連携が豊富", "経費精算・給与計算と一体運用"], bestFor: "複数サービスを統合したい中堅企業。" },
  { name: "弥生会計オンライン", type: "クラウド会計", rate: "年26,000円〜（白色なら無料）", points: ["弥生PAP会員12,000事務所", "簿記知識ゼロでも仕訳補助", "電話サポート無料"], bestFor: "サポート手厚さを求める個人事業主。" },
  { name: "勘定奉行クラウド", type: "中堅向け", rate: "月8,000円〜", points: ["上場準備にも対応", "原価管理・部門別管理が強力", "監査法人との連携実績多数"], bestFor: "従業員30名以上・IPO準備企業。" },
  { name: "PCA会計クラウド", type: "中堅向け", rate: "月6,000円〜", points: ["業種別テンプレート豊富", "国内シェア上位の老舗", "会計事務所連携も柔軟"], bestFor: "業種特化の経理を行う企業。" },
];

export default function AccountantCloudComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "会計事務所クラウド連携", url: `${siteConfig.url}/guide/accountant-cloud-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】会計事務所クラウド連携比較｜freee・弥生・マネフォを徹底解説" description="顧問税理士・会計事務所と顧問先がクラウド会計でデータ共有する方法を解説。freee・弥生・マネーフォワードの連携機能・料金・対応事務所数を徹底比較します。" url={`${siteConfig.url}/guide/accountant-cloud-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>会計事務所クラウド連携</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】会計事務所クラウド連携比較｜freee・弥生・マネフォを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          顧問税理士に紙の領収書や帳簿を毎月渡していませんか？クラウド会計で連携すれば月次決算が2週間早まり、税理士費用も2〜3割削減可能。本記事では主要5サービスを連携機能・料金・対応事務所数で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">事業規模別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">個人事業主・1人法人 → freee会計</span></p>
          <p><span className="font-bold">複数サービス統合 → マネーフォワード</span></p>
          <p><span className="font-bold">老舗事務所と相性 → 弥生会計オンライン</span></p>
          <p><span className="font-bold">中堅・IPO準備 → 勘定奉行クラウド</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">クラウド連携のメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          会計事務所とのクラウド連携で得られるメリットは大きく4つあります。第一に月次決算のスピード化。銀行・クレカ・経費の自動取込で会計データがリアルタイム化し、税理士は当月分の数値を翌月初に確認できます。第二に税理士費用の削減。記帳代行作業が不要になり、月額顧問料が2〜3万円下がる事例が多数。第三に節税アドバイスの質向上。最新の数値を基に節税提案を受けられるため、年度末の駆け込み対応がなくなります。第四にBCP・テレワーク対応。災害やパンデミックでも事務所と顧問先の双方で同一データにアクセスでき、業務継続性が確保できます。連携はFreee・マネフォ・弥生のいずれも標準機能で、特別な設定費用はかかりません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要5サービスの詳細比較</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新情報は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">税理士との連携準備チェックリスト</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 顧問税理士の認定状況確認：</span>freee/マネフォ/弥生のどれに対応か。</p>
          <p><span className="font-bold text-foreground">2. 過去3期分のデータ準備：</span>移行用CSVの整備。</p>
          <p><span className="font-bold text-foreground">3. 勘定科目体系の擦り合わせ：</span>事前に税理士と統一。</p>
          <p><span className="font-bold text-foreground">4. 銀行・カードのAPI連携設定：</span>主要金融機関を網羅。</p>
          <p><span className="font-bold text-foreground">5. アクセス権限ルール策定：</span>担当者・税理士・閲覧者を分離。</p>
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
            会計事務所とのクラウド連携は、もはや「あれば便利」ではなく「必須」の時代です。月次決算のスピードアップ、税理士費用の削減、節税アドバイスの質向上など、得られる効果は導入コストを大きく上回ります。まずは顧問税理士の対応クラウドを確認し、業務規模と予算に合うサービスを選びましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">クラウド会計を試してみる</h2>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">freee/弥生/マネフォ</p>
          </Link>
          <Link href="/guide/tax-accountant-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">税理士比較</span>
            <p className="text-xs text-muted mt-1">顧問税理士の選び方</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">インボイス対応</span>
            <p className="text-xs text-muted mt-1">適格請求書ソフト</p>
          </Link>
          <Link href="/guide/small-business-software" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">中小企業向けソフト</span>
            <p className="text-xs text-muted mt-1">業務効率化ツール</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
