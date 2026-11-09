"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const hasTriggeredRef = useRef(false);

  // Initialize Audio element once
  useEffect(() => {
    const audio = new Audio("/audio/bgm.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.75;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
    };
  }, []);

  // When envelope is opened
  useEffect(() => {
    if (autoPlayTrigger && !hasTriggeredRef.current && !userPausedRef.current) {
      hasTriggeredRef.current = true;
      const audio = audioRef.current;
      if (audio) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // If browser blocks immediate playback, wait for the first user interaction
            const onFirstClick = () => {
              if (audioRef.current && !userPausedRef.current) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
              window.removeEventListener("click", onFirstClick);
              window.removeEventListener("touchstart", onFirstClick);
            };
            window.addEventListener("click", onFirstClick, { once: true });
            window.addEventListener("touchstart", onFirstClick, { once: true });
          });
      }
    }
  }, [autoPlayTrigger]);

  const toggleMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // User explicitly paused the music
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      // User explicitly resumed the music
      userPausedRef.current = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <div className="fixed top-5 right-5 z-40">
      <button
        type="button"
        onClick={toggleMusic}
        className="group relative flex items-center gap-2 rounded-full px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
        style={{
          backgroundColor: isPlaying ? "rgba(107, 5, 8, 0.95)" : "rgba(30, 2, 5, 0.85)",
          border: "1px solid rgba(242, 192, 110, 0.5)",
          color: "#f2c06e",
          boxShadow: isPlaying ? "0 0 20px rgba(242, 192, 110, 0.45)" : "none",
        }}
        aria-label={isPlaying ? "Mute Vijay Sachin BGM" : "Play Vijay Sachin BGM"}
        title={isPlaying ? "Pause: Vijay - Sachien BGM" : "Play: Vijay - Sachien BGM"}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-0.5 bg-[#f2c06e] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
              <span className="w-0.5 bg-[#f2c06e] rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-4" />
              <span className="w-0.5 bg-[#f2c06e] rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-2" />
              <span className="w-0.5 bg-[#f2c06e] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3.5" />
            </div>
            <Volume2 className="w-4 h-4 text-[#f2c06e]" />
            <span className="text-[11px] font-medium hidden sm:inline tracking-wider uppercase font-tamil">
              சச்சின் BGM
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#ffdfaf] opacity-80" />
            <span className="text-[11px] font-medium text-[#ffdfaf] opacity-80 hidden sm:inline tracking-wider uppercase font-tamil">
              பாடல் இசை
            </span>
          </>
        )}
      </button>
    </div>
  );
}
