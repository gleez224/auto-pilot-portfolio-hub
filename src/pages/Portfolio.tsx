
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Order Processing',
      client: 'TechCorp Solutions',
      description: 'Automated end-to-end order processing reducing manual work by 95%',
      results: '400% faster processing, 99.9% accuracy',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
      status: 'Live'
    },
    {
      title: 'Customer Support AI',
      client: 'Global Services Inc',
      description: 'AI chatbot handling 80% of customer inquiries automatically',
      results: '60% cost reduction, 24/7 availability',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
      status: 'Live'
    },
    {
      title: 'Invoice Processing System',
      client: 'Finance Pro Ltd',
      description: 'Automated invoice extraction and processing workflow',
      results: '85% time savings, 100% accuracy',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      status: 'Live'
    },
    {
      title: 'Inventory Management',
      client: 'Retail Chain Co',
      description: 'Smart inventory tracking and automatic reordering system',
      results: '30% cost reduction, zero stockouts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      status: 'Demo'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Success Stories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed businesses with our automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
