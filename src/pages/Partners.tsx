import { Store, TrendingUp, Users, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { partnerBrands, restaurants } from '@/data/foodData';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Reach thousands of new customers and increase your revenue significantly.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 partner support team to help you succeed on our platform.',
    },
    {
      icon: Store,
      title: 'Easy Management',
      description: 'Simple dashboard to manage orders, menu, and track performance.',
    },
    {
      icon: Headphones,
      title: 'Marketing Support',
      description: 'Featured placement and promotional opportunities to boost visibility.',
    },
  ];

  const steps = [
    { step: 1, title: 'Apply Online', description: 'Fill out our simple partnership application form.' },
    { step: 2, title: 'Get Verified', description: 'Our team reviews your application within 48 hours.' },
    { step: 3, title: 'Setup Menu', description: 'Upload your menu and set your delivery zones.' },
    { step: 4, title: 'Start Earning', description: 'Go live and start receiving orders immediately.' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Partner with <span className="text-gradient">UrbanEats</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of successful restaurants and grow your business with 
                the fastest-growing food delivery platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary shadow-button">
                  Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600"
                alt="Restaurant partner"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card-hover">
                <div className="text-2xl font-bold text-primary">+40%</div>
                <p className="text-sm text-muted-foreground">Avg. Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="container-main py-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Partner With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in food delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Partners */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Trusted by Top Brands</h2>
            <p className="text-muted-foreground">Join these successful partners on UrbanEats</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {partnerBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="bg-card p-4 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-3xl block mb-2">{brand.logo}</span>
                <p className="text-sm font-medium text-foreground">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container-main py-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">How to Get Started</h2>
          <p className="text-muted-foreground">Simple steps to join our platform</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Restaurant Partners Grid */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Restaurant Partners</h2>
            <p className="text-muted-foreground">Diverse selection of quality restaurants</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="food-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-xs text-muted-foreground">Verified Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join UrbanEats today and start reaching thousands of hungry customers.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Apply Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Partners;
