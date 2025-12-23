import { partnerBrands } from '@/data/foodData';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdsBrands = () => {
  const featuredBrands = [
    {
      name: 'McDonalds',
      logo: '🍟',
      stats: { orders: '500K+', reach: '2M+', roi: '4.2x' },
      quote: 'UrbanEats Ads helped us reach new customers and significantly increase our delivery orders.',
    },
    {
      name: 'Dominos',
      logo: '🍕',
      stats: { orders: '320K+', reach: '1.5M+', roi: '3.8x' },
      quote: 'The targeting capabilities allowed us to reach the right customers at the right time.',
    },
    {
      name: 'Starbucks',
      logo: '☕',
      stats: { orders: '280K+', reach: '1.2M+', roi: '3.5x' },
      quote: 'Our morning rush orders increased by 40% after launching sponsored listings.',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Brands That Trust Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading food brands are growing their business with UrbanEats Ads.
          </p>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="container-main py-16">
        <div className="space-y-8">
          {featuredBrands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-card p-8 rounded-2xl shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{brand.logo}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{brand.name}</h3>
                    <p className="text-muted-foreground">Premium Partner</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{brand.stats.orders}</div>
                    <p className="text-xs text-muted-foreground">Monthly Orders</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{brand.stats.reach}</div>
                    <p className="text-xs text-muted-foreground">Customer Reach</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{brand.stats.roi}</div>
                    <p className="text-xs text-muted-foreground">ROI</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground italic">"{brand.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Partners */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">All Brand Partners</h2>
            <p className="text-muted-foreground">Join these successful brands on UrbanEats</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {partnerBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="bg-card p-6 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-4xl block mb-2">{brand.logo}</span>
                <p className="text-sm font-medium text-foreground">{brand.name}</p>
                <p className="text-xs text-muted-foreground">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main py-16">
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Join These Successful Brands</h2>
          <p className="text-lg opacity-90 mb-8">
            Start advertising with UrbanEats and grow your business today.
          </p>
          <Link to="/ads/contact">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AdsBrands;
