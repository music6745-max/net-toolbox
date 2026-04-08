import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】請求書・電子インボイス比較おすすめ5選｜料金・インボイス制度対応・会計連携を徹底解説",
  description:
    "適格請求書発行事業者の登録番号対応・電子帳簿保存法対応・会計ソフト連携を基準に、請求書発行サービスを徹底比較。個人事業主から中小企業まで最適な1つが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/invoice-system-comparison` },
};

const faqItems = [
  {
    question: "インボイス制度対応の請求書サービスは必須ですか？",
    answer:
      "課税事業者なら必須と言えます。適格請求書発行事業者の登録番号・税率ごとの消費税額・区分記載などインボイス要件を満たす請求書を発行する必要があり、手書きやWordでは管理が煩雑になります。",
  },
  {
    question: "電子帳簿保存法にはどう対応すべきですか？",
    answer:
      "2024年1月から電子取引データの電子保存が義務化されました。請求書サービスはタイムスタンプ・検索要件を満たす保存機能を備えており、コンプライアンス対応の観点で導入メリットが大きいです。",
  },
  {
    question: "無料プランはありますか？",
    answer:
      "Misoca・マネーフォワード クラウド請求書などは無料プランがあり、月数件の請求書発行なら無料で運用できます。発行枚数が増えたら有料プランに移行するのがおすすめです。",
  },
  {
    question: "会計ソフトとの連携は重要ですか？",
    answer:
      "非常に重要です。請求書発行と同時に売上仕訳が自動で会計ソフトに反映されれば、月末の経理業務が大幅に削減できます。同シリーズの会計ソフトを使う前提で選ぶのが効率的です。",
  },
];

const services = [
  { name: "マネーフォワード クラウド請求書", type: "クラウド", fee: "月額0円〜", points: ["無料プランで月3件まで発行可", "インボイス制度・電帳法フル対応", "マネフォ会計と自動連携"], bestFor: "マネフォ会計ユーザー、個人事業主。" },
  { name: "freee 請求書", type: "クラウド", fee: "freee会計に付属", points: ["freee会計とシームレス連携", "郵送代行オプションあり", "スマホ発行にも対応"], bestFor: "freee会計を利用中の事業者。" },
  { name: "Misoca（弥生）", type: "クラウド", fee: "月額0円〜", points: ["年10枚まで無料", "見積→納品→請求の一気通貫", "弥生会計と連携可能"], bestFor: "請求業務を月数件程度行う個人事業主。" },
  { name: "board", type: "クラウド", fee: "月額980円〜", points: ["案件管理・工数管理も一括", "キャッシュフロー予測機能", "個人事業主〜中小企業向け"], bestFor: "案件ベースで売上管理したい事業者。" },
  { name: "楽楽明細", type: "クラウド", fee: "月額25,000円〜", points: ["郵送・メール・Web発行を一括管理", "発行枚数無制限プランあり", "大量発行に強い"], bestFor: "月100件以上の請求書を発行する中小〜中堅企業。" },
];

export default function InvoiceSystemComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "請求書・電子インボイス比較", url: `${siteConfig.url}/guide/invoice-system-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】請求書・電子インボイス比較おすすめ5選" description="インボイス制度・電子帳簿保存法対応の請求書発行サービスを料金・機能・会計連携で徹底比較。" url={`${siteConfig.url}/guide/invoice-system-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>請求書・電子インボイス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】請求書・電子インボイス比較おすすめ5選｜料金・インボイス制度対応・会計連携を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          2023年10月スタートのインボイス制度、2024年1月本格適用の電子帳簿保存法により、請求書業務は大きく変化しました。法制度に対応した請求書サービスの選び方と主要5つの比較を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">無料で始めたい → マネーフォワード クラウド請求書</span></p>
          <p><span className="font-bold">freee会計ユーザー → freee 請求書</span></p>
          <p><span className="font-bold">案件管理も一括 → board</span></p>
          <p><span className="font-bold">大量発行 → 楽楽明細</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">インボイス制度対応のチェックポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          適格請求書として認められるには「発行者の登録番号・取引年月日・取引内容・税率ごとの税抜/税込金額と消費税額・受領者名」の6要件が必要です。これらを手動管理するのは現実的でなく、クラウド請求書サービスを使うのが最も確実です。発行側の要件だけでなく、受け取った側も仕入税額控除のために適格請求書を保存する必要があるため、取引先との電子授受の仕組みも重要になります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          電子帳簿保存法では、電子取引データを電子のまま保存する義務があります。タイムスタンプ・訂正削除履歴・検索要件などを満たす必要があり、クラウド請求書サービスは標準でこれらを備えています。紙の保管スペースもなくなるため、中長期的にコスト削減効果も大きいです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ請求書サービス5選の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{s.fee}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金・機能は2026年4月時点の参考値です。最新の条件は各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">請求書サービス導入の効果</h2>
        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">業務時間の削減</h3>
            <p className="text-sm text-muted leading-relaxed">テンプレートからの自動作成・繰り返し請求・郵送代行などにより、月の請求業務時間を1/3〜1/5に削減できます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">入金管理の自動化</h3>
            <p className="text-sm text-muted leading-relaxed">銀行口座と連携すれば入金が自動照合され、未入金の請求書のみ督促リストに表示。回収率が改善します。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">税務調査への備え</h3>
            <p className="text-sm text-muted leading-relaxed">電帳法に準拠した形で保存され、検索要件も満たすため、税務調査時にも即座にデータを提示できます。</p>
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
            請求書サービスは「インボイス制度対応・電帳法対応・会計ソフト連携」の3点を必ず満たすものを選びましょう。個人事業主ならマネフォ請求書やMisocaの無料プランから始め、発行数が増えたら有料プランへ移行するのが王道。中小企業以上なら会計ソフトと同シリーズで揃えるのが最も効率的です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">会計ソフトも併用しよう</h2>
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
        <Link href="/tools/invoice-tax-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">インボイス税額計算ツールを使う</div>
          <p className="text-xs text-muted">適格・非適格取引での消費税差額を即座に試算 →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">請求書連携で経理を自動化</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">申告まで一気通貫</p>
          </Link>
          <Link href="/guide/company-credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法人カード比較</span>
            <p className="text-xs text-muted mt-1">経費管理と合わせて</p>
          </Link>
          <Link href="/guide/business-bank-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ビジネス銀行口座比較</span>
            <p className="text-xs text-muted mt-1">入金管理に必須</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
