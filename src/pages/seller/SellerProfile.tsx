import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { 
  User, 
  Store, 
  MapPin, 
  Phone, 
  Mail,
  Globe,
  Shield,
  Star,
  Camera,
  Save
} from "lucide-react";

export function SellerProfile() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Seller Profile</h1>
          <p className="text-muted-foreground">Manage your seller account and business information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="p-6 border-border/40 lg:col-span-1 h-fit">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">PM</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold text-lg mb-1">PowerMax Batteries</h3>
              <p className="text-sm text-muted-foreground mb-3">Verified Seller</p>
              <Badge className="bg-primary/10 text-primary">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>

            <div className="space-y-4 border-t border-border/40 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm text-muted-foreground">(234)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Sales</span>
                <span className="font-semibold">856</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Products</span>
                <span className="font-semibold">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Member Since</span>
                <span className="font-semibold">Jan 2024</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
              View Public Profile
            </Button>
          </Card>

          {/* Profile Details */}
          <Card className="p-6 border-border/40 lg:col-span-2">
            <Tabs defaultValue="business" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="business">Business Info</TabsTrigger>
                <TabsTrigger value="contact">Contact Details</TabsTrigger>
                <TabsTrigger value="banking">Banking Info</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Business Info Tab */}
              <TabsContent value="business" className="space-y-6">
                <div>
                  <Label htmlFor="business-name">Business Name *</Label>
                  <Input 
                    id="business-name" 
                    defaultValue="PowerMax Batteries"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="business-description">Business Description</Label>
                  <Textarea 
                    id="business-description" 
                    defaultValue="Leading supplier of high-quality batteries for automotive, industrial, and consumer applications. We pride ourselves on fast shipping and excellent customer service."
                    className="mt-2 min-h-32"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="business-type">Business Type</Label>
                    <Input 
                      id="business-type" 
                      defaultValue="Manufacturer & Distributor"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tax-id">Tax ID / EIN</Label>
                    <Input 
                      id="tax-id" 
                      defaultValue="XX-XXXXXXX"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <div className="relative mt-2">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="website" 
                      defaultValue="www.powermaxbatteries.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </TabsContent>

              {/* Contact Details Tab */}
              <TabsContent value="contact" className="space-y-6">
                <div>
                  <Label htmlFor="full-name">Full Name *</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="full-name" 
                      defaultValue="Michael Thompson"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email"
                      defaultValue="michael@powermaxbatteries.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="phone" 
                      defaultValue="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea 
                      id="address" 
                      defaultValue="1234 Industrial Parkway, Suite 100&#10;San Francisco, CA 94102&#10;United States"
                      className="pl-10 min-h-24"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      defaultValue="San Francisco"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="postal">Postal Code</Label>
                    <Input 
                      id="postal" 
                      defaultValue="94102"
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </TabsContent>

              {/* Banking Info Tab */}
              <TabsContent value="banking" className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-foreground">
                    <Shield className="h-4 w-4 inline mr-2 text-primary" />
                    Your banking information is encrypted and secure
                  </p>
                </div>

                <div>
                  <Label htmlFor="account-name">Account Holder Name *</Label>
                  <Input 
                    id="account-name" 
                    defaultValue="PowerMax Batteries LLC"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="bank-name">Bank Name *</Label>
                  <Input 
                    id="bank-name" 
                    defaultValue="First National Bank"
                    className="mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input 
                      id="account-number" 
                      type="password"
                      defaultValue="XXXXXXXXXXXX1234"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="routing-number">Routing Number</Label>
                    <Input 
                      id="routing-number" 
                      defaultValue="XXXXXXXXX"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="swift">SWIFT/BIC Code (for international)</Label>
                  <Input 
                    id="swift" 
                    defaultValue="FNBAUS33"
                    className="mt-2"
                  />
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Update Banking Info
                </Button>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive order and message notifications</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Get text alerts for important updates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                      <div>
                        <p className="font-medium">Marketing Emails</p>
                        <p className="text-sm text-muted-foreground">Receive tips and promotional offers</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input 
                        id="current-password" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input 
                        id="new-password" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input 
                        id="confirm-password" 
                        type="password"
                        className="mt-2"
                      />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Update Password
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
