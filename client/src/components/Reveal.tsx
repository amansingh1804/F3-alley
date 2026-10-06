import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  mask?: boolean;
  once?: boolean;
}>;

export function Reveal({ children, className, delay = 0, mask = false, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible so a delayed or unsupported IntersectionObserver can never
  // leave important content blank. The observer still adds the entrance state
  // for supported browsers as the element enters the viewport.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setVisible(false);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", mask && "reveal-mask", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
