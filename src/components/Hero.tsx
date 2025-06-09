
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Automate Your Business
            <span className="block text-primary">With AI Precision</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Transform your workflow with cutting-edge automation solutions. Our AI agents work 24/7 
            to streamline your processes, reduce costs, and boost productivity by up to 400%.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 hover:scale-105">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors">
              Watch Demo
            </button>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="bg-card rounded-xl shadow-2xl border border-border p-2">
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80"
                alt="Automation Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
