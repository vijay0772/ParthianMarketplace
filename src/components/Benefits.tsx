import { Button } from "./ui/button";
import { Check, ArrowRight, TrendingUp, Globe, Headphones } from "lucide-react";

export function Benefits() {
  const sellerBenefits = [
    "Reach thousands of potential buyers",
    "Easy product listing with image uploads",
    "Real-time sales tracking and analytics",
    "Secure payment processing",
    "Low commission rates",
    "Marketing and promotional tools"
  ];

  const buyerBenefits = [
    "Access to wide variety of batteries",
    "Compare prices from multiple sellers",
    "Verified seller ratings and reviews",
    "Secure checkout and payment",
    "Order tracking and support",
    "Best deals and special offers"
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of sellers and buyers who trust Parthian Marketplace
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Seller Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">For Sellers</h3>
            </div>
            <div className="space-y-4 mb-8">
              {sellerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Start Selling Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Buyer Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">For Buyers</h3>
            </div>
            <div className="space-y-4 mb-8">
              {buyerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Browse Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Growing Community</h4>
            <p className="text-sm text-muted-foreground">
              Join a thriving marketplace with active sellers and buyers
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Global Reach</h4>
            <p className="text-sm text-muted-foreground">
              Connect with buyers and sellers from around the world
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Dedicated Support</h4>
            <p className="text-sm text-muted-foreground">
              Expert assistance whenever you need help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
