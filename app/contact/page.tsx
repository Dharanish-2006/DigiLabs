"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="text-white bg-[#0F172A] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-500/30 blur-[130px] rounded-full" />
        <div className="absolute top-[30%] left-[50%] w-[350px] h-[350px] bg-blue-500/20 blur-[110px] rounded-full" />
      </div>

      <Navbar />

      <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h1>

        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
          Let’s discuss how DigiLabs can help your business grow with clarity,
          structure, and performance-driven marketing.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: <Mail className="text-blue-400" />,
              text: "sam@digilabsmarketing.com",
            },
            {
              icon: <Phone className="text-blue-400" />,
              text: "(510) 616-6162",
            },
            {
              icon: <Globe className="text-blue-400" />,
              text: "www.digilabsmarketing.com",
            },
            {
              icon: <MapPin className="text-blue-400" />,
              text: "Roseville, CA, USA",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
            >
              {item.icon}
              <span className="text-gray-200">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto"
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-white/20 text-white placeholder-gray-300"
          />

          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-white/20 text-white placeholder-gray-300"
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="bg-white/20 text-white placeholder-gray-300"
          />

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Something went wrong. Try again.
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </motion.form>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 w-full h-[450px] rounded-3xl overflow-hidden border border-white/20 shadow-lg"
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
