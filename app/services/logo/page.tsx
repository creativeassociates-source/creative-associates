// app/services/logo/page.tsx
export default function LogoServicePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-blue-600 text-4xl">✒️</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ロゴデザイン（高級感・華やかさ）
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ナイトワーク・メンズエステ店舗向けに、印象に残るロゴデザインを制作。
          高級感・華やかさ・清潔感を兼ね備えたブランドイメージを構築します。
        </p>
      </section>

      {/* メリット */}
      <section className="grid md:grid-cols-2 gap-8 mb-20" data-aos="fade-up">
        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">① 高級感あるロゴ</h3>
          <p className="ca-text">
            キャバクラ・メンズエステなどの世界観に合わせ、印象的で高級感のあるロゴを制作します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">② 華やかさ × 清潔感</h3>
          <p className="ca-text">
            清潔感と華やかさのバランスを調整。女性客・男性客どちらにも好印象を与えるデザインに仕上げます。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">③ AI / PNG / SVGなど全形式納品</h3>
          <p className="ca-text">
            Web・印刷・SNS全てで使えるように、複数ファイル形式で納品します。
          </p>
        </div>

        <div className="ca-card p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">④ 世界観に合わせたデザイン</h3>
          <p className="ca-text">
            夜職・美容・高級店など、ジャンルごとに合った色・形・フォルムをご提案します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24" data-aos="fade-up">
        <a 
          href="/contact" 
          className="btn-blue text-lg px-8 py-4 inline-block"
        >
          ロゴデザインの相談をする
        </a>
      </section>

    </main>
  );
}
