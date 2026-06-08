import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

const TITLE = "Amazonプライム vs 楽天プレミアム徹底比較【2026年最新】どちらがお得？";
const DESC = "Amazonプライムと楽天プレミアム（楽天市場優待）を会費・特典・配送・動画見放題・ポイント還元で徹底比較。あなたのライフスタイルに合うのはどちら？使い分けのコツも解説します。";
const URL = `${siteConfig.url}/guide/amazon-prime-vs-rakuten`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const faqItems = [
  { question: "Amazonプライムと楽天プレミアムは併用すべき？", answer: "ネット通販の頻度が高い方は併用もアリです。日常品はAmazon、ふるさと納税やまとめ買いキャンペーン時は楽天と使い分けると、ポイント還元と送料無料の両方を最大化できます。" },
  { question: "動画配信の充実度はどちらが上？", answer: "Amazonプライム・ビデオの方がラインナップは豊富です。楽天はRakuten TVが別料金となる作品が多く、見放題という観点ではAmazonが優勢です。" },
  { question: "送料無料ラインの違いは？", answer: "Amazonプライム会員は基本的に配送料無料（お急ぎ便・当日便含む）。楽天市場は店舗ごとに送料が異なり「3,980円以上で送料無料」のショップが中心です。" },
  { question: "家族でシェアできますか？", answer: "Amazonプライムは同居家族2名まで家族会員として一部特典を共有できます。楽天は基本的に個人アカウント単位ですが、家族カードで楽天ポイントを共通化する方法があります。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "Amazonプライム vs 楽天", url: URL },
      ]} />
      <ArticleJsonLd headline={TITLE} description={DESC} url={URL} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>Amazonプライム vs 楽天</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{TITLE}</h1>
      <p className="text-muted leading-relaxed mb-8">
        「Amazonプライムに入るべきか、それとも楽天の方がポイントが貯まりそう…」と迷っていませんか。本記事では2026年4月時点の最新情報をもとに、Amazonプライムと楽天プレミアム（楽天市場のお得優待）を会費・送料・ポイント還元・動画/音楽・電子書籍・家族共有などあらゆる角度から徹底比較します。読み終える頃には、あなたのライフスタイルに最適なのはどちらなのか、はっきり判断できるはずです。
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 会費と基本サービスの比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">Amazonプライム</th>
                <th className="border border-card-border p-3 text-left">楽天（プレミアム優待）</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["月額", "600円", "実質無料〜（楽天プレミアムカード等で拡張）"],
                ["年会費", "5,900円", "楽天プレミアムカード 11,000円"],
                ["配送料", "原則無料・お急ぎ便/当日便可", "3,980円以上で無料（店舗次第）"],
                ["動画配信", "Prime Video 見放題", "Rakuten TVは別課金中心"],
                ["音楽", "Amazon Music Prime", "Rakuten Music（別料金）"],
                ["電子書籍", "Prime Reading", "楽天マガジン/Kobo（別料金）"],
                ["ポイント還元", "Amazon Pointsは控えめ", "SPUで最大16倍＋お買い物マラソン"],
                ["家族共有", "2名まで家族会員", "家族カードでポイント共通化"],
              ].map(row => (
                <tr key={row[0]}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row[0]}</td>
                  <td className="border border-card-border p-3">{row[1]}</td>
                  <td className="border border-card-border p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※2026年4月時点。キャンペーン等で変動する場合があります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Amazonプライムが強いポイント</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>Amazonプライムの最大の魅力は「全部入り」でシンプルな点にあります。年会費5,900円（月額換算で約492円）を払うだけで、配送料無料・お急ぎ便・当日便・Prime Video・Music・Reading・Photosまで丸ごと使えます。1回あたりのお急ぎ便が510円かかることを考えると、月2回以上お急ぎ便を使う人ならそれだけで元が取れる計算です。</p>
          <p>Prime Videoは『The Boys』『ロード・オブ・ザ・リング 力の指輪』などのオリジナル作品が評価されており、動画配信サービスとして単独でも十分な競争力があります。Amazon Music Primeは1億曲以上がシャッフル再生可能、Kindleユーザーは月1冊の無料本（Prime Reading対象）も使え、総合力では楽天を上回ります。</p>
          <p>また、Amazonで販売されている商品はマーケットプレイス出品者が多くとも基本的な送料体系が統一されているため、「送料でいくら取られるか」を都度気にする必要がない点も大きなメリットです。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 楽天が強いポイント</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>楽天の強みはなんといってもポイント還元です。楽天カード（年会費無料）や楽天モバイル、楽天証券、楽天銀行、楽天ひかりなど楽天経済圏のサービスを組み合わせるとSPU（スーパーポイントアッププログラム）で最大16倍以上の還元が受けられます。お買い物マラソンや5と0のつく日、楽天スーパーSALEと重ねれば、実質20%以上の還元を得られるケースも珍しくありません。</p>
          <p>さらに、楽天市場はふるさと納税サイトとしても人気で、ポイント還元を受けながら寄付できるのは大きな強みです。楽天ブックスや楽天トラベル、楽天Payも同じIDとポイントで横断利用でき、ポイントの「使い道」が広い点も魅力。日常の買い物を集中させれば、実質的な値引きとして数万円分が戻ってくる可能性があります。</p>
          <p>楽天プレミアムカードを保有していれば、プライオリティ・パスやトラベルコースの選択も可能になり、海外旅行が多い方にとっては年会費11,000円以上の価値を感じられるでしょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. こんな人にはこっち！タイプ別おすすめ</h2>
        <div className="space-y-4">
          {[
            { title: "Amazonプライムがおすすめな人", color: "blue", list: [
              "動画・音楽・電子書籍を1つのサブスクでまとめたい人",
              "日用品を毎月何度も注文する人（送料が実質タダに）",
              "Kindleで読書を楽しむ人、Fireタブレット利用者",
              "家族でPrime Videoをシェアしたい人",
            ] },
            { title: "楽天が向いている人", color: "red", list: [
              "楽天モバイル・楽天銀行・楽天証券など複数サービスを利用している人",
              "ふるさと納税や大型家電をお得に買いたい人",
              "ポイントを使った旅行・投資信託購入を楽しみたい人",
              "楽天プレミアムカードでラウンジ特典を活用したい人",
            ] },
          ].map(item => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-3">{item.title}</h3>
              <ul className="space-y-2 text-sm text-muted">
                {item.list.map(l => <li key={l} className="flex items-start gap-2"><span className="text-primary">→</span>{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. 賢い使い分け戦略</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>筆者のおすすめは「両方使い分ける」ハイブリッド戦略です。Amazonプライム（年会費5,900円）は動画視聴と日用品・急ぎの買い物専用とし、楽天はふるさと納税とポイントアップ日の計画的な買い物に絞ります。こうすれば、配送の便利さとポイント還元の両方を享受できます。</p>
          <p>予算を1つに絞るなら、動画配信を重視するならAmazon、ポイント還元を最大化したいなら楽天というのが基本の考え方です。</p>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
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
        <h2 className="text-lg font-bold mb-2">合わせてチェックしたい</h2>
        <p className="text-sm text-muted mb-3">楽天経済圏を最大化するならクレジットカード選びも重要です。還元率を徹底比較したガイドもあわせてどうぞ。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/credit-card-comparison" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">クレジットカード比較を見る</Link>
          <a href="/guide/credit-card-comparison" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">楽天カード公式</a>
        </div>
      </section>

      <GuideRelatedLinks currentSlug="amazon-prime-vs-rakuten" />
    </div>
  );
}
