import { Battery, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Footer() {
  const footerLinks = {
    marketplace: [
      { name: "Browse Batteries", href: "/marketplace" },
      { name: "Sell Products", href: "#" },
      { name: "Become a Seller", href: "#" },
      { name: "Pricing Plans", href: "#pricing" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Seller Guide", href: "#" },
      { name: "Buyer Guide", href: "#" },
      { name: "API Documentation", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium CTA Section */}
        <div className="py-16 border-b border-emerald-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Power Up
                </span>{" "}
                Your Business?
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Join thousands of sellers and buyers transforming the battery industry
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
                    <Button className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-2xl">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl border-2 border-emerald-500/30 bg-transparent hover:bg-emerald-500/10 text-white">
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 group"
            >
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
            </motion.div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              The world's most advanced battery marketplace. Powered by AI, secured by blockchain, trusted globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@parthian.market</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA 94102</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 text-slate-400 hover:text-white transition-all border border-emerald-500/10 hover:border-emerald-500/30"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Marketplace Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Marketplace</h4>
            <ul className="space-y-3">
              {footerLinks.marketplace.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-emerald-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Parthian Marketplace. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                All systems operational
              </span>
              <span>Built with ❤️ for the battery industry</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
