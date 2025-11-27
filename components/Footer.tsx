"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      
      {/* GLASS TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-500/40 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BRAND */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            DigiLabs
          </h3>

          <p className="text-sm leading-relaxed opacity-80">
            Powering brands with digital strategy, performance marketing, and intelligent design.
          </p>

          {/* SOCIAL ICONS FIXED + CENTERED + NEON */}
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="group flex items-center justify-center w-10 h-10 rounded-full
                bg-white/10 dark:bg-black/20
                border border-gray-300/20 dark:border-gray-700/40
                backdrop-blur-md
                hover:border-blue-500/60 dark:hover:border-blue-400/60
                hover:shadow-[0_0_15px_rgba(0,140,255,0.8)]
                transition-all duration-300"
              >
                <Icon
                  className="w-5 h-5 transition-all duration-300 
                             group-hover:scale-110 
                             group-hover:text-blue-500 dark:group-hover:text-blue-400"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Services", url: "/services" },
              { name: "Contact", url: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="relative inline-block hover:text-blue-600 dark:hover:text-blue-400 transition group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-[1.5px] bg-blue-500 dark:bg-blue-400 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "SEO Optimization",
              "Paid Advertising",
              "Social Media Marketing",
              "Branding & Design",
            ].map((service, i) => (
              <li key={i} className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Email: sam@digilabsmarketing.com</li>
            <li>Phone: +1 (916) 407-0909</li>
            <li>1700 Eureka Rd, Roseville, CA 95661, USA</li>
          </ul>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200/50 dark:border-gray-800/70 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} DigiLabs — All Rights Reserved.
      </div>
    </footer>
  );
}
