import { useEffect, useState, useCallback } from 'react';
import { supabase, type Comment } from '@/lib/supabase';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

const ARTICLE_ID = 'drake-kick-stream-dating-show';

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadComments = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: queryError } = await supabase
      .from('comments')
      .select('id, article_id, author_name, body, created_at')
      .eq('article_id', ARTICLE_ID)
      .order('created_at', { ascending: false });

    if (queryError) {
      setError('Could not load comments. Check your connection.');
    } else {
      setComments((data as Comment[]) ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedBody = body.trim();
    if (!trimmedName || !trimmedBody) return;

    setSubmitting(true);
    setError(null);
    const { data, error: insertError } = await supabase
      .from('comments')
      .insert({
        article_id: ARTICLE_ID,
        author_name: trimmedName,
        body: trimmedBody,
      })
      .select('id, article_id, author_name, body, created_at')
      .single();

    setSubmitting(false);

    if (insertError || !data) {
      setError('Could not post your comment. Try again.');
      return;
    }
    setComments([data as Comment, ...comments]);
    setName('');
    setBody('');
  };

  return (
    <section className="bg-ink-900 py-12 border-t border-ink-800">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare size={22} className="text-crimson-500" />
            <h2 className="section-label">
              Street Talk ({comments.length})
            </h2>
            <div className="h-px flex-1 bg-ink-700" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-ink-700 bg-ink-950 p-5 mb-8"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your alias"
              maxLength={40}
              className="w-full rounded-md border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder-ink-500 focus:border-crimson-500 focus:outline-none focus:ring-1 focus:ring-crimson-500 transition"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Sound off..."
              rows={3}
              maxLength={500}
              className="mt-3 w-full rounded-md border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder-ink-500 focus:border-crimson-500 focus:outline-none focus:ring-1 focus:ring-crimson-500 transition resize-none"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-ink-500">
                {body.length}/500
              </span>
              <button
                type="submit"
                disabled={submitting || !name.trim() || !body.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-crimson-600 px-5 py-2 font-headline text-xs font-semibold uppercase tracking-wider text-white hover:bg-crimson-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                {submitting ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                Post
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-crimson-400">{error}</p>
            )}
          </form>

          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin text-ink-500" size={28} />
            </div>
          ) : comments.length === 0 ? (
            <p className="text-center py-8 text-ink-500">
              No comments yet. Be the first to sound off.
            </p>
          ) : (
            <ul className="space-y-5">
              {comments.map((c) => (
                <li
                  key={c.id}
                  className="rounded-lg border border-ink-800 bg-ink-950 p-4 animate-fade-up"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-headline text-sm font-semibold text-crimson-400">
                      {c.author_name}
                    </span>
                    <span className="text-xs text-ink-500">
                      {new Date(c.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-ink-200 leading-relaxed whitespace-pre-wrap">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
