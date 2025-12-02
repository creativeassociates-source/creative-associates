// app/services/comics/page.tsx
export default function ComicsServicePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-blue-600 text-4xl">📘</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          漫画制作（PR・求人）
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ナイトワーク・メンズエステ向けに、PR・求人に特化した漫画を制作。
          視覚的に分かりやすく、成約率UPに直結するコンテンツをご提供します。
        </p>
      </section>

      {/* メリット */}
      <section className="grid md:grid-cols-2 gap-8 mb-20" data-aos="fade-up">
        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">① 読まれる・理解される</h3>
          <p className="ca-text">
            文字より理解しやすく、ユーザーがスムーズにサービス内容を理解できます。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">② 求人に強い漫画</h3>
          <p className="ca-text">
            求人応募率が 2〜3倍に向上した事例多数。女性が安心して応募できる心理設計を行います。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">③ SNS/LP で使いやすい</h3>
          <p className="ca-text">
            Instagram・LP・Webサイトなど、幅広く使えるサイズで納品します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">④ 高品質イラスト</h3>
          <p className="ca-text">
            プロのイラストレーターが制作。ナイトワークの世界観に合わせて演出を調整します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24" data-aos="fade-up">
        <a 
          href="/contact" 
          className="btn-blue text-lg px-8 py-4 inline-block"
        >
          漫画制作の相談をする
        </a>
      </section>

    </main>
  );
}
