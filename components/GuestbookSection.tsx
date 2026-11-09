"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Heart, Send, Sparkles, Trash2, MessageSquare } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
}

export default function GuestbookSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  // Load genuine wishes from localStorage on mount (strictly cleans & rejects sample messages)
  useEffect(() => {
    setMounted(true);
    try {
      const sampleSignatures = [
        "உற்றார் உறவினர்கள்",
        "சதீரீஷ்",
        "ரமோதனி",
        "பிரதாப்",
        "SRC Projects",
        "Kavery Hospital",
        "Relatives",
      ];

      const savedWishes = localStorage.getItem("wedding_wishes");
      if (savedWishes) {
        const parsed: Wish[] = JSON.parse(savedWishes);
        // Strictly filter out any old sample messages that might have been persisted in browser localStorage
        const cleanWishes = parsed.filter(
          (w) =>
            !sampleSignatures.some(
              (sig) =>
                (w.name && w.name.includes(sig)) ||
                (w.message && w.message.includes(sig))
            ) &&
            !w.id.startsWith("sample-")
        );
        setWishes(cleanWishes);
        localStorage.setItem("wedding_wishes", JSON.stringify(cleanWishes));
      }
      const savedLikes = localStorage.getItem("wedding_wishes_likes");
      if (savedLikes) {
        setLikedMap(JSON.parse(savedLikes));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage when wishes change
  const saveWishes = (updated: Wish[]) => {
    setWishes(updated);
    try {
      localStorage.setItem("wedding_wishes", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const quickWishes = [
    "மணமக்கள் பல்லாண்டு காலம் சீரோடும் சிறப்போடும் வாழ்க! 🌸",
    "ஸ்ரீ ராமச்சந்திரன் & கோபிகா தம்பதியினருக்கு மனமார்ந்த திருமண நல்வாழ்த்துகள்! 💍",
    "May Lord Shiva & Parvati shower eternal joy and prosperity upon you both! ✨",
    "Wishing you a lifetime of love, laughter, and togetherness! ❤️",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      timestamp: `${formattedDate}, ${formattedTime}`,
      likes: 0,
    };

    const updated = [newWish, ...wishes];
    saveWishes(updated);

    setName("");
    setMessage("");
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#f2c06e", "#ffdfaf", "#6b0508", "#22c55e", "#ffd700"],
      });
    } catch {
      // ignore
    }
  };

  const handleLike = (id: string) => {
    const isAlreadyLiked = likedMap[id];
    const newLikedMap = { ...likedMap, [id]: !isAlreadyLiked };
    setLikedMap(newLikedMap);

    try {
      localStorage.setItem("wedding_wishes_likes", JSON.stringify(newLikedMap));
    } catch {
      // ignore
    }

    const updated = wishes.map((w) => {
      if (w.id === id) {
        return {
          ...w,
          likes: isAlreadyLiked ? Math.max(0, w.likes - 1) : w.likes + 1,
        };
      }
      return w;
    });

    saveWishes(updated);
  };

  const handleDelete = (id: string) => {
    const updated = wishes.filter((w) => w.id !== id);
    saveWishes(updated);
  };

  return (
    <section
      id="guestbook"
      className="relative isolate w-full mt-10 md:mt-16"
      style={{ paddingInline: "5%" }}
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-1 mb-6 font-tamil">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#f2c06e] font-semibold">
            மணமக்களுக்கு நல்வாழ்த்துகள்
          </span>
          <h2
            className="uppercase font-bold text-[19px] md:text-[25px] text-center tracking-[0.04em]"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            BLESSINGS &amp; WISHES
          </h2>
          <p className="text-xs sm:text-sm text-[#ffdfaf]/80">
            P. ஸ்ரீ ராமச்சந்திரன் &amp; S. கோபிகா தம்பதியினரை வாழ்த்துக
          </p>
        </div>

        {/* Wish Form Card */}
        <div className="w-full max-w-[560px] p-5 sm:p-6 rounded-2xl border border-[#f2c06e]/30 bg-[#2d0005]/80 shadow-2xl font-tamil">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="wish-name" className="block text-xs font-semibold text-[#f2c06e] mb-1">
                தங்கள் பெயர் (Your Name) *
              </label>
              <input
                id="wish-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="எ.கா. மு. கார்த்திக் / Karthik M"
                className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf] placeholder:text-[#ffdfaf]/40 focus:outline-none focus:border-[#f2c06e]"
              />
            </div>

            <div>
              <label htmlFor="wish-message" className="block text-xs font-semibold text-[#f2c06e] mb-1">
                வாழ்த்துச் செய்தி (Your Wedding Wish) *
              </label>
              <textarea
                id="wish-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="மணமக்களுக்கு தங்களின் அன்பான வாழ்த்துக்களைப் பதிவிடுங்கள்..."
                className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#1a0104] border border-[#f2c06e]/30 text-[#ffdfaf] placeholder:text-[#ffdfaf]/40 focus:outline-none focus:border-[#f2c06e] resize-none"
              />
            </div>

            {/* Quick Click Suggestion Chips */}
            <div>
              <span className="block text-[11px] text-[#ffdfaf]/70 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#f2c06e]" />
                <span>விரைவு வாழ்த்துகள் (Click to insert):</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickWishes.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMessage(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[#f2c06e]/25 bg-[#f2c06e]/10 text-[#ffdfaf] hover:text-[#f2c06e] hover:border-[#f2c06e] hover:bg-[#f2c06e]/20 transition-all text-left cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#f2c06e",
                color: "#6b0508",
              }}
            >
              <Send className="w-4 h-4 fill-current" />
              <span>வாழ்த்துகளைப் பதிவிட &bull; Send Blessing</span>
            </button>
          </form>
        </div>

        {/* Wishes List: ONLY shows genuine user-submitted wishes (NO sample messages) */}
        <div className="w-full max-w-[560px] mt-6 space-y-3 font-tamil">
          {mounted && wishes.length > 0 ? (
            wishes.map((w) => (
              <div
                key={w.id}
                className="p-4 rounded-xl border border-[#f2c06e]/25 bg-[#4a0307]/50 shadow-md transition-all hover:border-[#f2c06e]/40"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-[#f2c06e] text-sm">{w.name}</span>
                  <span className="text-[10px] text-[#ffdfaf]/60 font-mono">{w.timestamp}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#ffdfaf] opacity-95 leading-relaxed">
                  {w.message}
                </p>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#f2c06e]/15">
                  <span className="text-[10px] text-[#ffdfaf]/50">Blessing #{w.id.slice(-4)}</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleLike(w.id)}
                      className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                        likedMap[w.id]
                          ? "bg-[#f2c06e] text-[#6b0508] border-[#f2c06e] font-bold"
                          : "border-[#f2c06e]/30 text-[#ffdfaf]/80 hover:text-[#f2c06e] hover:border-[#f2c06e]"
                      }`}
                      title={likedMap[w.id] ? "Unlike" : "Blessing Like"}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${likedMap[w.id] ? "fill-current" : ""}`}
                      />
                      <span>{w.likes}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(w.id)}
                      className="p-1 text-[#ffdfaf]/40 hover:text-red-400 transition-colors cursor-pointer"
                      title="Delete wish"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-2xl border border-[#f2c06e]/20 bg-[#2d0005]/50 text-center text-[#ffdfaf]">
              <MessageSquare className="w-8 h-8 text-[#f2c06e] mx-auto mb-2 opacity-70" />
              <p className="text-sm font-semibold text-[#f2c06e]">
                இன்னும் வாழ்த்துக்கள் பதிவிடப்படவில்லை
              </p>
              <p className="text-xs opacity-75 mt-1">
                மணமக்களுக்கு உங்கள் அன்பான முதல் நல்வாழ்த்தைப் பதிவு செய்யுங்கள்!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
