import { trendingStories } from '@/data/articles';
import { TrendingUp } from 'lucide-react';

export default function Trending() {
  return (
    <section className="py-12">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-7">
          <TrendingUp size={22} className="text-crimson-500" />
          <h2 className="section-label">Trending Stories</h2>
          <div className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {trendingStories.map((story, idx) => (
            <article
              key={story.id}
              className="group flex gap-4 items-start cursor-pointer border-b border-ink-800 pb-6 last:border-b-0"
            >
              <span className="font-display text-4xl text-ink-700 group-hover:text-crimson-600 transition-colors shrink-0 leading-none mt-1">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-headline text-[0.7rem] font-semibold uppercase tracking-widest text-crimson-500">
                  {story.category}
                </span>
                <h3 className="mt-1.5 font-headline text-lg font-semibold leading-snug text-white group-hover:text-crimson-400 transition-colors">
                  {story.title}
                </h3>
              </div>
              <div className="hidden sm:block w-24 h-20 rounded overflow-hidden shrink-0">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
