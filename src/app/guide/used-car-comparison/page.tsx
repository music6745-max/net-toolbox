import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】中古車購入サービス比較おすすめ5選｜ガリバー・ビッグモーター後・ネクステージ徹底比較",
  description:
    "ガリバー・ネクステージ・カーセンサー・グーネット・USS中古車サイトの料金体系・在庫数・保証内容を徹底比較。中古車購入で失敗しないサービスの選び方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/used-car-comparison` },
};

const faqItems = [
  {
    question: "中古車販売店とオークション代行どっちがいい？",
    answer:
      "店頭販売は実車確認・試乗ができ保証も手厚い反面、価格は3〜5割程度オークション相場より高くなります。オークション代行(USS等)は中間マージンがなく安く買えますが、現車確認できない・整備が別料金などのデメリットがあります。初心者は店頭販売、慣れた方はオークション代行がおすすめ。",
  },
  {
    question: "認定中古車とは？",
    answer:
      "メーカー(トヨタ・ホンダ・日産など)が品質基準を設け、点検整備・保証付きで販売する中古車です。一般中古車より価格は2〜3割高めですが、メーカー保証が1〜2年付帯し故障時の修理費負担がない安心感があります。長く乗りたい方には認定中古車がおすすめ。",
  },
  {
    question: "中古車の総額表示で注意すべき点は？",
    answer:
      "車両本体価格だけでなく「諸費用」(登録費用・自動車税・自賠責保険・整備費用)を含めた総額を必ず確認しましょう。総額表示義務化により、現在は本体価格と総額の両方を表示する義務があります。総額と本体価格の差が30万円以上ある業者は要注意です。",
  },
  {
    question: "中古車ローンは銀行とディーラーどちらがお得？",
    answer:
      "金利だけ見れば銀行マイカーローン(年1〜3%)が圧倒的に有利。ディーラーローンは年4〜8%と高めですが審査が緩く、購入と同時に手続きが完了する手軽さがあります。300万円を5年借りる場合、銀行ローンとディーラーローンで総返済額は40万円以上変わることがあります。",
  },
];

const services = [
  { name: "ガリバー", type: "全国チェーン", rate: "在庫50万台超", points: ["全国460店舗のネットワーク", "100日以内返品保証", "1年間故障保証(全車対応)"], bestFor: "保証重視・全国どこでも対応してほしい人。" },
  { name: "ネクステージ", type: "全国チェーン", rate: "在庫3万台超", points: ["最大2年間の無料保証", "全国270店舗", "車両品質チェック実施済"], bestFor: "保証期間を長く取りたい人。" },
  { name: "カーセンサー", type: "情報サイト", rate: "在庫50万台超", points: ["全国の中古車を検索可能", "認定中古車検索機能", "ローン・保険シミュレーション"], bestFor: "全国の中古車を比較したい人。" },
  { name: "グーネット", type: "情報サイト", rate: "在庫45万台超", points: ["業界最大級の検索サイト", "希望条件登録で新着通知", "車種ごとの相場グラフ表示"], bestFor: "相場を把握しながら探したい人。" },
  { name: "USS中古車サイト", type: "オークション", rate: "業界最大級", points: ["業者向けオークション", "中間マージンが少なく安価", "現車確認は事前予約制"], bestFor: "とにかく安く買いたい中・上級者。" },
];

export default function UsedCarComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "中古車購入比較", url: `${siteConfig.url}/guide/used-car-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】中古車購入サービス比較おすすめ5選" description="ガリバー・ネクステージ・カーセンサー・グーネット・USS中古車サイトの料金体系・在庫数・保証内容を徹底比較。" url={`${siteConfig.url}/guide/used-car-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>中古車購入比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】中古車購入サービス比較おすすめ5選｜ガリバー・ネクステージ・カーセンサー徹底比較
        </h1>
        <p className="text-muted leading-relaxed">
          新車価格高騰と納期長期化を背景に、中古車市場が活況を呈しています。しかし業者選びを間違えると、整備不良車や事故修復歴隠しなどトラブルに巻き込まれるリスクも。本記事では大手中古車販売店からポータルサイト、オークション代行まで5つのサービスを比較し、安心して購入できる方法を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">保証の手厚さ → ネクステージ・ガリバー</span></p>
          <p><span className="font-bold">在庫数で比較 → カーセンサー・グーネット</span></p>
          <p><span className="font-bold">価格重視 → USS中古車サイト</span></p>
          <p><span className="font-bold">初めての中古車 → ガリバー(返品保証あり)</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">中古車購入の基礎知識</h2>
        <p className="text-muted leading-relaxed mb-4">
          中古車購入では「車両本体価格」「諸費用」「保証」「整備状況」の4点を総合判断する必要があります。同じ車種でも、業者によって総額が30万円以上違うこともあります。重要なのは「総額表示」で正確な支払額を比較すること。2023年10月から自動車公正取引協議会のガイドラインで、車両本体と諸費用込みの総額表示が原則義務化されました。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          また「修復歴」の有無は必ず確認しましょう。骨格部分の損傷を修理した車は走行性能や安全性に影響する恐れがあります。一般社団法人日本自動車査定協会の「修復歴の定義」を満たす車は、価格表示時に必ず明示する義務があります。
        </p>
        <p className="text-muted leading-relaxed">
          中古車は「現状車」と「整備保証付き」の2種類があります。現状車は安価ですが故障時の修理費は自己負担。整備保証付きは購入後3〜12ヶ月間の故障修理が無料という安心感があります。長く乗る予定なら保証付きを選びましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ中古車サービス5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">特徴：{s.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 在庫数・保証条件は2026年4月時点の参考値です。最新情報は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">中古車購入で失敗しないコツ</h2>
        <p className="text-muted leading-relaxed mb-4">
          1つ目のコツは「複数業者で同じ車種を比較する」こと。グーネットやカーセンサーで相場を把握してから店頭に行けば、ぼったくり価格を避けられます。同じ車種・年式・走行距離でも業者間で30万円以上違うのは珍しくありません。2つ目は「現車確認と試乗」を必ず行うこと。写真だけではわからない傷・におい・エンジン音は実車で確認するしかありません。
        </p>
        <p className="text-muted leading-relaxed">
          3つ目は「契約書の確認」。総額・保証内容・引渡時期・キャンセル規定を必ず書面でチェック。口頭の約束は後でトラブルになりやすいため、すべて契約書に明記してもらいましょう。購入後の維持費(自動車税・保険・整備)も家計簿アプリで管理し、無理のないカーライフを送ることが大切です。
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
            中古車購入は「価格・保証・在庫数」の3点で業者を選びましょう。初めてなら返品保証付きのガリバー、長期保証重視ならネクステージ、徹底比較したいならカーセンサー・グーネット、価格重視なら中・上級者向けのUSSオークションが最適。購入後は会計ソフトや家計簿アプリで維持費を管理し、無駄のないカーライフを実現できます。
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
          <Link href="/guide/car-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車ローン比較</span>
            <p className="text-xs text-muted mt-1">購入資金を低金利で</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">納車前の必須準備</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
