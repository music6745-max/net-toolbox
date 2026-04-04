"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Op = "AND" | "OR" | "XOR" | "NOT" | "ADD" | "SUB";

function isValidBinary(s: string): boolean {
  return /^[01]+$/.test(s.trim());
}

function binToDec(bin: string): number {
  return parseInt(bin, 2);
}

function decToBin(dec: number): string {
  if (dec < 0) {
    // Two's complement for negative numbers (32-bit)
    return (dec >>> 0).toString(2);
  }
  return dec.toString(2);
}

function decToHex(dec: number): string {
  if (dec < 0) {
    return (dec >>> 0).toString(16).toUpperCase();
  }
  return dec.toString(16).toUpperCase();
}

export default function Page() {
  const [input1, setInput1] = useState("1010");
  const [input2, setInput2] = useState("1100");
  const [op, setOp] = useState<Op>("AND");

  const valid1 = isValidBinary(input1);
  const valid2 = isValidBinary(input2);
  const needsTwo = op !== "NOT";

  let resultDec: number | null = null;
  let resultBin = "";
  let resultHex = "";

  if (valid1 && (!needsTwo || valid2)) {
    const a = binToDec(input1.trim());
    const b = needsTwo ? binToDec(input2.trim()) : 0;

    switch (op) {
      case "AND": resultDec = a & b; break;
      case "OR": resultDec = a | b; break;
      case "XOR": resultDec = a ^ b; break;
      case "NOT": resultDec = ~a; break;
      case "ADD": resultDec = a + b; break;
      case "SUB": resultDec = a - b; break;
    }

    if (resultDec !== null) {
      resultBin = decToBin(resultDec);
      resultHex = decToHex(resultDec);
    }
  }

  const ops: Op[] = ["AND", "OR", "XOR", "NOT", "ADD", "SUB"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>2進数計算機</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">2進数計算機</h1>
      <p className="text-muted mb-8">2進数同士の加算・減算・論理演算（AND/OR/XOR/NOT）を実行。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">入力1 (2進数)</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="例: 1010"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 ${!valid1 && input1 ? "border-red-400" : "border-card-border"}`}
          />
          {valid1 && <div className="text-xs text-muted mt-1">10進数: {binToDec(input1.trim())}</div>}
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          {ops.map((o) => (
            <button
              key={o}
              onClick={() => setOp(o)}
              className={`px-4 py-2 text-sm rounded-lg border font-mono transition-colors ${op === o ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
            >
              {o}
            </button>
          ))}
        </div>

        {needsTwo && (
          <div className="mb-6">
            <label className="text-sm font-medium mb-1 block">入力2 (2進数)</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="例: 1100"
              className={`w-full border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 ${!valid2 && input2 ? "border-red-400" : "border-card-border"}`}
            />
            {valid2 && <div className="text-xs text-muted mt-1">10進数: {binToDec(input2.trim())}</div>}
          </div>
        )}

        {resultDec !== null && (
          <div className="space-y-3 mt-6">
            <h3 className="text-sm font-bold">結果</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3">
                <div className="text-xs text-muted mb-1">2進数</div>
                <div className="text-lg font-mono font-bold break-all">{resultBin}</div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3">
                <div className="text-xs text-muted mb-1">10進数</div>
                <div className="text-lg font-mono font-bold">{resultDec}</div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3">
                <div className="text-xs text-muted mb-1">16進数</div>
                <div className="text-lg font-mono font-bold">0x{resultHex}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>2進数（0と1のみ）を入力し、演算を選択します。</p>
          <p>AND, OR, XOR, NOT の論理演算と、ADD（加算）, SUB（減算）に対応しています。</p>
          <p>結果は2進数、10進数、16進数の3形式で表示されます。</p>
        </div>
      </section>

      <RelatedTools currentSlug="binary-calculator" category="開発ツール" />
    </div>
  );
}
