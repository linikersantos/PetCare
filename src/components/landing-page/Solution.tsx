import { Info, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export function Solution() {
  return (
    <section id="method" className="py-16 md:py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left">
            <span className="text-secondary font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm bg-white/5 px-4 py-1 rounded-full">
              The Scientific Method
            </span>
            <h1 className="text-3xl md:text-6xl font-black leading-tight italic font-headline">
              The Silent Language Dictionary™
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dogs don't use words. They use muscle tension, pupil dilation, and micro-movements. Our protocol teaches you to be the official interpreter for your best friend.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {[
                { icon: Info, t: "Decoding", d: "Interpret every signal in seconds." },
                { icon: ShieldCheck, t: "Friendly Leadership", d: "No force, just calm authority." },
                { icon: HeartPulse, t: "Strong Bond", d: "Deep and real emotional connection." },
                { icon: Sparkles, t: "Results in 48h", d: "Visible changes in the short term." }
              ].map((item, i) => (
                <div key={i} className="flex items-center lg:items-start gap-5 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary shrink-0" />
                  <div className="text-left">
                    <h4 className="font-black text-lg md:text-xl mb-1 md:mb-2 font-headline">{item.t}</h4>
                    <p className="text-xs md:text-sm text-white/50 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-secondary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 relative shadow-[0_32px_64px_-16px_rgba(0,168,232,0.4)]">
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white/10 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 backdrop-blur-sm">
                  <p className="font-bold text-lg md:text-2xl italic leading-tight text-white">
                    "Petlove recommended the Institute to me, and today my dog is completely different. He understands me just by my look."
                  </p>
                  <p className="mt-4 md:mt-6 text-[10px] md:text-sm opacity-80 font-bold uppercase tracking-widest">
                    — Dr. Richard Nunes, Veterinarian
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl md:text-4xl shadow-inner">🐶</div>
                  <div>
                    <p className="font-black text-3xl md:text-4xl text-white font-headline">+15,000</p>
                    <p className="text-[10px] md:text-sm opacity-80 uppercase font-bold tracking-[0.2em]">Happy Dogs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
