import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】個人事業主向けクラウドソフト総合比較｜会計・請求書・勤怠を徹底解説",
  description:
    "個人事業主・フリーランスが導入すべきクラウドソフトを会計・請求書・勤怠・経費精算の4領域で徹底比較。freee・弥生・マネーフォワードの選び方と料金・連携機能を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/small-business-software` },
};

const faqItems = [
  {
    question: "個人事業主に会計ソフトは本当に必要ですか？",
    answer:
      "青色申告55万円控除を受けるには複式簿記での記帳が必須であり、クラウド会計ソフトを使うと銀行・カードの取引を自動取込でき、記帳の手間を9割以上削減できます。年商300万円を超えたら導入必須と言えます。",
  },
  {
    question: "freee・弥生・マネーフォワードはどう違いますか？",
    answer:
      "freeeは簿記知識ゼロでも使えるUI重視、弥生は老舗で低価格・デスクトップ併用可、マネーフォワードは銀行連携数がトップクラスで法人移行もスムーズ。会計初心者はfreee、コスト最優先なら弥生、連携重視ならマネーフォワードが目安です。",
  },
  {
    question: "無料プランだけで運用できますか？",
    answer:
      "取引件数が少ない開業初年度は無料プランでも対応可能ですが、e-Tax送信・インボイス対応・サポート利用には有料プラン（月額1,000〜3,000円台）への加入が必須になります。",
  },
  {
    question: "勤怠・請求書管理ソフトも別途必要ですか？",
    answer:
      "従業員を雇う予定がなければ、請求書発行とインボイス対応機能が含まれる会計ソフトのオプションで十分です。外注先が増えたらMakeLeaps・board等の専用サービス導入を検討しましょう。",
  },
];

const tools = [
  {
    name: "freee会計",
    type: "クラウド会計",
    price: "月980円〜",
    points: [
      "簿記知識ゼロでも感覚的に操作できる",
      "確定申告から法人決算までワンストップ",
      "電子帳簿保存法・インボイス完全対応",
    ],
    bestFor: "会計初心者の個人事業主、開業1〜3年目の方。",
  },
  {
    name: "弥生オンライン（やよいの青色申告）",
    type: "クラウド会計",
    price: "初年度無料〜",
    points: [
      "初年度無料キャンペーンあり",
      "業界シェアNo.1の安心感",
      "電話サポートが手厚い",
    ],
    bestFor: "コスト重視・サポート重視の方、家族経営の小規模事業者。",
  },
  {
    name: "マネーフォワード クラウド",
    type: "クラウド会計",
    price: "月980円〜",
    points: [
      "銀行・カード連携数が業界トップクラス",
      "給与・勤怠・経費精算まで統合可能",
      "法人化してもそのまま利用継続できる",
    ],
    bestFor: "将来の法人化を視野に入れる成長志向の個人事業主。",
  },
  {
    name: "ジョブカン勤怠管理",
    type: "勤怠管理",
    price: "月200円/人〜",
    points: [
      "従業員1人から導入可能",
      "打刻方法が豊富（Slack・LINE連携）",
      "シフト管理と有休管理を統合",
    ],
    bestFor: "アルバイト・パートを雇っている事業者。",
  },
  {
    name: "MakeLeaps",
    type: "請求書発行",
    price: "月500円〜",
    points: [
      "適格請求書を自動発行",
      "入金管理・督促メールを自動化",
      "Salesforce・マネーフォワード連携",
    ],
    bestFor: "取引先数が月10件を超える個人事業主。",
  },
];

export default function SmallBusinessSoftwarePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "個人事業主向けクラウドソフト比較", url: `${siteConfig.url}/guide/small-business-software` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】個人事業主向けクラウドソフト総合比較" description="個人事業主・フリーランスが導入すべきクラウドソフトを会計・請求書・勤怠・経費精算の4領域で徹底比較。" url={`${siteConfig.url}/guide/small-business-software`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>個人事業主向けクラウドソフト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】個人事業主向けクラウドソフト総合比較｜会計・請求書・勤怠を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          インボイス制度・電子帳簿保存法の本格運用により、個人事業主にもデジタル経理が事実上必須になりました。2026年現在、導入しておきたいクラウドソフトを会計・請求書・勤怠・経費精算の4ジャンルで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">会計初心者 → freee会計</span></p>
          <p><span className="font-bold">コスト最優先 → 弥生オンライン</span></p>
          <p><span className="font-bold">成長・法人化志向 → マネーフォワード</span></p>
          <p><span className="font-bold">雇用あり → ジョブカン勤怠</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">個人事業主がクラウドソフトを導入すべき理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          2023年以降のインボイス制度と電子帳簿保存法改正により、紙の領収書管理や手書き帳簿は実質的に限界を迎えています。クラウドソフトを使えば、銀行口座・クレジットカード・電子マネーの取引明細を自動で取り込み、AIが仕訳候補を提案してくれるため、経理に割く時間を月10時間以上削減できる事例が多数あります。さらに青色申告特別控除65万円（e-Tax送信時）を受けるには複式簿記と電子帳簿保存が要件となるため、節税メリットも大きくなります。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">ソフト選びで失敗しないポイント</h3>
        <p className="text-muted leading-relaxed mb-4">
          選定基準は「料金」「使いやすさ」「連携範囲」「サポート体制」の4軸。特に銀行・クレカ連携先が自分のメイン金融機関に対応しているかは必ず事前確認しましょう。また、税理士に依頼している場合は税理士が対応しているソフトに合わせるのが無難です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめクラウドソフト5選の詳細</h2>
        <div className="space-y-6">
          {tools.map((t, idx) => (
            <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{t.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{t.price}</p>
              <ul className="space-y-1 mb-4">
                {t.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{t.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">導入ステップと運用のコツ</h2>
        <p className="text-muted leading-relaxed mb-4">
          導入は「無料プランで試用 → 銀行・カード連携 → 仕訳ルール学習 → 月次締めを習慣化」の順が王道です。最初の1ヶ月は取引の自動仕訳精度が上がるまで手動修正が必要ですが、2ヶ月目以降は大半の仕訳が自動化されます。月末10分のチェックを習慣化すれば、確定申告期にまとめて処理する苦労から解放されます。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">失敗しがちな落とし穴</h3>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>事業用とプライベートの口座・カードを混在させると仕訳が激増する</li>
          <li>勘定科目を独自に作りすぎると税理士レビュー時に混乱する</li>
          <li>インボイス番号の登録忘れで仕入税額控除を受けられない</li>
          <li>電子取引データを紙保存していると電帳法違反になる</li>
        </ul>
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
            個人事業主にとってクラウドソフトはコストではなく投資です。月1,000〜3,000円の支出で経理に割く時間を1/10に短縮でき、青色申告特別控除で節税効果も得られます。まずは無料プランで1ヶ月試し、使いやすさと連携精度を体感してから本契約に進むのが失敗しない選び方です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">おすすめクラウド会計ソフトに申し込む</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "初年度無料・老舗の安心感", price: "初年度無料〜", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "簿記知識ゼロで使える", price: "月980円〜" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "銀行連携数トップクラス", price: "月980円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">副業・フリーランス向け</p>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">請求書システム比較</span>
            <p className="text-xs text-muted mt-1">インボイス対応サービス</p>
          </Link>
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業ツール総合</span>
            <p className="text-xs text-muted mt-1">副業を始めるなら</p>
          </Link>
          <Link href="/guide/side-business-fee-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業の確定申告比較</span>
            <p className="text-xs text-muted mt-1">手数料・サポート比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
