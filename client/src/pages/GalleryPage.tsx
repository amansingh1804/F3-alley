import { useState, useEffect, useMemo, useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Clock, 
  Compass, 
  Eye, 
  Filter, 
  Heart, 
  Maximize2, 
  Share2, 
  Sparkles, 
  X, 
  LayoutGrid, 
  Columns, 
  Film,
  MapPin,
  Check,
  Instagram
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { gallery, type GalleryPhoto } from "@/lib/siteData";

type CategoryFilter = "All" | "Architecture" | "Night Vibes" | "Food & Dining" | "Zen & Nature" | "Recreation";
type ViewMode = "curated" | "masonry" | "filmstrip";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("curated");
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    gallery.forEach((p) => {
      initial[p.id] = p.likes;
    });
    return initial;
  });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const filmstripRef = useRef<HTMLDivElement>(null);

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "All") return gallery;
    return gallery.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Current spotlight photo
  const spotlightPhoto = gallery[activeSpotlightIndex] || gallery[0];

  // Handle like toggle
  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setUserLiked((prev) => {
      const isLiked = !prev[id];
      setLikesMap((likes) => ({
        ...likes,
        [id]: (likes[id] || 0) + (isLiked ? 1 : -1)
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);

      if (e.key === "Escape") {
        setLightboxPhoto(null);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxPhoto, filteredPhotos]);

  // Copy share link
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: gallery.length },
    { label: "Architecture", count: gallery.filter((p) => p.category === "Architecture").length },
    { label: "Night Vibes", count: gallery.filter((p) => p.category === "Night Vibes").length },
    { label: "Food & Dining", count: gallery.filter((p) => p.category === "Food & Dining").length },
    { label: "Zen & Nature", count: gallery.filter((p) => p.category === "Zen & Nature").length },
    { label: "Recreation", count: gallery.filter((p) => p.category === "Recreation").length },
  ];

  // Scroll filmstrip
  const scrollFilmstrip = (direction: "left" | "right") => {
    if (!filmstripRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    filmstripRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="gallery-experience">
      {/* Editorial Intro Header */}
      <section className="gallery-hero-intro">
        <div className="container">
          <div className="gallery-hero-meta">
            <Reveal>
              <div className="gallery-eyebrow">
                <span className="live-pulse" />
                <span>ARCHIVAL PHOTO STREAM · NEELADRI NAGAR, E-CITY</span>
              </div>
            </Reveal>
            <Reveal delay={100} mask>
              <h1 className="gallery-headline">
                Seen in<br />
                <em>the Alley.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="gallery-lead">
                An authentic visual record of Bengaluru’s newest gathering grounds —
                sunlit afternoon tables, arcade neon, quiet Zen corners, and stepped amphitheatre nights.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Spotlight Hero Stage */}
      <section className="gallery-spotlight-section">
        <div className="container">
          <div className="spotlight-card">
            {/* Visual Frame */}
            <div 
              className="spotlight-visual"
              onClick={() => setLightboxPhoto(spotlightPhoto)}
            >
              <img 
                key={spotlightPhoto.id}
                src={spotlightPhoto.src} 
                alt={spotlightPhoto.alt}
                className="spotlight-img"
              />
              <div className="spotlight-gradient" />
              
              <button 
                className="spotlight-expand-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxPhoto(spotlightPhoto);
                }}
                aria-label="Expand image"
              >
                <Maximize2 size={16} />
                <span>Fullscreen</span>
              </button>

              <div className="spotlight-counter">
                <span>{String(activeSpotlightIndex + 1).padStart(2, "0")}</span>
                <i>/</i>
                <span>{String(gallery.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Spotlight Metadata & Narrative */}
            <div className="spotlight-info">
              <div className="spotlight-tags">
                <span className="spotlight-cat-tag">{spotlightPhoto.category}</span>
                <span className="spotlight-time-tag">
                  <Clock size={12} /> {spotlightPhoto.timeOfDay}
                </span>
              </div>

              <h2 className="spotlight-title">{spotlightPhoto.title}</h2>
              
              <div className="spotlight-location">
                <MapPin size={14} />
                <span>{spotlightPhoto.location}</span>
              </div>

              <p className="spotlight-caption">{spotlightPhoto.caption}</p>

              <div className="spotlight-actions">
                <button 
                  className={`spotlight-like-btn ${userLiked[spotlightPhoto.id] ? "is-liked" : ""}`}
                  onClick={(e) => toggleLike(e, spotlightPhoto.id)}
                >
                  <Heart size={16} fill={userLiked[spotlightPhoto.id] ? "currentColor" : "none"} />
                  <span>{likesMap[spotlightPhoto.id] || 0}</span>
                </button>

                <button 
                  className="spotlight-share-btn"
                  onClick={handleShare}
                  title="Share link"
                >
                  {copiedLink ? <Check size={16} className="text-lime" /> : <Share2 size={16} />}
                  <span>{copiedLink ? "Link Copied" : "Share"}</span>
                </button>

                <div className="spotlight-nav-controls">
                  <button 
                    className="spotlight-nav-btn"
                    onClick={() => setActiveSpotlightIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                    aria-label="Previous spotlight photo"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    className="spotlight-nav-btn"
                    onClick={() => setActiveSpotlightIndex((prev) => (prev + 1) % gallery.length)}
                    aria-label="Next spotlight photo"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Thumbnails rail for quick switching */}
              <div className="spotlight-rail-header">
                <span>Select a Perspective:</span>
              </div>
              <div className="spotlight-thumbs-rail">
                {gallery.map((photo, index) => (
                  <button
                    key={photo.id}
                    className={`spotlight-thumb ${index === activeSpotlightIndex ? "is-active" : ""}`}
                    onClick={() => setActiveSpotlightIndex(index)}
                    aria-label={`Select ${photo.title}`}
                  >
                    <img src={photo.src} alt={photo.title} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Controls Bar: Filter Pills + Layout Switcher */}
      <section className="gallery-toolbar-section">
        <div className="container">
          <div className="gallery-toolbar">
            {/* Category Filter Pills */}
            <div className="gallery-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  role="tab"
                  aria-selected={selectedCategory === cat.label}
                  className={`filter-pill ${selectedCategory === cat.label ? "is-active" : ""}`}
                  onClick={() => setSelectedCategory(cat.label)}
                >
                  <span>{cat.label}</span>
                  <span className="pill-count">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="gallery-view-modes">
              <span className="view-mode-label">Layout:</span>
              <button 
                className={`view-mode-btn ${viewMode === "curated" ? "is-active" : ""}`}
                onClick={() => setViewMode("curated")}
                title="Curated Lookbook"
              >
                <LayoutGrid size={16} />
                <span>Curated</span>
              </button>
              <button 
                className={`view-mode-btn ${viewMode === "masonry" ? "is-active" : ""}`}
                onClick={() => setViewMode("masonry")}
                title="Masonry Wall"
              >
                <Columns size={16} />
                <span>Masonry</span>
              </button>
              <button 
                className={`view-mode-btn ${viewMode === "filmstrip" ? "is-active" : ""}`}
                onClick={() => setViewMode("filmstrip")}
                title="Filmstrip Reel"
              >
                <Film size={16} />
                <span>Reel</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Display */}
      <section className="gallery-display-section">
        <div className="container">
          {filteredPhotos.length === 0 ? (
            <div className="gallery-empty-state">
              <Sparkles size={28} />
              <h3>No moments found in this category</h3>
              <p>Try switching to "All" to browse the full visual collection.</p>
              <button className="reset-filter-btn" onClick={() => setSelectedCategory("All")}>
                View All Moments
              </button>
            </div>
          ) : viewMode === "filmstrip" ? (
            /* Filmstrip Mode */
            <div className="filmstrip-mode-wrap">
              <div className="filmstrip-controls">
                <button onClick={() => scrollFilmstrip("left")} aria-label="Scroll left">
                  <ArrowLeft size={18} />
                </button>
                <button onClick={() => scrollFilmstrip("right")} aria-label="Scroll right">
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="filmstrip-carousel-track" ref={filmstripRef}>
                {filteredPhotos.map((photo, index) => (
                  <article 
                    key={photo.id}
                    className="filmstrip-slide"
                    onClick={() => setLightboxPhoto(photo)}
                  >
                    <div className="filmstrip-img-box">
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                      <div className="filmstrip-slide-overlay">
                        <span className="slide-tag">{photo.tag}</span>
                        <h4>{photo.title}</h4>
                        <p>{photo.location}</p>
                      </div>
                      <span className="slide-num">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : viewMode === "masonry" ? (
            /* Masonry Mode */
            <div className="gallery-masonry-wall">
              {filteredPhotos.map((photo, index) => (
                <article
                  key={photo.id}
                  className="masonry-item"
                  onClick={() => setLightboxPhoto(photo)}
                >
                  <div className="masonry-img-wrap">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    <div className="masonry-hover-panel">
                      <div className="masonry-meta-top">
                        <span className="masonry-cat">{photo.category}</span>
                        <button 
                          className={`card-heart-btn ${userLiked[photo.id] ? "is-liked" : ""}`}
                          onClick={(e) => toggleLike(e, photo.id)}
                        >
                          <Heart size={14} fill={userLiked[photo.id] ? "currentColor" : "none"} />
                          <span>{likesMap[photo.id] || 0}</span>
                        </button>
                      </div>
                      <div className="masonry-meta-bottom">
                        <h4>{photo.title}</h4>
                        <p>{photo.location}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Curated Lookbook Mode (Default) */
            <div className="gallery-curated-grid">
              {filteredPhotos.map((photo, index) => {
                const isWide = index % 5 === 0;
                const isTall = index % 3 === 1;

                return (
                  <article
                    key={photo.id}
                    className={`curated-card ${isWide ? "curated-wide" : ""} ${isTall ? "curated-tall" : ""}`}
                    onClick={() => setLightboxPhoto(photo)}
                  >
                    <div className="curated-img-container">
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="curated-card-overlay" />

                      {/* Header Badge */}
                      <div className="curated-card-head">
                        <span className="curated-idx">{String(index + 1).padStart(2, "0")}</span>
                        <span className="curated-pill">{photo.tag}</span>
                      </div>

                      {/* Hover / Slide-up Content */}
                      <div className="curated-card-foot">
                        <div className="curated-foot-content">
                          <span className="curated-location">
                            <MapPin size={11} /> {photo.location}
                          </span>
                          <h3 className="curated-title">{photo.title}</h3>
                          <p className="curated-desc">{photo.caption}</p>
                        </div>

                        <div className="curated-card-actions">
                          <button 
                            className={`card-like-pill ${userLiked[photo.id] ? "is-liked" : ""}`}
                            onClick={(e) => toggleLike(e, photo.id)}
                            aria-label="Like photo"
                          >
                            <Heart size={13} fill={userLiked[photo.id] ? "currentColor" : "none"} />
                            <span>{likesMap[photo.id] || 0}</span>
                          </button>
                          
                          <div className="curated-expand-pill">
                            <Maximize2 size={13} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* Atmospheric Editorial Cards inside Curated View */}
              <div className="curated-editorial-tile">
                <span className="quote-mark">“</span>
                <p className="editorial-quote">
                  Bangalore’s evenings were meant to be unhurried. Pull up a chair, order for the center of the table, and stay until the lights dim.
                </p>
                <span className="editorial-author">— F3 Alley Manifesto</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Fullscreen Lightbox Modal */}
      {lightboxPhoto && (
        <div 
          className="gallery-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxPhoto(null)}
        >
          <div 
            className="gallery-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="lightbox-top-bar">
              <div className="lightbox-index-badge">
                <span>
                  {String(filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id) + 1).padStart(2, "0")}
                </span>
                <i>/</i>
                <span>{String(filteredPhotos.length).padStart(2, "0")}</span>
                <span className="lightbox-cat-badge">{lightboxPhoto.category}</span>
              </div>

              <div className="lightbox-top-actions">
                <button 
                  className={`lightbox-like-btn ${userLiked[lightboxPhoto.id] ? "is-liked" : ""}`}
                  onClick={(e) => toggleLike(e, lightboxPhoto.id)}
                  title="Like photo"
                  aria-label="Like photo"
                >
                  <Heart size={14} fill={userLiked[lightboxPhoto.id] ? "currentColor" : "none"} />
                  <span>{likesMap[lightboxPhoto.id] || 0}</span>
                </button>

                <button 
                  className="lightbox-icon-btn"
                  onClick={handleShare}
                  title="Copy link"
                  aria-label="Share link"
                >
                  {copiedLink ? <Check size={16} /> : <Share2 size={16} />}
                </button>

                <button 
                  className="lightbox-close-btn"
                  onClick={() => setLightboxPhoto(null)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Central Stage */}
            <div className="lightbox-stage">
              <button 
                className="lightbox-nav-arrow arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
                  const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
                  setLightboxPhoto(filteredPhotos[prevIndex]);
                }}
                aria-label="Previous photo"
              >
                <ArrowLeft size={22} />
              </button>

              <div className="lightbox-img-wrapper">
                <img 
                  key={lightboxPhoto.id}
                  src={lightboxPhoto.src} 
                  alt={lightboxPhoto.alt}
                  className="lightbox-full-img"
                />
              </div>

              <button 
                className="lightbox-nav-arrow arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
                  const nextIndex = (currentIndex + 1) % filteredPhotos.length;
                  setLightboxPhoto(filteredPhotos[nextIndex]);
                }}
                aria-label="Next photo"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            {/* Bottom Caption & Details */}
            <div className="lightbox-foot">
              <div className="lightbox-caption-block">
                <h3>{lightboxPhoto.title}</h3>
                <div className="lightbox-meta-pills">
                  <span><MapPin size={12} /> {lightboxPhoto.location}</span>
                  <span><Clock size={12} /> {lightboxPhoto.timeOfDay}</span>
                </div>
                <p>{lightboxPhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Invite Footer */}
      <section className="gallery-community-banner">
        <div className="container">
          <div className="community-banner-card">
            <div className="community-banner-content">
              <span className="community-tag">✳ TAG US IN YOUR STORY</span>
              <h2>Captured something memorable?</h2>
              <p>Share your perspective of F3 Alley on Instagram with <strong>#F3Alley</strong> and <strong>@f3alley</strong> to be featured on our digital screens.</p>
            </div>
            <a 
              href="https://www.instagram.com/f3alley" 
              target="_blank" 
              rel="noreferrer"
              className="community-insta-btn"
            >
              <Instagram size={17} />
              <span>Follow @f3alley</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
