"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: send `email` to your newsletter endpoint / provider here.
    setDone(true);
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-white/70 p-1.5 focus-within:border-blue-500/60 dark:bg-white/3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setDone(false);
          }}
          placeholder="Enter your email"
          className="h-9 min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p role="status" className="mt-2 h-4 text-xs text-blue-600 dark:text-blue-400">
        {done ? "Thanks for subscribing!" : ""}
      </p>
    </form>
  );
};

export default NewsletterForm;