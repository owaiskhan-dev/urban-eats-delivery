import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-12 md:py-20 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Free delivery on first order
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Delicious food,
              <br />
              <span className="text-gradient">delivered fast</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Order your favorite meals from the best local restaurants and get them delivered to your doorstep in minutes.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-search pl-12"
                />
              </div>
              <Button type="submit" size="lg" className="bg-gradient-primary shadow-button hover:opacity-90">
                <Search className="w-5 h-5 mr-2" />
                Find Food
              </Button>
            </form>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <span className="text-3xl font-bold text-foreground">2500+</span>
                <p className="text-sm text-muted-foreground">Restaurants</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">15K+</span>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-foreground">30 min</span>
                <p className="text-sm text-muted-foreground">Avg. Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
                alt="Delicious Pizza"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card p-3 rounded-xl shadow-card-hover animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍕</span>
                  <div>
                    <p className="text-sm font-semibold">Pizza</p>
                    <p className="text-xs text-muted-foreground">$12.99</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-xl shadow-card-hover animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍔</span>
                  <div>
                    <p className="text-sm font-semibold">Burger</p>
                    <p className="text-xs text-muted-foreground">$9.99</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-primary text-primary-foreground p-3 rounded-xl shadow-button animate-bounce-soft" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-sm font-semibold">4.9 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
