import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/image-placeholders';

export function Header() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'main-logo');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-muted transition-all duration-300">
      <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-all hover:scale-105">
          <Image 
            src={logoImage?.imageUrl || "https://i.imgur.com/JSioAxk.png"} 
            alt="Pet Care Institute Logo" 
            width={280} 
            height={70} 
            className="h-12 md:h-24 w-auto object-contain"
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-primary">
          <Link href="#method" className="hover:text-secondary transition-all hover:-translate-y-1">The Method</Link>
          <Link href="#benefits" className="hover:text-secondary transition-all hover:-translate-y-1">Benefits</Link>
          <Link href="#faq" className="hover:text-secondary transition-all hover:-translate-y-1">FAQ</Link>
        </nav>

        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-5 md:px-8 h-10 md:h-12 shadow-md hover:shadow-secondary/20 text-sm md:text-base">
          <Link href="#pricing">Get Access</Link>
        </Button>
      </div>
    </header>
  );
}
