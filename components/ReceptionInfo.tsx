"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Heart, Clock } from "lucide-react";

interface ReceptionInfoProps {
  onOpenRSVP?: () => void;
}

export default function ReceptionInfo({ onOpenRSVP }: ReceptionInfoProps = {}) {
  // Wedding Muhurtham date: November 20, 2026 at 04:30 AM IST
  const weddingDate = new Date("2026-11-20T04:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  // November 2026 has 30 days. Nov 1, 2026 starts on Sunday.
  // Columns: Mo Tu We Th Fr Sa Su
  // Empty slots before 1st: 6 (Mon, Tue, Wed, Thu, Fri, Sat)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  // Generate iCal (.ics) download for "Add to Calendar"
  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sri Ramachandran & Gopika//Wedding Invitation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண நிகழ்வு
DESCRIPTION:அம்மாபேட்டை அருள்மிகு பட்டீஸ்வரர் திருக்கோவில் திருமணம் & அயோத்தியாப்பட்டணம் அன்னை கஸ்தூரிபா திருமண மண்டபத்தில் வரவேற்பும் - விருந்தும்.
LOCATION:Annai Kasthuriba Thirumana Mandapam, Near Railway Gate, Ayothiyapattanam, Salem
DTSTART:20261119T230000Z
DTEND:20261120T100000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "ramachandran-gopika-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="reception"
      className="relative isolate w-full"
      style={{ marginTop: "calc(0.05215 * var(--st-w))" }}
    >
      {/* Decorative Golden Top Frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-[1]"
        style={{
          paddingTop: "calc(0.04308 * var(--st-w))",
          paddingBottom: "calc(0.04762 * var(--st-w))",
        }}
      >
        <img
          src="/images/themes/mandap-darkred/golden-frame-decoration.webp"
          alt=""
          className="mx-auto block h-auto max-w-none object-contain"
          style={{ width: "calc(0.56236 * var(--st-w))" }}
          loading="lazy"
        />
      </div>

      {/* Decorative Side Flowers */}
      <img
        src="/images/themes/mandap-darkred/flower-decoration.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-7.710%] z-[1] h-auto w-[39.909%] max-w-none object-contain opacity-80"
        style={{
          top: "calc(0.38776 * var(--st-w))",
          transform: "scaleX(-1)",
        }}
        loading="lazy"
      />
      <img
        src="/images/themes/mandap-darkred/flower-decoration.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[69.161%] z-[1] h-auto w-[39.909%] max-w-none object-contain opacity-80"
        style={{ top: "calc(0.38776 * var(--st-w))" }}
        loading="lazy"
      />

      <div className="relative z-10 flex w-full flex-col items-center px-4 sm:px-[8.5%]">
        <div className="flex flex-col items-center text-center gap-1">
          <span className="font-tamil text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            வரவேற்பு & விருந்து உபசரிப்பு
          </span>
          <h2
            className="uppercase font-bold text-[19px] md:text-[25px] text-center tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            RECEPTION & FEAST
          </h2>
        </div>

        {/* Reception Venue & Timings */}
        <div
          className="flex w-full flex-col items-center mt-3 text-center"
          style={{ color: "#ffdfaf" }}
        >
          <h3 className="font-tamil text-[16px] md:text-[21px] font-bold text-[#f2c06e]">
            அன்னை கஸ்தூரிபா திருமண மண்டபம்
          </h3>
          <p className="font-tamil text-[12px] md:text-[14px] text-[#ffdfaf] opacity-90 mt-0.5">
            இரயில்வே கேட் அருகில், அயோத்தியாப்பட்டணம், சேலம் மாவட்டம்
          </p>

          <div
            className="flex w-full max-w-[260px] md:max-w-[320px] items-center justify-between text-[13px] md:text-[15px] uppercase whitespace-nowrap gap-x-3 mt-3 px-3 py-1 rounded-full border border-[#f2c06e]/30 bg-[#f2c06e]/10 font-tamil"
            style={{ color: "#f2c06e" }}
          >
            <span>காலை 7-00 மணி முதல்</span>
            <span>&bull;</span>
            <span>வெள்ளிக்கிழமை</span>
          </div>

          {/* Big Date Display */}
          <div
            className="flex items-center gap-4 mt-3"
            style={{ color: "#f2c06e", fontFamily: '"Times New Roman", Times, serif' }}
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
              <span className="text-[17px] md:text-[23px] uppercase tracking-wider">
                NOVEMBER
              </span>
              <span className="text-[14px] md:text-[18px] uppercase tracking-wider text-[#ffdfaf]">
                2026 &bull; கார்த்திகை 4
              </span>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div className="flex items-center justify-center flex-col mt-6 w-full max-w-md">
            <h4 className="font-tamil text-[13px] md:text-[15px] uppercase tracking-widest font-semibold text-[#ffdfaf]">
              மணநாளுக்கான எதிர்பார்ப்பு &bull; Countdown
            </h4>

            {mounted ? (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 w-full max-w-[340px]">
                {[
                  { label: "நாட்கள்", sub: "Days", value: timeLeft.days },
                  { label: "மணி", sub: "Hours", value: timeLeft.hours },
                  { label: "நிமிடம்", sub: "Mins", value: timeLeft.minutes },
                  { label: "நொடி", sub: "Secs", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-xl shadow-md border"
                    style={{
                      background: "rgba(242, 192, 110, 0.08)",
                      borderColor: "rgba(242, 192, 110, 0.35)",
                    }}
                  >
                    <span className="text-[20px] sm:text-[26px] font-bold text-[#f2c06e] leading-none font-mono">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-tamil text-[#ffdfaf] mt-1 font-medium">
                      {item.label}
                    </span>
                    <span className="text-[8px] uppercase tracking-wider text-[#ffdfaf]/60">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm mt-2 text-[#ffdfaf]">Calculating...</p>
            )}
          </div>

          {/* Key Schedule Highlights */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-6 font-tamil">
            <div className="flex flex-col items-center">
              <span className="text-[11px] md:text-[12px] uppercase tracking-wider text-[#ffdfaf]">
                பிரம்ம முகூர்த்தம்
              </span>
              <span className="text-[18px] md:text-[22px] font-bold text-[#f2c06e]">
                04:30 - 06:00 AM
              </span>
            </div>

            <div className="w-px h-8 bg-[#f2c06e]/30" />

            <div className="flex flex-col items-center">
              <span className="text-[11px] md:text-[12px] uppercase tracking-wider text-[#ffdfaf]">
                வரவேற்பு & விருந்து
              </span>
              <span className="text-[18px] md:text-[22px] font-bold text-[#f2c06e]">
                07:00 AM முதல்
              </span>
            </div>
          </div>

          {/* Decorative Calendar Frame & Grid for November 2026 */}
          <div className="relative mx-auto mt-8 md:mt-10 w-full max-w-[270px] md:max-w-[330px] pt-[52px] pb-[52px] md:pt-[66px] md:pb-[66px]">
            <img
              src="/images/themes/mandap-darkred/calendar-frame.webp"
              aria-hidden="true"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: "calc(100% + 154px)",
                maxWidth: "none",
                height: "auto",
              }}
            />

            <div className="relative z-10 w-full rounded-lg overflow-hidden text-[#f2c06e]">
              <div
                className="text-center py-2 text-[14px] md:text-[17px] font-bold tracking-wide border-b font-tamil"
                style={{
                  borderColor: "rgba(242, 192, 110, 0.3)",
                }}
              >
                November 2026 (கார்த்திகை)
              </div>

              {/* Day Headers (Mon - Sun) */}
              <div
                className="grid grid-cols-7 border-b-2"
                style={{ borderColor: "#f2c06e" }}
              >
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, i) => (
                  <div
                    key={i}
                    className="text-center py-1 text-[10px] md:text-[11px] font-medium opacity-70"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Day Grid: Nov 1 is Sunday (6 empty slots) */}
              <div className="grid grid-cols-7 gap-y-0.5 px-1 py-1.5 text-center">
                {/* 6 Empty slots before Sunday Nov 1 */}
                <div className="h-[28px] md:h-[32px]" />
                <div className="h-[28px] md:h-[32px]" />
                <div className="h-[28px] md:h-[32px]" />
                <div className="h-[28px] md:h-[32px]" />
                <div className="h-[28px] md:h-[32px]" />
                <div className="h-[28px] md:h-[32px]" />

                {daysInMonth.map((day) => {
                  const isWeddingDay = day === 20;
                  const isEngagementDay = day === 15;

                  return (
                    <div
                      key={day}
                      className="flex items-center justify-center h-[28px] md:h-[32px]"
                    >
                      {isWeddingDay ? (
                        <div
                          className="relative w-[26px] h-[24px] md:w-[30px] md:h-[28px] flex items-center justify-center animate-pulse"
                          title="திருமணம் & வரவேற்பு (20-11-2026)"
                        >
                          <img
                            src="/images/themes/mandap-darkred/heart.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-contain filter drop-shadow-sm"
                          />
                          <span className="relative z-10 text-[11px] md:text-[12px] font-bold text-white">
                            20
                          </span>
                        </div>
                      ) : isEngagementDay ? (
                        <div
                          className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full border border-[#f2c06e] bg-[#f2c06e]/20 flex items-center justify-center font-bold text-[11px] md:text-[12px] text-[#f2c06e]"
                          title="நிச்சயார்த்தம் (15-11-2026)"
                        >
                          15
                        </div>
                      ) : (
                        <span className="text-[12px] md:text-[13px] opacity-85">
                          {day}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Calendar Legend */}
          <div className="flex items-center justify-center gap-4 text-[11px] font-tamil text-[#ffdfaf]/80 mt-2">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2c06e]" /> 15: நிச்சயார்த்தம்
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]" /> 20: திருமணம் & வரவேற்பு
            </span>
          </div>

          {/* Add to Calendar Action Links */}
          <div className="flex items-center justify-center gap-4 mt-4 font-tamil">
            <a
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=P.+%E0%AE%B8%E0%AF%8D%E0%AE%B0%E0%AF%80+%E0%AE%B0%E0%AE%BE%E0%AE%AE%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AE%A9%E0%AF%8D+%26+S.+%E0%AE%95%E0%AF%8B%E0%AE%AA%E0%AE%BF%E0%AE%95%E0%AE%BE+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AE%A3%E0%AE%AE%E0%AF%8D&dates=20261120T043000/20261120T140000&details=%E0%AE%B8%E0%AF%8D%E0%AE%B0%E0%AF%80+%E0%AE%AE%E0%AE%B0%E0%AE%95%E0%AE%A4%E0%AE%B5%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AE%BF+%E0%AE%9A%E0%AE%AE%E0%AF%87%E0%AE%A4+%E0%AE%AA%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%80%E0%AE%B8%E0%AF%8D%E0%AE%B5%E0%AE%B0%E0%AE%B0%E0%AF%8D+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%8B%E0%AE%B5%E0%AE%BF%E0%AE%B2%E0%AF%8D+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AE%A3%E0%AE%AE%E0%AF%8D+%E0%AE%AE%E0%AE%BSets%E0%AE%B1%E0%AF%81%E0%AE%AE%E0%AF%8D+%E0%AE%85%E0%AE%AF%E0%AF%8B%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%A3%E0%AE%AE%E0%AF%8D+%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88+%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%A4%E0%AF%82%E0%AE%B0%E0%AE%BF%E0%AE%AA%E0%AE%BE+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AE%A3+%E0%AE%AE%E0%AE%A3%E0%AF%8D%E0%AE%9F%E0%AE%AA%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B2%E0%AF%8D+%E0%AE%B5%E0%AE%B0%E0%AE%B5%E0%AF%87%E0%AE%B1%E0%AF%8D%E0%AE%AA%E0%AF%81.&location=%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88+%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%A4%E0%AF%82%E0%AE%B0%E0%AE%BF%E0%AE%AA%E0%AE%BE+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AE%A3+%E0%AE%AE%E0%AE%A3%E0%AF%8D%E0%AE%9F%E0%AE%AA%E0%AE%AE%E0%AF%8D%2C+%E0%AE%85%E0%AE%AF%E0%AF%8B%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%A3%E0%AE%AE%E0%AF%8D%2C+%E0%AE%9A%E0%AF%87%E0%AE%B2%E0%AE%AE%E0%AF%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] md:text-[14px] underline underline-offset-4 hover:opacity-75 transition-opacity text-[#ffdfaf]"
            >
              <Calendar className="w-4 h-4 text-[#f2c06e]" />
              <span>Google Calendar</span>
            </a>

            <span className="text-[#f2c06e]/40">•</span>

            <button
              type="button"
              onClick={handleDownloadICS}
              className="text-[12px] md:text-[14px] underline underline-offset-4 hover:opacity-75 transition-opacity text-[#ffdfaf]"
            >
              Download iCal
            </button>
          </div>
        </div>

        {/* Golden Line Divider */}
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
