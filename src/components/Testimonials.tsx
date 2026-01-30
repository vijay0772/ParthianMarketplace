import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, PowerTech Solutions",
      image: "👩‍💼",
      content: "Parthian Marketplace has revolutionized how we source batteries for our industrial clients. The platform's reliability and vast network have made it our go-to solution.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Procurement Manager, GreenEnergy Corp",
      image: "👨‍💼",
      content: "The quality of sellers on this platform is exceptional. We've saved over 30% on our battery procurement costs while maintaining the highest quality standards.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, EcoCharge",
      image: "👩‍💼",
      content: "As a small business owner, I was skeptical at first. But the support team and intuitive platform made it incredibly easy to start selling. We've tripled our revenue in 6 months!",
      rating: 5
    },
    {
      name: "David Park",
      role: "Operations Director, AutoParts Plus",
      image: "👨‍💼",
      content: "The analytics dashboard gives us real-time insights that help us make better business decisions. It's like having a business intelligence team at your fingertips.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Battery Specialist, SolarMax",
      image: "👩‍💼",
      content: "I've been using Parthian for 2 years now. The marketplace continues to evolve with new features that actually solve real problems. Highly recommended!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Supply Chain Manager, TechBattery",
      image: "👨‍💼",
      content: "The international shipping integration is seamless. We now serve customers in 50+ countries without the logistics headache. Game changer for our business.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Industry Leaders</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our Users{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied sellers and buyers who have transformed their battery business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="p-8 border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all h-full relative group overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <Quote className="h-16 w-16 text-primary" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="h-5 w-5 text-primary fill-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-4xl"
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50,000+", label: "Happy Customers" },
            { value: "99.8%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}