"use client";

import { useState } from "react";
import Link from "next/link";

const CSS_COLORS: { name: string; hex: string; ja: string }[] = [
  { name: "red", hex: "#FF0000", ja: "赤" },
  { name: "green", hex: "#008000", ja: "緑" },
  { name: "blue", hex: "#0000FF", ja: "青" },
  { name: "yellow", hex: "#FFFF00", ja: "黄" },
  { name: "orange", hex: "#FFA500", ja: "オレンジ" },
  { name: "purple", hex: "#800080", ja: "紫" },
  { name: "pink", hex: "#FFC0CB", ja: "ピンク" },
  { name: "cyan", hex: "#00FFFF", ja: "シアン" },
  { name: "magenta", hex: "#FF00FF", ja: "マゼンタ" },
  { name: "white", hex: "#FFFFFF", ja: "白" },
  { name: "black", hex: "#000000", ja: "黒" },
  { name: "gray", hex: "#808080", ja: "グレー" },
  { name: "grey", hex: "#808080", ja: "グレー" },
  { name: "silver", hex: "#C0C0C0", ja: "シルバー" },
  { name: "gold", hex: "#FFD700", ja: "ゴールド" },
  { name: "brown", hex: "#A52A2A", ja: "茶色" },
  { name: "navy", hex: "#000080", ja: "ネイビー" },
  { name: "teal", hex: "#008080", ja: "ティール" },
  { name: "coral", hex: "#FF7F50", ja: "コーラル" },
  { name: "salmon", hex: "#FA8072", ja: "サーモン" },
  { name: "tomato", hex: "#FF6347", ja: "トマト" },
  { name: "crimson", hex: "#DC143C", ja: "クリムゾン" },
  { name: "firebrick", hex: "#B22222", ja: "ファイアブリック" },
  { name: "darkred", hex: "#8B0000", ja: "ダークレッド" },
  { name: "lime", hex: "#00FF00", ja: "ライム" },
  { name: "limegreen", hex: "#32CD32", ja: "ライムグリーン" },
  { name: "forestgreen", hex: "#228B22", ja: "フォレストグリーン" },
  { name: "darkgreen", hex: "#006400", ja: "ダークグリーン" },
  { name: "olive", hex: "#808000", ja: "オリーブ" },
  { name: "darkblue", hex: "#00008B", ja: "ダークブルー" },
  { name: "royalblue", hex: "#4169E1", ja: "ロイヤルブルー" },
  { name: "steelblue", hex: "#4682B4", ja: "スチールブルー" },
  { name: "dodgerblue", hex: "#1E90FF", ja: "ドジャーブルー" },
  { name: "deepskyblue", hex: "#00BFFF", ja: "ディープスカイブルー" },
  { name: "skyblue", hex: "#87CEEB", ja: "スカイブルー" },
  { name: "lightblue", hex: "#ADD8E6", ja: "ライトブルー" },
  { name: "aqua", hex: "#00FFFF", ja: "アクア" },
  { name: "turquoise", hex: "#40E0D0", ja: "ターコイズ" },
  { name: "indigo", hex: "#4B0082", ja: "インディゴ" },
  { name: "violet", hex: "#EE82EE", ja: "バイオレット" },
  { name: "orchid", hex: "#DA70D6", ja: "オーキッド" },
  { name: "hotpink", hex: "#FF69B4", ja: "ホットピンク" },
  { name: "deeppink", hex: "#FF1493", ja: "ディープピンク" },
  { name: "lightpink", hex: "#FFB6C1", ja: "ライトピンク" },
  { name: "peach", hex: "#FFCBA4", ja: "ピーチ" },
  { name: "beige", hex: "#F5F5DC", ja: "ベージュ" },
  { name: "ivory", hex: "#FFFFF0", ja: "アイボリー" },
  { name: "lavender", hex: "#E6E6FA", ja: "ラベンダー" },
  { name: "plum", hex: "#DDA0DD", ja: "プラム" },
  { name: "tan", hex: "#D2B48C", ja: "タン" },
  { name: "sienna", hex: "#A0522D", ja: "シエナ" },
  { name: "chocolate", hex: "#D2691E", ja: "チョコレート" },
  { name: "peru", hex: "#CD853F", ja: "ペルー" },
  { name: "sandybrown", hex: "#F4A460", ja: "サンディブラウン" },
  { name: "wheat", hex: "#F5DEB3", ja: "ウィート" },
  { name: "khaki", hex: "#F0E68C", ja: "カーキ" },
  { name: "lemonchiffon", hex: "#FFFACD", ja: "レモンシフォン" },
  { name: "lightyellow", hex: "#FFFFE0", ja: "ライトイエロー" },
  { name: "palegoldenrod", hex: "#EEE8AA", ja: "ペールゴールデンロッド" },
  { name: "moccasin", hex: "#FFE4B5", ja: "モカシン" },
  { name: "bisque", hex: "#FFE4C4", ja: "ビスク" },
  { name: "mistyrose", hex: "#FFE4E1", ja: "ミスティローズ" },
  { name: "aliceblue", hex: "#F0F8FF", ja: "アリスブルー" },
  { name: "azure", hex: "#F0FFFF", ja: "アジュール" },
  { name: "mintcream", hex: "#F5FFFA", ja: "ミントクリーム" },
  { name: "honeydew", hex: "#F0FFF0", ja: "ハニーデュー" },
  { name: "snow", hex: "#FFFAFA", ja: "スノー" },
  { name: "ghostwhite", hex: "#F8F8FF", ja: "ゴーストホワイト" },
  { name: "seashell", hex: "#FFF5EE", ja: "シーシェル" },
  { name: "floralwhite", hex: "#FFFAF0", ja: "フローラルホワイト" },
  { name: "oldlace", hex: "#FDF5E6", ja: "オールドレース" },
  { name: "linen", hex: "#FAF0E6", ja: "リネン" },
  { name: "antiquewhite", hex: "#FAEBD7", ja: "アンティークホワイト" },
  { name: "papayawhip", hex: "#FFEFD5", ja: "パパイヤウィップ" },
  { name: "blanchedalmond", hex: "#FFEBCD", ja: "ブランチドアーモンド" },
  { name: "darkgray", hex: "#A9A9A9", ja: "ダークグレー" },
  { name: "darkslategray", hex: "#2F4F4F", ja: "ダークスレートグレー" },
  { name: "dimgray", hex: "#696969", ja: "ディムグレー" },
  { name: "lightgray", hex: "#D3D3D3", ja: "ライトグレー" },
  { name: "gainsboro", hex: "#DCDCDC", ja: "ゲインズボロ" },
  { name: "whitesmoke", hex: "#F5F5F5", ja: "ホワイトスモーク" },
  { name: "slategray", hex: "#708090", ja: "スレートグレー" },
  { name: "darkslateblue", hex: "#483D8B", ja: "ダークスレートブルー" },
  { name: "mediumpurple", hex: "#9370DB", ja: "ミディアムパープル" },
  { name: "mediumorchid", hex: "#BA55D3", ja: "ミディアムオーキッド" },
  { name: "darkorchid", hex: "#9932CC", ja: "ダークオーキッド" },
  { name: "darkviolet", hex: "#9400D3", ja: "ダークバイオレット" },
  { name: "blueviolet", hex: "#8A2BE2", ja: "ブルーバイオレット" },
  { name: "maroon", hex: "#800000", ja: "マルーン" },
  { name: "darkmagenta", hex: "#8B008B", ja: "ダークマゼンタ" },
  { name: "darkcyan", hex: "#008B8B", ja: "ダークシアン" },
  { name: "cadetblue", hex: "#5F9EA0", ja: "カデットブルー" },
  { name: "mediumturquoise", hex: "#48D1CC", ja: "ミディアムターコイズ" },
  { name: "darkturquoise", hex: "#00CED1", ja: "ダークターコイズ" },
  { name: "paleturquoise", hex: "#AFEEEE", ja: "ペールターコイズ" },
  { name: "aquamarine", hex: "#7FFFD4", ja: "アクアマリン" },
  { name: "springgreen", hex: "#00FF7F", ja: "スプリンググリーン" },
  { name: "mediumseagreen", hex: "#3CB371", ja: "ミディアムシーグリーン" },
  { name: "seagreen", hex: "#2E8B57", ja: "シーグリーン" },
  { name: "darkseagreen", hex: "#8FBC8F", ja: "ダークシーグリーン" },
  { name: "palegreen", hex: "#98FB98", ja: "ペールグリーン" },
  { name: "mediumspringgreen", hex: "#00FA9A", ja: "ミディアムスプリンググリーン" },
  { name: "chartreuse", hex: "#7FFF00", ja: "シャルトリューズ" },
  { name: "yellowgreen", hex: "#9ACD32", ja: "イエローグリーン" },
  { name: "darkolivegreen", hex: "#556B2F", ja: "ダークオリーブグリーン" },
  { name: "olivedrab", hex: "#6B8E23", ja: "オリーブドラブ" },
  { name: "darkorange", hex: "#FF8C00", ja: "ダークオレンジ" },
  { name: "orangered", hex: "#FF4500", ja: "オレンジレッド" },
  { name: "lightsalmon", hex: "#FFA07A", ja: "ライトサーモン" },
  { name: "darksalmon", hex: "#E9967A", ja: "ダークサーモン" },
  { name: "lightcoral", hex: "#F08080", ja: "ライトコーラル" },
  { name: "rosybrown", hex: "#BC8F8F", ja: "ローズィブラウン" },
  { name: "indianred", hex: "#CD5C5C", ja: "インディアンレッド" },
  { name: "goldenrod", hex: "#DAA520", ja: "ゴールデンロッド" },
  { name: "darkgoldenrod", hex: "#B8860B", ja: "ダークゴールデンロッド" },
  { name: "saddlebrown", hex: "#8B4513", ja: "サドルブラウン" },
  { name: "midnightblue", hex: "#191970", ja: "ミッドナイトブルー" },
  { name: "cornflowerblue", hex: "#6495ED", ja: "コーンフラワーブルー" },
  { name: "mediumblue", hex: "#0000CD", ja: "ミディアムブルー" },
  { name: "slateblue", hex: "#6A5ACD", ja: "スレートブルー" },
  { name: "mediumslateblue", hex: "#7B68EE", ja: "ミディアムスレートブルー" },
  { name: "powderblue", hex: "#B0E0E6", ja: "パウダーブルー" },
  { name: "lightsteelblue", hex: "#B0C4DE", ja: "ライトスチールブルー" },
  { name: "cornsilk", hex: "#FFF8DC", ja: "コーンシルク" },
  { name: "navajowhite", hex: "#FFDEAD", ja: "ナバホホワイト" },
  { name: "burlywood", hex: "#DEB887", ja: "バーリーウッド" },
  { name: "thistle", hex: "#D8BFD8", ja: "シスル" },
  { name: "darkkhaki", hex: "#BDB76B", ja: "ダークカーキ" },
  { name: "palevioletred", hex: "#DB7093", ja: "ペールバイオレットレッド" },
  { name: "mediumvioletred", hex: "#C71585", ja: "ミディアムバイオレットレッド" },
];

function getTextColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export default function ColorNamesPage() {
  const [search, setSearch] = useState("");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const filtered = CSS_COLORS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.ja.includes(search) ||
      c.hex.toLowerCase().includes(search.toLowerCase())
  );

  const copyHex = async (hex: string, name: string) => {
    await navigator.clipboard.writeText(hex);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>HTMLカラー名一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTMLカラー名一覧ツール</h1>
      <p className="text-muted mb-8">
        HTML・CSSで使えるカラー名と対応するHEXコードの一覧です。カードをクリックするとHEXコードをコピーできます。
      </p>

      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="カラー名・日本語名・HEXコードで検索..."
          className="w-full border border-card-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
        />
        <p className="text-xs text-muted mt-2">{filtered.length}件表示中（全{CSS_COLORS.length}件）</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((color) => (
          <button
            key={color.name}
            onClick={() => copyHex(color.hex, color.name)}
            className="rounded-xl overflow-hidden border border-card-border hover:scale-105 transition-transform text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
            title={`${color.name} - クリックでHEXコードをコピー`}
          >
            <div
              className="h-16 w-full flex items-center justify-center"
              style={{ backgroundColor: color.hex }}
            >
              {copiedColor === color.name && (
                <span
                  className="text-xs font-bold px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm"
                  style={{ color: "#FFFFFF" }}
                >
                  コピー済み ✓
                </span>
              )}
            </div>
            <div className="bg-card-bg px-2 py-2">
              <div className="text-xs font-semibold truncate">{color.name}</div>
              <div className="text-xs text-muted">{color.ja}</div>
              <div className="text-xs font-mono text-muted">{color.hex}</div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted">
          <p className="text-lg">「{search}」に一致するカラーが見つかりませんでした</p>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">HTMLカラー名一覧ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>
            カラー名・日本語名・HEXコード（例：<code className="bg-card-bg px-1 rounded">#FF0000</code>）で検索できます。
          </p>
          <p>カードをクリックするとHEXコードがクリップボードにコピーされます。</p>
          <p>
            CSS・HTMLでは <code className="bg-card-bg px-1 rounded">color: red;</code> のようにカラー名をそのまま使用できます。また、コピーしたHEXコードを <code className="bg-card-bg px-1 rounded">color: #FF0000;</code> として使うこともできます。
          </p>
        </div>
      </section>
    </div>
  );
}
