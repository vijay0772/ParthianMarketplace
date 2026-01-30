import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Menu, X, Battery, User, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Mock user type - in real app this would come from auth context
  const userType: string | null = "buyer"; // Can be "seller", "buyer", or null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-green-500/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                <Battery className="h-7 w-7 text-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                Parthian
              </span>
              <span className="text-xs text-emerald-400 font-medium tracking-wider">
                MARKETPLACE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "For Sellers", href: "/for-sellers" },
              { label: "For Buyers", href: "/for-buyers" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="relative text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {userType === "buyer" && (
              <Link to="/cart">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className="relative text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                    <ShoppingCart className="h-5 w-5" />
                    <motion.span
                      className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs flex items-center justify-center font-bold shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      3
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            )}
            
            {userType ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" size="sm" className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                      <User className="h-5 w-5 mr-2" />
                      Account
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-slate-900 border-emerald-500/20">
                  {userType === "seller" ? (
                    <>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/seller/dashboard" className="cursor-pointer">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/seller/products" className="cursor-pointer">
                          My Products
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/seller/orders" className="cursor-pointer">
                          Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/seller/profile" className="cursor-pointer">
                          Profile Settings
                        </Link>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/buyer/orders" className="cursor-pointer">
                          My Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/buyer/profile" className="cursor-pointer">
                          Profile Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                        <Link to="/cart" className="cursor-pointer">
                          Shopping Cart
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator className="bg-emerald-500/20" />
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                    Sign In
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                    <Button size="sm" className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-slate-300 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-emerald-500/10"
          >
            <nav className="flex flex-col gap-4">
              <Link to="/marketplace" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                Marketplace
              </Link>
              <Link to="/how-it-works" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                How It Works
              </Link>
              <Link to="/for-sellers" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                For Sellers
              </Link>
              <Link to="/for-buyers" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                For Buyers
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-emerald-500/10">
                {userType ? (
                  <>
                    {userType === "seller" ? (
                      <>
                        <Link to="/seller/dashboard">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                            Dashboard
                          </Button>
                        </Link>
                        <Link to="/seller/products">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                            My Products
                          </Button>
                        </Link>
                        <Link to="/seller/orders">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                            Orders
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/buyer/orders">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                            My Orders
                          </Button>
                        </Link>
                        <Link to="/cart">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                            Shopping Cart
                          </Button>
                        </Link>
                      </>
                    )}
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="w-full text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10">
                      Sign In
                    </Button>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-75" />
                      <Button size="sm" className="relative w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                        Get Started
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}