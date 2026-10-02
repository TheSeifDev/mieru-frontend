import { Navbar } from "@/src/components/marketing/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            MIERU
          </p>

          <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-7xl">
            See more.
            <br />
            Rank higher.
            <br />
            <span className="text-primary">Be everywhere.</span>
          </h1>
        </div>
      </section>
    </main>
  );
}