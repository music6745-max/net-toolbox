import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】フリーランス独立スタートアップ完全バンドル｜必要な10サービス",
  description:
    "独立・フリーランスに必要なサービスを完全網羅。会計ソフト・ビジネスカード・レンタルサーバー・FP相談・税理士紹介・国民年金基金まで、独立1年目の最適ラインナップを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/freelance-startup-bundle-2026` },
};

const faqItems = [
  {
    question: "独立1年目に最低限必要なサービスは？",
    answer:
      "最低限は①会計ソフト（freeeまたはマネフォ）、②ビジネスカード（三井住友ビジネスオーナーズ）、③レンタルサーバー＋ドメイン（エックスサーバー）、④開業届作成、の4つ。合計で年3〜5万円の初期投資で事業の土台が整います。",
  },
  {
    question: "会社員時代の保険は解約すべき？",
    answer:
      "すぐには解約しないことが重要です。国民健康保険料・国民年金・加入中保険の月額を把握してから、FP相談で見直すのが安全。独立後は団体割引がなくなるため、個人向けの見直しを必ず行いましょう。",
  },
  {
    question: "独立前にやるべきことは？",
    answer:
      "①クレカ・住宅ローン等の申込は会社員中に済ませる、②退職金・iDeCo移換手続きを把握、③最低6ヶ月分の生活防衛資金確保、④事業用銀行口座開設、の4点。特にクレカ・ローン審査は会社員時代のほうが通りやすいのでマスト。",
  },
  {
    question: "青色申告と白色申告どちらを選ぶ？",
    answer:
      "間違いなく青色申告（65万円控除）です。会計ソフトを使えば白色と手間はほぼ変わらず、税金が年5〜15万円節約できます。開業届と同時に「青色申告承認申請書」を税務署に提出するだけで、初年度から適用可能です。",
  },
];

