"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const sampleText = "テクノロジーの進化は、私たちの日常生活を大きく変えています。スマートフォンの普及により、いつでもどこでもインターネットにアクセスできるようになりました。AIの発展は、医療、教育、ビジネスなど幅広い分野に革新をもたらしています。クラウドコンピューティングの普及で、データの保存や処理が効率的になりました。IoTデバイスは家電製品をスマート化し、エネルギー効率の向上に貢献しています。5G通信の展開により、大容量データの高速通信が可能になりました。量子コンピュータの研究は、従来のコンピュータでは解けない複雑な問題を解決する可能性を秘めています。ブロックチェーン技術は金融取引の透明性と安全性を高めています。自動運転技術の進歩は、交通事故の削減と移動の効率化を目指しています。宇宙開発の民間参入により、宇宙旅行が現実味を帯びてきました。";

export default function Page() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);

  const charCount = sampleText.length;

  const start = () => {
    setStarted(true);
    setFinished(false);
    setStartTime(Date.now());
  };

  const finish = () => {
    const elapsed = (Date.now() - startTime) / 1000 / 60;
    setWpm(Math.round(charCount / elapsed));
    setFinished(true);
  };

  const evaluation = wpm >= 1200 ? "速読レベル" : wpm >= 800 ? "速い" : wpm >= 500 ? "標準" : wpm >= 300 ? "ゆっくり" : "じっくり派";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>読書速度テスト</span></nav>
      <h1 className="text-2xl font-bold mb-2">読書速度テスト（日本語）</h1>
      <p className="text-muted mb-8">テキストを読む速度を測定。文字/分を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        {!started ? (
          <button onClick={start} className="w-full py-4 bg-primary text-white rounded-lg font-bold">テスト開始</button>
        ) : !finished ? (
          <>
            <div className="text-sm leading-relaxed p-4 bg-background rounded-lg">{sampleText}</div>
            <p className="text-xs text-muted">上のテキストを最後まで読んだら下のボタンを押してください</p>
            <button onClick={finish} className="w-full py-4 bg-green-500 text-white rounded-lg font-bold">読み終わった</button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center"><div className="text-xs text-muted mb-1">読書速度</div><div className="text-3xl font-bold text-primary">{wpm} 文字/分</div></div>
              <div className="bg-background rounded-lg p-6 text-center"><div className="text-xs text-muted mb-1">評価</div><div className="text-2xl font-bold">{evaluation}</div></div>
            </div>
            <div className="text-xs text-muted">日本人の平均読書速度は約400〜600文字/分です。</div>
            <button onClick={() => { setStarted(false); setFinished(false); }} className="w-full py-3 bg-card-bg border border-card-border rounded-lg text-sm font-bold">もう一度</button>
          </>
        )}
      </div>
      <ToolFAQSection
        toolName="読書速度テスト"
        howTo={[
          "「テスト開始」ボタンで計測開始",
          "サンプルテキストを通常の速度で読む",
          "読み終わったら「読み終わった」ボタンを押す",
          "1分あたりの読書速度（文字/分）と評価を表示",
        ]}
        faqs={[
          {
            question: "日本人の平均読書速度は？",
            answer: "400〜600文字/分（成人）が標準、600〜800文字/分は速い部類。新聞1面（約3,000文字）を5分で読める人が標準、3分で読める人は速読レベル。小説は遅めの読速、ビジネス書は速め、内容により読み方を変えるのがコツです。",
          },
          {
            question: "速読は習得可能？",
            answer: "可能。速読トレーニング（1日15分×3ヶ月）で1.5〜3倍の速度UP可能。音読から黙読、文字追い読みからブロック読みに切り替えるのがコツ。ただし内容理解とのトレードオフ、重要な本はじっくり精読、概要把握は速読と使い分けが実用的です。",
          },
          {
            question: "速読の具体的な方法は？",
            answer: "①指差し読み（視線誘導）②一度に3〜5文字ずつ読む（単語まとめ）③音読の内声を止める④目の動きを滑らかに⑤重要箇所に印付ける（スキミング）。Udemy・YouTube・書籍で速読講座多数、自己流より体系的に学ぶのが上達の近道です。",
          },
          {
            question: "読書量を増やすコツは？",
            answer: "①通勤時間活用（電車で15〜30分）②Kindle Unlimited（月980円で読み放題）③Audible（月1,500円で耳読書）④読書目標設定（月3冊・年36冊）⑤SNS・ゲーム時間を読書に置換。年50冊読める習慣で、人生の選択肢・収入の質が劇的に向上します。",
          },
        ]}
      />
      <AffiliateSection slug="speed-reading-test" category="日常ツール" />
      <RelatedTools currentSlug="speed-reading-test" category="日常ツール" />
    </div>
  );
}
