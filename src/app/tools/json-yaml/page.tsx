"use client";

import { useState } from "react";
import Link from "next/link";

function jsonToYaml(obj: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (obj === null) return "null";
  if (obj === undefined) return "null";
  if (typeof obj === "boolean") return obj ? "true" : "false";
  if (typeof obj === "number") return String(obj);
  if (typeof obj === "string") {
    if (
      obj.includes("\n") ||
      obj.includes(":") ||
      obj.includes("#") ||
      obj.includes("'") ||
      obj.startsWith(" ") ||
      obj.endsWith(" ") ||
      obj === "" ||
      /^[\d.]+$/.test(obj) ||
      obj === "true" ||
      obj === "false" ||
      obj === "null"
    ) {
      return `"${obj.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    return obj
      .map((item) => {
        const val = jsonToYaml(item, indent + 1);
        if (typeof item === "object" && item !== null && !Array.isArray(item)) {
          const lines = val.split("\n");
          return `${pad}- ${lines[0]}\n${lines
            .slice(1)
            .map((l) => `${pad}  ${l}`)
            .join("\n")}`;
        }
        return `${pad}- ${val}`;
      })
      .join("\n");
  }
  if (typeof obj === "object") {
    const entries = Object.entries(obj as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    return entries
      .map(([key, val]) => {
        const safeKey =
          key.includes(":") || key.includes("#") || key.includes(" ")
            ? `"${key}"`
            : key;
        if (typeof val === "object" && val !== null) {
          const nested = jsonToYaml(val, indent + 1);
          if (Array.isArray(val) && (val as unknown[]).length === 0) {
            return `${pad}${safeKey}: []`;
          }
          if (!Array.isArray(val) && Object.keys(val).length === 0) {
            return `${pad}${safeKey}: {}`;
          }
          return `${pad}${safeKey}:\n${nested}`;
        }
        return `${pad}${safeKey}: ${jsonToYaml(val, indent + 1)}`;
      })
      .join("\n");
  }
  return String(obj);
}

function parseYamlValue(val: string): unknown {
  const trimmed = val.trim();
  if (trimmed === "null" || trimmed === "~") return null;
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+$/.test(trimmed)) return parseInt(trimmed, 10);
  if (/^-?\d+\.\d+$/.test(trimmed)) return parseFloat(trimmed);
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function yamlToJson(yaml: string): unknown {
  const lines = yaml.split("\n");
  const stack: { indent: number; obj: unknown; key?: string; isArray: boolean }[] = [];
  let root: unknown = undefined;

  function setVal(val: unknown) {
    if (stack.length === 0) {
      root = val;
      return;
    }
    const top = stack[stack.length - 1];
    if (top.isArray) {
      (top.obj as unknown[]).push(val);
    } else if (top.key !== undefined) {
      (top.obj as Record<string, unknown>)[top.key] = val;
      top.key = undefined;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (raw.trim() === "" || raw.trim().startsWith("#")) continue;

    const indent = raw.search(/\S/);
    const content = raw.trim();

    while (
      stack.length > 0 &&
      stack[stack.length - 1].indent >= indent &&
      !(stack.length > 0 && stack[stack.length - 1].indent === indent && stack[stack.length - 1].isArray && content.startsWith("- "))
    ) {
      const popped = stack.pop();
      if (popped) setVal(popped.obj);
    }

    if (content.startsWith("- ")) {
      const itemContent = content.slice(2).trim();
      if (stack.length === 0 || !stack[stack.length - 1].isArray || stack[stack.length - 1].indent !== indent) {
        const arr: unknown[] = [];
        stack.push({ indent, obj: arr, isArray: true });
      }
      if (itemContent === "" || itemContent.startsWith("#")) {
        // next lines will be nested
      } else if (itemContent.includes(":") && !itemContent.startsWith('"')) {
        const colonIdx = itemContent.indexOf(":");
        const k = itemContent.slice(0, colonIdx).trim();
        const v = itemContent.slice(colonIdx + 1).trim();
        const childObj: Record<string, unknown> = {};
        if (v !== "") childObj[k] = parseYamlValue(v);
        (stack[stack.length - 1].obj as unknown[]).push(childObj);
      } else {
        (stack[stack.length - 1].obj as unknown[]).push(parseYamlValue(itemContent));
      }
      continue;
    }

    if (content.includes(":")) {
      const colonIdx = content.indexOf(":");
      const k = content.slice(0, colonIdx).trim().replace(/^["']|["']$/g, "");
      const v = content.slice(colonIdx + 1).trim();

      if (stack.length === 0 || stack[stack.length - 1].isArray) {
        const obj: Record<string, unknown> = {};
        stack.push({ indent, obj, key: k, isArray: false });
        if (v !== "" && !v.startsWith("#")) {
          obj[k] = parseYamlValue(v);
          stack[stack.length - 1].key = undefined;
        } else {
          stack[stack.length - 1].key = k;
        }
      } else {
        const top = stack[stack.length - 1];
        if (v !== "" && !v.startsWith("#")) {
          (top.obj as Record<string, unknown>)[k] = parseYamlValue(v);
          top.key = undefined;
        } else {
          top.key = k;
          stack[stack.length - 1].indent = indent;
        }
      }
    }
  }

  while (stack.length > 0) {
    const popped = stack.pop();
    if (popped) setVal(popped.obj);
  }

  return root;
}

export default function JsonYamlPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const convertJsonToYaml = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(jsonToYaml(parsed));
      setError("");
    } catch {
      setError("無効なJSON形式です。JSONを確認してください。");
      setOutput("");
    }
  };

  const convertYamlToJson = () => {
    try {
      const parsed = yamlToJson(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setError("YAMLの解析に失敗しました。形式を確認してください。");
      setOutput("");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadSample = () => {
    setInput(
      JSON.stringify(
        {
          name: "サンプルプロジェクト",
          version: "1.0.0",
          enabled: true,
          count: 42,
          tags: ["web", "api", "json"],
          author: {
            name: "山田太郎",
            email: "yamada@example.com",
          },
        },
        null,
        2
      )
    );
    setOutput("");
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>JSON⇔YAML変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSON⇔YAML変換ツール</h1>
      <p className="text-muted mb-8">
        JSONをYAML形式に変換、またはYAMLをJSON形式に変換します。すべての処理はブラウザ内で完結します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium">入力（JSONまたはYAML）</label>
          <button
            onClick={loadSample}
            className="text-xs text-primary hover:text-primary-hover"
          >
            サンプルを読み込む
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          placeholder="JSONまたはYAMLを貼り付けてください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={10}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex gap-3 mt-4">
          <button
            onClick={convertJsonToYaml}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            JSON → YAML
          </button>
          <button
            onClick={convertYamlToJson}
            className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            YAML → JSON
          </button>
        </div>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換結果</span>
              <button
                onClick={copy}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み ✓" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-80 overflow-y-auto">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">JSON⇔YAML変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>
            テキストエリアにJSONまたはYAMLを貼り付け、変換したい方向のボタンを押してください。
          </p>
          <p>
            「JSON → YAML」ボタンでJSON形式のテキストをYAMLに変換します。「YAML → JSON」ボタンでYAMLをJSON形式に変換します。
          </p>
          <p>
            オブジェクト、配列、文字列、数値、真偽値、ネストされた構造に対応しています。
          </p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
