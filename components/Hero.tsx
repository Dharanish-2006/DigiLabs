"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28 px-6 md:px-16">
      
      {/* Glow Background */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-600/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Empowering Business Growth Through  
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {" "}Strategic Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            <strong className="text-white">DigiLabs Marketing</strong> drives 
            performance-based growth with clean design, powerful targeting, and 
            modern marketing execution built for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/contact">
              <Button className="px-8 py-4 text-lg rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition">
                Get Started
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg rounded-full border-2 border-gray-400 hover:border-white hover:bg-white/10 transition"
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <div className="relative w-full max-w-md">
            <Image
              src="/hero-banner.png"
              alt="Digital marketing illustration"
              width={550}
              height={550}
              priority
              className="drop-shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
            />

            {/* Glow circle */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
