import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
      { label: "API", href: "/api-docs" },
      { label: "Status", href: "/status" },
    ],
  },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/60 bg-background px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.webp" alt="" width={28} height={28} className="size-7 object-contain" />
              <span className="text-xl font-bold tracking-tight text-foreground">MIERU</span>
            </Link>
            <p className="mt-4 max-w-56 text-sm leading-relaxed text-muted-foreground">
              See. Track. Grow.
              <br />
              Your SEO &amp; AI visibility partner.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Product updates and SEO &amp; AI search tips. No spam.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} MIERU. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            {legal.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition-colors hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;