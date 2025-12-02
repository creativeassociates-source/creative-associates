// app/works/worksData.ts
export type WorkItem = {
    title: string;
    category: string;
    mainImage: string;
    description: string;
    features: string[];
    gallery: string[];
    
  };
  
  export const worksData: Record<string, WorkItem> = {
    web1: {
      title: "メンズエステ店舗サイト",
      category: "Web制作",
      mainImage: "/works/web1.jpg",
      description:
        "ナイトワーク特化の店舗サイト制作。白×青の安心感あるUIと、指名率向上の導線設計に特化しています。",
      features: [
        "レスポンシブ対応（スマホ最適化）",
        "スタッフ表示・料金表・出勤管理システム",
        "SEO最適化（地域名＋メンズエステ）",
        "清潔感 × 信頼性のあるUI",
      ],
      gallery: [
        "/works/web1.jpg",
        "/works/web1-2.jpg",
        "/works/web1-3.jpg"
      ],
    },
  
    logo1: {
      title: "キャバクラ ロゴデザイン",
      category: "ロゴデザイン",
      mainImage: "/works/logo1.jpg",
      description:
        "キャバクラ向けの高級感 × 華やかさ × 清潔感を意識したロゴ。",
      features: [
        "AI / PNG / SVG の全形式納品",
        "黒背景・白背景の２パターン展開",
        "世界観に合わせたオリジナルデザイン",
      ],
      gallery: [
        "/works/logo1.jpg",
        "/works/logo1-2.jpg"
      ],
    },
  };
  