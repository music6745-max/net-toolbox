"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function TermsGeneratorPage() {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!siteName.trim()) return;
    const today = new Date();
    const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    const url = siteUrl.trim() || `https://example.com`;
    const email = contactEmail.trim() || `info@example.com`;

    const terms = `利用規約

最終更新日：${dateStr}

第1条（適用）
本利用規約（以下「本規約」といいます。）は、${siteName}（以下「当サイト」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さまには、本規約に従って本サービスをご利用いただきます。

第2条（利用登録）
本サービスにおいては、登録希望者が本規約に同意の上、所定の方法によって利用登録を申請し、当サイトがこれを承認することによって、利用登録が完了するものとします。当サイトは、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。

1. 利用登録の申請に際して虚偽の事項を届け出た場合
2. 本規約に違反したことがある者からの申請である場合
3. その他、当サイトが利用登録を相当でないと判断した場合

第3条（禁止事項）
ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。

1. 法令または公序良俗に違反する行為
2. 犯罪行為に関連する行為
3. 当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
4. 当サイトのサービスの運営を妨害するおそれのある行為
5. 他のユーザーに関する個人情報等を収集または蓄積する行為
6. 不正アクセスをし、またはこれを試みる行為
7. 他のユーザーに成りすます行為
8. 当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
9. その他、当サイトが不適切と判断する行為

第4条（本サービスの提供の停止等）
当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。

1. 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
2. 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
3. コンピュータまたは通信回線等が事故により停止した場合
4. その他、当サイトが本サービスの提供が困難と判断した場合

当サイトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。

第5条（免責事項）
当サイトの本サービスに関する情報の正確性・完全性・有用性等については、いかなる保証も行うものではありません。当サイトは、本サービスに起因してユーザーに生じたあらゆる損害について、当サイトの故意又は重過失による場合を除き、一切の責任を負いません。

第6条（サービス内容の変更等）
当サイトは、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。

第7条（利用規約の変更）
当サイトは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。

1. 本規約の変更がユーザーの一般の利益に適合するとき。
2. 本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。

当サイトはユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。

第8条（プライバシーポリシー）
当サイトのプライバシーポリシーについては、別途定めるプライバシーポリシーに従うものとします。

第9条（準拠法・裁判管轄）
本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。

運営者：${siteName}
サイトURL：${url}
お問い合わせ：${email}
`;

    setResult(terms);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>利用規約生成ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">利用規約生成ツール</h1>
      <p className="text-muted mb-8">
        サイト名などを入力するだけで日本語の利用規約テンプレートを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">サイト名 <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="例：Net Toolbox"
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">サイトURL</label>
          <input
            type="text"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="例：https://example.com"
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">お問い合わせメールアドレス</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="例：info@example.com"
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          onClick={generate}
          disabled={!siteName.trim()}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          利用規約を生成
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">生成された利用規約</span>
            <button
              onClick={copyToClipboard}
              className="text-primary hover:text-primary-hover text-sm font-medium"
            >
              {copied ? "コピー済み" : "全文コピー"}
            </button>
          </div>
          <textarea
            readOnly
            value={result}
            rows={20}
            className="w-full bg-background rounded-lg px-3 py-2 text-sm font-mono leading-relaxed focus:outline-none resize-y"
          />
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">利用規約生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. サイト名（必須）、サイトURL、お問い合わせメールアドレスを入力します。</p>
          <p>2. 「利用規約を生成」ボタンをクリックすると日本語の利用規約テンプレートが生成されます。</p>
          <p>3. 生成された文章をコピーし、必要に応じて内容を編集してご利用ください。</p>
          <p>※ 生成されたテンプレートはあくまで参考です。実際の運用に合わせて専門家にご確認ください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="terms-generator" category="開発ツール" />
    </div>
  );
}
