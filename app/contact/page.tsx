// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    if (res.ok) setDone(true);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 bg-white">
      
      {/* -------------------- Hero -------------------- */}
      <section className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          お問い合わせ
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Web制作・ロゴ・漫画制作・撮影に関するご相談やお見積りなど、お気軽にお問合せください。
        </p>
      </section>

      {/* -------------------- Form Card -------------------- */}
      <section
        className="bg-gray-50 border rounded-xl p-8 shadow-sm"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {done ? (
          <div className="py-10 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              送信が完了しました！
            </h2>
            <p className="text-gray-700">
              担当者より24時間以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            {/* 名前 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                お名前
              </label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* メール */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                メールアドレス
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* 種類 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                お問い合わせ内容
              </label>
              <select
                name="type"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 focus:outline-none"
              >
                <option>Web制作について</option>
                <option>ロゴデザインについて</option>
                <option>漫画制作について</option>
                <option>撮影サービスについて</option>
                <option>お見積り依頼</option>
                <option>その他</option>
              </select>
            </div>

            {/* 本文 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                詳細（任意）
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* 送信 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "送信中…" : "送信する"}
            </button>
          </form>
        )}
      </section>

      {/* -------------------- 補助セクション -------------------- */}
      <section className="mt-20 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          まずはお気軽にお問い合わせください
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          新規開業・既存店リニューアル・求人強化・ロゴ刷新・店舗撮影など  
          あなたの店舗に最適なクリエイティブを提案します。
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
        >
          もう一度問い合わせる
        </a>
      </section>
    </main>
  );
}
