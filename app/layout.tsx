// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AOSWrapper from "./components/AOSWrapper";
import FloatingContact from "./components/FloatingContact";
import LineFloating from "./components/LineFloating";

// ==============================
// Font（Inter 使用：エラーゼロ / UX最適）
// ==============================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ==============================
// Metadata（SEO 最適化版）
// ==============================
export const metadata: Metadata = {
  metadataBase: new URL("https://creative-associates.jp"),
  title: {
    default: "Creative Associates | ナイトワーク専門クリエイティブ制作",
    template: "%s | Creative Associates",
  },
  description:
    "ナイトワーク・メンズエステ・ガールズバー・デリヘル専門のWeb制作・ロゴ制作・漫画制作・撮影を提供する制作スタジオ。SEO最適化・集客導線・ブランド構築までワンストップ対応。",
  keywords: [
    "ナイトワーク",
    "メンズエステ",
    "風俗",
    "ガールズバー",
    "キャバクラ",
    "Web制作",
    "ロゴ制作",
    "漫画制作",
    "撮影",
    "ナイトレジャー",
    "クリエイティブ制作会社"
  ],
  openGraph: {
    title: "Creative Associates",
    description:
      "ナイトワーク専門のWeb制作・ロゴデザイン・漫画制作・撮影スタジオ。",
    url: "https://creative-associates.jp",
    siteName: "Creative Associates",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Creative Associates OGP"
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp.png"],
    creator: "@creativeassociates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ==============================
// Root Layout（全ページ共通）
// ==============================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="bg-white">
      <head>
        {/* ===============================
            WebSite（検索ボックス構造化データ）
        =============================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Creative Associates",
              url: "https://creative-associates.jp",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://creative-associates.jp/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ===============================
            Organization（企業情報）
        =============================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Creative Associates",
              url: "https://creative-associates.jp",
              logo: "https://creative-associates.jp/ogp.png",
              description:
                "ナイトワーク専門のWeb制作・ロゴ制作・漫画制作・撮影を行う制作スタジオ。",
              sameAs: [
                "https://instagram.com/creativeassociates",
                "https://twitter.com/creativeassociates"
              ]
            }),
          }}
        />

        {/* ===============================
            FAQ（よくある質問 Schema）
        =============================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "ナイトワーク専門でも依頼できますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "はい。Creative Associates はナイトワーク・メンズエステ・ガールズバー専門の制作スタジオです。",
                  },
                },
                {
                  "@type": "Question",
                  name: "スマホだけで更新できますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "可能です。すべての管理画面はスマホ最適化されており、キャスト・出勤・料金など全て編集可能です。",
                  },
                },
                {
                  "@type": "Question",
                  name: "撮影とWeb制作をまとめて依頼できますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "はい。撮影・Web制作・ロゴ制作・漫画制作をワンストップで対応できます。",
                  },
                },
              ],
            }),
          }}
        />

        {/* ===============================
            HowTo（制作の流れ Schema）
        =============================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "制作依頼の流れ",
              step: [
                {
                  "@type": "HowToStep",
                  name: "お問い合わせ",
                  text: "お問い合わせフォームまたはLINEからご相談いただけます。",
                },
                {
                  "@type": "HowToStep",
                  name: "ヒアリング",
                  text: "目的・ターゲット・課題などを丁寧にヒアリングします。",
                },
                {
                  "@type": "HowToStep",
                  name: "制作開始",
                  text: "Web / ロゴ / 漫画 / 撮影など必要なクリエイティブを制作します。",
                },
                {
                  "@type": "HowToStep",
                  name: "納品 / 公開",
                  text: "最終確認後、データ納品・HP公開まで対応します。",
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} antialiased bg-white text-gray-900`}
      >
        <AOSWrapper />
        <Header />

        {/* 全ページ共通の上部余白 */}
        <main className="min-h-screen bg-white pt-24">{children}</main>

        <Footer />
        <FloatingContact />
        <LineFloating />
      </body>
    </html>
  );
}
