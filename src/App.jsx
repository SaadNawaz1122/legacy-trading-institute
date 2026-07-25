import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import TradingSkills from "./components/TradingSkills";
import Faculty from "./components/Faculty";
import LiveMarket from "./components/LiveMarket";
import Resources from "./components/Resources";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg font-body text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Courses />
        <WhatYouWillLearn />
        <TradingSkills />
        <Faculty />
        <LiveMarket />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
