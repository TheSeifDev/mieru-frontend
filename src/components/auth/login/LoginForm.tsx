"use client";

import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import LoginBrandPanel from "./LoginBrandPanel";

/* ------------------------------------------------------------------ */
/* TODO: replace these stubs with your real auth calls.                */
/* Throw an Error with a user-friendly message to show it in the form. */
/* ------------------------------------------------------------------ */
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function signInWithPassword(data: { email: string; password: string; remember: boolean }) {
  void data;
  await wait(900);
}
async function sendMagicLink(data: { email: string }) {
  void data;
  await wait(900);
}
async function signInWithProvider(provider: "google" | "github") {
  void provider;
  await wait(900);
}

type Mode = "password" | "link";
type Provider = "google" | "github";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "h-11 w-full rounded-lg border bg-background pl-10 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:ring-4 disabled:opacity-60";
const inputOk = "border-border focus:border-primary/60 focus:ring-primary/10";
const inputBad = "border-destructive/60 focus:border-destructive focus:ring-destructive/10";

export default function LoginForm() {
  const [mode, setMode] = useState<Mode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [capsLock, setCapsLock] = useState(false);

  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [social, setSocial] = useState<Provider | null>(null);
  const [linkSent, setLinkSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const emailError = !email
    ? "Enter your email address."
    : !EMAIL_RE.test(email)
      ? "Enter a valid email address."
      : null;
  const passwordError = mode === "password" && !password ? "Enter your password." : null;

  const showEmailError = (touched.email || submitted) && emailError;
  const showPasswordError = (touched.password || submitted) && passwordError;
  const busy = loading || social !== null;

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) =>
    setCapsLock(e.getModifierState("CapsLock"));

  const switchMode = (next: Mode) => {
    setMode(next);
    setServerError(null);
    setSubmitted(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setServerError(null);

    if (emailError) return document.getElementById("email")?.focus();
    if (passwordError) return document.getElementById("password")?.focus();

    setLoading(true);
    try {
      if (mode === "password") {
        await signInWithPassword({ email, password, remember });
        // TODO: redirect after success, e.g. router.push("/dashboard")
      } else {
        await sendMagicLink({ email });
        setLinkSent(true);
      }
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider: Provider) => {
    setServerError(null);
    setSocial(provider);
    try {
      await signInWithProvider(provider);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Could not sign in. Please try again.");
    } finally {
      setSocial(null);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      <LoginBrandPanel />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10 sm:px-10">
        {/* Mobile background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
          <Image
            src="/home/light.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 dark:hidden"
          />
          <Image
            src="/home/dark.webp"
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover object-center opacity-30 dark:block"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl" />
        </div>

        <div className="relative z-10 w-full max-w-105">
          {/* Mobile logo */}
          <div className="mb-10 flex justify-center lg:hidden">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.webp" alt="" width={34} height={34} className="size-8 object-contain" />
              <span className="text-xl font-bold tracking-[-0.055em]">MIERU</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur-xl sm:p-8">
            {linkSent ? (
              <div className="py-4 text-center" role="status">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-6" />
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  Check your inbox
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We sent a sign-in link to
                  <br />
                  <span className="font-medium text-foreground">{email}</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setLinkSent(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 text-sm font-medium text-primary transition-colors hover:text-(--mieru-blue-hover)"
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Welcome back.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Sign in to continue to your MIERU workspace.
                  </p>
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-3">
                  <SocialButton
                    label="Google"
                    icon={<GoogleIcon />}
                    loading={social === "google"}
                    disabled={busy}
                    onClick={() => handleSocial("google")}
                  />
                  <SocialButton
                    label="GitHub"
                    icon={<SiGithub className="size-4" />}
                    loading={social === "github"}
                    disabled={busy}
                    onClick={() => handleSocial("github")}
                  />
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">or with email</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Mode switch */}
                <div
                  role="group"
                  aria-label="Sign-in method"
                  className="relative mb-5 grid grid-cols-2 rounded-lg bg-muted p-1"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-md bg-background transition-transform duration-300 ease-out ${
                      mode === "link" ? "translate-x-full" : "translate-x-0"
                    }`}
                  />
                  {(
                    [
                      ["password", "Password"],
                      ["link", "Email link"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={mode === value}
                      onClick={() => switchMode(value)}
                      className={`relative z-10 rounded-md py-1.5 text-sm font-medium transition-colors ${
                        mode === value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Server error */}
                {serverError && (
                  <div
                    role="alert"
                    className="mb-5 flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                  >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        autoFocus
                        placeholder="you@example.com"
                        value={email}
                        disabled={busy}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        aria-invalid={!!showEmailError}
                        aria-describedby={showEmailError ? "email-error" : undefined}
                        className={`${inputBase} pr-4 ${showEmailError ? inputBad : inputOk}`}
                      />
                    </div>
                    {showEmailError && (
                      <p id="email-error" className="mt-1.5 text-xs text-destructive">
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  {mode === "password" && (
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-foreground">
                          Password
                        </label>
                        <Link
                          href="/forgot-password"
                          className="text-xs font-medium text-primary transition-colors hover:text-(--mieru-blue-hover)"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="Enter your password"
                          value={password}
                          disabled={busy}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                          onKeyUp={handleKey}
                          onKeyDown={handleKey}
                          aria-invalid={!!showPasswordError}
                          aria-describedby={showPasswordError ? "password-error" : undefined}
                          className={`${inputBase} pr-11 ${showPasswordError ? inputBad : inputOk}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-2.5 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                      </div>
                      {showPasswordError && (
                        <p id="password-error" className="mt-1.5 text-xs text-destructive">
                          {passwordError}
                        </p>
                      )}
                      {capsLock && !showPasswordError && (
                        <p className="mt-1.5 text-xs text-amber-600 dark:text-amber-400">
                          Caps Lock is on.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Remember me */}
                  {mode === "password" && (
                    <label className="flex w-fit cursor-pointer items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="peer sr-only"
                      />
                      <span className="flex size-4 items-center justify-center rounded-[5px] border border-border bg-background text-transparent transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-4 peer-focus-visible:ring-primary/10">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-xs text-muted-foreground">Keep me signed in</span>
                    </label>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={busy}
                    className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-(--mieru-blue-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        {mode === "password" ? "Signing in..." : "Sending link..."}
                      </>
                    ) : (
                      <>
                        {mode === "password" ? "Sign in" : "Email me a sign-in link"}
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-primary transition-colors hover:text-(--mieru-blue-hover)"
                  >
                    Create one
                  </Link>
                </p>
              </>
            )}
          </div>

          <p className="mt-6 text-center text-[11px] leading-5 text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function SocialButton({
  label,
  icon,
  loading,
  disabled,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 items-center justify-center gap-2.5 rounded-lg border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : icon}
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4">
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.73-.06-1.44-.19-2.12H12v4.01h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.25Z"
      />
      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.51A9.74 9.74 0 0 0 12 21.75Z"
      />
      <path
        fill="#FBBC05"
        d="M6.53 13.85a5.84 5.84 0 0 1 0-3.7V7.64H3.28a9.75 9.75 0 0 0 0 8.72l3.25-2.51Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.12c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.2 14.62 2.25 12 2.25a9.74 9.74 0 0 0-8.72 5.39l3.25 2.51C7.3 7.84 9.46 6.12 12 6.12Z"
      />
    </svg>
  );
}