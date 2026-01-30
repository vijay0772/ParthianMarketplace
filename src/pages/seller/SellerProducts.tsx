import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  MoreVertical,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export function SellerProducts() {
  const products = [
    {
      id: 1,
      name: "Lithium Ion Battery 12V 100Ah",
      category: "Lithium Ion",
      price: "$89.99",
      stock: 45,
      status: "Active",
      sales: 145,
      image: "🔋"
    },
    {
      id: 2,
      name: "Car Battery 60Ah Heavy Duty",
      category: "Automotive",
      price: "$145.00",
      stock: 23,
      status: "Active",
      sales: 98,
      image: "🔋"
    },
    {
      id: 3,
      name: "Solar Battery 200Ah Deep Cycle",
      category: "Solar",
      price: "$399.99",
      stock: 12,
      status: "Active",
      sales: 76,
      image: "🔋"
    },
    {
      id: 4,
      name: "Rechargeable AAA Battery Pack (12)",
      category: "Rechargeable",
      price: "$24.99",
      stock: 156,
      status: "Active",
      sales: 234,
      image: "🔋"
    },
    {
      id: 5,
      name: "Marine Battery 120Ah",
      category: "Marine",
      price: "$189.99",
      stock: 8,
      status: "Low Stock",
      sales: 45,
      image: "🔋"
    },
    {
      id: 6,
      name: "UPS Battery 12V 7Ah",
      category: "UPS",
      price: "$32.99",
      stock: 0,
      status: "Out of Stock",
      sales: 167,
      image: "🔋"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Products</h1>
            <p className="text-muted-foreground">Manage your battery inventory and listings</p>
          </div>
          <Link to="/seller/products/add">
            <Button className="bg-primary hover:bg-primary/90 mt-4 md:mt-0">
              <Plus className="h-5 w-5 mr-2" />
              Add New Product
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 border-border/40">
            <p className="text-sm text-muted-foreground mb-1">Total Products</p>
            <p className="text-2xl font-bold text-primary">142</p>
          </Card>
          <Card className="p-4 border-border/40">
            <p className="text-sm text-muted-foreground mb-1">Active Listings</p>
            <p className="text-2xl font-bold text-primary">138</p>
          </Card>
          <Card className="p-4 border-border/40">
            <p className="text-sm text-muted-foreground mb-1">Low Stock Items</p>
            <p className="text-2xl font-bold text-yellow-600">8</p>
          </Card>
          <Card className="p-4 border-border/40">
            <p className="text-sm text-muted-foreground mb-1">Out of Stock</p>
            <p className="text-2xl font-bold text-destructive">4</p>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 border-border/40 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search products by name or category..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="border-primary/30">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-border/40 hover:border-primary/40 transition-all hover:shadow-lg">
              {/* Product Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Product
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="font-semibold text-primary">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Stock</span>
                    <span className={`font-medium ${
                      product.stock === 0 ? "text-destructive" :
                      product.stock < 20 ? "text-yellow-600" :
                      "text-foreground"
                    }`}>
                      {product.stock} units
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Sales</span>
                    <span className="font-medium">{product.sales}</span>
                  </div>
                </div>

                <Badge 
                  variant={
                    product.status === "Active" ? "default" : 
                    product.status === "Low Stock" ? "secondary" : 
                    "destructive"
                  }
                  className={
                    product.status === "Active" ? "bg-primary/10 text-primary hover:bg-primary/20" :
                    product.status === "Low Stock" ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" :
                    ""
                  }
                >
                  {product.status}
                </Badge>

                <div className="flex gap-2 mt-4 pt-4 border-t border-border/40">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}
