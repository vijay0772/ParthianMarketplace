import { UserPlus, Upload, LineChart, ShoppingCart, Search, CreditCard } from "lucide-react";

export function HowItWorks() {
  const sellerSteps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Sign up and set up your seller profile with business details"
    },
    {
      icon: Upload,
      title: "Upload Products",
      description: "Add battery listings with detailed specs, images, and pricing"
    },
    {
      icon: LineChart,
      title: "Track & Manage",
      description: "Monitor sales, inventory, and customer interactions in real-time"
    }
  ];

  const buyerSteps = [
    {
      icon: Search,
      title: "Browse Batteries",
      description: "Explore a wide range of batteries from verified sellers"
    },
    {
      icon: ShoppingCart,
      title: "Add to Cart",
      description: "Select products and add them to your shopping cart"
    },
    {
      icon: CreditCard,
      title: "Secure Purchase",
      description: "Complete your order with secure payment and fast delivery"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Parthian Marketplace Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're selling or buying batteries, our platform makes it easy and efficient
          </p>
        </div>

        {/* For Sellers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-primary">For Sellers</span> - Start Selling in 3 Easy Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sellerSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < sellerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/60 to-primary/20"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Buyers */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-primary">For Buyers</span> - Shop with Confidence
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {buyerSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < buyerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/60 to-primary/20"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
