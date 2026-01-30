import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Search, 
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Eye,
  Download,
  MessageCircle
} from "lucide-react";

export function BuyerOrders() {
  const orders = [
    {
      id: "ORD-5678",
      date: "2026-01-17",
      seller: "PowerMax Batteries",
      items: [
        { name: "Lithium Ion Battery 12V 100Ah", quantity: 2, image: "🔋" }
      ],
      total: "$179.98",
      status: "Delivered",
      trackingNumber: "TRK123456789",
      deliveryDate: "2026-01-18"
    },
    {
      id: "ORD-5677",
      date: "2026-01-15",
      seller: "SolarEnergy Pro",
      items: [
        { name: "Solar Battery 200Ah Deep Cycle", quantity: 1, image: "🔋" }
      ],
      total: "$399.99",
      status: "In Transit",
      trackingNumber: "TRK987654321",
      estimatedDelivery: "2026-01-20"
    },
    {
      id: "ORD-5676",
      date: "2026-01-14",
      seller: "PowerMax Batteries",
      items: [
        { name: "Rechargeable AAA Battery Pack (12)", quantity: 3, image: "🔋" }
      ],
      total: "$74.97",
      status: "Processing",
      estimatedShip: "2026-01-19"
    },
    {
      id: "ORD-5675",
      date: "2026-01-10",
      seller: "AutoPower Supply",
      items: [
        { name: "Car Battery 60Ah Heavy Duty", quantity: 1, image: "🔋" }
      ],
      total: "$145.00",
      status: "Delivered",
      trackingNumber: "TRK456789123",
      deliveryDate: "2026-01-13"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Package className="h-4 w-4" />;
      case "In Transit":
        return <Truck className="h-4 w-4" />;
      case "Delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "Cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-primary/10 text-primary";
      case "Cancelled":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const stats = [
    { label: "Total Orders", value: "47", color: "text-primary" },
    { label: "In Transit", value: "3", color: "text-blue-600" },
    { label: "Delivered", value: "42", color: "text-primary" },
    { label: "Returns", value: "2", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your purchases</p>
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
          {/* Search */}
          <div className="p-6 border-b border-border/40">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search orders by ID or product name..." 
                className="pl-10"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b border-border/40 bg-transparent px-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="transit">In Transit</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="m-0">
              <div className="divide-y divide-border/40">
                {orders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Order Header */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{order.id}</h3>
                              <Badge className={getStatusColor(order.status)}>
                                {getStatusIcon(order.status)}
                                <span className="ml-1">{order.status}</span>
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Ordered on {order.date} • {order.seller}
                            </p>
                          </div>
                          <p className="text-xl font-bold text-primary">{order.total}</p>
                        </div>

                        {/* Order Items */}
                        <div className="space-y-3 mb-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center text-2xl">
                                {item.image}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Order Details */}
                        <div className="text-sm space-y-1">
                          {order.trackingNumber && (
                            <p className="text-muted-foreground">
                              Tracking: <span className="font-medium text-foreground">{order.trackingNumber}</span>
                            </p>
                          )}
                          {order.deliveryDate && (
                            <p className="text-muted-foreground">
                              Delivered on: <span className="font-medium text-primary">{order.deliveryDate}</span>
                            </p>
                          )}
                          {order.estimatedDelivery && (
                            <p className="text-muted-foreground">
                              Estimated delivery: <span className="font-medium text-foreground">{order.estimatedDelivery}</span>
                            </p>
                          )}
                          {order.estimatedShip && (
                            <p className="text-muted-foreground">
                              Estimated ship date: <span className="font-medium text-foreground">{order.estimatedShip}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex lg:flex-col gap-2 lg:w-48">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === "In Transit" && (
                          <Button variant="outline" size="sm" className="flex-1">
                            <Truck className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                        )}
                        {order.status === "Delivered" && (
                          <>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Download className="h-4 w-4 mr-2" />
                              Invoice
                            </Button>
                            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                              Review
                            </Button>
                          </>
                        )}
                        {order.status === "Processing" && (
                          <Button variant="outline" size="sm" className="flex-1">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Seller
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

            <TabsContent value="transit">
              <div className="p-8 text-center text-muted-foreground">
                Orders in transit will appear here
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
