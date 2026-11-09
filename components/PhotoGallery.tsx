"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  {
    src: "/images/gallery/photo-1.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/c76e9fd1232c3266b19ab523e77e0f77c41291f72de0e545caf9dee6bef5b422.webp",
    alt: "Wedding photo 1",
  },
  {
    src: "/images/gallery/photo-2.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/8bd83cc815aeef4f2ed184ec7fc449488e2b8b55368f0d280b65cd96e647fd71.webp",
    alt: "Wedding photo 2",
  },
  {
    src: "/images/gallery/photo-3.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/59921fe453655f188cdf4aa41157e885c7be3025031ebd6e24d5c24d624f01cf.webp",
    alt: "Wedding photo 3",
  },
  {
    src: "/images/gallery/photo-4.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/c9017216e35b6ecbd531d34be30fe5c1dbcbf32daf4c6fed53bd81e89f119e7e.webp",
    alt: "Wedding photo 4",
  },
  {
    src: "/images/gallery/photo-5.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/8c363c02f237c0dbb37fae24270b32c135854f5833a059f5afa1e1635d979251.webp",
    alt: "Wedding photo 5",
  },
  {
    src: "/images/gallery/photo-6.webp",
    fallback:
      "https://assets.chungdoi.com/photo-library/design/e353479687043e6d31a820f53ef43a91a727e3282fd9b787f2e10af804254f5b.webp",
    alt: "Wedding photo 6",
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextPhoto();
    } else if (diff < -40) {
      prevPhoto();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // Compute 3D Coverflow transform styles for each slide
  const getSlideStyle = (index: number) => {
    const total = photos.length;
    let offset = (index - currentIndex + total) % total;
    if (offset > total / 2) offset -= total;

    if (offset === 0) {
      return {
        zIndex: 100,
        opacity: 1,
        transform: "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
        ring: "ring-2 ring-[#f2c06e]/60",
      };
    }
    if (offset === 1) {
      return {
        zIndex: 99,
        opacity: 0.75,
        transform: "translateX(55%) translateZ(-150px) rotateY(45deg) scale(0.85)",
        ring: "",
      };
    }
    if (offset === -1) {
      return {
        zIndex: 99,
        opacity: 0.75,
        transform: "translateX(-55%) translateZ(-150px) rotateY(-45deg) scale(0.85)",
        ring: "",
      };
    }
    if (offset === 2) {
      return {
        zIndex: 98,
        opacity: 0.5,
        transform: "translateX(110%) translateZ(-300px) rotateY(90deg) scale(0.7)",
        ring: "",
      };
    }
    if (offset === -2) {
      return {
        zIndex: 98,
        opacity: 0.5,
        transform: "translateX(-110%) translateZ(-300px) rotateY(-90deg) scale(0.7)",
        ring: "",
      };
    }
    return {
      zIndex: 95,
      opacity: 0.2,
      transform: "translateX(160%) translateZ(-450px) rotateY(120deg) scale(0.6)",
      ring: "",
    };
  };

  return (
    <section
      id="gallery"
      className="relative isolate w-full"
      style={{
        marginTop: "calc(0.06 * var(--st-w))",
        paddingInline: "5%",
      }}
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        <h2
          className="uppercase font-bold text-[20px] md:text-[26px] text-center mb-5 tracking-[0.04em]"
          style={{
            color: "#f2c06e",
            fontFamily: '"Times New Roman", Times, serif',
            fontWeight: 700,
          }}
        >
          <span>Photo Gallery</span>
        </h2>

        {/* Carousel Container */}
        <div className="w-full max-w-[420px] md:max-w-[640px]">
          <div
            className="relative h-[340px] md:h-[500px] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Left Button */}
            <button
              type="button"
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="hidden md:flex absolute left-[-16px] top-1/2 -translate-y-1/2 z-[200] w-9 h-9 items-center justify-center rounded-full bg-[#3f000b]/80 border border-[#f2c06e]/40 hover:bg-[#6b0508] text-[#f2c06e] transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Desktop Right Button */}
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Next photo"
              className="hidden md:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-[200] w-9 h-9 items-center justify-center rounded-full bg-[#3f000b]/80 border border-[#f2c06e]/40 hover:bg-[#6b0508] text-[#f2c06e] transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 3D Perspective Stage */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {photos.map((p, index) => {
                const s = getSlideStyle(index);
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (index === currentIndex) {
                        setLightboxOpen(true);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    className={`absolute h-[92%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all ease-out ${s.ring}`}
                    style={{
                      aspectRatio: "2/3",
                      transitionDuration: "800ms",
                      transform: s.transform,
                      opacity: s.opacity,
                      zIndex: s.zIndex,
                    }}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = p.fallback;
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to photo ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-7 h-2 bg-[#f2c06e] opacity-90 shadow-sm"
                    : "w-2 h-2 bg-[#f2c06e] opacity-35 hover:opacity-60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/92 backdrop-blur-md p-4 animate-fadeIn"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between w-full max-w-5xl pt-2">
            <div className="text-sm sm:text-base font-semibold px-3 py-1 rounded-full bg-white/10 text-[#f2c06e]">
              {currentIndex + 1} / {photos.length}
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Full-Size Image */}
          <div className="relative flex flex-1 w-full max-w-4xl items-center justify-center my-auto min-h-0">
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/50 text-[#f2c06e] hover:bg-black/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              onError={(e) => {
                (e.target as HTMLImageElement).src = photos[currentIndex].fallback;
              }}
              className="max-h-[75vh] max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl select-none"
            />

            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/50 text-[#f2c06e] hover:bg-black/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Thumbnail Ribbon */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto p-2 bg-black/40 rounded-xl backdrop-blur-md max-w-[90vw] sm:max-w-2xl scrollbar-none">
            {photos.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-12 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  idx === currentIndex
                    ? "ring-2 ring-[#f2c06e] scale-105 opacity-100 shadow-md"
                    : "opacity-50 hover:opacity-85"
                }`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = p.fallback;
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

