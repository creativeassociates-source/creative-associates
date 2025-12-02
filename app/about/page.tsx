// app/about/page.tsx
import FAQ from "../components/FAQ";

/* =============================
   FAQ リスト（構造化データ用）
============================= */
const faqList = [
  {
    question: "制作費用の目安はどれくらいですか？",
    answer:
      "Web制作・ロゴ・漫画・撮影など内容により異なります。ご希望に合わせて最適なプランをご提案します。",
  },
  {
    question: "ナイトワーク特化のデザインは可能ですか？",
    answer:
      "はい。メンズエステ・キャバクラ・ガールズバーなど業種に合わせてUX・デザインを最適化します。",
  },
  {
    question: "どれくらいの期間で制作できますか？",
    answer:
      "Web制作は2〜4週間、ロゴ制作は1〜2週間、漫画制作は2〜4週間が目安です。",
  },
  {
    question: "初めての依頼でも大丈夫ですか？",
    answer:
      "はい。初めての方でもわかりやすく、ヒアリングから丁寧に進めていきますのでご安心ください。",
  },
];

/* =============================
   制作の流れ（HowTo Schema 用）
============================= */
const flowSteps = [
  {
    name: "お問い合わせ",
    text: "フォームまたは LINE からご相談いただけます。",
  },
  {
    name: "ヒアリング",
    text: "ご要望・目的・世界観を丁寧にお聞きします。",
  },
  {
    name: "制作",
    text: "Web・ロゴ・漫画・撮影など必要な制作を進めます。",
  },
  {
    name: "納品・公開",
    text: "最終確認後、データ納品またはサイトを公開します。",
  },
  {
    name: "運用サポート",
    text: "公開後の更新・改善・追加制作もお任せください。",
  },
];

/* =============================
   ページ Metadata
============================= */
export const metadata = {
  title: "初めての方へ | Creative Associates",
  description:
    "ナイトワーク特化の制作スタジオ。Web制作・ロゴ・漫画制作・撮影をワンストップで提供します。",
};

/* =============================
   About ページ本体
============================= */
export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "制作の流れ",
            description: "Creative Associates の制作の流れを説明します。",
            step: flowSteps.map((s) => ({
              "@type": "HowToStep",
              name: s.name,
              text: s.text,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          私たちについて（初めての方へ）
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Creative Associates は、ナイトワーク・メンズエステ・ガールズバーを中心とした
          BtoB向けクリエイティブ制作スタジオです。
          Web制作・ロゴ・漫画制作・撮影をワンストップで提供しています。
        </p>
      </section>

      {/* 強み */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちの強み</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="ca-card p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">① 業界特化のUX設計</h3>
            <p className="ca-text">
              ナイトワーク・メンズエステなど業界特化のデザイン・導線設計に精通。
              指名率UP・応募率UPにつながる設計を行います。
            </p>
          </div>

          <div className="ca-card p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">② 白×青ブランドで信頼性UP</h3>
            <p className="ca-text">
              清潔感・信頼感のある白×青デザインで店舗・ブランドの価値を高めます。
            </p>
          </div>

          <div className="ca-card p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">③ 4サービス一括提供</h3>
            <p className="ca-text">
              Web / ロゴ / 漫画 / 撮影 の4サービスをまとめて依頼可能。
              面倒な外注管理は不要です。
            </p>
          </div>

          <div className="ca-card p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">④ 制作後の運用サポート</h3>
            <p className="ca-text">
              サイト運用・更新・改善・LP追加・広告バナー制作など、
              制作後も継続的なサポートが可能です。
            </p>
          </div>
        </div>
      </section>

      {/* 制作の流れ */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">制作の流れ</h2>

        <ol className="space-y-6">
          {flowSteps.map((s, i) => (
            <li key={i} className="ca-card p-4">
              <b>{`0${i + 1}. ${s.name}：`}</b> {s.text}
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mb-24" data-aos="fade-up">
        <FAQ />
      </section>

      {/* CTA */}
      <section className="text-center" data-aos="fade-up">
        <a href="/contact" className="btn-blue px-8 py-4 text-lg inline-block">
          まずは無料相談する
        </a>
      </section>

    </main>
  );
}
