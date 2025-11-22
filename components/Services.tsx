"use client";

import { JSX, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Icons
import {
  Share2,
  Search,
  Target,
  Users,
  Funnel,
  Mail,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Social Media Branding",
    description:
      "Develop a consistent, corporate-aligned identity that strengthens brand trust and enhances your professional presence.",
    icon: <Share2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 2,
    title: "SEO – Organic Visibility",
    description:
      "Increase your search authority and attract high-intent traffic through structured, long-term SEO strategies.",
    icon: <Search className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 3,
    title: "Facebook Ads – Lead Acquisition",
    description:
      "Run precision-targeted ad campaigns optimized for cost efficiency, lead quality, and measurable business outcomes.",
    icon: <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 4,
    title: "Influencer Marketing",
    description:
      "Partner with credible industry voices to strengthen brand perception, expand reach, and enhance trust.",
    icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 5,
    title: "Funnel Marketing",
    description:
      "Build scalable end-to-end customer journeys engineered to maximize conversions and predictable revenue growth.",
    icon: <Funnel className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 6,
    title: "Email Marketing",
    description:
      "Implement structured email flows that nurture leads, improve retention, and maintain consistent brand communication.",
    icon: <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
];

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services"
      className="px-6 md:px-16 py-20 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          Our Strategic Solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A structured service framework built for measurable performance,
          operational clarity, and sustainable long-term growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="shadow-md border rounded-2xl p-6">
                <Skeleton className="h-10 w-10 mb-4 rounded-full" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </Card>
            ))
          : servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group shadow-md border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center text-lg font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
