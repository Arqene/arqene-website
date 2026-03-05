"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f6f6f4] px-6 font-futura">
      <div className="text-center max-w-xl font-futura">

        {/* 404 Number */}
        <h1 className="text-[90px] md:text-[120px] font-light tracking-[0.12em] text-[#2e2e2e]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl uppercase tracking-[0.18em] text-[#3a3a3a]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-6 text-sm md:text-base text-[#6b6458] leading-relaxed">
          The page you are looking for may have been moved, deleted, or never existed.
          Please return to the homepage to continue exploring Arquene.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            mt-10
            px-10 py-3
            border border-[#d9d9d4]
            bg-[#f6f6f4]
            text-[11px] font-semibold tracking-[0.18em] uppercase
            text-[#5b554b]
            transition-all duration-300
            hover:bg-[#cbcbc7]
            hover:border-[#cbcbc7]
            hover:-translate-y-[2px]
          "
        >
          Back to Homepage
        </Link>

      </div>
    </main>
  );
}