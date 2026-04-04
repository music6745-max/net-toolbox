"use client";

import { useState } from "react";
import Link from "next/link";

type TreeNode = {
  key: string;
  value: unknown;
  path: string;
};

function JsonTree({
  data,
  path,
  onSelect,
  selectedPath,
}: {
  data: unknown;
  path: string;
  onSelect: (path: string, value: unknown) => void;
  selectedPath: string;
}) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggle = (p: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  if (data === null) {
    return (
      <span
        className={`cursor-pointer rounded px-1 hover:bg-primary/10 text-red-400 ${selectedPath === path ? "bg-primary/20" : ""}`}
        onClick={() => onSelect(path, null)}
      >
        null
      </span>
    );
  }

  if (typeof data === "boolean") {
    return (
      <span
        className={`cursor-pointer rounded px-1 hover:bg-primary/10 text-purple-500 ${selectedPath === path ? "bg-primary/20" : ""}`}
        onClick={() => onSelect(path, data)}
      >
        {String(data)}
      </span>
    );
  }

  if (typeof data === "number") {
    return (
      <span
        className={`cursor-pointer rounded px-1 hover:bg-primary/10 text-blue-500 ${selectedPath === path ? "bg-primary/20" : ""}`}
        onClick={() => onSelect(path, data)}
      >
        {data}
      </span>
    );
  }

  if (typeof data === "string") {
    return (
      <span
        className={`cursor-pointer rounded px-1 hover:bg-primary/10 text-green-600 ${selectedPath === path ? "bg-primary/20" : ""}`}
        onClick={() => onSelect(path, data)}
      >
        &quot;{data}&quot;
      </span>
    );
  }

  if (Array.isArray(data)) {
    const isCollapsed = collapsed.has(path);
    return (
      <span>
        <button
          onClick={() => toggle(path)}
          className="text-muted hover:text-primary text-xs mr-1"
        >
          {isCollapsed ? "▶" : "▼"}
        </button>
        <span className="text-muted">[</span>
        {isCollapsed ? (
          <span
            className="text-muted text-xs cursor-pointer hover:text-primary"
            onClick={() => toggle(path)}
          >
            {" "}...{data.length} items{" "}
          </span>
        ) : (
          <div className="ml-4">
            {data.map((item, i) => (
              <div key={i} className="my-0.5">
                <span
                  className="text-muted text-xs cursor-pointer hover:text-primary"
                  onClick={() => onSelect(`${path}[${i}]`, item)}
                >
                  [{i}]:{" "}
                </span>
                <JsonTree
                  data={item}
                  path={`${path}[${i}]`}
                  onSelect={onSelect}
                  selectedPath={selectedPath}
                />
              </div>
            ))}
          </div>
        )}
        <span className="text-muted">]</span>
      </span>
    );
  }

  if (typeof data === "object") {
    const isCollapsed = collapsed.has(path);
    const entries = Object.entries(data as Record<string, unknown>);
    return (
      <span>
        <button
          onClick={() => toggle(path)}
          className="text-muted hover:text-primary text-xs mr-1"
        >
          {isCollapsed ? "▶" : "▼"}
        </button>
        <span className="text-muted">{"{"}</span>
        {isCollapsed ? (
          <span
            className="text-muted text-xs cursor-pointer hover:text-primary"
            onClick={() => toggle(path)}
          >
            {" "}...{entries.length} keys{" "}
          </span>
        ) : (
          <div className="ml-4">
            {entries.map(([k, v]) => {
              const childPath = path ? `${path}.${k}` : k;
              return (
                <div key={k} className="my-0.5">
                  <span
                    className="text-orange-500 cursor-pointer hover:text-primary"
                    onClick={() => onSelect(childPath, v)}
                  >
                    &quot;{k}&quot;
                  </span>
                  <span className="text-muted">: </span>
                  <JsonTree
                    data={v}
                    path={childPath}
                    onSelect={onSelect}
                    selectedPath={selectedPath}
                  />
                </div>
              );
            })}
          </div>
        )}
        <span className="text-muted">{"}"}</span>
      </span>
    );
  }

  return <span className="text-muted">{String(data)}</span>;
}

export default function JsonPathFinderPage() {
  const [input, setInput] = useState("");
  const [parsed, setParsed] = useState<unknown>(null);
  const [error, setError] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [selectedValue, setSelectedValue] = useState<unknown>(undefined);
  const [copied, setCopied] = useState(false);

  const parse = () => {
    try {
      const result = JSON.parse(input);
      setParsed(result);
      setError("");
      setSelectedPath("");
      setSelectedValue(undefined);
    } catch (e) {
      setError(`JSONパースエラー: ${(e as Error).message}`);
      setParsed(null);
    }
  };

  const handleSelect = (path: string, value: unknown) => {
    setSelectedPath(path);
    setSelectedValue(value);
  };

  const copyPath = async () => {
    await navigator.clipboard.writeText(selectedPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SAMPLE = JSON.stringify(
    {
      user: {
        id: 1,
        name: "山田太郎",
        email: "yamada@example.com",
        roles: ["admin", "editor"],
        address: { city: "東京", zip: "100-0001" },
      },
    },
    null,
    2
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JSONパス検索</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSONパス検索ツール</h1>
      <p className="text-muted mb-8">
        JSONを入力してツリー表示し、値をクリックするとドット記法のJSONパスを確認できます。
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">JSONを入力</label>
            <button
              onClick={() => setInput(SAMPLE)}
              className="text-xs text-primary hover:text-primary-hover"
            >
              サンプルを使用
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'{"key": "value"}'}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
            rows={10}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            onClick={parse}
            disabled={!input.trim()}
            className="w-full bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            解析する
          </button>
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
          <p className="text-sm font-medium">ツリービュー（クリックでパスを取得）</p>
          {parsed !== null ? (
            <div className="bg-background rounded-lg p-4 text-sm font-mono overflow-auto max-h-64">
              <JsonTree
                data={parsed}
                path=""
                onSelect={handleSelect}
                selectedPath={selectedPath}
              />
            </div>
          ) : (
            <div className="bg-background rounded-lg p-4 text-sm text-muted text-center h-32 flex items-center justify-center">
              JSONを入力して「解析する」をクリックしてください
            </div>
          )}

          {selectedPath !== "" && (
            <div className="border border-primary/30 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted font-medium">選択したパス</span>
                <button
                  onClick={copyPath}
                  className="text-xs text-primary hover:text-primary-hover font-medium"
                >
                  {copied ? "コピー済み" : "コピー"}
                </button>
              </div>
              <div className="bg-background rounded px-3 py-2 text-sm font-mono text-primary">
                {selectedPath || "(ルート)"}
              </div>
              <div className="text-xs text-muted">
                値: <span className="font-mono">{JSON.stringify(selectedValue)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>JSONテキストを入力して「解析する」をクリックするとツリービューが表示されます。</p>
          <p>ツリー内のキーや値をクリックすると、そのデータへのドット記法パスが下に表示されます。</p>
          <p>配列要素は [0], [1] のように表示されます（例: user.roles[0]）。</p>
          <p>APIのレスポンスを解析してアクセスパスを確認するのに便利です。</p>
        </div>
      </section>
    </div>
  );
}
