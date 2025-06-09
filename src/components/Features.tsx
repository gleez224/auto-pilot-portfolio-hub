
import { Bot, Zap, Shield, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Advanced AI agents that learn and adapt to your business processes for maximum efficiency.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy automation solutions in minutes, not months. See immediate results.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 400% productivity increase and 60% cost reduction for our clients.',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose AutomateFlow?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The most advanced automation platform trusted by industry leaders
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
