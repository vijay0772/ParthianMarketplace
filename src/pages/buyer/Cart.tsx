import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  Trash2, 
  Plus, 
  Minus,
  ShoppingBag,
  ArrowRight,
  Tag
} from "lucide-react";
import { Input } from "../../components/ui/input";

export function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Lithium Ion Battery 12V 100Ah",
      seller: "PowerMax Batteries",
      price: 89.99,
      quantity: 2,
      image: "🔋",
      inStock: true
    },
    {
      id: 2,
      name: "Solar Battery 200Ah Deep Cycle",
      seller: "SolarEnergy Pro",
      price: 399.99,
      quantity: 1,
      image: "🔋",
      inStock: true
    },
    {
      id: 3,
      name: "Rechargeable AAA Battery Pack (12)",
      seller: "PowerMax Batteries",
      price: 24.99,
      quantity: 3,
      image: "🔋",
      inStock: true
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6 border-border/40">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {item.image}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-semibold text-foreground hover:text-primary transition-colors mb-1">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-2">Sold by {item.seller}</p>
                        {item.inStock ? (
                          <Badge className="bg-primary/10 text-primary">In Stock</Badge>
                        ) : (
                          <Badge variant="destructive">Out of Stock</Badge>
                        )}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 border border-border/40 rounded-lg">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">
                          ${item.price.toFixed(2)} each
                        </p>
                        <p className="text-xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Continue Shopping */}
            <Link to="/marketplace">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-border/40 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6 pb-6 border-b border-border/40">
                <Label className="text-sm font-medium mb-2 block">Promo Code</Label>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" />
                  <Button variant="outline" className="border-primary/30">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-primary">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                {shipping === 0 && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-start gap-2">
                    <Tag className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-primary">
                      You're getting free shipping on this order!
                    </p>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-border/40 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Including ${tax.toFixed(2)} in taxes
                </p>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-3" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>

              <p className="text-xs text-center text-muted-foreground">
                Secure checkout powered by Parthian Marketplace
              </p>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-border/40 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Secure payment processing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">30-day return policy</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Buyer protection guaranteed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Empty Cart State (commented out - would show when cart is empty) */}
        {/* 
        <div className="text-center py-16">
          <div className="inline-flex h-20 w-20 rounded-full bg-primary/10 items-center justify-center mb-6">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some batteries to get started!</p>
          <Link to="/marketplace">
            <Button className="bg-primary hover:bg-primary/90">
              Browse Marketplace
            </Button>
          </Link>
        </div>
        */}
      </div>
    </div>
  );
}

function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={className} {...props} />;
}
