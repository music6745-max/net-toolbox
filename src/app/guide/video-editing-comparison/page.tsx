import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】動画編集ソフト比較おすすめ5選｜機能・料金・初心者〜プロ向けを徹底解説",
    description:
      "2026年最新の動画編集ソフトを徹底比較。Adobe Premiere Pro・DaVinci Resolve・CapCut・Filmora・PowerDirectorの機能・料金を詳しく解説。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/video-editing-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const videoTools = [
  {
    name: "Adobe Premiere Pro",
    type: "プロ向け動画編集",
    price: "月額2,728円（単体）/ 月額7,780円（Creative Cloud）",
    plan: "単体プラン（月額2,728円）/ Creative Cloudコンプリート（月額7,780円）",
    features: "マルチトラック編集・カラーグレーディング・AI自動編集・After Effects連携",
    featureDetail: "マルチカム編集、高度なカラーグレーディング、AI自動テロップ生成、エフェクト・トランジション豊富、4K/8K対応",
    aiFeatures: "AI自動テロップ・AIシーン検出・AI音声テキスト変換・AIリフレーム",
    platforms: "Windows / Mac",
    pros: [
      "映画・TV・CM制作でも使われる業界標準ソフト",
      "AI自動テロップ生成で字幕作成が大幅に効率化",
      "After Effects・Auditionとのシームレスな連携",
      "プラグイン・テンプレートのエコシステムが世界最大",
      "4K/8K・VR動画にも対応",
      "定期的なアップデートで常に最新機能を搭載",
    ],
    cons: [
      "月額制で長期的なコストが高い",
      "要求されるPCスペックが高い",
      "機能が多く初心者には学習コストが高い",
    ],
    bestFor:
      "プロ品質の動画制作を行いたい方、YouTubeの本格的なチャンネル運営をしている方に最適。業界標準のため、スキルが他の仕事にも活かせます。",
    url: "https://www.adobe.com/jp/products/premiere.html",
    badge: "業界標準",
    color: "blue",
  },
  {
    name: "DaVinci Resolve",
    type: "無料プロ向け動画編集",
    price: "無料 / Studio版 47,980円（買い切り）",
    plan: "無料版 / DaVinci Resolve Studio（47,980円・買い切り）",
    features: "プロ級カラーグレーディング・Fairlight音声編集・Fusion VFX・マルチトラック",
    featureDetail: "ハリウッド映画でも使われるカラーグレーディング、統合音声編集、VFX・モーショングラフィックス、マルチカム対応",
    aiFeatures: "AI顔認識・AIオブジェクトマスク・AI音声分離・AIスピードワープ",
    platforms: "Windows / Mac / Linux",
    pros: [
      "無料版でもプロ級の機能がほぼすべて使える",
      "カラーグレーディング機能はハリウッド映画でも採用",
      "編集・カラー・音声・VFXを1つのソフトで完結",
      "Studio版は買い切り（永久ライセンス）で追加費用なし",
      "Linuxにも対応（唯一のプロ向けソフト）",
      "4K編集も無料版で可能",
    ],
    cons: [
      "要求されるPCスペックが非常に高い（特にGPU）",
      "UIが独特で慣れるまで時間がかかる",
      "日本語チュートリアルがPremiere Proに比べて少ない",
    ],
    bestFor:
      "コストを抑えながらプロ品質の編集をしたい方に最適。無料版でもPremiere Proに匹敵する機能が使え、カラーグレーディングは業界最高峰です。",
    url: "https://www.blackmagicdesign.com/jp/products/davinciresolve",
    badge: "無料でプロ品質",
    color: "green",
  },
  {
    name: "CapCut",
    type: "SNS動画向け簡単編集",
    price: "無料 / Pro月額1,350円",
    plan: "無料プラン / CapCut Pro（月額1,350円・年額9,900円）",
    features: "自動字幕生成・テンプレート・エフェクト・BGM・AI編集",
    featureDetail: "ワンタップ自動編集、自動字幕生成、トレンドエフェクト・テンプレート豊富、商用利用可能BGM",
    aiFeatures: "AI自動字幕・AI動画生成・AIスタイル変換・AI背景除去・AI音声読み上げ",
    platforms: "Windows / Mac / iOS / Android / Web",
    pros: [
      "直感的なUIで初心者でもすぐに動画作成可能",
      "AI自動字幕生成の精度が非常に高い",
      "TikTok・Instagram Reels向けのテンプレートが豊富",
      "トレンドのエフェクト・BGMが常に更新される",
      "PCでもスマホでもシームレスに編集可能",
      "無料でも透かしなしで書き出し可能",
    ],
    cons: [
      "長尺動画の編集には向いていない",
      "高度なカラーグレーディングは不可",
      "マルチトラック編集に制限がある",
    ],
    bestFor:
      "TikTok・Instagram Reels・YouTube Shortsなど、SNS向けのショート動画を作りたい方に最適。AI字幕やテンプレートで初心者でもプロ品質の動画が数分で完成します。",
    url: "https://www.capcut.com/",
    badge: "SNS動画最適",
    color: "pink",
  },
  {
    name: "Filmora",
    type: "初心者向け動画編集",
    price: "年額6,980円 / 買い切り8,980円",
    plan: "1年間プラン（年額6,980円）/ 永続ライセンス（8,980円）/ マルチプラット1年（7,980円）",
    features: "ドラッグ&ドロップ編集・テンプレート・エフェクト・AI編集機能",
    featureDetail: "直感的なドラッグ&ドロップ、1,000種以上のテンプレート、AI自動編集、モーショントラッキング、キーフレーム対応",
    aiFeatures: "AIスマートカットアウト・AI自動字幕・AIテキスト動画生成・AIサムネイル生成",
    platforms: "Windows / Mac / iOS / Android",
    pros: [
      "直感的なUIで初心者でも30分で基本操作を習得可能",
      "買い切りライセンスがあり長期的にコスパが良い",
      "1,000種類以上のテンプレート・エフェクトが利用可能",
      "AI機能で自動字幕・カットアウト・サムネイル生成",
      "4K動画の編集・書き出しに対応",
      "日本語UIと日本語チュートリアルが充実",
    ],
    cons: [
      "プロ向けの高度な機能は不足",
      "一部のエフェクトは追加課金が必要（Filmstock）",
      "大規模プロジェクトでは動作が重くなることがある",
    ],
    bestFor:
      "動画編集初心者やYouTube初心者に最適。直感的な操作で短時間で見栄えの良い動画が作れます。買い切りプランがあるのもメリットです。",
    url: "https://filmora.wondershare.jp/",
    badge: "初心者向けNo.1",
    color: "purple",
  },
  {
    name: "PowerDirector",
    type: "高機能・初心者対応動画編集",
    price: "年額6,200円 / 買い切り12,980円",
    plan: "サブスクリプション（年額6,200円）/ 買い切り（12,980円）",
    features: "マルチトラック・モーショントラッキング・360度動画・AI編集",
    featureDetail: "100トラック対応、モーショントラッキング、クロマキー合成、360度動画編集、4K/HDR対応、DVD・Blu-ray作成",
    aiFeatures: "AI自動字幕・AI音声テキスト変換・AIスカイリプレースメント・AIボディエフェクト",
    platforms: "Windows / Mac / iOS / Android",
    pros: [
      "初心者向けのUIとプロ向けの機能を両立",
      "100トラック対応で大規模プロジェクトにも対応",
      "360度動画・VR動画の編集に対応",
      "DVD・Blu-rayディスク作成機能を搭載",
      "日本国内での販売実績が豊富で信頼性が高い",
      "買い切りプランがあり追加費用なし",
    ],
    cons: [
      "Windows版の方が機能が充実（Mac版はやや遅れ）",
      "UIがやや古い印象を受ける",
      "クラウド連携機能はFilmoraやCapCutに劣る",
    ],
    bestFor:
      "初心者だけど将来的に高度な編集もしたい方に最適。初心者向けのガイド機能と100トラック対応の本格機能を両立しています。DVD作成もできます。",
    url: "https://jp.cyberlink.com/products/powerdirector-video-editing-software/",
    badge: "初心者〜中級者",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "無料で使える動画編集ソフトはどれですか？",
    answer:
      "DaVinci Resolveは無料版でもプロ級の動画編集が可能で、4K編集にも対応しています。CapCutも無料で透かしなしの動画書き出しが可能です。この2つが無料動画編集ソフトの最有力候補です。",
  },
  {
    question: "YouTube用の動画編集におすすめのソフトはどれですか？",
    answer:
      "YouTube初心者にはFilmoraまたはCapCutがおすすめです。直感的な操作で短時間で動画を仕上げられます。本格的なYouTuberを目指すならAdobe Premiere ProまたはDaVinci Resolveがおすすめです。AI自動字幕機能はどちらにも搭載されています。",
  },
  {
    question: "動画編集に必要なPCスペックはどのくらいですか？",
    answer:
      "一般的な目安として、CPU: Core i5以上 / Ryzen 5以上、メモリ: 16GB以上、GPU: VRAM 4GB以上、ストレージ: SSD 256GB以上が推奨です。DaVinci ResolveとPremiere Proは特にGPU性能が重要で、VRAM 6GB以上を推奨します。CapCutやFilmoraは比較的軽量で動作します。",
  },
  {
    question: "買い切りで使える動画編集ソフトはどれですか？",
    answer:
      "DaVinci Resolve Studio（47,980円）、Filmora永続ライセンス（8,980円）、PowerDirector買い切り版（12,980円）が買い切りに対応しています。月額費用を払い続けたくない方におすすめです。DaVinci Resolveは無料版でも十分な機能があります。",
  },
  {
    question: "スマホでも動画編集できますか？",
    answer:
      "CapCut・Filmora・PowerDirectorはスマホアプリ版があり、スマホだけで本格的な動画編集が可能です。特にCapCutはスマホ版の機能が充実しており、TikTokやInstagram Reelsの動画制作に最適です。",
  },
  {
    question: "AI自動字幕機能が優秀なソフトはどれですか？",
    answer:
      "AI自動字幕の精度はCapCutが最も高いと評価されています。日本語の認識精度が高く、テロップのデザインも豊富です。Premiere Proも日本語字幕の精度が向上しており、長尺動画の字幕作成に向いています。",
  },
];

