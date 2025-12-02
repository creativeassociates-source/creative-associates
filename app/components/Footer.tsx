// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Creative Associates
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            ナイトワーク・メンズエステ・ガールズバー・デリヘル専門の
            Web制作・ロゴ・漫画制作・撮影スタジオ。
            清潔感・信頼性の高いクリエイティブを提供します。
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">サービス</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/services/web" className="hover:text-blue-600 transition">
                Web制作
              </Link>
            </li>
            <li>
              <Link href="/services/logo" className="hover:text-blue-600 transition">
                ロゴデザイン
              </Link>
            </li>
            <li>
              <Link href="/services/comics" className="hover:text-blue-600 transition">
                漫画制作
              </Link>
            </li>
            <li>
              <Link href="/services/photo" className="hover:text-blue-600 transition">
                撮影サービス
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">メニュー</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/works" className="hover:text-blue-600 transition">
                制作実績
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                会社情報
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Creative Associates. All rights reserved.
      </div>
    </footer>
  );
}
