import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Star, 
  ShoppingCart, 
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  CheckCircle,
  Store,
  MessageCircle
} from "lucide-react";

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Lithium Ion Battery 12V 100Ah",
    seller: "PowerMax Batteries",
    sellerRating: 4.8,
    sellerReviews: 234,
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 145,
    sold: 500,
    category: "Lithium Ion",
    inStock: 45,
    images: ["🔋", "🔋", "🔋", "🔋"],
    description: "High-quality lithium-ion battery with 12V output and 100Ah capacity. Perfect for solar systems, RVs, marine applications, and backup power solutions. Features advanced BMS protection and long cycle life of 2000+ cycles.",
    specifications: {
      "Voltage": "12V",
      "Capacity": "100Ah",
      "Chemistry": "Lithium Iron Phosphate (LiFePO4)",
      "Cycle Life": "2000+ cycles",
      "Weight": "12.5 kg",
      "Dimensions": "32cm x 17cm x 21cm",
      "Warranty": "5 years",
      "Operating Temperature": "-20°C to 60°C"
    },
    features: [
      "Built-in Battery Management System (BMS)",
      "Overcharge and over-discharge protection",
      "Short circuit and temperature protection",
      "Maintenance-free operation",
      "Low self-discharge rate",
      "Can be connected in series or parallel"
    ]
  };

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      date: "2026-01-10",
      comment: "Excellent battery! Works perfectly for my solar setup. Fast shipping and great customer service.",
      verified: true
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2026-01-08",
      comment: "Very reliable and long-lasting. Worth every penny. Highly recommend PowerMax!",
      verified: true
    },
    {
      name: "Mike Davis",
      rating: 4,
      date: "2026-01-05",
      comment: "Good quality battery. Slightly heavier than expected but performance is great.",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/marketplace" className="hover:text-primary">Marketplace</Link>
          <span>/</span>
          <Link to="/marketplace" className="hover:text-primary">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <Card className="mb-4 border-border/40 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-8xl">
                {product.images[selectedImage]}
              </div>
            </Card>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center text-3xl border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border/40 hover:border-primary/50"
                  }`}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge className="bg-primary/10 text-primary mb-3">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-3">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <span className="text-muted-foreground">• {product.sold} sold</span>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through mb-1">${product.originalPrice}</span>
                <Badge variant="destructive" className="mb-1">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>

              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity and Actions */}
              <Card className="p-6 border-border/40 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center gap-3 border border-border/40 rounded-lg">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="font-medium w-12 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.inStock} available
                  </span>
                </div>

                <div className="flex gap-3 mb-4">
                  <Link to="/cart" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <Link to="/checkout">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg">
                    Buy Now
                  </Button>
                </Link>
              </Card>

              {/* Features */}
              <Card className="p-6 border-border/40 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Free Shipping</p>
                      <p className="text-xs text-muted-foreground">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <RotateCcw className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">30-Day Returns</p>
                      <p className="text-xs text-muted-foreground">Easy returns</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">100% protected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Quality Guarantee</p>
                      <p className="text-xs text-muted-foreground">Verified product</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Seller Info */}
              <Card className="p-6 border-border/40">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">PM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.seller}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm">{product.sellerRating}</span>
                      <span className="text-sm text-muted-foreground">({product.sellerReviews} reviews)</span>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Store className="h-4 w-4 mr-2" />
                    Visit Store
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="p-6 border-border/40">
          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="pb-6 border-b border-border/40 last:border-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
