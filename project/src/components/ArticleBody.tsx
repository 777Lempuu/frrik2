import { mainArticle } from '@/data/articles';
import { Clock, User, Share2, Bookmark } from 'lucide-react';

export default function ArticleBody() {
  return (
    <article id="article" className="py-12">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between border-y border-ink-800 py-3 mb-8">
            <div className="flex items-center gap-4 text-sm text-ink-400">
              <span className="flex items-center gap-1.5">
                <User size={14} /> {mainArticle.byline}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {mainArticle.readTime}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="text-ink-400 hover:text-crimson-400 transition"
                aria-label="Share"
              >
                <Share2 size={18} />
              </button>
              <button
                className="text-ink-400 hover:text-gold-400 transition"
                aria-label="Bookmark"
              >
                <Bookmark size={18} />
              </button>
            </div>
          </div>

          <div className="article-prose">
            {mainArticle.body.map((block, i) => {
              if (block.type === 'pullquote') {
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l-4 border-crimson-500 pl-6 py-2"
                  >
                    <p className="font-headline text-2xl font-medium leading-snug text-white italic">
                      &ldquo;{block.text}&rdquo;
                    </p>
                  </blockquote>
                );
              }
              if (block.type === 'subhead') {
                return (
                  <h2
                    key={i}
                    className="mt-10 mb-4 font-display text-2xl text-white tracking-tight"
                  >
                    {block.text}
                  </h2>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {mainArticle.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-ink-300 hover:border-crimson-600 hover:text-crimson-400 transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
