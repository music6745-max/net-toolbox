import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "タブレットおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "用途に合うタブレットが選べず迷っている方へ。iPad・Surface・Galaxy Tabなど人気5モデルの性能・価格・SIM対応を徹底比較し、仕事・学習・動画視聴それぞれの最適解を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/tablet-comparison` },
};

const faqItems = [
  {
    question: "iPadとAndroidタブレットはどちらがいいですか？",
    answer:
      "アプリの最適化と長期サポートを重視するならiPad、価格や拡張性・カスタマイズ性を重視するならAndroid系（Galaxy Tab・Lenovoなど）が向いています。動画編集・イラストはiPad、コスト重視ならAndroidが定番です。",
  },
  {
    question: "セルラーモデルとWi-Fiモデルどちらを買うべき？",
    answer:
      "外出先で頻繁に使うならセルラーモデル＋格安SIMが快適。家やWi-Fi環境のみで使うならWi-Fiモデルで十分です。月数百円〜1,000円台のデータSIMでセルラー運用するユーザーが増えています。",
  },
  {
    question: "タブレットでパソコン代わりになりますか？",
    answer:
      "iPad ProやSurface Pro系であればキーボードを組み合わせて文書作成・メール・軽い動画編集まで可能です。ただし開発・本格的なPCゲームには向かず、用途に応じてPCとの併用が現実的です。",
  },
  {
    question: "子供の学習用におすすめのタブレットは？",
    answer:
      "学習アプリの豊富さからiPad（無印）が人気。コスパ重視ならFireタブレットやLenovo Tab、Android系の1万円〜2万円帯モデルも選択肢になります。",
  },
];

const tablets = [
  { name: "iPad（第10世代）", type: "Apple", rate: "5万円台〜", points: ["コスパ最強の定番モデル", "Apple Pencil対応で学習・お絵かきに", "長期OSアップデートで5年以上現役"], bestFor: "初めてのタブレット・学習用・家族共用に。" },
  { name: "iPad Pro（M4）", type: "Apple", rate: "16万円台〜", points: ["M4チップでノートPC級の性能", "OLEDディスプレイで写真・動画編集に最適", "Apple Pencil Proでクリエイティブ作業に強い"], bestFor: "クリエイター・PC代替を狙う人。" },
  { name: "Microsoft Surface Pro 11", type: "Windows", rate: "15万円台〜", points: ["Windows 11で本格PC作業が可能", "キーボード一体型で2-in-1運用", "Officeとの親和性が圧倒的"], bestFor: "ビジネス用途・PC代替を本気で考える人。" },
  { name: "Galaxy Tab S10", type: "Android", rate: "11万円台〜", points: ["有機ELの大画面で動画視聴に最適", "Sペン標準付属でメモ・イラストに", "DeXモードでデスクトップ風UIに切替可能"], bestFor: "Androidユーザー・動画・電子書籍メイン。" },
  { name: "Lenovo Tab P12", type: "Android", rate: "5万円台〜", points: ["12.7インチの大画面でコスパ良好", "クアッドスピーカーで動画視聴に最適", "ペン付属でノート用途にも対応"], bestFor: "コスパ重視で大画面タブレットが欲しい人。" },
];

export default function TabletComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "タブレット比較", url: `${siteConfig.url}/guide/tablet-comparison` },
        ]}
      />
      <ArticleJsonLd headline="タブレットおすすめ5選【2026年最新】徹底比較｜選び方も解説" description="用途に合うタブレットが選べず迷っている方へ。iPad・Surface・Galaxy Tabなど人気5モデルの性能・価格・SIM対応を徹底比較し、仕事・学習・動画視聴それぞれの最適解を解説します。" url={`${siteConfig.url}/guide/tablet-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>タブレット比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          タブレットおすすめ5選【2026年最新】徹底比較｜選び方も解説
        </h1>
        <p className="text-muted leading-relaxed">
          タブレット市場はiPad・Surface・Galaxy Tabの3強構造に加えてLenovoなど高コスパAndroid勢が台頭。用途別に最適解は大きく変わります。本記事では2026年現在主要5モデルの性能・価格・SIM対応・キーボード・ペン対応を徹底比較し、後悔しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">コスパ重視 → iPad（第10世代）</span></p>
          <p><span className="font-bold">クリエイター → iPad Pro M4</span></p>
          <p><span className="font-bold">PC代替 → Surface Pro 11</span></p>
          <p><span className="font-bold">大画面・動画 → Galaxy Tab S10 / Lenovo Tab P12</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">タブレット選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          タブレット選びで最も重要なのは「用途」と「OS」です。動画視聴・電子書籍メインなら6〜8万円台のミドルレンジで十分。イラスト・動画編集をするならApple PencilやSペンに対応した上位モデル、PC代替を狙うならSurface Proのような2-in-1が候補になります。さらに外出先で使うならセルラーモデル＋データSIMの組み合わせが快適。Wi-Fiモデルとの差額は1〜2万円ですが、テザリング不要・常時接続のメリットは大きく、月額数百円の格安SIMで運用すればランニングコストも最小化できます。
        </p>
        <p className="text-muted leading-relaxed">
          また、長期サポートも見逃せないポイント。AppleはiPadOSを5〜6年提供し続けるためトータルコストで見ればiPadが有利になることも多いです。Android勢は短期更新が中心ですが、Galaxy Tabシリーズは7年OSアップデート保証を打ち出しており、長期運用にも対応しつつあります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめタブレット5モデルの詳細</h2>
        <div className="space-y-6">
          {tablets.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新価格は各メーカーの公式サイトでご確認ください。</p>
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
            タブレットは「OS×用途×携帯性」で選ぶのが正解です。学習・家族共用なら無印iPad、クリエイティブ用途ならiPad Pro、PC代替ならSurface Pro、動画・電子書籍中心なら大画面のGalaxy TabかLenovo Tabが最適。外出利用が多い人はセルラー対応モデルに格安SIMを組み合わせれば、月額1,000円以下で常時接続環境が手に入ります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">タブレット運用に役立つツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/mobile-rate-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">携帯料金シミュレーター</span>
            <p className="text-xs text-muted mt-1">セルラーモデルの通信費を試算</p>
          </Link>
          <Link href="/tools/data-size-converter" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">データ容量換算</span>
            <p className="text-xs text-muted mt-1">写真・動画保存量の目安に</p>
          </Link>
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">外出先で使う回線を選ぶ</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">セルラー運用で必須</p>
          </Link>
          <Link href="/guide/smartphone-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマートフォン比較</span>
            <p className="text-xs text-muted mt-1">スマホとの併用で最強</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
