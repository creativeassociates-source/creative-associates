// app/page.tsx
import Link from "next/link";
import FAQ from "./components/FAQ";
import { Globe, PenTool, BookOpen, Camera } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 bg-white">

      {/* -------------------- Hero -------------------- */}
      <section className="text-center mb-24" data-aos="fade-up">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-900">
          ナイトワーク専門の Web / クリエイティブ制作
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Web制作・ロゴ・漫画制作・キャストの撮影や動画撮影をワンストップで提供。
          ナイトワーク専門のBtoB特化の制作サービスです。
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
        >
          無料相談する
        </a>
      </section>

      {/* -------------------- 制作実績バナー -------------------- */}
      <section className="mb-24">
        <h2
          className="text-3xl font-bold mb-8 text-center text-gray-900"
          data-aos="fade-up"
        >
          制作実績はこちらから
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <Link href="/services/web" data-aos="fade-up" data-aos-delay="50">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg cursor-pointer transition flex flex-col items-center">
              <Globe size={40} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                Web制作
              </h3>
              <p className="text-sm text-gray-600 text-center">
                店舗サイトの実績を見る
              </p>
            </div>
          </Link>

          <Link href="/services/logo" data-aos="fade-up" data-aos-delay="100">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg cursor-pointer transition flex flex-col items-center">
              <PenTool size={40} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                ロゴデザイン
              </h3>
              <p className="text-sm text-gray-600 text-center">
                ロゴ実績を見る
              </p>
            </div>
          </Link>

          <Link href="/services/comics" data-aos="fade-up" data-aos-delay="150">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg cursor-pointer transition flex flex-col items-center">
              <BookOpen size={40} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                漫画制作
              </h3>
              <p className="text-sm text-gray-600 text-center">
                漫画制作の実績を見る
              </p>
            </div>
          </Link>

          <Link href="/services/photo" data-aos="fade-up" data-aos-delay="200">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg cursor-pointer transition flex flex-col items-center">
              <Camera size={40} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                撮影サービス
              </h3>
              <p className="text-sm text-gray-600 text-center">
                撮影実績を見る
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* -------------------- Services Cards -------------------- */}
      <section className="grid md:grid-cols-4 gap-6 mb-24">

        <Link href="/services/web" data-aos="fade-up" data-aos-delay="50">
          <div className="p-6 rounded-xl bg-gray-50 border hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Web制作
            </h3>
            <p className="text-gray-600 text-sm">
              指名につながる店舗サイトを制作します。
            </p>
          </div>
        </Link>

        <Link href="/services/logo" data-aos="fade-up" data-aos-delay="100">
          <div className="p-6 rounded-xl bg-gray-50 border hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ロゴデザイン
            </h3>
            <p className="text-gray-600 text-sm">
              高級感・華やかさを表現するロゴを制作。
            </p>
          </div>
        </Link>

        <Link href="/services/comics" data-aos="fade-up" data-aos-delay="150">
          <div className="p-6 rounded-xl bg-gray-50 border hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              漫画制作
            </h3>
            <p className="text-gray-600 text-sm">
              PRや求人の成約率を上げる漫画コンテンツ。
            </p>
          </div>
        </Link>

        <Link href="/services/photo" data-aos="fade-up" data-aos-delay="200">
          <div className="p-6 rounded-xl bg-gray-50 border hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              撮影サービス
            </h3>
            <p className="text-gray-600 text-sm">
              ナイトワーク専門の盛れる写真撮影。
            </p>
          </div>
        </Link>

      </section>

      {/* -------------------- CTA -------------------- */}
      <section
        className="text-center py-16 bg-gray-100 rounded-xl"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          まずは無料相談から
        </h2>
        <p className="text-gray-600 mb-6">
          新規開業・既存店リニューアル・求人強化など、お気軽にご相談ください。
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
        >
          お問い合わせする
        </a>
      </section>

      {/* -------------------- FAQ Section -------------------- */}
      <FAQ />

    </main>
  );
}
