import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】葬儀・お葬式の事前相談比較おすすめ5選｜料金・プラン・口コミを徹底解説",
  description:
    "小さなお葬式・よりそうお葬式・イオンのお葬式・公益社・お花のはなぞのなど主要葬儀サービス5社のプラン料金・対応エリア・追加費用を徹底比較。家族葬・直葬・一日葬の選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/funeral-service-comparison` },
};

const faqItems = [
  {
    question: "葬儀にかかる費用の相場はいくらですか？",
    answer:
      "全国平均で家族葬が約100万円、一般葬が約180万円、直葬（火葬式）は約20万円が相場です。近年は家族葬・一日葬が主流となり、費用は10年前と比べて約30%下がってきています。事前相談で「総額表示」のあるプランを選ぶのが安心です。",
  },
  {
    question: "事前相談はなぜ必要ですか？",
    answer:
      "葬儀は突発的に必要になるため、慌てて手配すると「追加費用」「不要なオプション」で総額が跳ね上がります。事前に相談して総額・プラン内容・希望を明確にしておくことで、いざという時に冷静に手続きを進められ、平均で30万円以上のコスト削減になるという調査もあります。",
  },
  {
    question: "家族葬と一般葬どちらがいいですか？",
    answer:
      "家族や親しい人だけで静かに送りたいなら家族葬（10〜30名）、会社関係や知人も含めて見送りたいなら一般葬（50名以上）が向きます。最近は家族葬が約6割を占め、参列者も呼ばないケースが増えています。",
  },
  {
    question: "追加費用が発生するケースはありますか？",
    answer:
      "想定参列者数を超えた場合の食事・返礼品代、安置日数の延長、ドライアイス追加、火葬場使用料、お布施などが追加されることがあります。総額表示プランかつ「追加費用なし」と明記されたサービスを選びましょう。",
  },
  {
    question: "資料請求や事前相談は無料ですか？",
    answer:
      "ほとんどの葬儀社で資料請求・事前相談は無料です。資料請求のみで葬儀費用が割引される会員特典もあります。複数社から資料を取り寄せ、プラン内容と総額を比較した上で判断するのがおすすめです。",
  },
];

const services = [
  { name: "小さなお葬式", type: "全国対応", rate: "プラン119,000円〜", points: ["全国4,000以上の葬儀場提携", "総額定額プラン明確", "資料請求で5万円割引"], bestFor: "全国どこでも安心したい人。" },
  { name: "よりそうお葬式", type: "全国対応", rate: "プラン119,000円〜", points: ["僧侶手配サービスもあり", "シンプル明瞭な総額表示", "事前相談で会員割引"], bestFor: "事前相談で割引を受けたい人。" },
  { name: "イオンのお葬式", type: "全国対応", rate: "プラン198,000円〜", points: ["イオン安心の総額制", "WAON POINT付与", "全国の式場と提携"], bestFor: "イオン経済圏の方。" },
  { name: "公益社", type: "首都圏・関西", rate: "プラン400,000円〜", points: ["創業90年以上の老舗", "高品質なサービス", "対面相談が手厚い"], bestFor: "格式・対応品質を重視する方。" },
  { name: "お花のはなぞの 直葬プラン", type: "直葬専門", rate: "プラン99,000円〜", points: ["業界最安値クラスの直葬", "シンプルに送りたい方向け", "全国対応"], bestFor: "最小限の費用で済ませたい方。" },
];

export default function FuneralServiceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "葬儀比較", url: `${siteConfig.url}/guide/funeral-service-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>葬儀比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】葬儀・お葬式の事前相談比較おすすめ5選｜料金・プラン・口コミを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          家族葬・一日葬・直葬など多様化する葬儀スタイル。事前に相談しておくことで費用を30万円以上抑えられる事例もあります。2026年時点の主要葬儀サービス5社のプラン料金・対応エリア・追加費用を徹底比較し、後悔しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">全国どこでも → 小さなお葬式</span></p>
          <p><span className="font-bold">事前会員割引 → よりそうお葬式</span></p>
          <p><span className="font-bold">老舗の品質 → 公益社</span></p>
          <p><span className="font-bold">最安値の直葬 → お花のはなぞの</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">葬儀サービス選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          葬儀費用は「葬儀本体料金＋飲食接待費＋宗教者へのお礼」の3つで構成されます。総額表示プランは葬儀本体料金のみのことが多いため、最終的な総額を確認することが重要です。事前相談では希望する葬儀スタイル（家族葬・一日葬・直葬・一般葬）、想定参列者数、予算、宗派などを伝え、追加費用の発生条件を確認しましょう。多くの会社で資料請求のみで無料の事前見積もりが取れ、会員登録すると数万円の割引が受けられる仕組みもあります。
        </p>
        <p className="text-muted leading-relaxed">
          家族葬は約100万円、直葬は約20万円が全国平均。地域・時期・式場によって変動するため、必ず複数社から見積もりを取りましょう。また「総額」「追加費用なし」「火葬料金込み」と明記されたプランを選ぶことで、当日の追加請求リスクを大きく減らせます。事前相談自体は当日葬儀を依頼する義務はないので、複数社で気軽に話を聞くのがおすすめです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ葬儀サービス5社の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。プラン内容は各社公式サイトでご確認ください。</p>
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
            葬儀は事前準備で総額を大きく抑えられる代表的なライフイベントです。複数社から資料請求して総額・プラン内容を比較し、家族で希望を共有しておくことで、いざという時に冷静で納得のいくお別れができます。日々の家計管理ツールと組み合わせて、終活費用も含めたライフプランを整えましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">終身保険・葬儀費用の備え</p>
          </Link>
          <Link href="/guide/cancer-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">がん保険比較</span>
            <p className="text-xs text-muted mt-1">病気や万一への備え</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