export default function VideoEditingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "動画編集ソフト比較おすすめ5選",
            url: `${siteConfig.url}/guide/video-editing-comparison`,
          },
        ]}
      />
      <FAQJsonLd
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>動画編集ソフト比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">動画制作</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】動画編集ソフト比較おすすめ5選｜機能・料金・初心者〜プロ向けを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「動画編集を始めたいけど、どのソフトがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの動画編集ソフト5選（Adobe Premiere Pro・DaVinci Resolve・CapCut・Filmora・PowerDirector）を機能・料金・使いやすさ・AI機能で徹底比較。YouTube・SNS動画制作に最適なソフトの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：目的別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">プロ品質の本格編集 → Adobe Premiere Pro</span>（業界標準・AI字幕が優秀）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">無料でプロ品質 → DaVinci Resolve</span>（無料でも4K編集可能・カラグレ最強）</p>
          <p><span className="font-bold text-pink-700 dark:text-pink-300">SNSショート動画 → CapCut</span>（無料・AI字幕・テンプレート豊富）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">初心者・YouTube入門 → Filmora</span>（買い切り8,980円・直感操作）</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-video" className="text-primary hover:underline">1. 動画編集ソフトを使うメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. 動画編集ソフト5選の機能・料金比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各ソフトの詳細レビュー（メリット・デメリット）</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. 目的別おすすめ動画編集ソフト</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. 動画編集ソフトの選び方5つのポイント</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="why-video" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 動画編集ソフトを使うメリット</h2>
        <p className="text-muted leading-relaxed mb-4">動画コンテンツの需要は年々拡大しており、2026年もYouTube・TikTok・Instagram Reelsなど動画プラットフォームが成長を続けています。</p>
        <div className="space-y-3">
          {[
            { icon: "&#127909;", title: "YouTube・SNSでの発信力が高まる", desc: "テロップ・BGM・エフェクトを加えることで、視聴者の興味を引く高品質な動画が作れます。再生数やフォロワー増加に直結します。" },
            { icon: "&#129302;", title: "AI機能で編集作業が大幅に時短", desc: "AI自動字幕・AIカット編集・AI音声分離など、以前は手作業で何時間もかかっていた作業がワンクリックで完了。初心者でもプロ品質の動画が作れます。" },
            { icon: "&#128176;", title: "副業・ビジネスに直結するスキル", desc: "動画編集は副業としても需要が高く、YouTube編集代行や企業のSNS運用など収入につながるスキルです。一度覚えれば長く活かせます。" },
            { icon: "&#127916;", title: "無料ソフトでもプロ品質が可能", desc: "DaVinci Resolveは無料でハリウッド映画にも使われるプロ品質の編集が可能。CapCutも無料で透かしなしの動画書き出しができます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 動画編集ソフト5選の機能・料金比較表</h2>
        <p className="text-muted leading-relaxed mb-4">まずは5つのソフトの主要機能を一覧で比較してみましょう。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">Premiere Pro</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">DaVinci Resolve</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-pink-600 dark:text-pink-400">CapCut</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">Filmora</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">PowerDirector</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "料金", pp: "月額2,728円", dvr: "無料/47,980円", cc: "無料/月1,350円", fm: "年6,980円/買切8,980円", pd: "年6,200円/買切12,980円" },
                { label: "対象レベル", pp: "中級〜プロ", dvr: "中級〜プロ", cc: "初心者〜中級", fm: "初心者〜中級", pd: "初心者〜中級" },
                { label: "4K編集", pp: "対応", dvr: "対応（無料版も）", cc: "対応（Pro）", fm: "対応", pd: "対応" },
                { label: "AI字幕", pp: "対応", dvr: "対応", cc: "対応（高精度）", fm: "対応", pd: "対応" },
                { label: "カラグレ", pp: "高機能", dvr: "業界最高峰", cc: "基本的", fm: "基本的", pd: "中程度" },
                { label: "テンプレート", pp: "プラグイン", dvr: "少ない", cc: "非常に豊富", fm: "1,000種以上", pd: "豊富" },
                { label: "買い切り", pp: "なし", dvr: "あり", cc: "なし", fm: "あり", pd: "あり" },
                { label: "スマホ対応", pp: "なし", dvr: "iPad版あり", cc: "対応", fm: "対応", pd: "対応" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.pp}</td>
                  <td className="border border-card-border p-3">{row.dvr}</td>
                  <td className="border border-card-border p-3">{row.cc}</td>
                  <td className="border border-card-border p-3">{row.fm}</td>
                  <td className="border border-card-border p-3">{row.pd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 料金は2026年4月時点の情報です。プランや機能は変更される場合があります。</p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各ソフトの詳細レビュー（メリット・デメリット）</h2>
        <div className="space-y-10">
          {videoTools.map((tool, index) => (
            <div key={tool.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[tool.color]}`}>{tool.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{tool.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{tool.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">対応OS</span><span className="font-bold">{tool.platforms}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">機能詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{tool.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">主な機能：</span>{tool.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">AI機能：</span>{tool.aiFeatures}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{tool.bestFor}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">{tool.pros.map((p) => (<li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>))}</ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">{tool.cons.map((c) => (<li key={c} className="text-sm text-muted flex items-start gap-2"><span className="text-red-500 mt-0.5">&#9651;</span>{c}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Cases */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 目的別おすすめ動画編集ソフト</h2>
        <div className="space-y-4">
          {[
            { scene: "TikTok・Instagram Reelsのショート動画", app: "CapCut", reason: "ショート動画に特化したテンプレート・エフェクトが豊富。AI自動字幕の精度が高く、スマホでもPCでも編集可能。無料で透かしなし書き出しが可能です。" },
            { scene: "YouTube動画の本格編集", app: "Adobe Premiere Pro / DaVinci Resolve", reason: "長尺動画の編集にはプロ向けソフトがおすすめ。コスト重視ならDaVinci Resolve（無料）、エコシステム重視ならPremiere Proが最適です。" },
            { scene: "動画編集を始めたばかりの初心者", app: "Filmora", reason: "直感的なUIで30分で基本操作を習得可能。テンプレートも豊富で、初めての動画でも見栄えの良い仕上がりに。買い切り8,980円でコスパも良いです。" },
            { scene: "映像のカラーにこだわりたい", app: "DaVinci Resolve", reason: "カラーグレーディング機能はハリウッド映画でも採用されるプロ品質。しかも無料版でも利用可能。映画のような色味の動画を作りたい方に最適です。" },
            { scene: "DVDやBlu-rayを作成したい", app: "PowerDirector", reason: "動画編集からディスク作成まで1つのソフトで完結。メニュー画面の作成やチャプター設定も簡単にでき、結婚式や記念日の映像をディスクにまとめられます。" },
          ].map((item) => (
            <div key={item.scene} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.app}</p>
              <p className="text-sm text-muted leading-relaxed">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. 動画編集ソフトの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "用途と目標レベルを明確にする", desc: "SNSショート動画ならCapCut、YouTube本格編集ならPremiere ProやDaVinci Resolve、入門ならFilmoraと、用途によって最適なソフトは異なります。" },
            { num: "2", title: "PCスペックを確認する", desc: "Premiere ProやDaVinci Resolveは高性能なGPUが必要です。低スペックPCならCapCutやFilmoraが軽量で快適に動作します。" },
            { num: "3", title: "料金体系を比較する", desc: "月額制（Premiere Pro）、買い切り（Filmora・PowerDirector）、無料（DaVinci Resolve・CapCut）と料金体系は様々。長期的なコストを考えて選びましょう。" },
            { num: "4", title: "AI機能の充実度をチェック", desc: "2026年の動画編集はAI機能がカギ。自動字幕・自動カット・AI音声分離など、AIで作業時間を大幅に削減できます。CapCutとPremiere ProのAI機能が特に優秀です。" },
            { num: "5", title: "学習リソースの充実度を確認", desc: "日本語のチュートリアル動画や解説記事が豊富なソフトを選ぶと学習がスムーズです。Filmora・Premiere Proは日本語リソースが特に充実しています。" },
          ].map((item) => (
            <div key={item.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
                <div><h3 className="font-bold text-sm mb-1">{item.title}</h3><p className="text-sm text-muted">{item.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            動画編集ソフトは目的・スキルレベル・予算に合ったものを選ぶことが大切です。プロ品質なら「Adobe Premiere Pro」、無料でプロ品質なら「DaVinci Resolve」、SNSショート動画なら「CapCut」、初心者なら「Filmora」、バランス重視なら「PowerDirector」がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            2026年はAI機能の進化が目覚ましく、自動字幕・自動カット・AI音声分離など、以前はプロにしかできなかった編集が誰でも簡単にできるようになりました。まずは無料ソフトから始めて、動画制作の楽しさを体験してみてください。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・プロ品質の業界標準なら「Adobe Premiere Pro」（月額2,728円）</li>
              <li>・無料でプロ品質なら「DaVinci Resolve」（カラグレ最強）</li>
              <li>・SNSショート動画なら「CapCut」（無料・AI字幕が優秀）</li>
              <li>・初心者・YouTube入門なら「Filmora」（買い切り8,980円）</li>
              <li>・AI機能で初心者でもプロ品質の動画制作が可能に</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/photo-editing-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">写真編集ソフト比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">Adobe Lightroom・Canva・GIMPなどを徹底比較</p>
          </Link>
          <Link href="/guide/streaming-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">動画配信サービス比較おすすめ6選</span>
            <p className="text-xs text-muted mt-1">Amazon Prime Video・Netflix・U-NEXTなどを徹底比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
