import { useState, useRef, useEffect, MouseEvent } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface FoodCourtExpansionBannerProps {
  className?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  isDarkTheme?: boolean;
}

export function FoodCourtExpansionBanner({
  className = "",
  ctaHref = "/brands",
  onCtaClick,
  isDarkTheme = false,
}: FoodCourtExpansionBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0.5, rawY: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse tracking for 3D parallax & dynamic lighting
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Normalized between -1 and 1
    const normX = (x - 0.5) * 2;
    const normY = (y - 0.5) * 2;
    
    setMousePos({
      x: normX,
      y: normY,
      rawX: x,
      rawY: y,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0, rawX: 0.5, rawY: 0.5 });
  };

  // Dynamic style calculation for 3D depth
  const graphicTransform = isHovered
    ? `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg) translateZ(10px)`
    : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";

  const bigNumberTransform = isHovered
    ? `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 20px)`
    : "translate3d(0, 0, 0)";

  const svgCurvesTransform = isHovered
    ? `translate3d(${-mousePos.x * 14}px, ${-mousePos.y * 12}px, 0)`
    : "translate3d(0, 0, 0)";

  const dotGridTransform = isHovered
    ? `translate3d(${mousePos.x * 18}px, ${mousePos.y * 16}px, 0)`
    : "translate3d(0, 0, 0)";

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`f3-expansion-wrapper ${isDarkTheme ? "f3-exp-dark" : ""} ${className}`}
      aria-label="Food Court Expansion Announcement"
    >
      <div className="f3-exp-container">
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="f3-exp-sidebar">
          {/* Top marker */}
          <div className="f3-exp-side-top">
            <span className="f3-exp-badge-num">00</span>
            <span className="f3-exp-badge-label">MORE TO EXPLORE</span>
          </div>

          <div className="f3-exp-divider" />

          {/* Stat 1: 20 Outlets */}
          <div className="f3-exp-side-stat">
            <span className="f3-exp-stat-num">20</span>
            <span className="f3-exp-stat-text">OUTLETS ARE COMING SOON</span>
          </div>

          <div className="f3-exp-divider" />

          {/* Stat 2: 14-15 Outlets */}
          <div className="f3-exp-side-stat">
            <span className="f3-exp-stat-num">14-15</span>
            <span className="f3-exp-stat-text">CURRENT OUTLETS</span>
          </div>

          <div className="f3-exp-divider" />

          {/* Location & Address */}
          <div className="f3-exp-side-location">
            <div className="f3-exp-pin-wrap">
              <MapPin size={16} className="f3-exp-pin-icon" />
            </div>
            <p className="f3-exp-address">
              Neeladri Road · Electronic<br />
              City Phase I · Bengaluru<br />
              560100
            </p>
          </div>
        </aside>

        {/* Vertical divider */}
        <div className="f3-exp-v-divider" aria-hidden="true" />

        {/* ================= CENTER COPY ================= */}
        <div className="f3-exp-center">
          <p className="f3-exp-kicker">EXPANSION UNDERWAY</p>
          
          <h2 className="f3-exp-headline">
            <span className="f3-exp-line-sans">F3 Alley is</span>
            <span className="f3-exp-line-sans">growing.</span>
            <span className="f3-exp-line-serif">More</span>
            <span className="f3-exp-line-serif">flavours.</span>
            <span className="f3-exp-line-serif">More</span>
            <span className="f3-exp-line-serif">choices.</span>
          </h2>

          <p className="f3-exp-description">
            Discover a growing collection of food outlets at F3 Alley, with expansion planned to bring even more diverse flavours, street food favourites, and culinary concepts together under one roof.
          </p>

          <div className="f3-exp-cta-wrap">
            <Link 
              href={ctaHref}
              onClick={onCtaClick}
              className="f3-exp-btn"
            >
              <span>EXPLORE THE FOOD COURT</span>
              <ArrowRight size={15} className="f3-exp-btn-arrow" />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT GRAPHIC ILLUSTRATION ================= */}
        <div className="f3-exp-right" style={{ transform: graphicTransform }}>
          {/* Layer 1: Dot Grid Matrix (Top Right) */}
          <div 
            className="f3-exp-dot-grid" 
            style={{ transform: dotGridTransform }}
            aria-hidden="true"
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="f3-exp-dot" />
            ))}
          </div>

          {/* Layer 2: Vector Art & Orbital Rings */}
          <svg 
            className="f3-exp-curves-svg" 
            viewBox="0 0 600 520" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: svgCurvesTransform }}
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="nodeGlow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff4626" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff4626" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4626" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#ff7755" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffaa88" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Main sweeping circle / orbit */}
            <circle 
              cx="290" 
              cy="255" 
              r="220" 
              stroke="url(#curveGrad)" 
              strokeWidth="1.5" 
              className="f3-exp-orbit-circle"
            />

            {/* Tangent line from top */}
            <line 
              x1="220" 
              y1="30" 
              x2="330" 
              y2="190" 
              stroke="#ff5533" 
              strokeWidth="1.2" 
              strokeOpacity="0.75" 
            />

            {/* Bottom horizontal axis line */}
            <line 
              x1="60" 
              y1="465" 
              x2="520" 
              y2="465" 
              stroke="#ff5533" 
              strokeWidth="1.2" 
              strokeOpacity="0.65" 
            />

            {/* Fluid sweeping right loop curve */}
            <path 
              d="M 380 40 C 490 120, 560 260, 480 390 C 450 440, 410 470, 360 480 C 430 490, 510 470, 580 420" 
              stroke="url(#curveGrad)" 
              strokeWidth="1.5" 
              fill="none" 
              className="f3-exp-sweep-path"
            />
          </svg>

          {/* Interactive Accent Nodes (with glowing radar wave) */}
          <div className="f3-exp-node f3-exp-node-top" aria-hidden="true">
            <span className="f3-exp-node-dot" />
            <span className="f3-exp-node-ring" />
          </div>

          <div className="f3-exp-node f3-exp-node-bottom" aria-hidden="true">
            <span className="f3-exp-node-dot" />
            <span className="f3-exp-node-ring" />
          </div>

          {/* Layer 3: Giant Typography Showcase */}
          <div className="f3-exp-numerals-showcase" style={{ transform: bigNumberTransform }}>
            {/* Top row: Giant 20 + OUTLETS label */}
            <div className="f3-exp-num-row-20">
              <div 
                className="f3-exp-huge-20"
                style={{
                  backgroundPosition: `${mousePos.rawX * 100}% ${mousePos.rawY * 100}%`,
                }}
              >
                20
              </div>
              
              <div className="f3-exp-label-block-20">
                <span className="f3-exp-title-outlets">OUTLETS</span>
                <span className="f3-exp-sub-coming">ARE COMING SOON</span>
                <div className="f3-exp-underline-bar f3-exp-bar-orange" />
              </div>
            </div>

            {/* Bottom row: Bold 14-15 + divider + CURRENT OUTLETS */}
            <div className="f3-exp-num-row-14">
              <span className="f3-exp-huge-14">14-15</span>
              
              <div className="f3-exp-stat-v-bar" aria-hidden="true" />
              
              <div className="f3-exp-label-block-14">
                <span className="f3-exp-title-current">CURRENT</span>
                <span className="f3-exp-title-current">OUTLETS</span>
                <div className="f3-exp-underline-bar f3-exp-bar-orange-short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
