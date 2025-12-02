export default function Head() {
    return (
      <>
        {/* 構造化データ（Organization Schema） */}
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
                "ナイトレジャー業界専門のWeb制作・ロゴデザイン・漫画制作・撮影を行うクリエイティブ制作スタジオ。",
              sameAs: [
                "https://instagram.com",
                "https://twitter.com",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+81-00-0000-0000",
                  contactType: "customer service",
                  availableLanguage: ["Japanese"],
                },
              ],
            }),
          }}
        />
  
        {/* OGPのfallback（必要なら追加できます）*/}
        <meta property="og:image" content="/ogp.png" />
        <meta name="twitter:image" content="/ogp.png" />
      </>
    );
  }
  