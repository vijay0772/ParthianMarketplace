import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-green-500/20 animate-gradient" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent)`,
          }}
        />
      </div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
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
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-green-500/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
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
              Trusted by 100,000+ Industry Leaders
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Main Heading with Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="inline-block text-white">
                The Future of
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
                Battery Trading
              </motion.span>
            </h1>
          </motion.div>

          {/* Premium Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the world's most advanced battery marketplace. 
            <span className="text-emerald-400 font-medium"> Powered by AI</span>, 
            <span className="text-teal-400 font-medium"> secured by blockchain</span>, and 
            <span className="text-green-400 font-medium"> trusted globally</span>.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Link to="/marketplace" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-gradient" />
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl font-semibold group-hover:shadow-emerald-500/50 transition-all"
                >
                  Start Trading Now
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="px-10 py-7 text-lg rounded-2xl border-2 border-emerald-500/30 bg-slate-900/50 hover:bg-slate-800/50 text-white backdrop-blur-xl hover:border-emerald-500/50 transition-all shadow-xl"
              >
                <Zap className="mr-2 h-5 w-5 text-emerald-400" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium Stats with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "Active Sellers", value: "1000+", icon: TrendingUp, color: "from-emerald-400 to-teal-400" },
              { label: "Products Listed", value: "5000+", icon: Zap, color: "from-teal-400 to-cyan-400" },
              { label: "Countries", value: "10+", icon: Sparkles, color: "from-green-400 to-emerald-400" },
              { label: "Happy Buyers", value: "1000+", icon: TrendingUp, color: "from-emerald-400 to-green-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  <motion.div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold text-white mb-2 tabular-nums">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Premium Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
}