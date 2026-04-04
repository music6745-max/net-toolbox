"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Port = {
  port: number;
  protocol: "TCP" | "UDP" | "TCP/UDP";
  service: string;
  description: string;
};

const PORTS: Port[] = [
  { port: 20, protocol: "TCP", service: "FTP-data", description: "FTPデータ転送" },
  { port: 21, protocol: "TCP", service: "FTP", description: "FTPコントロール" },
  { port: 22, protocol: "TCP", service: "SSH", description: "セキュアシェル（暗号化リモートログイン）" },
  { port: 23, protocol: "TCP", service: "Telnet", description: "テルネット（非推奨）" },
  { port: 25, protocol: "TCP", service: "SMTP", description: "メール送信プロトコル" },
  { port: 53, protocol: "TCP/UDP", service: "DNS", description: "ドメインネームシステム" },
  { port: 67, protocol: "UDP", service: "DHCP", description: "DHCPサーバー" },
  { port: 68, protocol: "UDP", service: "DHCP", description: "DHCPクライアント" },
  { port: 69, protocol: "UDP", service: "TFTP", description: "簡易ファイル転送プロトコル" },
  { port: 80, protocol: "TCP", service: "HTTP", description: "Webサーバー（HTTP）" },
  { port: 110, protocol: "TCP", service: "POP3", description: "メール受信プロトコル（POP3）" },
  { port: 119, protocol: "TCP", service: "NNTP", description: "ネットニュース転送プロトコル" },
  { port: 123, protocol: "UDP", service: "NTP", description: "ネットワーク時刻同期プロトコル" },
  { port: 143, protocol: "TCP", service: "IMAP", description: "メール受信プロトコル（IMAP）" },
  { port: 161, protocol: "UDP", service: "SNMP", description: "ネットワーク管理プロトコル" },
  { port: 194, protocol: "TCP", service: "IRC", description: "インターネットリレーチャット" },
  { port: 389, protocol: "TCP/UDP", service: "LDAP", description: "ディレクトリサービスプロトコル" },
  { port: 443, protocol: "TCP", service: "HTTPS", description: "WebサーバーSSL/TLS（HTTPS）" },
  { port: 445, protocol: "TCP", service: "SMB", description: "Windowsファイル共有（SMB）" },
  { port: 465, protocol: "TCP", service: "SMTPS", description: "SMTPセキュア（SSL）" },
  { port: 514, protocol: "UDP", service: "Syslog", description: "システムログ転送" },
  { port: 587, protocol: "TCP", service: "SMTP", description: "メール送信（認証付き）" },
  { port: 636, protocol: "TCP", service: "LDAPS", description: "LDAPセキュア（SSL/TLS）" },
  { port: 993, protocol: "TCP", service: "IMAPS", description: "IMAP セキュア（SSL/TLS）" },
  { port: 995, protocol: "TCP", service: "POP3S", description: "POP3 セキュア（SSL/TLS）" },
  { port: 1080, protocol: "TCP", service: "SOCKS", description: "SOCKSプロキシ" },
  { port: 1433, protocol: "TCP", service: "MSSQL", description: "Microsoft SQL Server" },
  { port: 1521, protocol: "TCP", service: "Oracle DB", description: "Oracle データベース" },
  { port: 2181, protocol: "TCP", service: "ZooKeeper", description: "Apache ZooKeeper" },
  { port: 2375, protocol: "TCP", service: "Docker", description: "Docker デーモン（非TLS）" },
  { port: 2376, protocol: "TCP", service: "Docker TLS", description: "Docker デーモン（TLS）" },
  { port: 3000, protocol: "TCP", service: "Dev Server", description: "開発用サーバー（Node.js等）" },
  { port: 3306, protocol: "TCP", service: "MySQL", description: "MySQLデータベース" },
  { port: 3389, protocol: "TCP", service: "RDP", description: "Windowsリモートデスクトッププロトコル" },
  { port: 4200, protocol: "TCP", service: "Angular", description: "Angular CLIデベロップサーバー" },
  { port: 5000, protocol: "TCP", service: "Flask/UPnP", description: "Pythonフラスクデフォルトポート" },
  { port: 5432, protocol: "TCP", service: "PostgreSQL", description: "PostgreSQLデータベース" },
  { port: 5672, protocol: "TCP", service: "AMQP", description: "RabbitMQ（AMQP）" },
  { port: 5900, protocol: "TCP", service: "VNC", description: "VNCリモートデスクトップ" },
  { port: 6379, protocol: "TCP", service: "Redis", description: "Redisキャッシュデータベース" },
  { port: 6443, protocol: "TCP", service: "Kubernetes API", description: "Kubernetes APIサーバー" },
  { port: 8080, protocol: "TCP", service: "HTTP Alt", description: "代替HTTPポート（開発用途等）" },
  { port: 8443, protocol: "TCP", service: "HTTPS Alt", description: "代替HTTPSポート" },
  { port: 8888, protocol: "TCP", service: "Jupyter", description: "Jupyter Notebookデフォルト" },
  { port: 9000, protocol: "TCP", service: "SonarQube", description: "SonarQube / PHP-FPM" },
  { port: 9200, protocol: "TCP", service: "Elasticsearch", description: "Elasticsearch REST API" },
  { port: 9300, protocol: "TCP", service: "Elasticsearch", description: "Elasticsearchノード間通信" },
  { port: 27017, protocol: "TCP", service: "MongoDB", description: "MongoDBデータベース" },
  { port: 27018, protocol: "TCP", service: "MongoDB", description: "MongoDB シャードサーバー" },
  { port: 50070, protocol: "TCP", service: "Hadoop", description: "Hadoop NameNode Web UI" },
  { port: 61616, protocol: "TCP", service: "ActiveMQ", description: "Apache ActiveMQメッセージブローカー" },
];

