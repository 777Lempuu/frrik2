import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: false,
  },
});

export type Comment = {
  id: string;
  article_id: string;
  author_name: string;
  body: string;
  created_at: string;
};
