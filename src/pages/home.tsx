import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { LibrarySection } from '@/components/library-section';
import { DonateSection } from '@/components/donate-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full">
      <Nav />
      <Hero />
      <LibrarySection />
      <DonateSection />
      <Footer />
    </div>
  );
}
