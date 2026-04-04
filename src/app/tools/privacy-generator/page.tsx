"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type FormData = {
  siteName: string;
  siteUrl: string;
  operatorName: string;
  contactEmail: string;
  hasAds: boolean;
  hasAnalytics: boolean;
  hasAffiliates: boolean;
  hasCookies: boolean;
  effectiveDate: string;
};

function generatePolicy(f: FormData): string {
  const today = f.effectiveDate || new Date().toISOString().split("T")[0];
  const [y, m, d] = today.split("-");
  const dateStr = `${y}年${parseInt(m)}月${parseInt(d)}日`;

  const adSection = f.hasAds ? `

## 広告について

本ウェブサイトでは、第三者配信の広告サービスを利用しています。広告配信会社は、ユーザーの興味に応じた広告を表示するために、Cookie等の技術を使用することがあります。これらの技術を通じた情報収集を希望されない場合は、各広告配信会社のオプトアウトページをご確認ください。` : "";

  const analyticsSection = f.hasAnalytics ? `

## アクセス解析について

本ウェブサイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。アクセス解析ツールはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができます。詳細については、ご利用のアクセス解析ツールの利用規約をご確認ください。` : "";

  const affiliateSection = f.hasAffiliates ? `

## アフィリエイトについて

本ウェブサイトは、Amazon.co.jpほか各種アフィリエイトプログラムに参加しています。記事内のリンクからサービスや商品を購入された場合に、当サイトが報酬を受け取ることがあります。掲載している情報の正確性には努めておりますが、最新情報は各公式サイトでご確認ください。` : "";

  const cookieSection = f.hasCookies ? `

## Cookieの使用について

本ウェブサイトでは、ユーザーエクスペリエンスの向上を目的として、Cookieを使用しています。Cookieはブラウザの設定から無効にすることができますが、一部のサービスが正常に動作しない場合があります。` : "";

  return `# プライバシーポリシー

${f.siteName || "当ウェブサイト"}（以下、「当サイト」といいます）は、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（個人情報保護方針）を定めます。

**施行日：${dateStr}**
${f.operatorName ? `**運営者：${f.operatorName}**` : ""}
${f.siteUrl ? `**サイトURL：${f.siteUrl}**` : ""}

---

## 個人情報の収集について

当サイトでは、お問い合わせフォーム等を通じてお名前・メールアドレス等の個人情報をご提供いただく場合があります。収集した個人情報は、お問い合わせへの回答や必要な情報提供のみに使用し、これらの目的以外での利用は行いません。

## 個人情報の第三者への提供

当サイトでは、法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供することはありません。${adSection}${analyticsSection}${affiliateSection}${cookieSection}

## 個人情報の管理

当サイトは、収集した個人情報を適切に管理し、不正アクセス・紛失・漏洩・改ざん等を防止するために適切なセキュリティ対策を実施します。

## 個人情報の開示・訂正・削除

ユーザーご本人から個人情報の開示・訂正・削除のご要望があった場合、合理的な期間内に対応いたします。ご要望の際は下記のお問い合わせ先までご連絡ください。

## 免責事項

当サイトに掲載されている情報の正確性・完全性については万全を期しておりますが、その内容を保証するものではありません。当サイトのご利用によって生じたいかなる損害についても、当サイトは責任を負いかねます。また、当サイトからリンクされた外部サイトについては、当サイトは一切責任を負いません。

## プライバシーポリシーの変更

当サイトは、法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを予告なく変更することがあります。変更後のプライバシーポリシーは、当サイト上に掲載された時点から効力を生じるものとします。

## お問い合わせ

本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。

${f.operatorName ? `**運営者：${f.operatorName}**` : ""}
${f.contactEmail ? `**メールアドレス：${f.contactEmail}**` : "**メールアドレス：（記載してください）**"}
`;
}

