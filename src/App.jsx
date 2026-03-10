import { useState, useEffect, useRef } from "react";

// ── Google Fonts ──────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --espresso: #1c0f0a;
      --roast: #3b1f14;
      --caramel: #c97b3a;
      --cream: #f5ede0;
      --parchment: #faf6f0;
      --clay: #b85c38;
      --sage: #7a8c6e;
      --text-dark: #1c0f0a;
      --text-mid: #5a3825;
      --text-light: #9c7a5e;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--parchment);
      color: var(--text-dark);
      overflow-x: hidden;
    }

    .font-display { font-family: 'Playfair Display', serif; }
    .font-serif { font-family: 'Cormorant Garamond', serif; }

    /* Nav */
    .nav-scrolled {
      background: rgba(28,15,10,0.96) !important;
      backdrop-filter: blur(20px);
      box-shadow: 0 2px 40px rgba(0,0,0,0.3);
    }

    /* Hero */
    .hero-bg {
      background: linear-gradient(160deg, #0d0603 0%, #2a1208 40%, #1c0f0a 100%);
      position: relative;
      overflow: hidden;
    }
    .hero-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,123,58,0.18) 0%, transparent 60%),
        radial-gradient(ellipse 50% 80% at 20% 70%, rgba(184,92,56,0.12) 0%, transparent 55%);
    }
    .hero-noise {
      position: absolute;
      inset: 0;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      background-size: 200px 200px;
    }

    /* Decorative line */
    .deco-line {
      width: 60px;
      height: 2px;
      background: var(--caramel);
    }

    /* Cards */
    .dish-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
      box-shadow: 0 4px 24px rgba(28,15,10,0.07);
    }
    .dish-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 60px rgba(28,15,10,0.15);
    }

    .dish-img-wrap {
      position: relative;
      overflow: hidden;
    }
    .dish-img-wrap img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .dish-card:hover .dish-img-wrap img {
      transform: scale(1.06);
    }

    /* Gallery */
    .gallery-item {
      overflow: hidden;
      border-radius: 16px;
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(.22,.68,0,1.2);
    }
    .gallery-item:hover img {
      transform: scale(1.08);
    }

    /* Fade-in on scroll */
    .fade-up {
      opacity: 0;
      transform: translateY(36px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .stagger-1 { transition-delay: 0.1s !important; }
    .stagger-2 { transition-delay: 0.2s !important; }
    .stagger-3 { transition-delay: 0.3s !important; }
    .stagger-4 { transition-delay: 0.4s !important; }
    .stagger-5 { transition-delay: 0.5s !important; }
    .stagger-6 { transition-delay: 0.6s !important; }

    /* Btn */
    .btn-primary {
      background: var(--caramel);
      color: white;
      padding: 14px 32px;
      border-radius: 50px;
      font-weight: 500;
      letter-spacing: 0.04em;
      transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
    }
    .btn-primary:hover {
      background: var(--clay);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(201,123,58,0.35);
    }

    .btn-outline {
      background: transparent;
      color: white;
      padding: 13px 32px;
      border-radius: 50px;
      font-weight: 500;
      letter-spacing: 0.04em;
      transition: background 0.25s, transform 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      border: 1.5px solid rgba(255,255,255,0.45);
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
    }
    .btn-outline:hover {
      background: rgba(255,255,255,0.1);
      transform: translateY(-2px);
    }

    .section-tag {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--caramel);
    }

    /* Experience cards */
    .exp-card {
      background: white;
      border-radius: 20px;
      padding: 36px 28px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 24px rgba(28,15,10,0.06);
    }
    .exp-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 48px rgba(28,15,10,0.12);
    }

    /* Map placeholder */
    .map-placeholder {
      background: linear-gradient(135deg, #e8ddd2, #d4c4b0);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: var(--text-mid);
      font-family: 'DM Sans', sans-serif;
    }

    /* Mobile nav toggle */
    .menu-open { overflow: hidden; }

    @media (max-width: 768px) {
      .mobile-nav {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: var(--espresso);
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(.77,0,.18,1);
      }
      .mobile-nav.open {
        transform: translateX(0);
      }
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--parchment); }
    ::-webkit-scrollbar-thumb { background: var(--caramel); border-radius: 3px; }
  `}</style>
);

// ── Unsplash image URLs ───────────────────────────────────────
const images = {
  hero:     "./images/INTERIOR7.jpg",
  about:    "./images/ABOUT.jpg",
  pizza:    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  pasta:    "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
  burger:   "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  mocktail: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  shake:    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
  dessert:  "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  g1:       "./images/INTERIOR.jpg",
  g2:       "./images/INTERIOR2.jpg",
  g3:       "./images/INTERIOR3.jpg",
  g4:       "./images/INTERIOR4.jpeg",
  g5:       "./images/INTERIOR5.jpg",
  g6:       "./images/INTERIOR6.jpg",
};

// ── Dishes data ───────────────────────────────────────────────
const DISHES = [
  { name: "Artisan Pizza",     desc: "Wood-fired crust with fresh mozzarella, basil & our house tomato sauce.",         price: "₹349",  img: images.pizza    },
  { name: "Creamy Pasta",      desc: "Al dente penne in a rich truffle-cream sauce with sun-dried tomatoes.",           price: "₹299",  img: images.pasta    },
  { name: "Signature Burger",  desc: "Double smash patty, cheddar, caramelised onion & our secret smoky sauce.",       price: "₹269",  img: images.burger   },
  { name: "Fresh Mocktail",    desc: "Seasonal fruits blended with mint, ginger & sparkling water. Zero compromise.",   price: "₹149",  img: images.mocktail },
  { name: "Thick Shake",       desc: "Hand-churned ice cream shakes in chocolate, strawberry & caramel hazelnut.",     price: "₹179",  img: images.shake    },
  { name: "Sweet Endings",     desc: "Warm brownie, Belgian waffle or classic tiramisu — pick your indulgence.",        price: "₹199",  img: images.dessert  },
];

// ── Experiences ───────────────────────────────────────────────
const EXPERIENCES = [
  {
    icon: "🎨",
    title: "Artistic Décor",
    desc: "Every corner of Splatter is a canvas. Expect murals, local art, and installations that spark conversation.",
  },
  {
    icon: "☕",
    title: "Comfortable Seating",
    desc: "Plush couches, cosy nooks, and long communal tables — a seat for every mood and group size.",
  },
  {
    icon: "✨",
    title: "The Hangout Spot",
    desc: "From after-college chai to late-night bites with friends, this is Vadodara's favourite third place.",
  },
];

// ── useScrollFade hook ────────────────────────────────────────
function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Navbar ────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const links = ["About", "Menu", "Experience", "Gallery", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : ""}`}
        style={{ padding: "20px 0" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--caramel)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16
              }}>🍽</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>The Table</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>at Splatter</div>
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ gap: 32 }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none",
                fontWeight: 400, letterSpacing: "0.04em", transition: "color 0.2s"
              }}
                onMouseEnter={e => e.target.style.color = "var(--caramel)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >{l}</a>
            ))}
          </div>

          {/* CTA */}
          <a href="#reservation" className="hidden md:block btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
            Reserve Table
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 5, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 5, opacity: open ? 0 : 1, transition: "all 0.3s" }} />
            <div style={{ width: 24, height: 2, background: "white", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav md:hidden ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "white", fontSize: 28, cursor: "pointer" }}>✕</button>
        {links.map((l, i) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
            fontFamily: "'Playfair Display', serif",
            color: "white", fontSize: 32, textDecoration: "none", fontWeight: 600,
            opacity: 0, animation: open ? `fadeIn 0.4s ${0.1 + i * 0.07}s forwards` : "none"
          }}>
            {l}
          </a>
        ))}
        <a href="#reservation" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 8 }}>
          Reserve Table
        </a>
      </div>
      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
      <div className="hero-noise" />

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.18
      }} />

      {/* Decorative circle */}
      <div style={{
        position: "absolute", right: "-10%", top: "10%",
        width: 600, height: 600, borderRadius: "50%",
        border: "1px solid rgba(201,123,58,0.12)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", right: "-5%", top: "15%",
        width: 400, height: 400, borderRadius: "50%",
        border: "1px solid rgba(201,123,58,0.08)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ maxWidth: 700 }}>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 1.5, background: "var(--caramel)" }} />
            <span style={{ color: "var(--caramel)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
              Vadodara · Gujarat · India
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: "clamp(42px, 7vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            letterSpacing: "-0.02em"
          }}>
            The Table<br />
            <span style={{ color: "var(--caramel)", fontStyle: "italic" }}>at Splatter</span>
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(20px, 3vw, 26px)",
            fontStyle: "italic",
            fontWeight: 300,
            marginBottom: 48,
            letterSpacing: "0.02em"
          }}>
            "Where Food Meets Creativity"
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#menu" className="btn-primary">
              <span>🍕</span> View Menu
            </a>
            <a href="#reservation" className="btn-outline">
              <span>📅</span> Reserve a Table
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 72, flexWrap: "wrap" }}>
            {[["500+", "Happy guests/day"], ["20+", "Signature dishes"], ["5★", "Rated in Vadodara"]].map(([val, label]) => (
              <div key={val}>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 28, fontWeight: 700 }}>{val}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: "0.06em", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,123,58,0.6), transparent)" }} />
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background: "var(--parchment)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Image */}
        <div className="fade-up" style={{ position: "relative" }}>
          <img
            src={images.about}
            alt="The Table at Splatter interior"
            style={{ width: "100%", height: 500, objectFit: "cover", borderRadius: 24, display: "block" }}
          />
          {/* Floating badge */}
          <div style={{
            position: "absolute", bottom: -20, right: -20,
            background: "var(--caramel)",
            color: "white",
            padding: "20px 28px",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(201,123,58,0.4)"
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>7+</div>
            <div style={{ fontSize: 11, opacity: 0.85, letterSpacing: "0.1em", marginTop: 2 }}>Years of joy</div>
          </div>
        </div>

        {/* Text */}
        <div className="fade-up stagger-2">
          <div className="section-tag" style={{ marginBottom: 16 }}>Our Story</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "var(--espresso)",
            marginBottom: 24,
            letterSpacing: "-0.02em"
          }}>
            A café where<br />
            <em style={{ color: "var(--caramel)" }}>art lives on every plate</em>
          </h2>
          <div className="deco-line" style={{ marginBottom: 28 }} />
          <p style={{ color: "var(--text-mid)", fontSize: 16, lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
            Nestled in the heart of Vadodara, The Table at Splatter is more than a restaurant — it's a canvas. We believe that great food and great art share the same soul: both demand passion, craft, and a willingness to surprise.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: 16, lineHeight: 1.85, fontWeight: 300 }}>
            From students fuelling their late-night ideas to families celebrating milestones, we've been Vadodara's favourite creative hangout since the day we opened our doors. Come hungry. Leave inspired.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a href="#menu" className="btn-primary">Explore Menu</a>
          </div>
        </div>
      </div>

      {/* Mobile override */}
      <style>{`
        @media(max-width:768px){
          #about > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about > div > div:first-child img { height: 300px !important; }
        }
      `}</style>
    </section>
  );
}

