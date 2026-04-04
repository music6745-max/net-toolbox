"use client";
import { useState } from "react";
import Link from "next/link";

const ZODIAC = [
  { name: "子", reading: "ね", animal: "ネズミ", en: "Rat" },
  { name: "丑", reading: "うし", animal: "ウシ", en: "Ox" },
  { name: "寅", reading: "とら", animal: "トラ", en: "Tiger" },
  { name: "卯", reading: "う", animal: "ウサギ", en: "Rabbit" },
  { name: "辰", reading: "たつ", animal: "龍", en: "Dragon" },
  { name: "巳", reading: "み", animal: "ヘビ", en: "Snake" },
  { name: "午", reading: "うま", animal: "ウマ", en: "Horse" },
  { name: "未", reading: "ひつじ", animal: "ヒツジ", en: "Goat" },
  { name: "申", reading: "さる", animal: "サル", en: "Monkey" },
  { name: "酉", reading: "とり", animal: "トリ", en: "Rooster" },
  { name: "戌", reading: "いぬ", animal: "イヌ", en: "Dog" },
  { name: "亥", reading: "い", animal: "イノシシ", en: "Boar" },
];

// 子(ね) starts at year 4 CE (index 0 = 子 at year divisible correctly)
// Simpler: year 2020 is 子(Rat), so (year - 2020) mod 12
function getZodiac(year: number) {
  const idx = ((year - 2020) % 12 + 12) % 12;
  return { ...ZODIAC[idx], idx };
}

export default function ZodiacCalculatorPage() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(String(currentYear));

  const y = parseInt(year, 10);
  const isValid = !isNaN(y) && year.trim() !== "";
  const zodiac = isValid ? getZodiac(y) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>干支計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">干支計算ツール</h1>
      <p className="text-muted mb-8">生まれ年（西暦）を入力すると、干支（十二支）を表示します。年号でも確認できます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">西暦を入力</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder={String(currentYear)}
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        {isValid && zodiac && (
          <div className="mt-8">
            <div className="text-center py-6 bg-background rounded-xl">
              <p className="text-sm text-muted mb-1">{y}年の干支</p>
              <p className="text-7xl font-bold text-primary mt-2">{zodiac.name}</p>
              <p className="text-2xl font-semibold mt-2">（{zodiac.reading}）</p>
              <p className="text-lg text-muted mt-1">{zodiac.animal} / {zodiac.en}</p>
            </div>

            <div className="mt-6 grid grid-cols-6 sm:grid-cols-12 gap-2 text-center text-sm">
              {ZODIAC.map((z, i) => (
                <div
                  key={z.name}
                  className={`py-2 rounded-lg font-bold ${
                    i === zodiac.idx
                      ? "bg-primary text-white"
                      : "bg-background text-muted"
                  }`}
                >
                  {z.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">干支計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>西暦の年を入力すると、その年の干支（十二支）が表示されます。</p>
          <p>干支は「子・丑・寅・卯・辰・巳・午・未・申・酉・戌・亥」の12種類が12年ごとに繰り返します。</p>
          <p>自分や家族の生まれ年の干支、今年の干支を調べるのにご活用ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
