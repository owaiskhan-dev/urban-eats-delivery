import { Link } from 'react-router-dom';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '@/data/foodData';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className="food-card group block">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {restaurant.isPromoted && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-md">
            Promoted
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
          <h3 className="font-bold text-background text-lg">{restaurant.name}</h3>
          <p className="text-sm text-background/80">{restaurant.cuisine}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm font-medium">
              <Star className="w-4 h-4 fill-accent text-accent" />
              {restaurant.rating}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {restaurant.deliveryTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <DollarSign className="w-4 h-4" />
            {restaurant.deliveryFee.toFixed(2)} delivery
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Min. order ${restaurant.minOrder}
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
