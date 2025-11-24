"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            DigiLabs
          </h3>
          <p className="text-sm mb-4">
            We’re a full-service digital marketing agency focused on helping brands
            grow through creative strategy and innovation.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600 dark:hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>SEO Optimization</li>
            <li>Paid Advertising</li>
            <li>Social Media Marketing</li>
            <li>Branding & Design</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm">
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
