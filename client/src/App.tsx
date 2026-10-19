import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Instagram, Menu, Sparkles, X } from "lucide-react";
import { Link, Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import { Reveal } from "@/components/Reveal";
import { brands, events, gallery, venueAddress, venueHours, generalVenueInfo, foodCourtInfo } from "@/lib/siteData";
import { SlideTabs } from "@/components/SlideTabs";
import { FoodCourtExpansionBanner } from "@/components/FoodCourtExpansionBanner";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Amenities", href: "/#amenities" },
  { label: "The Alley", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "What's on", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const darkPage = location === "/" || location.startsWith("/events");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [location]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""} ${!darkPage ? "light-header" : ""}`}>
        <Link href="/" className="logo-lockup" aria-label="F3 Alley home"><img src="/f3-logo.png" alt="F3 Alley" /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <SlideTabs />
        </nav>
        <div className="header-actions"><Link href="/contact" className="header-cta">Visit us <ArrowUpRight size={15} /></Link><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </header>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          <p className="mobile-menu-kicker">The F3 guide</p>
          {footerLinks.map((item, index) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="mobile-link"
              onClick={(e) => {
                setMenuOpen(false);
                if (item.href.includes("#")) {
                  const id = item.href.split("#")[1];
                  const el = document.getElementById(id);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", item.href);
                  }
                }
              }}
            >
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} />
            </Link>
          ))}
          <div className="mobile-menu-footer"><span>Eat. Meet. Experience.</span><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /> @f3alley</a></div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo"><img src="/f3-logo.png" alt="F3 Alley" /></Link>
            <p>More than a food court.<br />A place to make a day of it.</p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Explore</p>
            {footerLinks.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    const id = item.href.split("#")[1];
                    const el = document.getElementById(id);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", item.href);
                    }
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-links">
            <p className="footer-label">Find us</p>
            <span><a href={generalVenueInfo.googleMapsLink} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{venueAddress}</a></span>
            <span>{venueHours}</span>
            <span>{generalVenueInfo.phone} · <a href={`mailto:${generalVenueInfo.email}`}>{generalVenueInfo.email}</a></span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© F3 Alley 2026</span>
          <span>Built for good times <i>✳</i></span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function PageShell({ children, title, eyebrow = "The F3 guide", dark = false, heroLogo, heroVideo = "/videos/hero-bg.mp4" }: { children: ReactNode; title: ReactNode; eyebrow?: string; dark?: boolean; heroLogo?: string; heroVideo?: string }) {
  return <main className={`inner-page ${dark ? "inner-page-dark" : ""}`}><section className="inner-hero"><video className="inner-hero-video" autoPlay loop muted playsInline aria-hidden="true"><source src={heroVideo} type="video/mp4" /></video><div className="container inner-hero-grid"><Reveal><p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p></Reveal>{heroLogo ? <Reveal delay={50}><img src={heroLogo} alt="" className="inner-hero-logo" /></Reveal> : <h1>{title}</h1>}<Reveal delay={180}><span className="inner-hero-mark">F3<br />↘</span></Reveal></div></section>{children}</main>;
}

function AboutPage() {
  return <PageShell title={<>The<br /><em>Alley.</em></>} eyebrow="A new kind of gathering place"><section className="inner-content section-padding"><div className="container story-grid"><Reveal><p className="kicker">The short version</p></Reveal><Reveal delay={100} mask><div><h2>Come as you are.<br /><em>Stay as you like.</em></h2><p className="body-large">F3 Alley is built around a simple idea: good places give you more reasons to linger. We are shaping a home for food worth crossing town for, culture worth talking about, and the kind of evenings that refuse to be rushed.</p></div></Reveal></div><div className="container about-image-grid"><Reveal className="about-image-large"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85" alt="Food hall interior" /></Reveal><Reveal delay={120} className="about-image-small"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85" alt="Shared food on a table" /><p>Built for the quick bite.<br />Designed for the long stay.</p></Reveal></div><div className="container principles-grid"><Reveal><span className="section-marker"><b>01</b><span>Our point of view</span></span></Reveal>{["Food first, always.", "Work, Connect & Unwind.", "More reasons to stay.", "Everyone has a table."].map((item, index) => <Reveal key={item} delay={index * 70}><div className="principle"><span>0{index + 1}</span><h3>{item}</h3><p>Considered details, warm energy, and room for your version of the day.</p></div></Reveal>)}</div></section></PageShell>;
}

function BrandsPage() {
  return (
    <PageShell title={<>The<br /><em>line-up.</em></>} eyebrow="Find your table">
      <FoodCourtExpansionBanner 
        isDarkTheme 
        ctaHref="#brand-directory" 
        onCtaClick={() => {
          const el = document.getElementById("brand-directory");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <section className="directory-section section-padding" id="brand-directory">
        <div className="container directory-intro">
          <Reveal><p className="kicker">Official Directory · All your favorites</p></Reveal>
          <Reveal delay={100} mask><h2>Different cravings.<br /><em>One good place.</em></h2></Reveal>
          <Reveal delay={160}><p className="directory-note">Explore the confirmed brands and operating hours at F3 Alley. The perfect spot to gather, eat, and stay a while.</p></Reveal>
        </div>
        <div className="container directory-grid">
          {brands.map((brand, index) => (
            <Reveal key={brand.slug} delay={(index % 4) * 70}>
              <div className="directory-card">
                <div className="directory-card-img-wrap">
                  <img src={brand.image} alt={`${brand.name} listing`} loading="lazy" className="directory-food-image" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <img src={brand.logo} alt={`${brand.name} logo`} className={`brand-card-hover-logo ${brand.logo.endsWith('.jpg') ? 'logo-jpg' : ''}`} loading="lazy" />
                </div>
                <p>{brand.cuisine} · {brand.location}</p>
                <h3>{brand.name}</h3>
                <small>{brand.description}</small>
                {brand.openingHours && (
                  <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--ink-soft)' }}>
                    <strong style={{ color: 'var(--ink)' }}>Hours:</strong> {brand.openingHours}
                  </div>
                )}
                {brand.signatureItems && (
                  <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--ink-soft)' }}>
                    <strong style={{ color: 'var(--ink)' }}>Must Try:</strong> {brand.signatureItems}
                  </div>
                )}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {brand.menuLink && <a href={brand.menuLink} target="_blank" rel="noreferrer" className="directory-brand-btn">Menu <ArrowUpRight size={12} /></a>}
                  {brand.websiteLink && <a href={brand.websiteLink} target="_blank" rel="noreferrer" className="directory-brand-btn">Order <ArrowUpRight size={12} /></a>}
                  {brand.zomatoLink && <a href={brand.zomatoLink} target="_blank" rel="noreferrer" className="directory-brand-btn brand-btn-zomato">Zomato <ArrowUpRight size={12} /></a>}
                  {brand.swiggyLink && <a href={brand.swiggyLink} target="_blank" rel="noreferrer" className="directory-brand-btn brand-btn-swiggy">Swiggy <ArrowUpRight size={12} /></a>}
                  {brand.instagram && <a href={brand.instagram} target="_blank" rel="noreferrer" className="directory-brand-btn brand-btn-instagram">Instagram <ArrowUpRight size={12} /></a>}
                  {brand.contact && <a href={`tel:${brand.contact}`} className="directory-brand-btn">Call: {brand.contact}</a>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function EventsPage() {
  return (
    <PageShell title={<>What's<br /><em>on.</em></>} eyebrow="Put it in the diary" dark>
      <section className="inner-events section-padding">
        <div className="container">
          <Reveal><p className="kicker" style={{marginBottom: "40px"}}>Make plans worth keeping</p></Reveal>
          <div className="event-list">
            {events.length ? events.map((event, index) => (
              <Reveal key={event.title} delay={index * 90}>
                <div className="event-row ticket-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
                  <div className="event-date">
                    <span>{event.date}</span>
                    <b>{event.time}</b>
                  </div>
                  <div className="event-info">
                    <span className="event-tag">{event.tag}</span>
                    <h3 style={{color: 'var(--cream)'}}>{event.title}</h3>
                    <p>{event.location}</p>
                    {event.description && <p style={{ marginTop: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{event.description}</p>}
                  </div>
                </div>
              </Reveal>
            )) : (
              <div className="empty-state event-empty">Events coming soon. Live music, screenings, community programming, and other event details will appear here once confirmed.</div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function GalleryPage() {
  return <PageShell title={<>Seen<br /><em>at F3.</em></>} eyebrow="Keep looking"><section className="directory-section section-padding"><div className="container gallery-page-grid">{gallery.concat(gallery).map((image, index) => <Reveal key={`${image.src}-${index}`} delay={(index % 4) * 70} className={index % 3 === 0 ? "gallery-page-item gallery-tall" : "gallery-page-item"}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.tag} <ArrowUpRight size={14} /></span></Reveal>)}</div></section></PageShell>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <PageShell title={<>Let's<br /><em>make a plan.</em></>} eyebrow="Say hello"><section className="contact-section section-padding"><div className="container contact-grid"><Reveal><p className="kicker">For bookings, brands, and very good questions</p><h2>Tell us what<br /><em>you have in mind.</em></h2><div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}><p><strong>F3 Alley</strong></p><p><a href={generalVenueInfo.googleMapsLink} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{generalVenueInfo.address}</a></p><p><strong>Landmark:</strong> {generalVenueInfo.landmark}</p><p><strong>Parking:</strong> {generalVenueInfo.parking}</p><p><strong>Transit:</strong> {generalVenueInfo.nearestMetro} | Bus: {generalVenueInfo.nearestBusStop}</p><p><strong>Travel:</strong> {generalVenueInfo.distanceAirport} from Airport, {generalVenueInfo.distanceRailway} from Railway</p><p>{venueHours}</p><p>Phone: {generalVenueInfo.phone} | Email: {generalVenueInfo.email}</p></div></Reveal><Reveal delay={140}><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input type="email" required placeholder="you@example.com" /></label><label>What can we help with?<select defaultValue="general"><option value="general">A general hello</option><option value="event">Plan a private event</option><option value="brand">Partner with F3 Alley</option></select></label><label>Message<textarea required placeholder="Tell us the good stuff..." rows={5} /></label><button type="submit" className="form-submit">{sent ? "Message noted ✓" : "Send it over"}<ArrowUpRight size={18} /></button>{sent && <p className="form-success">Thanks — this is a prototype inbox for now, but the interaction is ready for your real form endpoint.</p>}</form></Reveal></div></section></PageShell>;
}

function NotFound() { return <PageShell title={<>Wrong<br /><em>turn.</em></>} eyebrow="404"><section className="directory-section section-padding"><div className="container empty-state large-empty">This page wandered off. <Link href="/">Back to the alley <ArrowUpRight size={18} /></Link></div></section></PageShell>; }

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/brands" component={BrandsPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() { return <div className="app-shell"><Header /><Router /><Footer /></div>; }
