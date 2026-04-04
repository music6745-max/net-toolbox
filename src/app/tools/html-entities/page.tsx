"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface Entity {
  char: string;
  name: string;
  numeric: string;
  desc: string;
}

const entities: Entity[] = [
  { char: "&", name: "&amp;", numeric: "&#38;", desc: "アンパサンド" },
  { char: "<", name: "&lt;", numeric: "&#60;", desc: "小なり" },
  { char: ">", name: "&gt;", numeric: "&#62;", desc: "大なり" },
  { char: '"', name: "&quot;", numeric: "&#34;", desc: "ダブルクォート" },
  { char: "'", name: "&apos;", numeric: "&#39;", desc: "シングルクォート" },
  { char: "\u00a0", name: "&nbsp;", numeric: "&#160;", desc: "ノーブレークスペース" },
  { char: "\u00a9", name: "&copy;", numeric: "&#169;", desc: "著作権" },
  { char: "\u00ae", name: "&reg;", numeric: "&#174;", desc: "登録商標" },
  { char: "\u2122", name: "&trade;", numeric: "&#8482;", desc: "商標" },
  { char: "\u2190", name: "&larr;", numeric: "&#8592;", desc: "左矢印" },
  { char: "\u2191", name: "&uarr;", numeric: "&#8593;", desc: "上矢印" },
  { char: "\u2192", name: "&rarr;", numeric: "&#8594;", desc: "右矢印" },
  { char: "\u2193", name: "&darr;", numeric: "&#8595;", desc: "下矢印" },
  { char: "\u2194", name: "&harr;", numeric: "&#8596;", desc: "左右矢印" },
  { char: "\u21d0", name: "&lArr;", numeric: "&#8656;", desc: "左二重矢印" },
  { char: "\u21d2", name: "&rArr;", numeric: "&#8658;", desc: "右二重矢印" },
  { char: "\u00b1", name: "&plusmn;", numeric: "&#177;", desc: "プラスマイナス" },
  { char: "\u00d7", name: "&times;", numeric: "&#215;", desc: "乗算記号" },
  { char: "\u00f7", name: "&divide;", numeric: "&#247;", desc: "除算記号" },
  { char: "\u2260", name: "&ne;", numeric: "&#8800;", desc: "等しくない" },
  { char: "\u2264", name: "&le;", numeric: "&#8804;", desc: "以下" },
  { char: "\u2265", name: "&ge;", numeric: "&#8805;", desc: "以上" },
  { char: "\u221e", name: "&infin;", numeric: "&#8734;", desc: "無限大" },
  { char: "\u2211", name: "&sum;", numeric: "&#8721;", desc: "総和" },
  { char: "\u221a", name: "&radic;", numeric: "&#8730;", desc: "平方根" },
  { char: "\u222b", name: "&int;", numeric: "&#8747;", desc: "積分" },
  { char: "\u2248", name: "&asymp;", numeric: "&#8776;", desc: "ほぼ等しい" },
  { char: "\u00a2", name: "&cent;", numeric: "&#162;", desc: "セント" },
  { char: "\u00a3", name: "&pound;", numeric: "&#163;", desc: "ポンド" },
  { char: "\u00a5", name: "&yen;", numeric: "&#165;", desc: "円" },
  { char: "\u20ac", name: "&euro;", numeric: "&#8364;", desc: "ユーロ" },
  { char: "\u00b0", name: "&deg;", numeric: "&#176;", desc: "度" },
  { char: "\u00b5", name: "&micro;", numeric: "&#181;", desc: "マイクロ" },
  { char: "\u00b6", name: "&para;", numeric: "&#182;", desc: "段落記号" },
  { char: "\u00b7", name: "&middot;", numeric: "&#183;", desc: "中点" },
  { char: "\u2026", name: "&hellip;", numeric: "&#8230;", desc: "省略記号" },
  { char: "\u03b1", name: "&alpha;", numeric: "&#945;", desc: "アルファ" },
  { char: "\u03b2", name: "&beta;", numeric: "&#946;", desc: "ベータ" },
  { char: "\u03b3", name: "&gamma;", numeric: "&#947;", desc: "ガンマ" },
  { char: "\u03b4", name: "&delta;", numeric: "&#948;", desc: "デルタ" },
  { char: "\u03b5", name: "&epsilon;", numeric: "&#949;", desc: "イプシロン" },
  { char: "\u03b8", name: "&theta;", numeric: "&#952;", desc: "シータ" },
  { char: "\u03bb", name: "&lambda;", numeric: "&#955;", desc: "ラムダ" },
  { char: "\u03c0", name: "&pi;", numeric: "&#960;", desc: "パイ" },
  { char: "\u03c3", name: "&sigma;", numeric: "&#963;", desc: "シグマ" },
  { char: "\u03c9", name: "&omega;", numeric: "&#969;", desc: "オメガ" },
  { char: "\u2020", name: "&dagger;", numeric: "&#8224;", desc: "ダガー" },
  { char: "\u2022", name: "&bull;", numeric: "&#8226;", desc: "ビュレット" },
  { char: "\u2014", name: "&mdash;", numeric: "&#8212;", desc: "全角ダッシュ" },
  { char: "\u2013", name: "&ndash;", numeric: "&#8211;", desc: "半角ダッシュ" },
  { char: "\u00ab", name: "&laquo;", numeric: "&#171;", desc: "左ギュメ" },
  { char: "\u00bb", name: "&raquo;", numeric: "&#187;", desc: "右ギュメ" },
  { char: "\u2018", name: "&lsquo;", numeric: "&#8216;", desc: "左シングル引用符" },
  { char: "\u2019", name: "&rsquo;", numeric: "&#8217;", desc: "右シングル引用符" },
  { char: "\u201c", name: "&ldquo;", numeric: "&#8220;", desc: "左ダブル引用符" },
  { char: "\u201d", name: "&rdquo;", numeric: "&#8221;", desc: "右ダブル引用符" },
  { char: "\u2713", name: "&#10003;", numeric: "&#10003;", desc: "チェックマーク" },
  { char: "\u2717", name: "&#10007;", numeric: "&#10007;", desc: "バツ印" },
  { char: "\u2605", name: "&#9733;", numeric: "&#9733;", desc: "黒星" },
  { char: "\u2606", name: "&#9734;", numeric: "&#9734;", desc: "白星" },
  { char: "\u2665", name: "&hearts;", numeric: "&#9829;", desc: "ハート" },
  { char: "\u2660", name: "&spades;", numeric: "&#9824;", desc: "スペード" },
  { char: "\u2666", name: "&diams;", numeric: "&#9830;", desc: "ダイヤ" },
  { char: "\u2663", name: "&clubs;", numeric: "&#9827;", desc: "クラブ" },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const filtered = entities.filter(
    (e) =>
      e.char.includes(search) ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.desc.includes(search) ||
      e.numeric.includes(search)
  );

  const copyEntity = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>HTMLエンティティ一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTMLエンティティ一覧</h1>
      <p className="text-muted mb-8">
        よく使うHTMLエンティティ（特殊文字）の一覧表。クリックでエンティティコードをコピーできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="検索（文字、エンティティ名、説明...）"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary mb-4"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border text-left">
                <th className="py-2 px-2">文字</th>
                <th className="py-2 px-2">エンティティ</th>
                <th className="py-2 px-2">数値</th>
                <th className="py-2 px-2">説明</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e, i) => (
                <tr key={i} className="border-b border-card-border/50 hover:bg-primary/5">
                  <td className="py-2 px-2 text-lg text-center">{e.char}</td>
                  <td className="py-2 px-2">
                    <button
                      onClick={() => copyEntity(e.name, i)}
                      className="font-mono text-primary hover:text-primary-hover cursor-pointer"
                      title="クリックでコピー"
                    >
                      {copiedIdx === i ? "コピー済み" : e.name}
                    </button>
                  </td>
                  <td className="py-2 px-2 font-mono text-muted">{e.numeric}</td>
                  <td className="py-2 px-2 text-muted">{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-4">該当するエンティティが見つかりません。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">HTMLエンティティ一覧の使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>検索ボックスで文字、エンティティ名、説明を検索できます。</p>
          <p>エンティティコードをクリックするとクリップボードにコピーされます。</p>
          <p>HTMLで特殊文字を表示する際に、対応するエンティティコードを使用してください。</p>
        </div>
      </section>

      <RelatedTools currentSlug="html-entities" category="開発ツール" />
    </div>
  );
}
