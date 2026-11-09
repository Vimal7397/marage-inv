"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import BackgroundEffects from "@/components/BackgroundEffects";
import OpeningEnvelope from "@/components/OpeningEnvelope";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import CeremonyInfo from "@/components/CeremonyInfo";
import PhotoGallery from "@/components/PhotoGallery";
import ReceptionInfo from "@/components/ReceptionInfo";
import VenueMap from "@/components/VenueMap";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import FamilySection from "@/components/FamilySection";
import GuestbookSection from "@/components/GuestbookSection";
import Footer from "@/components/Footer";

function QueryParamSync({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();
  const openParam = searchParams.get("open");

  useEffect(() => {
    if (openParam === "1") {
      onOpen();
    }
  }, [openParam, onOpen]);

  return null;
}

export default function WeddingInvitationPage() {
  // Check URL synchronously on mount
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [playMusicTrigger, setPlayMusicTrigger] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("open") === "1") {
        setIsEnvelopeOpen(true);
      }
    }
  }, []);

  const handleOpenEnvelope = useCallback(() => {
    setIsEnvelopeOpen(true);
    setPlayMusicTrigger(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#3f000b] flex flex-col items-center overflow-x-hidden">
      {/* Non-blocking URL query sync */}
      <Suspense fallback={null}>
        <QueryParamSync onOpen={() => setIsEnvelopeOpen(true)} />
      </Suspense>

      {/* Dynamic Background Effects: Gold Dust Glitter, Ambient Glow & Falling Petals */}
      <BackgroundEffects />

      {/* Interactive Opening Envelope Curtain */}
      <OpeningEnvelope isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />

      {/* Background Music Toggle */}
      <MusicPlayer autoPlayTrigger={playMusicTrigger} />

      {/* Floating Bottom Navigation Bar */}
      <FloatingNav />

      {/* Main Wedding Invitation Card */}
      <div className="relative z-10 flex w-full justify-center overflow-x-clip py-0 md:py-8">
        <main
          data-showcase-root=""
          className="relative w-full max-w-[480px] md:max-w-[900px] md:mx-auto overflow-hidden md:border md:border-[#f2c06e33] md:rounded-2xl md-card isolate shadow-2xl golden-shimmer-card"
          style={{
            backgroundColor: "#6b0508",
            color: "#ffdfaf",
          }}
        >
          {/* Authentic Mandap Darkred Background Texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 mix-blend-overlay opacity-50"
            style={{
              backgroundImage:
                "url(/images/themes/mandap-darkred/background-texture.webp)",
              backgroundRepeat: "repeat",
              backgroundPosition: "top left",
              backgroundSize:
                "calc(1.00000 * var(--st-w)) calc(1.44019 * var(--st-w))",
            }}
          />

          {/* 1. Hero & Save The Date */}
          <HeroSection />

          {/* 2. Ceremony Information */}
          <CeremonyInfo />

          {/* 3. Photo Gallery Carousel & Lightbox */}
          <PhotoGallery />

          {/* 4. Reception Info, Live Countdown & Calendar */}
          <ReceptionInfo />

          {/* 5. Venue Map & Directions */}
          <VenueMap />

          {/* 6. Wedding Day Schedule Timeline */}
          <ScheduleTimeline />

          {/* 8. Family Members & Well-Wishers */}
          <FamilySection />

          {/* 9. Interactive Guestbook & Wishes */}
          <GuestbookSection />

          {/* 10. Footer with Temple Decoration */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
