"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type DiffLine = { type: "same" | "add" | "remove"; text: string; lineA?: number; lineB?: number };

export default function DiffCheckerPage() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diff, setDiff] = useState<DiffLine[]>([]);
  const [stats, setStats] = useState({ added: 0, removed: 0, same: 0 });

  const compare = () => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const maxLen = Math.max(linesA.length, linesB.length);
    const result: DiffLine[] = [];
    let added = 0, removed = 0, same = 0;

    const lcsMatrix: number[][] = Array.from({ length: linesA.length + 1 }, () => Array(linesB.length + 1).fill(0));
    for (let i = 1; i <= linesA.length; i++) {
      for (let j = 1; j <= linesB.length; j++) {
        if (linesA[i - 1] === linesB[j - 1]) {
          lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1;
        } else {
          lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
        }
      }
    }

    let i = linesA.length, j = linesB.length;
    const tempResult: DiffLine[] = [];
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && linesA[i - 1] === linesB[j - 1]) {
        tempResult.push({ type: "same", text: linesA[i - 1], lineA: i, lineB: j });
        same++;
        i--; j--;
      } else if (j > 0 && (i === 0 || lcsMatrix[i][j - 1] >= lcsMatrix[i - 1][j])) {
        tempResult.push({ type: "add", text: linesB[j - 1], lineB: j });
        added++;
        j--;
      } else if (i > 0) {
        tempResult.push({ type: "remove", text: linesA[i - 1], lineA: i });
        removed++;
        i--;
      }
    }
    tempResult.reverse();
    setDiff(tempResult);
    setStats({ added, removed, same });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u30C6\u30AD\u30B9\u30C8\u5DEE\u5206\u6BD4\u8F03"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u30C6\u30AD\u30B9\u30C8\u5DEE\u5206\u6BD4\u8F03\uFF08\u9AD8\u6A5F\u80FD\uFF09"}</h1>
      <p className="text-muted mb-8">{"2\u3064\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u884C\u5358\u4F4D\u3067\u6BD4\u8F03\u3057\u3001\u5DEE\u5206\u3092\u8272\u4ED8\u304D\u3067\u8868\u793A\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{"\u5143\u306E\u30C6\u30AD\u30B9\u30C8"}</label>
            <textarea value={textA} onChange={(e) => setTextA(e.target.value)} rows={10} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{"\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8"}</label>
            <textarea value={textB} onChange={(e) => setTextB(e.target.value)} rows={10} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" />
          </div>
        </div>
        <button onClick={compare} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90">{"\u6BD4\u8F03\u3059\u308B"}</button>
        {diff.length > 0 && (
          <div className="mt-4">
            <div className="flex gap-4 text-sm mb-3">
              <span className="text-green-500">{"\u8FFD\u52A0: " + stats.added + "\u884C"}</span>
              <span className="text-red-500">{"\u524A\u9664: " + stats.removed + "\u884C"}</span>
              <span className="text-muted">{"\u540C\u4E00: " + stats.same + "\u884C"}</span>
            </div>
            <div className="border border-card-border rounded-lg overflow-hidden font-mono text-sm">
              {diff.map((line, idx) => (
                <div key={idx} className={"flex " + (line.type === "add" ? "bg-green-500/10" : line.type === "remove" ? "bg-red-500/10" : "")}>
                  <span className="w-10 text-right pr-2 text-muted text-xs py-1 select-none">{line.lineA || ""}</span>
                  <span className="w-10 text-right pr-2 text-muted text-xs py-1 select-none">{line.lineB || ""}</span>
                  <span className={"w-6 text-center py-1 " + (line.type === "add" ? "text-green-500" : line.type === "remove" ? "text-red-500" : "text-muted")}>{line.type === "add" ? "+" : line.type === "remove" ? "-" : " "}</span>
                  <span className="flex-1 py-1 whitespace-pre-wrap">{line.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u5DE6\u5074\u306B\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u3001\u53F3\u5074\u306B\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066\u300C\u6BD4\u8F03\u3059\u308B\u300D\u3092\u62BC\u3059\u3068\u3001\u884C\u5358\u4F4D\u3067\u5DEE\u5206\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u7DD1\u304C\u8FFD\u52A0\u3001\u8D64\u304C\u524A\u9664\u3067\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="diff-checker" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="diff-checker" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
