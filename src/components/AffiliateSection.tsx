"use client";

import { useMemo } from "react";

interface Recommendation {
  title: string;
  description: string;
  linkText: string;
  url: string;
  tag: string;
}

// Affiliate recommendations mapped by tool category or specific tool slug
// URLs are placeholder - replace with actual affiliate links after signup
const RECOMMENDATIONS: Record<string, Recommendation[]> = {
  // Security tools
  "セキュリティ": [
    {
      title: "1Password - パスワード管理アプリ",
      description: "すべてのパスワードを安全に一元管理。自動入力で毎日のログインも楽に。",
      linkText: "詳しく見る",
      url: "https://1password.com/jp",
      tag: "パスワード管理",
    },
    {
      title: "NordVPN - VPNサービス",
      description: "オンラインプライバシーを保護。公共WiFiでも安全にインターネットを利用。",
      linkText: "詳しく見る",
      url: "https://nordvpn.com/ja/",
      tag: "セキュリティ",
    },
  ],
  // Design tools
  "デザイン": [
    {
      title: "Canva Pro - デザインツール",
      description: "プロ品質のデザインを簡単作成。テンプレート豊富で初心者にもおすすめ。",
      linkText: "無料で始める",
      url: "https://www.canva.com/ja_jp/",
      tag: "デザイン",
    },
    {
      title: "Adobe Creative Cloud",
      description: "Photoshop・Illustrator等のプロ向けデザインツール。学割あり。",
      linkText: "詳しく見る",
      url: "https://www.adobe.com/jp/creativecloud.html",
      tag: "デザイン",
    },
  ],
  // Dev tools
  "開発ツール": [
    {
      title: "Udemy - プログラミング講座",
      description: "Web開発・アプリ開発を学べるオンライン講座。セール時は1,200円から。",
      linkText: "講座を探す",
      url: "https://www.udemy.com/",
      tag: "学習",
    },
    {
      title: "さくらのレンタルサーバ",
      description: "高速・安定のレンタルサーバー。WordPress対応、月額425円から。",
      linkText: "詳しく見る",
      url: "https://www.sakura.ne.jp/",
      tag: "サーバー",
    },
  ],
  // Daily tools
  "日常ツール": [
    {
      title: "マネーフォワード ME - 家計簿アプリ",
      description: "銀行・クレジットカードと自動連携。家計を見える化して節約。",
      linkText: "無料で始める",
      url: "https://moneyforward.com/me",
      tag: "家計管理",
    },
  ],
  // Text tools
  "テキスト": [
    {
      title: "Notion - オールインワン作業ツール",
      description: "メモ・タスク管理・データベースを一つに。テキスト作業の効率化に。",
      linkText: "無料で始める",
      url: "https://www.notion.so/ja-jp",
      tag: "生産性",
    },
  ],
  // Image/media tools
  "画像・メディア": [
    {
      title: "Canva Pro - 画像編集",
      description: "画像のリサイズ・加工・テンプレートが豊富。SNS画像の作成にも。",
      linkText: "無料で始める",
      url: "https://www.canva.com/ja_jp/",
      tag: "画像編集",
    },
  ],
};

