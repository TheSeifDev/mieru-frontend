import type { ComponentType, SVGProps } from "react";
import { SiFramer, SiLinear, SiNotion, SiVercel, SiWebflow } from "react-icons/si";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/** Craft isn't in react-icons, so this is a simple stand-in mark. Swap in the official SVG when you have it. */
const CraftIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M5 3h6v8H3V5a2 2 0 0 1 2-2Zm8 0h6a2 2 0 0 1 2 2v6h-8V3ZM3 13h8v8H5a2 2 0 0 1-2-2v-6Zm10 0h8v6a2 2 0 0 1-2 2h-6v-8Z" />
  </svg>
);

const brands: { name: string; icon: IconType }[] = [
  { name: "Framer", icon: SiFramer },
  { name: "Webflow", icon: SiWebflow },
  { name: "Notion", icon: SiNotion },
  { name: "Vercel", icon: SiVercel },
  { name: "Linear", icon: SiLinear },
  { name: "Craft", icon: CraftIcon },
];

const Row = ({ hidden = false }: { hidden?: boolean }) => (
  <ul
    aria-hidden={hidden}
    className="flex shrink-0 animate-marquee items-center gap-16 pr-16 motion-reduce:animate-none"
  >
    {brands.map(({ name, icon: Icon }) => (
      <li
        key={name}
        className="flex items-center gap-3 text-foreground/50 transition-colors hover:text-foreground"
      >
        <Icon className="size-9" />
        <span className="text-2xl font-semibold tracking-tight">{name}</span>
      </li>
    ))}
  </ul>
);

const TrustedBy = () => {
  return (
    <section className="w-full bg-background px-6 py-16">
      <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
        Trusted by teams at
      </p>

      <div className="mx-auto mt-10 flex max-w-6xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
};

export default TrustedBy;