// ── Dish Card ─────────────────────────────────────────────────
function DishCard({ dish, delay }) {
  return (
    <div className={`dish-card fade-up stagger-${delay}`}>
      <div className="dish-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" />
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: "var(--caramel)",
          color: "white",
          fontSize: 13,
          fontWeight: 600,
          padding: "5px 14px",
          borderRadius: 50
        }}>{dish.price}</div>
      </div>
      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20,
          fontWeight: 600,
          color: "var(--espresso)",
          marginBottom: 8
        }}>{dish.name}</h3>
        <p style={{ color: "var(--text-light)", fontSize: 13.5, lineHeight: 1.7, fontWeight: 300 }}>{dish.desc}</p>
      </div>
    </div>
  );
}

// ── Menu ──────────────────────────────────────────────────────
function Menu() {
  return (
    <section id="menu" style={{ background: "white", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>What We Serve</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            color: "var(--espresso)",
            letterSpacing: "-0.02em"
          }}>
            Popular <em style={{ color: "var(--caramel)" }}>Dishes</em>
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 28
        }}>
          {DISHES.map((d, i) => <DishCard key={d.name} dish={d} delay={(i % 6) + 1} />)}
        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" style={{
      background: "var(--espresso)",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,58,0.08) 0%, transparent 70%)"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>The Atmosphere</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em"
          }}>
            The <em style={{ color: "var(--caramel)" }}>Splatter</em> Experience
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 16, fontSize: 15, maxWidth: 500, margin: "16px auto 0", fontWeight: 300 }}>
            Every visit is more than a meal — it's a feeling you carry home.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {EXPERIENCES.map((e, i) => (
            <div key={e.title} className={`exp-card fade-up stagger-${i + 1}`} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>{e.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{e.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14.5, lineHeight: 1.8, fontWeight: 300 }}>{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="fade-up" style={{ textAlign: "center", marginTop: 80 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3.5vw, 38px)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, maxWidth: 700, margin: "0 auto" }}>
            "Come for the food.<br />Stay for the stories."
          </div>
          <div style={{ color: "var(--caramel)", fontSize: 12, letterSpacing: "0.16em", marginTop: 16, textTransform: "uppercase" }}>
            — The Splatter Motto
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────
function Gallery() {
  const photos = [images.g1, images.g2, images.g3, images.g4, images.g5, images.g6];
  return (
    <section id="gallery" style={{ background: "var(--parchment)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>Visual Story</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            color: "var(--espresso)",
            letterSpacing: "-0.02em"
          }}>
            A Glimpse <em style={{ color: "var(--caramel)" }}>Inside</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "240px 240px", gap: 16 }}>
          {photos.map((src, i) => (
            <div
              key={i}
              className={`gallery-item fade-up stagger-${(i % 4) + 1}`}
              style={{
                gridColumn: i === 0 ? "span 2" : i === 3 ? "span 2" : "span 1",
              }}
            >
              <img src={src} alt={`gallery-${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          #gallery .gallery-item { grid-column: span 3 !important; }
          #gallery > div > div:last-child { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
        }
      `}</style>
    </section>
  );
}

// ── Location ──────────────────────────────────────────────────
function Location() {
  return (
    <section id="contact" style={{ background: "white", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        {/* Info */}
        <div className="fade-up">
          <div className="section-tag" style={{ marginBottom: 16 }}>Find Us</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "var(--espresso)",
            letterSpacing: "-0.02em",
            marginBottom: 24
          }}>We're Right<br /><em style={{ color: "var(--caramel)" }}>Here for You</em></h2>
          <div className="deco-line" style={{ marginBottom: 36 }} />

          {[
            { icon: "📍", label: "Address", val: "The Table at Splatter\nVadodara, Gujarat, India" },
            { icon: "📞", label: "Phone", val: "+91 98765 43210" },
            { icon: "🕐", label: "Hours", val: "Mon–Sun  |  11:00 AM – 11:00 PM" },
            { icon: "📧", label: "Email", val: "hello@thetableatsplatter.in" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", gap: 18, marginBottom: 28, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, minWidth: 44,
                background: "var(--parchment)",
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18
              }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: "var(--text-dark)", fontSize: 15, fontWeight: 400, whiteSpace: "pre-line", lineHeight: 1.6 }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="fade-up stagger-2">
          <div className="map-placeholder" style={{ height: 420, background: "#f0e8de" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59437.32706553!2d73.14635!3d22.30730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1610000000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vadodara map"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ── Reservation ───────────────────────────────────────────────
function Reservation() {
  return (
    <section id="reservation" style={{
      background: "linear-gradient(135deg, var(--caramel) 0%, var(--clay) 100%)",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${images.g2})`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.1
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="fade-up">
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "6px 18px", marginBottom: 24 }}>
            <span style={{ color: "white", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Book Your Spot</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 20
          }}>
            Ready to Join<br />
            <em>The Table?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
            Reserve your table in advance and let us prepare the perfect experience for you and your guests.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+919876543210"
              style={{
                background: "white",
                color: "var(--clay)",
                padding: "14px 28px",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}
            >📞 Call Restaurant</a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20table%20at%20The%20Table%20at%20Splatter"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "white",
                padding: "14px 28px",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "var(--espresso)", padding: "60px 24px 32px", color: "rgba(255,255,255,0.55)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--caramel)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🍽</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 18, fontWeight: 700 }}>The Table at Splatter</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 260 }}>
              A vibrant café in Vadodara where food meets creativity. Come hungry, leave inspired.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { href: "https://instagram.com", icon: "📸", label: "Instagram" },
                { href: "https://maps.google.com", icon: "🗺️", label: "Maps" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, textDecoration: "none",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(201,123,58,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                  title={s.label}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.06em" }}>Quick Links</div>
            {["About", "Menu", "Experience", "Gallery", "Reservation"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--caramel)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}
              >{l}</a>
            ))}
          </div>

          {/* Hours */}
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.06em" }}>Opening Hours</div>
            {[
              ["Mon – Fri", "11 AM – 11 PM"],
              ["Sat – Sun", "10 AM – 12 AM"],
              ["Holidays", "10 AM – 12 AM"],
            ].map(([d, t]) => (
              <div key={d} style={{ marginBottom: 14 }}>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{d}</div>
                <div style={{ color: "var(--caramel)", fontSize: 13, fontWeight: 500 }}>{t}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.06em" }}>Contact</div>
            {[
              ["📍", "Vadodara, Gujarat, India"],
              ["📞", "+91 98765 43210"],
              ["📧", "hello@thetableatsplatter.in"],
              ["📸", "@thetableatsplatter"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ fontSize: 13 }}>{icon}</span>
                <span style={{ fontSize: 13, lineHeight: 1.6 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12 }}>© 2025 The Table at Splatter. All rights reserved.</span>
          <span style={{ fontSize: 12 }}>Made with ❤️ in Vadodara, Gujarat</span>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: span 2; }
        }
        @media(max-width:480px){
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  useScrollFade();

  return (
    <>
      <FontLoader />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Gallery />
      <Location />
      <Reservation />
      <Footer />
    </>
  );
}