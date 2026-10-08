import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { Link, Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import { Reveal } from "@/components/Reveal";
import { brands, dishes, events, faqItems, facilities, gallery, offers, venueAddress, venueHours, generalVenueInfo } from "@/lib/siteData";
import { SlideTabs } from "@/components/SlideTabs";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "The Alley", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Food map", href: "/food" },
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
          {footerLinks.map((item, index) => <Link key={item.href} href={item.href} className="mobile-link"><span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} /></Link>)}
          <div className="mobile-menu-footer"><span>Eat. Meet. Experience.</span><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /> @f3alley</a></div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div><Link href="/" className="footer-logo"><img src="/f3-logo.png" alt="F3 Alley" /></Link><p>More than a food court.<br />A place to make a day of it.</p></div><div className="footer-links"><p className="footer-label">Explore</p>{footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div className="footer-links"><p className="footer-label">Find us</p><span><a href={generalVenueInfo.googleMapsLink} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{venueAddress}</a></span><span>{venueHours}</span><span>{generalVenueInfo.phone} · <a href={`mailto:${generalVenueInfo.email}`}>{generalVenueInfo.email}</a></span></div></div><div className="footer-bottom"><span>© F3 Alley 2026</span><span>Built for good times <i>✳</i></span><a href="#top">Back to top ↑</a></div></div></footer>;
}

function PageShell({ children, title, eyebrow = "The F3 guide", dark = false, heroLogo, heroVideo = "/videos/hero-bg.mp4" }: { children: ReactNode; title: ReactNode; eyebrow?: string; dark?: boolean; heroLogo?: string; heroVideo?: string }) {
  return <main className={`inner-page ${dark ? "inner-page-dark" : ""}`}><section className="inner-hero"><video className="inner-hero-video" autoPlay loop muted playsInline aria-hidden="true"><source src={heroVideo} type="video/mp4" /></video><div className="container inner-hero-grid"><Reveal><p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p></Reveal>{heroLogo ? <Reveal delay={50}><img src={heroLogo} alt="" className="inner-hero-logo" /></Reveal> : <h1>{title}</h1>}<Reveal delay={180}><span className="inner-hero-mark">F3<br />↘</span></Reveal></div></section>{children}</main>;
}

function AboutPage() {
  return <PageShell title={<>The<br /><em>Alley.</em></>} eyebrow="A new kind of gathering place"><section className="inner-content section-padding"><div className="container story-grid"><Reveal><p className="kicker">The short version</p></Reveal><Reveal delay={100} mask><div><h2>Come as you are.<br /><em>Stay as you like.</em></h2><p className="body-large">F3 Alley is built around a simple idea: good places give you more reasons to linger. We are shaping a home for food worth crossing town for, culture worth talking about, and the kind of evenings that refuse to be rushed.</p></div></Reveal></div><div className="container about-image-grid"><Reveal className="about-image-large"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85" alt="Food hall interior" /></Reveal><Reveal delay={120} className="about-image-small"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85" alt="Shared food on a table" /><p>Built for the quick bite.<br />Designed for the long stay.</p></Reveal></div><div className="container principles-grid"><Reveal><span className="section-marker"><b>01</b><span>Our point of view</span></span></Reveal>{["Food first, always.", "More reasons to stay.", "A little unexpected.", "Everyone has a table."].map((item, index) => <Reveal key={item} delay={index * 70}><div className="principle"><span>0{index + 1}</span><h3>{item}</h3><p>Considered details, warm energy, and room for your version of the day.</p></div></Reveal>)}</div></section></PageShell>;
}

function BrandsPage() {
  return <PageShell title={<>The<br /><em>line-up.</em></>} eyebrow="Find your table"><section className="directory-section section-padding"><div className="container directory-intro"><Reveal><p className="kicker">Official Directory · All your favorites</p></Reveal><Reveal delay={100} mask><h2>Different cravings.<br /><em>One good place.</em></h2></Reveal><Reveal delay={160}><p className="directory-note">Explore the confirmed brands and operating hours at F3 Alley. The perfect spot to gather, eat, and stay a while.</p></Reveal></div><div className="container directory-grid">{brands.map((brand, index) => <Reveal key={brand.slug} delay={(index % 4) * 70}><Link href={`/brands/${brand.slug}`} className="directory-card"><div className="directory-card-img-wrap"><img src={brand.image} alt={`${brand.name} listing`} loading="lazy" className="directory-food-image" /><span>{String(index + 1).padStart(2, "0")}</span><img src={brand.logo} alt={`${brand.name} logo`} className={`brand-card-hover-logo ${brand.logo.endsWith('.jpg') ? 'logo-jpg' : ''}`} loading="lazy" /></div><p>{brand.cuisine} · {brand.location}</p><h3>{brand.name}</h3><small>{brand.description}</small><b>Explore listing <ArrowUpRight size={15} /></b></Link></Reveal>)}</div></section></PageShell>;
}

