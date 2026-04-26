import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/landing-page/Header';
import { Footer } from '@/components/landing-page/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-48 pb-24">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-muted">
          <Button asChild variant="ghost" className="mb-8 hover:bg-secondary/10 text-primary font-bold transition-all hover:scale-105">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5" /> Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-black text-primary mb-12 font-headline">Terms of Service</h1>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-primary mb-6 font-headline">2. Terms of Service</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">2.1. Acceptance of Terms</h3>
                  <p>
                    By purchasing any product from The Pet Care Institute, you agree to comply with these terms. Access to the Silent Language Protocol is granted for personal, non-commercial use only.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">2.2. Digital Delivery</h3>
                  <p>
                    The Calm Dog Guide and all bonus materials are 100% digital products. Access is sent via email immediately following payment confirmation. No physical materials will be shipped.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">2.3. Refund Policy & Guarantee</h3>
                  <p className="bg-secondary/5 p-6 rounded-2xl border border-secondary/20 text-primary font-medium">
                    We offer a 30-Day Satisfaction Guarantee. If you do not see a transformation in your dog's behavior within 30 days of applying the protocol, we will refund your investment in full, no questions asked.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">2.4. Disclaimer</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Results may vary depending on the individual dog and the owner's consistency.</li>
                    <li>Information provided by The Pet Care Institute is for educational purposes only and does not substitute for professional advice from a veterinarian or certified animal behaviorist.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">2.5. Intellectual Property</h3>
                  <p>
                    All content, including the Silent Language Dictionary™, videos, and text, is the exclusive property of The Pet Care Institute. Unauthorized reproduction, distribution, or resale of these materials is strictly prohibited.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
