import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItemCard from '@/components/food/CartItemCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Cart = () => {
  const { state, clearCart } = useCart();
  const { items, total } = state;

  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const serviceFee = items.length > 0 ? 1.49 : 0;
  const grandTotal = total + deliveryFee + serviceFee;

  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      description: 'Your order is being prepared and will be delivered soon.',
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <main className="container-main py-16">
        <div className="max-w-md mx-auto text-center animate-fade-in">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet. 
            Browse our delicious menu and find something you love!
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-primary shadow-button">
              Browse Menu
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container-main py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Cart</h1>
            <p className="text-sm text-muted-foreground">{items.length} item{items.length > 1 ? 's' : ''}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            clearCart();
            toast.info('Cart cleared');
          }}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24 animate-fade-in">
            <h2 className="text-lg font-bold text-foreground mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="text-foreground font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service Fee</span>
                <span className="text-foreground font-medium">${serviceFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-foreground font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="input-search flex-1"
                />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              size="lg"
              className="w-full bg-gradient-primary shadow-button"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