function FoodPage() {
  const [query, setQuery] = useState("");
  const filtered = dishes.filter((dish) => `${dish.name} ${dish.brand} ${dish.category}`.toLowerCase().includes(query.toLowerCase()));
  return <PageShell title={<>The<br /><em>food map.</em></>} eyebrow="Follow your appetite"><section className="directory-section section-padding"><div className="container food-page-top"><Reveal><p className="kicker">No wrong turns here</p></Reveal><Reveal delay={100} mask><h2>Start with a craving.<br /><em>See where it leads.</em></h2></Reveal><Reveal delay={160}><div className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes, brands, moods..." aria-label="Search food" /></div></Reveal></div><div className="container food-page-grid">{filtered.map((dish, index) => <Reveal key={dish.name} delay={index * 50}><article className="food-card directory-food-card"><div className="food-image"><img src={dish.image} alt={dish.name} loading="lazy" /><span className="food-price">{dish.price}</span></div><div className="food-card-copy"><p>{dish.brand} · {dish.category}</p><h3>{dish.name}</h3><span>{dish.note}</span></div></article></Reveal>)}{filtered.length === 0 && <div className="empty-state">No exact matches yet. Try “momos”, “drinks”, or “sweet”.</div>}</div></section></PageShell>;
}

function EventsPage() {
  return <PageShell title={<>What's<br /><em>on.</em></>} eyebrow="Put it in the diary" dark><section className="inner-events section-padding"><div className="container"><Reveal><p className="kicker" style={{marginBottom: "40px"}}>Make plans worth keeping</p></Reveal><div className="event-list">{events.length ? events.map((event, index) => <Reveal key={event.title} delay={index * 90}><Link href={`/events/${event.title.toLowerCase().replaceAll(" ", "-")}`} className="event-row ticket-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}><div className="event-date"><span>{event.date}</span><b>{event.time}</b></div><div className="event-info"><span className="event-tag">{event.tag}</span><h3 style={{color: 'var(--cream)'}}>{event.title}</h3><p>{event.location}</p></div><span className="event-arrow"><ArrowUpRight size={19} /></span></Link></Reveal>) : <div className="empty-state event-empty">Events coming soon. Live music, screenings, community programming, and other event details will appear here once confirmed.</div>}</div></div></section></PageShell>;
}

function OffersPage() {
  return <PageShell title={<>Good<br /><em>things.</em></>} eyebrow="A little extra"><section className="directory-section section-padding"><div className="container directory-intro"><Reveal><p className="kicker">Reasons to come back</p></Reveal><Reveal delay={100} mask><h2>Keep the good<br /><em>stuff going.</em></h2></Reveal></div><div className="container offer-directory-grid">{offers.length ? offers.map((offer, index) => <Reveal key={offer.title} delay={index * 90}><article className={`offer-card offer-${offer.color}`}><span className="offer-label">{offer.label}</span><h3>{offer.title}</h3><p>{offer.note}</p><span className="offer-code">F3 / {String(index + 1).padStart(2, "0")}</span></article></Reveal>) : <div className="empty-state offer-empty"><SparklesIcon /> Offers coming soon. No live promotions have been supplied yet.</div>}</div></section></PageShell>;
}

function SparklesIcon() { return <span aria-hidden="true">✳</span>; }

function GalleryPage() {
  return <PageShell title={<>Seen<br /><em>at F3.</em></>} eyebrow="Keep looking"><section className="directory-section section-padding"><div className="container gallery-page-grid">{gallery.concat(gallery).map((image, index) => <Reveal key={`${image.src}-${index}`} delay={(index % 4) * 70} className={index % 3 === 0 ? "gallery-page-item gallery-tall" : "gallery-page-item"}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.tag} <ArrowUpRight size={14} /></span></Reveal>)}</div></section></PageShell>;
}

