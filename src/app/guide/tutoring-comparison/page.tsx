import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】オンライン家庭教師・塾比較おすすめ5選｜料金・指導科目・合格実績を徹底解説",
  description:
    "オンライン家庭教師ピース・家庭教師のトライ・スタディサプリ・東進オンライン学校・進研ゼミなど主要オンライン学習サービス5社の料金・指導科目・対応学年・合格実績を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/tutoring-comparison` },
};

const faqItems = [
  {
    question: "オンラインと対面の家庭教師どちらがいいですか？",
    answer:
      "送迎不要・全国の優秀な講師から選べる・録画復習可能などメリットが多いオンラインが急成長中です。一方、低学年で集中力が続かない子・実技指導が必要な場合は対面が有利。中学生以上ならオンラインが効率的という意見が多数派です。",
  },
  {
    question: "月額料金の相場はいくらですか？",
    answer:
      "オンライン家庭教師で月10,000〜25,000円、オンライン塾・映像授業で月2,000〜10,000円が相場です。学年が上がるほど料金は上がり、中学受験・大学受験対応コースは月3〜5万円になることもあります。兄弟割引や紹介割引も活用しましょう。",
  },
  {
    question: "成績は本当に上がりますか？",
    answer:
      "「子どものレベルに合った指導」と「継続」が成績アップの2大要素です。多くの会社で無料体験授業があり、相性を確認してから契約できます。週1〜2回の継続学習で3〜6ヶ月後に効果が見え始めるケースが多いです。",
  },
  {
    question: "中学受験・高校受験・大学受験どれにも対応していますか？",
    answer:
      "サービスにより得意分野が異なります。中学受験はトライやSAPIX系、高校受験は進研ゼミやスタディサプリ、大学受験は東進やスタディサプリが定評があります。志望校や目的別に選びましょう。",
  },
  {
    question: "小学生でもオンラインで集中できますか？",
    answer:
      "低学年は短時間（30分）から始め、保護者が同席するのが効果的です。最近はゲーミフィケーション要素を取り入れた小学生向けオンライン学習サービスも増え、自宅学習の習慣化に役立ちます。",
  },
];

const services = [
  { name: "オンライン家庭教師ピース", type: "オンライン家庭教師", rate: "月額13,200円〜", points: ["講師の質に定評", "指導科目選び放題", "兄弟同時指導OK"], bestFor: "個別最適化された指導が欲しい人。" },
  { name: "家庭教師のトライ オンライン", type: "大手家庭教師", rate: "月額16,280円〜", points: ["業界最大手の安心感", "全科目対応・受験対策", "AI診断で苦手分析"], bestFor: "受験対策を本格的にしたい人。" },
  { name: "スタディサプリ", type: "映像授業", rate: "月額2,178円〜", points: ["神授業が見放題", "小4〜高3まで対応", "コスパ最強"], bestFor: "コスパ重視・自学自習できる子。" },
  { name: "東進オンライン学校", type: "映像授業", rate: "月額2,497円〜", points: ["東進の有名講師陣", "小学生・中学生コース", "テキスト無料"], bestFor: "難関校を狙う小中学生。" },
  { name: "進研ゼミ", type: "通信教育", rate: "月額3,250円〜", points: ["タブレット学習中心", "赤ペン添削あり", "AIで個別カリキュラム"], bestFor: "通信教育の定番を選びたい人。" },
];

export default function TutoringComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "オンライン家庭教師比較", url: `${siteConfig.url}/guide/tutoring-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンライン家庭教師比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】オンライン家庭教師・塾比較おすすめ5選｜料金・指導科目・合格実績を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          コロナ禍以降、急速に普及したオンライン家庭教師・オンライン塾。送迎不要、全国の優秀な講師から選べる、録画復習できるなどメリットが多く、対面型を上回る人気となっています。2026年最新の主要5サービスを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">個別最適 → オンライン家庭教師ピース</span></p>
          <p><span className="font-bold">受験対策 → 家庭教師のトライ</span></p>
          <p><span className="font-bold">コスパ → スタディサプリ</span></p>
          <p><span className="font-bold">通信教育の定番 → 進研ゼミ</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンライン学習サービス選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          オンライン学習サービスは大きく「家庭教師型（マンツーマン）」「映像授業型」「通信教育型」の3つに分かれます。マンツーマンで個別指導を受けたいなら家庭教師型、コスパ重視で自学自習できる子は映像授業型、低学年や学習習慣をつけたい段階なら通信教育型が向きます。志望校・現在の学力・性格に合わせた選択が重要です。
        </p>
        <p className="text-muted leading-relaxed">
          ほとんどのサービスで無料体験授業や資料請求が可能なので、最低でも2〜3社を比較してから決めましょう。継続率を高めるには「子どもが楽しいと思える講師・教材」「保護者が学習進捗を確認しやすい仕組み」が鍵です。料金面では兄弟割引・紹介割引・キャンペーン入会で初月無料となるケースもあるため、活用するとお得です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンライン学習サービス5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新プランは各社公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            オンライン学習サービスは「子どもの学年・志望校・性格・予算」を踏まえて選ぶのが正解。無料体験を活用し、相性を確かめてから本契約するのが鉄則です。教育費は家計に占める割合が大きいので、家計簿アプリや会計ソフトで月額固定費として可視化し、無理なく継続できる金額に収めましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">大人の学び直しにも</p>
          </Link>
          <Link href="/guide/online-english-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン英会話比較</span>
            <p className="text-xs text-muted mt-1">英語学習を続けるなら</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
