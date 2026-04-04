"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Perms = [boolean, boolean, boolean]; // read, write, execute

function permsToNum(p: Perms): number {
  return (p[0] ? 4 : 0) + (p[1] ? 2 : 0) + (p[2] ? 1 : 0);
}

function numToPerms(n: number): Perms {
  return [(n & 4) !== 0, (n & 2) !== 0, (n & 1) !== 0];
}

function permsToSymbol(p: Perms): string {
  return (p[0] ? "r" : "-") + (p[1] ? "w" : "-") + (p[2] ? "x" : "-");
}

export default function Page() {
  const [owner, setOwner] = useState<Perms>([true, true, true]);
  const [group, setGroup] = useState<Perms>([true, false, true]);
  const [other, setOther] = useState<Perms>([true, false, true]);
  const [numericInput, setNumericInput] = useState("755");

  const numeric = `${permsToNum(owner)}${permsToNum(group)}${permsToNum(other)}`;
  const symbolic = permsToSymbol(owner) + permsToSymbol(group) + permsToSymbol(other);

  const handleNumericChange = (val: string) => {
    setNumericInput(val);
    if (/^[0-7]{3}$/.test(val)) {
      setOwner(numToPerms(parseInt(val[0])));
      setGroup(numToPerms(parseInt(val[1])));
      setOther(numToPerms(parseInt(val[2])));
    }
  };

  const handleCheckbox = (
    target: "owner" | "group" | "other",
    index: number,
    checked: boolean
  ) => {
    const update = (perms: Perms): Perms => {
      const next = [...perms] as Perms;
      next[index] = checked;
      return next;
    };
    if (target === "owner") {
      const next = update(owner);
      setOwner(next);
      setNumericInput(`${permsToNum(next)}${permsToNum(group)}${permsToNum(other)}`);
    } else if (target === "group") {
      const next = update(group);
      setGroup(next);
      setNumericInput(`${permsToNum(owner)}${permsToNum(next)}${permsToNum(other)}`);
    } else {
      const next = update(other);
      setOther(next);
      setNumericInput(`${permsToNum(owner)}${permsToNum(group)}${permsToNum(next)}`);
    }
  };

  const labels = ["読取 (r)", "書込 (w)", "実行 (x)"];
  const rows: { name: string; key: "owner" | "group" | "other"; perms: Perms }[] = [
    { name: "所有者 (Owner)", key: "owner", perms: owner },
    { name: "グループ (Group)", key: "group", perms: group },
    { name: "その他 (Other)", key: "other", perms: other },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>chmod計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">chmod計算</h1>
      <p className="text-muted mb-8">Linuxのファイルパーミッションを数値⇔記号表記で変換。chmodコマンド生成。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 pr-4"></th>
                {labels.map((l) => (
                  <th key={l} className="text-center py-2 px-4">{l}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-card-border/50">
                  <td className="py-3 pr-4 font-medium">{row.name}</td>
                  {[0, 1, 2].map((i) => (
                    <td key={i} className="text-center py-3 px-4">
                      <input
                        type="checkbox"
                        checked={row.perms[i]}
                        onChange={(e) => handleCheckbox(row.key, i, e.target.checked)}
                        className="w-5 h-5 rounded cursor-pointer accent-primary"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">数値入力 (逆変換)</label>
            <input
              type="text"
              value={numericInput}
              onChange={(e) => handleNumericChange(e.target.value)}
              maxLength={3}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-center text-2xl font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-col justify-end">
            <div className="text-xs text-muted mb-1">記号表記</div>
            <div className="text-2xl font-mono text-center bg-black/5 dark:bg-white/5 rounded-lg px-4 py-2.5">{symbolic}</div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">
          <div className="text-xs text-muted mb-1">コマンド</div>
          <code className="text-sm font-mono font-bold">chmod {numeric} filename</code>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>チェックボックスで各ユーザーの権限を設定すると、数値表記と記号表記が自動更新されます。</p>
          <p>数値入力欄に3桁の数字（例: 755）を入力すると、逆にチェックボックスが更新されます。</p>
          <p>生成されたchmodコマンドをそのままターミナルで使用できます。</p>
        </div>
      </section>

      <RelatedTools currentSlug="chmod-calculator" category="開発ツール" />
    </div>
  );
}
