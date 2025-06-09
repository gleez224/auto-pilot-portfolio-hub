
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Filter, Bot } from 'lucide-react';

const AIAgents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const agents = [
    {
      name: 'CustomerCare AI',
      category: 'Customer Service',
      description: 'Advanced chatbot for customer support with natural language processing',
      status: 'Live',
      price: '$299/month'
    },
    {
      name: 'InvoiceBot Pro',
      category: 'Finance',
      description: 'Automated invoice processing and data extraction system',
      status: 'Live',
      price: '$199/month'
    },
    {
      name: 'InventoryMaster',
      category: 'Operations',
      description: 'Smart inventory management with predictive restocking',
      status: 'Demo',
      price: '$399/month'
    },
    {
      name: 'DataAnalyzer AI',
      category: 'Analytics',
      description: 'Automated data analysis and reporting generation',
      status: 'Live',
      price: '$249/month'
    },
    {
      name: 'EmailAutomate',
      category: 'Marketing',
      description: 'Intelligent email campaign management and optimization',
      status: 'Live',
      price: '$149/month'
    },
    {
      name: 'RecruitBot',
      category: 'HR',
      description: 'AI-powered candidate screening and interview scheduling',
      status: 'Demo',
      price: '$179/month'
    }
  ];

  const categories = ['All', 'Customer Service', 'Finance', 'Operations', 'Analytics', 'Marketing', 'HR'];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI Agent Library
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of specialized AI agents ready to transform your business
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    agent.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {agent.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {agent.name}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-3">
                  {agent.category}
                </p>
                
                <p className="text-muted-foreground mb-4">
                  {agent.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    {agent.price}
                  </span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    {agent.status === 'Live' ? 'Deploy' : 'Try Demo'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No agents found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAgents;
