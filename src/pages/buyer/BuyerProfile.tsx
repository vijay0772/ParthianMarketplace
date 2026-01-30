import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail,
  Heart,
  ShoppingBag,
  Camera,
  Save,
  CreditCard
} from "lucide-react";

export function BuyerProfile() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="p-6 border-border/40 lg:col-span-1 h-fit">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">JD</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold text-lg mb-1">John Doe</h3>
              <p className="text-sm text-muted-foreground mb-3">john.doe@email.com</p>
              <Badge className="bg-primary/10 text-primary">
                Premium Member
              </Badge>
            </div>

            <div className="space-y-4 border-t border-border/40 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Orders</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Wishlist Items</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Saved Addresses</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Member Since</span>
                <span className="font-semibold">Jan 2025</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                My Orders
              </Button>
              <Button variant="outline" className="w-full">
                <Heart className="h-4 w-4 mr-2" />
                My Wishlist
              </Button>
            </div>
          </Card>

          {/* Profile Details */}
          <Card className="p-6 border-border/40 lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Personal Info Tab */}
              <TabsContent value="personal" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name *</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="first-name" 
                        defaultValue="John"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="last-name">Last Name *</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="last-name" 
                        defaultValue="Doe"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="buyer-email">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="buyer-email" 
                      type="email"
                      defaultValue="john.doe@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="buyer-phone">Phone Number</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="buyer-phone" 
                      defaultValue="+1 (555) 987-6543"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date-of-birth">Date of Birth</Label>
                    <Input 
                      id="date-of-birth" 
                      type="date"
                      defaultValue="1990-05-15"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <select id="gender" className="w-full h-10 mt-2 px-3 rounded-lg border border-border/40 bg-background">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Saved Addresses</h3>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Add New Address
                  </Button>
                </div>

                {/* Address Cards */}
                <div className="space-y-4">
                  <Card className="p-4 border-border/40">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">Home</h4>
                            <Badge className="bg-primary/10 text-primary text-xs">Default</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            123 Main Street, Apt 4B<br />
                            New York, NY 10001<br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-border/40">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Office</h4>
                          <p className="text-sm text-muted-foreground">
                            456 Business Ave, Suite 200<br />
                            New York, NY 10002<br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Payment Methods Tab */}
              <TabsContent value="payment" className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Saved Payment Methods</h3>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Add New Card
                  </Button>
                </div>

                <div className="space-y-4">
                  <Card className="p-4 border-border/40">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">Visa ending in 4242</h4>
                            <Badge className="bg-primary/10 text-primary text-xs">Default</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-border/40">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Mastercard ending in 8888</h4>
                          <p className="text-sm text-muted-foreground">Expires 08/2027</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-muted-foreground">Receive notifications about your orders</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">Promotional Emails</p>
                        <p className="text-sm text-muted-foreground">Get deals and special offers</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">Product Recommendations</p>
                        <p className="text-sm text-muted-foreground">Personalized product suggestions</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Get text alerts for important updates</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password-buyer">Current Password</Label>
                      <Input 
                        id="current-password-buyer" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password-buyer">New Password</Label>
                      <Input 
                        id="new-password-buyer" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password-buyer">Confirm New Password</Label>
                      <Input 
                        id="confirm-password-buyer" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Update Password
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <h3 className="font-semibold mb-2 text-destructive">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
