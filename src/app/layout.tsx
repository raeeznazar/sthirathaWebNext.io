import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SITE } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Digital & Offset Printing in Kozhikode`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: assetPath("/favicon.ico"),
  },
  keywords: [
    "digital printing Kozhikode",
    "offset printing Kerala",
    "ID card printing",
    "hard binding",
    "spiral binding",
    "photocopy Kozhikode",
    "pre ink stamps",
    "DTP services",
    "Sthiratha",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Digital & Offset Printing in Kozhikode`,
    description: SITE.description,
    images: [{ url: "/images/sthiratha-logo.png", width: 110, height: 52, alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | Digital & Offset Printing in Kozhikode`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.fullName,
  url: SITE.url,
  image: `${SITE.url}/images/sthiratha-logo.png`,
  telephone: "+919847166333",
  email: "sales@sthiratha.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S.K. Arcade Kannur Road West Nadakkave, Vandipetta, West Hill",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673011",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:30-19:30",
  sameAs: ["https://wa.me/919847166333"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-dark antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
