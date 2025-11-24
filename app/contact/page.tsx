"use client";

import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="py-24 px-6 md:px-16 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center"
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h1>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We work with organizations that prioritize clarity, structure, and performance 
          in their marketing efforts. Let’s discuss how we can support your business goals.
        </p>

        {/* CONTACT DETAILS */}
        <div className="mb-16 space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-lg">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>sam@digilabsmarketing.com</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>+1(916) 407-0909</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <Globe className="w-5 h-5 text-blue-600" />
            <span>www.digilabsmarketing.com</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>1700 Eureka Rd, Roseville, CA 95661, USA</span>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="space-y-6">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" rows={5} />

          <div className="text-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
            >
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
