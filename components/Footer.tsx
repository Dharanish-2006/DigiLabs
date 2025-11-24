"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            DigiLabs
          </h3>

          <p className="text-sm leading-relaxed opacity-80">
            We help businesses grow using modern marketing, data-driven
            strategy, and clean, conversion-focused design.
          </p>

          <div className="flex gap-4 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="group">
                <Icon className="w-5 h-5 transition transform group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Services", url: "#services" },
              { name: "Contact", url: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="relative hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <span className="inline-block">{item.name}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Services
          </h4>
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

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Email: sam@digilabsmarketing.com</li>
            <li>Phone: +1(916) 407-0909</li>
            <li>1700 Eureka Rd, Roseville, CA 95661, USA</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} DigiLabs. All rights reserved.
      </div>
    </footer>
  );
}
