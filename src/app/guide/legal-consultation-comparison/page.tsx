import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】弁護士相談オンライン比較おすすめ5選｜料金・対応分野・選び方を徹底解説",
  description:
    "弁護士ドットコム・ココナラ法律相談・ベンナビ・アディーレ・ライトハウスのオンライン法律相談を料金・対応分野・相談方法で徹底比較。労働・離婚・債務整理・相続で失敗しない選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/legal-consultation-comparison` },
};

const faqItems = [
  { question: "オンライン法律相談は対面より安いですか？", answer: "多くのサービスで初回30分無料または1回5,000円程度と、対面の相談料（30分5,500円〜）より安いケースが多いです。全国どこからでも専門分野の弁護士にアクセスできるのも大きなメリットです。" },
  { question: "相談内容は秘密にされますか？", answer: "弁護士には守秘義務があり、相談内容が第三者に漏れることはありません。オンライン相談でもビデオ通話・チャットは暗号化されており、対面と同等のプライバシー保護があります。" },
  { question: "どの分野の相談が可能ですか？", answer: "離婚・相続・労働問題・債務整理・交通事故・刑事事件・不動産・企業法務など、ほぼすべての分野に対応しています。サービスによって得意分野が異なるため、自分の問題に特化した弁護士を探せるマッチング型が便利です。" },
  { question: "法テラスとの違いは何ですか？", answer: "法テラスは国が運営する低所得者向けの無料相談窓口で、収入・資産要件があります。民間のオンライン相談は要件なしで誰でも利用でき、選択肢が広く、深夜や休日対応のサービスもあります。" },
];

const services = [
  { name: "弁護士ドットコム", type: "大手ポータル", rate: "月額330円〜／無料相談あり", points: ["登録弁護士23,000名以上", "みんなの法律相談は無料閲覧", "プレミアム会員で電話・面談優先"], bestFor: "情報収集から相談まで一貫して行いたい人。" },
  { name: "ココナラ法律相談", type: "見積比較型", rate: "1回3,000円〜", points: ["弁護士に直接オンライン相談", "レビュー・実績で選べる", "チャット・電話・ビデオに対応"], bestFor: "料金と相性を重視して選びたい人。" },
  { name: "ベンナビ", type: "分野特化検索", rate: "利用無料", points: ["分野・地域で絞り込み検索", "離婚・相続・労働に強い", "初回無料の事務所多数"], bestFor: "具体的な問題が決まっている人。" },
  { name: "アディーレ法律事務所", type: "大手事務所直営", rate: "初回相談無料", points: ["全国65拠点でオンライン対応", "債務整理・交通事故に強い", "着手金後払い・損害金分割OK"], bestFor: "借金・過払い金・交通事故の相談。" },
  { name: "ライトハウス", type: "企業法務特化", rate: "要見積り", points: ["スタートアップ・中小企業向け", "顧問契約・労務・知財が得意", "オンライン完結のリーガルサービス"], bestFor: "経営者・法人の顧問弁護士探し。" },
];

export default function LegalConsultationComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "弁護士相談オンライン比較", url: `${siteConfig.url}/guide/legal-consultation-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】弁護士相談オンライン比較おすすめ5選" description="弁護士ドットコム・ココナラ法律相談・ベンナビ・アディーレ・ライトハウスを料金・対応分野・相談方法で徹底比較。" url={`${siteConfig.url}/guide/legal-consultation-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>弁護士相談オンライン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】弁護士相談オンライン比較おすすめ5選｜料金・対応分野・選び方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          離婚・相続・労働問題・債務整理──人生の重大局面で弁護士に相談したいとき、どこに依頼すべきか迷う人は多いでしょう。2026年現在は自宅から24時間アクセスできるオンライン法律相談サービスが急成長しており、対面より安価で専門性の高い弁護士に出会えます。主要5サービスを徹底比較し、失敗しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">情報収集から → 弁護士ドットコム</span></p>
          <p><span className="font-bold">料金重視 → ココナラ法律相談</span></p>
          <p><span className="font-bold">離婚・相続 → ベンナビ</span></p>
          <p><span className="font-bold">債務整理 → アディーレ法律事務所</span></p>
          <p><span className="font-bold">企業法務 → ライトハウス</span></p>
        </div>
      </div>

      <section className="mb-10">
        <Link href="/tools/inheritance-tax-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">相続税シミュレーターを使う</div>
          <p className="text-xs text-muted">資産総額・法定相続人数から相続税の基礎控除額と概算税額を試算できます →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンライン法律相談の基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          オンライン法律相談は、ビデオ通話・電話・チャットで弁護士とやり取りできるサービスです。2020年以降急速に普及し、現在では大手事務所から個人事務所まで幅広く導入されています。料金は「初回30分無料」「1回5,000円」「月額330円で相談し放題」などパターンが複数あり、相談内容と頻度で選び分けるのがコツ。着手金が発生する本格的な依頼は別途見積りになりますが、相談段階では大半が数千円以内で完結します。弁護士には守秘義務があるため、誰にも話せない悩みも安心して相談できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンライン法律相談サービス5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の料金・対応分野は各サービスの公式サイトでご確認ください。</p>
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
            オンライン法律相談は、料金・専門性・アクセシビリティの3拍子揃った新しい相談スタイルです。自宅から全国の弁護士にアクセスできるため、地方在住でも最適な専門家に出会えます。まずは無料相談で複数の弁護士と話し、相性と方針を確認してから依頼先を決めるのが失敗しないコツ。事業者の場合は会計ソフトで日々の記録を整え、法務・税務の両面で専門家を使い分けましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">事業者向け経理ツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告・経理の定番ソフト", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/tax-accountant-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">税理士マッチング比較</span>
            <p className="text-xs text-muted mt-1">税務の専門家を探す</p>
          </Link>
          <Link href="/guide/business-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">事業者向け融資比較</span>
            <p className="text-xs text-muted mt-1">資金調達の相談も法務チェック</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
