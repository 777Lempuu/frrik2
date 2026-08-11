import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-950 via-ink-950 to-ink-950" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-crimson-600 mb-5">
            <Mail size={26} className="text-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white text-balance">
            Get the Scoop Before the Cops Do
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            The Hit &amp; Run dispatch lands in your inbox every morning. Breaking
            culture, crime, and music reporting from across Los Santos &mdash; no
            press releases, no PR fluff.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-white">
              <Check size={20} />
              <span className="font-headline text-sm font-semibold">
                You&rsquo;re on the list. Stay tuned.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-ink-600 bg-ink-900 px-5 py-3 text-sm text-white placeholder-ink-500 focus:border-crimson-500 focus:outline-none focus:ring-1 focus:ring-crimson-500 transition"
              />
              <button
                type="submit"
                className="rounded-full bg-crimson-600 px-6 py-3 font-headline text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-500 transition-colors"
              >
                Sign Up
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-ink-500">
            No spam. Unsubscribe anytime. We don&rsquo;t sell your data &mdash; we&rsquo;re
            not that kind of operation.
          </p>
        </div>
      </div>
    </section>
  );
}
