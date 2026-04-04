"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Era = {
  name: string;
  startYear: number;
  endYear: number;
  startMonth: number;
  startDay: number;
};

const ERAS: Era[] = [
  { name: "令和", startYear: 2019, endYear: 9999, startMonth: 5, startDay: 1 },
  { name: "平成", startYear: 1989, endYear: 2019, startMonth: 1, startDay: 8 },
  { name: "昭和", startYear: 1926, endYear: 1989, startMonth: 12, startDay: 25 },
  { name: "大正", startYear: 1912, endYear: 1926, startMonth: 7, startDay: 30 },
  { name: "明治", startYear: 1868, endYear: 1912, startMonth: 1, startDay: 25 },
];

function seirekiToWareki(year: number, month: number, day: number): string {
  const date = new Date(year, month - 1, day);
  for (const era of ERAS) {
    const eraStart = new Date(era.startYear, era.startMonth - 1, era.startDay);
    const eraEnd =
      era.endYear === 9999
        ? new Date(9999, 11, 31)
        : (() => {
            const next = ERAS[ERAS.indexOf(era) - 1];
            return new Date(next.startYear, next.startMonth - 1, next.startDay - 1);
          })();
    if (date >= eraStart && date <= eraEnd) {
      const warekiYear = year - era.startYear + 1;
      return `${era.name}${warekiYear === 1 ? "元" : warekiYear}年${month}月${day}日`;
    }
  }
  return "対応する和暦がありません";
}

function warekiToSeireki(eraName: string, eraYear: number, month: number, day: number): string {
  const era = ERAS.find((e) => e.name === eraName);
  if (!era) return "元号が見つかりません";
  const seirekiYear = era.startYear + eraYear - 1;
  const date = new Date(seirekiYear, month - 1, day);
  const eraStart = new Date(era.startYear, era.startMonth - 1, era.startDay);
  const eraEnd =
    era.endYear === 9999
      ? new Date(9999, 11, 31)
      : new Date(era.endYear, ERAS[ERAS.indexOf(era) - 1].startMonth - 1, ERAS[ERAS.indexOf(era) - 1].startDay - 1);
  if (date < eraStart || date > eraEnd) {
    return "入力した日付はその元号の範囲外です";
  }
  return `${seirekiYear}年${month}月${day}日`;
}

