import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Burjo Kang Alik | Bubur Kacang Ijo Premium Cirebon",
  description:
    "Nikmati Bubur Kacang Ijo hangat, lezat, dan bergizi dengan bahan premium dan cita rasa tradisional khas Indonesia. Pesan sekarang via WhatsApp!",
  keywords:
    "bubur kacang ijo, bubur kacang hijau, kuliner, makanan tradisional indonesia, bubur kacang ijo enak",
  authors: [{ name: "The Burjo Kang Alik" }],
  openGraph: {
    title: "The Burjo Kang Alik | Bubur Kacang Ijo Premium Cirebon",
    description:
      "Nikmati Bubur Kacang Ijo hangat, lezat, dan bergizi dengan bahan premium dan cita rasa tradisional khas Indonesia.",
    url: "https://buburkacangijo.com",
    siteName: "The Burjo Kang Alik",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Burjo Kang Alik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Burjo Kang Alik | Bubur Kacang Ijo Premium Cirebon",
    description:
      "Nikmati Bubur Kacang Ijo hangat, lezat, dan bergizi dengan bahan premium dan cita rasa tradisional khas Indonesia.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Burjo Kang Alik",
  image: "/images/hero-bubur.jpg",
  telephone: "+6283898217064",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Nurul Hidayah No.4, RT.4/RW.3, Kp. Tengah, Kec. Kramat jati",
    addressLocality: "Jakarta Timur",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  openingHours: "Mo-Su 08:00-22:00",
  servesCuisine: "Indonesian",
  priceRange: "Rp10.000 - Rp25.000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${plusJakarta.variable} font-body antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
