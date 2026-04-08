import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】カードローン・キャッシング比較おすすめ5選｜金利・審査・即日融資を徹底解説",
  description:
    "プロミス・アコム・SMBCモビット・アイフル・楽天銀行スーパーローンを金利・審査スピード・無利息期間で徹底比較。即日融資・在籍確認なしの選び方まで解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/cashing-comparison` },
};

const faqItems = [
  {
    question: "消費者金融と銀行カードローンの違いは？",
    answer:
      "消費者金融は審査が早く即日融資にも対応しますが金利は年14.5〜18.0%とやや高めです。銀行カードローンは金利1.5〜14.5%と低い反面、警察庁データベース照会のため最短でも翌営業日以降の融資となります。30日間無利息サービスは消費者金融大手にしかありません。",
  },
  {
    question: "在籍確認は必ず行われますか？",
    answer:
      "原則として勤務先への電話確認がありますが、SMBCモビットのWEB完結申込やプロミスでは書類提出のみで電話確認が省略できるケースがあります。プライバシーを重視するならWEB完結対応の業者を選びましょう。",
  },
  {
    question: "総量規制とは何ですか？",
    answer:
      "貸金業法に基づき、消費者金融は年収の3分の1を超える貸付ができません。年収300万円なら借入可能額は最大100万円。銀行カードローンは銀行法が適用されるため総量規制の対象外ですが、自主規制で年収の半分程度が上限になっています。",
  },
  {
    question: "ブラックリストに載っていても借りられますか？",
    answer:
      "信用情報機関(CIC・JICC・KSC)に延滞や債務整理の記録がある場合、大手の審査通過は極めて困難です。中小消費者金融でも直近5年以内の異動情報があると審査落ちが一般的。生活に困窮している場合は社会福祉協議会の生活福祉資金貸付制度の利用を検討してください。",
  },
  {
    question: "無利息期間のお得な使い方は？",
    answer:
      "プロミス・アコム・アイフルでは初回契約から30日間の無利息期間があります。給料日までの短期つなぎ融資なら実質無利息で利用可能。ただし期間内に完済できないと通常金利が発生するため、返済計画を立てて利用しましょう。",
  },
];

const services = [
  { name: "プロミス", type: "消費者金融", rate: "年4.5〜17.8%", points: ["最短20分融資・最短15秒事前審査", "30日間無利息(初回・メアド登録)", "WEB完結で電話連絡なし対応"], bestFor: "とにかく早く借りたい人、初めての利用者。" },
  { name: "アコム", type: "消費者金融", rate: "年3.0〜18.0%", points: ["最短20分審査・即日融資対応", "30日間金利0円サービス", "クレジットカード機能付き(ACマスターカード)"], bestFor: "初めてカードローンを使う人。" },
  { name: "SMBCモビット", type: "消費者金融", rate: "年3.0〜18.0%", points: ["WEB完結申込で電話・郵送物なし", "Tポイントが貯まる・使える", "三井住友銀行ATM手数料無料"], bestFor: "勤務先への在籍確認を避けたい人。" },
  { name: "アイフル", type: "消費者金融", rate: "年3.0〜18.0%", points: ["原則として電話による在籍確認なし", "最短20分融資", "30日間無利息サービス"], bestFor: "家族や職場に内緒で借りたい人。" },
  { name: "楽天銀行スーパーローン", type: "銀行", rate: "年1.9〜14.5%", points: ["低金利・最大800万円", "楽天会員ランクで審査優遇", "総量規制対象外"], bestFor: "低金利重視・楽天ユーザー。" },
];

export default function CashingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "カードローン比較", url: `${siteConfig.url}/guide/cashing-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】カードローン・キャッシング比較おすすめ5選｜金利・審査・即日融資を徹底解説" description="プロミス・アコム・SMBCモビット・アイフル・楽天銀行スーパーローンを金利・審査スピード・無利息期間で徹底比較。" url={`${siteConfig.url}/guide/cashing-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>カードローン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】カードローン・キャッシング比較おすすめ5選｜金利・審査・即日融資を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          急な出費でお金が必要なとき、頼りになるのがカードローン・キャッシング。しかし業者選びを間違えると金利の負担が重くなり、返済が長引いてしまいます。本記事では大手消費者金融4社と楽天銀行スーパーローンを金利・審査スピード・無利息期間・在籍確認の有無で徹底比較し、目的別の最適な1社を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">即日融資が必要 → プロミス・アコム</span></p>
          <p><span className="font-bold">在籍確認を避けたい → SMBCモビット・アイフル</span></p>
          <p><span className="font-bold">低金利で長期借入 → 楽天銀行スーパーローン</span></p>
          <p><span className="font-bold">初めての借入 → アコム(初心者サポート充実)</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">カードローン選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          カードローン選びで最も重要なのは「金利」「融資スピード」「無利息期間」「在籍確認の有無」の4点です。同じ50万円を借りても、年18%と年14.5%では年間利息が約1.75万円違います。短期間で返済できるなら30日間無利息サービスのある消費者金融が断然お得。一方で50万円以上を半年以上にわたり借りる場合は、銀行カードローンの低金利メリットが大きくなります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          また「総量規制」という法律により、消費者金融からの借入は年収の3分の1までと制限されています。年収300万円の方なら最大100万円が上限。これを超える借入が必要な場合は、総量規制対象外の銀行カードローンを選ぶ必要があります。ただし銀行は審査が厳しく、即日融資には対応していません。
        </p>
        <p className="text-muted leading-relaxed">
          審査スピードを重視するならWEB申込が必須。プロミス・アコム・アイフルはWEBから最短20分で融資が可能です。SMBCモビットの「WEB完結申込」を利用すれば、勤務先への電話連絡や自宅への郵送物もなく、家族や職場にバレずに借入できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめカードローン5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{s.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 金利・サービス内容は2026年4月時点の参考値です。最新条件は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">借りる前に知っておきたい注意点</h2>
        <p className="text-muted leading-relaxed mb-4">
          カードローンは便利な一方、安易な利用は家計を圧迫する原因にもなります。借入前に「返済計画」を必ず立てましょう。月々の返済額が手取り収入の20%を超えると生活が苦しくなる傾向があります。また複数社からの借入(多重債務)は信用情報を悪化させ、住宅ローンや自動車ローンの審査にも悪影響を及ぼします。
        </p>
        <p className="text-muted leading-relaxed">
          返済が困難になった場合は、早めに各社のカスタマーサービスへ相談することが重要。金融庁認定の貸金業相談・紛争解決センターや、日本貸金業協会の相談窓口でも無料相談が可能です。一度借入を始めると癖になりやすいため、家計簿アプリや会計ソフトで支出を可視化する習慣も身につけておきましょう。
        </p>
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
            カードローンは「即日性ならプロミス・アコム」「プライバシー重視ならSMBCモビット・アイフル」「低金利ならば楽天銀行」という選び分けが基本。借入後は家計簿アプリや会計ソフトで返済状況を見える化し、無利息期間内の完済を目指せば負担を最小化できます。複数社の同時借入は避け、必要最小限の金額に留めることが家計を守るコツです。
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/debt-consolidation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">おまとめローン比較</span>
            <p className="text-xs text-muted mt-1">複数借入の一本化に</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">日々の支払いを最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
