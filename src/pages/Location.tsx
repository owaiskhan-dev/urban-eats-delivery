import { useState } from 'react';
import { MapPin, Search, Check } from 'lucide-react';
import { cities } from '@/data/foodData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Location = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCity = (cityName: string) => {
    setSelectedCity(cityName);
    toast.success(`Location set to ${cityName}!`, {
      description: 'You can now browse restaurants in this area.',
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Location
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Select your city to discover restaurants and food options available in your area.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for your city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search pl-12 text-center"
            />
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="container-main py-16">
        <h2 className="section-title mb-8 text-center">Popular Cities</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCities.map((city, index) => (
            <button
              key={city.id}
              onClick={() => handleSelectCity(city.name)}
              className={`relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-in ${
                selectedCity === city.name ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-background">{city.name}</h3>
                    <p className="text-sm text-background/80">{city.restaurants}+ restaurants</p>
                  </div>
                  {selectedCity === city.name && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No cities found matching "{searchQuery}"</p>
            <Button onClick={() => setSearchQuery('')} variant="outline">
              Clear Search
            </Button>
          </div>
        )}
      </section>

      {/* Coming Soon */}
      <section className="bg-muted/30 py-16">
        <div className="container-main text-center">
          <h2 className="section-title mb-4">More Cities Coming Soon</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're expanding rapidly! If your city isn't listed, let us know and we'll 
            prioritize bringing UrbanEats to your area.
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary shadow-button"
            onClick={() => toast.info('Request submitted!', { description: "We'll notify you when we launch in your city." })}
          >
            Request Your City
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Location;
