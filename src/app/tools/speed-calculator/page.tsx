"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Mode = "speed" | "distance" | "time";

export default function SpeedCalculatorPage() {
  const [mode, setMode] = useState<Mode>("speed");
  const [distance, setDistance] = useState("");
  const [timeH, setTimeH] = useState("");
  const [timeM, setTimeM] = useState("");
  const [timeS, setTimeS] = useState("");
  const [speed, setSpeed] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const reset = () => { setDistance(""); setTimeH(""); setTimeM(""); setTimeS(""); setSpeed(""); setResult(null); setError(""); };

  const getTimeSecs = () => (parseFloat(timeH) || 0) * 3600 + (parseFloat(timeM) || 0) * 60 + (parseFloat(timeS) || 0);

  const calculate = () => {
    setError("");
    if (mode === "speed") {
      const d = parseFloat(distance);
      const t = getTimeSecs();
      if (!distance || isNaN(d) || d <= 0) { setError("有効な距離を入力してください"); setResult(null); return; }
      if (t <= 0) { setError("有効な時間を入力してください"); setResult(null); return; }
      const v = d / (t / 3600);
      setResult(`速度: ${v.toFixed(2)} km/h`);
    } else if (mode === "distance") {
      const v = parseFloat(speed);
      const t = getTimeSecs();
      if (!speed || isNaN(v) || v <= 0) { setError("有効な速度を入力してください"); setResult(null); return; }
      if (t <= 0) { setError("有効な時間を入力してください"); setResult(null); return; }
      const d = v * (t / 3600);
      setResult(`距離: ${d.toFixed(3)} km`);
    } else {
      const d = parseFloat(distance);
      const v = parseFloat(speed);
      if (!distance || isNaN(d) || d <= 0) { setError("有効な距離を入力してください"); setResult(null); return; }
      if (!speed || isNaN(v) || v <= 0) { setError("有効な速度を入力してください"); setResult(null); return; }
      const totalSecs = (d / v) * 3600;
      const h = Math.floor(totalSecs / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = Math.round(totalSecs % 60);
      setResult(`時間: ${h}時間${String(m).padStart(2, "0")}分${String(s).padStart(2, "0")}秒`);
    }
  };

  const inputClass = "w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>速度計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">速度計算ツール</h1>
      <p className="text-muted mb-8">距離・時間・速度のうち2つを入力して、残りの1つを計算します。</p>

      <div className="flex gap-2 mb-6">
        {(["speed", "distance", "time"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); reset(); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${mode === m ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}
          >
            {m === "speed" ? "速度を求める" : m === "distance" ? "距離を求める" : "時間を求める"}
          </button>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4 mb-6">
          {mode !== "distance" && (
            <div>
              <label className="block text-sm font-medium mb-2">距離 (km)</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="例: 100" className={inputClass} />
            </div>
          )}
          {mode !== "time" && (
            <div>
              <label className="block text-sm font-medium mb-2">時間</label>
              <div className="flex gap-2">
                <input type="number" value={timeH} onChange={(e) => setTimeH(e.target.value)} placeholder="時間" min="0" className="flex-1 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="number" value={timeM} onChange={(e) => setTimeM(e.target.value)} placeholder="分" min="0" max="59" className="flex-1 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="number" value={timeS} onChange={(e) => setTimeS(e.target.value)} placeholder="秒" min="0" max="59" className="flex-1 border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <p className="text-xs text-muted mt-1">時間 / 分 / 秒</p>
            </div>
          )}
          {mode !== "speed" && (
            <div>
              <label className="block text-sm font-medium mb-2">速度 (km/h)</label>
              <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} placeholder="例: 60" className={inputClass} />
            </div>
          )}
          {mode === "distance" && (
            <div>
              <label className="block text-sm font-medium mb-2">距離 (km)</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="例: 100" className={inputClass} />
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            計算する
          </button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-background rounded-xl p-6 text-center">
            <p className="text-sm text-muted mb-2">計算結果</p>
            <p className="text-2xl font-bold text-primary">{result}</p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">速度計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>【速度を求める】距離（km）と時間を入力すると、km/hで速度が計算されます。</p>
          <p>【距離を求める】速度（km/h）と時間を入力すると、走行距離（km）が計算されます。</p>
          <p>【時間を求める】距離（km）と速度（km/h）を入力すると、所要時間が計算されます。</p>
          <p>ドライブの所要時間計算や、ランニング・サイクリングのペース管理などにご活用ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="speed-calculator" category="日常ツール" />
    </div>
  );
}
