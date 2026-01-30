import { Card } from "./ui/card";
import { 
  Shield, 
  Search, 
  CreditCard, 
  TrendingUp, 
  Users, 
  BarChart3,
  Globe,
  Zap,
  Award
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: Shield,
      title: "Verified Sellers",
      description: "Every seller undergoes rigorous verification ensuring authenticity, quality standards, and business legitimacy.",
      gradient: "from-emerald-500 via-teal-500 to-green-600",
      delay: 0
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Advanced machine learning algorithms help you discover the perfect battery in milliseconds with intelligent recommendations.",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      delay: 0.1
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Bank-grade encryption and fraud protection for every transaction with multiple payment options and instant confirmations.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with actionable insights, performance metrics, and predictive analytics for data-driven decisions.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      delay: 0
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with verified buyers and sellers across 120+ countries with integrated translation and currency conversion.",
      gradient: "from-teal-500 via-emerald-500 to-green-500",
      delay: 0.1
    },
    {
      icon: BarChart3,
      title: "Smart Inventory",
      description: "Automated stock management, low-stock alerts, demand forecasting, and seamless multi-warehouse coordination.",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Seamless cross-border logistics with real-time tracking, customs automation, and partnerships with premium carriers.",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time alerts via email, SMS, and push notifications for orders, messages, price changes, and market trends.",
      gradient: "from-emerald-500 via-teal-500 to-blue-500",
      delay: 0.1
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "30-day hassle-free returns, buyer protection on every purchase, and dedicated dispute resolution support.",
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      delay: 0.2
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"
          style={{ y }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-xl mb-8 shadow-2xl shadow-emerald-500/10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-5 w-5 text-emerald-400" />
            </motion.div>
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Enterprise-Grade Features
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="inline-block text-white">
              Everything You Need to
            </span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
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
              Dominate Your Market
            </motion.span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Powered by cutting-edge technology and designed for scale. 
            <span className="text-emerald-400"> Built for the future</span>, 
            <span className="text-teal-400"> ready for today</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                />
                
                {/* Card Content */}
                <Card className="relative p-8 border border-emerald-500/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-emerald-500/30 transition-all h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Animated Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0, rotate: -90 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="relative mb-6 inline-block"
                      whileHover={{ 
                        rotate: [0, -12, 12, -12, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Learn more</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-slate-400 mb-8 font-light">
            Join the future of battery trading
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />
              <button className="relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-2xl text-lg">
                Get Started Free - No Credit Card Required
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
