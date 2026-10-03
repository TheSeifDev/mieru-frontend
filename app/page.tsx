import Hero from "@/src/components/marketing/home/hero/Hero";
import TrustedBy from "@/src/components/marketing/home/trusted-by/Trustedby";
import Benefits from "@/src/components/marketing/home/benefits/Benefits";
import HowItWorks from "@/src/components/marketing/home/how-it-works/Howitworks";
import Pricing from "@/src/components/marketing/home/pricing/Pricing";
import Testimonials from "@/src/components/marketing/home/testimonials/Testimonials";
import Faq from "@/src/components/marketing/home/faq/Faq";
import FinalCta from "@/src/components/marketing/home/final-cta/FinalCta";
import Footer from "@/src/components/marketing/footer/Footer";
import { Navbar } from "@/src/components/marketing/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}