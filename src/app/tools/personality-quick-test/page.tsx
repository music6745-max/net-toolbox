"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Axis = "EI" | "SN" | "TF" | "JP";
interface Q { q: string; axis: Axis; a: string; b: string; }

const QUESTIONS: Q[] = [
  { axis: "EI", q: "休日の過ごし方として好きなのは？", a: "大勢でワイワイ過ごす", b: "一人や少人数でゆっくり" },
  { axis: "EI", q: "初対面の集まりで、あなたは？", a: "自分から話しかける", b: "話しかけられるのを待つ" },
  { axis: "SN", q: "物事を理解するときに重視するのは？", a: "事実・経験・現実", b: "可能性・ひらめき・未来" },
  { axis: "SN", q: "本や話を聞くとき、関心があるのは？", a: "具体的な事例や手順", b: "抽象的なテーマや概念" },
  { axis: "TF", q: "大事な判断をするとき、重視するのは？", a: "論理・客観・公平", b: "感情・共感・調和" },
  { axis: "TF", q: "人から相談されたとき、まずしたいのは？", a: "解決策を考える", b: "気持ちに寄り添う" },
  { axis: "JP", q: "旅行のときは？", a: "きっちり計画を立てる", b: "その場の流れで決める" },
  { axis: "JP", q: "締切のある仕事は？", a: "早めに終わらせる", b: "直前で一気にやる" },
];

const TYPES: Record<string, { name: string; desc: string }> = {
  INTJ: { name: "建築家", desc: "戦略的で独立心が強く、長期的なビジョンを描くタイプ。" },
  INTP: { name: "論理学者", desc: "好奇心旺盛で理論を追求する思索家タイプ。" },
  ENTJ: { name: "指揮官", desc: "大胆でリーダーシップに富む決断力の人。" },
  ENTP: { name: "討論者", desc: "機知に富みアイデア豊富な革新者。" },
  INFJ: { name: "提唱者", desc: "理想と思いやりを併せ持つ静かな理想主義者。" },
  INFP: { name: "仲介者", desc: "価値観を大切にする優しい夢想家。" },
  ENFJ: { name: "主人公", desc: "人を導き元気づけるカリスマタイプ。" },
  ENFP: { name: "広報運動家", desc: "熱意と好奇心にあふれた自由な精神。" },
  ISTJ: { name: "管理者", desc: "責任感が強く実直で信頼される現実主義者。" },
  ISFJ: { name: "擁護者", desc: "温かく献身的で周囲を支える守護者。" },
  ESTJ: { name: "幹部", desc: "秩序と伝統を重んじる実務派リーダー。" },
  ESFJ: { name: "領事官", desc: "社交的で面倒見のよいお世話役タイプ。" },
  ISTP: { name: "巨匠", desc: "論理的で手を動かして解決する実践家。" },
  ISFP: { name: "冒険家", desc: "繊細で芸術的な感性を持つ自由人。" },
  ESTP: { name: "起業家", desc: "行動力とエネルギーに満ちた冒険家。" },
  ESFP: { name: "エンターテイナー", desc: "陽気で社交的、周囲を明るくする人気者。" },
};

export default function Page() {
  const [answers, setAnswers] = useState<("a" | "b" | null)[]>(Array(QUESTIONS.length).fill(null));

  const result = useMemo(() => {
    if (answers.some(a => a === null)) return null;
    const scores: Record<Axis, [number, number]> = { EI: [0, 0], SN: [0, 0], TF: [0, 0], JP: [0, 0] };
    QUESTIONS.forEach((q, i) => {
      if (answers[i] === "a") scores[q.axis][0]++; else scores[q.axis][1]++;
    });
    const code =
      (scores.EI[0] >= scores.EI[1] ? "E" : "I") +
      (scores.SN[0] >= scores.SN[1] ? "S" : "N") +
      (scores.TF[0] >= scores.TF[1] ? "T" : "F") +
      (scores.JP[0] >= scores.JP[1] ? "J" : "P");
    return { code, ...TYPES[code] };
  }, [answers]);

  const shareText = result ? `私の16タイプ性格診断は「${result.code} / ${result.name}」でした！ ${result.desc} #性格診断 #ネットツールボックス` : "";
  const shareUrl = "https://net-toolbox.jp/tools/personality-quick-test";
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>16タイプ性格診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">16タイプ性格診断（簡易版）</h1>
      <p className="text-muted mb-8">8問の質問に答えるだけで、あなたの性格タイプを診断します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-5">
          {QUESTIONS.map((q, i) => (
            <div key={i} className="border-b border-card-border pb-4 last:border-0">
              <div className="text-sm font-semibold mb-3">Q{i + 1}. {q.q}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(["a", "b"] as const).map(opt => (
                  <button key={opt} onClick={() => { const na = [...answers]; na[i] = opt; setAnswers(na); }} className={`px-4 py-3 rounded-lg border text-sm text-left ${answers[i] === opt ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}>
                    {opt === "a" ? q.a : q.b}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {result && (
          <div className="mt-6 rounded-lg p-6 text-center bg-primary/10 border border-primary">
            <div className="text-xs text-muted mb-1">あなたのタイプ</div>
            <div className="text-4xl font-bold text-primary">{result.code}</div>
            <div className="mt-2 text-lg font-semibold">{result.name}</div>
            <p className="text-sm text-muted mt-2">{result.desc}</p>
          </div>
        )}

        {result && (
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href={xHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-80">Xで結果をシェア</a>
            <button onClick={() => { navigator.clipboard?.writeText(shareText + " " + shareUrl); }} className="px-4 py-2 rounded-lg border border-card-border text-sm font-medium hover:bg-background">結果をコピー</button>
            <button onClick={() => setAnswers(Array(QUESTIONS.length).fill(null))} className="px-4 py-2 rounded-lg border border-card-border text-sm font-medium hover:bg-background">もう一度</button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>内向/外向（E/I）・感覚/直感（S/N）・思考/感情（T/F）・判断/知覚（J/P）の4軸×各2問で、16タイプ中1つを簡易判定します。エンタメ目的の簡易版であり、正式なMBTI診断ではありません。</p>
        </div>
      </section>

      <AffiliateSection slug="personality-quick-test" category="日常ツール" />
      <RelatedTools currentSlug="personality-quick-test" category="日常ツール" />
    </div>
  );
}
