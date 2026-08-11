import { Clock, User } from 'lucide-react';
import { mainArticle } from '@/data/articles';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-x pt-8 pb-10 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span className="tag bg-crimson-600 text-white">
              {mainArticle.category}
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white text-balance">
              {mainArticle.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300 text-balance">
              {mainArticle.dek}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-400">
              <span className="flex items-center gap-1.5">
                <User size={15} />
                {mainArticle.byline}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {mainArticle.date} &middot; {mainArticle.readTime}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end gap-4">
            <div className="rounded-lg border border-ink-700 bg-ink-900 p-5">
              <p className="section-label">Most Wanted</p>
              <p className="mt-3 font-headline text-lg font-semibold text-white leading-snug">
                {mainArticle.title}
              </p>
              <a
                href="#article"
                className="mt-4 inline-flex items-center gap-2 font-headline text-sm font-semibold uppercase tracking-wider text-crimson-400 hover:text-crimson-300 transition"
              >
                Read the report
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>

            <a
              id="solana"
              href="#solana"
              className="group rounded-lg border border-gold-700/60 bg-ink-900 p-4 hover:border-gold-500 transition-colors"
              aria-label="Connect to Solana in-game website"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/V2.jpeg"
                  alt="In-game QR code for Solana"
                  className="h-24 w-24 shrink-0 rounded object-cover"
                />
                <div>
                  <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    In-game access
                  </p>
                  <p className="mt-2 font-display text-2xl uppercase leading-none text-white group-hover:text-gold-300 transition-colors">
                    Connect to Solana
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-400">
                    Scan the fictional network link.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-ink-800">
          <img
            src={mainArticle.heroImage}
            alt={mainArticle.heroAlt}
            className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
