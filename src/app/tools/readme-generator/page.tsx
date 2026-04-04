"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ReadmeGeneratorPage() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [installation, setInstallation] = useState("");
  const [usage, setUsage] = useState("");
  const [license, setLicense] = useState("MIT");
  const [githubUser, setGithubUser] = useState("");
  const [techStack, setTechStack] = useState("");
  const [contributing, setContributing] = useState(true);
  const [badgeStyle, setBadgeStyle] = useState<"flat" | "flat-square" | "for-the-badge">("flat");
  const [copied, setCopied] = useState(false);

  const generateReadme = (): string => {
    const lines: string[] = [];

    // Title & badges
    const name = projectName || "My Project";
    lines.push(`# ${name}`);
    lines.push("");

    if (githubUser && projectName) {
      const repo = projectName.toLowerCase().replace(/\s+/g, "-");
      lines.push(`![License](https://img.shields.io/badge/license-${license}-blue?style=${badgeStyle})`);
      lines.push(`![GitHub stars](https://img.shields.io/github/stars/${githubUser}/${repo}?style=${badgeStyle})`);
      lines.push("");
    }

    // Description
    if (description) {
      lines.push(description);
      lines.push("");
    }

    // Tech stack
    if (techStack) {
      lines.push("## 技術スタック");
      lines.push("");
      techStack.split("\n").filter(Boolean).forEach((t) => lines.push(`- ${t.trim()}`));
      lines.push("");
    }

    // Features
    if (features) {
      lines.push("## 主な機能");
      lines.push("");
      features.split("\n").filter(Boolean).forEach((f) => lines.push(`- ${f.trim()}`));
      lines.push("");
    }

    // Installation
    lines.push("## インストール");
    lines.push("");
    if (installation) {
      lines.push("```bash");
      lines.push(installation);
      lines.push("```");
    } else {
      lines.push("```bash");
      if (githubUser && projectName) {
        const repo = projectName.toLowerCase().replace(/\s+/g, "-");
        lines.push(`git clone https://github.com/${githubUser}/${repo}.git`);
        lines.push(`cd ${repo}`);
      } else {
        lines.push("git clone https://github.com/username/repository.git");
        lines.push("cd repository");
      }
      lines.push("npm install");
      lines.push("```");
    }
    lines.push("");

    // Usage
    lines.push("## 使い方");
    lines.push("");
    if (usage) {
      lines.push("```bash");
      lines.push(usage);
      lines.push("```");
    } else {
      lines.push("```bash");
      lines.push("npm start");
      lines.push("```");
    }
    lines.push("");

    // Contributing
    if (contributing) {
      lines.push("## コントリビューション");
      lines.push("");
      lines.push("プルリクエストを歓迎します。大きな変更の場合は、まずIssueを開いて変更内容について議論してください。");
      lines.push("");
    }

    // License
    lines.push("## ライセンス");
    lines.push("");
    if (githubUser && projectName) {
      const repo = projectName.toLowerCase().replace(/\s+/g, "-");
      lines.push(`[${license}](https://github.com/${githubUser}/${repo}/blob/main/LICENSE)`);
    } else {
      lines.push(`[${license}](LICENSE)`);
    }

    return lines.join("\n");
  };

  const output = generateReadme();

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>README生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">README生成ツール</h1>
      <p className="text-muted mb-8">
        プロジェクト情報を入力してREADME.mdテンプレートを自動生成します。GitHubリポジトリのREADME作成に役立ててください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">プロジェクト名 <span className="text-red-400">*</span></label>
            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="My Awesome Project" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">GitHubユーザー名</label>
            <input type="text" value={githubUser} onChange={(e) => setGithubUser(e.target.value)} placeholder="username" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">プロジェクトの説明</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="このプロジェクトについての簡単な説明を入力してください。" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">技術スタック（1行1項目）</label>
          <textarea value={techStack} onChange={(e) => setTechStack(e.target.value)} rows={3} placeholder="Next.js&#10;TypeScript&#10;Tailwind CSS" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">主な機能（1行1項目）</label>
          <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={3} placeholder="ユーザー認証機能&#10;リアルタイムチャット&#10;レスポンシブデザイン" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">インストール手順（bashコマンド）</label>
          <textarea value={installation} onChange={(e) => setInstallation(e.target.value)} rows={3} placeholder="npm install&#10;cp .env.example .env" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">使い方（bashコマンド）</label>
          <textarea value={usage} onChange={(e) => setUsage(e.target.value)} rows={3} placeholder="npm run dev&#10;# ブラウザで http://localhost:3000 を開く" className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">ライセンス</label>
            <select value={license} onChange={(e) => setLicense(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option value="MIT">MIT</option>
              <option value="Apache--2.0">Apache 2.0</option>
              <option value="GPL--3.0">GPL 3.0</option>
              <option value="BSD--3--Clause">BSD 3-Clause</option>
              <option value="ISC">ISC</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">バッジスタイル</label>
            <select value={badgeStyle} onChange={(e) => setBadgeStyle(e.target.value as "flat" | "flat-square" | "for-the-badge")} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option value="flat">flat</option>
              <option value="flat-square">flat-square</option>
              <option value="for-the-badge">for-the-badge</option>
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={contributing} onChange={(e) => setContributing(e.target.checked)} className="rounded" />
          コントリビューションセクションを含める
        </label>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-bold">生成された README.md</h2>
          <button onClick={copyOutput} className="text-sm text-primary hover:text-primary-hover font-medium">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre">
          {output}
        </pre>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. プロジェクト名・説明・機能などを各フィールドに入力します。</p>
          <p>2. GitHubユーザー名を入力するとバッジとリポジトリリンクが自動生成されます。</p>
          <p>3. 「コピー」ボタンで内容をコピーし、リポジトリのREADME.mdファイルに貼り付けてください。</p>
          <p>4. 未入力フィールドはデフォルトのテンプレート文が挿入されます。</p>
        </div>
      </section>


      <AffiliateSection slug="readme-generator" category="開発ツール" />
      <RelatedTools currentSlug="readme-generator" category="開発ツール" />
    </div>
  );
}
