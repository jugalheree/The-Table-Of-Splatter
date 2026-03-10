import { useState, useEffect, useRef } from "react";

// ── SEO Head Manager ──────────────────────────────────────────
const SEOHead = () => {
  useEffect(() => {
    document.title = "The Table at Splatter | Cafe in Vadodara";
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "The Table at Splatter is a creative cafe in Vadodara offering delicious food, drinks, and a vibrant hangout atmosphere.");
    setMeta("keywords", "cafe vadodara, restaurant vadodara, the table at splatter, food vadodara, hangout vadodara");
    setMeta("og:title", "The Table at Splatter | Cafe in Vadodara", true);
    setMeta("og:description", "A creative cafe in Vadodara offering delicious food, drinks, and a vibrant atmosphere.", true);
    setMeta("og:type", "restaurant", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "The Table at Splatter | Cafe in Vadodara");
  }, []);
  return null;
};

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
      position: relative;
      cursor: pointer;
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
    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: rgba(28,15,10,0);
      transition: background 0.4s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gallery-item:hover .gallery-overlay {
      background: rgba(28,15,10,0.35);
    }
    .gallery-overlay-icon {
      opacity: 0;
      transform: scale(0.7);
      transition: opacity 0.3s ease, transform 0.3s ease;
      color: white;
      font-size: 28px;
    }
    .gallery-item:hover .gallery-overlay-icon {
      opacity: 1;
      transform: scale(1);
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
      text-decoration: none;
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
      text-decoration: none;
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

    /* Dish card entrance (used instead of fade-up for dynamic content) */
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .dish-card {
      animation: cardIn 0.45s ease both;
    }

    /* Menu category tabs */
    .cat-tab {
      padding: 9px 22px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      border: 1.5px solid rgba(201,123,58,0.3);
      background: transparent;
      color: var(--text-mid);
      font-family: 'DM Sans', sans-serif;
      transition: all 0.25s ease;
      white-space: nowrap;
    }
    .cat-tab:hover, .cat-tab.active {
      background: var(--caramel);
      color: white;
      border-color: var(--caramel);
    }

    /* Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(6px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: fadeInBackdrop 0.25s ease;
    }
    @keyframes fadeInBackdrop { from { opacity: 0; } to { opacity: 1; } }

    .modal-box {
      background: white;
      border-radius: 28px;
      padding: 40px 40px 36px;
      width: 100%;
      max-width: 520px;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideUpModal 0.3s cubic-bezier(.22,.68,0,1.2);
      position: relative;
    }
    @keyframes slideUpModal { from { opacity:0; transform: translateY(40px) scale(0.96); } to { opacity:1; transform: translateY(0) scale(1); } }

    .form-field {
      width: 100%;
      border: 1.5px solid #e8ddd2;
      border-radius: 12px;
      padding: 13px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      color: var(--text-dark);
      background: #faf6f0;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-field:focus { border-color: var(--caramel); background: white; }

    /* Contact cards */
    .contact-card {
      background: var(--parchment);
      border-radius: 16px;
      padding: 22px 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .contact-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 36px rgba(28,15,10,0.1);
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--parchment); }
    ::-webkit-scrollbar-thumb { background: var(--caramel); border-radius: 3px; }

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
      .modal-box {
        padding: 28px 22px 24px;
      }
    }
  `}</style>
);

// ── Image config — swap Unsplash URLs OR local /public/images/ paths ──
// For production: replace these with "/images/hero.jpg" etc. after placing
// files in your public/images/ folder.
const IMAGES = {
  hero:     "./images/INTERIOR.jpg",
  about:    "./images/ABOUT.jpg",
  pizza:    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  pasta:    "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
  burger:   "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  mocktail: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  shake:    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
  dessert:  "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  // Extra menu items
  pizza2:   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  pasta2:   "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
  burger2:  "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80",
  mocktail2:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  shake2:   "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80",
  dessert2: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
  g1:       "./images/INTERIOR.jpg",
  g2:       "./images/INTERIOR2.jpg",
  g3:       "./images/INTERIOR3.jpg",
  g4:       "./images/INTERIOR4.jpeg",
  g5:       "./images/INTERIOR5.jpg",
  g6:       "./images/INTERIOR6.jpg",
  g7:       "./images/INTERIOR7.jpg",
  g8:       "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80",
};

// ── Full menu data by category ────────────────────────────────
const MENU_DATA = {
  Pizza: [
    { name: "Margherita Classic",    desc: "San Marzano tomato, fresh mozzarella, basil on a hand-stretched base.", price: "₹299", img: IMAGES.pizza },
    { name: "BBQ Chicken Pizza",     desc: "Smoky BBQ sauce, grilled chicken, jalapeños, red onion, cheddar blend.", price: "₹369", img: IMAGES.pizza2 },
    { name: "Four Cheese Delight",   desc: "Mozzarella, cheddar, parmesan & gouda on a garlic butter base.", price: "₹349", img: IMAGES.pizza },
  ],
  Pasta: [
    { name: "Truffle Penne",         desc: "Al dente penne in a rich truffle-cream sauce with sun-dried tomatoes.", price: "₹299", img: IMAGES.pasta },
    { name: "Arrabiata Fusilli",     desc: "Spicy tomato-garlic sauce with olives, capers and fresh parsley.", price: "₹249", img: IMAGES.pasta2 },
    { name: "Creamy Mushroom Pasta", desc: "Button & portobello mushrooms in a herbed cream sauce.", price: "₹279", img: IMAGES.pasta },
  ],
  Burgers: [
    { name: "Signature Smash Burger",desc: "Double smash patty, cheddar, caramelised onion & secret smoky sauce.", price: "₹269", img: IMAGES.burger },
    { name: "Crispy Chicken Burger", desc: "Golden fried chicken thigh, sriracha mayo, coleslaw, brioche bun.", price: "₹249", img: IMAGES.burger2 },
    { name: "Mushroom Swiss Burger", desc: "Sautéed mushrooms, Swiss cheese, caramelised onions, aioli.", price: "₹239", img: IMAGES.burger },
  ],
  Mocktails: [
    { name: "Watermelon Fizz",       desc: "Fresh watermelon, mint, lime & sparkling water — refreshing & light.", price: "₹149", img: IMAGES.mocktail },
    { name: "Mango Chilli Cooler",   desc: "Ripe mango, chilli salt rim, kala namak & sparkling soda.", price: "₹159", img: IMAGES.mocktail2 },
    { name: "Blue Lagoon",           desc: "Blue curacao syrup, lemon soda, coconut water, citrus zest.", price: "₹149", img: IMAGES.mocktail },
  ],
  Shakes: [
    { name: "Choco Hazelnut Shake",  desc: "House-churned chocolate ice cream with Ferrero hazelnut sauce.", price: "₹189", img: IMAGES.shake },
    { name: "Strawberry Dream",      desc: "Fresh strawberries blended with vanilla ice cream, whipped cream.", price: "₹179", img: IMAGES.shake2 },
    { name: "Caramel Overload",      desc: "Salted caramel, banana, butterscotch swirl, whipped cream top.", price: "₹199", img: IMAGES.shake },
  ],
  Desserts: [
    { name: "Warm Chocolate Brownie",desc: "Gooey fudge brownie with vanilla scoop and hot chocolate drizzle.", price: "₹199", img: IMAGES.dessert },
    { name: "Classic Tiramisu",      desc: "Espresso-soaked ladyfingers, mascarpone, dusted cocoa — Italian bliss.", price: "₹229", img: IMAGES.dessert2 },
    { name: "Belgian Waffle",        desc: "Crispy waffle, fresh fruit compote, Nutella and powdered sugar.", price: "₹219", img: IMAGES.dessert },
  ],
};

const MENU_CATEGORIES = Object.keys(MENU_DATA);

// ── Experiences ───────────────────────────────────────────────
const EXPERIENCES = [
  { icon: "🎨", title: "Artistic Décor",     desc: "Every corner of Splatter is a canvas. Expect murals, local art, and installations that spark conversation." },
  { icon: "☕", title: "Comfortable Seating", desc: "Plush couches, cosy nooks, and long communal tables — a seat for every mood and group size." },
  { icon: "✨", title: "The Hangout Spot",   desc: "From after-college chai to late-night bites with friends, this is Vadodara's favourite third place." },
];

// ── useScrollFade hook ────────────────────────────────────────
function useScrollFade() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll(".fade-up");
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return io;
    };
    const io = observe();
    return () => io.disconnect();
  }, []);
}

// ── Reservation Modal ─────────────────────────────────────────
function ReservationModal({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", guests: "2", date: "", time: "", request: "" });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🍽 *Reservation Request — The Table at Splatter*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `👥 Guests: ${form.guests}\n` +
      `📅 Date: ${form.date}\n` +
      `🕐 Time: ${form.time}\n` +
      `📝 Special Request: ${form.request || "None"}\n\n` +
      `Please confirm my table booking. Thank you!`
    );
    window.open(`https://wa.me/917507011992?text=${msg}`, "_blank");
    onClose();
  };

  // Close on backdrop click
  const handleBackdrop = (e) => { if (e.target === e.currentTarget) onClose(); };

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="modal-backdrop" onClick={handleBackdrop}>
      <div className="modal-box">
        <button onClick={onClose} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#999", lineHeight: 1 }}>✕</button>

        <div style={{ marginBottom: 28 }}>
          <div className="section-tag" style={{ marginBottom: 10 }}>Book Your Spot</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "var(--espresso)", lineHeight: 1.2 }}>
            Reserve Your <em style={{ color: "var(--caramel)" }}>Table</em>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: 13.5, marginTop: 8, lineHeight: 1.6 }}>
            Fill in the details — we'll confirm your booking via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Name *</label>
              <input className="form-field" name="name" required placeholder="e.g. Priya Shah" value={form.name} onChange={handleChange} />
            </div>
            <div>
              <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Phone *</label>
              <input className="form-field" name="phone" required type="tel" placeholder="+91 75070 11992" value={form.phone} onChange={handleChange} />
            </div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Number of Guests *</label>
            <select className="form-field" name="guests" required value={form.guests} onChange={handleChange}>
              {["1","2","3","4","5","6","7","8","9","10+"].map(g => <option key={g} value={g}>{g} {g === "1" ? "Guest" : "Guests"}</option>)}
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Date *</label>
              <input className="form-field" name="date" required type="date" min={today} value={form.date} onChange={handleChange} />
            </div>
            <div>
              <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Time *</label>
              <select className="form-field" name="time" required value={form.time} onChange={handleChange}>
                <option value="">Select time</option>
                {["11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Special Request</label>
            <textarea className="form-field" name="request" rows={3} placeholder="Birthday celebration, dietary restrictions, seating preference..." value={form.request} onChange={handleChange} style={{ resize: "vertical" }} />
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "16px" }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Confirm via WhatsApp
          </button>
        </form>

        <style>{`@media(max-width:480px){ .modal-box form > div:first-child, .modal-box form > div:nth-child(4) { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────
function Navbar({ onReserveClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const links = ["About", "Menu", "Experience", "Gallery", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : ""}`}
        style={{ padding: "18px 0" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: "none" }} aria-label="The Table at Splatter - Home">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--caramel)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🍽</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>The Table</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>at Splatter</div>
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ gap: 32 }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 400, letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--caramel)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >{l}</a>
            ))}
          </div>

          {/* CTA */}
          <button onClick={onReserveClick} className="hidden md:flex btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
            Reserve Table
          </button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 5, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 5, opacity: open ? 0 : 1, transition: "all 0.3s" }} />
            <div style={{ width: 24, height: 2, background: "white", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav md:hidden ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "white", fontSize: 28, cursor: "pointer" }}>✕</button>
        {links.map((l, i) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
            fontFamily: "'Playfair Display', serif", color: "white", fontSize: 32, textDecoration: "none", fontWeight: 600,
            opacity: 0, animation: open ? `fadeIn 0.4s ${0.1 + i * 0.07}s forwards` : "none"
          }}>{l}</a>
        ))}
        <button onClick={() => { onReserveClick(); setOpen(false); }} className="btn-primary" style={{ marginTop: 8 }}>
          Reserve Table
        </button>
      </div>
      <style>{`@keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero({ onReserveClick }) {
  return (
    <section id="hero" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
      <div className="hero-noise" />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.hero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
      <div style={{ position: "absolute", right: "-10%", top: "10%", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,123,58,0.12)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "-5%", top: "15%", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,123,58,0.08)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 1.5, background: "var(--caramel)" }} />
            <span style={{ color: "var(--caramel)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>Vadodara · Gujarat · India</span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "clamp(42px, 7vw, 84px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.02em" }}>
            The Table<br />
            <span style={{ color: "var(--caramel)", fontStyle: "italic" }}>at Splatter</span>
          </h1>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.65)", fontSize: "clamp(20px, 3vw, 26px)", fontStyle: "italic", fontWeight: 300, marginBottom: 48, letterSpacing: "0.02em" }}>
            "Where Food Meets Creativity"
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#menu" className="btn-primary"><span>🍕</span> View Menu</a>
            <button onClick={onReserveClick} className="btn-outline"><span>📅</span> Reserve a Table</button>
          </div>

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
        <div className="fade-up" style={{ position: "relative" }}>
          <img src={IMAGES.about} alt="Interior of The Table at Splatter cafe in Vadodara" loading="lazy" style={{ width: "100%", height: 500, objectFit: "cover", borderRadius: 24, display: "block" }} />
          <div style={{ position: "absolute", bottom: -20, right: -20, background: "var(--caramel)", color: "white", padding: "20px 28px", borderRadius: 16, boxShadow: "0 8px 32px rgba(201,123,58,0.4)" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>7+</div>
            <div style={{ fontSize: 11, opacity: 0.85, letterSpacing: "0.1em", marginTop: 2 }}>Years of joy</div>
          </div>
        </div>

        <div className="fade-up stagger-2">
          <div className="section-tag" style={{ marginBottom: 16 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "var(--espresso)", marginBottom: 24, letterSpacing: "-0.02em" }}>
            A café where<br /><em style={{ color: "var(--caramel)" }}>art lives on every plate</em>
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
      <style>{`@media(max-width:768px){ #about > div { grid-template-columns: 1fr !important; gap: 40px !important; } #about > div > div:first-child img { height: 300px !important; } }`}</style>
    </section>
  );
}

