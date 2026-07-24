"use client";
import { onTrackedLinkClick } from "@/lib/tracking";

// クロスドメイン UTM: 受け側 (money-navi / ai-tools-navi) の GA4 で
// utm_source=net-toolbox でセグメント可能にする
const AI_NAVI_HREF = "https://ai-tools-navi.jp?utm_source=net-toolbox&utm_medium=referral&utm_campaign=sister_site_footer";
const TOSHI_NAVI_HREF = "https://toshi-navi.jp?utm_source=net-toolbox&utm_medium=referral&utm_campaign=sister_site_footer";

export function CrossPromotion() {
  if (process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== "false") {
    return null;
  }

  const aiCategories = [
    { name: "AIチャット", icon: "💬" },
    { name: "AI画像生成", icon: "🎨" },
    { name: "AI文章作成", icon: "✍️" },
    { name: "AIコード生成", icon: "💻" },
  ];

  const moneyCategories = [
    { name: "新NISA", icon: "💰" },
    { name: "iDeCo", icon: "🏦" },
    { name: "FX・仮想通貨", icon: "💹" },
    { name: "ロボアド", icon: "🤖" },
  ];

  return (
    <section className="mt-6 mb-4 space-y-3">
      <a
        href={AI_NAVI_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onTrackedLinkClick({
          page: "global",
          position: "cross_promo_ai",
          service: "ai-tools-navi",
          href: AI_NAVI_HREF,
        })}
        className="block bg-card-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🤖</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            AIツールの比較もチェック！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          ChatGPT・Claude・Geminiなど100以上のAIツールを料金・機能で徹底比較。あなたに最適なAIツールが見つかります。
        </p>
        <div className="flex flex-wrap gap-2">
          {aiCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
      <a
        href={TOSHI_NAVI_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onTrackedLinkClick({
          page: "global",
          position: "cross_promo_money",
          service: "toshi-navi",
          href: TOSHI_NAVI_HREF,
        })}
        className="block bg-card-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">💰</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            新NISA・投資の情報はこちら！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          新NISA・iDeCo・FX・仮想通貨・ロボアドまで、お金の教養サイト「投資ナビJP」。60本以上の完全ガイドと38本のシミュレーター。
        </p>
        <div className="flex flex-wrap gap-2">
          {moneyCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
