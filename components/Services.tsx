"use client";

import { useEffect, useState, JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Share2, Search, Target, Users, Funnel, Mail } from "lucide-react";

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
      "Create a premium digital identity with high-trust, cohesive brand visuals across platforms.",
    icon: <Share2 className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 2,
    title: "SEO – Organic Visibility",
    description:
      "Boost long-term search performance and attract high-intent traffic using modern SEO frameworks.",
    icon: <Search className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 3,
    title: "Facebook Ads – Lead Acquisition",
    description:
      "Scale predictable, high-quality lead generation with optimized targeting and creative strategies.",
    icon: <Target className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 4,
    title: "Influencer Marketing",
    description:
      "Amplify brand trust through strategic creator partnerships tailored to your audience.",
    icon: <Users className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 5,
    title: "Funnel Marketing",
    description:
      "Design complete customer journeys engineered to maximize retention and conversion.",
    icon: <Funnel className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 6,
    title: "Email Marketing",
    description:
      "Implement automated workflows that nurture leads and improve customer lifetime value.",
    icon: <Mail className="h-10 w-10 text-blue-400" />,
  },
];

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#0F172A] text-white py-24 px-6 md:px-16 relative">

      {/* Glow */}
      <div className="absolute -top-20 right-0 w-80 h-80 bg-purple-600/20 blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Strategic Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium, scalable marketing systems engineered for performance and clarity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="bg-[#1E293B] p-6 rounded-2xl">
                  <Skeleton className="h-12 w-12 mb-4 rounded-full" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </Card>
              ))
            : servicesData.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1E293B] border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300">
                    <CardHeader className="flex flex-col items-center">
                      {service.icon}
                      <CardTitle className="text-xl mt-4 text-white text-center">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </div>

      </div>
    </section>
  );
}
