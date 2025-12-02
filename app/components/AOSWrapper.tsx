"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper() {
  useEffect(() => {
    // AOS.default が存在すればそっちを使う（TS対策）
    const aos = (AOS as any).default || AOS;

    aos.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
      delay: 50,
      disable: () => window.innerWidth < 768,
    });
  }, []);

  return null;
}
