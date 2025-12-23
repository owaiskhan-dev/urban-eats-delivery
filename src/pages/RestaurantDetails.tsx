import { useParams } from 'react-router-dom';
import { Star, Clock, DollarSign, MapPin, Phone } from 'lucide-react';
import { restaurants, foodItems } from '@/data/foodData';
import FoodCard from '@/components/food/FoodCard';
import { Button } from '@/components/ui/button';

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const restaurantItems = foodItems.filter((item) => 
    item.restaurant === restaurant?.name
  );

  if (!restaurant) {
    return (
      <main className="container-main py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Restaurant not found</h1>
        <p className="text-muted-foreground">The restaurant you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-main pb-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-background mb-2">
                {restaurant.name}
              </h1>
              <p className="text-background/80 text-lg">{restaurant.cuisine}</p>
            </div>
            {restaurant.isPromoted && (
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                Promoted
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-main py-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-accent text-accent" />
              <span className="font-semibold">{restaurant.rating}</span>
              <span className="text-muted-foreground">(500+ ratings)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-5 h-5" />
              <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>2.5 km away</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="container-main py-12">
        <h2 className="section-title mb-8">Menu</h2>
        
        {restaurantItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurantItems.map((item, index) => (
              <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground mb-4">No menu items available</p>
            <p className="text-sm text-muted-foreground">Check back later for updates!</p>
          </div>
        )}
      </section>

      {/* Restaurant Info */}
      <section className="bg-muted/30 py-12">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">About {restaurant.name}</h3>
              <p className="text-muted-foreground">
                {restaurant.name} is a popular restaurant known for its delicious {restaurant.cuisine} cuisine. 
                With a rating of {restaurant.rating} stars and fast delivery times, it's a favorite among local food lovers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact & Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </p>
                <p>Open: 10:00 AM - 10:00 PM</p>
                <p>Minimum order: ${restaurant.minOrder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantDetails;
