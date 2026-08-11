import { tickerItems } from '@/data/articles';

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden bg-ink-900 border-b border-ink-800 py-2.5">
      <div className="flex items-center">
        <div className="shrink-0 bg-crimson-600 px-3 py-0.5 ml-4 mr-4">
          <span className="font-headline text-[0.7rem] font-bold uppercase tracking-widest text-white">
            Breaking
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-ticker-scroll whitespace-nowrap">
            {items.map((item, i) => (
              <span
                key={i}
                className="mx-6 font-headline text-sm font-medium text-ink-200"
              >
                {item}
                <span className="ml-12 text-crimson-500">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
