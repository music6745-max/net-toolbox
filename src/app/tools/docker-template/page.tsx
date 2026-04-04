"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type BaseImage = "node" | "node-alpine" | "python" | "nginx" | "ubuntu" | "alpine" | "go" | "ruby" | "php";

interface Config {
  baseImage: BaseImage;
  tag: string;
  workdir: string;
  port: string;
  user: string;
  includeHealthcheck: boolean;
  includeEnv: boolean;
}

const BASE_IMAGES: { value: BaseImage; label: string; defaultTag: string }[] = [
  { value: "node", label: "Node.js", defaultTag: "20" },
  { value: "node-alpine", label: "Node.js (Alpine)", defaultTag: "20-alpine" },
  { value: "python", label: "Python", defaultTag: "3.12" },
  { value: "nginx", label: "Nginx", defaultTag: "1.25-alpine" },
  { value: "ubuntu", label: "Ubuntu", defaultTag: "22.04" },
  { value: "alpine", label: "Alpine Linux", defaultTag: "3.19" },
  { value: "go", label: "Go", defaultTag: "1.22" },
  { value: "ruby", label: "Ruby", defaultTag: "3.3" },
  { value: "php", label: "PHP", defaultTag: "8.3-fpm" },
];

function generateDockerfile(cfg: Config): string {
  const image = cfg.baseImage === "node-alpine" ? "node" : cfg.baseImage;
  const lines: string[] = [];

  lines.push(`FROM ${image}:${cfg.tag}`);
  lines.push("");

  if (cfg.includeEnv) {
    lines.push("# 環境変数");
    lines.push("ENV NODE_ENV=production \\");
    lines.push("    APP_PORT=" + (cfg.port || "3000"));
    lines.push("");
  }

  lines.push(`WORKDIR ${cfg.workdir || "/app"}`);
  lines.push("");

  if (cfg.baseImage === "node" || cfg.baseImage === "node-alpine") {
    lines.push("# 依存関係をコピーしてインストール");
    lines.push("COPY package*.json ./");
    lines.push("RUN npm ci --omit=dev");
    lines.push("");
    lines.push("# ソースコードをコピー");
    lines.push("COPY . .");
    lines.push("");
    if (cfg.port) {
      lines.push(`EXPOSE ${cfg.port}`);
      lines.push("");
    }
    if (cfg.includeHealthcheck && cfg.port) {
      lines.push(`HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \\`);
      lines.push(`  CMD wget -qO- http://localhost:${cfg.port}/health || exit 1`);
      lines.push("");
    }
    lines.push('CMD ["node", "server.js"]');
  } else if (cfg.baseImage === "python") {
    lines.push("# 依存関係をインストール");
    lines.push("COPY requirements.txt .");
    lines.push("RUN pip install --no-cache-dir -r requirements.txt");
    lines.push("");
    lines.push("COPY . .");
    lines.push("");
    if (cfg.port) {
      lines.push(`EXPOSE ${cfg.port}`);
      lines.push("");
    }
    if (cfg.includeHealthcheck && cfg.port) {
      lines.push(`HEALTHCHECK --interval=30s --timeout=5s --retries=3 \\`);
      lines.push(`  CMD curl -f http://localhost:${cfg.port}/health || exit 1`);
      lines.push("");
    }
    lines.push('CMD ["python", "app.py"]');
  } else if (cfg.baseImage === "nginx") {
    lines.push("COPY nginx.conf /etc/nginx/nginx.conf");
    lines.push("COPY dist/ /usr/share/nginx/html/");
    lines.push("");
    lines.push("EXPOSE 80");
    lines.push("");
    if (cfg.includeHealthcheck) {
      lines.push("HEALTHCHECK --interval=30s --timeout=5s --retries=3 \\");
      lines.push("  CMD curl -f http://localhost/ || exit 1");
      lines.push("");
    }
    lines.push('CMD ["nginx", "-g", "daemon off;"]');
  } else if (cfg.baseImage === "go") {
    lines.push("COPY go.mod go.sum ./");
    lines.push("RUN go mod download");
    lines.push("");
    lines.push("COPY . .");
    lines.push("RUN CGO_ENABLED=0 GOOS=linux go build -o /app/main .");
    lines.push("");
    if (cfg.port) {
      lines.push(`EXPOSE ${cfg.port}`);
      lines.push("");
    }
    lines.push('CMD ["/app/main"]');
  } else {
    lines.push("# パッケージをインストール");
    lines.push("RUN apt-get update && apt-get install -y --no-install-recommends \\");
    lines.push("    curl \\");
    lines.push("  && rm -rf /var/lib/apt/lists/*");
    lines.push("");
    lines.push("COPY . .");
    lines.push("");
    if (cfg.port) {
      lines.push(`EXPOSE ${cfg.port}`);
      lines.push("");
    }
    lines.push('CMD ["/bin/sh"]');
  }

  if (cfg.user) {
    const userLine = `USER ${cfg.user}`;
    const cmdIndex = lines.findIndex((l) => l.startsWith("CMD"));
    if (cmdIndex > 0) {
      lines.splice(cmdIndex, 0, userLine, "");
    }
  }

  return lines.join("\n");
}

