"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TimestampConverterPage() {
  const [currentTs, setCurrentTs] = useState(0);
  const [tsInput, setTsInput] = useState("");
  const [tsResult, setTsResult] = useState("");
  const [tsError, setTsError] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [dateResult, setDateResult] = useState("");
  const [dateError, setDateError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const update = () => setCurrentTs(Math.floor(Date.now() / 1000));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const convertTsToDate = () => {
    const num = Number(tsInput.trim());
    if (!tsInput.trim() || isNaN(num)) {
      setTsError("有効な数値を入力してください");
      setTsResult("");
      return;
    }
    // support milliseconds (13 digits) and seconds (10 digits)
    const ms = String(Math.abs(num)).length >= 13 ? num : num * 1000;
    const d = new Date(ms);
    if (isNaN(d.getTime())) {
      setTsError("無効なタイムスタンプです");
      setTsResult("");
      return;
    }
    setTsError("");
    const pad = (n: number) => String(n).padStart(2, "0");
    setTsResult(
      `${d.getFullYear()}年${pad(d.getMonth() + 1)}月${pad(d.getDate())}日 ` +
        `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} (ローカル時刻)\n` +
        `UTC: ${d.toUTCString()}\n` +
        `ISO 8601: ${d.toISOString()}`
    );
  };

  const convertDateToTs = () => {
    if (!dateInput.trim()) {
      setDateError("日時を入力してください");
      setDateResult("");
      return;
    }
    const d = new Date(dateInput.trim());
    if (isNaN(d.getTime())) {
      setDateError("無効な日時形式です（例: 2024-01-15 12:00:00）");
      setDateResult("");
      return;
    }
    setDateError("");
    const sec = Math.floor(d.getTime() / 1000);
    setDateResult(`Unix タイムスタンプ（秒）: ${sec}\nUnix タイムスタンプ（ミリ秒）: ${d.getTime()}`);
  };

  const copyCurrentTs = async () => {
    await navigator.clipboard.writeText(String(currentTs));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Unixタイムスタンプ変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Unixタイムスタンプ変換ツール</h1>
      <p className="text-muted mb-8">
        Unix タイムスタンプと日時を相互変換します。現在のタイムスタンプもリアルタイムで確認できます。
      </p>

      {/* Current timestamp */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-base font-semibold mb-3">現在のUnixタイムスタンプ</h2>
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl font-bold text-primary">{currentTs}</span>
          <button
            onClick={copyCurrentTs}
            className="text-sm text-primary hover:text-primary-hover font-medium"
          >
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <p className="text-xs text-muted mt-1">秒単位 / 1秒ごとに更新</p>
      </div>

      {/* Timestamp → Date */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-base font-semibold mb-4">タイムスタンプ → 日時</h2>
        <label className="block text-sm font-medium mb-2">Unixタイムスタンプ（秒またはミリ秒）</label>
        <input
          type="text"
          value={tsInput}
          onChange={(e) => setTsInput(e.target.value)}
          placeholder="例: 1700000000"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        {tsError && <p className="text-red-500 text-sm mt-2">{tsError}</p>}
        <button
          onClick={convertTsToDate}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>
        {tsResult && (
          <pre className="mt-4 bg-background rounded-lg p-4 text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {tsResult}
          </pre>
        )}
      </div>

      {/* Date → Timestamp */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-base font-semibold mb-4">日時 → タイムスタンプ</h2>
        <label className="block text-sm font-medium mb-2">日時を入力</label>
        <input
          type="text"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          placeholder="例: 2024-01-15 12:00:00"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <p className="text-xs text-muted mt-1">ISO 8601形式（2024-01-15T12:00:00）も対応</p>
        {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
        <button
          onClick={convertDateToTs}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>
        {dateResult && (
          <pre className="mt-4 bg-background rounded-lg p-4 text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {dateResult}
          </pre>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Unixタイムスタンプ変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「現在のUnixタイムスタンプ」セクションでは、今この瞬間のタイムスタンプがリアルタイムで表示されます。</p>
          <p>2. 「タイムスタンプ → 日時」では、秒またはミリ秒のタイムスタンプを入力して日時に変換します。</p>
          <p>3. 「日時 → タイムスタンプ」では、日時文字列（例: 2024-01-15 12:00:00）を入力してタイムスタンプに変換します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="timestamp-converter" category="開発ツール" />
      <RelatedTools currentSlug="timestamp-converter" category="開発ツール" />
    </div>
  );
}
