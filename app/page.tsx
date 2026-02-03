import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main className="pb-12">
      <Header />
      <AboutUs />
      <Services />
    </main>
  );
}
