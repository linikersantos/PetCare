import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl text-primary font-headline font-black uppercase tracking-wider mb-4">Why the Pet Care Institute?</h1>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-accent/20">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary font-headline">Institutional Grade</h4>
            <p className="text-sm text-muted-foreground">Every protocol is vetted by behavioral biology experts and follows the highest scientific standards in force-free training.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-accent/20">
              <ThumbsUp className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary font-headline">30-Day Guarantee</h4>
            <p className="text-sm text-muted-foreground">If you don&apos;t see a transformation in your dog&apos;s behavior within 30 days, we&apos;ll refund every penny. No questions asked.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-accent/20">
              <Award className="award w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary font-headline">Accredited Content</h4>
            <p className="text-sm text-muted-foreground">The Pet Care Institute is recognized for its contribution to modern, non-invasive canine communication methodologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
