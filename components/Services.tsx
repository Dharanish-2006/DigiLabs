"use client";

import { useEffect, useState, JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Share2, Search, Target, Users, Funnel, Mail, Sparkles  , Globe2    } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    id:1,
    title: "Website Designing Services",
    description:
    "Custom Website Design , Responsive Design (Mobile, Tablet & Desktop) , Business Websites & Portfolio Sites , E-commerce Website Design , SEO-Friendly Structure , Fast Loading & Secure Websites",
    icon: <Globe2 className="w-10 h-10 text-blue-400" />,
  },
  {
    id: 2,
    title: "Logo Designing Services",
    description:
    "Logo Designing Services,Modern & Creative Designs,Business & Startup Logos,Social Media & Branding Logos,High-Resolution Files (PNG, JPG, SVG)",
    icon: <Sparkles className="w-10 h-10 text-blue-400" />,
  },
  {
    id: 3,
    title: "Social Media Branding",
    description:
      "Create a premium digital identity with high-trust, cohesive brand visuals across platforms.",
    icon: <Share2 className="h-10 w-10 text-blue-400 drop-shadow-xl" />,
  },
  {
    id: 4,
    title: "SEO – Organic Visibility",
    description:
      "Boost long-term search performance and attract high-intent traffic using modern SEO frameworks.",
    icon: <Search className="h-10 w-10 text-green-400 drop-shadow-xl" />,
  },
  {
    id: 5,
    title: "Facebook Ads – Lead Acquisition",
    description:
      "Scale predictable, high-quality lead generation with optimized targeting and creative strategies.",
    icon: <Target className="h-10 w-10 text-pink-400 drop-shadow-xl" />,
  },
  {
    id: 6,
    title: "Influencer Marketing",
    description:
      "Amplify brand trust through strategic creator partnerships tailored to your audience.",
    icon: <Users className="h-10 w-10 text-yellow-400 drop-shadow-xl" />,
  },
  {
    id: 7,
    title: "Funnel Marketing",
    description:
      "Design complete customer journeys engineered to maximize retention and conversion.",
    icon: <Funnel className="h-10 w-10 text-purple-400 drop-shadow-xl" />,
  },
  {
    id: 8,
    title: "Email Marketing",
    description:
      "Implement automated workflows that nurture leads and improve customer lifetime value.",
    icon: <Mail className="h-10 w-10 text-red-400 drop-shadow-xl" />,
  },
];

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#0A0F2A] text-white py-28 px-6 md:px-16 relative overflow-hidden">

      {/* Top Glow */}
      <div className="absolute -top-40 left-10 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-28 pt-6"> 
  <h2
    className="
      text-4xl md:text-5xl font-extrabold 
      bg-gradient-to-r from-blue-500 to-purple-500 
      bg-clip-text text-transparent 
      drop-shadow-2xl
      leading-[1.25]
      pb-2
    "
  >
    Our Strategic Solutions
  </h2>

  <p className="text-gray-300 max-w-2xl mx-auto mt-8">
    Premium, scalable marketing systems engineered for performance and clarity.
  </p>
</div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-[#111D38]/40 backdrop-blur-lg border border-white/10 
                  p-6 rounded-2xl shadow-xl"
                >
                  <Skeleton className="h-12 w-12 mb-4 rounded-full" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </Card>
              ))
            : servicesData.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      rotateX: 7,
                      rotateY: -7,
                      boxShadow: "0px 0px 40px rgba(88, 80, 255, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                  >
                    <Card
                      className="
                      bg-[#111D38]/40 backdrop-blur-xl border border-white/20 
                      rounded-2xl p-8 
                      shadow-xl transition-all duration-300
                      hover:border-blue-400/40
                      hover:shadow-[0_0_35px_#4c6fff55] 
                      bg-gradient-to-br from-white/5 to-transparent
                    "
                    >
                      <CardHeader className="flex flex-col items-center">
                        {service.icon}
                        <CardTitle className="text-xl mt-4 text-white text-center font-semibold drop-shadow-md">
                          {service.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="text-gray-300 text-center leading-relaxed text-sm">
                        {service.description}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
        </div>

      </div>
    </section>
  );
}
