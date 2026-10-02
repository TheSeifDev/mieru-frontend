import Hero from "@/src/components/marketing/home/hero/Hero";
import TrustedBy from "@/src/components/marketing/home/trusted-by/Trustedby";
import Benefits from "@/src/components/marketing/home/benefits/Benefits";
import HowItWorks from "@/src/components/marketing/home/how-it-works/Howitworks";
import { Navbar } from "@/src/components/marketing/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Benefits />
      <HowItWorks />
    </main>
  );
}