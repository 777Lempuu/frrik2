/*
# Create comments table for Hit & Run Media

## Purpose
Stores reader comments on Hit & Run Media articles. This is a single-tenant
no-auth app (no sign-in screen) — readers post under a display name they type
in, so the table is intentionally public/shared.

## New Tables
- `comments`
  - `id` (uuid, primary key, auto-generated)
  - `article_id` (text, not null) — slug identifying which article the comment belongs to
  - `author_name` (text, not null) — display name the reader typed
  - `body` (text, not null) — the comment text
  - `created_at` (timestamptz, defaults to now) — when the comment was posted

## Security
- RLS enabled on `comments`.
- Four separate policies (SELECT/INSERT/UPDATE/DELETE) scoped to `anon, authenticated`
  because the app has no sign-in screen and the data is intentionally public.
- `USING (true)` / `WITH CHECK (true)` is acceptable here because comments are
  intentionally shared/public — there is no per-user ownership to enforce.

## Indexes
- Index on `article_id` for fast lookup of comments per article.
- Index on `created_at` descending for newest-first ordering.
*/

CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id text NOT NULL,
  author_name text NOT NULL,
  body text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

DROP POLICY IF EXISTS "anon_select_comments" ON comments;
CREATE POLICY "anon_select_comments" ON comments FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_comments" ON comments;
CREATE POLICY "anon_insert_comments" ON comments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_comments" ON comments;
CREATE POLICY "anon_update_comments" ON comments FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_comments" ON comments;
CREATE POLICY "anon_delete_comments" ON comments FOR DELETE
  TO anon, authenticated USING (true);
