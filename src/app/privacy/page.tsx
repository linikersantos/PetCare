import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/landing-page/Header';
import { Footer } from '@/components/landing-page/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-48 pb-24">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-muted">
          <Button asChild variant="ghost" className="mb-8 hover:bg-secondary/10 text-primary font-bold">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5" /> Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-black text-primary mb-12 font-headline">Legal Information</h1>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-primary mb-6 font-headline">1. Privacy Policy</h2>
              <p className="mb-4 font-bold text-secondary">Last Updated: April 26, 2026</p>
              <p className="mb-6">
                At The Pet Care Institute, we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect and use your information when you purchase the Silent Language Protocol or browse our website.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">1.1. Information We Collect</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Data:</strong> We collect your name and email address when you make a purchase or subscribe to our newsletter.</li>
                    <li><strong>Payment Data:</strong> All transactions are processed through secure third-party partners such as Stripe, PayPal, or Gumroad. We do not store your credit card details on our servers.</li>
                    <li><strong>Browsing Data:</strong> We use cookies and similar technologies (such as the Meta Pixel) to analyze traffic and improve the relevance of our advertisements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">1.2. How We Use Your Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To deliver digital access to The Calm Dog Guide and video lessons.</li>
                    <li>To provide customer support and answer inquiries.</li>
                    <li>To send updates regarding the protocol or exclusive offers from the Institute.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">1.3. Data Sharing</h3>
                  <p>
                    We do not sell or rent your data to third parties. We only share information with essential service providers necessary for business operations, such as payment processors and email marketing services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">1.4. Your Rights</h3>
                  <p>
                    At any time, you may request to access, rectify, or delete your personal data by contacting our support team.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-muted w-full"></div>

            <section>
              <h2 className="text-2xl font-black text-primary mb-6 font-headline">2. Terms of Service</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2.1. Acceptance of Terms</h3>
                  <p>
                    By purchasing any product from The Pet Care Institute, you agree to comply with these terms. Access to the Silent Language Protocol is granted for personal, non-commercial use only.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2.2. Digital Delivery</h3>
                  <p>
                    The Calm Dog Guide and all bonus materials are 100% digital products. Access is sent via email immediately following payment confirmation. No physical materials will be shipped.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2.3. Refund Policy & Guarantee</h3>
                  <p>
                    We offer a 30-Day Satisfaction Guarantee. If you do not see a transformation in your dog's behavior within 30 days of applying the protocol, we will refund your full investment, no questions asked.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2.4. Disclaimer</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Results may vary depending on the individual dog and the owner's consistency.</li>
                    <li>Information provided by The Pet Care Institute is for educational purposes only and does not substitute for professional advice from a veterinarian or certified animal behaviorist.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2.5. Intellectual Property</h3>
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
