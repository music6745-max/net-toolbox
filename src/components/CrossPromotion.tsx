export function CrossPromotion() {
  const aiCategories = [
    { name: "AIチャット", icon: "💬", path: "/category/ai-chat" },
    { name: "AI画像生成", icon: "🎨", path: "/category/ai-image" },
    { name: "AI文章作成", icon: "✍️", path: "/category/ai-writing" },
    { name: "AIコード生成", icon: "💻", path: "/category/ai-code" },
  ];

  const baseUrl = "https://ai-tools-navi-navy.vercel.app";

  return (
    <section className="mt-6 mb-4">
      <a
        href={baseUrl}
        target="_blank"
        rel="noopener noreferrer"
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
    </section>
  );
}