const essentials = [
  {
    name: "会計ソフト（freee会計）",
    category: "会計・経理",
    price: "月1,180円〜（30日無料）",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
    highlight: "開業届・青色申告承認申請を無料で自動作成",
    badge: "必須",
    reasons: [
      "開業直後の書類作成を無料化（開業届・青色申告承認申請・事業計画書）",
      "レシートOCR・銀行連携でAI仕訳サジェスト",
      "確定申告書B・決算書の自動生成＋e-Tax連携",
      "認定税理士が全国に7,500人超",
    ],
  },
  {
    name: "ビジネスカード（三井住友ビジネスオーナーズ）",
    category: "決済・経費管理",
    price: "年会費永年無料",
    url: "https://www.smbc-card.com/nyukai/affiliate/business/bo_lp.jsp",
    highlight: "決算書不要で個人事業主でも申込可能",
    badge: "必須",
    reasons: [
      "本人確認書類のみで申込OK、開業直後でも審査通過実績多数",
      "追加カード18枚まで年会費無料（従業員・家族用）",
      "Amazon Business 利用で1.5%還元（ゴールド版）",
      "事業用と個人用を完全分離、経理工数を激減",
    ],
  },
  {
    name: "レンタルサーバー（エックスサーバー）",
    category: "Web・インフラ",
    price: "月693円〜（10日間無料）",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
    highlight: "独自ドメイン永年無料＋WordPress簡単インストール",
    badge: "必須",
    reasons: [
      "国内シェアNo.1、250万サイト運営の信頼性",
      "独自ドメイン永年無料（.com/.net/.info 等）",
      "WordPress簡単インストールで10分で公式サイト公開",
      "自動バックアップ・SSL無料・24時間サポート",
    ],
  },
  {
    name: "FP無料相談（保険見直しラボ）",
    category: "保険・資産",
    price: "相談料完全無料",
    url: "https://px.a8.net/svt/ejp?a8mat=3Z6F6O+1YZZGQ+38BE+5YRHE",
    highlight: "独立時の保険・社会保険の見直しに",
    badge: "推奨",
    reasons: [
      "独立後の国民健康保険・国民年金への切替相談",
      "会社員時代の団体保険の解約タイミング診断",
      "30社以上の保険会社を中立的に比較",
      "オンライン・訪問・店頭すべて対応",
    ],
  },
  {
    name: "iDeCo口座（SBI証券）",
    category: "老後資金",
    price: "運営管理手数料無料",
    url: "https://search.sbisec.co.jp/v2/popwin/info/stock/lp/lp_ideco.html",
    highlight: "個人事業主は月6.8万円まで全額所得控除",
    badge: "推奨",
    reasons: [
      "個人事業主の年金枠は月6.8万円（年81.6万円）",
      "全額所得控除＋運用益非課税のトリプル節税",
      "SBI証券はiDeCo手数料完全無料",
      "投資信託ラインナップ業界最多",
    ],
  },
  {
    name: "小規模企業共済",
    category: "退職金",
    price: "月1,000〜7万円",
    url: "https://www.smrj.go.jp/kyosai/skyosai/",
    highlight: "個人事業主の退職金積立、全額所得控除",
    badge: "推奨",
    reasons: [
      "月1,000〜7万円の掛金が全額所得控除",
      "20年超加入で元本割れなし",
      "低利の貸付制度あり（事業資金繰りに活用可）",
      "所得税30%なら年25万円の節税効果",
    ],
  },
  {
    name: "税理士無料紹介（税理士ドットコム）",
    category: "税務",
    price: "紹介料無料",
    url: "https://www.zeiri4.com/",
    highlight: "売上1,000万円超えたら検討、全国5,800人",
    badge: "推奨",
    reasons: [
      "全国5,800人超の税理士から業種・地域でマッチング",
      "コーディネーターによる面談事前サポート付き",
      "複数の税理士を比較して契約可能",
      "弁護士ドットコムグループの安心感",
    ],
  },
  {
    name: "投資スクール（ファイナンシャルアカデミー）",
    category: "学習",
    price: "無料体験セミナーあり",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1O1O+G8NPLM+1IRY+25I7J5",
    highlight: "資産運用・節税を体系的に学ぶ",
    badge: "学習",
    reasons: [
      "株式・投資信託・不動産・保険の基礎から応用まで",
      "累計受講生78万人超の日本最大級投資スクール",
      "無料体験セミナー（オンライン/対面選択可）",
      "独立後の節税・資産運用の体系的理解に",
    ],
  },
  {
    name: "副業マッチング（クラウドワークス）",
    category: "案件獲得",
    price: "登録無料",
    url: "https://px.a8.net/svt/ejp?a8mat=2NR2GS+DFNXFM+0K3Y+61RIP",
    highlight: "独立直後の売上不足を補う案件プール",
    badge: "推奨",
    reasons: [
      "日本最大級のクラウドソーシング、登録企業70万社",
      "ライター・デザイナー・エンジニア全職種対応",
      "独立直後の「繋ぎ仕事」として月3〜10万円確保",
      "実績を積めば単価アップで安定収益に",
    ],
  },
  {
    name: "アンケートモニター（マクロミル）",
    category: "副収入",
    price: "登録無料",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD",
    highlight: "スキマ時間で月5,000〜15,000円",
    badge: "副収入",
    reasons: [
      "業界最大手、スマホで数分のアンケートに回答",
      "スキマ時間で月5,000〜15,000円の副収入",
      "現金・Amazon・楽天Edy等に交換可能",
      "独立直後のキャッシュフロー補填に最適",
    ],
  },
];