// Tool-specific overrides for higher relevance
const TOOL_SPECIFIC: Record<string, Recommendation[]> = {
  "loan-calculator": [
    {
      title: "住信SBIネット銀行 - 住宅ローン",
      description: "業界最低水準の金利。ネットで完結、来店不要。変動金利0.3%台〜",
      linkText: "金利をチェック",
      url: "https://www.netbk.co.jp/contents/lp/hl/",
      tag: "住宅ローン",
    },
    {
      title: "モゲチェック - 住宅ローン比較",
      description: "複数の銀行の住宅ローンを一括比較。最適なローンが見つかる。",
      linkText: "無料で比較する",
      url: "https://mogecheck.jp/",
      tag: "ローン比較",
    },
  ],
  "bmi-calculator": [
    {
      title: "あすけん - 食事管理アプリ",
      description: "食事を記録するだけでカロリー・栄養バランスを自動分析。ダイエットに。",
      linkText: "無料で始める",
      url: "https://www.asken.jp/",
      tag: "健康管理",
    },
  ],
  "body-fat": [
    {
      title: "タニタ 体組成計",
      description: "体脂肪率・筋肉量・内臓脂肪を正確に測定。スマホ連携で記録管理。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=タニタ+体組成計",
      tag: "健康機器",
    },
  ],
  "calorie-calculator": [
    {
      title: "あすけん - カロリー管理",
      description: "食事写真を撮るだけでカロリーを自動計算。栄養士からのアドバイスも。",
      linkText: "無料で始める",
      url: "https://www.asken.jp/",
      tag: "カロリー管理",
    },
  ],
  "password-generator": [
    {
      title: "1Password - パスワード管理の決定版",
      description: "生成したパスワードを安全に保存・自動入力。家族プランもあり。",
      linkText: "14日間無料体験",
      url: "https://1password.com/jp",
      tag: "パスワード管理",
    },
  ],
  "color-converter": [
    {
      title: "Figma - UIデザインツール",
      description: "チームでリアルタイム共同編集。Webデザインの業界標準ツール。",
      linkText: "無料で始める",
      url: "https://www.figma.com/ja/",
      tag: "デザイン",
    },
  ],
  "json-formatter": [
    {
      title: "Visual Studio Code",
      description: "最も人気のコードエディタ。拡張機能でJSON整形も簡単。無料。",
      linkText: "ダウンロード",
      url: "https://code.visualstudio.com/",
      tag: "エディタ",
    },
  ],
  "compound-interest": [
    {
      title: "SBI証券 - ネット証券",
      description: "業界最安の手数料。投資信託・NISA・iDeCoで複利運用を始めよう。",
      linkText: "口座開設(無料)",
      url: "https://www.sbisec.co.jp/",
      tag: "資産運用",
    },
  ],
  "savings-calculator": [
    {
      title: "楽天証券 - 積立投資",
      description: "楽天ポイントで投資できる。100円から積立投資が始められる。",
      linkText: "詳しく見る",
      url: "https://www.rakuten-sec.co.jp/",
      tag: "資産運用",
    },
  ],
  "electricity-calculator": [
    {
      title: "エネチェンジ - 電力比較",
      description: "電力会社を無料で比較。切り替えるだけで年間数万円の節約に。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "electricity-rate": [
    {
      title: "エネチェンジ - 電気代見直し",
      description: "電力会社の乗り換えで電気代を節約。簡単シミュレーション。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "currency-converter": [
    {
      title: "Wise - 海外送金・両替",
      description: "銀行より最大8倍安い手数料で海外送金。リアルタイムの為替レート。",
      linkText: "詳しく見る",
      url: "https://wise.com/jp/",
      tag: "海外送金",
    },
  ],
  "mortgage-calculator": [
    {
      title: "SUUMO - 住宅情報サイト",
      description: "物件検索から住宅ローンシミュレーションまで。マイホーム探しに。",
      linkText: "物件を探す",
      url: "https://suumo.jp/",
      tag: "住宅",
    },
  ],
  "salary-calculator": [
    {
      title: "doda - 転職サイト",
      description: "年収アップの転職なら。非公開求人多数、専任アドバイザーがサポート。",
      linkText: "無料で登録",
      url: "https://doda.jp/",
      tag: "転職",
    },
  ],
  "tax-calculator": [
    {
      title: "freee - クラウド会計ソフト",
      description: "確定申告・経理をクラウドで簡単に。個人事業主・フリーランスに。",
      linkText: "無料で始める",
      url: "https://www.freee.co.jp/",
      tag: "会計",
    },
  ],
};

export function AffiliateSection({ slug, category }: { slug: string; category: string }) {
  const recommendations = useMemo(() => {
    // Tool-specific recommendations take priority
    if (TOOL_SPECIFIC[slug]) return TOOL_SPECIFIC[slug];
    // Fall back to category-level recommendations
    return RECOMMENDATIONS[category] || [];
  }, [slug, category]);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-4">おすすめサービス</h2>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <a
            key={i}
            href={rec.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{rec.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">{rec.tag}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{rec.description}</p>
              </div>
              <span className="text-sm text-primary whitespace-nowrap font-medium shrink-0">{rec.linkText} →</span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted mt-2 text-right">※ PR・広告を含みます</p>
    </section>
  );
}
