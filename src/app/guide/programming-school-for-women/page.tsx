import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】女性におすすめプログラミングスクール5選｜Ms.Engineer・SHElikes他",
  description:
    "女性向けプログラミングスクール5選を徹底比較。女性限定・ママ向け・キャリアチェンジ支援で選ぶ。SHElikes、Ms.Engineer、DMM WEBCAMP WOMAN、テックアカデミー、FammスクールMAMAを比較。",
  alternates: { canonical: `${siteConfig.url}/guide/programming-school-for-women` },
};

const faqItems = [
  { question: "女性向けプログラミングスクールのメリットは？", answer: "同じ目標を持つ女性同士でコミュニティができ、継続しやすい点が最大のメリットです。ライフイベントや働き方の悩みも共有でき、ロールモデルとなる卒業生の事例も豊富。キャリアチェンジや副業開始を目指す女性には、女性講師・女性受講生中心の環境が心理的ハードルを下げてくれます。" },
  { question: "子育て中のママでも受講できますか？", answer: "FammスクールMAMAは1ヶ月の短期集中型で、子ども同伴OKのオンライン受講、ベビーシッター無料手配などママ特化サポートが充実。SHElikesも動画教材中心で自分のペースで学べます。夜間・早朝の受講や録画視聴で家事育児と両立している受講生も多数います。" },
  { question: "未経験・文系出身でも大丈夫？", answer: "女性向けスクールの多くは未経験・文系出身者が8〜9割を占めます。特にSHElikesはWebデザイン・ライター・マーケティングなど45以上のコースから選べ、いきなりコードを書かずに始められます。Ms.Engineerはエンジニア転職特化ですが、未経験からの育成カリキュラムが組まれています。" },
  { question: "卒業後のキャリアサポートは？", answer: "DMM WEBCAMP WOMANは転職保証、Ms.Engineerはエンジニア転職・副業案件紹介、SHElikesはお仕事獲得サポートが付帯。女性の働き方を理解したキャリアアドバイザーが在籍し、時短勤務・リモートワーク希望の転職先紹介にも対応しています。" },
];

const services = [
  { name: "SHElikes", type: "女性限定・全45コース", rate: "月額制プラン", points: ["Webデザイン・ライター・マーケ等45以上のコース", "女性限定コミュニティで継続しやすい", "お仕事獲得サポート・案件紹介あり"], bestFor: "何を学ぶか決まっていない・副業で稼ぎたい女性。" },
  { name: "Ms.Engineer", type: "女性限定エンジニア養成", rate: "月額制プラン", points: ["女性講師・女性受講生のみの環境", "未経験からエンジニア転職を目指すカリキュラム", "卒業生ネットワークが強い"], bestFor: "本気でエンジニア転職を目指す女性。" },
  { name: "DMM WEBCAMP WOMAN", type: "転職保証付き", rate: "月額制プラン", points: ["女性向けの学習サポート体制", "転職できなければ全額返金保証", "卒業後の時短・リモート案件紹介"], bestFor: "転職保証付きで安心して学びたい女性。" },
  { name: "テックアカデミー 女性応援プラン", type: "大手オンライン", rate: "月額制プラン", points: ["女性メンター在籍で相談しやすい", "Web・AI・デザインなど豊富なコース", "週2回のマンツーマンメンタリング"], bestFor: "実績ある大手で着実に学びたい女性。" },
  { name: "FammスクールMAMA", type: "ママ特化1ヶ月短期", rate: "一括支払い", points: ["子ども同伴OKのオンライン受講", "ベビーシッター無料手配", "卒業後の在宅案件保証あり"], bestFor: "子育てしながら在宅で稼ぎたいママ。" },
];

export default function ProgrammingSchoolForWomenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "女性向けプログラミングスクール", url: `${siteConfig.url}/guide/programming-school-for-women` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】女性におすすめプログラミングスクール5選" description="女性限定・ママ向け・キャリアチェンジ支援で選ぶプログラミングスクール5選を比較。" url={`${siteConfig.url}/guide/programming-school-for-women`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>女性向けプログラミングスクール</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】女性におすすめプログラミングスクール5選｜Ms.Engineer・SHElikes他
        </h1>
        <p className="text-muted leading-relaxed">
          IT業界の女性比率はまだ2割程度ですが、リモート・時短・副業と親和性が高く、女性のキャリアチェンジ先として人気急上昇中。女性限定・ママ特化のスクールなら、同じ悩みを持つ仲間と継続しやすく、卒業後のキャリアパスも豊富です。2026年現在、特におすすめの女性向けスクール5校を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">副業・キャリアの選択肢を広げたい → SHElikes</span></p>
          <p><span className="font-bold">本気でエンジニア転職 → Ms.Engineer</span></p>
          <p><span className="font-bold">転職保証で安心 → DMM WEBCAMP WOMAN</span></p>
          <p><span className="font-bold">大手で着実に学ぶ → テックアカデミー</span></p>
          <p><span className="font-bold">ママで在宅ワーク希望 → FammスクールMAMA</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">女性がプログラミングスクールを選ぶポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          女性向けスクール選びで重視すべきは「コミュニティの雰囲気」「卒業後のキャリアサポート」「ライフイベントへの理解」の3点。男女混合スクールでも学べますが、孤立しやすく継続率が下がる傾向があります。女性限定・女性向けプランなら、ロールモデルとなる卒業生との繋がりが得られ、出産・育児・時短勤務など働き方の相談もしやすい環境。副業から始めて徐々にフリーランス化する女性も増えており、Webデザイン・ライティング・マーケティングなど幅広く学べるSHElikes型のスクールが人気です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ女性向けスクール5校の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の料金・カリキュラムは各スクール公式サイトでご確認ください。</p>
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
            女性向けプログラミングスクールは、キャリアチェンジ・副業・在宅ワークなど目的に応じて選ぶのが大切です。迷ったらまずは無料カウンセリングを受けて、コミュニティの雰囲気や講師との相性を確認してから決めましょう。学習に集中するために、家計簿アプリで固定費を見直し、受講料の捻出プランを立てておくのもおすすめです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">女性にも人気の大手スクール</h2>
        <ComparisonTableCTA
          services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">主要スクールを徹底比較</p>
          </Link>
          <Link href="/guide/programming-school-for-beginners" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">初心者向けプログラミングスクール</span>
            <p className="text-xs text-muted mt-1">未経験から始める</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
