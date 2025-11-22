"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Target,
  Users,
  Split,
  Mail
} from "lucide-react";

const services = [
  {
    title: "Social Media Branding — Consistent Corporate Presence",
    icon: <Megaphone className="w-10 h-10 text-blue-600" />,
    description:
      "We create professional, brand-aligned content that reinforces your identity and builds trust across social platforms.",
  },
  {
    title: "SEO — Organic Visibility & Industry Authority",
    icon: <Search className="w-10 h-10 text-blue-600" />,
    description:
      "Strategic SEO practices that improve ranking, strengthen authority, and generate high-intent, organic traffic.",
  },
  {
    title: "Facebook Ads — Targeted Lead Acquisition",
    icon: <Target className="w-10 h-10 text-blue-600" />,
    description:
      "Precision-based ad campaigns focused on ROI, cost efficiency, and high-quality lead generation for both B2B & B2C pipelines.",
  },
  {
    title: "Influencer Marketing — Strategic Brand Alignment",
    icon: <Users className="w-10 h-10 text-blue-600" />,
    description:
      "Partnerships with credible industry voices to expand reach, build trust, and elevate brand perception.",
  },
  {
    title: "Funnel Marketing — Scalable Lead & Sales Systems",
    icon: <Split className="w-10 h-10 text-blue-600" />,
    description:
      "End-to-end funnel architectures that streamline customer journeys, increase conversions, and support predictable revenue growth.",
  },
  {
    title: "Email Marketing — Professional Communication & Retention",
    icon: <Mail className="w-10 h-10 text-blue-600" />,
    description:
      "Structured email flows designed to nurture leads, maintain engagement, and reinforce long-term customer relationships.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 md:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6"
        >
          <span>
            Our <span className="text-blue-600">Solutions</span>
          </span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-lg md:text-xl">
          Our service framework is designed for scalability, measurable
          outcomes, and end-to-end brand alignment. Each solution has been
          crafted to support businesses aiming for consistent growth and
          long-term digital authority.
        </p>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all p-6 border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl">
                <CardContent className="flex flex-col items-center gap-4 text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
