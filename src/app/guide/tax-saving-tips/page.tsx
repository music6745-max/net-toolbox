import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

const TITLE = "個人事業主の節税完全ガイド【2026年最新】今すぐ使える15の節税テクニック";
const DESC = "個人事業主・フリーランス向けの節税テクニックを2026年度の最新税制に合わせて徹底解説。青色申告65万円控除・経費計上・小規模企業共済・iDeCo・ふるさと納税・インボイス対応まで網羅します。";
const URL = `${siteConfig.url}/guide/tax-saving-tips`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const faqItems = [
  { question: "青色申告と白色申告、どちらが良いですか？", answer: "事業を本格化するなら青色申告一択です。65万円の特別控除・赤字の3年繰越・家族への給与を経費算入可能など、白色にはないメリットが豊富で、節税効果は年20〜30万円に及ぶこともあります。" },
  { question: "経費として計上できる範囲はどこまで？", answer: "事業に関連するものであれば家賃の一部、通信費、書籍、ソフトウェア、取引先との飲食代（接待交際費）、交通費などが経費にできます。私用と混在するものは按分（家事按分）で割合計上します。" },
  { question: "小規模企業共済とiDeCoは両方やるべき？", answer: "両方活用するのが理想です。小規模企業共済は掛金全額が所得控除、iDeCoは所得控除に加えて運用益が非課税と、それぞれ別の枠で節税できます。資金繰りに余裕があれば両方の上限近くまで利用しましょう。" },
  { question: "インボイス制度への対応は必要ですか？", answer: "取引先が課税事業者中心の場合、インボイス登録しないと取引を継続してもらえないリスクがあります。一方BtoC中心なら免税事業者のままでも問題ないケースが多く、事業構造に合わせて判断が必要です。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "個人事業主の節税完全ガイド", url: URL },
      ]} />
      <ArticleJsonLd headline={TITLE} description={DESC} url={URL} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>個人事業主の節税完全ガイド</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{TITLE}</h1>
      <p className="text-muted leading-relaxed mb-8">
        フリーランスや個人事業主として独立した方が最初にぶつかる壁が「税金の多さ」です。会社員時代は源泉徴収で完結していたものが、独立すると所得税・住民税・国民健康保険・個人事業税・消費税まで自分で管理することになります。しかし逆に言えば、正しい知識さえあれば節税の選択肢は会社員より遥かに多いのが個人事業主の特権。本ガイドでは2026年度の最新税制をベースに、今日から実行できる15の具体的な節税テクニックをまとめました。
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 青色申告で65万円控除を取る</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>節税の第一歩は迷わず青色申告です。複式簿記＋e-Taxによる電子申告を行えば最大65万円の特別控除を受けられ、単純計算で所得税率20%の方なら年13万円・住民税込みで19万円以上が戻ってきます。freeeやマネーフォワード、弥生会計といった会計ソフトを使えば複式簿記の知識がなくても自動で帳簿を作成してくれるため、導入のハードルは大きく下がっています。</p>
          <p>青色申告には他にも、純損失の3年繰越、30万円未満の資産の即時償却、家族への専従者給与計上など独立事業者にとって非常に強力な特典がセットになっています。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 経費計上を正しく徹底する</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>事業に直接関連する支出はもれなく経費計上しましょう。自宅兼オフィスなら家賃・電気代・通信費の30〜50%を家事按分で計上、書籍・教材・ソフトウェア・サブスクリプションは100%経費、取引先との食事代も打合せ目的なら会議費や接待交際費として処理できます。</p>
          <p>よく見落とされるのが、PCやデスクなどの「10万円未満の消耗品」「10万円以上30万円未満の少額減価償却資産（青色申告者は年300万円まで一括経費化可能）」の特例です。新PCやモニターの購入は戦略的に期末に行うと、その年度の所得を圧縮できます。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 小規模企業共済でダブル節税</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>個人事業主にとって「最強の節税ツール」と言われるのが小規模企業共済です。月額1,000円〜70,000円まで任意で設定でき、掛金全額が所得控除になります。上限まで掛ければ年84万円の所得控除、税率30%の方なら年25万円の節税効果です。</p>
          <p>しかも、これは「税金が減る」だけでなく「将来の退職金」としてプールされる仕組みなので、老後資金準備と節税を同時にできる稀有な制度です。廃業時や高齢時の受給は退職所得扱いで税率が大きく下がるのもメリットです。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. iDeCo・NISAで運用益まで非課税に</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>iDeCo（個人型確定拠出年金）は個人事業主なら月68,000円・年81.6万円まで掛けられ、全額が所得控除となります。さらに運用益も非課税、受給時も退職所得/年金控除が適用される三重の節税制度です。</p>
          <p>2024年から恒久化・拡充された新NISAは、年間360万円・生涯1,800万円まで非課税で投資可能。節税というより「利益にかかる税金を減らす」制度ですが、長期運用では100万円単位で税負担が変わるため必須です。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. ふるさと納税で住民税を還元品に変える</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>ふるさと納税は厳密には「節税」ではありませんが、実質2,000円の自己負担で返礼品を受け取れるお得な制度です。個人事業主の上限額は所得に応じて変わりますが、年所得500万円なら約6万円、1,000万円なら約17万円分の寄付が可能です。</p>
          <p>楽天ふるさと納税ならSPUと組み合わせて寄付額の最大30%相当のポイント還元も得られるため、実質プラスになるケースすらあります。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. その他の即効性ある節税テクニック10選</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <ol className="text-sm text-muted space-y-2 list-decimal list-inside">
            <li>家族への専従者給与（青色事業専従者給与）</li>
            <li>経営セーフティ共済（掛金年240万円まで経費計上）</li>
            <li>健康保険・国民年金の前納割引</li>
            <li>医療費控除・セルフメディケーション税制</li>
            <li>生命保険料控除・地震保険料控除</li>
            <li>不動産所得と事業所得の損益通算</li>
            <li>消費税の簡易課税選択（年商5000万円以下）</li>
            <li>短期前払費用の特例（1年以内の支出を即時経費化）</li>
            <li>30万円未満資産の少額減価償却特例</li>
            <li>セーフティネット共済・経営セーフティ掛金の活用</li>
          </ol>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map(item => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">会計ソフトで作業を効率化</h2>
        <p className="text-sm text-muted mb-3">節税は日々の記帳の正確さから始まります。freeeや弥生などの会計ソフトを比較してみましょう。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/accounting-software-comparison" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">会計ソフト比較</Link>
          <Link href="/guide/tax-software-comparison" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">確定申告ソフト比較</Link>
          <Link href="/guide/furusato-tax-comparison" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">ふるさと納税サイト比較</Link>
        </div>
      </section>

      <GuideRelatedLinks currentSlug="tax-saving-tips" />
    </div>
  );
}
