// app/components/FloatingContact.tsx
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition z-50 flex items-center justify-center"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
