import Image from "next/image";
import Link from "next/link";
import { worksData } from "../worksData";

/* ================================
   動的 OGP（SNSカード最適化）
================================ */
export function generateMetadata({ params }: { params: { id: string } }) {
  const work = worksData[params.id];

  if (!work) return {};

  return {
    title: `${work.title} | 制作実績`,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [
        `/api/og?title=${encodeURIComponent(work.title)}&category=${encodeURIComponent(work.category)}`
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        `/api/og?title=${encodeURIComponent(work.title)}&category=${encodeURIComponent(work.category)}`
      ],
    },
  };
}


/* ================================
   詳細ページ本体
================================ */
type WorkDetailProps = {
  params: { id: string };
};

export default function WorkDetailPage({ params }: WorkDetailProps) {
  const work = worksData[params.id];

  if (!work) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">実績が見つかりません</h1>
        <Link href="/works" className="text-blue-600 underline mt-6 inline-block">
          実績一覧に戻る
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2" data-aos="fade-up">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/works" className="hover:text-blue-600">Works</Link>
        <span>/</span>
        <span className="text-gray-700">{work.title}</span>
      </nav>

      {/* Hero Image */}
      <section data-aos="fade-up">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-10 bg-gray-100">
          {work.mainImage ? (
            <Image
              src={work.mainImage}
              alt={work.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
        </div>
      </section>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">
        {work.title}
      </h1>

      {/* Category */}
      <p className="text-blue-600 font-semibold mb-6" data-aos="fade-up">
        {work.category}
      </p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-10" data-aos="fade-up">
        {work.description}
      </p>

      {/* Features */}
      <section className="space-y-6 mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">制作ポイント</h2>

        {work.features?.map((f, i) => (
          <div key={i} className="ca-card p-4">
            <p className="ca-text">{f}</p>
          </div>
        ))}
      </section>

      {/* Gallery */}
      {work.gallery && work.gallery.length > 0 && (
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ギャラリー</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {work.gallery.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-56 rounded-xl overflow-hidden shadow-md bg-gray-100"
              >
                <Image
                  src={img}
                  alt={`gallery ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="text-center mt-20" data-aos="fade-up">
        <a href="/contact" className="btn-blue px-8 py-4 text-lg inline-block">
          制作について相談する
        </a>
      </section>

    </main>
  );
}
