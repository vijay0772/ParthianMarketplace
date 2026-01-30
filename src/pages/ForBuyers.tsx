import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  ShoppingCart, 
  Search, 
  Shield, 
  Truck, 
  CreditCard, 
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Globe,
  Package,
  Clock,
  MessageSquare,
  ThumbsUp,
  TrendingUp
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export function ForBuyers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const benefits = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "AI-powered search finds exactly what you need from 50,000+ products with intelligent filters and recommendations.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Buyer Protection",
      description: "Shop with confidence. Every purchase is protected with our 30-day money-back guarantee and dispute resolution.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade encryption. Your financial data is always safe and secure.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Express shipping available worldwide. Track your orders in real-time from warehouse to your doorstep.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All sellers are verified. Every product meets strict quality standards. Authentic batteries, always.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Expert support team ready to help. Chat, email, or call us anytime. We're here for you.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  const features = [
    { title: "Compare Prices", description: "Find the best deals instantly", icon: TrendingUp },
    { title: "Verified Reviews", description: "Real feedback from real buyers", icon: Star },
    { title: "Bulk Discounts", description: "Save more on large orders", icon: Package },
    { title: "Quick Reorder", description: "Repeat orders in one click", icon: Clock },
    { title: "Wishlists", description: "Save products for later", icon: ThumbsUp },
    { title: "Price Alerts", description: "Get notified of price drops", icon: Zap },
    { title: "Global Sourcing", description: "Buy from 120+ countries", icon: Globe },
    { title: "Easy Returns", description: "Hassle-free return process", icon: CheckCircle2 }
  ];

  const stats = [
    { value: "50,000+", label: "Products Available", icon: Package },
    { value: "4.9/5", label: "Customer Rating", icon: Star },
    { value: "24h", label: "Avg. Delivery", icon: Truck },
    { value: "100%", label: "Secure Checkout", icon: Shield }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-xl mb-8 shadow-2xl shadow-cyan-500/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Trusted by 100,000+ Happy Buyers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="inline-block text-white">
                Find the Perfect
              </span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Battery Solution
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Shop from the world's largest battery marketplace. Compare prices, read verified reviews, and purchase with complete confidence. Your power source, delivered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <Link to="/marketplace" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl font-semibold"
                  >
                    Browse Marketplace
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/buyer/login">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-10 py-7 text-lg rounded-2xl border-2 border-cyan-500/30 bg-slate-900/50 hover:bg-slate-800/50 text-white backdrop-blur-xl hover:border-cyan-500/50 transition-all shadow-xl"
                  >
                    Sign In
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-emerald-500/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                    <stat.icon className="h-8 w-8 text-cyan-400 mb-3 mx-auto" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Why Buy on{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Parthian?
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The smartest way to source batteries for your business or personal needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full">
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                  />
                  
                  <div className="relative p-8 border border-cyan-500/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-cyan-500/30 transition-all h-full overflow-hidden rounded-3xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <motion.div
                      className="relative mb-6 inline-block"
                      whileHover={{ 
                        rotate: [0, -12, 12, -12, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-2xl`}>
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Powerful Buyer{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all group"
              >
                <feature.icon className="h-6 w-6 text-cyan-400 mb-3" />
                <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-teal-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Start Shopping{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Join thousands of buyers who trust Parthian Marketplace for quality batteries
            </p>
            
            <Link to="/marketplace">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl font-semibold"
                  >
                    Explore 50,000+ Products
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
