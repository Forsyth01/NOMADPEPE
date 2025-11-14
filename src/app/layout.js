import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ──────────────────────────────────────────────────────────────
// ABSOLUTE IMAGE URL (with cache-buster for testing)
// ──────────────────────────────────────────────────────────────
const SITE_URL = "https://www.nomadpepe.xyz";
const OG_IMAGE = `${SITE_URL}/nomad-logo.png`; // Ensure <300KB, 1200x630 JPG/PNG

// ──────────────────────────────────────────────────────────────
// Next.js Metadata (SSR-safe)
// ──────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NOMAD PEPE - The Traveling Frog Meme Coin",
  description:
    "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index",

  openGraph: {
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    url: SITE_URL,
    siteName: "NOMAD PEPE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMAD PEPE - Traveling Frog Meme Coin",
        type: "image/png",  // Add explicit type for mobile crawlers
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    site: "@nomadcoinhq",
    creator: "@nomadcoinhq",
    images: [OG_IMAGE],
  },

  icons: {
    icon: OG_IMAGE,
    apple: OG_IMAGE,
  },
};

// Force static generation for crawlers (add this export)
export const revalidate = 0;  // Revalidate on every request (or 3600 for 1h cache)
export const dynamic = 'force-static';  // Ensure SSR/static for meta tags

// ──────────────────────────────────────────────────────────────
// Root Layout with Fallback Meta (doubles down for mobile)
// ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />

        {/* Theme & Icons */}
        <meta name="theme-color" content="#99CC33" />
        <link rel="icon" href={OG_IMAGE} />
        <link rel="apple-touch-icon" href={OG_IMAGE} />

        {/* Enhanced Fallback OG (with type/secure_url for strict mobile crawlers) */}
        <meta property="og:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta
          property="og:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="NOMAD PEPE" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />  {/* HTTPS fallback */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />  {/* Explicit for WhatsApp/X mobile */}
        <meta property="og:image:alt" content="NOMAD PEPE - Traveling Frog Meme Coin" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Fallback Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta
          name="twitter:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:site" content="@nomadcoinhq" />
        <meta name="twitter:creator" content="@nomadcoinhq" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}