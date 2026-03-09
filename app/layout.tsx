import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "RM Web Solutions | Modern Web Development Services",
  description:
    "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
  alternates: {
    canonical: "https://rmwebsolutions.com",
  },
  keywords: [
    "web development",
    "web design",
    "mobile applications",
    "website maintenance",
    "website support",
    "custom websites",
    "web hosting",
    "website hosting",
    "New York",
    "Rensselaer County",
    "Wynantskill",
    "Albany",
    "Capital District",
    "Troy",
    "Saratoga",
  ],
  openGraph: {
    title: "RM Web Solutions | Modern Web Development Services",
    description:
      "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
    url: "https://rmwebsolutions.com",
    siteName: "RM Web Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RM Web Solutions | Modern Web Development Services",
    description:
      "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RM Web Solutions",
    url: "https://rmwebsolutions.com",
    email: "info@rmwebsolutions.com",
    telephone: "+1-518-937-0948",
    sameAs: [
      "https://www.google.com/maps/place/RM+Web+Solutions/@42.6577141,-73.6438282,17z/data=!3m1!4b1!4m6!3m5!1s0x89de07689631dd85:0x74c6783a8360f926!8m2!3d42.6577141!4d-73.6438282!16s%2Fg%2F11y_c8s6nh",
    ],
    areaServed: [
      "Wynantskill",
      "Averill Park",
      "West Sand Lake",
      "Troy",
      "Albany",
      "Saratoga",
      "Capital District",
      "Rensselaer County",
    ],
    description:
      "RM Web Solutions is a web and application development business providing custom websites, web applications, mobile solutions, and maintenance for businesses",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wynantskill",
      addressRegion: "NY",
      postalCode: "12198",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+1-518-937-0948",
      areaServed: "US",
      email: "info@rmwebsolutions.com",
      availableLanguage: "English",
    },
  };
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${jakarta.variable} font-jakarta antialiased smooth-scroll`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
