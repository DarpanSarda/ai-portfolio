"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <div className="gallery-strip">
        {images.map((src, i) => (
          <button
            key={i}
            className="gallery-thumb"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${title} screenshot ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} — screenshot ${i + 1}`}
              fill
              sizes="280px"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          {/* Backdrop click closes */}
          <button className="lightbox-close" onClick={close} aria-label="Close lightbox">
            <X size={20} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex]}
              alt={`${title} — screenshot ${lightboxIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={28} />
          </button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
