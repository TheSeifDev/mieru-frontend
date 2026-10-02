type Props = {
  badge: string;
  title: string;
  description: string;
};

const SectionHeading = ({ badge, title, description }: Props) => (
  <div className="mx-auto max-w-2xl text-center">
    <span className="inline-block rounded-full bg-blue-600/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
      {badge}
    </span>
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
      {description}
    </p>
  </div>
);

export default SectionHeading;