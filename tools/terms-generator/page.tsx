"use client";

import { useState } from "react";
import Link from "next/link";

export default function TermsGeneratorPage() {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  const generate = () => {
    if (!siteName.trim()) return;
    const name = siteName.trim();
    const url = siteUrl.trim() || "https://example.com";
    const email = contactEmail.trim() || "contact@example.com";

    const terms = `# ${name} 利用規約

最終更新日：${dateStr}

## 第1条（適用）

本利用規約（以下「本規約」といいます）は、${name}（以下「当サービス」といいます）の利用条件を定めるものです。ユーザーの皆さまには、本規約に従って当サービスをご利用いただきます。

## 第2条（利用登録）

当サービスにおいては、登録希望者が本規約に同意の上、所定の方法によって利用登録を申請し、当サービスがこれを承認することによって、利用登録が完了するものとします。

## 第3条（禁止事項）

ユーザーは、当サービスの利用にあたり、以下の行為をしてはなりません。

1. 法令または公序良俗に違反する行為
2. 犯罪行為に関連する行為
3. 当サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
4. 当サービスの運営を妨害するおそれのある行為
5. 他のユーザーに関する個人情報等を収集または蓄積する行為
6. 不正アクセスをし、またはこれを試みる行為
7. 他のユーザーに成りすます行為
8. 当サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
9. その他、当サービスが不適切と判断する行為

## 第4条（サービスの提供の停止等）

当サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく当サービスの全部または一部の提供を停止または中断することができるものとします。

1. 当サービスにかかるコンピュータシステムの保守点検または更新を行う場合
2. 地震、落雷、火災、停電または天災などの不可抗力により、当サービスの提供が困難となった場合
3. コンピュータまたは通信回線等が事故により停止した場合
4. その他、当サービスが当サービスの提供が困難と判断した場合

## 第5条（免責事項）

当サービスは、当サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。

当サービスは、当サービスに起因してユーザーに生じたあらゆる損害について、当サービスの故意または重過失による場合を除き、一切の責任を負いません。

## 第6条（サービス内容の変更等）

当サービスは、ユーザーに通知することなく、当サービスの内容を変更しまたは当サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。

## 第7条（利用規約の変更）

当サービスは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、当サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。

## 第8条（個人情報の取扱い）

当サービスによる個人情報の取扱いについては、別途定めるプライバシーポリシーに従うものとし、ユーザーはこのプライバシーポリシーに同意するものとします。

## 第9条（準拠法・裁判管轄）

本規約の解釈にあたっては、日本法を準拠法とします。当サービスに関して紛争が生じた場合には、当サービスの所在地を管轄する裁判所を専属的合意管轄とします。

## お問い合わせ

本規約に関するお問い合わせは、下記の窓口までお願いいたします。

サービス名：${name}
URL：${url}
メールアドレス：${email}
`;
    setGenerated(terms);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">利用規約生成ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">利用規約生成ツール</h1>
        <p className="text-muted mb-8">サイト名を入力するだけで、シンプルな利用規約テンプレートを作成します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                サービス名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="例：NetToolbox"
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">サービスURL（任意）</label>
              <input
                type="text"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                placeholder="例：https://example.com"
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">連絡先メールアドレス（任意）</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="例：contact@example.com"
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              onClick={generate}
              disabled={!siteName.trim()}
              className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              利用規約を生成する
            </button>
          </div>
        </div>

        {/* Output */}
        {generated && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-primary">生成された利用規約</h2>
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors"
              >
                {copied ? "コピー済み！" : "コピーする"}
              </button>
            </div>
            <textarea
              readOnly
              value={generated}
              rows={20}
              className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary text-sm font-mono focus:outline-none resize-y"
            />
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>サービス名を入力します（必須）</li>
            <li>サービスURLと連絡先メールアドレスを任意で入力します</li>
            <li>「利用規約を生成する」ボタンをクリックします</li>
            <li>生成された利用規約をコピーして、サイトに貼り付けます</li>
          </ol>
          <p className="text-muted text-sm mt-4">
            ※ 生成されたテンプレートはあくまで参考です。実際の運用では法律の専門家にご相談ください。
          </p>
        </div>
      </div>
    </div>
  );
}
