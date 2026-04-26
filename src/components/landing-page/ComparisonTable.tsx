import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FEATURES = [
  "Micro-Signals Dictionary",
  "Separation Anxiety Guide",
  "Anti-Barking Protocol",
  "Lifetime Access",
  "Bonus: Walking Mastery Guide",
  "Tutor Community Access",
];

export function ComparisonTable() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 md:mb-6 font-headline">Choose your plan</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-20">Everything you need to transform your dog's life today.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Essential Plan */}
          <div className="bg-muted/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-muted/50 text-left flex flex-col hover:border-secondary/30 transition-all hover:scale-[1.01]">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-2 md:mb-3 font-headline">Essential Protocol</h3>
            <p className="text-muted-foreground text-sm md:text-md mb-8 md:mb-10">The fundamental guide for beginners.</p>
            
            <div className="mb-8 md:mb-10">
              <span className="text-xs md:text-sm text-muted-foreground line-through font-bold">Was $97.00</span>
              <div className="flex items-baseline gap-1 mt-1 font-headline">
                <span className="text-xl md:text-2xl font-bold text-primary">$</span>
                <span className="text-5xl md:text-7xl font-black text-primary tracking-tighter">4</span>
                <span className="text-lg md:text-xl text-muted-foreground font-bold">.00</span>
              </div>
            </div>

            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-12 flex-1">
              {FEATURES.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-md font-bold text-primary/80">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-secondary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" className="rounded-full h-16 md:py-8 border-primary border-2 text-primary hover:bg-primary hover:text-white font-black text-lg md:text-xl transition-all active:scale-95">
              <Link href="https://petcareinstitute.gumroad.com/l/calmdogguide">BUY ESSENTIAL</Link>
            </Button>
          </div>

          {/* Mastery Plan - Featured */}
          <div className="bg-primary p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-left flex flex-col relative shadow-[0_40px_80px_-20px_rgba(0,46,91,0.3)] border-[4px] md:border-[8px] border-secondary/20 overflow-hidden transition-all hover:scale-[1.02]">
            <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-secondary text-white px-3 md:px-5 py-1 md:py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg z-10">
              Most Popular
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-secondary mb-2 md:mb-3 font-headline">Mastery System</h3>
            <p className="text-white/60 text-sm md:text-md mb-8 md:mb-10">The complete ecosystem for the master owner.</p>
            
            <div className="mb-8 md:mb-10 text-white font-headline">
              <span className="text-xs md:text-sm text-white/40 line-through font-bold">Was $247.00</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl md:text-2xl font-bold">$</span>
                <span className="text-5xl md:text-7xl font-black text-secondary tracking-tighter">7</span>
                <span className="text-lg md:text-xl text-white/60 font-bold">.00</span>
              </div>
            </div>

            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-12 flex-1">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-md font-bold text-white">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-secondary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button asChild className="rounded-full h-16 md:py-8 bg-secondary hover:bg-secondary/90 text-white font-black text-lg md:text-2xl shadow-2xl shadow-secondary/40 transition-all active:scale-95">
              <Link href="https://petcareinstitute.gumroad.com/l/dbm" className="flex items-center justify-center gap-2 md:gap-3">
                GET MASTERY <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
