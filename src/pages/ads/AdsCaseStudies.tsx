import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdsCaseStudies = () => {
  const caseStudies = [
    {
      id: '1',
      brand: 'Pizza Palace',
      logo: '🍕',
      title: 'How Pizza Palace Increased Orders by 150%',
      summary: 'Using sponsored listings and targeted campaigns, Pizza Palace saw a dramatic increase in delivery orders within the first month.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
      results: [
        { metric: '+150%', label: 'Order Increase' },
        { metric: '3.8x', label: 'ROI' },
        { metric: '45K', label: 'New Customers' },
      ],
      challenge: 'Pizza Palace wanted to expand their delivery reach beyond their immediate neighborhood.',
      solution: 'We implemented a combination of sponsored listings and geo-targeted campaigns to reach customers in new areas.',
      outcome: 'Within 3 months, Pizza Palace expanded to 5 new delivery zones and became a top-rated restaurant on the platform.',
    },
    {
      id: '2',
      brand: 'Burger Barn',
      logo: '🍔',
      title: 'Burger Barn: From Local to City-Wide',
      summary: 'A small burger joint used UrbanEats Ads to become one of the most popular burger spots in the city.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
      results: [
        { metric: '+200%', label: 'Revenue Growth' },
        { metric: '4.5x', label: 'ROI' },
        { metric: '60K', label: 'New Customers' },
      ],
      challenge: 'As a small local burger joint, Burger Barn struggled to compete with larger chains.',
      solution: 'Flash deals and premium placement during peak hours helped establish brand recognition.',
      outcome: 'Burger Barn is now a household name, with customers specifically searching for their signature double bacon burger.',
    },
    {
      id: '3',
      brand: 'Sweet Treats',
      logo: '🍰',
      title: "Sweet Treats' Dessert Delivery Success",
      summary: 'A bakery transformed their business model to focus on delivery with impressive results.',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
      results: [
        { metric: '+300%', label: 'Delivery Orders' },
        { metric: '5.2x', label: 'ROI' },
        { metric: '30K', label: 'New Customers' },
      ],
      challenge: 'Sweet Treats was primarily a walk-in bakery looking to expand into delivery.',
      solution: 'Targeted evening campaigns and special occasion promotions drove dessert delivery demand.',
      outcome: 'Delivery now accounts for 60% of Sweet Treats\' revenue, opening up entirely new growth opportunities.',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real success stories from restaurants that transformed their business with UrbanEats Ads.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container-main py-16 space-y-16">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={study.image}
                  alt={study.brand}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{study.logo}</span>
                  <span className="text-lg font-semibold text-foreground">{study.brand}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {study.title}
                </h2>
                <p className="text-muted-foreground mb-6">{study.summary}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="bg-primary/10 p-4 rounded-xl text-center">
                      <div className="text-xl font-bold text-primary">{result.metric}</div>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Challenge: </span>
                    <span className="text-muted-foreground">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Solution: </span>
                    <span className="text-muted-foreground">{study.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Outcome: </span>
                    <span className="text-muted-foreground">{study.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container-main text-center">
          <h2 className="section-title mb-4">Write Your Success Story</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these successful restaurants and start growing your business with UrbanEats Ads.
          </p>
          <Link to="/ads/contact">
            <Button size="lg" className="bg-gradient-primary shadow-button">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AdsCaseStudies;
