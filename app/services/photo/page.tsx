// app/services/photo/page.tsx
export default function PhotoServicePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-blue-600 text-4xl">📸</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          撮影サービス（キャスト・店舗）
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ナイトワーク専門のフォトグラファーが、キャスト写真・店舗写真を高品質に撮影。
          SNS映え・サイト映えする美しい写真で魅力を最大化します。
        </p>
      </section>

      {/* メリット */}
      <section className="grid md:grid-cols-2 gap-8 mb-20" data-aos="fade-up">
        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">① “盛れる”写真</h3>
          <p className="ca-text">
            ナイトワーク特化の撮影経験を活かし、盛れる・映える写真を撮影します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">② 明るく清潔な印象に</h3>
          <p className="ca-text">
            白×青トーンに合う“清潔感”の強い写真に編集します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">③ SNS / LP 最適化</h3>
          <p className="ca-text">
            Instagram・Twitter・Webサイト・LPなど、用途に応じて最適な写真を撮影。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">④ キャストの魅力を最大化</h3>
          <p className="ca-text">
            魅力的に映るポージングや表情をレクチャーしながら、自然で綺麗な写真を撮影します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24" data-aos="fade-up">
        <a 
          href="/contact" 
          className="btn-blue text-lg px-8 py-4 inline-block"
        >
          撮影について相談する
        </a>
      </section>

    </main>
  );
}
