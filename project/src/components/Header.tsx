import { useEffect, useState } from 'react';
import { Menu, X, Search, Radio } from 'lucide-react';

const navItems = ['Culture', 'Music', 'Crime', 'Politics', 'Legal', 'Lists', 'Video'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-ink-950'
      }`}
    >
      <div className="border-b border-ink-800">
        <div className="container-x flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-ink-300 hover:text-white transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="#top" className="group flex items-center gap-2">
              <span className="font-display text-2xl tracking-tight text-white">
                HIT <span className="text-crimson-500">&amp;</span> RUN
              </span>
              <span className="hidden sm:inline font-headline text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink-400 group-hover:text-gold-400 transition">
                Media
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-headline text-sm font-medium uppercase tracking-wider text-ink-300 hover:text-crimson-400 transition-colors hover-underline"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="text-ink-300 hover:text-white transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a
              href="#newsletter"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-crimson-600 px-4 py-1.5 font-headline text-xs font-semibold uppercase tracking-wider text-white hover:bg-crimson-500 transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-ink-800 bg-ink-900">
            <div className="container-x flex flex-col py-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 font-headline text-sm font-medium uppercase tracking-wider text-ink-300 hover:text-crimson-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      <div className="bg-crimson-700 text-white">
        <div className="container-x flex items-center gap-2 py-1.5">
          <Radio size={14} className="shrink-0 animate-pulse" />
          <span className="font-headline text-[0.7rem] font-bold uppercase tracking-widest">
            Live from Los Santos
          </span>
        </div>
      </div>
    </header>
  );
}
