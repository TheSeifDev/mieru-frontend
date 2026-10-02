import Image from "next/image";
import {
  ChevronDown,
  FileText,
  KeyRound,
  LayoutDashboard,
  MessageSquareText,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const nav: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "SEO", icon: Search },
  { label: "GEO / AI", icon: Sparkles },
  { label: "Keywords", icon: KeyRound },
  { label: "Competitors", icon: Users },
  { label: "Reports", icon: FileText },
];

const stats: { label: string; value: string; delta: string; icon: LucideIcon }[] = [
  { label: "Search Visibility", value: "78%", delta: "+12%", icon: Search },
  { label: "AI Visibility", value: "64%", delta: "+18%", icon: Sparkles },
  { label: "Total Keywords", value: "2.4K", delta: "+20%", icon: KeyRound },
  { label: "AI Mentions", value: "186", delta: "+22%", icon: MessageSquareText },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const seo = "M10,92 L84,70 L158,76 L232,58 L306,66 L390,44";
const ai = "M10,112 L84,98 L158,102 L232,82 L306,90 L390,66";
const seoPoints = [
  [84, 70],
  [158, 76],
  [232, 58],
  [306, 66],
  [390, 44],
];
const aiPoints = [
  [84, 98],
  [158, 102],
  [232, 82],
  [306, 90],
  [390, 66],
];

const DashboardPreview = () => {
  return (
    <div
      aria-hidden
      className="relative mx-auto w-full max-w-160 lg:transform-[perspective(1800px)_rotateY(-8deg)_rotateX(3deg)]"
    >
      {/* soft glow behind the window */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-blue-500/20 blur-3xl dark:bg-blue-600/25" />

      <div className="flex overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-2xl shadow-blue-900/15 ring-1 ring-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a1226]/85 dark:shadow-black/50 dark:ring-blue-400/10">
        {/* Sidebar */}
        <aside className="hidden w-36 shrink-0 flex-col border-r border-black/5 p-3 text-[11px] sm:flex dark:border-white/5">
          <div className="mb-4 flex items-center gap-1.5 px-2">
            <Image
              src="/logo.webp"
              alt=""
              width={20}
              height={20}
              className="size-5 object-contain"
            />
            <span className="text-sm font-bold tracking-tight text-foreground">MIERU</span>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {nav.map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                  active
                    ? "bg-blue-600/10 font-medium text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                {label}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-2 px-2 py-1.5 text-muted-foreground">
            <Settings className="size-3.5" />
            Settings
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Overview</h3>
            <span className="flex items-center gap-1 rounded-lg border border-black/10 px-2.5 py-1 text-[10px] text-muted-foreground dark:border-white/10">
              Last 30 days
              <ChevronDown className="size-3" />
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {stats.map(({ icon: Icon, ...s }) => (
              <div
                key={s.label}
                className="rounded-xl border border-black/5 bg-white/80 p-3 shadow-sm dark:border-white/5 dark:bg-white/5 dark:shadow-none"
              >
                <p className="flex items-center gap-1 text-[9px] text-muted-foreground">
                  <Icon className="size-3 text-blue-600 dark:text-blue-400" />
                  {s.label}
                </p>
                <p className="mt-1 text-xl font-bold text-foreground">{s.value}</p>
                <p className="flex items-center gap-0.5 text-[9px] font-medium text-emerald-500">
                  <TrendingUp className="size-3" />
                  {s.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-black/5 bg-white/80 p-3 dark:border-white/5 dark:bg-white/5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-medium text-foreground">Visibility Trend</span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <i className="size-1.5 rounded-full bg-blue-600" /> SEO
                </span>
                <span className="flex items-center gap-1">
                  <i className="size-1.5 rounded-full bg-blue-400" /> AI Search
                </span>
              </span>
            </div>

            <svg viewBox="0 0 400 150" className="mt-2 w-full">
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="10"
                  x2="395"
                  y1={20 + i * 25}
                  y2={20 + i * 25}
                  className="stroke-black/5 dark:stroke-white/10"
                  strokeDasharray="2 4"
                />
              ))}
              <path d={ai} fill="none" strokeWidth="1.5" className="stroke-blue-400" />
              <path d={seo} fill="none" strokeWidth="1.5" className="stroke-blue-600" />
              {aiPoints.map(([x, y]) => (
                <circle key={`a${x}`} cx={x} cy={y} r="2.5" className="fill-white stroke-blue-400" />
              ))}
              {seoPoints.map(([x, y]) => (
                <circle key={`s${x}`} cx={x} cy={y} r="2.5" className="fill-white stroke-blue-600" />
              ))}
              {/* tooltip */}
              <g transform="translate(330 22)">
                <rect width="42" height="16" rx="4" className="fill-slate-900 dark:fill-blue-600" />
                <text x="21" y="11" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="600">
                  +22%
                </text>
              </g>
              {months.map((m, i) => (
                <text
                  key={m}
                  x={10 + i * 76}
                  y="145"
                  fontSize="8"
                  className="fill-muted-foreground"
                >
                  {m}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;