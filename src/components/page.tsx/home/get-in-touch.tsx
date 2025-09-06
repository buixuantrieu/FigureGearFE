"use client";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

export default function GetInTouch() {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("Missing property")) {
        return;
      }
      originalError(...args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <section className="w-screen h-screen relative">
      <Spline scene="https://prod.spline.design/OWYtmTRk1CopNt5n/scene.splinecode" />
      <div className="w-[140px] rounded-[5px] h-[36px] bg-[#d5d4e7] absolute right-[20px] bottom-[20px]"></div>
    </section>
  );
}