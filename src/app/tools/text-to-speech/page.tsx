"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function TextToSpeechPage() {
  const [text, setText] = useState("こんにちは。テキスト読み上げツールへようこそ。");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) { setSupported(false); return; }
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      const jaVoice = v.find((vx) => vx.lang.startsWith("ja"));
      if (jaVoice) setSelectedVoice(jaVoice.name);
      else if (v.length > 0) setSelectedVoice(v[0].name);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  const speak = () => {
    if (!supported || !text.trim()) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utt.voice = voice;
    utt.rate = rate;
    utt.pitch = pitch;
    utt.volume = volume;
    utt.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
    utt.onend = () => { setIsSpeaking(false); setIsPaused(false); };
    utt.onerror = () => { setIsSpeaking(false); setIsPaused(false); };
    uttRef.current = utt;
    window.speechSynthesis.speak(utt);
  };

  const pause = () => { window.speechSynthesis.pause(); setIsPaused(true); };
  const resume = () => { window.speechSynthesis.resume(); setIsPaused(false); };
  const stop = () => { window.speechSynthesis.cancel(); setIsSpeaking(false); setIsPaused(false); };

  const jaVoices = voices.filter((v) => v.lang.startsWith("ja"));
  const otherVoices = voices.filter((v) => !v.lang.startsWith("ja"));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト読み上げ</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">テキスト読み上げツール</h1>
      <p className="text-muted mb-8">ブラウザのWeb Speech APIを使ってテキストを音声で読み上げます。</p>
      {!supported ? (
        <div className="bg-card-bg border border-card-border rounded-xl p-6 text-center text-muted">
          お使いのブラウザはWeb Speech APIに対応していません。Chrome、Edge、Safariをお試しください。
        </div>
      ) : (
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">読み上げるテキスト</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
              placeholder="読み上げるテキストを入力してください"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">声の種類</label>
            <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {jaVoices.length > 0 && (
                <optgroup label="日本語">
                  {jaVoices.map((v) => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
                </optgroup>
              )}
              {otherVoices.length > 0 && (
                <optgroup label="その他の言語">
                  {otherVoices.map((v) => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
                </optgroup>
              )}
              {voices.length === 0 && <option>読み込み中...</option>}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">速度: {rate.toFixed(1)}x</label>
              <input type="range" value={rate} onChange={(e) => setRate(+e.target.value)} min={0.5} max={2} step={0.1} className="w-full accent-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">ピッチ: {pitch.toFixed(1)}</label>
              <input type="range" value={pitch} onChange={(e) => setPitch(+e.target.value)} min={0} max={2} step={0.1} className="w-full accent-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">音量: {Math.round(volume * 100)}%</label>
              <input type="range" value={volume} onChange={(e) => setVolume(+e.target.value)} min={0} max={1} step={0.05} className="w-full accent-primary" />
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {!isSpeaking ? (
              <button onClick={speak} disabled={!text.trim()} className="bg-primary hover:bg-primary-hover disabled:opacity-50 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                ▶ 読み上げ開始
              </button>
            ) : isPaused ? (
              <button onClick={resume} className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                ▶ 再開
              </button>
            ) : (
              <button onClick={pause} className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                ⏸ 一時停止
              </button>
            )}
            <button onClick={stop} disabled={!isSpeaking && !isPaused} className="border border-card-border hover:bg-background disabled:opacity-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              ■ 停止
            </button>
          </div>
          {isSpeaking && !isPaused && (
            <div className="flex items-center gap-2 text-sm text-primary">
              <span className="animate-pulse">●</span> 読み上げ中...
            </div>
          )}
        </div>
      )}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力して「読み上げ開始」ボタンをクリックすると、ブラウザが音声で読み上げます。</p>
          <p>声の種類・速度・ピッチ・音量を調整できます。日本語対応の音声を選ぶと日本語テキストを自然に読み上げます。</p>
          <p>Web Speech APIを使用するため、インターネット接続が必要な場合があります（ブラウザ依存）。</p>
        </div>
      </section>
    </div>
  );
}
