"use client";

import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="text-gray-900 dark:text-gray-100">
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
        </form><br/>
<div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1869644442413!2d-121.21622992494385!3d38.73647165618493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1e2b16347519%3A0x85d33e56df285f31!2sEureka%20Rd%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1764168816825!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </section>
    </main>
  );
}
