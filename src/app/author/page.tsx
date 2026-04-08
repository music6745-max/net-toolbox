import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `編集部について｜${siteConfig.name}のレビュー基準と編集方針`,
  description:
    "ネットツールボックス編集部のメンバー紹介、レビュー基準、編集方針をまとめたページです。読者の皆さまに信頼していただけるコンテンツをお届けするための取り組みを公開しています。",
  alternates: { canonical: `${siteConfig.url}/author` },
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${siteConfig.name}編集部`,
    url: `${siteConfig.url}/author`,
    logo: `${siteConfig.url}/icon.png`,
    description: "Web便利ツール・各種比較ガイドを発信するネットツールボックスの編集チーム。",
    sameAs: [siteConfig.url],
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const editors = [
  {
    role: "通信担当",
    icon: "📡",
    desc: "格安SIM・光回線・ポケットWiFi・モバイルルーターなど通信全般のリサーチを担当。元通信キャリアでの法人営業経験を活かし、実測データと公式情報を突き合わせて記事を執筆しています。",
  },
  {
    role: "金融担当",
    icon: "💳",
    desc: "クレジットカード・保険・ローン・投資・税金など金融全般のリサーチを担当。FP資格保有者を中心に、料金体系・補償範囲・税制を中立的に比較しています。",
  },
  {
    role: "仕事・スキル担当",
    icon: "💼",
    desc: "プログラミングスクール・転職サイト・副業ツール・オンライン英会話など、キャリア領域を担当。実際にサービスを利用したスタッフのレビューを反映しています。",
  },
  {
    role: "生活担当",
    icon: "🏠",
    desc: "電力・ガス・引越し・家事代行・ミールキットなど生活インフラ全般のリサーチを担当。一人暮らしから子育て世帯まで幅広い視点を意識して比較しています。",
  },
  {
    role: "健康・美容担当",
    icon: "🏋️",
    desc: "ジム・ヨガ・パーソナルジム・脱毛サロン・サプリなどヘルスケア領域のリサーチを担当。最新のトレンドや科学的エビデンスを参考にレビューしています。",
  },
  {
    role: "AI・ガジェット担当",
    icon: "🤖",
    desc: "スマホ・PC・タブレット・スマートウォッチなどガジェット系を担当。複数機種を実際に使い比べた上で、価格と性能のバランスを評価しています。",
  },
];

const policies = [
  { title: "中立性", desc: "広告主からの影響を受けず、利用者目線で公平にメリット・デメリットを記載することを編集方針の中核としています。" },
  { title: "一次情報の確認", desc: "料金・スペック・キャンペーン情報は、必ず各サービスの公式サイトで一次情報を確認した上で記載しています。" },
  { title: "定期更新", desc: "料金改定・サービス変更・新サービス登場に合わせて、各記事を定期的にアップデートしています。" },
  { title: "実体験の重視", desc: "編集部スタッフが実際に利用・調査した内容を含めることで、机上の比較に終わらないリアルな情報をお届けします。" },
  { title: "FAQ重視", desc: "読者の疑問に直接答える形式のFAQセクションを各記事に設け、具体的な悩みを解決できるよう工夫しています。" },
  { title: "アフィリエイトの開示", desc: "記事内に広告リンクを含む場合は、広告であることを明示し、アフィリエイト報酬がレビュー内容に影響しないよう配慮しています。" },
];

export default function AuthorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <OrganizationJsonLd />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>編集部について</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4 leading-tight">編集部について</h1>
        <p className="text-muted leading-relaxed">
          {siteConfig.name}は、暮らし・仕事・お金にまつわるWebサービスを比較・解説するメディアです。本ページでは、編集部の体制・レビュー基準・編集方針を公開しています。読者の皆さまに信頼してご利用いただけるよう、どのような姿勢でコンテンツを制作しているかをお伝えします。
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">編集部の体制</h2>
        <p className="text-muted leading-relaxed mb-6">
          {siteConfig.name}編集部は、ジャンル別にリサーチ担当を配置するチーム体制で運営しています。各担当者は該当領域での実務経験・取材経験・利用経験のいずれかを軸に、信頼性のある一次情報とユーザー視点のレビューを両立させることを心がけています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {editors.map((e) => (
            <div key={e.role} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="text-3xl mb-2">{e.icon}</div>
              <h3 className="font-bold mb-2">編集部 {e.role}</h3>
              <p className="text-sm text-muted leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">レビュー基準</h2>
        <p className="text-muted leading-relaxed mb-6">
          各サービスを比較する際、以下の評価軸で総合的にレビューしています。点数化は行わず、利用者の状況によって最適な選択肢が変わることを前提に「タイプ別おすすめ」の形式で提示することを基本としています。
        </p>
        <div className="space-y-3">
          {[
            { title: "料金", desc: "初期費用・月額・キャンペーン・解約金・追加料金まで含めた総額を比較。" },
            { title: "サービス品質", desc: "サポート体制・実績・利用者数・口コミ評価・運営年数などから総合判断。" },
            { title: "対応エリア・店舗数", desc: "地方在住者でも利用できるか、店舗数や宅配対応エリアを重視。" },
            { title: "使いやすさ", desc: "申込のしやすさ・解約のしやすさ・アプリやWebの操作性。" },
            { title: "安心・安全性", desc: "保険・補償・セキュリティ・運営会社の信頼性。" },
            { title: "コストパフォーマンス", desc: "上記すべてを踏まえた料金対効果のバランス。" },
          ].map((c) => (
            <div key={c.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1">{c.title}</h3>
              <p className="text-sm text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">編集方針（6つのポリシー）</h2>
        <div className="space-y-3">
          {policies.map((p, i) => (
            <div key={p.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">運営情報</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <dl className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">サイト名</dt>
              <dd>{siteConfig.name}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">URL</dt>
              <dd className="break-all">{siteConfig.url}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">運営内容</dt>
              <dd>Web便利ツールの提供、各種サービス比較ガイドの執筆</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">お問い合わせ</dt>
              <dd>サイト内お問い合わせフォームまたは公式X（@net_toolbox_jp）</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ガイド一覧</span>
            <p className="text-xs text-muted mt-1">全比較ガイドはこちら</p>
          </Link>
          <Link href="/" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">トップページ</span>
            <p className="text-xs text-muted mt-1">便利ツール一覧</p>
          </Link>
          <Link href="/privacy" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プライバシーポリシー</span>
            <p className="text-xs text-muted mt-1">個人情報の取り扱い</p>
          </Link>
          <Link href="/contact" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">お問い合わせ</span>
            <p className="text-xs text-muted mt-1">ご意見・修正依頼など</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
