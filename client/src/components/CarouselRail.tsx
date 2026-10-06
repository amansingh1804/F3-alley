import { useCallback, useEffect, useRef, useState, type PropsWithChildren } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselRailProps = PropsWithChildren<{
  className?: string;
  label?: string;
  dark?: boolean;
}>;

export function CarouselRail({ children, className, label = "Browse", dark = false }: CarouselRailProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const node = viewportRef.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth - 4;
    setCanPrev(node.scrollLeft > 4);
    setCanNext(node.scrollLeft < max);
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    updateControls();
    node.addEventListener("scroll", updateControls, { passive: true });
    const observer = new ResizeObserver(updateControls);
    observer.observe(node);
    return () => {
      node.removeEventListener("scroll", updateControls);
      observer.disconnect();
    };
  }, [updateControls]);

  const move = (direction: number) => {
    const node = viewportRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.max(node.clientWidth * 0.72, 260), behavior: "smooth" });
  };

  return (
    <div className={cn("carousel-rail", dark && "carousel-rail-dark", className)}>
      <div
        ref={viewportRef}
        className="carousel-viewport"
        tabIndex={0}
        aria-label={`${label} carousel`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
      >
        <div className="carousel-track">{children}</div>
      </div>
      <div className="carousel-controls">
        <span>{label}</span>
        <div>
          <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label={`Previous ${label.toLowerCase()}`}><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label={`Next ${label.toLowerCase()}`}><ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
