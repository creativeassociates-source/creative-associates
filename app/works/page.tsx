"use client";

import Image from "next/image";
import Link from "next/link";
import { worksData } from "./worksData";

export default function WorksPage() {
  const worksArray = Object.entries(worksData).map(([id, item]) => ({
    id,
    title: item.title,
    category: item.category,
    image: item.mainImage,
    link: `/works/${id}`,
  }));

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="text-center mb-20" data-aos="fade-up">
        <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-blue-600 text-4xl">🗂️</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">制作実績</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Web・ロゴ・漫画・撮影の制作実績をご紹介します。  
          ナイトワーク・メンズエステ・ガールズバーなど専門領域の豊富な経験があります。
        </p>
      </section>

      {/* Works Grid */}
      <section className="grid md:grid-cols-3 gap-10 mb-20" data-aos="fade-up">

        {worksArray.map((work) => (
          <Link
            key={work.id}
            href={work.link}
            className="ca-card overflow-hidden group"
          >
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-4">
              <p className="text-blue-600 font-semibold text-sm">{work.category}</p>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition">
                {work.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center" data-aos="fade-up">
        <a href="/contact" className="btn-blue px-8 py-4 text-lg inline-block">
          制作について相談する
        </a>
      </section>

    </main>
  );
}
