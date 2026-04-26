import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/image-placeholders';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dog');

  return (
    <section className="pt-32 pb-16 md:pt-56 md:pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider animate-pulse">
              Silent Language Protocol
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary leading-tight font-black font-headline">
              Stop speaking "Human" to those who speak <span className="text-secondary">Energy.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Master your dog's micro-signals and resolve behavioral issues in 30 days or less, without yelling or treats.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                "Understand every ear movement",
                "Eliminate separation anxiety",
                "Control excessive barking in 48h",
                "Scientific force-free method"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-bold group justify-center lg:justify-start">
                  <CheckCircle2 className="text-secondary w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg md:text-xl h-16 md:h-20 px-8 md:px-12 rounded-full shadow-2xl shadow-secondary/30 font-black w-full sm:w-auto transform hover:rotate-1 active:scale-95 transition-all">
                <Link href="#pricing">
                  START NOW — ONLY $7
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center lg:text-left font-medium">
                *One-time payment. Immediate lifetime access.
              </p>
            </div>
          </div>
          
          {/* Hero Image Container */}
          <div className="flex-1 relative group w-full order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-sm md:max-w-lg mx-auto rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-muted/10 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={heroImage?.imageUrl || 'https://i.imgur.com/YaIbBO1.png'}
                alt={heroImage?.description || "Confused white dog"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                data-ai-hint="confused dog"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
