"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface QueryParam {
  id: number;
  key: string;
  value: string;
}

export default function Page() {
  const [baseUrl, setBaseUrl] = useState("https://example.com");
  const [pathSegments, setPathSegments] = useState("");
  const [params, setParams] = useState<QueryParam[]>([{ id: 1, key: "", value: "" }]);
  const [fragment, setFragment] = useState("");
  const [copied, setCopied] = useState(false);
  const [showUtm, setShowUtm] = useState(false);
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  let nextId = params.length > 0 ? Math.max(...params.map((p) => p.id)) + 1 : 1;

  const addParam = () => {
    setParams([...params, { id: nextId++, key: "", value: "" }]);
  };

  const removeParam = (id: number) => {
    setParams(params.filter((p) => p.id !== id));
  };

  const updateParam = (id: number, field: "key" | "value", val: string) => {
    setParams(params.map((p) => (p.id === id ? { ...p, [field]: val } : p)));
  };

  const buildUrl = () => {
    try {
      let base = baseUrl.trim();
      if (!base) return "";
      if (!/^https?:\/\//i.test(base)) base = "https://" + base;
      const url = new URL(base);
      if (pathSegments.trim()) {
        const segs = pathSegments
          .split("/")
          .filter(Boolean)
          .map((s) => encodeURIComponent(s.trim()));
        url.pathname = url.pathname.replace(/\/+$/, "") + "/" + segs.join("/");
      }
      const allParams = [
        ...params.filter((p) => p.key.trim()),
      ];
      if (showUtm) {
        if (utmSource) allParams.push({ id: 0, key: "utm_source", value: utmSource });
        if (utmMedium) allParams.push({ id: 0, key: "utm_medium", value: utmMedium });
        if (utmCampaign) allParams.push({ id: 0, key: "utm_campaign", value: utmCampaign });
        if (utmContent) allParams.push({ id: 0, key: "utm_content", value: utmContent });
        if (utmTerm) allParams.push({ id: 0, key: "utm_term", value: utmTerm });
      }
      allParams.forEach((p) => url.searchParams.append(p.key, p.value));
      if (fragment.trim()) url.hash = fragment.trim();
      return url.toString();
    } catch {
      return "無効なURLです";
    }
  };

  const generatedUrl = buildUrl();

  const copy = async () => {
    if (!generatedUrl || generatedUrl === "無効なURLです") return;
    await navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass =
    "w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>URL構築ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">URL構築ツール</h1>
      <p className="text-muted mb-8">
        URLのパス・クエリパラメータ・フラグメントを視覚的に組み立て。UTMパラメータにも対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">ベースURL</label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">パスセグメント（/区切り）</label>
          <input
            type="text"
            value={pathSegments}
            onChange={(e) => setPathSegments(e.target.value)}
            placeholder="api/v1/users"
            className={inputClass}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">クエリパラメータ</label>
            <button onClick={addParam} className="text-sm text-primary hover:text-primary-hover font-medium">
              + 追加
            </button>
          </div>
          {params.map((p) => (
            <div key={p.id} className="flex gap-2 mb-2">
              <input
                type="text"
                value={p.key}
                onChange={(e) => updateParam(p.id, "key", e.target.value)}
                placeholder="キー"
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                value={p.value}
                onChange={(e) => updateParam(p.id, "value", e.target.value)}
                placeholder="値"
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={() => removeParam(p.id)}
                className="text-red-500 hover:text-red-700 px-2 text-sm"
              >
                削除
              </button>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">フラグメント（#）</label>
          <input
            type="text"
            value={fragment}
            onChange={(e) => setFragment(e.target.value)}
            placeholder="section1"
            className={inputClass}
          />
        </div>

        <div>
          <button
            onClick={() => setShowUtm(!showUtm)}
            className="text-sm text-primary hover:text-primary-hover font-medium"
          >
            {showUtm ? "▼ UTMパラメータを隠す" : "▶ UTMパラメータを追加"}
          </button>
          {showUtm && (
            <div className="mt-3 space-y-2 pl-2 border-l-2 border-primary/20">
              {[
                { label: "utm_source", val: utmSource, set: setUtmSource, ph: "google, newsletter..." },
                { label: "utm_medium", val: utmMedium, set: setUtmMedium, ph: "cpc, email, social..." },
                { label: "utm_campaign", val: utmCampaign, set: setUtmCampaign, ph: "spring_sale..." },
                { label: "utm_content", val: utmContent, set: setUtmContent, ph: "banner_ad, text_link..." },
                { label: "utm_term", val: utmTerm, set: setUtmTerm, ph: "running shoes..." },
              ].map((u) => (
                <div key={u.label} className="flex items-center gap-2">
                  <label className="text-sm w-28 shrink-0 font-mono">{u.label}</label>
                  <input
                    type="text"
                    value={u.val}
                    onChange={(e) => u.set(e.target.value)}
                    placeholder={u.ph}
                    className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">生成されたURL</span>
            <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap">
            {generatedUrl || "URLを入力してください"}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">URL構築ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ベースURL、パスセグメント、クエリパラメータ、フラグメントを入力すると、完成されたURLがリアルタイムで生成されます。</p>
          <p>UTMパラメータを展開すると、マーケティングキャンペーン用のトラッキングパラメータも簡単に追加できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <AffiliateSection slug="url-builder" category="開発ツール" />


      <RelatedTools currentSlug="url-builder" category="開発ツール" />
    </div>
  );
}