export default function WarekiConverterPage() {
  // Wareki → Seireki
  const [era, setEra] = useState("令和");
  const [warekiYear, setWarekiYear] = useState("");
  const [warekiMonth, setWarekiMonth] = useState("");
  const [warekiDay, setWarekiDay] = useState("");
  const [warekiResult, setWarekiResult] = useState("");
  const [warekiError, setWarekiError] = useState("");

  // Seireki → Wareki
  const [seiYear, setSeiYear] = useState("");
  const [seiMonth, setSeiMonth] = useState("");
  const [seiDay, setSeiDay] = useState("");
  const [seiResult, setSeiResult] = useState("");
  const [seiError, setSeiError] = useState("");

  const convertWarekiToSeireki = () => {
    const y = parseInt(warekiYear);
    const m = parseInt(warekiMonth);
    const d = parseInt(warekiDay);
    if (!warekiYear || !warekiMonth || !warekiDay || isNaN(y) || isNaN(m) || isNaN(d)) {
      setWarekiError("すべての項目を正しく入力してください");
      setWarekiResult("");
      return;
    }
    if (m < 1 || m > 12 || d < 1 || d > 31) {
      setWarekiError("月は1〜12、日は1〜31の範囲で入力してください");
      setWarekiResult("");
      return;
    }
    setWarekiError("");
    setWarekiResult(warekiToSeireki(era, y, m, d));
  };

  const convertSeirekiToWareki = () => {
    const y = parseInt(seiYear);
    const m = parseInt(seiMonth);
    const d = parseInt(seiDay);
    if (!seiYear || !seiMonth || !seiDay || isNaN(y) || isNaN(m) || isNaN(d)) {
      setSeiError("すべての項目を正しく入力してください");
      setSeiResult("");
      return;
    }
    if (m < 1 || m > 12 || d < 1 || d > 31) {
      setSeiError("月は1〜12、日は1〜31の範囲で入力してください");
      setSeiResult("");
      return;
    }
    setSeiError("");
    setSeiResult(seirekiToWareki(y, m, d));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>和暦西暦変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">和暦西暦変換ツール</h1>
      <p className="text-muted mb-8">
        令和・平成・昭和・大正・明治の和暦と西暦を相互に変換できます。
      </p>

      {/* Wareki → Seireki */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-base font-semibold mb-4">和暦 → 西暦</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">元号</label>
            <select
              value={era}
              onChange={(e) => setEra(e.target.value)}
              className="border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
            >
              {ERAS.map((e) => (
                <option key={e.name} value={e.name}>{e.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">年</label>
            <input
              type="number"
              value={warekiYear}
              onChange={(e) => setWarekiYear(e.target.value)}
              placeholder="例: 6"
              min={1}
              className="w-24 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">月</label>
            <input
              type="number"
              value={warekiMonth}
              onChange={(e) => setWarekiMonth(e.target.value)}
              placeholder="例: 3"
              min={1}
              max={12}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">日</label>
            <input
              type="number"
              value={warekiDay}
              onChange={(e) => setWarekiDay(e.target.value)}
              placeholder="例: 15"
              min={1}
              max={31}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>
        {warekiError && <p className="text-red-500 text-sm mb-3">{warekiError}</p>}
        <button
          onClick={convertWarekiToSeireki}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          西暦に変換
        </button>
        {warekiResult && (
          <div className="mt-4 bg-background rounded-lg p-4 text-lg font-bold text-primary">
            {warekiResult}
          </div>
        )}
      </div>

      {/* Seireki → Wareki */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-base font-semibold mb-4">西暦 → 和暦</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">年</label>
            <input
              type="number"
              value={seiYear}
              onChange={(e) => setSeiYear(e.target.value)}
              placeholder="例: 2024"
              className="w-28 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">月</label>
            <input
              type="number"
              value={seiMonth}
              onChange={(e) => setSeiMonth(e.target.value)}
              placeholder="例: 3"
              min={1}
              max={12}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">日</label>
            <input
              type="number"
              value={seiDay}
              onChange={(e) => setSeiDay(e.target.value)}
              placeholder="例: 15"
              min={1}
              max={31}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>
        {seiError && <p className="text-red-500 text-sm mb-3">{seiError}</p>}
        <button
          onClick={convertSeirekiToWareki}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          和暦に変換
        </button>
        {seiResult && (
          <div className="mt-4 bg-background rounded-lg p-4 text-lg font-bold text-primary">
            {seiResult}
          </div>
        )}
      </div>

      {/* Era reference table */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-base font-semibold mb-4">元号対応表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-card-border">
                <th className="pb-2 font-medium">元号</th>
                <th className="pb-2 font-medium">開始</th>
                <th className="pb-2 font-medium">終了</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              <tr><td className="py-2 font-medium">令和</td><td className="py-2">2019年5月1日〜</td><td className="py-2">現在</td></tr>
              <tr><td className="py-2 font-medium">平成</td><td className="py-2">1989年1月8日〜</td><td className="py-2">2019年4月30日</td></tr>
              <tr><td className="py-2 font-medium">昭和</td><td className="py-2">1926年12月25日〜</td><td className="py-2">1989年1月7日</td></tr>
              <tr><td className="py-2 font-medium">大正</td><td className="py-2">1912年7月30日〜</td><td className="py-2">1926年12月24日</td></tr>
              <tr><td className="py-2 font-medium">明治</td><td className="py-2">1868年1月25日〜</td><td className="py-2">1912年7月29日</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">和暦西暦変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「和暦 → 西暦」では、元号を選択して年月日を入力し「西暦に変換」ボタンを押してください。</p>
          <p>2. 「西暦 → 和暦」では、西暦の年月日を入力して「和暦に変換」ボタンを押してください。</p>
          <p>3. 対応元号は明治・大正・昭和・平成・令和です。</p>
          <p>4. すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="wareki-converter" category="日常ツール" />
    </div>
  );
}
