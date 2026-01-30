import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { 
  TrendingUp, 
  Package, 
  BarChart3, 
  DollarSign, 
  Users, 
  Globe, 
  Zap, 
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Rocket
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export function ForSellers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Unlimited Growth Potential",
      description: "Scale your business to new heights with access to 100,000+ verified buyers across 120+ countries.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: DollarSign,
      title: "Maximize Your Revenue",
      description: "Competitive fees as low as 2.5% per transaction. No hidden costs, no setup fees, no surprises.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights, sales forecasting, and performance metrics to optimize your business strategy.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sell internationally with built-in currency conversion, multi-language support, and logistics partners.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid fast with automatic payouts, fraud protection, and bank-grade security on every transaction.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Create your seller account in minutes. Upload products, set prices, and start selling immediately.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  const features = [
    { title: "Inventory Management", description: "Smart stock tracking with low-stock alerts" },
    { title: "Multi-warehouse Support", description: "Manage products across multiple locations" },
    { title: "Bulk Upload", description: "Upload hundreds of products in seconds" },
    { title: "Dynamic Pricing", description: "AI-powered pricing recommendations" },
    { title: "Order Management", description: "Streamlined order processing workflow" },
    { title: "Customer Insights", description: "Detailed buyer behavior analytics" },
    { title: "Marketing Tools", description: "Promote products with built-in campaigns" },
    { title: "24/7 Support", description: "Dedicated seller success team" }
  ];

  const stats = [
    { value: "$50M+", label: "Monthly Volume", icon: DollarSign },
    { value: "98%", label: "Seller Satisfaction", icon: Award },
    { value: "2.5%", label: "Platform Fee", icon: Target },
    { value: "24h", label: "Avg. First Sale", icon: Rocket }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -80, 0],
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
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-xl mb-8 shadow-2xl shadow-emerald-500/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-emerald-400" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Join 10,000+ Successful Sellers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="inline-block text-white">
                Grow Your Battery
              </span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
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
                Business Globally
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Reach millions of buyers worldwide. Leverage powerful tools, analytics, and support to build a thriving battery business on the world's most trusted marketplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <Link to="/seller/signup" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl font-semibold"
                  >
                    Start Selling Now
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/seller/login">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-10 py-7 text-lg rounded-2xl border-2 border-emerald-500/30 bg-slate-900/50 hover:bg-slate-800/50 text-white backdrop-blur-xl hover:border-emerald-500/50 transition-all shadow-xl"
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <stat.icon className="h-8 w-8 text-emerald-400 mb-3 mx-auto" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Why Sell on{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Parthian?
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to build, grow, and scale your battery business
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
                  
                  <div className="relative p-8 border border-emerald-500/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-emerald-500/30 transition-all h-full overflow-hidden rounded-3xl">
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

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
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
              Powerful Seller{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Tools
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
                className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all group"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald-400 mb-3" />
                <h4 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Ready to Start{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Selling?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Join thousands of sellers who trust Parthian Marketplace to grow their business
            </p>
            
            <Link to="/seller/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl font-semibold"
                  >
                    Create Seller Account - It's Free
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
