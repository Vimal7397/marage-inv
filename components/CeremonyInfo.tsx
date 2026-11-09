"use client";

import React from "react";

export default function CeremonyInfo() {
  return (
    <section
      id="ceremony"
      className="relative isolate w-full"
      style={{ marginTop: "calc(0.05215 * var(--st-w))" }}
    >
      {/* Decorative Side Mandap Columns */}
      <img
        src="/images/themes/mandap-darkred/column-decoration.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-19.388%] z-[1] h-auto w-[48.299%] max-w-none object-contain opacity-80"
        style={{
          top: "calc(0.34014 * var(--st-w))",
          transform: "scaleX(-1)",
        }}
        loading="lazy"
      />
      <img
        src="/images/themes/mandap-darkred/column-decoration.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[70.975%] z-[1] h-auto w-[48.299%] max-w-none object-contain opacity-80"
        style={{ top: "calc(0.34014 * var(--st-w))" }}
        loading="lazy"
      />

      <div className="relative z-10 flex w-full flex-col items-center px-4 sm:px-[6%]">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-1">
          <span className="font-tamil text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            திருமண நிகழ்வு
          </span>
          <h2
            className="uppercase font-bold text-[19px] md:text-[25px] text-center tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            CEREMONY DETAILS
          </h2>
        </div>

        {/* Traditional Auspicious Greeting */}
        <div className="font-tamil my-4 p-4 rounded-xl max-w-[620px] text-center border border-[#f2c06e]/30 bg-[#2d0005]/60 shadow-lg">
          <p className="text-[14px] sm:text-[15px] font-bold text-[#f2c06e] mb-1">
            அன்புடையீர்! வணக்கம்.
          </p>
          <p className="text-[12px] sm:text-[13.5px] leading-relaxed text-[#ffdfaf] opacity-95">
            நிகழும் மங்களகரமான <strong className="text-[#f2c06e]">ஸ்ரீ பராபவ வருடம் கார்த்திகை மாதம் 4-ம் நாள் (20-11-2026) வெள்ளிக்கிழமை</strong> சுக்கிலபட்சம் தசமி திதி, பூரட்டாதி நட்சத்திரம், சித்தயோகம் கூடிய சுபயோக சுபதினத்தில் அதிகாலை <strong className="text-[#f2c06e]">4-30 மணிக்குமேல் 6-00 மணிக்குள் பிரம்ம முகூர்த்தத்தில்</strong>
          </p>
        </div>

        {/* Parents & Lineage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[660px] my-3">
          {/* Groom's Family Details */}
          <div className="flex flex-col p-4 rounded-xl border border-[#f2c06e]/25 bg-[#4a0307]/50 shadow-md font-tamil text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#f2c06e] font-bold border-b border-[#f2c06e]/20 pb-1 mb-2 text-center">
              மணமகன் வழி மரபு
            </span>
            <p className="text-[11.5px] text-[#ffdfaf] opacity-85 leading-relaxed">
              சேலம் மாவட்டம், வாழப்பாடி வட்டம், மின்னாம்பள்ளி,<br />
              தெய்வத்திரு. <strong className="text-[#ffdfaf]">சுந்தரராஜன்</strong> - திருமதி. <strong className="text-[#ffdfaf]">எல்லம்மாள்</strong> மகன் வழி பேரனும்,<br />
              தெய்வத்திருவாளர்கள். <strong className="text-[#ffdfaf]">அம்மாவாசை</strong> - <strong className="text-[#ffdfaf]">நல்லம்மாள்</strong> மகள் வழி பேரனும்,<br />
              திரு. <strong className="text-[#f2c06e]">S. சேட்டு (எ) பெரியசாமி</strong> - திருமதி. <strong className="text-[#f2c06e]">ஜெயா</strong> குமாரனுமான திருநிறைச்செல்வன்
            </p>
            <div className="mt-3 pt-2 border-t border-[#f2c06e]/15 text-center">
              <span className="text-[17px] sm:text-[19px] font-bold text-[#f2c06e] block">
                P. ஸ்ரீ ராமச்சந்திரன்
              </span>
              <span className="text-[12px] text-[#ffdfaf]">
                (எ) பீம் <span className="font-mono text-[11px] text-[#f2c06e]/85">M.BA.,</span>
              </span>
            </div>
          </div>

          {/* Bride's Family Details */}
          <div className="flex flex-col p-4 rounded-xl border border-[#f2c06e]/25 bg-[#4a0307]/50 shadow-md font-tamil text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#f2c06e] font-bold border-b border-[#f2c06e]/20 pb-1 mb-2 text-center">
              மணமகள் வழி மரபு
            </span>
            <p className="text-[11.5px] text-[#ffdfaf] opacity-85 leading-relaxed">
              சேலம் மாவட்டம், உடையார்பட்டி, அதிகாரப்பட்டி காலனி,<br />
              தெய்வத்திருவாளர்கள். <strong className="text-[#ffdfaf]">அந்தோணி (எ) குப்புசாமி</strong> - <strong className="text-[#ffdfaf]">செல்லம்மாள்</strong> மகன் வழி பேத்தியும்,<br />
              திரு. <strong className="text-[#ffdfaf]">முள்ளுவெட்டி</strong> - தெய்வத்திருமதி. <strong className="text-[#ffdfaf]">மணிமேகலை</strong> மகள் வழி பேத்தியும்,<br />
              திரு. <strong className="text-[#f2c06e]">K. செந்தில்குமார்</strong> - திருமதி. <strong className="text-[#f2c06e]">கோமதி</strong> குமாரத்தியுமான திருநிறைச்செல்வி
            </p>
            <div className="mt-3 pt-2 border-t border-[#f2c06e]/15 text-center">
              <span className="text-[17px] sm:text-[19px] font-bold text-[#f2c06e] block">
                S. கோபிகா
              </span>
              <span className="text-[12px] text-[#ffdfaf]">
                <span className="font-mono text-[11px] text-[#f2c06e]/85">M.Com.,</span>
              </span>
            </div>
          </div>
        </div>

        {/* Announcement Message */}
        <div className="font-tamil text-center text-[12px] sm:text-[13.5px] leading-relaxed text-[#ffdfaf] my-3 max-w-[600px] px-2">
          <span>
            இல்வாழ்க்கைத் துணைவியாக்கப் பெரியோர்களால் நிச்சயிக்கப்பட்டு மேற்படி இத்திருமணம் 
            அம்மாபேட்டை காமராஜர் நகர் காலனி <strong className="text-[#f2c06e]">ஸ்ரீ மரகதவல்லி சமேத பட்டீஸ்வரர் திருக்கோவிலில்</strong> நடைபெறுகிறது.
          </span>
        </div>

        {/* Ceremony Location & Date Lockup */}
        <div
          className="flex w-full flex-col items-center mt-3"
          style={{ gap: "calc(0.02 * var(--st-w))" }}
        >
          <div
            className="relative flex flex-col items-center gap-1.5 text-center"
            style={{ fontFamily: '"Baskerville", "Times New Roman", serif' }}
          >
            <div style={{ color: "#f2c06e" }}>
              <span className="font-tamil whitespace-pre-line text-[15px] md:text-[19px] uppercase leading-relaxed tracking-[0.04em] font-bold">
                ஸ்ரீ மரகதவல்லி சமேத பட்டீஸ்வரர் திருக்கோவில்
              </span>
              <div className="text-[12px] md:text-[14px] text-[#ffdfaf] opacity-90 font-tamil mt-0.5">
                காமராஜர் நகர் காலனி, அம்மாபேட்டை, சேலம் மாவட்டம்
              </div>
            </div>

            <div
              className="flex w-full max-w-[280px] md:max-w-[340px] items-center justify-between text-[11px] md:text-[13px] uppercase whitespace-nowrap gap-x-3 mt-3 px-3 py-1 rounded-full border border-[#f2c06e]/30 bg-[#f2c06e]/10"
              style={{
                color: "#ffdfaf",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              <span>காலை 4:30 - 6:00 மணி</span>
              <span>&bull;</span>
              <span>வெள்ளிக்கிழமை</span>
            </div>

            {/* Big Date Display */}
            <div
              className="flex items-center gap-3 md:gap-4 mt-2"
              style={{ color: "#f2c06e" }}
            >
              <span
                className="text-[54px] md:text-[74px] leading-none font-bold"
                style={{ fontFamily: '"Baskerville", "Times New Roman", serif' }}
              >
                20
              </span>

              <div
                className="h-[46px] w-[1.5px] md:h-[62px]"
                style={{ backgroundColor: "#f2c06e", opacity: 0.85 }}
              />

              <div className="flex flex-col items-start justify-center gap-0.5 text-left font-semibold">
                <span
                  className="text-[17px] md:text-[23px] uppercase tracking-wider"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  NOVEMBER
                </span>
                <span
                  className="text-[14px] md:text-[18px] uppercase tracking-wider text-[#ffdfaf]"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  2026 &bull; கார்த்திகை 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
