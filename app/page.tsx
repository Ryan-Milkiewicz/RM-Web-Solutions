import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RM Web Solutions | Modern Web Development Services",
  description:
    "RM Web Solutions builds fast, SEO-friendly websites and custom applications using modern design practices.",
};

export default function Home() {
  return (
    <main className="pb-12">
      <Header />
      <AboutUs />
      <Services />
    </main>
  );
}