export default function DockerTemplatePage() {
  const [config, setConfig] = useState<Config>({
    baseImage: "node",
    tag: "20",
    workdir: "/app",
    port: "3000",
    user: "",
    includeHealthcheck: false,
    includeEnv: false,
  });
  const [copied, setCopied] = useState(false);

  const update = (patch: Partial<Config>) => setConfig((prev) => ({ ...prev, ...patch }));

  const handleBaseImageChange = (v: BaseImage) => {
    const meta = BASE_IMAGES.find((b) => b.value === v);
    update({ baseImage: v, tag: meta?.defaultTag ?? "" });
  };

  const dockerfile = generateDockerfile(config);

  const copy = async () => {
    await navigator.clipboard.writeText(dockerfile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass =
    "border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-full bg-background";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Dockerfileテンプレート生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Dockerfileテンプレート生成ツール</h1>
      <p className="text-muted mb-8">
        ベースイメージや設定を選択してDockerfileのテンプレートを生成します。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-muted">設定</h2>

          <div>
            <label className="block text-sm font-medium mb-1">ベースイメージ</label>
            <select
              value={config.baseImage}
              onChange={(e) => handleBaseImageChange(e.target.value as BaseImage)}
              className={inputClass}
            >
              {BASE_IMAGES.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">タグ（バージョン）</label>
            <input
              type="text"
              value={config.tag}
              onChange={(e) => update({ tag: e.target.value })}
              className={inputClass}
              placeholder="例: 20, 3.12, latest"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">作業ディレクトリ</label>
            <input
              type="text"
              value={config.workdir}
              onChange={(e) => update({ workdir: e.target.value })}
              className={inputClass}
              placeholder="/app"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">公開ポート</label>
            <input
              type="text"
              value={config.port}
              onChange={(e) => update({ port: e.target.value })}
              className={inputClass}
              placeholder="3000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">実行ユーザー（省略可）</label>
            <input
              type="text"
              value={config.user}
              onChange={(e) => update({ user: e.target.value })}
              className={inputClass}
              placeholder="node"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="healthcheck"
              checked={config.includeHealthcheck}
              onChange={(e) => update({ includeHealthcheck: e.target.checked })}
              className="accent-primary"
            />
            <label htmlFor="healthcheck" className="text-sm">HEALTHCHECKを含める</label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="env"
              checked={config.includeEnv}
              onChange={(e) => update({ includeEnv: e.target.checked })}
              className="accent-primary"
            />
            <label htmlFor="env" className="text-sm">ENV命令を含める</label>
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-sm uppercase tracking-wide text-muted">Dockerfile</h2>
            <button
              onClick={copy}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-xs font-mono leading-relaxed flex-1 overflow-auto whitespace-pre-wrap">
            {dockerfile}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Dockerfileテンプレート生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ベースイメージ（Node.js、Python、Nginxなど）を選択します。</p>
          <p>2. タグでバージョンを指定します（例: 20、3.12、latestなど）。</p>
          <p>3. 作業ディレクトリ・ポート・実行ユーザーを必要に応じて設定します。</p>
          <p>4. 生成されたDockerfileをコピーしてプロジェクトに貼り付けてください。</p>
          <p>生成されるテンプレートはベストプラクティスに基づいており、必要に応じてカスタマイズして使用してください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="docker-template" category="開発ツール" />
    </div>
  );
}