export default function PrivacyGeneratorPage() {
  const [form, setForm] = useState<FormData>({
    siteName: "",
    siteUrl: "",
    operatorName: "",
    contactEmail: "",
    hasAds: false,
    hasAnalytics: false,
    hasAffiliates: false,
    hasCookies: false,
    effectiveDate: new Date().toISOString().split("T")[0],
  });
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const policy = generatePolicy(form);

  const copy = async () => {
    await navigator.clipboard.writeText(policy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const update = (key: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>プライバシーポリシー生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">プライバシーポリシー生成ツール</h1>
      <p className="text-muted mb-8">
        情報を入力するだけで日本語プライバシーポリシーのテンプレートを自動生成します。
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mb-6 text-sm text-yellow-800">
        <strong>注意：</strong>このツールはテンプレートを提供するものです。法的効力については専門家にご相談ください。
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="font-bold text-sm mb-4">基本情報</h2>
          <div className="space-y-4">
            {[
              { key: "siteName" as const, label: "サイト名", placeholder: "例: Net Toolbox" },
              { key: "siteUrl" as const, label: "サイトURL", placeholder: "例: https://example.com" },
              { key: "operatorName" as const, label: "運営者名", placeholder: "例: 田中 太郎" },
              { key: "contactEmail" as const, label: "お問い合わせ先メール", placeholder: "例: contact@example.com" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="block text-xs text-muted mb-1">{label}</label>
                <input
                  type="text"
                  value={form[key] as string}
                  onChange={(e) => update(key, e.target.value)}
                  placeholder={placeholder}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-muted mb-1">施行日</label>
              <input
                type="date"
                value={form.effectiveDate}
                onChange={(e) => update("effectiveDate", e.target.value)}
                className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="font-bold text-sm mb-4">サイトの機能（該当するものを選択）</h2>
          <div className="space-y-4">
            {[
              { key: "hasAds" as const, label: "広告を掲載している", description: "Google AdSense等の広告サービス" },
              { key: "hasAnalytics" as const, label: "アクセス解析を使用している", description: "Googleアナリティクス等" },
              { key: "hasAffiliates" as const, label: "アフィリエイトを利用している", description: "Amazon・楽天等のアフィリエイト" },
              { key: "hasCookies" as const, label: "Cookieを使用している", description: "セッション管理・設定保存等" },
            ].map(({ key, label, description }) => (
              <label key={key} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form[key] as boolean}
                  onChange={(e) => update(key, e.target.checked)}
                  className="mt-0.5 rounded accent-primary"
                />
                <div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{label}</span>
                  <p className="text-xs text-muted mt-0.5">{description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm">生成されたプライバシーポリシー</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="border border-card-border px-3 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-primary transition-colors"
            >
              {showPreview ? "マークダウンで表示" : "プレビュー"}
            </button>
            <button
              onClick={copy}
              className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              {copied ? "コピー済み" : "Markdownをコピー"}
            </button>
          </div>
        </div>
        {showPreview ? (
          <div className="bg-background rounded-lg p-6 text-sm leading-relaxed prose max-w-none overflow-auto max-h-[500px]">
            {policy.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="text-base font-bold mt-4 mb-2">{line.slice(3)}</h2>;
              if (line.startsWith("# ")) return <h1 key={i} className="text-lg font-bold mb-3">{line.slice(2)}</h1>;
              if (line.startsWith("---")) return <hr key={i} className="my-3 border-card-border" />;
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} className="mb-1">{line.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}</p>;
            })}
          </div>
        ) : (
          <pre className="bg-background rounded-lg p-4 text-xs font-mono overflow-auto max-h-[500px] whitespace-pre-wrap">
            {policy}
          </pre>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>サイト名・URL・運営者名・連絡先メールを入力し、該当するサービスにチェックを入れてください。</p>
          <p>入力に応じてプライバシーポリシーが自動で生成されます。「Markdownをコピー」でコピーできます。</p>
          <p>生成されたテンプレートはMarkdown形式です。HTMLに変換してサイトに掲載してください。</p>
          <p>法的な問題については必ず専門の弁護士・行政書士にご相談ください。このツールは法的助言を提供するものではありません。</p>
        </div>
      </section>


      <AffiliateSection slug="privacy-generator" category="開発ツール" />
      <RelatedTools currentSlug="privacy-generator" category="開発ツール" />
    </div>
  );
}
