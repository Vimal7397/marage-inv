"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Check,
  MapPin,
  Users,
} from "lucide-react";

interface FloatingNavProps {
  onOpenRSVP: () => void;
}

export default function FloatingNav({ onOpenRSVP }: FloatingNavProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        const shareUrl = "https://marage-inv.vercel.app/";
        const shareTitle = "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண அழைப்பிதழ்";
        const shareText = "20-11-2026 வெள்ளிக்கிழமை அம்மாபேட்டை பட்டீஸ்வரர் கோவில் & அயோத்தியாப்பட்டணம் திருமண நிகழ்விற்கு அன்புடன் அழைக்கின்றோம்!\n\n" + shareUrl;

        // Try to attach the invitation image if supported by the browser (mobile Chrome, Safari, etc.)
        if (navigator.canShare) {
          try {
            const response = await fetch("/images/invitation-share.jpg");
            const blob = await response.blob();
            const file = new File([blob], "wedding-invitation.jpg", { type: "image/jpeg" });

            if (navigator.canShare({ files: [file] })) {
              await navigator.share({
                title: shareTitle,
                text: shareText,
                files: [file],
              });
              return;
            }
          } catch {
            // fallback to standard URL sharing if file sharing fails
          }
        }

        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled or share failed, fallback to copy
      }
    }
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("https://marage-inv.vercel.app/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="p-2 rounded-full text-[#ffdfaf] hover:text-[#f2c06e] hover:bg-[#6b0508]/60 transition-all cursor-pointer"
          title={copied ? "Link Copied!" : "Share Invitation"}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Share2 className="w-4 h-4 text-[#f2c06e]" />
          )}
        </button>
      </nav>
    </div>
  );
}
