import { Megaphone, Target, BarChart3, Zap, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdsSolutions = () => {
  const solutions = [
    {
      icon: Megaphone,
      title: 'Sponsored Listings',
      description: 'Feature your restaurant at the top of search results and category pages.',
      features: ['Top placement in search', 'Category page visibility', 'Homepage carousel spots', 'Branded badges'],
      price: 'Starting at $99/month',
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach specific customer segments with personalized advertising.',
      features: ['Location targeting', 'Time-based promotions', 'Customer behavior targeting', 'A/B testing'],
      price: 'Custom pricing',
    },
    {
      icon: Zap,
      title: 'Flash Deals',
      description: 'Create urgency with limited-time offers that drive immediate orders.',
      features: ['Push notifications', 'App banner ads', 'Email promotions', 'Social sharing'],
      price: 'Pay per conversion',
    },
    {
      icon: Globe,
      title: 'Brand Awareness',
      description: 'Build long-term brand recognition across our platform.',
      features: ['Display advertising', 'Native content', 'Sponsored events', 'Newsletter features'],
      price: 'Starting at $499/month',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advertising Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of advertising products designed to help your business grow.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container-main py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h2>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-lg font-semibold text-primary">{solution.price}</span>
                <Link to="/ads/contact">
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Compare Solutions</h2>
            <p className="text-muted-foreground">Find the right fit for your marketing goals</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">Sponsored</th>
                  <th className="p-4 text-center font-semibold">Targeted</th>
                  <th className="p-4 text-center font-semibold">Flash Deals</th>
                  <th className="p-4 text-center font-semibold">Brand</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Search visibility</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-success">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Push notifications</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Analytics dashboard</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-success">✓</td>
                </tr>
                <tr>
                  <td className="p-4">Dedicated manager</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-success">✓</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-success">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdsSolutions;
