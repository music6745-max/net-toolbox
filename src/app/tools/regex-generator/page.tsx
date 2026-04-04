"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = {
  name: string;
  pattern: string;
  flags: string;
  example: string;
  description: string;
  category: string;
};

const PATTERNS: Pattern[] = [
  {
    category: "メール・通信",
    name: "メールアドレス",
    pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}",
    flags: "i",
    example: "user@example.com",
    description: "標準的なメールアドレス形式",
  },
  {
    category: "メール・通信",
    name: "URL（http/https）",
    pattern: "https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+([\\w.,@?^=%&:\\/~+#\\-]*[\\w@?^=%&\\/~+#\\-])?",
    flags: "i",
    example: "https://example.com/path?q=1",
    description: "http または https で始まるURL",
  },
  {
    category: "メール・通信",
    name: "IPアドレス（IPv4）",
    pattern: "(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)",
    flags: "",
    example: "192.168.1.1",
    description: "IPv4形式のIPアドレス（0.0.0.0〜255.255.255.255）",
  },
  {
    category: "電話・郵便",
    name: "電話番号（日本）",
    pattern: "0\\d{1,4}[\\-\\s]?\\d{1,4}[\\-\\s]?\\d{4}",
    flags: "",
    example: "03-1234-5678",
    description: "日本の固定電話・携帯電話番号（ハイフンあり・なし対応）",
  },
  {
    category: "電話・郵便",
    name: "携帯電話番号（日本）",
    pattern: "0[789]0[\\-\\s]?\\d{4}[\\-\\s]?\\d{4}",
    flags: "",
    example: "090-1234-5678",
    description: "日本の携帯電話番号（070/080/090）",
  },
  {
    category: "電話・郵便",
    name: "郵便番号（日本）",
    pattern: "\\d{3}[\\-\\s]?\\d{4}",
    flags: "",
    example: "123-4567",
    description: "日本の郵便番号（ハイフンあり・なし対応）",
  },
  {
    category: "日付・時刻",
    name: "日付（YYYY-MM-DD）",
    pattern: "\\d{4}[\\-\\/](?:0[1-9]|1[0-2])[\\-\\/](?:0[1-9]|[12]\\d|3[01])",
    flags: "",
    example: "2024-01-31",
    description: "ISO 8601形式の日付",
  },
  {
    category: "日付・時刻",
    name: "日付（和暦 令和・平成など）",
    pattern: "(?:令和|平成|昭和|大正|明治)\\d{1,2}年\\d{1,2}月\\d{1,2}日",
    flags: "",
    example: "令和6年1月15日",
    description: "日本の元号形式の日付",
  },
  {
    category: "日付・時刻",
    name: "時刻（HH:MM:SS）",
    pattern: "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?",
    flags: "",
    example: "14:30:00",
    description: "24時間形式の時刻",
  },
  {
    category: "数値・コード",
    name: "整数（符号付き）",
    pattern: "[+\\-]?\\d+",
    flags: "",
    example: "-42",
    description: "符号付き整数（+12, -5, 100）",
  },
  {
    category: "数値・コード",
    name: "小数点付き数値",
    pattern: "[+\\-]?\\d+\\.\\d+",
    flags: "",
    example: "3.14",
    description: "整数部と小数部を持つ数値",
  },
  {
    category: "数値・コード",
    name: "16進数カラーコード",
    pattern: "#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})",
    flags: "",
    example: "#FF5733 or #abc",
    description: "CSSカラーコード（3桁・6桁）",
  },
  {
    category: "数値・コード",
    name: "クレジットカード番号",
    pattern: "\\d{4}[\\s\\-]?\\d{4}[\\s\\-]?\\d{4}[\\s\\-]?\\d{4}",
    flags: "",
    example: "1234-5678-9012-3456",
    description: "16桁のカード番号（ハイフン・スペースあり・なし対応）",
  },
  {
    category: "テキスト",
    name: "日本語（ひらがな）",
    pattern: "[\\u3041-\\u3096]+",
    flags: "",
    example: "あいうえお",
    description: "ひらがな文字のみ",
  },
  {
    category: "テキスト",
    name: "日本語（カタカナ）",
    pattern: "[\\u30A1-\\u30FA]+",
    flags: "",
    example: "アイウエオ",
    description: "全角カタカナ文字のみ",
  },
  {
    category: "テキスト",
    name: "日本語（漢字）",
    pattern: "[\\u4E00-\\u9FFF\\u3400-\\u4DBF]+",
    flags: "",
    example: "日本語",
    description: "CJK漢字（常用漢字を含む）",
  },
  {
    category: "テキスト",
    name: "英数字のみ",
    pattern: "[a-zA-Z0-9]+",
    flags: "",
    example: "Hello123",
    description: "半角英字と数字のみ（記号なし）",
  },
  {
    category: "テキスト",
    name: "空白行",
    pattern: "^\\s*$",
    flags: "m",
    example: "（空の行）",
    description: "空白文字のみ、または完全に空の行",
  },
];

