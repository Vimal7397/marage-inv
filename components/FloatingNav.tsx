"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Users,
} from "lucide-react";
import ShareModal from "./ShareModal";

interface FloatingNavProps {
  onOpenRSVP: () => void;
}

export default function FloatingNav({ onOpenRSVP }: FloatingNavProps) {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-max">
      <nav
        className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full shadow-2xl backdrop-blur-lg border transition-all"
        style={{
          backgroundColor: "rgba(63, 0, 11, 0.92)",
          borderColor: "rgba(242, 192, 110, 0.45)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(242, 192, 110, 0.2)",
        }}
      >
        <button
          type="button"
          onClick={() => scrollTo("ceremony")}
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-tamil"
          title="திருமண நிகழ்வு (Ceremony)"
        >
          <Calendar className="w-4 h-4 text-[#f2c06e]" />
          <span className="hidden md:inline">நிகழ்வு</span>
        </button>

        <button
          type="button"
          onClick={() => scrollTo("schedule")}
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-tamil"
          title="நிகழ்ச்சி நிரல் (Schedule)"
        >
          <Clock className="w-4 h-4 text-[#f2c06e]" />
          <span className="hidden md:inline">நிரல்</span>
        </button>

        <button
          type="button"
          onClick={() => scrollTo("venue")}
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-tamil"
          title="இடம் & வழித்தடம் (Venue)"
        >
          <MapPin className="w-4 h-4 text-[#f2c06e]" />
          <span className="hidden md:inline">இடம்</span>
        </button>

        <button
          type="button"
          onClick={() => scrollTo("family")}
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-tamil"
          title="குடும்பத்தினர் (Family)"
        >
          <Users className="w-4 h-4 text-[#f2c06e]" />
          <span className="hidden md:inline">குடும்பம்</span>
        </button>

        <button
          type="button"
          onClick={() => scrollTo("guestbook")}
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-tamil"
          title="வாழ்த்துக்கள் (Wishes)"
        >
          <MessageCircle className="w-4 h-4 text-[#f2c06e]" />
          <span className="hidden md:inline">வாழ்த்து</span>
        </button>

        <div className="w-px h-5 bg-[#f2c06e]/30 mx-0.5" />

        {/* RSVP Action */}
        <button
          type="button"
          onClick={onOpenRSVP}
          className="px-3.5 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer font-tamil"
          style={{
            backgroundColor: "#f2c06e",
            color: "#6b0508",
          }}
        >
          <Heart className="w-3.5 h-3.5 fill-current text-[#6b0508]" />
          <span>RSVP</span>
        </button>

        {/* Share Button: Opens dedicated Share Dialog with Image & Link */}
        <button
          type="button"
          onClick={() => setShareModalOpen(true)}
          className="p-2 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all cursor-pointer"
          title="அழைப்பிதழைப் பகிர்க (Share Invitation)"
        >
          <Share2 className="w-4 h-4 text-[#f2c06e]" />
        </button>
      </nav>

      {/* Share Modal Dialog with image preview, WhatsApp sharing & download */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
    </div>
  );
}
