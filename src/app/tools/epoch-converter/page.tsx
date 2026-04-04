"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function pad(n: number, len = 2) {
  return n.toString().padStart(len, "0");
}

function formatDate(d: Date, tz: "local" | "utc"): string {
  if (tz === "utc") {
    return (
      `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ` +
      `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
    );
  }
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} (ローカル)`
  );
}

function inputToDatetime(d: Date): string {
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  );
}

export default function EpochConverterPage() {
  const [now, setNow] = useState<number>(0);
  const [epochInput, setEpochInput] = useState("");
  const [epochUnit, setEpochUnit] = useState<"ms" | "s">("ms");
  const [datetimeInput, setDatetimeInput] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const copy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Epoch → Date
  const epochDate = (() => {
    if (!epochInput.trim()) return null;
    const n = Number(epochInput.trim());
    if (isNaN(n)) return null;
    return new Date(epochUnit === "ms" ? n : n * 1000);
  })();

  // Date → Epoch
  const datetimeEpoch = (() => {
    if (!datetimeInput) return null;
    const d = new Date(datetimeInput);
    if (isNaN(d.getTime())) return null;
    return d;
  })();

  const nowDate = new Date(now);
  const MILESTONES = [
    { label: "2000-01-01 00:00 UTC", ms: 946684800000 },
    { label: "2020-01-01 00:00 UTC", ms: 1577836800000 },
    { label: "2024-01-01 00:00 UTC", ms: 1704067200000 },
    { label: "2030-01-01 00:00 UTC", ms: 1893456000000 },
    { label: "2038-01-19 (32bit limit)", ms: 2147483647000 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>エポック秒変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">エポック秒変換ツール</h1>
      <p className="text-muted mb-8">
        Unixエポック（秒・ミリ秒）と日時を相互変換します。現在時刻もリアルタイム表示。
      </p>

      {/* Current time */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="font-bold text-sm mb-4">現在時刻</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "ミリ秒（ms）", value: now.toString() },
            { label: "秒（s）", value: Math.floor(now / 1000).toString() },
            { label: "ローカル日時", value: formatDate(nowDate, "local") },
            { label: "UTC日時", value: formatDate(nowDate, "utc") },
          ].map((item) => (
            <div key={item.label} className="bg-background rounded-lg px-4 py-3 flex items-center justify-between gap-2">
              <div>
                <div className="text-xs text-muted mb-0.5">{item.label}</div>
                <div className="font-mono text-sm font-bold">{item.value}</div>
              </div>
              <button
                onClick={() => copy(item.value, item.label)}
                className="text-xs text-primary hover:text-primary-hover font-medium shrink-0"
              >
                {copiedField === item.label ? "済" : "コピー"}
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setEpochInput(now.toString())}
          className="mt-3 text-sm text-primary hover:text-primary-hover font-medium"
        >
          現在のエポック秒を入力欄にセット →
        </button>
      </div>

      {/* Epoch → Date */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="font-bold text-sm mb-4">エポック → 日時</h2>
        <div className="flex gap-2 mb-4">
          {(["ms", "s"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setEpochUnit(u)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                epochUnit === u ? "bg-primary text-white" : "bg-background border border-card-border text-muted hover:text-primary"
              }`}
            >
              {u === "ms" ? "ミリ秒 (ms)" : "秒 (s)"}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={epochInput}
          onChange={(e) => setEpochInput(e.target.value)}
          placeholder={epochUnit === "ms" ? "例: 1704067200000" : "例: 1704067200"}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary mb-4"
        />
        {epochDate && !isNaN(epochDate.getTime()) ? (
          <div className="space-y-2">
            {[
              { label: "ローカル日時", value: formatDate(epochDate, "local") },
              { label: "UTC日時", value: formatDate(epochDate, "utc") },
              { label: "ISO 8601", value: epochDate.toISOString() },
            ].map((item) => (
              <div key={item.label} className="bg-background rounded-lg px-4 py-3 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-muted mb-0.5">{item.label}</div>
                  <div className="font-mono text-sm">{item.value}</div>
                </div>
                <button
                  onClick={() => copy(item.value, "ep-" + item.label)}
                  className="text-xs text-primary hover:text-primary-hover font-medium shrink-0"
                >
                  {copiedField === "ep-" + item.label ? "済" : "コピー"}
                </button>
              </div>
            ))}
          </div>
        ) : epochInput && (
          <p className="text-sm text-red-500">有効なエポック値を入力してください</p>
        )}
      </div>

      {/* Date → Epoch */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="font-bold text-sm mb-4">日時 → エポック</h2>
        <input
          type="datetime-local"
          value={datetimeInput}
          onChange={(e) => setDatetimeInput(e.target.value)}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary mb-4"
        />
        <button
          onClick={() => setDatetimeInput(inputToDatetime(nowDate))}
          className="text-sm text-primary hover:text-primary-hover font-medium mb-4 block"
        >
          現在時刻をセット
        </button>
        {datetimeEpoch && (
          <div className="space-y-2">
            {[
              { label: "ミリ秒 (ms)", value: datetimeEpoch.getTime().toString() },
              { label: "秒 (s)", value: Math.floor(datetimeEpoch.getTime() / 1000).toString() },
            ].map((item) => (
              <div key={item.label} className="bg-background rounded-lg px-4 py-3 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-muted mb-0.5">{item.label}</div>
                  <div className="font-mono text-sm font-bold">{item.value}</div>
                </div>
                <button
                  onClick={() => copy(item.value, "dt-" + item.label)}
                  className="text-xs text-primary hover:text-primary-hover font-medium shrink-0"
                >
                  {copiedField === "dt-" + item.label ? "済" : "コピー"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Milestones */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="font-bold text-sm mb-4">主要な日時のエポック秒</h2>
        <div className="space-y-2">
          {MILESTONES.map((m) => (
            <button
              key={m.ms}
              onClick={() => { setEpochInput(m.ms.toString()); setEpochUnit("ms"); }}
              className="w-full flex items-center justify-between bg-background rounded-lg px-4 py-2.5 text-sm hover:border-primary border border-transparent transition-colors"
            >
              <span className="text-muted">{m.label}</span>
              <span className="font-mono font-medium">{m.ms.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「エポック → 日時」欄にUnixタイムスタンプを入力すると、ローカル・UTC・ISO形式で表示されます。</p>
          <p>「日時 → エポック」欄で日時を選択すると、ミリ秒・秒のエポック値が表示されます。</p>
          <p>現在時刻はリアルタイムで更新されます。「コピー」ボタンで各値をクリップボードにコピーできます。</p>
        </div>
      </section>


      <AffiliateSection slug="epoch-converter" category="開発ツール" />
      <RelatedTools currentSlug="epoch-converter" category="開発ツール" />
    </div>
  );
}