const CATEGORIES = Array.from(new Set(PATTERNS.map((p) => p.category)));

export default function RegexGeneratorPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [testInput, setTestInput] = useState("");
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("すべて");

  const copy = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const testMatch = () => {
    if (!selectedPattern || !testInput) return null;
    try {
      const re = new RegExp(selectedPattern.pattern, selectedPattern.flags + "g");
      const matches = testInput.match(re);
      return matches;
    } catch {
      return null;
    }
  };

  const filtered = activeCategory === "すべて"
    ? PATTERNS
    : PATTERNS.filter((p) => p.category === activeCategory);

  const matches = testMatch();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>正規表現パターン集</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">正規表現パターン集</h1>
      <p className="text-muted mb-8">
        よく使う正規表現パターンを一覧から選んでコピー。テスト入力で動作確認もできます。
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {["すべて", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-card-bg border border-card-border text-muted hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-3 mb-8">
        {filtered.map((p, i) => {
          const globalIdx = PATTERNS.indexOf(p);
          return (
            <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted bg-background px-2 py-0.5 rounded-full">{p.category}</span>
                    <span className="font-medium text-sm">{p.name}</span>
                  </div>
                  <code className="block text-xs font-mono bg-background rounded px-3 py-2 mb-2 break-all">
                    /{p.pattern}/{p.flags}
                  </code>
                  <p className="text-xs text-muted">{p.description} — 例: <span className="font-mono">{p.example}</span></p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => copy(`/${p.pattern}/${p.flags}`, globalIdx)}
                    className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-primary-hover transition-colors"
                  >
                    {copiedIdx === globalIdx ? "コピー済み" : "コピー"}
                  </button>
                  <button
                    onClick={() => setSelectedPattern(selectedPattern?.name === p.name ? null : p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                      selectedPattern?.name === p.name
                        ? "border-primary text-primary"
                        : "border-card-border text-muted hover:text-primary"
                    }`}
                  >
                    テスト
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedPattern && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
          <h2 className="font-bold mb-3 text-sm">「{selectedPattern.name}」をテスト</h2>
          <textarea
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            placeholder="テストしたいテキストを入力..."
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
          {testInput && (
            <div className="mt-3">
              {matches && matches.length > 0 ? (
                <div>
                  <p className="text-sm text-green-700 font-medium mb-2">{matches.length}件マッチしました</p>
                  <div className="flex flex-wrap gap-2">
                    {matches.map((m, i) => (
                      <span key={i} className="bg-green-100 text-green-800 text-xs font-mono px-2 py-1 rounded">{m}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-red-600">マッチしませんでした</p>
              )}
            </div>
          )}
        </div>
      )}

      <section className="mt-6">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カテゴリボタンでパターンを絞り込み、「コピー」ボタンでクリップボードにコピーします。</p>
          <p>「テスト」ボタンを押すとテスト入力欄が表示され、実際のテキストでマッチ確認ができます。</p>
          <p>コピーしたパターンはJavaScript（new RegExp）やその他の言語でそのまま使用できます。</p>
        </div>
      </section>
    </div>
  );
}
