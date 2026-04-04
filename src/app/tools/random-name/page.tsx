"use client";

import { useState } from "react";
import Link from "next/link";

const LAST_NAMES = [
  "佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村", "小林", "加藤",
  "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "斎藤", "清水",
  "山崎", "森", "池田", "橋本", "阿部", "石川", "前田", "藤田", "遠藤", "近藤",
  "後藤", "村上", "長谷川", "石井", "岡田", "松田", "中島", "和田", "福田", "原",
  "藤原", "西村", "三浦", "岡本", "小川", "菊地", "島田", "大野", "菅原", "上野",
];

const FIRST_NAMES_MALE = [
  "大輝", "蓮", "陸", "翔", "大和", "颯", "悠人", "樹", "竜也", "健太",
  "涼", "直人", "雄大", "賢一", "将太", "俊介", "雅也", "啓介", "修平", "拓也",
  "翼", "光", "悠", "葵", "秀樹", "和也", "昇", "浩二", "隆", "誠",
];

const FIRST_NAMES_FEMALE = [
  "さくら", "葵", "陽菜", "美咲", "凛", "杏", "ひな", "花", "愛", "望",
  "優花", "菜々子", "里奈", "麻衣", "彩香", "奈々", "舞", "千夏", "沙織", "友美",
  "真琴", "由美", "恵", "亜矢", "優子", "美穂", "純子", "春菜", "夕子", "実咲",
];

const FIRST_NAMES_BOTH = [...FIRST_NAMES_MALE, ...FIRST_NAMES_FEMALE];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface GeneratedName {
  last: string;
  first: string;
  gender: "male" | "female" | "both";
}

export default function RandomNamePage() {
  const [gender, setGender] = useState<"male" | "female" | "both">("both");
  const [count, setCount] = useState(5);
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const firstPool =
      gender === "male"
        ? FIRST_NAMES_MALE
        : gender === "female"
        ? FIRST_NAMES_FEMALE
        : FIRST_NAMES_BOTH;

    const result: GeneratedName[] = Array.from({ length: count }, () => ({
      last: pick(LAST_NAMES),
      first: pick(firstPool),
      gender,
    }));
    setNames(result);
    setCopied(false);
  };

  const copyAll = async () => {
    const text = names.map((n) => `${n.last} ${n.first}`).join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ランダム名前生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ランダム名前生成ツール</h1>
      <p className="text-muted mb-8">
        日本人の苗字と名前をランダムに組み合わせてダミー名を生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">性別</label>
            <div className="flex gap-2">
              {(["both", "male", "female"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                    gender === g
                      ? "bg-primary text-white border-primary"
                      : "border-card-border hover:border-primary text-muted"
                  }`}
                >
                  {g === "both" ? "両方" : g === "male" ? "男性" : "女性"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">生成件数: {count}件</label>
            <input
              type="range"
              min={1}
              max={20}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-40 accent-primary"
            />
          </div>
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          名前を生成
        </button>

        {names.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{names.length}件の名前</span>
              <button
                onClick={copyAll}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "すべてコピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg overflow-hidden divide-y divide-card-border">
              {names.map((n, i) => (
                <div key={i} className="px-4 py-3 flex items-center gap-3">
                  <span className="text-xs text-muted w-6">{i + 1}</span>
                  <span className="font-medium text-lg">
                    {n.last}　{n.first}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ランダム名前生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 性別（男性・女性・両方）を選択します。</p>
          <p>2. スライダーで生成する件数（1〜20件）を設定します。</p>
          <p>3. 「名前を生成」ボタンをクリックすると、ランダムな日本人名が生成されます。</p>
          <p>4. 「すべてコピー」で生成された名前一覧をクリップボードにコピーできます。</p>
          <p>テストデータの作成、フィクションのキャラクター名など、ダミーデータが必要なときに活用できます。</p>
        </div>
      </section>
    </div>
  );
}
