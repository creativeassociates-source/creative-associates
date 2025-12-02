"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function LineFloating() {
  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        animate-fadeIn
      "
    >
      {/* ラベル（PCのみ表示） */}
      <span
        className="
          hidden md:block
          bg-blue-600 text-white text-sm font-medium
          px-4 py-2 rounded-xl shadow-lg
          transition hover:bg-blue-700
        "
      >
        LINEで相談
      </span>

      {/* 丸ボタン */}
      <Link
        href="https://line.me/R/ti/p/あなたのLINE公式URL"
        target="_blank"
        className="
          bg-blue-600 text-white w-14 h-14
          flex items-center justify-center
          rounded-full shadow-xl
          transition transform
          hover:bg-blue-700 hover:scale-110
          active:scale-95
        "
      >
        <MessageCircle size={28} />
      </Link>
    </div>
  );
}
