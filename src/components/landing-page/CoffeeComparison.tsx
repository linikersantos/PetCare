import { Coffee, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CoffeeComparison() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-xl border-4 border-accent/20 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/10 flex items-center justify-center">
              <Coffee className="w-16 h-16 md:w-24 md:h-24 text-accent" />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold py-2 px-3 rounded-full rotate-12">
              ONLY $7
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-headline text-primary font-black">The Choice is Yours.</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For less than the price of a single Starbucks coffee ($7), you can finally get the keys to your dog&apos;s mind. One choice is gone in 20 minutes—the other provides a lifetime of peace and understanding.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto px-8 py-6 text-lg font-bold">
              <Link href="https://petcareinstitute.gumroad.com/l/dbm">
                Unlock the Mind of Your Dog <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
