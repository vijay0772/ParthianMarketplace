import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { 
  Search, 
  Filter, 
  ShoppingCart,
  Star,
  Grid3x3,
  List,
  SlidersHorizontal
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

export function Marketplace() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const products = [
    {
      id: 1,
      name: "Lithium Ion Battery 12V 100Ah",
      seller: "PowerMax Batteries",
      price: "$89.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 145,
      sold: 500,
      category: "Lithium Ion",
      inStock: true,
      image: "🔋"
    },
    {
      id: 2,
      name: "Car Battery 60Ah Heavy Duty",
      seller: "AutoPower Supply",
      price: "$145.00",
      rating: 4.6,
      reviews: 98,
      sold: 320,
      category: "Automotive",
      inStock: true,
      image: "🔋"
    },
    {
      id: 3,
      name: "Solar Battery 200Ah Deep Cycle",
      seller: "SolarEnergy Pro",
      price: "$399.99",
      rating: 4.9,
      reviews: 76,
      sold: 150,
      category: "Solar",
      inStock: true,
      image: "🔋"
    },
    {
      id: 4,
      name: "Rechargeable AAA Pack (12)",
      seller: "PowerMax Batteries",
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.7,
      reviews: 234,
      sold: 1200,
      category: "Rechargeable",
      inStock: true,
      image: "🔋"
    },
    {
      id: 5,
      name: "Marine Battery 120Ah",
      seller: "Marine Power Co",
      price: "$189.99",
      rating: 4.5,
      reviews: 45,
      sold: 89,
      category: "Marine",
      inStock: true,
      image: "🔋"
    },
    {
      id: 6,
      name: "UPS Battery 12V 7Ah",
      seller: "TechBattery Hub",
      price: "$32.99",
      rating: 4.4,
      reviews: 167,
      sold: 450,
      category: "UPS",
      inStock: false,
      image: "🔋"
    },
    {
      id: 7,
      name: "Industrial Battery 48V 200Ah",
      seller: "IndustrialPower",
      price: "$899.99",
      rating: 4.9,
      reviews: 32,
      sold: 56,
      category: "Industrial",
      inStock: true,
      image: "🔋"
    },
    {
      id: 8,
      name: "Alkaline AA Battery Pack (24)",
      seller: "BatteryWorld",
      price: "$18.99",
      rating: 4.3,
      reviews: 189,
      sold: 890,
      category: "Alkaline",
      inStock: true,
      image: "🔋"
    }
  ];

  const categories = [
    "All Categories",
    "Lithium Ion",
    "Automotive",
    "Solar",
    "Marine",
    "UPS",
    "Rechargeable",
    "Alkaline",
    "Industrial"
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Battery Marketplace
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Discover quality batteries from verified sellers worldwide
          </p>
          
          {/* Search Bar */}
          <div className="flex gap-3 max-w-3xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for batteries..." 
                className="pl-12 h-12 bg-background"
              />
            </div>
            <Button className="h-12 bg-primary hover:bg-primary/90 px-8">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <Card className="lg:col-span-1 p-6 border-border/40 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                Clear All
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="rounded border-border/40 text-primary focus:ring-primary"
                      defaultChecked={index === 0}
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6 pb-6 border-b border-border/40">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input placeholder="Min" type="number" className="text-sm" />
                  <Input placeholder="Max" type="number" className="text-sm" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Apply
                </Button>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-6 pb-6 border-b border-border/40">
              <h3 className="font-medium mb-3">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="rounded border-border/40 text-primary focus:ring-primary"
                    />
                    <div className="flex items-center gap-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-medium mb-3">Availability</h3>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="rounded border-border/40 text-primary focus:ring-primary"
                  defaultChecked
                />
                <span className="text-sm group-hover:text-primary transition-colors">
                  In Stock Only
                </span>
              </label>
            </div>
          </Card>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">1-8</span> of <span className="font-semibold text-foreground">142</span> products
              </p>
              
              <div className="flex items-center gap-3">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-1 border border-border/40 rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 w-8 p-0 ${viewMode === "grid" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 w-8 p-0 ${viewMode === "list" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className={`overflow-hidden border-border/40 hover:border-primary/40 transition-all hover:shadow-lg ${viewMode === "list" ? "flex" : ""}`}>
                    {/* Product Image */}
                    <div className={`bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center ${viewMode === "grid" ? "aspect-square" : "w-48 h-48"} text-6xl relative`}>
                      {product.image}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      {product.originalPrice && (
                        <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                          Sale
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.seller}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                        <span className="text-sm text-muted-foreground">
                          • {product.sold} sold
                        </span>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Badge variant="secondary" className="mt-2 bg-muted text-muted-foreground">
                            {product.category}
                          </Badge>
                        </div>

                        {product.inStock && (
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90"
                            onClick={(e) => {
                              e.preventDefault();
                              // Add to cart logic
                            }}
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">4</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
