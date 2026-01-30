import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";

export function AddProduct() {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);

  const handleAddImage = () => {
    // Mock image addition
    setImages([...images, "🔋"]);
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/seller/products");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/seller/products">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Add New Product</h1>
          <p className="text-muted-foreground">Create a new battery listing for your store</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <Card className="p-6 border-border/40 mb-6">
            <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input 
                  id="name" 
                  placeholder="e.g., Lithium Ion Battery 12V 100Ah" 
                  className="mt-2"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lithium-ion">Lithium Ion</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="solar">Solar</SelectItem>
                      <SelectItem value="marine">Marine</SelectItem>
                      <SelectItem value="ups">UPS</SelectItem>
                      <SelectItem value="rechargeable">Rechargeable</SelectItem>
                      <SelectItem value="alkaline">Alkaline</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input 
                    id="brand" 
                    placeholder="e.g., PowerMax" 
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Detailed product description including features, specifications, and use cases..."
                  className="mt-2 min-h-32"
                  required
                />
              </div>
            </div>
          </Card>

          {/* Specifications */}
          <Card className="p-6 border-border/40 mb-6">
            <h2 className="text-xl font-semibold mb-6">Specifications</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="voltage">Voltage (V) *</Label>
                  <Input 
                    id="voltage" 
                    type="number" 
                    placeholder="e.g., 12" 
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="capacity">Capacity (Ah) *</Label>
                  <Input 
                    id="capacity" 
                    type="number" 
                    placeholder="e.g., 100" 
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    step="0.1"
                    placeholder="e.g., 2.5" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="warranty">Warranty Period</Label>
                  <Input 
                    id="warranty" 
                    placeholder="e.g., 2 years" 
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="dimensions">Dimensions (L x W x H)</Label>
                <Input 
                  id="dimensions" 
                  placeholder="e.g., 20cm x 15cm x 10cm" 
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Pricing & Inventory */}
          <Card className="p-6 border-border/40 mb-6">
            <h2 className="text-xl font-semibold mb-6">Pricing & Inventory</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price (USD) *</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    step="0.01"
                    placeholder="e.g., 89.99" 
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input 
                    id="stock" 
                    type="number" 
                    placeholder="e.g., 50" 
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input 
                    id="sku" 
                    placeholder="e.g., BAT-LI-12V-100" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input 
                    id="discount" 
                    type="number" 
                    placeholder="e.g., 10" 
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Product Images */}
          <Card className="p-6 border-border/40 mb-6">
            <h2 className="text-xl font-semibold mb-2">Product Images</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Upload high-quality images of your product. First image will be the main image.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square bg-muted rounded-lg flex items-center justify-center text-4xl border-2 border-border/40">
                  {image}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {images.length < 8 && (
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Upload className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Upload Image</span>
                </button>
              )}
            </div>
          </Card>

          {/* Shipping Information */}
          <Card className="p-6 border-border/40 mb-6">
            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="shipping-weight">Shipping Weight (kg)</Label>
                  <Input 
                    id="shipping-weight" 
                    type="number" 
                    step="0.1"
                    placeholder="e.g., 3.0" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="handling-time">Handling Time</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select handling time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 Business Day</SelectItem>
                      <SelectItem value="2-days">2 Business Days</SelectItem>
                      <SelectItem value="3-days">3 Business Days</SelectItem>
                      <SelectItem value="1-week">1 Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate("/seller/products")}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Publish Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
