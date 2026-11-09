"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate w-full"
      style={{
        marginTop: "calc(0.07710 * var(--st-w))",
        minHeight: "calc(1.82 * var(--st-w))",
      }}
    >
      {/* Decorative Traditional Indian Mandap Backdrop Framework */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 z-0 -translate-x-1/2"
        style={{
          top: "calc(-0.05215 * var(--st-w))",
          width: "111.791%",
          height: "calc(1.82540 * var(--st-w))",
        }}
      >
        {/* Golden Floral Base Ornament */}
        <img
          src="/images/themes/mandap-darkred/goldenfloral-decoration.webp"
          alt=""
          className="absolute left-[5.477%] top-[89.441%] h-auto w-[89.249%] max-w-none object-contain"
          loading="eager"
        />
        {/* Arch Frame */}
        <img
          src="/images/themes/mandap-darkred/arch-frame.webp"
          alt=""
          className="absolute left-[1.217%] top-[7.205%] h-auto w-[97.769%] max-w-none object-contain drop-shadow-md"
          loading="eager"
        />
        {/* Left Mandap Column */}
        <img
          src="/images/themes/mandap-darkred/column-decoration.webp"
          alt=""
          className="absolute left-[-8.114%] top-[19.503%] h-auto w-[59.229%] max-w-none object-contain"
          style={{ transform: "scaleX(-1)" }}
          loading="eager"
        />
        {/* Right Mandap Column */}
        <img
          src="/images/themes/mandap-darkred/column-decoration.webp"
          alt=""
          className="absolute left-[48.276%] top-[19.503%] h-auto w-[59.229%] max-w-none object-contain"
          loading="eager"
        />
        {/* Kolam / Rangoli Motif */}
        <img
          src="/images/themes/mandap-darkred/kolam-decoration.webp"
          alt=""
          className="absolute left-[39.959%] top-[74.298%] h-auto w-[19.878%] max-w-none object-contain"
          loading="eager"
        />
        {/* Left Temple Hanging Bells */}
        <img
          src="/images/themes/mandap-darkred/bell-decoration.webp"
          alt=""
          className="absolute left-[2.231%] top-[-5.590%] h-auto w-[25.355%] max-w-none object-contain animate-[float_4s_ease-in-out_infinite]"
          style={{ transform: "scaleX(-1)" }}
          loading="eager"
        />
        {/* Right Temple Hanging Bells */}
        <img
          src="/images/themes/mandap-darkred/bell-decoration.webp"
          alt=""
          className="absolute left-[71.602%] top-[-5.590%] h-auto w-[25.355%] max-w-none object-contain animate-[float_4.5s_ease-in-out_infinite_0.5s]"
          loading="eager"
        />
        {/* Om Sacred Glyph Decoration */}
        <img
          src="/images/themes/mandap-darkred/om-decoration.webp"
          alt=""
          className="absolute left-[41.780%] top-[17.143%] h-auto w-[16.440%] max-w-none object-contain"
          loading="eager"
        />
      </div>

      {/* Main Couple Announcement Text */}
      <div
        className="absolute left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-center"
        style={{
          top: "calc(0.60 * var(--st-w))",
          width: "82%",
        }}
      >
        {/* Soft Golden Aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[150%] rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(242, 192, 110, 0.25) 0%, rgba(107, 5, 8, 0.1) 50%, transparent 70%)",
          }}
        />

        {/* Top Deities Invocations */}
        <div className="flex flex-col items-center gap-1 mb-2 font-tamil">
          <span className="text-[10px] sm:text-[12px] md:text-[13px] tracking-wider text-[#ffdfaf] font-medium opacity-90">
            ஸ்ரீ பெரியாண்டிச்சி அம்மன் துணை &bull; ஸ்ரீ கருப்பண்ணன் சாமி துணை
          </span>
          <span className="text-[12px] sm:text-[14px] md:text-[15px] tracking-widest font-bold text-[#f2c06e] uppercase">
            திருமண அழைப்பிதழ்
          </span>
        </div>

        <p
          className="relative whitespace-pre-line text-[10px] uppercase tracking-[0.22em] md:text-[13px] font-semibold text-[#ffdfaf]/80 mt-1"
          style={{
            fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif',
          }}
        >
          SAVE THE DATE &bull; 20-11-2026
        </p>

        {/* Couple Names */}
        <div
          className="flex w-full flex-col items-center leading-none mt-2 md:mt-3"
          style={{ color: "#f2c06e" }}
        >
          <div className="flex flex-col items-center w-full justify-center">
            <span
              className="font-tamil font-bold tracking-normal leading-tight text-center"
              style={{
                fontSize: "max(24px, calc(0.062 * var(--st-w)))",
                color: "#f2c06e",
              }}
            >
              P. ஸ்ரீ ராமச்சந்திரன்
            </span>
            <span className="text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#ffdfaf] mt-0.5">
              (எ) பீம் <span className="text-xs text-[#f2c06e]/80">M.B.A.</span>
            </span>
          </div>

          <span
            className="my-1 md:my-1.5"
            style={{
              fontFamily: '"Alex Brush", cursive',
              color: "#f2c06e",
              fontSize: "max(22px, calc(0.046 * var(--st-w)))",
              lineHeight: 1,
            }}
          >
            &amp;
          </span>

          <div className="flex flex-col items-center w-full justify-center">
            <span
              className="font-tamil font-bold tracking-normal leading-tight text-center"
              style={{
                fontSize: "max(24px, calc(0.062 * var(--st-w)))",
                color: "#f2c06e",
              }}
            >
              S. கோபிகா
            </span>
            <span className="text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#ffdfaf] mt-0.5">
              <span className="text-xs text-[#f2c06e]/80">M.Com.</span>
            </span>
          </div>
        </div>

        {/* Location subtitle */}
        <div className="mt-3 text-[11px] sm:text-[13px] md:text-[14px] font-tamil text-[#ffdfaf] opacity-90 max-w-sm">
          <span>அம்மாபேட்டை &bull; அயோத்தியாப்பட்டணம் &bull; சேலம்</span>
        </div>
      </div>
    </section>
  );
}
