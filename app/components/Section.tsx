// app/components/Section.tsx
import React from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-20 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        {title}
      </h2>

      <div className="bg-zinc-900/80 border border-zinc-700 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur">
        {children}
      </div>
    </section>
  );
}
