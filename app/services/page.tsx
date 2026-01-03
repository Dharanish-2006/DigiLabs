"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Megaphone, Search, Target, Users, Split, Mail, Globe2, Sparkles } from "lucide-react";

const services = [
  {
    title: "Website Designing Services",
    icon: <Globe2 className="w-10 h-10 text-blue-400" />,
    description:
      "Custom Website Design , Responsive Design (Mobile, Tablet & Desktop) , Business Websites & Portfolio Sites , E-commerce Website Design , SEO-Friendly Structure , Fast Loading & Secure Websites",
  },
  {
    title: "Logo Designing Services",
    icon: <Sparkles className="w-10 h-10 text-blue-400" />,
    description:
      "Logo Designing Services,Modern & Creative Designs,Business & Startup Logos,Social Media & Branding Logos,High-Resolution Files (PNG, JPG, SVG)",
  },
  {
    title: "Social Media Branding — Consistent Corporate Presence",
    icon: <Megaphone className="w-10 h-10 text-blue-400" />,
    description:
      "We create professional, brand-aligned content that reinforces your identity and builds trust across social platforms.",
  },
  {
    title: "SEO — Organic Visibility & Industry Authority",
    icon: <Search className="w-10 h-10 text-blue-400" />,
    description:
      "Strategic SEO practices that improve ranking, strengthen authority, and generate high-intent, organic traffic.",
  },
  {
    title: "Facebook Ads — Targeted Lead Acquisition",
    icon: <Target className="w-10 h-10 text-blue-400" />,
    description:
      "Precision-based ad campaigns focused on ROI, cost efficiency, and high-quality lead generation for both B2B & B2C pipelines.",
  },
  {
    title: "Influencer Marketing — Strategic Brand Alignment",
    icon: <Users className="w-10 h-10 text-blue-400" />,
    description:
      "Partnerships with credible industry voices to expand reach, build trust, and elevate brand perception.",
  },
  {
    title: "Funnel Marketing — Scalable Lead & Sales Systems",
    icon: <Split className="w-10 h-10 text-blue-400" />,
    description:
      "End-to-end funnel architectures that streamline customer journeys, increase conversions, and support predictable revenue growth.",
  },
  {
    title: "Email Marketing — Professional Communication & Retention",
    icon: <Mail className="w-10 h-10 text-blue-400" />,
    description:
      "Structured email flows designed to nurture leads, maintain engagement, and reinforce long-term customer relationships.",
  },
];

export default function ServicesPage() {
  return (
    <main className="text-white bg-[#0F172A] relative overflow-hidden">

      {/* 🔵 Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-500/30 blur-[130px] rounded-full"></div>
        <div className="absolute top-[30%] left-[50%] w-[350px] h-[350px] bg-blue-500/20 blur-[110px] rounded-full"></div>
      </div>

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 md:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          Our <span className="text-blue-400">Solutions</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg md:text-xl">
          Our service framework is designed for scalability, measurable outcomes, and end-to-end brand alignment. Each solution supports businesses aiming for consistent growth and long-term digital authority.
        </p>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="flex flex-col items-center gap-4 text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
