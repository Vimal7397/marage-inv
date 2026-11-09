"use client";

import React, { useState } from "react";
import { Phone, Heart } from "lucide-react";

export default function FamilySection() {
  const [activeTab, setActiveTab] = useState<"groom" | "bride">("groom");

  return (
    <section
      id="family"
      className="relative isolate w-full mt-10 md:mt-16"
      style={{ paddingInline: "5%" }}
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center text-center gap-1 mb-5">
          <span className="font-tamil text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            குடும்பத்தினர் &amp; உற்றார் உறவினர்கள்
          </span>
          <h2
            className="uppercase font-bold text-[19px] md:text-[24px] text-center tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            FAMILIES &amp; WELL-WISHERS
          </h2>
          <p className="font-tamil text-xs sm:text-sm text-[#ffdfaf]/80">
            இரு இல்லங்களின் இனிய அழைப்பு
          </p>
        </div>

        {/* Tab Switcher: Groom Family vs Bride Family */}
        <div className="flex justify-center gap-2 p-1 rounded-full border border-[#f2c06e]/30 bg-[#2d0005]/80 mb-6 font-tamil">
          <button
            type="button"
            onClick={() => setActiveTab("groom")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "groom"
                ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                : "text-[#ffdfaf] hover:text-[#f2c06e]"
            }`}
          >
            மணமகன் இல்லத்தார் (தங்கள் அன்புள்ள)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bride")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "bride"
                ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                : "text-[#ffdfaf] hover:text-[#f2c06e]"
            }`}
          >
            மணமகள் இல்லத்தார் (யானும் அவ்வண்ணமே)
          </button>
        </div>

        {/* Tab 1: Groom Side */}
        {activeTab === "groom" && (
          <div className="w-full max-w-[560px] p-5 rounded-2xl border border-[#f2c06e]/30 bg-[#2d0005]/70 shadow-xl font-tamil text-left">
            <h3 className="text-base font-bold text-[#f2c06e] border-b border-[#f2c06e]/20 pb-2 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 fill-current text-[#f2c06e]" />
              <span>தங்கள் அன்புள்ள &bull; Groom's Family</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#ffdfaf]">
              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">பெற்றோர்:</span>
                <p className="font-bold text-sm text-[#ffdfaf]">
                  திரு. S. சேட்டு (எ) பெரியசாமி - திருமதி. P. ஜெயா
                </p>
                <span className="text-[11px] opacity-75">SRC Projects, PVT Ltd (op)</span>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">அக்கா:</span>
                <p className="font-medium text-[#ffdfaf]">P. வினோதினி</p>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">உறவினர்கள்:</span>
                <p className="font-medium text-[#ffdfaf]">
                  திரு. S. லட்சுமணன் - L. சிவகாமி <span className="text-[11px] opacity-75">(Vijay Crusher (op))</span>
                </p>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">அண்ணன் - தம்பிகள்:</span>
                <p className="font-medium text-[#ffdfaf] leading-relaxed">
                  L. விஜய் <span className="font-mono text-[11px] text-[#f2c06e]">B.Com., (CA)</span>, 
                  V. வசந்தகுமார் <span className="font-mono text-[11px] text-[#f2c06e]">M.BA.,</span>, 
                  L. விமல் <span className="font-mono text-[11px] text-[#f2c06e]">B.E., (CSE)</span>
                </p>
              </div>

              <div className="pt-2 border-t border-[#f2c06e]/15">
                <span className="text-[#f2c06e] font-semibold block text-xs">முகவரி:</span>
                <p className="opacity-90">மின்னாம்பள்ளி, வாழப்பாடி வட்டம், சேலம் மாவட்டம்.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-[#f2c06e] font-bold text-xs sm:text-sm">
                <span className="flex items-center gap-1.5 bg-[#f2c06e]/10 px-3 py-1 rounded-full border border-[#f2c06e]/30">
                  <Phone className="w-3.5 h-3.5" /> 93448 20432
                </span>
                <span className="flex items-center gap-1.5 bg-[#f2c06e]/10 px-3 py-1 rounded-full border border-[#f2c06e]/30">
                  <Phone className="w-3.5 h-3.5" /> 63741 13705
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Bride Side */}
        {activeTab === "bride" && (
          <div className="w-full max-w-[560px] p-5 rounded-2xl border border-[#f2c06e]/30 bg-[#2d0005]/70 shadow-xl font-tamil text-left">
            <h3 className="text-base font-bold text-[#f2c06e] border-b border-[#f2c06e]/20 pb-2 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 fill-current text-[#f2c06e]" />
              <span>யானும் அவ்வண்ணமே கோரும் &bull; Bride's Family</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#ffdfaf]">
              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">பெற்றோர்:</span>
                <p className="font-bold text-sm text-[#ffdfaf]">
                  திரு. K. செந்தில்குமார் - திருமதி. S. கோமதி
                </p>
                <span className="text-[11px] opacity-75">Centring Contractor</span>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">அண்ணன்:</span>
                <p className="font-medium text-[#ffdfaf]">
                  S. சதீரீஷ் <span className="font-mono text-[11px] text-[#f2c06e]">M.A., (Eng Lit)</span>
                </p>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">அக்கா - மாமா:</span>
                <p className="font-medium text-[#ffdfaf]">
                  S. ரமோதனி <span className="font-mono text-[11px] text-[#f2c06e]">M.Com.,</span> - M. பிரதாப் <span className="font-mono text-[11px] text-[#f2c06e]">RNRM</span>
                </p>
                <span className="text-[11px] opacity-75">Nursing Supervisor, Kavery Hospital, Salem</span>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">தாய்மாமன்:</span>
                <p className="font-medium text-[#ffdfaf]">காளிதாஸ் - சத்யா</p>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">அத்தை - மாமா:</span>
                <p className="font-medium text-[#ffdfaf]">
                  P. முத்துசாமி - ஈஸ்வரி &bull; A. ராஜா - மேரி
                </p>
              </div>

              <div>
                <span className="text-[#f2c06e] font-semibold block text-xs uppercase">தம்பி - தங்கைகள்:</span>
                <p className="font-medium text-[#ffdfaf]">அதீஸ், சௌதீஸ், கோதனஸ்ரீ</p>
              </div>

              <div className="pt-2 border-t border-[#f2c06e]/15">
                <span className="text-[#f2c06e] font-semibold block text-xs">முகவரி:</span>
                <p className="opacity-90">அதிகாரப்பட்டி காலனி, உடையார்பட்டி, சேலம் மாவட்டம்.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-[#f2c06e] font-bold text-xs sm:text-sm">
                <span className="flex items-center gap-1.5 bg-[#f2c06e]/10 px-3 py-1 rounded-full border border-[#f2c06e]/30">
                  <Phone className="w-3.5 h-3.5" /> 90475 69091
                </span>
                <span className="flex items-center gap-1.5 bg-[#f2c06e]/10 px-3 py-1 rounded-full border border-[#f2c06e]/30">
                  <Phone className="w-3.5 h-3.5" /> 90804 97495
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
