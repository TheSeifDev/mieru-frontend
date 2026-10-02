import { Star } from "lucide-react";
import SectionHeading from "../SectionHeading";

const testimonials = [
  {
    quote:
      "MIERU gave us insights we couldn't find anywhere else. Our organic traffic grew 3x in 2 months.",
    name: "Sarah K.",
    role: "Founder, IndieBrand",
  },
  {
    quote:
      "The AI visibility tracking is a game changer. Super easy to use and the reports look amazing.",
    name: "Mohamed A.",
    role: "Growth Marketer",
  },
  {
    quote:
      "Clean interface, powerful data. Exactly what we needed to stay ahead of our competitors.",
    name: "James L.",
    role: "CEO, ScaleUp",
  },
  {
    quote:
      "Finally a tool that tracks both SEO and AI search in one place. Highly recommended!",
    name: "Lina T.",
    role: "Product Designer",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative isolate w-full bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Testimonials"
          title="Loved by teams worldwide."
          description="From startups to agencies, MIERU helps teams get more visibility and grow faster."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ quote, name, role }) => (
            <figure
              key={name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 dark:bg-white/3"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {name[0]}
                </span>
                <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
              </div>

              <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{quote}”
              </blockquote>

              <figcaption className="relative mt-5">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;