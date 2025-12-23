import { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/home/HeroSection';
import FoodCard from '@/components/food/FoodCard';
import RestaurantCard from '@/components/food/RestaurantCard';
import CategoryFilter from '@/components/food/CategoryFilter';
import { foodItems, restaurants, categories } from '@/data/foodData';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFoodItems = useMemo(() => {
    return foodItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const popularItems = useMemo(() => {
    return foodItems.filter((item) => item.isPopular);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="container-main py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Explore Categories</h2>
          <Link to="/restaurants" className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-button'
                  : 'bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1'
              }`}
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="container-main py-12 bg-muted/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">🔥 Popular Right Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.slice(0, 4).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* All Food Items Section */}
      <section className="container-main py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="section-title">Order Your Favorites</h2>
          
          {/* Search Bar */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search pl-12"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFoodItems.map((item, index) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <FoodCard item={item} />
            </div>
          ))}
        </div>

        {filteredFoodItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No items found matching your search.</p>
            <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} variant="outline" className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* Top Restaurants Section */}
      <section className="container-main py-12 bg-muted/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Top Restaurants</h2>
          <Link to="/restaurants" className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 6).map((restaurant, index) => (
            <div key={restaurant.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </section>

      {/* Download App CTA */}
      <section className="container-main py-16">
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the UrbanEats App</h2>
          <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">
            Download our app for exclusive deals and faster ordering experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              <span className="mr-2">🍎</span> App Store
            </Button>
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              <span className="mr-2">🤖</span> Google Play
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
