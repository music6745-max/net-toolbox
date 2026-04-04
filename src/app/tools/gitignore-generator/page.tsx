"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface GitignoreTemplate {
  id: string;
  label: string;
  category: string;
  content: string;
}

const TEMPLATES: GitignoreTemplate[] = [
  {
    id: "node",
    label: "Node.js",
    category: "言語・ランタイム",
    content: `# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.npm
.yarn-integrity
package-lock.json
yarn.lock
.pnp
.pnp.js`,
  },
  {
    id: "python",
    label: "Python",
    category: "言語・ランタイム",
    content: `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST
.env
.venv
env/
venv/
ENV/
pip-log.txt
pip-delete-this-directory.txt`,
  },
  {
    id: "java",
    label: "Java",
    category: "言語・ランタイム",
    content: `# Java
*.class
*.log
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
hs_err_pid*
target/
.mtj.tmp/`,
  },
  {
    id: "go",
    label: "Go",
    category: "言語・ランタイム",
    content: `# Go
*.exe
*.exe~
*.dll
*.so
*.dylib
*.test
*.out
go.sum
vendor/`,
  },
  {
    id: "rust",
    label: "Rust",
    category: "言語・ランタイム",
    content: `# Rust
/target/
Cargo.lock`,
  },
  {
    id: "ruby",
    label: "Ruby",
    category: "言語・ランタイム",
    content: `# Ruby
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/
.bundle/
vendor/bundle
.sass-cache/
log/
Gemfile.lock`,
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "フレームワーク",
    content: `# Next.js
.next/
out/
build/
.vercel
*.tsbuildinfo
next-env.d.ts`,
  },
  {
    id: "react",
    label: "React (CRA)",
    category: "フレームワーク",
    content: `# React
build/
.env.local
.env.development.local
.env.test.local
.env.production.local`,
  },
  {
    id: "laravel",
    label: "Laravel",
    category: "フレームワーク",
    content: `# Laravel
/vendor/
.env
.env.backup
.phpunit.result.cache
Homestead.json
Homestead.yaml
auth.json
npm-debug.log
yarn-error.log
/.idea
/.fleet
/.vscode`,
  },
  {
    id: "django",
    label: "Django",
    category: "フレームワーク",
    content: `# Django
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal
media/
staticfiles/`,
  },
  {
    id: "vscode",
    label: "VS Code",
    category: "IDE・エディタ",
    content: `# VS Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace
.history/`,
  },
  {
    id: "intellij",
    label: "IntelliJ IDEA",
    category: "IDE・エディタ",
    content: `# IntelliJ IDEA
.idea/
*.iws
*.iml
*.ipr
out/`,
  },
  {
    id: "macos",
    label: "macOS",
    category: "OS",
    content: `# macOS
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent`,
  },
  {
    id: "windows",
    label: "Windows",
    category: "OS",
    content: `# Windows
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
Desktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msix
*.msm
*.msp
*.lnk`,
  },
  {
    id: "linux",
    label: "Linux",
    category: "OS",
    content: `# Linux
*~
.fuse_hidden*
.directory
.Trash-*
.nfs*`,
  },
  {
    id: "env",
    label: "環境変数ファイル",
    category: "共通パターン",
    content: `# 環境変数
.env
.env.*
!.env.example`,
  },
  {
    id: "logs",
    label: "ログファイル",
    category: "共通パターン",
    content: `# ログ
logs/
*.log
npm-debug.log*`,
  },
  {
    id: "coverage",
    label: "カバレッジレポート",
    category: "共通パターン",
    content: `# テストカバレッジ
coverage/
.nyc_output/
*.lcov`,
  },
];

const CATEGORIES = ["言語・ランタイム", "フレームワーク", "IDE・エディタ", "OS", "共通パターン"];

export default function GitignoreGeneratorPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["node", "vscode", "macos", "env"]));
  const [custom, setCustom] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleTemplate = (id: string) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelected(newSet);
  };

  const generateOutput = (): string => {
    const parts: string[] = [];
    CATEGORIES.forEach((cat) => {
      const catTemplates = TEMPLATES.filter((t) => t.category === cat && selected.has(t.id));
      catTemplates.forEach((t) => parts.push(t.content));
    });
    if (custom.trim()) {
      parts.push(`# カスタム\n${custom.trim()}`);
    }
    return parts.join("\n\n");
  };

  const output = generateOutput();

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
        <span>.gitignore生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">.gitignore生成ツール</h1>
      <p className="text-muted mb-8">
        言語・フレームワーク・IDEを選択して.gitignoreファイルを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        {CATEGORIES.map((cat) => (
          <div key={cat}>
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {TEMPLATES.filter((t) => t.category === cat).map((t) => (
                <button
                  key={t.id}
                  onClick={() => toggleTemplate(t.id)}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${selected.has(t.id) ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2">カスタムパターン（任意）</label>
          <textarea
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            rows={4}
            placeholder="# 独自のignoreパターンを追加&#10;*.secret&#10;private/"
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-bold">生成された .gitignore</h2>
          <button onClick={copyOutput} disabled={!output} className="text-sm text-primary hover:text-primary-hover font-medium disabled:opacity-40">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre">
          {output || "テンプレートを選択してください"}
        </pre>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 使用している言語・フレームワーク・IDEのチェックボタンをクリックして選択します。</p>
          <p>2. 複数選択可能で、選択した項目のテンプレートが結合されます。</p>
          <p>3. カスタムパターンに独自のignoreルールを追記できます。</p>
          <p>4. 「コピー」ボタンで内容をコピーし、プロジェクトルートの.gitignoreファイルに貼り付けてください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="gitignore-generator" category="開発ツール" />
    </div>
  );
}
