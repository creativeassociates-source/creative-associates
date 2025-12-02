// app/components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ナイトワーク専門でも依頼できますか？",
    answer:
      "はい、可能です。当社はナイトレジャー・メンズエステ・デリヘル・キャバクラなど専門の制作実績があります。",
  },
  {
    question: "スマホだけで更新できますか？",
    answer:
      "可能です。管理画面はスマホ対応しており、出勤管理・料金変更・画像更新も全てスマホで完結できます。",
  },
  {
    question: "撮影とWeb制作をまとめて依頼できますか？",
    answer:
      "はい。撮影・Web制作・ロゴ・漫画制作をワンストップで対応できます。世界観を統一した制作が可能です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto mt-20 mb-28 px-6">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        よくある質問
      </h2>

      <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition-transform text-blue-600 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
