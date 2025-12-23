import { useState, useMemo } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import RestaurantCard from '@/components/food/RestaurantCard';
import CategoryFilter from '@/components/food/CategoryFilter';
import { restaurants, categories } from '@/data/foodData';
import { Button } from '@/components/ui/button';

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });

    // Sort
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'delivery') {
      filtered.sort((a, b) => parseFloat(a.deliveryTime) - parseFloat(b.deliveryTime));
    } else if (sortBy === 'fee') {
      filtered.sort((a, b) => a.deliveryFee - b.deliveryFee);
    }

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-12">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All Restaurants
          </h1>
          <p className="text-muted-foreground mb-6">
            Discover the best restaurants and cuisines in your area
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search pl-12"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-search w-auto"
              >
                <option value="rating">Top Rated</option>
                <option value="delivery">Fastest Delivery</option>
                <option value="fee">Lowest Fee</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="container-main py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">{filteredRestaurants.length}</span> restaurants found
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No restaurants found</p>
            <Button onClick={() => setSearchQuery('')} variant="outline">
              Clear Search
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Restaurants;
