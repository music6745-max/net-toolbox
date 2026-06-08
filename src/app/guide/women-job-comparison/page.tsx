import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】女性向け転職エージェント比較5選｜ワーママ・ハイキャリア対応",
  description:
    "type女性の転職エージェント・LIBZ・マイナビAGENT・dodaウーマンキャリア・エンウィメンズワークなど女性特化の転職サービスを徹底比較。ワーママ・ハイキャリア・時短勤務の選び方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/women-job-comparison` },
};

const faqItems = [
  { question: "女性向け転職エージェントは総合型と何が違いますか？", answer: "産休・育休・時短勤務・復職支援など、女性のライフステージに合わせた相談ができる点が大きな違いです。女性アドバイザーの比率が高く、キャリアとライフイベントを両立させる視点でのアドバイスを受けられます。" },
  { question: "結婚・出産予定を企業に伝えるべき？", answer: "面接で問われなければ自発的に伝える必要はありませんが、育休制度の実績や女性管理職比率などは逆質問で確認しましょう。女性特化エージェントは企業の実態をよく知っているため、相談すると効率的です。" },
  { question: "時短勤務の求人は少ないですか？", answer: "正社員の時短勤務求人は増加傾向ですが、まだ数は限定的です。LIBZやdodaウーマンキャリアは時短・リモート・フレックスなど柔軟な働き方に強いので、こうした希望がある人には特におすすめです。" },
  { question: "ブランクがあっても転職できますか？", answer: "可能です。育児休業後の復職やブランクありからの再スタートを支援する特集ページを持つエージェントも多く、マイナビAGENTやエンウィメンズワークは復職支援に強みがあります。" },
];

const services = [
  { name: "type女性の転職エージェント", type: "女性特化型", feature: "老舗の女性専門エージェント", points: ["20年以上の女性転職実績", "首都圏求人が豊富", "女性アドバイザーの丁寧な対応"], bestFor: "首都圏でキャリアアップしたい20〜30代女性。" },
  { name: "LIBZ（リブズ）", type: "キャリア女性向け", feature: "柔軟な働き方特化", points: ["リモート・時短・フレックスに特化", "管理職・ハイクラス求人が豊富", "独占求人多数"], bestFor: "働き方を柔軟にしたい経験者女性。" },
  { name: "マイナビAGENT女性", type: "総合型", feature: "大手ならではのサポート力", points: ["全国対応の豊富な求人", "育休実績のある企業を厳選", "書類添削・面接対策が手厚い"], bestFor: "全国で安心して転職したい女性。" },
  { name: "dodaウーマンキャリア", type: "総合型", feature: "女性管理職ロールモデルが豊富", points: ["女性管理職・ハイクラス求人", "全国対応", "応募書類のサポート充実"], bestFor: "管理職を目指したい女性、地方都市在住者。" },
  { name: "エンウィメンズワーク", type: "総合求人型", feature: "口コミが充実", points: ["企業の口コミ情報が豊富", "女性歓迎求人のみ厳選", "事務職求人に強み"], bestFor: "事務・サポート系で働きたい女性。" },
];

export default function WomenJobComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "女性向け転職比較", url: `${siteConfig.url}/guide/women-job-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】女性向け転職エージェント比較5選" description="女性特化の転職サービスを徹底比較。" url={`${siteConfig.url}/guide/women-job-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>女性向け転職比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】女性向け転職エージェント比較5選｜ワーママ・ハイキャリア対応
        </h1>
        <p className="text-muted leading-relaxed">
          結婚・出産・育児と仕事を両立させながらキャリアを築きたい女性に向けて、ライフステージに寄り添った転職サービス5社を比較します。働き方の多様化が進む今、自分らしい選択ができる環境が整ってきました。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">首都圏キャリアアップ → type女性</span></p>
          <p><span className="font-bold">柔軟な働き方 → LIBZ</span></p>
          <p><span className="font-bold">全国・復職支援 → マイナビAGENT女性</span></p>
          <p><span className="font-bold">管理職志向 → dodaウーマンキャリア</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">女性の転職市場と課題</h2>
        <p className="text-muted leading-relaxed mb-4">
          女性活躍推進法や働き方改革によって、企業の女性採用意欲は年々高まっています。管理職候補の採用ニーズも増加しており、経験を積んだ女性は年収アップのチャンスも豊富です。一方で、育児との両立・復職支援・時短勤務など、ライフステージ特有の悩みを理解してくれるエージェントを選ぶことが成功のカギです。
        </p>
        <p className="text-muted leading-relaxed">
          転職サービスは総合型と女性特化型を併用するのがおすすめです。総合型で求人数の母数を確保しつつ、女性特化型で「女性が働きやすい会社かどうか」の実態情報を得ると、ミスマッチを防げます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ女性向け転職エージェント5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
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
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ライフステージ別の選び方</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted leading-relaxed">
          <p><span className="font-bold text-foreground">20代独身：</span> type女性でキャリア形成、将来性重視の企業へ。</p>
          <p><span className="font-bold text-foreground">30代結婚予定：</span> 育休実績のある企業をマイナビAGENTで絞る。</p>
          <p><span className="font-bold text-foreground">産休・育休復帰：</span> LIBZで時短・リモート求人を中心に検索。</p>
          <p><span className="font-bold text-foreground">管理職志向：</span> dodaウーマンキャリアで年収アップを狙う。</p>
          <p><span className="font-bold text-foreground">地方在住：</span> マイナビAGENT＋エンウィメンズワークで選択肢を広げる。</p>
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
            女性の転職はライフステージとキャリアの両立が鍵です。女性特化エージェントを活用することで、企業の実態情報を得ながら理想の働き方を実現できます。まずは気になる2〜3社に登録して面談を受けてみましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">総合転職サービス比較</p>
          </Link>
          <Link href="/guide/babysitter-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビーシッター比較</span>
            <p className="text-xs text-muted mt-1">ワーママの強い味方</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
