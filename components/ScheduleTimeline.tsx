"use client";

import React from "react";

const scheduleItems = [
  {
    date: "15-11-2026",
    time: "10:45 AM",
    title: "நிச்சயார்த்தம் (Engagement Ceremony)",
    venue: "அதிகாரப்பட்டி மணமகள் இல்லம்",
    description: "காலை 10-45 மணிக்குமேல் 11-45 மணிக்குள் அதிகாரப்பட்டி மணமகள் இல்லத்தில் சுப நிச்சயார்த்தம்.",
    image: "/images/themes/mandap-darkred/wreath.webp",
  },
  {
    date: "20-11-2026",
    time: "04:30 AM",
    title: "பிரம்ம முகூர்த்தம் (Brahma Muhurtham)",
    venue: "ஸ்ரீ மரகதவல்லி சமேத பட்டீஸ்வரர் திருக்கோவில்",
    description: "அதிகாலை 4-30 முதல் 6-00 மணிக்குள் திருமாங்கல்ய தாரணம் மங்கள வைபவம்.",
    image: "/images/themes/mandap-darkred/om-decoration.webp",
  },
  {
    date: "20-11-2026",
    time: "07:00 AM",
    title: "திருமண வரவேற்பு (Wedding Reception)",
    venue: "அன்னை கஸ்தூரிபா திருமண மண்டபம்",
    description: "இரயில்வே கேட் அருகில் அன்னை கஸ்தூரிபா திருமண மண்டபத்தில் தம்பதியர் வரவேற்பு.",
    image: "/images/themes/mandap-darkred/swan.webp",
  },
  {
    date: "20-11-2026",
    time: "07:30 AM",
    title: "அறுசுவை திருமண விருந்து (Traditional Feast)",
    venue: "மண்டப உணவுக் கூடம்",
    description: "வருகைதரும் சுற்றமும் நட்பும் சூழ அறுசுவை சைவ திருமண விருந்து உபசரிப்பு.",
    image: "/images/themes/mandap-darkred/chair.webp",
  },
  {
    date: "20-11-2026",
    time: "09:30 AM",
    title: "உறவினர்கள் வாழ்த்து & புகைப்படங்கள் (Blessings & Photos)",
    venue: "மணமேடை",
    description: "பெரியோர்கள் மற்றும் நண்பர்கள் மணமக்களை மலர்தூவி வாழ்த்தும் வைபவம்.",
    image: null,
  },
  {
    date: "20-11-2026",
    time: "11:30 AM",
    title: "மங்கள ஆரத்தி & நிறைவு (Mangala Aarathi)",
    venue: "அன்னை கஸ்தூரிபா திருமண மண்டபம்",
    description: "இரு இல்லங்களின் இனிய அழைப்பில் மங்கள ஆரத்தியுடன் சுப நிகழ்வு இனிதே நிறைவு.",
    image: null,
  },
];

export default function ScheduleTimeline() {
  return (
    <section
      id="schedule"
      className="relative isolate w-full mt-10 md:mt-16"
      style={{ paddingInline: "6%" }}
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center text-center gap-1 mb-8">
          <span className="font-tamil text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            நிகழ்ச்சி நிரல்
          </span>
          <h2
            className="uppercase font-bold text-[19px] md:text-[25px] text-center tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            WEDDING SCHEDULE
          </h2>
        </div>

        {/* Timeline Grid */}
        <ol className="relative mx-auto grid w-full max-w-[540px] grid-cols-[minmax(0,1fr)_20px_minmax(0,1.8fr)] items-center gap-x-4 md:gap-x-6 gap-y-7 md:gap-y-8 font-tamil">
          {scheduleItems.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === scheduleItems.length - 1;

            return (
              <li key={idx} className="contents group">
                {/* Time & Date */}
                <div className="relative flex flex-col items-end justify-center text-right">
                  <span className="text-[10px] sm:text-[11px] text-[#ffdfaf] opacity-80 font-mono">
                    {item.date}
                  </span>
                  <span
                    className="text-[13px] sm:text-[16px] font-bold tracking-wide leading-tight text-[#f2c06e]"
                  >
                    {item.time}
                  </span>
                </div>

                {/* Node & Connecting Line */}
                <div
                  aria-hidden="true"
                  className="relative flex items-center justify-center self-stretch"
                >
                  {/* Line going down */}
                  {!isLast && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 w-0.5 top-1/2 -bottom-7 md:-bottom-8"
                      style={{
                        backgroundColor: "rgba(242, 192, 110, 0.4)",
                      }}
                    />
                  )}

                  {/* Line coming from above */}
                  {!isFirst && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 w-0.5 -top-7 md:-top-8 bottom-1/2"
                      style={{
                        backgroundColor: "rgba(242, 192, 110, 0.4)",
                      }}
                    />
                  )}

                  {/* Golden Center Node */}
                  <span
                    className="relative block h-3.5 w-3.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: "#f2c06e",
                      boxShadow: "0 0 0 3px rgba(242, 192, 110, 0.25)",
                    }}
                  />
                </div>

                {/* Event Description */}
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#f2c06e] leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-[#ffdfaf] opacity-90 mt-0.5 leading-relaxed">
                    {item.description}
                  </span>
                  <span className="text-[10px] text-[#f2c06e]/75 mt-0.5 italic">
                    📍 {item.venue}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
