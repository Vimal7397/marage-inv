"use client";

import React, { useState } from "react";
import { Navigation, Bus, MapPin } from "lucide-react";

export default function VenueMap() {
  const [activeTab, setActiveTab] = useState<"reception" | "temple">("reception");

  return (
    <section
      id="venue"
      className="relative isolate w-full mt-10 md:mt-14"
      style={{ paddingInline: "5%" }}
    >
      <div className="flex w-full flex-col items-center text-center">
        <div className="flex flex-col items-center text-center gap-1 mb-3">
          <span className="font-tamil text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            திருமண & வரவேற்பு இடங்கள்
          </span>
          <h3
            className="uppercase font-bold text-[19px] md:text-[25px] tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            VENUE & TRANSIT LOCATIONS
          </h3>
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex items-center gap-2 p-1 rounded-full border border-[#f2c06e]/30 bg-[#2d0005]/70 mb-5 font-tamil">
          <button
            type="button"
            onClick={() => setActiveTab("reception")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "reception"
                ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                : "text-[#ffdfaf] hover:text-[#f2c06e]"
            }`}
          >
            அன்னை கஸ்தூரிபா மண்டபம் (வரவேற்பு)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("temple")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "temple"
                ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                : "text-[#ffdfaf] hover:text-[#f2c06e]"
            }`}
          >
            ஸ்ரீ பட்டீஸ்வரர் திருக்கோவில் (மண இடம்)
          </button>
        </div>

        {/* Selected Venue Details */}
        {activeTab === "reception" ? (
          <div className="whitespace-pre-line mx-auto flex max-w-[320px] md:max-w-[460px] flex-col items-center text-[13px] md:text-[15px] leading-relaxed mb-5 font-tamil">
            <span className="font-bold text-[#f2c06e] text-[16px] sm:text-[18px]">
              அன்னை கஸ்தூரிபா திருமண மண்டபம்
            </span>
            <span className="text-[#ffdfaf] opacity-90 mt-1">
              இரயில்வே கேட் அருகில், அயோத்தியாப்பட்டணம், சேலம் மாவட்டம்
            </span>
            <span className="text-xs text-[#f2c06e]/80 mt-0.5">
              நிகழ்வு: 20-11-2026 காலை 7:00 AM முதல் வரவேற்பும் - விருந்தும்
            </span>
          </div>
        ) : (
          <div className="whitespace-pre-line mx-auto flex max-w-[320px] md:max-w-[460px] flex-col items-center text-[13px] md:text-[15px] leading-relaxed mb-5 font-tamil">
            <span className="font-bold text-[#f2c06e] text-[16px] sm:text-[18px]">
              ஸ்ரீ மரகதவல்லி சமேத பட்டீஸ்வரர் திருக்கோவில்
            </span>
            <span className="text-[#ffdfaf] opacity-90 mt-1">
              காமராஜர் நகர் காலனி, அம்மாபேட்டை, சேலம் மாவட்டம்
            </span>
            <span className="text-xs text-[#f2c06e]/80 mt-0.5">
              நிகழ்வு: 20-11-2026 அதிகாலை 4:30 - 6:00 மணிக்குள் பிரம்ம முகூர்த்தம்
            </span>
          </div>
        )}

        {/* Embedded Interactive Map */}
        <div className="relative flex flex-col items-center gap-4 w-full max-w-[340px] md:max-w-[560px]">
          <div
            className="w-full h-[250px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border"
            style={{ borderColor: "rgba(242, 192, 110, 0.4)" }}
          >
            <iframe
              title="Wedding Venue Map"
              className="w-full h-full border-0"
              src={
                activeTab === "reception"
                  ? "https://maps.google.com/maps?q=Ayothiapattinam%20Railway%20Gate%20Salem&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  : "https://maps.google.com/maps?q=Ammapet%20Salem%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              }
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Get directions button */}
          <a
            href={
              activeTab === "reception"
                ? "https://www.google.com/maps/dir/?api=1&destination=Ayothiapattinam+Railway+Station+Salem"
                : "https://www.google.com/maps/dir/?api=1&destination=Ammapet+Salem+Tamil+Nadu"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md font-tamil cursor-pointer"
            style={{
              backgroundColor: "rgba(242, 192, 110, 0.15)",
              border: "1px solid rgba(242, 192, 110, 0.5)",
              color: "#f2c06e",
            }}
          >
            <Navigation className="w-4 h-4 fill-current" />
            <span>கூகுள் மேப்பில் வழிகாண &bull; Get Directions</span>
          </a>
        </div>

        {/* Bus Transit Details from Card */}
        <div className="w-full max-w-[340px] md:max-w-[560px] mt-6 p-4 rounded-xl border border-[#f2c06e]/30 bg-[#2d0005]/70 text-left font-tamil shadow-lg">
          <div className="flex items-center gap-2 text-[#f2c06e] font-bold text-sm mb-2">
            <Bus className="w-4 h-4" />
            <span>பேருந்து வழித்தட விபரம் (Bus Routes):</span>
          </div>

          <div className="flex flex-wrap gap-1.5 my-2">
            {["4", "10", "20", "32", "48", "54", "74"].map((busNum) => (
              <span
                key={busNum}
                className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#f2c06e]/20 border border-[#f2c06e]/40 text-[#f2c06e]"
              >
                பஸ் எண் {busNum}
              </span>
            ))}
          </div>

          <div className="flex items-start gap-2 text-xs text-[#ffdfaf] mt-2 opacity-90">
            <MapPin className="w-4 h-4 text-[#f2c06e] shrink-0 mt-0.5" />
            <span>
              <strong>இறங்கும் பேருந்து நிறுத்தம்:</strong> அயோத்தியாப்பட்டணம் இரயில்வே கேட் (Ayothiyapattanam Railway Gate).
            </span>
          </div>
        </div>

        {/* Golden line decoration */}
        <img
          src="/images/themes/mandap-darkred/goldenline-decoration.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none mx-auto block h-auto max-w-none object-contain my-8"
          style={{ width: "calc(0.65986 * var(--st-w))" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
