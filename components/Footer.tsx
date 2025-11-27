"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0F2A] text-gray-300 pt-24 pb-10">

      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px]"></div>
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-600/20 blur-[200px]"></div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl mb-4">
            DigiLabs
          </h3>

          <p className="text-sm text-gray-300/90 leading-relaxed">
            Building premium, high-performance digital experiences with modern design, 
            automation, and scalable marketing systems.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Link
                  href="#"
                  className="p-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10
                    hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6aa] transition"
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-blue-400" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Services", url: "/services" },
              { name: "Contact", url: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="relative text-gray-300 hover:text-blue-400 transition group"
                >
                  {item.name}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 
                    group-hover:w-full transition-all duration-300"
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-4">Services</h4>

          <ul className="space-y-3 text-sm">
            {[
              "SEO Optimization",
              "Paid Advertising",
              "Social Media Marketing",
              "Branding & Design",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 transition">
              Email: sam@digilabsmarketing.com
            </li>
            <li className="hover:text-blue-400 transition">
              Phone: +1 (916) 407-0909
            </li>
            <li className="hover:text-blue-400 transition">
              1700 Eureka Rd, Roseville, CA 95661
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DigiLabs — All rights reserved.
      </div>
    </footer>
  );
}
