import AboutUs from "./components/about-us/AboutUs";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <main className="pb-12">
      <Header />
      <AboutUs />
      <Services />
      <Technologies />
      <Projects />
    </main>
  );
}
