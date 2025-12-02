"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [serviceOpen, setServiceOpen] = useState(false); // PC dropdown
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Creative Associates
        </Link>

        {/* PC Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* Services dropdown (クリックで開閉) */}
          <div className="relative">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Services <ChevronDown size={16} />
            </button>

            {serviceOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg min-w-[180px] p-2">
                <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-50">
                  Web制作
                </Link>
                <Link href="/services/logo" className="block px-4 py-2 hover:bg-gray-50">
                  ロゴデザイン
                </Link>
                <Link href="/services/comics" className="block px-4 py-2 hover:bg-gray-50">
                  漫画制作
                </Link>
                <Link href="/services/photo" className="block px-4 py-2 hover:bg-gray-50">
                  撮影サービス
                </Link>
              </div>
            )}
          </div>

          <Link href="/works" className="hover:text-blue-600">Works</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>

        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 space-y-4 text-gray-700">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-blue-600">Home</Link>

          <div className="space-y-1">
            <p className="font-semibold text-gray-900">Services</p>
            <Link href="/services/web" onClick={() => setOpen(false)} className="block pl-4 hover:text-blue-600">Web制作</Link>
            <Link href="/services/logo" onClick={() => setOpen(false)} className="block pl-4 hover:text-blue-600">ロゴデザイン</Link>
            <Link href="/services/comics" onClick={() => setOpen(false)} className="block pl-4 hover:text-blue-600">漫画制作</Link>
            <Link href="/services/photo" onClick={() => setOpen(false)} className="block pl-4 hover:text-blue-600">撮影サービス</Link>
          </div>

          <Link href="/works" onClick={() => setOpen(false)} className="block hover:text-blue-600">Works</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-blue-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
