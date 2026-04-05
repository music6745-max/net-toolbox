"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function PixelRulerPage() {
  const [measuring, setMeasuring] = useState(false);
  const [start, setStart] = useState<{x: number; y: number} | null>(null);
  const [end, setEnd] = useState<{x: number; y: number} | null>(null);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setStart({ x, y });
    setEnd(null);
    setMeasuring(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!measuring || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setEnd({ x: Math.round(e.clientX - rect.left), y: Math.round(e.clientY - rect.top) });
  }, [measuring]);

  const handleMouseUp = useCallback(() => { setMeasuring(false); }, []);

  const dx = start && end ? Math.abs(end.x - start.x) : 0;
  const dy = start && end ? Math.abs(end.y - start.y) : 0;
  const diagonal = Math.round(Math.sqrt(dx * dx + dy * dy));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ピクセル定規</span></nav>
      <h1 className="text-2xl font-bold mb-2">ピクセル定規ツール</h1>
      <p className="text-muted mb-8">キャンバス上でドラッグして距離をピクセル単位で測定します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-4">
          <div><label className="block text-sm mb-1">幅</label><input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-24 border border-card-border rounded-lg px-2 py-1 bg-transparent text-sm" /></div>
          <div><label className="block text-sm mb-1">高さ</label><input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-24 border border-card-border rounded-lg px-2 py-1 bg-transparent text-sm" /></div>
        </div>
        <div
          ref={canvasRef}
          className="relative border-2 border-dashed border-blue-300 rounded-lg cursor-crosshair select-none overflow-hidden"
          style={{ width, height, backgroundImage: "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {start && end && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
              <circle cx={start.x} cy={start.y} r="4" fill="#ef4444" />
              <circle cx={end.x} cy={end.y} r="4" fill="#ef4444" />
            </svg>
          )}
          {!start && <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">ドラッグして計測</p>}
        </div>
        {start && end && (
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"><p className="text-xs text-muted">横幅</p><p className="text-xl font-bold">{dx}px</p></div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3"><p className="text-xs text-muted">高さ</p><p className="text-xl font-bold">{dy}px</p></div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3"><p className="text-xs text-muted">対角線</p><p className="text-xl font-bold">{diagonal}px</p></div>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>キャンバス上でマウスをドラッグすると、始点から終点までのピクセル距離が表示されます。</p></div></section>
      <AffiliateSection slug="pixel-ruler" category="デザイン" />
      <RelatedTools currentSlug="pixel-ruler" category="デザイン" />
    </div>
  );
}