export default function FreelanceStartupBundlePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "フリーランス独立バンドル", url: `${siteConfig.url}/guide/freelance-startup-bundle-2026` },
        ]}
      />
      <ArticleJsonLd
        headline="【2026年最新】フリーランス独立スタートアップ完全バンドル｜必要な10サービス"
        description="独立・フリーランスに必要なサービスを完全網羅。会計ソフト・ビジネスカード・レンタルサーバー・FP相談・税理士紹介・国民年金基金まで、独立1年目の最適ラインナップを解説。"
        url={`${siteConfig.url}/guide/freelance-startup-bundle-2026`}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>フリーランス独立バンドル</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">独立・フリーランス</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】フリーランス独立スタートアップ完全バンドル｜必要な10サービスを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          会社員からフリーランス・個人事業主への独立は人生最大の転機の一つ。会計ソフト・ビジネスカード・レンタルサーバー・FP相談・iDeCo・税理士紹介など、独立1年目に必要な10サービスを完全網羅。年間3〜5万円の初期投資で、事業の土台と老後資金の両方を固めることができます。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">独立1年目の最適ラインナップ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">【必須】</span>会計ソフト／ビジネスカード／レンタルサーバー</p>
          <p><span className="font-bold">【推奨】</span>FP相談／iDeCo／小規模企業共済／税理士紹介／投資スクール</p>
          <p><span className="font-bold">【副収入】</span>クラウドワークス／マクロミル</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">独立後に待ち受ける5つの現実</h2>
        <p className="text-muted leading-relaxed mb-4">
          会社員からフリーランスになった瞬間、すべての社会保障・税金・経理手続きを自分で行う必要が発生します。①社会保険料が会社負担分消え、個人負担で月5〜10万円増、②年金が月6.5万円しかもらえなくなる、③クレカ・住宅ローン審査が通りにくい、④確定申告の全責任を負う、⑤生活の不安定化——これらの現実に対する準備を、独立前から計画的に進めることが成功の鍵です。本記事で紹介する10サービスは、この5つの課題を網羅的にカバーする最強の組合せになります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">独立に必要な10サービス詳細</h2>
        <div className="space-y-5">
          {essentials.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.category}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">{b.badge}</span>
              </div>
              <p className="text-sm font-bold mb-1">料金：{b.price}</p>
              <p className="text-sm text-primary mb-3">{b.highlight}</p>
              <ul className="space-y-1 mb-4">
                {b.reasons.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <a
                href={b.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors"
              >
                公式サイトで詳細 →
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新情報は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">独立前3ヶ月のチェックリスト</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">3ヶ月前：</span>クレカ・住宅ローン申込、事業用銀行口座開設、生活防衛資金6ヶ月分確保の最終チェック。</p>
          <p><span className="font-bold text-foreground">2ヶ月前：</span>退職日の確定、有給休暇消化計画、iDeCoの移換手続き検討、事業計画書ドラフト。</p>
          <p><span className="font-bold text-foreground">1ヶ月前：</span>健康保険任意継続 or 国民健康保険の比較、税務署への開業届出準備、事業ドメイン・サーバー手配。</p>
          <p><span className="font-bold text-foreground">独立後1週間：</span>開業届・青色申告承認申請（freee経由）、国民年金・国保切替、ビジネスカード申込。</p>
          <p><span className="font-bold text-foreground">独立後1ヶ月：</span>会計ソフトで仕訳開始、FP相談で保険見直し、iDeCo口座開設、小規模企業共済加入。</p>
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
        <h2 className="text-xl font-bold mb-4">独立最初の一歩はここから</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "開業届・青色申告承認申請を無料作成、30日無料", price: "月1,180円〜", badge: "必須" },
            { name: "三井住友カード ビジネスオーナーズ", url: "https://www.smbc-card.com/nyukai/affiliate/business/bo_lp.jsp", highlight: "年会費永年無料、個人事業主でも申込OK", price: "年会費無料", badge: "必須" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "独自ドメイン永年無料、10分でWordPress公開", price: "月693円〜", badge: "必須" },
          ]}
        />
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accountant-cloud-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">会計</div><div className="font-bold text-sm">会計事務所クラウド連携比較</div></Link>
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">副業</div><div className="font-bold text-sm">副業ツール比較</div></Link>
          <Link href="/guide/rental-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">サーバー</div><div className="font-bold text-sm">レンタルサーバー比較</div></Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">会計</div><div className="font-bold text-sm">会計ソフト比較</div></Link>
        </div>
      </section>
    </div>
  );
}
