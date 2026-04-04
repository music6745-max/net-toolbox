"use client";

import Link from "next/link";

interface SizeEntry {
  name: string;
  width: number;
  height: number;
  ratio: string;
  notes: string;
}

interface Platform {
  platform: string;
  color: string;
  items: SizeEntry[];
}

const DATA: Platform[] = [
  {
    platform: "OGP（Open Graph Protocol）",
    color: "bg-blue-500",
    items: [
      { name: "OGP標準画像", width: 1200, height: 630, ratio: "1.91:1", notes: "og:imageの推奨サイズ。Facebook・Slackなどで使用" },
      { name: "OGP最小サイズ", width: 600, height: 315, ratio: "1.91:1", notes: "最低600×315px以上推奨" },
    ],
  },
  {
    platform: "X（旧Twitter）",
    color: "bg-gray-800",
    items: [
      { name: "Summary Card（大）", width: 1200, height: 628, ratio: "1.91:1", notes: "twitter:card=summary_large_image" },
      { name: "Summary Card（小）", width: 144, height: 144, ratio: "1:1", notes: "twitter:card=summary" },
      { name: "ツイート内画像（横）", width: 1200, height: 675, ratio: "16:9", notes: "通常投稿の推奨サイズ" },
      { name: "プロフィール画像", width: 400, height: 400, ratio: "1:1", notes: "400×400px推奨" },
      { name: "ヘッダー画像", width: 1500, height: 500, ratio: "3:1", notes: "1500×500px推奨" },
    ],
  },
  {
    platform: "Facebook",
    color: "bg-blue-600",
    items: [
      { name: "シェア画像", width: 1200, height: 630, ratio: "1.91:1", notes: "リンクシェア時の推奨サイズ" },
      { name: "タイムライン投稿", width: 1200, height: 630, ratio: "1.91:1", notes: "横長投稿画像" },
      { name: "プロフィール画像", width: 170, height: 170, ratio: "1:1", notes: "表示は円形にトリミング" },
      { name: "カバー画像（PC）", width: 851, height: 315, ratio: "2.7:1", notes: "PC表示の推奨サイズ" },
      { name: "イベント画像", width: 1920, height: 1005, ratio: "16:8.4", notes: "高解像度推奨" },
    ],
  },
  {
    platform: "Instagram",
    color: "bg-pink-500",
    items: [
      { name: "フィード投稿（正方形）", width: 1080, height: 1080, ratio: "1:1", notes: "最もポピュラーなサイズ" },
      { name: "フィード投稿（横）", width: 1080, height: 566, ratio: "1.91:1", notes: "横長フォーマット" },
      { name: "フィード投稿（縦）", width: 1080, height: 1350, ratio: "4:5", notes: "縦長フォーマット（推奨）" },
      { name: "ストーリーズ・リール", width: 1080, height: 1920, ratio: "9:16", notes: "フルスクリーン縦型" },
      { name: "プロフィール画像", width: 320, height: 320, ratio: "1:1", notes: "円形にトリミングされる" },
    ],
  },
  {
    platform: "YouTube",
    color: "bg-red-500",
    items: [
      { name: "サムネイル", width: 1280, height: 720, ratio: "16:9", notes: "HD画質推奨。最大2MBまで" },
      { name: "チャンネルアート（PC）", width: 2560, height: 1440, ratio: "16:9", notes: "安全表示領域は1546×423px" },
      { name: "チャンネルアイコン", width: 800, height: 800, ratio: "1:1", notes: "円形表示" },
      { name: "チャンネルバナー（TV）", width: 2560, height: 1440, ratio: "16:9", notes: "テレビ画面での表示サイズ" },
    ],
  },
  {
    platform: "LINE",
    color: "bg-green-500",
    items: [
      { name: "タイムライン投稿", width: 1200, height: 628, ratio: "1.91:1", notes: "リンクシェア時" },
      { name: "プロフィール画像", width: 640, height: 640, ratio: "1:1", notes: "円形表示" },
      { name: "カバー画像", width: 1080, height: 878, ratio: "1.23:1", notes: "LINEプロフィールの背景" },
    ],
  },
  {
    platform: "Pinterest",
    color: "bg-red-600",
    items: [
      { name: "標準ピン", width: 1000, height: 1500, ratio: "2:3", notes: "縦長が最もエンゲージメント高い" },
      { name: "正方形ピン", width: 1000, height: 1000, ratio: "1:1", notes: "正方形フォーマット" },
      { name: "ワイドピン", width: 1000, height: 2100, ratio: "1:2.1", notes: "縦長インフォグラフィック向け" },
    ],
  },
];

export default function OgpSizeListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>OGP画像サイズ一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">OGP画像サイズ一覧</h1>
      <p className="text-muted mb-8">
        SNS・プラットフォーム別の推奨画像サイズをまとめました。Webサイト制作やSNS運用の参考にご活用ください。
      </p>

      <div className="space-y-6">
        {DATA.map((section) => (
          <div key={section.platform} className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
            <div className={`${section.color} px-5 py-3`}>
              <h2 className="text-white font-semibold text-sm">{section.platform}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left px-5 py-3 font-medium text-muted">種類</th>
                    <th className="text-right px-4 py-3 font-medium text-muted">幅 (px)</th>
                    <th className="text-right px-4 py-3 font-medium text-muted">高さ (px)</th>
                    <th className="text-right px-4 py-3 font-medium text-muted">比率</th>
                    <th className="text-left px-4 py-3 font-medium text-muted">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "" : "bg-background"}
                    >
                      <td className="px-5 py-3 font-medium">{item.name}</td>
                      <td className="px-4 py-3 text-right font-mono text-primary">{item.width.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-mono text-primary">{item.height.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-mono text-muted">{item.ratio}</td>
                      <td className="px-4 py-3 text-muted">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">OGP画像サイズ一覧の使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>SNSやWebサービスごとに推奨画像サイズが異なります。この一覧を参考に画像を作成してください。</p>
          <p>OGP画像はWebサイトをSNSでシェアした際に表示される画像です。og:imageタグで設定します。</p>
          <p>画像サイズは各プラットフォームのアップデートにより変更される場合があります。最新情報は各公式サイトもご確認ください。</p>
        </div>
      </section>
    </div>
  );
}
