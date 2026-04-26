import Link from 'next/link';
import { Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-white/60 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-white/10 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">The Pet Care Institute</h3>
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-white/40">
            <Lock className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px] font-bold">Secure Encrypted Payments</span>
          </div>
          <div className="flex gap-4 grayscale opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          </div>
          <p className="text-[10px] text-center max-w-xl text-white/30">
            Results may vary. The information provided by The Pet Care Institute is for educational purposes only and does not substitute for professional veterinary advice or in-person training with a certified behaviorist.
          </p>
        </div>
      </div>
    </footer>
  );
}
