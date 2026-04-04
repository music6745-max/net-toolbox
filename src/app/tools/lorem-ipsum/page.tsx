"use client";

import { useState } from "react";
import Link from "next/link";

const LOREM_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, metus arcu tincidunt purus, ac dapibus augue erat vitae nisi. Quisque quis magna in lorem lacinia tincidunt. Praesent pretium, magna in eleifend egestas, pede pede pretium lorem, quis consectetuer tortor sapien facilisis magna.",
  "Donec posuere augue in quam. Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.",
  "Integer placerat tristique nisl. Praesent augue. Fusce commodo. Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus. Nullam aliquet, velit auctor porttitor tempus, felis nunc aliquet felis, nec faucibus libero enim vel erat.",
  "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
  "Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas lorem and turpis pellentesque, enim enim ornare tortor, at dictum leo orci sit amet.",
  "Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.",
];

export default function LoremIpsumPage() {
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const paragraphs: string[] = [];
    for (let i = 0; i < count; i++) {
      paragraphs.push(LOREM_PARAGRAPHS[i % LOREM_PARAGRAPHS.length]);
    }
    setOutput(paragraphs.join("\n\n"));
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Lorem Ipsum生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Lorem Ipsum生成ツール</h1>
      <p className="text-muted mb-8">
        段落数を指定してLorem Ipsumのダミーテキストを生成します。デザインや開発のプレースホルダーとしてご活用ください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            段落数: {count}
          </label>
          <input
            type="range"
            min={1}
            max={8}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>1</span>
            <span>8</span>
          </div>
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          テキストを生成
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted">{count}段落</span>
              <button
                onClick={copyToClipboard}
                className="text-primary hover:opacity-80 text-sm font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap">
              {output}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Lorem Ipsum生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. スライダーで生成する段落数（1〜8）を選択します。</p>
          <p>2. 「テキストを生成」ボタンをクリックするとLorem Ipsumテキストが生成されます。</p>
          <p>3. 「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>Lorem IpsumはWebデザインや印刷物のレイアウト確認用のダミーテキストとして広く使われています。</p>
        </div>
      </section>
    </div>
  );
}
