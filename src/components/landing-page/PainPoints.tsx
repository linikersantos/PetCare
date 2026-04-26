import { Megaphone, Home, UserX, AlertCircle } from 'lucide-react';

const BENEFITS = [
  {
    icon: Megaphone,
    title: "Clear Communication",
    description: "Learn to read the signals before your dog even starts barking or lunging."
  },
  {
    icon: Home,
    title: "Peace at Home",
    description: "Eliminate furniture destruction and the anxiety when you leave the house."
  },
  {
    icon: UserX,
    title: "Stress-Free Walks",
    description: "Enjoy peaceful walks without being pulled or feeling embarrassed in public."
  },
  {
    icon: AlertCircle,
    title: "Applied Science",
    description: "Method based on behavioral biology, strictly without physical punishment."
  }
];

export function PainPoints() {
  return (
    <section id="benefits" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl text-primary font-black font-headline">Why is this Protocol different?</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Forget conventional training. We focus on the root of the problem: energetic communication and micro-signals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-muted shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 leading-tight font-headline">{item.title}</h3>
              <p className="text-muted-foreground text-md leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
