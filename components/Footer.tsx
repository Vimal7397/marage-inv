"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-12 md:mt-16 font-tamil">
      <div className="relative z-10 flex w-full flex-col items-center text-center px-4">
        {/* Closing Warm Blessing Quote */}
        <div className="p-5 rounded-2xl border border-[#f2c06e]/30 bg-[#2d0005]/80 max-w-[560px] shadow-xl text-center">
          <span className="text-[14px] sm:text-[16px] font-bold text-[#f2c06e] block mb-1">
            இரு இல்லங்களின் இனிய அழைப்பு
          </span>
          <p className="text-[12px] sm:text-[13.5px] leading-relaxed text-[#ffdfaf] opacity-95">
            தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து மணமக்களை ஆசீர்வதிக்க அன்புடன் அழைக்கின்றோம்.
          </p>

          {/* Quick Contact Numbers */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 pt-3 border-t border-[#f2c06e]/20 text-[11px] sm:text-[12px] text-[#f2c06e]">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>மணமகள் இல்லத்தார்: <strong>90475 69091</strong>, <strong>90804 97495</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>மணமகன் இல்லத்தார்: <strong>93448 20432</strong>, <strong>63741 13705</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Temple Silhouette Base Decoration */}
      <div
        className="relative -z-10 w-full overflow-hidden"
        style={{ height: "calc(0.59864 * var(--st-w))" }}
      >
        <img
          src="/images/themes/mandap-darkred/temple-decoration.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-4.195%] bottom-[-8%] h-auto w-[108.390%] max-w-none object-contain"
          loading="eager"
        />
      </div>
    </footer>
  );
}
