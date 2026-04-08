import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "燃費計算ツール完全ガイド｜ガソリン代節約の計算方法と使い方【2026年最新】",
  description:
    "燃費計算サイトの使い方、km/L計算式、満タン法の手順、ガソリン代節約術まで完全解説。無料の燃費計算ツールでドライブや通勤の燃料コストを正確に把握しましょう。",
  alternates: {
    canonical: `${siteConfig.url}/guide/fuel-economy-guide`,
  },
};

const faqItems = [
  {
    question: "燃費（km/L）はどう計算するのですか？",
    answer:
      "燃費は「走行距離(km) ÷ 給油量(L)」で計算します。例えば400km走行して30L給油したなら、400÷30=約13.3km/Lとなります。当サイトの燃費計算ツールに数値を入力するだけで自動計算できます。",
  },
  {
    question: "満タン法とは何ですか？",
    answer:
      "満タン法はガソリンスタンドで満タン給油した時点を起点に、次に満タン給油するまでの走行距離と給油量から燃費を算出する方法です。毎回満タンにするため誤差が少なく、もっとも正確に実燃費を測れる方法として知られています。",
  },
  {
    question: "カタログ燃費と実燃費はなぜ違うのですか？",
    answer:
      "カタログ燃費はWLTCモードなどの標準試験条件で測定された値で、実走行とは異なります。エアコン使用、渋滞、坂道、積載量、タイヤ空気圧などで実燃費は10〜30%ほど悪化するのが一般的です。",
  },
  {
    question: "燃費計算ツールは無料で使えますか？",
    answer:
      "はい。ネットツールボックスの燃費計算ツールは完全無料・会員登録不要です。走行距離とガソリン代またはリッター単価を入力するだけで、km/L・総額・1kmあたりのコストまで瞬時に計算できます。",
  },
  {
    question: "ガソリン代を節約するコツはありますか？",
    answer:
      "急発進・急ブレーキを避けエコ運転を心がける、タイヤ空気圧を適正に保つ、不要な荷物を降ろす、エアコン使用を控えめにする、アイドリングを減らす、最安ガソリンスタンドを選ぶ、の6点が基本です。月数千円の節約も可能です。",
  },
];

const sections = [
  { id: "what-is-fuel-economy", title: "燃費（km/L）とは" },
  { id: "calculation-method", title: "燃費の計算方法と公式" },
  { id: "how-to-use", title: "燃費計算ツールの使い方" },
  { id: "mantan-method", title: "満タン法で正確に測る" },
  { id: "save-gas", title: "ガソリン代節約のコツ7選" },
  { id: "related-tools", title: "関連する便利ツール" },
  { id: "faq", title: "よくある質問" },
];

