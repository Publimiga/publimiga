"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { cn } from "./cn";

/** Envolve uma imagem de miniatura e abre um popup com ela em tamanho original ao clicar. */
export function ImageLightbox({
  image,
  alt,
  className,
  children,
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        className={cn("block w-full cursor-zoom-in appearance-none border-0 p-0 text-left", className)}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-surface-raised text-ink"
            >
              ✕
            </button>
            <Image
              src={image}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] cursor-zoom-out rounded-md"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
