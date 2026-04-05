"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const PERMS = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];

export default function ChmodCalculatorPage() {
  const [owner, setOwner] = useState([false, false, false]);
  const [group, setGroup] = useState([false, false, false]);
  const [other, setOther] = useState([false, false, false]);
  const [numInput, setNumInput] = useState("");

  const toNum = (perms: boolean[]) => (perms[0] ? 4 : 0) + (perms[1] ? 2 : 0) + (perms[2] ? 1 : 0);
  const fromNum = (n: number): boolean[] => [(n & 4) !== 0, (n & 2) !== 0, (n & 1) !== 0];

  const octal = String(toNum(owner)) + String(toNum(group)) + String(toNum(other));
  const symbolic = "" + PERMS[toNum(owner)] + PERMS[toNum(group)] + PERMS[toNum(other)];
  const command = "chmod " + octal;

  const applyNumeric = () => {
    const digits = numInput.padStart(3, "0").split("").map(Number);
    if (digits.length === 3 && digits.every(d => d >= 0 && d <= 7)) {
      setOwner(fromNum(digits[0]));
      setGroup(fromNum(digits[1]));
      setOther(fromNum(digits[2]));
    }
  };

  const labels = ["読み取り (r)", "書き込み (w)", "実行 (x)"];
  const togglePerm = (setter: Function, perms: boolean[], idx: number) => {
    const next = [...perms];
    next[idx] = !next[idx];
    setter(next);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>chmod計算機</span></nav>
      <h1 className="text-2xl font-bold mb-2">chmod計算機</h1>
      <p className="text-muted mb-8">ファイルパーミッションの数値表記と記号表記を相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">数値入力</label>
            <input type="text" maxLength={3} value={numInput} onChange={e => setNumInput(e.target.value)} placeholder="755" className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono" />
          </div>
          <button onClick={applyNumeric} className="bg-primary text-white rounded-lg px-4 py-2 font-medium hover:opacity-90 transition">適用</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[["所有者", owner, setOwner], ["グループ", group, setGroup], ["その他", other, setOther]].map(([label, perms, setter], gi) => (
            <div key={gi}>
              <h3 className="font-medium text-sm mb-2">{label as string}</h3>
              {labels.map((l, i) => (
                <label key={i} className="flex items-center gap-2 text-sm py-1 cursor-pointer">
                  <input type="checkbox" checked={(perms as boolean[])[i]} onChange={() => togglePerm(setter as Function, perms as boolean[], i)} className="rounded" />
                  {l}
                </label>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
            <p className="text-xs text-muted">数値</p>
            <p className="text-2xl font-bold font-mono">{octal}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
            <p className="text-xs text-muted">記号</p>
            <p className="text-lg font-bold font-mono">{symbolic}</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
            <p className="text-xs text-muted">コマンド</p>
            <p className="text-lg font-bold font-mono">{command}</p>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>チェックボックスでパーミッションを設定するか、数値（例: 755）を入力して適用できます。対応するchmodコマンドも表示されます。</p></div></section>
      <AffiliateSection slug="chmod-calculator" category="開発ツール" />
      <RelatedTools currentSlug="chmod-calculator" category="開発ツール" />
    </div>
  );
}
