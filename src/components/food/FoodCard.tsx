import { Plus, Star, Clock } from 'lucide-react';
import { FoodItem } from '@/data/foodData';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)}`,
    });
  };

  return (
    <div className="food-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.isPopular && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-md">
            Popular
          </span>
        )}
        <Button
          onClick={handleAddToCart}
          size="icon"
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-button opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
          <span className="flex items-center gap-1 text-sm font-medium text-accent">
            <Star className="w-4 h-4 fill-accent" />
            {item.rating}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {item.deliveryTime}
          </span>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          {item.restaurant}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
