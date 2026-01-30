import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { 
  Package, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function SellerDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,580",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Total Products",
      value: "142",
      change: "+8",
      trend: "up",
      icon: Package,
      color: "text-primary"
    },
    {
      title: "Total Orders",
      value: "856",
      change: "+23.1%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-primary"
    },
    {
      title: "Profile Views",
      value: "3,429",
      change: "-2.4%",
      trend: "down",
      icon: Eye,
      color: "text-primary"
    }
  ];

  const salesData = [
    { month: "Jan", sales: 4200 },
    { month: "Feb", sales: 3800 },
    { month: "Mar", sales: 5100 },
    { month: "Apr", sales: 4600 },
    { month: "May", sales: 6200 },
    { month: "Jun", sales: 5800 }
  ];

  const recentOrders = [
    { id: "ORD-1234", customer: "John Smith", product: "Lithium Ion 12V", amount: "$89.99", status: "Completed", date: "2026-01-17" },
    { id: "ORD-1235", customer: "Sarah Johnson", product: "Car Battery 60Ah", amount: "$145.00", status: "Processing", date: "2026-01-17" },
    { id: "ORD-1236", customer: "Mike Davis", product: "Rechargeable AAA Pack", amount: "$24.99", status: "Shipped", date: "2026-01-16" },
    { id: "ORD-1237", customer: "Emma Wilson", product: "Solar Battery 200Ah", amount: "$399.99", status: "Completed", date: "2026-01-16" },
    { id: "ORD-1238", customer: "Robert Brown", product: "Alkaline AA Pack", amount: "$18.99", status: "Processing", date: "2026-01-15" }
  ];

  const topProducts = [
    { name: "Lithium Ion 12V 100Ah", sales: 145, revenue: "$12,995" },
    { name: "Car Battery 60Ah", sales: 98, revenue: "$14,210" },
    { name: "Solar Battery 200Ah", sales: 76, revenue: "$30,396" },
    { name: "Rechargeable AAA Pack", sales: 234, revenue: "$5,847" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your store.</p>
          </div>
          <Link to="/seller/products/add">
            <Button className="bg-primary hover:bg-primary/90 mt-4 md:mt-0">
              <Plus className="h-5 w-5 mr-2" />
              Add New Product
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-border/40 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <div className="flex items-center gap-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm ${stat.trend === "up" ? "text-primary" : "text-destructive"}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Chart */}
          <Card className="lg:col-span-2 p-6 border-border/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Sales Overview</h3>
                <p className="text-sm text-muted-foreground">Monthly sales performance</p>
              </div>
              <Button variant="outline" size="sm">View Report</Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Top Products */}
          <Card className="p-6 border-border/40">
            <h3 className="text-xl font-semibold mb-6">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <p className="font-semibold text-primary">{product.revenue}</p>
                </div>
              ))}
            </div>
            <Link to="/seller/products">
              <Button variant="outline" className="w-full mt-6">View All Products</Button>
            </Link>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="p-6 border-border/40">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Recent Orders</h3>
              <p className="text-sm text-muted-foreground">Your latest customer orders</p>
            </div>
            <Link to="/seller/orders">
              <Button variant="outline" size="sm">View All Orders</Button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-border/40 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4 text-sm">{order.product}</td>
                    <td className="py-4 px-4 font-semibold text-primary">{order.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Completed" ? "bg-primary/10 text-primary" :
                        order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
