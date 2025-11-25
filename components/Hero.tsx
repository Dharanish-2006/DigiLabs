"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 lg:py-2 px-6 md:px-12 flex justify-center items-center">

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 lg:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
            Accelerating Business Growth Through 
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Strategic Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            <strong>DIGILABS</strong> Marketing delivers performance-focused digital strategies designed for organizations looking to enhance visibility, strengthen brand authority, and generate qualified leads at scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition">
                Get Started
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                className="px-8 py-3 text-lg rounded-full border-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div viewport={{ once: true }} className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/hero-banner.png"
              alt="Digital marketing illustration"
              width={520}
              height={520}
              priority
              className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
            />

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
