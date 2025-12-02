// app/services/web/page.tsx
export default function WebServicePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-blue-600 text-4xl">🌐</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Web制作（店舗サイト）
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ナイトワーク・メンズエステ向けに、清潔感・信頼性の高い店舗サイトを制作します。
          デザイン・導線・SEOまでワンストップで対応します。
        </p>
      </section>

      {/* メリット */}
      <section className="grid md:grid-cols-2 gap-8 mb-20" data-aos="fade-up">
        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">① 指名率UPの導線設計</h3>
          <p className="ca-text">
            お客様が迷わずキャストを選べるよう、視線誘導や心理パターンを踏まえたUIを設計します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">② 清潔感 × 高級感デザイン</h3>
          <p className="ca-text">
            白×青の安心感あるトーンで、既存店・新規店に最適な信頼性の高いサイトを構築します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">③ スマホ最適化（90%のユーザー）</h3>
          <p className="ca-text">
            ナイトワークの閲覧ユーザーは9割スマホ。スマホで最も見やすく操作しやすい構成に調整します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">④ SEO（地域名 × 業種）最適化</h3>
          <p className="ca-text">
            「地域名 × メンズエステ」など検索されやすいキーワードを意識した構成と内部SEO対策を実施します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24" data-aos="fade-up">
        <a 
          href="/contact" 
          className="btn-blue text-lg px-8 py-4 inline-block"
        >
          Web制作の相談をする
        </a>
      </section>

    </main>
  );
}
