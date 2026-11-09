"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Heart } from "lucide-react";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"attending" | "declined">("attending");
  const [guestCount, setGuestCount] = useState("1");
  const [dietary, setDietary] = useState("அறுசுவை சைவ உணவு");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);

    if (status === "attending") {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#f2c06e", "#ffdfaf", "#6b0508", "#22c55e"],
        });
      } catch {
        // ignore
      }
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setStatus("attending");
    setGuestCount("1");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn font-tamil"
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border animate-modalSlideUp"
        style={{
          backgroundColor: "#4a0307",
          borderColor: "rgba(242, 192, 110, 0.4)",
          color: "#ffdfaf",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "rgba(242, 192, 110, 0.2)" }}
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#f2c06e] fill-current" />
            <h3 className="text-base sm:text-lg font-bold text-[#f2c06e]">
              வருகையை உறுதிப்படுத்த &bull; RSVP
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="rounded-full p-1.5 text-[#ffdfaf]/70 hover:text-[#f2c06e] hover:bg-[#6b0508] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <CheckCircle className="w-14 h-14 text-green-400 mb-3" />
              <h4 className="text-lg font-bold text-[#f2c06e] mb-1">
                நன்றிகள்! (Thank You)
              </h4>
              <p className="text-xs sm:text-sm text-[#ffdfaf] opacity-90 max-w-xs mb-5 leading-relaxed">
                {status === "attending"
                  ? "தங்கள் வருகை பதிவானது. 20-11-2026 அன்று தங்களை அன்புடன் வரவேற்கக் காத்திருக்கிறோம்!"
                  : "தங்களின் வாழ்த்துக்களுக்கு மனமார்ந்த நன்றிகள்!"}
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
                style={{
                  backgroundColor: "#f2c06e",
                  color: "#6b0508",
                }}
              >
                மூடுக &bull; Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#f2c06e] mb-1">
                  தங்கள் பெயர் (Full Name) *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="பெயர் உள்ளிடவும்"
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf] placeholder:text-[#ffdfaf]/40 focus:outline-none focus:border-[#f2c06e]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#f2c06e] mb-1">
                  தொலைபேசி எண் (Phone Number)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="எ.கா. 98765 43210"
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf] placeholder:text-[#ffdfaf]/40 focus:outline-none focus:border-[#f2c06e]"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-semibold text-[#f2c06e] mb-1">
                  வருகை விவரம் (Will you attend?)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus("attending")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      status === "attending"
                        ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                        : "bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf]"
                    }`}
                  >
                    கண்டிப்பாக வருகிறேன் (Yes)
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus("declined")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      status === "declined"
                        ? "bg-[#f2c06e] text-[#6b0508] shadow-md"
                        : "bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf]"
                    }`}
                  >
                    வர இயலவில்லை (No)
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {status === "attending" && (
                <div>
                  <label className="block text-xs font-semibold text-[#f2c06e] mb-1">
                    வருகை தரும் நபர்கள் எண்ணிக்கை (Number of Guests)
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf] focus:outline-none focus:border-[#f2c06e]"
                  >
                    <option value="1">1 நபர் (1 Guest)</option>
                    <option value="2">2 நபர்கள் (2 Guests)</option>
                    <option value="3">3 நபர்கள் (3 Guests)</option>
                    <option value="4+">4+ நபர்கள் (Family / Group)</option>
                  </select>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer mt-2"
                style={{
                  backgroundColor: "#f2c06e",
                  color: "#6b0508",
                }}
              >
                பதிவு செய்க &bull; Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
