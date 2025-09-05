"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ILoadingOverlayProps {
  loading: boolean
}
export default function LoadingOverlay({ loading }: ILoadingOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div className={
      `fixed inset-0 z-1000 ${loading && 'backdrop-blur-xs'} flex justify-center items-center`
    }>
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-slate-400/60 origin-center transition-transform duration-1000 ${!loading ? "-translate-x-full -translate-y-full" : "translate-x-0 translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }}
      ></div>
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-slate-400/60 origin-center transition-transform duration-1000 ${!loading ? "translate-x-full -translate-y-full" : "translate-x-0 translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-slate-400/60 transition-transform duration-1000 ${!loading ? "translate-y-full" : "translate-y-0"
          }`}
        style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
      ></div>
      {loading && <Image src="/images/GifLoading.gif" alt="loading" width={60} height={80} className="relative z-10000" />}
      {loading && <div className=" w-12 h-12 bg-center rounded-full fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" style={{ backgroundImage: "url()", backgroundSize: "135%" }}></div>}
    </div>
  );
}
