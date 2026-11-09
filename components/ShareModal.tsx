"use client";

import React, { useState, useEffect } from "react";
import { Share2, Download, Copy, Check, X, MessageCircle, ExternalLink } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [cachedFile, setCachedFile] = useState<File | null>(null);

  const shareUrl = "https://marage-inv.vercel.app/";
  const shareTitle = "P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண அழைப்பிதழ்";
  const shareText = `🌸 *திருமண அழைப்பிதழ்* 🌸\n\n*P. ஸ்ரீ ராமச்சந்திரன் (எ) பீம் M.BA.,* & *S. கோபிகா M.Com.,* இல்லற வாழ்வில் இணையும் நன்னாளுக்கு தங்களை அன்புடன் அழைக்கின்றோம்.\n\n📅 *நாள்:* 20-11-2026 வெள்ளிக்கிழமை\n⏰ *முகூர்த்தம்:* அதிகாலை 4:30 - 6:00 AM (ஸ்ரீ பட்டீஸ்வரர் திருக்கோவில், அம்மாபேட்டை)\n🎉 *வரவேற்பு:* காலை 7:00 AM முதல் (அன்னை கஸ்தூரிபா திருமண மண்டபம், அயோத்தியாப்பட்டணம்)\n\n👇 *அழைப்பிதழை முழுமையாகக் காண & வாழ்த்துகள் தெரிவிக்க:*\n${shareUrl}`;

  // Pre-fetch the invitation image into memory for instantaneous Web Share API without user gesture timeout
  useEffect(() => {
    fetch("/images/invitation-share.jpg")
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "ramachandran-gopika-wedding-invitation.jpg", {
          type: "image/jpeg",
        });
        setCachedFile(file);
      })
      .catch(() => {});
  }, []);

  if (!isOpen) return null;

  // 1. Share via native sheet with image file + link caption
  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        if (cachedFile && navigator.canShare && navigator.canShare({ files: [cachedFile] })) {
          await navigator.share({
            title: shareTitle,
            text: shareText,
            files: [cachedFile],
          });
          onClose();
          return;
        }

        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        onClose();
        return;
      } catch (err: any) {
        if (err?.name === "AbortError") return; // User simply closed the share dialog
      }
    }

    // Fallback if native share fails or unavailable: open WhatsApp Web / App
    handleWhatsAppShare();
  };

  // 2. Share directly to WhatsApp with pre-composed text & link
  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(shareText);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // 3. Download the official invitation card image directly
  const handleDownloadImage = () => {
    const a = document.createElement("a");
    a.href = "/images/invitation-share.jpg";
    a.download = "ramachandran-gopika-wedding-invitation.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // 4. Copy link & text to clipboard
  const handleCopyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-[500px] rounded-2xl border border-[#f2c06e]/40 p-5 md:p-6 shadow-2xl font-tamil overflow-hidden"
        style={{
          backgroundColor: "#2d0005",
          color: "#ffdfaf",
          backgroundImage: "radial-gradient(circle at top, rgba(107, 5, 8, 0.95), rgba(45, 0, 5, 0.98))",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#ffdfaf]/70 hover:text-[#f2c06e] hover:bg-[#6b0508]/80 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest text-[#f2c06e] font-semibold block">
            மகிழ்ச்சியைப் பகிருங்கள்
          </span>
          <h3
            className="text-lg md:text-xl font-bold uppercase mt-0.5"
            style={{
              color: "#f2c06e",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            SHARE WEDDING INVITATION
          </h3>
          <p className="text-xs text-[#ffdfaf]/80 mt-1">
            அழைப்பிதழ் படம் மற்றும் இணையதள இணைப்புடன் பகிருங்கள்
          </p>
        </div>

        {/* Invitation Card Image Preview */}
        <div className="relative rounded-xl overflow-hidden border border-[#f2c06e]/30 shadow-lg mb-4 bg-black/40 group">
          <img
            src="/images/invitation-share.jpg"
            alt="P. ஸ்ரீ ராமச்சந்திரன் & S. கோபிகா திருமண அழைப்பிதழ்"
            className="w-full h-auto max-h-[220px] object-cover object-center"
          />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-[11px] text-[#f2c06e] border border-[#f2c06e]/20">
            <span>🖼️ திருமண அழைப்பிதழ் படம்</span>
            <span className="text-[10px] text-[#ffdfaf]/70">1200 x 630 HD</span>
          </div>
        </div>

        {/* Sharing Action Buttons */}
        <div className="space-y-2.5">
          {/* WhatsApp Direct Share */}
          <button
            type="button"
            onClick={handleNativeShare}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
            style={{
              backgroundColor: "#25D366",
              color: "#ffffff",
            }}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>வாட்ஸ்அப்பில் படம் + லிங்க் பகிர • Share on WhatsApp</span>
          </button>

          {/* Download Image Button */}
          <button
            type="button"
            onClick={handleDownloadImage}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#f2c06e]/50 bg-[#f2c06e]/15 text-[#f2c06e] hover:bg-[#f2c06e]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>அழைப்பிதழ் படத்தைப் பதிவிறக்க • Download Card Image</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#ffdfaf]/25 bg-black/30 text-[#ffdfaf] hover:text-[#f2c06e] hover:border-[#f2c06e]/50 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-bold">இணைப்பு நகலெடுக்கப்பட்டது • Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#f2c06e]" />
                <span>அழைப்புச் செய்தி & லிங்க் நகலெடுக்க • Copy Link & Message</span>
              </>
            )}
          </button>
        </div>

        {/* Preview Link Footer */}
        <div className="mt-4 pt-3 border-t border-[#f2c06e]/15 text-center text-[11px] text-[#ffdfaf]/60 flex items-center justify-center gap-1">
          <span>இணையதளம்:</span>
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f2c06e] underline hover:opacity-80 inline-flex items-center gap-0.5"
          >
            <span>marage-inv.vercel.app</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
