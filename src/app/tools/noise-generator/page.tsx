"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function NoiseGeneratorPage() {
  const [playing, setPlaying] = useState(false);
  const [noiseType, setNoiseType] = useState<"white" | "pink" | "brown">("white");
  const [volume, setVolume] = useState(0.5);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const stop = useCallback(() => {
    if (sourceRef.current) {
      sourceRef.current.stop();
      sourceRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setPlaying(false);
  }, []);

  const play = useCallback(() => {
    if (playing) { stop(); return; }
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;
    const sampleRate = ctx.sampleRate;
    const bufferSize = sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);

    if (noiseType === "white") {
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    } else if (noiseType === "pink") {
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }
    } else {
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    gainRef.current = gain;
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    sourceRef.current = source;
    setPlaying(true);
  }, [playing, noiseType, volume, stop]);

  const changeVolume = (v: number) => {
    setVolume(v);
    if (gainRef.current) {
      gainRef.current.gain.value = v;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u751F\u6210"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u751F\u6210"}</h1>
      <p className="text-muted mb-8">{"\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u30FB\u30D4\u30F3\u30AF\u30CE\u30A4\u30BA\u30FB\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u96C6\u4E2D\u3084\u7761\u7720\u306B\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{"\u30CE\u30A4\u30BA\u30BF\u30A4\u30D7"}</label>
          <div className="flex gap-3">
            {([["white", "\u30DB\u30EF\u30A4\u30C8"], ["pink", "\u30D4\u30F3\u30AF"], ["brown", "\u30D6\u30E9\u30A6\u30F3"]] as const).map(([key, label]) => (
              <button key={key} onClick={() => { setNoiseType(key); if (playing) { stop(); } }} className={"px-4 py-2 rounded-lg text-sm font-medium " + (noiseType === key ? "bg-primary text-white" : "bg-base border border-card-border")}>{label}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u97F3\u91CF: " + Math.round(volume * 100) + "%"}</label>
          <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => changeVolume(+e.target.value)} className="w-full" />
        </div>
        <button onClick={play} className={"w-full py-4 rounded-lg text-lg font-bold " + (playing ? "bg-red-500 text-white hover:bg-red-600" : "bg-primary text-white hover:opacity-90")}>
          {playing ? "\u25A0 \u505C\u6B62" : "\u25B6 \u518D\u751F"}
        </button>
        <div className="text-xs text-muted space-y-1">
          <p>{"\u30DB\u30EF\u30A4\u30C8: \u5168\u5468\u6CE2\u6570\u304C\u5747\u7B49\u306A\u30CE\u30A4\u30BA\u3002\u96C6\u4E2D\u529B\u30A2\u30C3\u30D7\u306B\u3002"}</p>
          <p>{"\u30D4\u30F3\u30AF: \u4F4E\u5468\u6CE2\u304C\u5F37\u8ABF\u3055\u308C\u305F\u81EA\u7136\u306A\u97F3\u3002\u30EA\u30E9\u30C3\u30AF\u30B9\u306B\u3002"}</p>
          <p>{"\u30D6\u30E9\u30A6\u30F3: \u3055\u3089\u306B\u4F4E\u5468\u6CE2\u304C\u5F37\u3044\u91CD\u539A\u306A\u97F3\u3002\u7761\u7720\u306B\u3002"}</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u30CE\u30A4\u30BA\u30BF\u30A4\u30D7\u3092\u9078\u3073\u3001\u97F3\u91CF\u3092\u8ABF\u6574\u3057\u3066\u518D\u751F\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u30CE\u30A4\u30BA\u304C\u518D\u751F\u3055\u308C\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="noise-generator" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="noise-generator" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
