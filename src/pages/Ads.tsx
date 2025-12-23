import { Link, Outlet, useLocation } from 'react-router-dom';
import { BarChart3, Target, Megaphone, FileText, Mail, ArrowRight, TrendingUp, Users, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdsHome = () => {
  const stats = [
    { icon: Users, value: '15M+', label: 'Monthly Users' },
    { icon: Eye, value: '50M+', label: 'Ad Impressions' },
    { icon: TrendingUp, value: '3.5x', label: 'Avg. ROI' },
  ];

  const solutions = [
    {
      icon: Megaphone,
      title: 'Sponsored Listings',
      description: 'Get your restaurant featured at the top of search results.',
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach the right customers with precision targeting.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your campaign performance in real-time.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Panda Ads
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Grow Your Brand with <span className="text-gradient">UrbanEats Ads</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reach millions of hungry customers actively looking for food. 
                Our advertising platform helps restaurants and brands connect with their ideal audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/ads/contact">
                  <Button size="lg" className="bg-gradient-primary shadow-button">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/ads/solutions">
                  <Button size="lg" variant="outline">
                    View Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                alt="Marketing analytics"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-main py-12">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card p-6 rounded-xl shadow-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Solutions */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Advertising Solutions</h2>
            <p className="text-muted-foreground">Choose the right solution for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                to="/ads/solutions"
                key={solution.title}
                className="food-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <solution.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main py-16">
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Sales?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Start advertising on UrbanEats and reach your target audience today.
          </p>
          <Link to="/ads/contact">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

const Ads = () => {
  const location = useLocation();
  const isMainAdsPage = location.pathname === '/ads';

  const subLinks = [
    { name: 'Overview', path: '/ads' },
    { name: 'Solutions', path: '/ads/solutions' },
    { name: 'Brands', path: '/ads/brands' },
    { name: 'Case Studies', path: '/ads/case-studies' },
    { name: 'Contact', path: '/ads/contact' },
  ];

  return (
    <>
      {/* Sub Navigation */}
      <div className="bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-main">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {subLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isMainAdsPage ? <AdsHome /> : <Outlet />}
    </>
  );
};

export default Ads;
