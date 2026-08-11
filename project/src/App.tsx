import Header from '@/components/Header';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import EditorPicks from '@/components/EditorPicks';
import ArticleBody from '@/components/ArticleBody';
import Trending from '@/components/Trending';
import Comments from '@/components/Comments';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <Ticker />
      <main>
        <Hero />
        <EditorPicks />
        <ArticleBody />
        <Trending />
        <Comments />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
