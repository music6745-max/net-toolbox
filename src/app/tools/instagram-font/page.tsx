"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const fontMaps: { name: string; convert: (text: string) => string }[] = [
  {
    name: "Bold (太字)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const bold = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...bold][i] : c; }).join("");
    },
  },
  {
    name: "Italic (斜体)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const italic = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...italic][i] : c; }).join("");
    },
  },
  {
    name: "Bold Italic (太字斜体)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const bi = "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...bi][i] : c; }).join("");
    },
  },
  {
    name: "Script (筆記体)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const script = "𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...script][i] : c; }).join("");
    },
  },
  {
    name: "Monospace (等幅)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const mono = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...mono][i] : c; }).join("");
    },
  },
  {
    name: "Circled (丸囲み)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const circled = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
      return [...t].map((c) => { const i = base.indexOf(c); return i >= 0 ? [...circled][i] : c; }).join("");
    },
  },
  {
    name: "Squared (四角囲み)",
    convert: (t) => {
      const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const sq = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
      return [...t].map((c) => { const i = base.indexOf(c.toUpperCase()); return i >= 0 ? [...sq][i] : c; }).join("");
    },
  },
  {
    name: "Fullwidth (全角)",
    convert: (t) => {
      return [...t].map((c) => {
        const code = c.charCodeAt(0);
        if (code >= 33 && code <= 126) return String.fromCharCode(code + 0xFEE0);
        if (code === 32) return "\u3000";
        return c;
      }).join("");
    },
  },
  {
    name: "Small Caps (スモールキャップス)",
    convert: (t) => {
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const sc = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ";
      return [...t].map((c) => { const i = lower.indexOf(c); return i >= 0 ? [...sc][i] : c; }).join("");
    },
  },
  {
    name: "Upside Down (逆さ文字)",
    convert: (t) => {
      const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const flipped = "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀ꓭƆꓷƎꓞ⅁HIꓩꓘ⅃WNOꓒΌꓤSꓕꓵΛMX⅄Z";
      return [...[...t].reverse()].map((c) => { const i = normal.indexOf(c); return i >= 0 ? [...flipped][i] : c; }).join("");
    },
  },
];

export default function InstagramFontPage() {
  const [text, setText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (converted: string, index: number) => {
    navigator.clipboard.writeText(converted);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>インスタフォント変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">インスタフォント変換ツール</h1>
      <p className="text-muted mb-8">
        通常のテキストをおしゃれな特殊文字・フォントに変換します。インスタグラムのプロフィールや投稿、X(Twitter)の名前などにコピペで使えます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">
          変換したいテキストを入力
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Hello World"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={3}
        />
      </div>

      {text.trim() && (
        <div className="mt-6 space-y-3">
          {fontMaps.map((font, index) => {
            const converted = font.convert(text);
            return (
              <div
                key={font.name}
                className="bg-card-bg border border-card-border rounded-xl p-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted mb-1">{font.name}</p>
                  <p className="text-lg break-all">{converted}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(converted, index)}
                  className="shrink-0 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {copiedIndex === index ? "コピー済み" : "コピー"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">インスタフォント変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストボックスに変換したいテキストを入力します（英数字が対象）。</p>
          <p>2. 入力すると自動的に10種類のフォントスタイルに変換されます。</p>
          <p>3. 気に入ったスタイルの「コピー」ボタンをクリックして、SNSに貼り付けてください。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>

      <AffiliateSection slug="instagram-font" category="テキスト" />
      <RelatedTools currentSlug="instagram-font" category="テキスト" />
    </div>
  );
}
