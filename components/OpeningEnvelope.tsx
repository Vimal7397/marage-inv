"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface OpeningEnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function OpeningEnvelope({ onOpen, isOpen }: OpeningEnvelopeProps) {
  const [opening, setOpening] = useState(false);
  const [visible, setVisible] = useState(!isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(false);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setOpening(true);
    onOpen(); // Trigger audio and open state immediately

    // Trigger joyful celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f2c06e", "#ffdfaf", "#6b0508", "#ffffff", "#ffd700", "#e11d48"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setVisible(false);
    }, 700);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
        opening ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "linear-gradient(to bottom right, rgba(242, 192, 110, 0.45), rgba(95, 0, 5, 0.98), #2d0005)",
      }}
    >
      {/* Falling flower petals animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        {[
          { left: "15%", delay: "-2s", duration: "18s", color: "#f2c06e", sway: "20px", size: "20px" },
          { left: "30%", delay: "-7s", duration: "22s", color: "#8d1c18", sway: "-24px", size: "24px" },
          { left: "55%", delay: "-4s", duration: "19s", color: "#ffdfaf", sway: "18px", size: "18px" },
          { left: "75%", delay: "-12s", duration: "24s", color: "#f2c06e", sway: "-15px", size: "22px" },
          { left: "88%", delay: "-1s", duration: "20s", color: "#f6e3c1", sway: "25px", size: "16px" },
          { left: "8%", delay: "-15s", duration: "25s", color: "#8d1c18", sway: "-20px", size: "22px" },
          { left: "45%", delay: "-9s", duration: "21s", color: "#f2c06e", sway: "15px", size: "20px" },
          { left: "68%", delay: "-5s", duration: "17s", color: "#ffdfaf", sway: "-18px", size: "19px" },
        ].map((petal, i) => (
          <div
            key={i}
            className="absolute top-[-40px]"
            style={{
              left: petal.left,
              color: petal.color,
              fontSize: petal.size,
              animation: `ambient-fall ${petal.duration} ease-in-out ${petal.delay} infinite`,
              // @ts-ignore
              "--sway": petal.sway,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <g>
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(120 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(180 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(240 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(300 12 12)" />
              </g>
              <circle cx="12" cy="12" r="1.8" fillOpacity="0.45" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Envelope Card */}
      <div className="relative z-10 px-4 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px]">
        {/* Pulsing Royal Wax Seal */}
        <div
          className="absolute left-1/2 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          style={{
            top: "54px",
            width: "60px",
            height: "60px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle at 30% 30%, #f7cca0, #f2c06e 45%, #b57a1b 90%)",
            zIndex: 30,
            animation: "seal-pulse 2.2s ease-in-out infinite",
          }}
          onClick={handleOpen}
          aria-label="முத்திரை - கிளிக் செய்து திறக்கவும்"
        >
          {/* Sacred Ganesha / Heart Glyph */}
          <span className="text-[26px] leading-none drop-shadow select-none">🕉</span>
        </div>

        {/* Envelope Body */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl transition-all"
          style={{
            background: "linear-gradient(180deg, #6b0508 0%, #4a0305 100%)",
            border: "1px solid rgba(242, 192, 110, 0.4)",
            boxShadow:
              "0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 50px rgba(242, 192, 110, 0.2)",
          }}
        >
          {/* Subtle column decoration side accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <img
              src="/images/themes/mandap-darkred/column-decoration.webp"
              alt=""
              className="absolute left-[-20px] top-[-10%] h-[120%] w-auto object-contain -scale-x-100"
            />
            <img
              src="/images/themes/mandap-darkred/column-decoration.webp"
              alt=""
              className="absolute right-[-20px] top-[-10%] h-[120%] w-auto object-contain"
            />
          </div>

          <div className="relative z-10 text-center px-6 pt-20 pb-9 sm:pt-24 sm:pb-11">
            {/* Deity Invocation */}
            <p className="font-tamil text-[11px] sm:text-[12px] tracking-wider text-[#ffdfaf] opacity-90 mb-1.5 font-medium">
              ஸ்ரீ பெரியாண்டிச்சி அம்மன் துணை &bull; ஸ்ரீ கருப்பண்ணன் சாமி துணை
            </p>

            <div className="inline-block px-3 py-1 rounded-full mb-3 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold text-[#f2c06e] bg-[#f2c06e]/10 border border-[#f2c06e]/30">
              திருமண அழைப்பிதழ்
            </div>

            <h1 className="mb-2 flex flex-col items-center leading-tight">
              <span className="font-tamil block w-full text-center text-xl sm:text-2xl font-bold text-[#f2c06e] tracking-wide">
                P. ஸ்ரீ ராமச்சந்திரன் <span className="text-sm font-normal text-[#ffdfaf]">(எ) பீம்</span>
              </span>
              <span className="text-[12px] tracking-wider text-[#ffdfaf]/80 font-mono">M.B.A.</span>

              <span
                className="block w-full text-center text-xl sm:text-2xl my-1 text-[#f2c06e]"
                style={{ fontFamily: '"Alex Brush", cursive' }}
              >
                &amp;
              </span>

              <span className="font-tamil block w-full text-center text-xl sm:text-2xl font-bold text-[#f2c06e] tracking-wide">
                S. கோபிகா
              </span>
              <span className="text-[12px] tracking-wider text-[#ffdfaf]/80 font-mono">M.Com.</span>
            </h1>

            {/* Floral ornament divider */}
            <div className="flex items-center justify-center gap-3 my-3">
              <div
                className="w-12 h-px"
                style={{ background: "linear-gradient(to right, transparent, #f2c06e)" }}
              />
              <span style={{ color: "#f2c06e", opacity: 0.85 }} className="text-base">
                ❦
              </span>
              <div
                className="w-12 h-px"
                style={{ background: "linear-gradient(to left, transparent, #f2c06e)" }}
              />
            </div>

            <div className="text-[14px] sm:text-[16px] mb-1 font-semibold text-[#f2c06e] font-tamil">
              20-11-2026 வெள்ளிக்கிழமை
            </div>

            <div className="text-[11px] sm:text-[12px] text-[#ffdfaf] opacity-90 max-w-xs mx-auto mb-5 font-tamil leading-relaxed">
              தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து மணமக்களை ஆசீர்வதிக்க அன்புடன் அழைக்கின்றோம்
            </div>

            {/* Action button */}
            <button
              type="button"
              onClick={handleOpen}
              className="relative inline-flex items-center justify-center px-7 py-2.5 sm:px-8 sm:py-3 font-semibold rounded-full tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 group shadow-lg cursor-pointer"
              style={{
                backgroundColor: "#f2c06e",
                color: "#6b0508",
                boxShadow: "0 6px 20px rgba(242, 192, 110, 0.45)",
              }}
            >
              <span className="flex items-center gap-2">
                <span>✦</span>
                <span className="font-tamil tracking-wide text-xs sm:text-sm font-bold">
                  அழைப்பிதழை திறக்கவும் &bull; OPEN
                </span>
                <span>✦</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