function FacilitiesPage() {
  return <PageShell title={<>Make<br /><em>yourself</em><br />at home.</>} eyebrow="The useful stuff"><section className="directory-section section-padding"><div className="container directory-intro"><Reveal><p className="kicker">The F3 basics</p></Reveal><Reveal delay={100} mask><h2>Everything you need<br /><em>to settle in.</em></h2></Reveal></div><div className="container facilities-grid">{facilities.map((item, index) => <Reveal key={item} delay={index * 60}><div className="facility-card"><span>0{index + 1}</span><h3>{item}</h3><p>Ready for your next good idea.</p></div></Reveal>)}</div></section></PageShell>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <PageShell title={<>Let's<br /><em>make a plan.</em></>} eyebrow="Say hello"><section className="contact-section section-padding"><div className="container contact-grid"><Reveal><p className="kicker">For bookings, brands, and very good questions</p><h2>Tell us what<br /><em>you have in mind.</em></h2><div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}><p><strong>F3 Alley</strong></p><p><a href={generalVenueInfo.googleMapsLink} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{generalVenueInfo.address}</a></p><p><strong>Landmark:</strong> {generalVenueInfo.landmark}</p><p><strong>Parking:</strong> {generalVenueInfo.parking}</p><p><strong>Transit:</strong> {generalVenueInfo.nearestMetro} | Bus: {generalVenueInfo.nearestBusStop}</p><p><strong>Travel:</strong> {generalVenueInfo.distanceAirport} from Airport, {generalVenueInfo.distanceRailway} from Railway</p><p>{venueHours}</p><p>Phone: {generalVenueInfo.phone} | Email: {generalVenueInfo.email}</p></div></Reveal><Reveal delay={140}><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input type="email" required placeholder="you@example.com" /></label><label>What can we help with?<select defaultValue="general"><option value="general">A general hello</option><option value="event">Plan a private event</option><option value="brand">Partner with F3 Alley</option></select></label><label>Message<textarea required placeholder="Tell us the good stuff..." rows={5} /></label><button type="submit" className="form-submit">{sent ? "Message noted ✓" : "Send it over"}<ArrowUpRight size={18} /></button>{sent && <p className="form-success">Thanks — this is a prototype inbox for now, but the interaction is ready for your real form endpoint.</p>}</form></Reveal></div></section></PageShell>;
}

function DetailPage({ type, slug }: { type: "brand" | "event"; slug?: string }) {
  const item = type === "brand" ? brands.find((brand) => brand.slug === slug) ?? brands[0] : events.find((event) => event.title.toLowerCase().replaceAll(" ", "-") === slug) ?? events[0];
  if (!item) return <NotFound />;
  const title = type === "brand" ? (item as typeof brands[number]).name : (item as typeof events[number]).title;
  const image = type === "brand" ? (item as typeof brands[number]).image : (item as typeof events[number]).image;
  const heroLogo = type === "brand" ? (item as typeof brands[number]).logo : undefined;
  const heroVideo = type === "brand" ? "/videos/brand-bg.mp4" : undefined;
  return (
    <PageShell title={<>{title.split(" ")[0]}<br /><em>{title.split(" ").slice(1).join(" ") || "details."}</em></>} eyebrow={type === "brand" ? "Brand spotlight" : "Event details"} heroLogo={heroLogo} heroVideo={heroVideo}>
      <section className="detail-section section-padding">
        <div className="container detail-grid">
          <Reveal className="detail-image"><img src={image} alt={title} /></Reveal>
          <Reveal delay={120} className="detail-copy">
            <p className="kicker">{type === "brand" ? `${(item as typeof brands[number]).cuisine} · ${(item as typeof brands[number]).location}` : `${(item as typeof events[number]).tag} · ${(item as typeof events[number]).date}`}</p>
            <h2>{type === "brand" ? (item as typeof brands[number]).description : (item as typeof events[number]).description}</h2>
            {type === "brand" && (
              <div className="brand-extra-details" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                {((item as typeof brands[number]).openingHours) && <div><strong style={{ color: 'var(--color-text)' }}>Hours:</strong> {(item as typeof brands[number]).openingHours}</div>}
                {((item as typeof brands[number]).signatureItems) && <div><strong style={{ color: 'var(--color-text)' }}>Must Try:</strong> {(item as typeof brands[number]).signatureItems}</div>}
                {((item as typeof brands[number]).priceRange) && <div><strong style={{ color: 'var(--color-text)' }}>Price Range:</strong> {(item as typeof brands[number]).priceRange}</div>}
                {((item as typeof brands[number]).vegNonVeg) && <div><strong style={{ color: 'var(--color-text)' }}>Options:</strong> {(item as typeof brands[number]).vegNonVeg}</div>}
                {((item as typeof brands[number]).dineIn) && <div><strong style={{ color: 'var(--color-text)' }}>Service:</strong> {(item as typeof brands[number]).dineIn}</div>}
                {((item as typeof brands[number]).specialOffers) && <div><strong style={{ color: 'var(--color-text)' }}>Special Offers:</strong> {(item as typeof brands[number]).specialOffers}</div>}
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {((item as typeof brands[number]).contact) && <a href={`tel:${(item as typeof brands[number]).contact}`} className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#f0f0f0', color: '#111' }}>Call</a>}
                  {((item as typeof brands[number]).menuLink) && <a href={(item as typeof brands[number]).menuLink} target="_blank" rel="noreferrer" className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#f0f0f0', color: '#111' }}>Menu</a>}
                  {((item as typeof brands[number]).websiteLink) && <a href={(item as typeof brands[number]).websiteLink} target="_blank" rel="noreferrer" className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#f0f0f0', color: '#111' }}>Order</a>}
                  {((item as typeof brands[number]).zomatoLink) && <a href={(item as typeof brands[number]).zomatoLink} target="_blank" rel="noreferrer" className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#e23744', color: '#fff' }}>Zomato</a>}
                  {((item as typeof brands[number]).swiggyLink) && <a href={(item as typeof brands[number]).swiggyLink} target="_blank" rel="noreferrer" className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#fc8019', color: '#fff' }}>Swiggy</a>}
                  {((item as typeof brands[number]).instagram) && <a href={(item as typeof brands[number]).instagram} target="_blank" rel="noreferrer" className="arrow-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#E1306C', color: '#fff' }}>Instagram</a>}
                </div>
              </div>
            )}
            <Link href={type === "brand" ? "/brands" : "/events"} className="arrow-button"><span>Back to {type === "brand" ? "all brands" : "what's on"}</span><ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
      {type === "brand" && slug === "baskin-robbins" && (
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="menu-card-header">
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 400, margin: '0 0 8px' }}>
                  Explore the <em>menu.</em>
                </h2>
                <p className="kicker">Scroll to browse all items</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="scrollable-menu-card">
                <iframe
                  src="/menus/baskin-robbins-menu.html"
                  title="Baskin Robbins Menu"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </PageShell>
  );
}

function FaqPage() {
  const [open, setOpen] = useState(0);
  return <PageShell title={<>Good<br /><em>questions.</em></>} eyebrow="The useful answers"><section className="directory-section section-padding"><div className="container directory-intro"><Reveal><p className="kicker">Before you head over</p></Reveal><Reveal delay={100} mask><h2>Ask away.<br /><em>We made a list.</em></h2></Reveal></div><div className="container faq-list">{faqItems.map((faq, index) => <Reveal key={faq.question} delay={index * 70}><div className={`faq-item ${open === index ? "is-open" : ""}`}><button onClick={() => setOpen(open === index ? -1 : index)}><span>{faq.question}</span><b>{open === index ? "−" : "+"}</b></button>{open === index && <p>{faq.answer}</p>}</div></Reveal>)}</div></section></PageShell>;
}

function NotFound() { return <PageShell title={<>Wrong<br /><em>turn.</em></>} eyebrow="404"><section className="directory-section section-padding"><div className="container empty-state large-empty">This page wandered off. <Link href="/">Back to the alley <ArrowUpRight size={18} /></Link></div></section></PageShell>; }

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/about" component={AboutPage} /><Route path="/brands" component={BrandsPage} /><Route path="/brands/:slug">{(params) => <DetailPage type="brand" slug={params.slug} />}</Route><Route path="/food" component={FoodPage} /><Route path="/offers" component={OffersPage} /><Route path="/events" component={EventsPage} /><Route path="/events/:slug">{(params) => <DetailPage type="event" slug={params.slug} />}</Route><Route path="/facilities" component={FacilitiesPage} /><Route path="/gallery" component={GalleryPage} /><Route path="/contact" component={ContactPage} /><Route path="/faq" component={FaqPage} /><Route component={NotFound} /></Switch>;
}

export default function App() { return <div className="app-shell"><Header /><Router /><Footer /></div>; }
