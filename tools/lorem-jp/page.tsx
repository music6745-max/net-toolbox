"use client";

import { useState } from "react";
import Link from "next/link";

const SOURCES = [
  {
    author: "夏目漱石",
    title: "吾輩は猫である",
    paragraphs: [
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。",
      "吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。",
      "しかし当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。",
      "掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。",
    ],
  },
  {
    author: "太宰治",
    title: "人間失格",
    paragraphs: [
      "恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。",
      "自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。",
      "自分には、人の悲しみがわからない。いや、わかりたいとも思わなかった。",
      "道化。それは、自分の、人間に対する最後の求愛でした。自分は人間を極度に恐れていながら、それでいて、人間を、どうしても見切れなかったらしい。",
    ],
  },
  {
    author: "芥川龍之介",
    title: "羅生門",
    paragraphs: [
      "ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。",
      "広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。",
      "羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。",
      "下人は、七八段ある石段の一番上の段に、洗いざらされた紺の襖の尻を据えて、右の頬に出来た、大きな面皰を気にしながら、ぼんやり、雨のふるのを眺めていた。",
    ],
  },
  {
    author: "川端康成",
    title: "雪国",
    paragraphs: [
      "国境の長いトンネルを抜けると雪国であった。夜の底が白くなった。信号所に汽車が止まった。",
      "向側の座席から娘が立って来て、島村の前のガラス窓を落とした。雪の冷気が流れこんだ。娘は窓いっぱいに乗り出して、遠くへ叫ぶように、「駅長さあん、駅長さあん」と呼んだ。",
      "島村は退屈まぎれに左手の人差指を動かしてみたが、やがてその指が踊り子の形をなぞっているのに気がついた。",
      "記憶の薄れゆくのを惜しむかのように、島村は娘の面影を心に描こうとした。",
    ],
  },
  {
    author: "宮沢賢治",
    title: "銀河鉄道の夜",
    paragraphs: [
      "午後の授業はもうはじまっていました。ジョバンニが遅れて教室に入っていくと、みんなはもう席に着いていました。",
      "カムパネルラが手をあげました。それからあとは誰も手をあげる者がありません。先生はしばらく困ったようすでしたが、またジョバンニに問いかけました。",
      "ジョバンニはまっ赤になってうつむきました。苦しくて死にたいくらいだと思いました。",
      "その大きなまっ黒な野原の中を天気輪の柱の方へ、風がどうと吹いて来て草がいちめんになびき、ジョバンニの頭の中で虫がたくさん鳴いているような気がしました。",
    ],
  },
];

export default function LoremJpPage() {
  const [selectedSource, setSelectedSource] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"sequential" | "random">("sequential");

  const generate = () => {
    const source = SOURCES[selectedSource];
    let result: string;
    if (mode === "sequential") {
      const paras: string[] = [];
      for (let i = 0; i < paragraphCount; i++) {
        paras.push(source.paragraphs[i % source.paragraphs.length]);
      }
      result = paras.join("\n\n");
    } else {
      const paras: string[] = [];
      for (let i = 0; i < paragraphCount; i++) {
        const allParagraphs = SOURCES.flatMap((s) => s.paragraphs);
        paras.push(allParagraphs[Math.floor(Math.random() * allParagraphs.length)]);
      }
      result = paras.join("\n\n");
    }
    setOutput(result);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">日本語ダミーテキスト生成ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">日本語ダミーテキスト生成ツール</h1>
        <p className="text-muted mb-8">日本文学の名文からダミーテキストを生成します。</p>

        {/* Settings Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">モード</label>
              <div className="flex gap-3">
                {[
                  { value: "sequential", label: "1作品から生成" },
                  { value: "random", label: "ランダムミックス" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value={opt.value}
                      checked={mode === opt.value}
                      onChange={() => setMode(opt.value as "sequential" | "random")}
                      className="accent-primary"
                    />
                    <span className="text-primary text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {mode === "sequential" && (
              <div>
                <label className="block text-sm font-medium text-primary mb-2">作品を選択</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SOURCES.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSource(i)}
                      className={`px-3 py-2.5 rounded-xl border text-sm text-left transition-colors ${
                        selectedSource === i
                          ? "bg-primary text-white border-primary"
                          : "bg-background border-card-border text-muted hover:border-primary hover:text-primary"
                      }`}
                    >
                      <div className="font-medium">{s.author}</div>
                      <div className="text-xs opacity-80">『{s.title}』</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                段落数: <span className="font-bold">{paragraphCount}段落</span>
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={paragraphCount}
                onChange={(e) => setParagraphCount(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted mt-1"><span>1</span><span>10</span></div>
            </div>

            <button
              onClick={generate}
              className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
            >
              テキストを生成する
            </button>
          </div>
        </div>

        {/* Output */}
        {output && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-primary">生成されたテキスト</h2>
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors"
              >
                {copied ? "コピー済み！" : "コピーする"}
              </button>
            </div>
            <div className="space-y-4">
              {output.split("\n\n").map((para, i) => (
                <p key={i} className="text-primary text-sm leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>モードを選択します（1作品 or ランダムミックス）</li>
            <li>1作品モードの場合は作品を選択します</li>
            <li>生成する段落数をスライダーで設定します</li>
            <li>「テキストを生成する」ボタンをクリックします</li>
          </ol>
          <p className="text-muted text-sm mt-4">
            ※ デザインのモックアップやプロトタイプ制作時の仮テキストとしてご使用ください。
          </p>
        </div>
      </div>
    </div>
  );
}
