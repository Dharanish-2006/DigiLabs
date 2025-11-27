"use client";

import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="text-white bg-[#0F172A] relative overflow-hidden">

      {/* 🔵 Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-500/30 blur-[130px] rounded-full"></div>
        <div className="absolute top-[30%] left-[50%] w-[350px] h-[350px] bg-blue-500/20 blur-[110px] rounded-full"></div>
      </div>

      <Navbar />

      <section className="py-24 px-6 md:px-16 max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h1>

        <p className="text-center text-gray-200/90 mb-12 max-w-2xl mx-auto">
          We work with organizations that prioritize clarity, structure, and performance in their marketing efforts. Let’s discuss how we can support your business goals.
        </p>

        {/* Contact Details */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {[
            { icon: <Mail className="w-5 h-5 text-blue-400" />, text: "sam@digilabsmarketing.com" },
            { icon: <Phone className="w-5 h-5 text-blue-400" />, text: "(510) 616-6162" },
            { icon: <Globe className="w-5 h-5 text-blue-400" />, text: "www.digilabsmarketing.com" },
            { icon: <MapPin className="w-5 h-5 text-blue-400" />, text: "1700 Eureka Rd, Roseville, CA 95661, USA" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-3 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-blue-500/30 transition"
            >
              {item.icon}
              <span className="text-gray-200">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white/10 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-lg max-w-2xl mx-auto"
        >
          <Input type="text" placeholder="Your Name" className="bg-white/20 text-white placeholder-gray-200 border-none focus:ring-2 focus:ring-blue-400" />
          <Input type="email" placeholder="Your Email" className="bg-white/20 text-white placeholder-gray-200 border-none focus:ring-2 focus:ring-blue-400" />
          <Textarea placeholder="Your Message" rows={5} className="bg-white/20 text-white placeholder-gray-200 border-none focus:ring-2 focus:ring-blue-400" />

          <div className="text-center">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all"
            >
              Send Message
            </Button>
          </div>
        </motion.form>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 w-full h-[450px] rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-lg backdrop-blur-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1869644442413!2d-121.21622992494385!3d38.73647165618493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1e2b16347519%3A0x85d33e56df285f31!2sEureka%20Rd%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1764168816825!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
      }
