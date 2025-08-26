"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  // if (!visible) return null;

  return (
    <div className={
      `fixed inset-0 z-1000 ${!loaded && 'backdrop-blur-xs'} `
    }>
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-slate-400/60 origin-center transition-transform duration-1000 ${loaded ? "-translate-x-full -translate-y-full" : "translate-x-0 translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }}
      ></div>
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-slate-400/60 origin-center transition-transform duration-1000 ${loaded ? "translate-x-full -translate-y-full" : "translate-x-0 translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-slate-400/60 transition-transform duration-1000 ${loaded ? "translate-y-full" : "translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
      ></div>
      {!loaded && <Image src="/images/GifLoading.gif" alt="loading" width={65} height={200} quality={100} className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />}
    </div>
  );
}
