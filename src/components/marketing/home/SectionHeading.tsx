type Props = {
  badge: string;
  title: string;
  /** Optional second line, shown in a softer color */
  muted?: string;
  description: string;
};

const SectionHeading = ({ badge, title, muted, description }: Props) => (
  <div className="relative isolate mx-auto max-w-3xl text-center">
    {/* soft glow behind the heading */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
    />

    {/* eyebrow: text flanked by fading hairlines */}
    <div className="flex items-center justify-center gap-3">
      <span
        aria-hidden
        className="h-px w-10 bg-linear-to-r from-transparent to-blue-500/70 sm:w-14"
      />
      <span className="text-sm font-medium tracking-wide text-blue-600 dark:text-blue-400">
        {badge}
      </span>
      <span
        aria-hidden
        className="h-px w-10 bg-linear-to-l from-transparent to-blue-500/70 sm:w-14"
      />
    </div>

    <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
      {title}
      {muted && <span className="block text-foreground/40">{muted}</span>}
    </h2>

    <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {description}
    </p>
  </div>
);

export default SectionHeading;