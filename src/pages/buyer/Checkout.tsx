import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { 
  CreditCard, 
  Truck,
  ShieldCheck,
  CheckCircle,
  ArrowLeft
} from "lucide-react";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    {
      id: 1,
      name: "Lithium Ion Battery 12V 100Ah",
      price: 89.99,
      quantity: 2,
      image: "🔋"
    },
    {
      id: 2,
      name: "Solar Battery 200Ah Deep Cycle",
      price: 399.99,
      quantity: 1,
      image: "🔋"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card className="p-6 border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h2 className="text-xl font-semibold">Shipping Information</h2>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" className="mt-2" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" className="mt-2" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" className="mt-2" required />
                </div>

                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input id="address" className="mt-2" required />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code *</Label>
                    <Input id="zip" className="mt-2" required />
                  </div>
                </div>
              </div>
            </Card>

            {/* Shipping Method */}
            <Card className="p-6 border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <h2 className="text-xl font-semibold">Shipping Method</h2>
              </div>

              <RadioGroup defaultValue="standard">
                <div className="flex items-center space-x-3 p-4 border border-border/40 rounded-lg mb-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-muted-foreground">5-7 business days</p>
                      </div>
                      <p className="font-semibold text-primary">Free</p>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border/40 rounded-lg mb-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value="express" id="express" />
                  <label htmlFor="express" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-muted-foreground">2-3 business days</p>
                      </div>
                      <p className="font-semibold">$19.99</p>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border/40 rounded-lg hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value="overnight" id="overnight" />
                  <label htmlFor="overnight" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Overnight Shipping</p>
                        <p className="text-sm text-muted-foreground">Next business day</p>
                      </div>
                      <p className="font-semibold">$39.99</p>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </Card>

            {/* Payment Method */}
            <Card className="p-6 border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-4 border border-border/40 rounded-lg mb-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <label htmlFor="card" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border/40 rounded-lg mb-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <label htmlFor="paypal" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 text-primary">💳</div>
                      <span className="font-medium">PayPal</span>
                    </div>
                  </label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="cardName">Cardholder Name *</Label>
                    <Input id="cardName" className="mt-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" placeholder="123" className="mt-2" />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-border/40 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border/40">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-2 mb-1">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border/40">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-primary">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>

              {/* Place Order Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 mb-4" size="lg">
                <ShieldCheck className="h-5 w-5 mr-2" />
                Place Order
              </Button>

              <p className="text-xs text-center text-muted-foreground mb-4">
                By placing your order, you agree to our Terms & Conditions
              </p>

              {/* Security Features */}
              <div className="space-y-3 pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Secure SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Buyer protection included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">30-day return guarantee</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