const PROTOCOL_COLORS: Record<string, string> = {
  TCP: "bg-blue-100 text-blue-700",
  UDP: "bg-purple-100 text-purple-700",
  "TCP/UDP": "bg-green-100 text-green-700",
};

export default function PortListPage() {
  const [query, setQuery] = useState("");

  const filtered = PORTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      String(p.port).includes(q) ||
      p.service.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.protocol.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ポート番号一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ポート番号一覧</h1>
      <p className="text-muted mb-8">
        よく使われるTCP/UDPポート番号を一覧で確認・検索できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ポート番号・サービス名・説明で検索..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary mb-4"
        />
        <p className="text-xs text-muted mb-4">{filtered.length} 件表示</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 pr-4 font-medium text-muted w-20">ポート</th>
                <th className="text-left py-2 pr-4 font-medium text-muted w-24">プロトコル</th>
                <th className="text-left py-2 pr-4 font-medium text-muted w-32">サービス</th>
                <th className="text-left py-2 font-medium text-muted">説明</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={`${p.port}-${p.protocol}`} className="border-b border-card-border/50 hover:bg-background transition-colors">
                  <td className="py-2.5 pr-4 font-mono font-bold">{p.port}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PROTOCOL_COLORS[p.protocol]}`}>
                      {p.protocol}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 font-medium">{p.service}</td>
                  <td className="py-2.5 text-muted">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center text-muted py-8">該当するポートが見つかりませんでした。</p>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>検索ボックスにポート番号、サービス名、説明の一部を入力すると絞り込み検索ができます。</p>
          <p>TCPはWebやメール等の信頼性が必要な通信、UDPはDNSや動画等のリアルタイム通信に使われます。</p>
          <p>1024以下のポートはウェルノウンポートと呼ばれ、OSの管理者権限が必要なことが多いです。</p>
        </div>
      </section>


      <AffiliateSection slug="port-list" category="開発ツール" />
      <RelatedTools currentSlug="port-list" category="開発ツール" />
    </div>
  );
}
