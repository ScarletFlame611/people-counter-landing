import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { DemoVideo } from "./components/DemoVideo";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="flex min-h-dvh flex-col">
        <Nav />
        <Hero />
      </div>
      <main>
        <Marquee />
        <DemoVideo />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
