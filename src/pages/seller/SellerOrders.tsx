import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { 
  Search, 
  Filter,
  Eye,
  Package,
  Truck,
  CheckCircle,
  Download
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export function SellerOrders() {
  const orders = [
    {
      id: "ORD-1238",
      customer: "Robert Brown",
      product: "Alkaline AA Battery Pack",
      quantity: 2,
      amount: "$37.98",
      status: "Processing",
      date: "2026-01-18",
      paymentStatus: "Paid",
      shippingAddress: "123 Main St, New York, NY 10001"
    },
    {
      id: "ORD-1237",
      customer: "Emma Wilson",
      product: "Solar Battery 200Ah Deep Cycle",
      quantity: 1,
      amount: "$399.99",
      status: "Shipped",
      date: "2026-01-17",
      paymentStatus: "Paid",
      shippingAddress: "456 Oak Ave, Los Angeles, CA 90001"
    },
    {
      id: "ORD-1236",
      customer: "Mike Davis",
      product: "Rechargeable AAA Battery Pack (12)",
      quantity: 3,
      amount: "$74.97",
      status: "Delivered",
      date: "2026-01-16",
      paymentStatus: "Paid",
      shippingAddress: "789 Pine Rd, Chicago, IL 60601"
    },
    {
      id: "ORD-1235",
      customer: "Sarah Johnson",
      product: "Car Battery 60Ah Heavy Duty",
      quantity: 1,
      amount: "$145.00",
      status: "Processing",
      date: "2026-01-17",
      paymentStatus: "Paid",
      shippingAddress: "321 Elm St, Houston, TX 77001"
    },
    {
      id: "ORD-1234",
      customer: "John Smith",
      product: "Lithium Ion Battery 12V 100Ah",
      quantity: 2,
      amount: "$179.98",
      status: "Delivered",
      date: "2026-01-15",
      paymentStatus: "Paid",
      shippingAddress: "654 Maple Dr, Phoenix, AZ 85001"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Package className="h-4 w-4" />;
      case "Shipped":
        return <Truck className="h-4 w-4" />;
      case "Delivered":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-primary/10 text-primary";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const stats = [
    { label: "Total Orders", value: "856", color: "text-primary" },
    { label: "Processing", value: "23", color: "text-yellow-600" },
    { label: "Shipped", value: "12", color: "text-blue-600" },
    { label: "Delivered", value: "821", color: "text-primary" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Orders Management</h1>
          <p className="text-muted-foreground">Track and manage your customer orders</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 border-border/40">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card className="border-border/40">
          {/* Filters */}
          <div className="p-6 border-b border-border/40">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search by order ID or customer name..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="border-primary/30">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button variant="outline" className="border-primary/30">
                <Download className="h-5 w-5 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b border-border/40 bg-transparent px-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="m-0">
              <div className="divide-y divide-border/40">
                {orders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Order Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-semibold text-foreground">{order.id}</h3>
                              <Badge className={getStatusColor(order.status)}>
                                {getStatusIcon(order.status)}
                                <span className="ml-1">{order.status}</span>
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">Customer</p>
                            <p className="font-medium">{order.customer}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Product</p>
                            <p className="font-medium">{order.product}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Quantity</p>
                            <p className="font-medium">{order.quantity} units</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Total Amount</p>
                            <p className="font-semibold text-primary">{order.amount}</p>
                          </div>
                        </div>

                        <div className="text-sm">
                          <p className="text-muted-foreground mb-1">Shipping Address</p>
                          <p>{order.shippingAddress}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex lg:flex-col gap-2">
                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === "Processing" && (
                          <Button size="sm" className="flex-1 lg:flex-none bg-primary hover:bg-primary/90">
                            <Truck className="h-4 w-4 mr-2" />
                            Mark as Shipped
                          </Button>
                        )}
                        {order.status === "Shipped" && (
                          <Button size="sm" className="flex-1 lg:flex-none bg-primary hover:bg-primary/90">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark as Delivered
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processing">
              <div className="p-8 text-center text-muted-foreground">
                Processing orders will appear here
              </div>
            </TabsContent>

            <TabsContent value="shipped">
              <div className="p-8 text-center text-muted-foreground">
                Shipped orders will appear here
              </div>
            </TabsContent>

            <TabsContent value="delivered">
              <div className="p-8 text-center text-muted-foreground">
                Delivered orders will appear here
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="p-6 border-t border-border/40 flex items-center justify-center gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