export default function FuelEconomyGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "燃費計算完全ガイド", url: `${siteConfig.url}/guide/fuel-economy-guide` },
        ]}
      />
      <ArticleJsonLd
        headline="燃費計算ツール完全ガイド｜ガソリン代節約の計算方法と使い方"
        description="燃費計算サイトの使い方、km/L計算式、満タン法、ガソリン代節約術を解説。"
        url={`${siteConfig.url}/guide/fuel-economy-guide`}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>燃費計算完全ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            生活・節約
          </span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          燃費計算ツール完全ガイド｜km/L計算式とガソリン代節約術
        </h1>
        <p className="text-muted leading-relaxed">
          「今月のガソリン代が高すぎる」「新しく買った車の実燃費はどれくらい？」そんな疑問に答えるのが燃費計算ツールです。本ガイドでは燃費の基本計算式から満タン法による正確な測定方法、そしてガソリン代を月数千円節約する実践テクニックまで、ドライバーが知っておきたい知識を網羅的に解説します。燃費計算サイトの使い方も合わせて紹介します。
        </p>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-2">今すぐ計算したい方へ</p>
        <p className="text-sm text-muted mb-3">
          走行距離とリッター単価を入力するだけで、km/L・総ガソリン代・1kmあたりのコストを瞬時に計算できます。
        </p>
        <Link
          href="/tools/fuel-calculator"
          className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"
        >
          燃費計算ツールを開く →
        </Link>
      </div>

      <section id="what-is-fuel-economy" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 燃費（km/L）とは</h2>
        <p className="text-muted leading-relaxed mb-4">
          燃費とは「ガソリン1リットルで何km走れるか」を示す数値で、単位はkm/L（キロメートル毎リットル）で表されます。数値が大きいほど少ない燃料で長く走れる=燃費が良い車ということになります。国産コンパクトカーなら20km/L前後、軽自動車で20〜25km/L、ハイブリッド車では30km/Lを超える車種も珍しくありません。一方でSUVや大型ミニバンは10〜15km/L程度、スポーツカーやアメ車では一桁台ということもあります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          燃費を把握することのメリットは主に3つあります。ひとつ目は月々のガソリン代を予測できること。ふたつ目は車のコンディション異変（オイル交換不足、エアクリーナー汚れなど）を早期発見できること。そして3つ目は、エコ運転を意識するきっかけになり結果的に燃料代を節約できることです。
        </p>
      </section>

      <section id="calculation-method" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 燃費の計算方法と公式</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 mb-4">
          <p className="font-bold text-center text-lg mb-2">燃費(km/L) = 走行距離(km) ÷ 給油量(L)</p>
          <p className="text-sm text-muted text-center">例：400km走行 ÷ 30L = 13.33 km/L</p>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          基本公式は非常にシンプルです。走行距離をガソリンで割るだけ。ここから派生する計算もすべて同じ考え方で求められます。
        </p>
        <ul className="space-y-3 text-sm text-muted mb-4">
          <li>
            <strong className="text-foreground">必要なガソリン量</strong>：走行予定距離 ÷ 燃費 = 必要リッター数。例えば500kmの遠出を15km/Lの車で行うなら、500÷15≒33.3L必要です。
          </li>
          <li>
            <strong className="text-foreground">ガソリン代の総額</strong>：必要リッター数 × リッター単価。上記の例で1L=170円なら33.3×170=約5,661円になります。
          </li>
          <li>
            <strong className="text-foreground">1kmあたりのコスト</strong>：リッター単価 ÷ 燃費。170÷15≒11.3円/km。通勤や帰省など移動コストの比較に便利です。
          </li>
        </ul>
        <p className="text-muted leading-relaxed">
          手計算でも可能ですが、ミスを防いで素早く結果を得たい方には
          <Link href="/tools/fuel-calculator" className="text-primary hover:underline">燃費計算ツール</Link>
          のご利用をおすすめします。項目に数値を入れるだけで3つの指標がすべて表示されます。
        </p>
      </section>

      <section id="how-to-use" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 燃費計算ツールの使い方</h2>
        <p className="text-muted leading-relaxed mb-4">
          ネットツールボックスの燃費計算ツールは、3ステップで誰でも使えます。
        </p>
        <ol className="space-y-3 text-sm mb-4">
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 1. 走行距離を入力</strong>
            <p className="text-muted mt-1">前回の給油からの走行距離（km）を入力します。車のトリップメーターで確認できます。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 2. 給油量またはガソリン代を入力</strong>
            <p className="text-muted mt-1">今回の給油量（L）、またはレシートの合計金額を入力します。リッター単価は最新の相場を入れましょう。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 3. 結果をチェック</strong>
            <p className="text-muted mt-1">km/L・総ガソリン代・1kmあたりコストが瞬時に表示されます。履歴を残して月単位で比較すれば、燃費悪化の兆候も発見できます。</p>
          </li>
        </ol>
        <Link
          href="/tools/fuel-calculator"
          className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90"
        >
          燃費計算ツールを今すぐ使う →
        </Link>
      </section>

      <section id="mantan-method" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 満タン法で正確に測る</h2>
        <p className="text-muted leading-relaxed mb-4">
          もっとも正確に実燃費を測定する方法が「満タン法」です。手順はシンプルです。
        </p>
        <ol className="space-y-2 text-sm text-muted mb-4 list-decimal list-inside">
          <li>ガソリンスタンドで満タンまで給油する</li>
          <li>トリップメーターをリセット（0kmに戻す）</li>
          <li>通常通り走行する</li>
          <li>次回給油時に再び満タンまで入れる</li>
          <li>給油量とトリップメーターの距離を燃費計算ツールに入力する</li>
        </ol>
        <p className="text-muted leading-relaxed">
          注意点はオートストップが作動するまでをその時点の「満タン」と統一すること。吹きこぼれるまで無理に入れると毎回ばらつきが出て誤差の原因になります。3〜5回分の平均をとると、よりシーズンや走行条件の偏りが少ない「実燃費」が見えてきます。
        </p>
      </section>

      <section id="save-gas" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. ガソリン代節約のコツ7選</h2>
        <div className="space-y-3">
          {[
            {
              title: "ふんわりアクセル（eスタート）",
              desc: "発進5秒で20km/hを目安にゆっくり加速するだけで、市街地燃費が約10%改善するとされています。普段の運転で最も効果的なテクニックです。",
            },
            {
              title: "タイヤ空気圧を適正に保つ",
              desc: "空気圧が50kPa低いだけで燃費が2〜4%悪化します。月に1回はガソリンスタンドで無料チェックを行いましょう。",
            },
            {
              title: "不要な荷物を降ろす",
              desc: "車内に常時10kgの余分な荷物があると、年間で数百円〜千円以上の無駄になります。トランクの整理は手軽で効果的です。",
            },
            {
              title: "エアコンは控えめに",
              desc: "A/CオンとオフでJC08で約12%の燃費差が出るケースも。春秋は外気導入だけで快適に過ごせます。",
            },
            {
              title: "アイドリングストップの活用",
              desc: "信号待ちや荷物積み下ろしなど、10秒以上停車するならエンジンを切る習慣を。機能搭載車はオートで実施してくれます。",
            },
            {
              title: "最安ガソリンスタンドを選ぶ",
              desc: "地域によってはリッター10円以上の差があります。会員カードや提携クレカ、ガソリン価格比較アプリも積極的に活用しましょう。",
            },
            {
              title: "定期的なメンテナンス",
              desc: "オイル、エアクリーナー、プラグが劣化すると燃費は悪化します。点検パックに入っておくと計画的にメンテできます。",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4"
            >
              <h3 className="font-bold text-sm mb-1">{i + 1}. {t.title}</h3>
              <p className="text-sm text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="related-tools" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. 関連する便利ツール</h2>
        <p className="text-muted text-sm mb-4">ネットツールボックスには、燃費計算と一緒に使える便利ツールが揃っています。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/fuel-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">燃費計算ツール</div>
            <p className="text-xs text-muted">走行距離と給油量から燃費・ガソリン代を瞬時に計算</p>
          </Link>
          <Link href="/tools/loan-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">ローン計算ツール</div>
            <p className="text-xs text-muted">車ローンの月々返済額や総支払額をシミュレート</p>
          </Link>
          <Link href="/tools/tax-calculator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">消費税計算ツール</div>
            <p className="text-xs text-muted">ガソリン代や車用品の税込・税抜き計算に</p>
          </Link>
          <Link href={`/category/${encodeURIComponent("計算")}`} className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">計算ツール一覧</div>
            <p className="text-xs text-muted">あらゆる計算に対応した無料ツールを集約</p>
          </Link>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">まずは燃費を計算してみよう</h2>
        <p className="text-sm text-muted mb-5">
          無料・登録不要。走行距離と給油量の数値を入れるだけで、燃費と月々のガソリン代が一目でわかります。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools/fuel-calculator"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90"
          >
            燃費計算ツールを開く
          </Link>
          <Link
            href="/"
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg"
          >
            全ツール一覧
          </Link>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="fuel-economy-guide" />
    </div>
  );
}
