
import { Header } from '@/components/landing-page/Header';
import { Hero } from '@/components/landing-page/Hero';
import { PainPoints } from '@/components/landing-page/PainPoints';
import { Solution } from '@/components/landing-page/Solution';
import { CoffeeComparison } from '@/components/landing-page/CoffeeComparison';
import { ComparisonTable } from '@/components/landing-page/ComparisonTable';
import { TrustSection } from '@/components/landing-page/TrustSection';
import { FAQSection } from '@/components/landing-page/FAQSection';
import { Footer } from '@/components/landing-page/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-secondary/30">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <CoffeeComparison />
      <ComparisonTable />
      <TrustSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