// ── Dish Card ─────────────────────────────────────────────────
function DishCard({ dish, delay }) {
  return (
    <article className="dish-card" style={{ animationDelay: `${delay * 0.08}s` }}>
      <div className="dish-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" width="400" height="220" />
        <div style={{ position: "absolute", top: 14, right: 14, background: "var(--caramel)", color: "white", fontSize: 13, fontWeight: 600, padding: "5px 14px", borderRadius: 50 }}>{dish.price}</div>
      </div>
      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "var(--espresso)", marginBottom: 8 }}>{dish.name}</h3>
        <p style={{ color: "var(--text-light)", fontSize: 13.5, lineHeight: 1.7, fontWeight: 300 }}>{dish.desc}</p>
      </div>
    </article>
  );
}

// ── Menu ──────────────────────────────────────────────────────
function Menu() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  return (
    <section id="menu" style={{ background: "white", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>What We Serve</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "var(--espresso)", letterSpacing: "-0.02em" }}>
            Our <em style={{ color: "var(--caramel)" }}>Menu</em>
          </h2>
          <p style={{ color: "var(--text-light)", marginTop: 16, fontSize: 15, maxWidth: 480, margin: "16px auto 0", fontWeight: 300 }}>
            Handcrafted with love — browse by category and find your next favourite.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="fade-up" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {MENU_CATEGORIES.map(cat => (
            <button key={cat} className={`cat-tab ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid — keyed by category so cards remount + re-animate on tab switch */}
        <div key={activeCategory} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {MENU_DATA[activeCategory].map((d, i) => (
            <DishCard key={d.name} dish={d} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" style={{ background: "var(--espresso)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,123,58,0.08) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>The Atmosphere</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
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

        <div className="fade-up" style={{ textAlign: "center", marginTop: 80 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3.5vw, 38px)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, maxWidth: 700, margin: "0 auto" }}>
            "Come for the food.<br />Stay for the stories."
          </div>
          <div style={{ color: "var(--caramel)", fontSize: 12, letterSpacing: "0.16em", marginTop: 16, textTransform: "uppercase" }}>— The Splatter Motto</div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────
const GALLERY_PHOTOS = [
  { src: IMAGES.g1, alt: "Cosy cafe interior at The Table at Splatter" },
  { src: IMAGES.g2, alt: "Beautifully plated dish from our kitchen" },
  { src: IMAGES.g3, alt: "Vibrant dining atmosphere" },
  { src: IMAGES.g4, alt: "Coffee and conversation at Splatter" },
  { src: IMAGES.g5, alt: "Fresh food from our menu" },
  { src: IMAGES.g6, alt: "Evening ambience at The Table at Splatter" },
  { src: IMAGES.g7, alt: "Gourmet dining experience" },
  { src: IMAGES.g8, alt: "Social dining with friends" },
];

function Gallery() {
  return (
    <section id="gallery" style={{ background: "var(--parchment)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>Visual Story</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "var(--espresso)", letterSpacing: "-0.02em" }}>
            A Glimpse <em style={{ color: "var(--caramel)" }}>Inside</em>
          </h2>
          <p style={{ color: "var(--text-light)", marginTop: 14, fontSize: 15, maxWidth: 420, margin: "14px auto 0", fontWeight: 300 }}>
            Every corner tells a story. Come write yours with us.
          </p>
        </div>

        {/* Masonry-style responsive grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "220px 220px", gap: 14 }}>
          {GALLERY_PHOTOS.slice(0, 8).map((photo, i) => {
            const isWide = i === 0 || i === 5;
            return (
              <div key={i} className={`gallery-item fade-up stagger-${(i % 4) + 1}`}
                style={{ gridColumn: isWide ? "span 2" : "span 1" }}
                title={photo.alt}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" width="700" height="220" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-icon">✦</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #gallery > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          #gallery .gallery-item { grid-column: span 1 !important; height: 180px; }
        }
        @media(max-width:480px){
          #gallery > div > div:last-child { grid-template-columns: 1fr !important; }
          #gallery .gallery-item { height: 220px; }
        }
      `}</style>
    </section>
  );
}

// ── Contact + Map ─────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ background: "white", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 64 }} className="fade-up">
          <div className="section-tag" style={{ marginBottom: 12 }}>Find Us</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "var(--espresso)", letterSpacing: "-0.02em" }}>
            We're Right <em style={{ color: "var(--caramel)" }}>Here for You</em>
          </h2>
        </div>

        {/* Contact cards row */}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 60 }}>
          {[
            {
              icon: "📍",
              label: "Address",
              value: "The Table at Splatter\nVadodara, Gujarat, India",
              link: "https://maps.google.com/?q=The+Table+at+Splatter+Vadodara",
              linkText: "Get Directions →"
            },
            {
              icon: "📞",
              label: "Phone",
              value: "+91 75070 11992",
              link: "tel:+917507011992",
              linkText: "Call Now →"
            },
            {
              icon: "🕐",
              label: "Opening Hours",
              value: "Mon – Sun\n11:00 AM – 11:30 PM",
              link: null,
              linkText: null
            },
            {
              icon: "📸",
              label: "Instagram",
              value: "@thetableatsplatter_",
              link: "https://www.instagram.com/thetableatsplatter_?igsh=MWg5aTExc3IybXExbw==",
              linkText: "Follow Us →"
            },
          ].map((item) => (
            <div key={item.label} className="contact-card">
              <div style={{ width: 46, height: 46, minWidth: 46, background: "rgba(201,123,58,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: "var(--text-dark)", fontSize: 14, fontWeight: 400, whiteSpace: "pre-line", lineHeight: 1.65 }}>{item.value}</div>
                {item.link && (
                  <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                    style={{ color: "var(--caramel)", fontSize: 12.5, fontWeight: 500, textDecoration: "none", display: "inline-block", marginTop: 6 }}>
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Map + WhatsApp side by side */}
        <div className="fade-up stagger-2" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>
          {/* Map */}
          <div style={{ borderRadius: 20, overflow: "hidden", height: 420, boxShadow: "0 8px 40px rgba(28,15,10,0.1)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118027.71282009613!2d73.08284705!3d22.30718975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Table at Splatter location in Vadodara, Gujarat"
            />
          </div>

          {/* WhatsApp + Quick actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 200 }}>
            <a href="https://wa.me/917507011992?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Table%20at%20Splatter!"
              target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "white", padding: "14px 20px", borderRadius: 14, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(37,211,102,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <a href="tel:+917507011992"
              style={{ background: "var(--parchment)", color: "var(--espresso)", padding: "14px 20px", borderRadius: 14, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #e8ddd2", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
            >
              📞 Call Restaurant
            </a>
            <a href="https://maps.google.com/?q=The+Table+at+Splatter+Vadodara" target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--parchment)", color: "var(--text-dark)", padding: "14px 20px", borderRadius: 14, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #e8ddd2", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
            >
              🗺️ Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact > div > div:last-child > div:first-child { height: 300px !important; }
        }
        @media(max-width:640px){
          #contact > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:400px){
          #contact > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ── Reservation CTA Band ──────────────────────────────────────
function ReservationBand({ onReserveClick }) {
  return (
    <section id="reservation" style={{
      background: "linear-gradient(135deg, var(--caramel) 0%, var(--clay) 100%)",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.g2})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="fade-up">
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "6px 18px", marginBottom: 24 }}>
            <span style={{ color: "white", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Book Your Spot</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>
            Ready to Join<br /><em>The Table?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
            Reserve your table in advance and let us prepare the perfect experience for you and your guests.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onReserveClick}
              style={{ background: "white", color: "var(--clay)", padding: "15px 30px", borderRadius: 50, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}
            >📅 Reserve a Table</button>
            <a href="https://wa.me/917507011992?text=Hi%2C%20I%20want%20to%20book%20a%20table%20at%20The%20Table%20at%20Splatter"
              target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "white", padding: "15px 30px", borderRadius: 50, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
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
function Footer({ onReserveClick }) {
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
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Vadodara, Gujarat</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 260 }}>
              A vibrant café in Vadodara where food meets creativity. Come hungry, leave inspired.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { href: "https://wa.me/917507011992", icon: "💬", label: "WhatsApp" },
                { href: "https://maps.google.com/?q=The+Table+at+Splatter+Vadodara", icon: "🗺️", label: "Maps" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(201,123,58,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.06em" }}>Quick Links</div>
            {["About", "Menu", "Experience", "Gallery", "Contact"].map(l => (
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
              ["Mon – Sun", "11:00 AM – 11:30 PM"],
            ].map(([d, t]) => (
              <div key={d} style={{ marginBottom: 14 }}>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{d}</div>
                <div style={{ color: "var(--caramel)", fontSize: 13, fontWeight: 500, marginTop: 2 }}>{t}</div>
              </div>
            ))}
            <div style={{ marginTop: 20 }}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Reserve a table</div>
              <button onClick={onReserveClick}
                style={{ background: "var(--caramel)", color: "white", border: "none", padding: "9px 18px", borderRadius: 50, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--clay)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--caramel)"}
              >Book Now →</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.06em" }}>Contact</div>
            {[
              ["📍", "Vadodara, Gujarat, India", null],
              ["📞", "+91 75070 11992", "tel:+917507011992"],
              ["📸", "@thetableatsplatter_", "https://www.instagram.com/thetableatsplatter_?igsh=MWg5aTExc3IybXExbw=="],
            ].map(([icon, text, href]) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ fontSize: 13 }}>{icon}</span>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                    style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--caramel)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >{text}</a>
                ) : (
                  <span style={{ fontSize: 13, lineHeight: 1.6 }}>{text}</span>
                )}
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
        @media(max-width:900px){
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
  const [showModal, setShowModal] = useState(false);
  useScrollFade();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <SEOHead />
      <FontLoader />
      <Navbar onReserveClick={openModal} />
      <main>
        <Hero onReserveClick={openModal} />
        <About />
        <Menu />
        <Experience />
        <Gallery />
        <Contact />
        <ReservationBand onReserveClick={openModal} />
      </main>
      <Footer onReserveClick={openModal} />
      {showModal && <ReservationModal onClose={closeModal} />}
    </>
  );
}