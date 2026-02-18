import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RM Web Solutions | Modern Web Development Services",
  description:
    "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
  openGraph: {
    title: "RM Web Solutions | Modern Web Development Services",
    description:
      "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
    url: "https://rmwebsolutions.com",
    siteName: "RM Web Solutions",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "RM Web Solutions",
    url: "https://www.rmwebsolutions.com",
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
      areaServed: "US",
      email: "info@rmwebsolutions.com",
      availableLanguage: "English",
    },
  };
  return (
    <html lang="en">
      <head>
        <title>RM Web Solutions</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased smooth-scroll`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
