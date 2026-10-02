import Image from "next/image";
import { Frame, Orbit, Shapes, Triangle, Workflow, BookOpen, type LucideIcon } from "lucide-react";

const brands: { name: string; icon: LucideIcon; src?: string }[] = [
  { name: "Framer", icon: Frame }, { name: "Webflow", icon: Workflow },
  { name: "Notion", icon: BookOpen },
  { name: "Vercel", icon: Triangle },
  { name: "Linear", icon: Orbit },
  { name: "Craft", icon: Shapes },
];

const TrustedBy = () => {
  return (
    <section className="w-full bg-background px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>

        <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map(({ name, icon: Icon, src }) => (
            <li
              key={name}
              className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              {src ? (
                <Image src={src} alt="" width={24} height={24} className="size-6 object-contain" />
              ) : (
                <Icon className="size-6" strokeWidth={2.25} />
              )}
              <span className="text-lg font-semibold tracking-tight">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustedBy;
