import { editorPicks } from '@/data/articles';
import { Flame } from 'lucide-react';

export default function EditorPicks() {
  return (
    <section className="bg-ink-900 py-12">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-7">
          <Flame size={22} className="text-gold-400" />
          <h2 className="section-label">Editor&rsquo;s Picks</h2>
          <div className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorPicks.map((pick) => (
            <article
              key={pick.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-ink-800 bg-ink-950 hover:border-crimson-700 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <span className="absolute top-3 left-3 tag bg-gold-500/90 text-ink-950">
                  {pick.kicker}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-headline text-lg font-semibold leading-snug text-white group-hover:text-crimson-400 transition-colors">
                  {pick.title}
                </h3>
                <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                  {pick.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
