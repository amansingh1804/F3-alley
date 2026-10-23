import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight, CalendarDays, ChevronDown, ChevronRight, ChevronUp, Clock3, Info, Instagram, MapPin, MoveUpRight, Phone, Play, Sparkles, Utensils, X } from "lucide-react";
import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { CarouselRail } from "@/components/CarouselRail";
import { FoodCourtExpansionBanner } from "@/components/FoodCourtExpansionBanner";
import { brands, events, facilities, gallery, offers, venueAddress, venueAddressShort, venueHours, amenities, foodCourtInfo } from "@/lib/siteData";

function SectionMarker({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return (
    <div className={`section-marker ${light ? "section-marker-light" : ""}`}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

function ArrowButton({ children, href = "#", dark = false }: { children: React.ReactNode; href?: string; dark?: boolean }) {
  return (
    <Link href={href} className={`arrow-button ${dark ? "arrow-button-dark" : ""}`}>
      <span>{children}</span><ArrowUpRight size={16} strokeWidth={1.8} />
    </Link>
  );
}

function AmenityCard({ amenity }: { amenity: typeof amenities[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`bento-card ${isExpanded ? "is-expanded" : ""}`}>
      <img src={amenity.image} alt={amenity.title} loading="lazy" className="bento-bg" />
      <div className="bento-overlay" />
      
      <div className="bento-card-header">
        <span className="bento-tag">{amenity.tag}</span>
        <span className="bento-number">{amenity.number}</span>
      </div>

      <div className="bento-card-body">
        <div className="bento-primary-head">
          <div className="bento-content">
            <h3>{amenity.title}</h3>
          </div>

          <button
            type="button"
            className="bento-read-more-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Show less info for" : "Read more about"} ${amenity.title}`}
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <div className={`bento-expandable-details ${isExpanded ? "is-open" : ""}`}>
          <p className="bento-purpose">{amenity.purpose}</p>

          {amenity.subcategories && (
            <div className="bento-subcategories">
              {amenity.subcategories.map((sub, i) => (
                <div key={sub.title} className="bento-sub-pill">
                  <span className="bento-sub-num">0{i + 1}</span>
                  <div className="bento-sub-text">
                    <h4>{sub.title}</h4>
                    <p>{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bento-detail-panel">
            <div className="bento-detail-row">
              <span className="bento-detail-label">Activities</span>
              <p>{amenity.activities}</p>
            </div>
            <div className="bento-detail-row">
              <span className="bento-detail-label">Audience</span>
              <p>{amenity.targetAudience}</p>
            </div>
            {(amenity.phone || amenity.timings) && (
              <div className="bento-contact-row">
                {amenity.phone && (
                  <a href={`tel:${amenity.phone.replace(/[\s-]/g, '')}`} className="bento-phone-badge">
                    <Phone size={11} /> {amenity.phone}
                  </a>
                )}
                {amenity.timings && (
                  <span className="bento-time-badge">
                    <Clock3 size={11} /> {amenity.timings}
                  </span>
                )}
              </div>
            )}
            <div className="bento-confirm-strip">
              <Info size={12} />
              <span>To confirm:</span>
              {amenity.detailsToConfirm.map((d) => (
                <span key={d} className="bento-confirm-chip">{d}</span>
              ))}
            </div>
            <div className="bento-actions">
              <Link href="/contact" className="bento-inquire">
                Inquire <ArrowUpRight size={13} />
              </Link>
              {amenity.phone && (
                <a href={`tel:${amenity.phone.replace(/[\s-]/g, '')}`} className="bento-call-direct">
                  <Phone size={12} /> Call direct
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [heroProgress, setHeroProgress] = useState(0);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setHeroProgress(Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main>
      <section className="hero-section" id="top" style={{ "--hero-progress": heroProgress } as CSSProperties}>
        <video className="hero-image" autoPlay loop muted playsInline aria-hidden="true" style={{ objectFit: 'cover' }}>
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content container">
          <Reveal mask>
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> A food + culture destination</p>
          </Reveal>
          <Reveal delay={100} mask>
            <h1 className="hero-title">F3<br /><em>ALLEY</em></h1>
          </Reveal>
          <div className="hero-bottomline">
            <Reveal delay={220}>
              <p className="hero-dek">Eat. Meet.<br /><span>Experience.</span></p>
              <p className="hero-location">Electronic City, Bengaluru</p>
            </Reveal>
            <Reveal delay={300} className="hero-note">
              <p>Come hungry.<br />Leave with a story.</p>
              <a href="#discover" className="scroll-cue" aria-label="Scroll to discover"><ArrowDownRight size={22} /></a>
            </Reveal>
          </div>
        </div>
        <div className="hero-side-label">Scroll to roam <span>↘</span></div>
        <div className="hero-scroll-progress" aria-hidden="true"><span /></div>
      </section>

      <div className="marquee-band" aria-label="F3 Alley tagline">
        <div className="marquee-track">
          <div className="marquee-group"><span>GOOD FOOD</span><i>✳</i><span>BIG ENERGY</span><i>✳</i><span>STAY A WHILE</span><i>✳</i><span>GOOD FOOD</span><i>✳</i><span>BIG ENERGY</span><i>✳</i><span>STAY A WHILE</span><i>✳</i></div>
          <div className="marquee-group" aria-hidden="true"><span>GOOD FOOD</span><i>✳</i><span>BIG ENERGY</span><i>✳</i><span>STAY A WHILE</span><i>✳</i><span>GOOD FOOD</span><i>✳</i><span>BIG ENERGY</span><i>✳</i><span>STAY A WHILE</span><i>✳</i></div>
        </div>
      </div>

      <FoodCourtExpansionBanner ctaHref="/brands" />

      <section className="intro-section section-padding" id="discover">
        <div className="container">
          <div className="intro-grid">
            <Reveal mask><div className="intro-side"><SectionMarker number="01" label="The Alley" /><div className="intro-side-facts"><div><b>{brands.length}</b><span>CONFIRMED BRANDS</span></div><div><b>01</b><span>FOOD DESTINATION</span></div><p>{venueAddressShort}</p></div></div></Reveal>
            <Reveal delay={100} mask>
              <div className="intro-copy">
                <p className="kicker">Not just a meal.</p>
                <h2>More than a destination.<br /><em>A community.</em></h2>
                <p className="body-large">F3 Alley brings people together around long tables, arcade lights, and shared plates — a neighbourhood gathering place where friends, families, and Bangalore's food lovers make a day of it.</p>
                <ArrowButton href="/about">Find your way in</ArrowButton>
              </div>
            </Reveal>
            <Reveal delay={180} className="intro-image-wrap">
              <div className="image-frame intro-image">
                <img src="https://ik.imagekit.io/7nsyhy1fv/F3/Photos/DSC03708.JPG?tr=w-1200,q-80" alt="Warmly lit food hall dining at F3 Alley" loading="lazy" />
                <span className="image-caption">Inside the feeling</span>
              </div>
            </Reveal>
          </div>
          <div className="signal-row">
            <div><span className="signal-number">01</span><span>PLACE TO EAT</span></div>
            <div><span className="signal-number">02</span><span>PLACE TO MEET</span></div>
            <div><span className="signal-number">03</span><span>PLACE TO STAY</span></div>
          </div>
        </div>
      </section>

      <section className="day-section section-padding">
        <div className="container">
          <div className="day-intro">
            <Reveal><SectionMarker number="01B" label="Choose your pace" /></Reveal>
            <Reveal delay={100} mask><h2>There is no<br /><em>wrong way in.</em></h2></Reveal>
            <Reveal delay={160}><p>Drop by for fifteen minutes, make a slow afternoon of it, or let the evening take the scenic route.</p></Reveal>
          </div>
          <div className="day-flow">
            <Reveal delay={60}><article><span>12:00</span><h3>Work, connect &amp; unwind</h3><p>Trade your desk for a fresh table, good coffee, and room to think between bites.</p></article></Reveal>
            <Reveal delay={120}><article><span>05:30</span><h3>The quick one</h3><p>One plate, one drink, back to the day with something better to talk about.</p></article></Reveal>
            <Reveal delay={180}><article><span>07:00</span><h3>The long table</h3><p>Bring the group, order for the middle, and let everyone find their favourite corner.</p></article></Reveal>
            <Reveal delay={240}><article><span>09:30</span><h3>The late turn</h3><p>Music up, lights low, something sweet on the way out. Stay until the story ends.</p></article></Reveal>
          </div>
        </div>
      </section>

      <section className="amenities-section section-padding" id="amenities">
        <div className="container">
          <div className="section-head">
            <Reveal><SectionMarker number="02" label="Amenity Details" /></Reveal>
            <Reveal delay={100} mask><h2>Spaces to play.<br /><em>Room to gather.</em></h2></Reveal>
            <Reveal delay={160}><p>F3 Alley, Neeladri Nagar, Electronic City<br />Recreational spaces &amp; community amenities.</p></Reveal>
          </div>
          <div className="bento-grid">
            {amenities.map((amenity, index) => (
              <Reveal key={amenity.id} delay={index * 100} className={`bento-item bento-item-${index + 1}`}>
                <AmenityCard amenity={amenity} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section section-padding" id="gallery">
        <div className="container">
          <div className="gallery-top"><Reveal><SectionMarker number="03" label="Seen at F3" /></Reveal><Reveal delay={100} mask><h2>Keep<br /><em>looking.</em></h2></Reveal><Reveal delay={160}><p>Some nights<br />look better in motion.</p></Reveal></div>
        </div>

        {/* Horizontal film-strip gallery */}
        <div className="filmstrip-wrap">
          <div className="filmstrip-rail">
            {gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 60} className="filmstrip-frame">
                <button className="filmstrip-btn" onClick={() => setSelectedImage(image.src)}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="filmstrip-caption">
                    <span className="filmstrip-tag">{image.tag}</span>
                    <MoveUpRight size={13} />
                  </div>
                  <div className="filmstrip-index">{String(index + 1).padStart(2, '0')}</div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container">
          <Reveal delay={200} className="filmstrip-footer">
            <div className="filmstrip-count">
              <span>{gallery.length}</span> moments captured
            </div>
            <ArrowButton href="/gallery">View full gallery</ArrowButton>
          </Reveal>
        </div>
      </section>

      <div className="marquee-band marquee-band-logos" aria-label="Our Brands">
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          <div className="marquee-group">
            {brands.map((brand) => (
              <div key={brand.slug} className="marquee-brand">
                <span>{brand.name}</span>
                <i>✳</i>
              </div>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {brands.map((brand) => (
              <div key={`${brand.slug}-clone`} className="marquee-brand">
                <span>{brand.name}</span>
                <i>✳</i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="brands-section section-padding dark-section" id="brands-preview">
        <div className="container">
          <div className="section-head light-head">
            <Reveal><SectionMarker number="04" label="Food Court & Brands" light /></Reveal>
            <Reveal delay={100} mask><h2>Discover the<br /><em>F3 Alley Food Court.</em></h2></Reveal>
            <Reveal delay={160}>
              <div className="food-court-header-note">
                <p>Explore a growing collection of food outlets at F3 Alley, bringing together a variety of food experiences in one vibrant destination.</p>
                <div className="food-court-expansion-pill">
                  <span>Currently featuring approximately 14–15 outlets, with expansion planned to accommodate up to 20 outlets.</span>
                </div>
              </div>
            </Reveal>
          </div>
          <CarouselRail label="Featured brands" dark className="brand-carousel">
            {brands.map((brand, index) => (
              <Reveal key={brand.slug} delay={index * 80} className={`brand-card-wrap brand-card-${index + 1} brand-carousel-item`}>
                <Link href="/brands" className="brand-card">
                  <div className="brand-card-image">
                    <img src={brand.image} alt={`${brand.name} food`} loading="eager" className="brand-bg-image" />
                    {brand.logo && <img src={brand.logo} alt="" className={`brand-card-hover-logo ${brand.logo.endsWith('.jpg') ? 'logo-jpg' : ''}`} />}
                    <span className="brand-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="brand-pill">{brand.category}</span>
                  </div>
                  <div className="brand-card-content">
                    <div><h3>{brand.name}</h3><p>{brand.cuisine} · {brand.location}</p></div>
                    <span className="circle-arrow"><ArrowUpRight size={17} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </CarouselRail>
          <Reveal className="center-cta"><ArrowButton href="/brands" dark>See every brand</ArrowButton></Reveal>
        </div>
      </section>

      <section className="experience-section section-padding dark-section">
        <div className="container experience-grid">
          <Reveal mask className="experience-poster">
            <div className="poster-image"><video src="/videos/experience-video.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><div className="poster-overlay" /><span className="poster-stamp">ALL<br />NIGHT<br />LONG</span></div>
            <p className="poster-caption">The kind of night you talk about tomorrow.</p>
          </Reveal>
          <Reveal delay={140} className="experience-copy">
            <SectionMarker number="05" label="Stay for the plot" light />
            <h2>Come for the<br /><em>food.</em><br />Stay for the <em>feeling.</em></h2>
            <p className="body-light">There is always another reason to stay: live music, pop-ups, big screen moments, tiny celebrations, and the table next to yours becoming your new favourite people.</p>
            <div className="facilities-list">{facilities.slice(0, 4).map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
            <ArrowButton href="/events" dark>See what is on</ArrowButton>
          </Reveal>
        </div>
      </section>
      <section className="offers-section section-padding" id="offers">
        <div className="container">
          <div className="section-head offers-head">
            <Reveal><SectionMarker number="06" label="A little extra" /></Reveal>
            <Reveal delay={100} mask><h2>Good things<br /><em>happening.</em></h2></Reveal>
            <Reveal delay={160}><p>Small reasons<br />to come back.</p></Reveal>
          </div>
          <div className="offer-grid">
            {offers.length ? offers.map((offer, index) => <Reveal key={offer.title} delay={index * 90} className="offer-card-wrap"><div className={`offer-card offer-${offer.color}`}><span className="offer-label">{offer.label}</span><h3>{offer.title}</h3><p>{offer.note}</p><span className="offer-arrow"><ArrowUpRight size={18} /></span></div></Reveal>) : <Reveal className="home-empty-card"><span>✳</span><div><h3>Offers coming soon.</h3><p>Keep an eye out for special promotions and happy hours from our line-up!</p></div><ArrowButton href="/brands">Explore brands</ArrowButton></Reveal>}
          </div>
        </div>
      </section>

      <section className="events-section section-padding dark-section" id="events">
        <div className="container">
          <div className="section-head light-head">
            <Reveal><SectionMarker number="07" label="Put it in the diary" light /></Reveal>
            <Reveal delay={100} mask><h2>Make plans<br /><em>worth keeping.</em></h2></Reveal>
            <Reveal delay={160}><p>There is always<br />something next.</p></Reveal>
          </div>
          <div className="event-list">
            {events.length ? events.map((event, index) => <Reveal key={event.title} delay={index * 100}><div className="event-row ticket-card"><div className="event-date"><span>{event.date}</span><b>{event.time}</b></div><div className="event-info"><span className="event-tag">{event.tag}</span><h3>{event.title}</h3><p>{event.location}</p></div><span className="event-arrow"><ArrowUpRight size={19} /></span></div></Reveal>) : <Reveal className="home-event-empty"><span>✳</span><div><h3>Events coming soon.</h3><p>Get ready for sports screenings, movie nights, arcade gaming, and much more fun activities!</p></div></Reveal>}
          </div>
          <Reveal className="center-cta"><ArrowButton href="/events" dark>See all events</ArrowButton></Reveal>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-image" aria-hidden="true" />
        <div className="visit-overlay" />
        <div className="container visit-content"><Reveal mask><SectionMarker number="08" label="Your next stop" light /></Reveal><Reveal delay={100} mask><h2>Find<br /><em>F3 Alley.</em></h2></Reveal><Reveal delay={180}><div className="visit-details"><p><MapPin size={18} /> {venueAddress}</p><p><Clock3 size={18} /> {venueHours}</p><p><Instagram size={18} /> <a href="https://www.instagram.com/f3alley" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>@f3alley</a></p></div><ArrowButton href="/contact" dark>Plan your visit</ArrowButton></Reveal></div>
      </section>

      <section className="newsletter-section section-padding" id="contact">
        <div className="container newsletter-grid">
          <Reveal>
            <SectionMarker number="09" label="Keep in touch" />
          </Reveal>
          <Reveal delay={100} mask>
            <h2>Good plans<br /><em>start here.</em></h2>
          </Reveal>
          <Reveal delay={180} className="newsletter-form-wrap">
            <p className="newsletter-intro">New openings, late-night reasons, and the occasional very good idea.</p>
            <div style={{ marginBottom: '20px' }}>
              <a 
                href="https://www.instagram.com/f3alley" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  fontSize: '11px', 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase', 
                  color: 'var(--clay)', 
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <Instagram size={15} /> Follow @f3alley on Instagram <ArrowUpRight size={13} />
              </a>
            </div>
            <form className="contact-form home-contact-form" onSubmit={(event) => { event.preventDefault(); setContactSent(true); }}>
              <label>
                Name
                <input required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" required placeholder="you@example.com" />
              </label>
              <label>
                What can we help with?
                <select defaultValue="general">
                  <option value="general">A general hello</option>
                  <option value="event">Plan a private event</option>
                  <option value="amenity">Book an amenity / space</option>
                  <option value="brand">Partner with F3 Alley</option>
                </select>
              </label>
              <label>
                Message
                <textarea required placeholder="Tell us the good stuff..." rows={4} />
              </label>
              <button type="submit" className="form-submit">
                <span>{contactSent ? "Message noted ✓" : "Send it over"}</span>
                <ArrowUpRight size={18} />
              </button>
              {contactSent && (
                <p className="form-success">
                  Thanks for reaching out! We've received your note and will get back to you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelectedImage(null)}><button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image preview"><X size={22} /></button><img src={selectedImage} alt="Expanded gallery preview" onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  );
}
