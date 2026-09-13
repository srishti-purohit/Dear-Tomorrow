import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedPostcards from "@/components/FeaturedPostcards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6">
        <Navbar />
        <Hero />
        <HowItWorks />
        <FeaturedPostcards />
      </div>

      <Footer />
    </main>
  );
}
