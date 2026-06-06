# 🌿 Bubur Kacang Ijo Nusantara — Landing Page

Landing page modern untuk bisnis kuliner **Bubur Kacang Ijo Nusantara** menggunakan stack Next.js 15 terbaru.

## 🚀 Tech Stack

- **Next.js 15** — App Router
- **React 19**
- **TypeScript** — Strict mode
- **Tailwind CSS v3** — Utility-first styling
- **Framer Motion** — Animasi halus & modern
- **Lucide React** — Icon library
- **Google Fonts** — Playfair Display + Plus Jakarta Sans

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata SEO + JSON-LD
│   ├── page.tsx         # Halaman utama (assembly semua sections)
│   └── globals.css      # Global styles + animasi custom
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Sticky navbar + dark mode + mobile menu
│   │   └── Footer.tsx   # Footer modern
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero + floating elements + CTA
│   │   ├── KeunggulanSection.tsx # 4 feature cards
│   │   ├── MenuSection.tsx       # 6 menu product cards
│   │   ├── TentangSection.tsx    # About + animated counters
│   │   ├── TestimoniSection.tsx  # Auto-sliding carousel
│   │   ├── CTASection.tsx        # CTA banner
│   │   ├── LokasiSection.tsx     # Google Maps + info card
│   │   └── KontakSection.tsx     # Contact channels
│   └── ui/
│       └── FloatingButtons.tsx   # Floating WA + Maps + back-to-top
├── hooks/
│   ├── useCounter.ts    # Animated number counter
│   └── useDarkMode.ts   # Dark mode toggle + localStorage
├── lib/
│   ├── data.ts          # Static data (menu, testimonial, stats)
│   └── utils.ts         # Helper functions + constants
└── types/
    └── index.ts         # TypeScript interfaces
```

## ⚙️ Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

```bash
# Build untuk production
npm run build
npm start
```

## ✨ Fitur

- ✅ **Sticky Navbar** dengan backdrop blur + dark mode toggle
- ✅ **Mobile Hamburger Menu** dengan animasi slide
- ✅ **Hero Section** dengan floating elements, parallax, CTA WhatsApp
- ✅ **Keunggulan** — 4 feature cards dengan hover animation
- ✅ **Menu Produk** — 6 product cards dengan rating bintang & order button
- ✅ **Tentang Kami** — Animated counter (scroll-triggered)
- ✅ **Testimoni Carousel** — Auto-slide + navigation dots + swipe support
- ✅ **CTA Section** — Banner hijau premium
- ✅ **Lokasi** — Google Maps iframe + info card glassmorphism
- ✅ **Kontak** — 4 channel + WhatsApp banner
- ✅ **Footer Modern** — Quick links + social media
- ✅ **Floating Buttons** — WhatsApp + Google Maps + Back to top
- ✅ **Dark Mode** — Full support dengan localStorage persistence
- ✅ **SEO Optimized** — Metadata, Open Graph, Twitter Card, JSON-LD
- ✅ **Responsive** — Mobile-first design
- ✅ **Smooth Scroll** — Navigasi scroll halus

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#2E7D32` |
| Secondary Green | `#81C784` |
| Accent Yellow | `#FFD54F` |
| Font Display | Playfair Display |
| Font Body | Plus Jakarta Sans |
| Border Radius | `1.5rem` (xl) |

## 📱 WhatsApp Order

Update nomor WhatsApp di `src/lib/utils.ts`:

```ts
export const WHATSAPP_NUMBER = "6281234567890";
```

## 🗺️ Google Maps

Ganti URL Maps di `src/components/sections/LokasiSection.tsx`:

```tsx
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ... />
```

---

© 2026 Bubur Kacang Ijo Nusantara. Made with ❤️
