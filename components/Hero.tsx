"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 flex justify-center items-center">

      {/* 🔵 Glowing Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] bg-purple-600/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] bg-pink-500/30 blur-[160px] rounded-full"></div>
        <div className="absolute top-[40%] left-[50%] w-[380px] h-[380px] bg-blue-500/20 blur-[140px] rounded-full"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20 px-6 md:px-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1
            className="
              text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight 
              bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 
              text-transparent bg-clip-text drop-shadow-[0_4px_15px_rgba(255,0,150,0.45)]
            "
          >
            Transform Your Business With
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              High-Performance Digital Marketing
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            DigiLabs builds powerful, scalable digital strategies designed to boost visibility,
            drive conversions, and accelerate business growth.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/contact">
              <Button
                className="
                  px-8 py-4 text-lg rounded-full
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
                  text-white shadow-xl shadow-pink-500/30
                  hover:shadow-pink-500/50 hover:scale-105
                  transition-all
                "
              >
                Get Started
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                className="
                  px-8 py-4 text-lg rounded-full border-2
                  backdrop-blur-xl bg-white/10 dark:bg-black/20
                  shadow-inner text-white hover:bg-white/20 transition
                "
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE SECTION (RIGHT-ALIGNED, DYNAMIC SIZE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-end items-center w-full"
        >
          <div className="relative w-[60vw] max-w-[600px] h-auto lg:w-[40vw] lg:max-w-[650px]">

            {/* FLOAT ANIMATION */}
            <motion.div
              animate={{ y: [-15, 10, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/hero-banner.png"
                alt="Digital marketing illustration"
                width={600}
                height={600}
                priority
                className="
                  w-full h-auto select-none pointer-events-none
                  drop-shadow-[0_20px_55px_rgba(255,0,180,0.35)]
                "
              />
            </motion.div>

            {/* GLASS SHADOW BACK */}
            <div
              className="
                absolute inset-0 
                rounded-3xl 
                bg-white/10 dark:bg-white/5 
                backdrop-blur-2xl 
                border border-white/20 
                shadow-2xl 
                -z-10
                translate-y-8
              "
            ></div>

            {/* NEON HALO */}
            <div
              className="
                absolute inset-0 
                rounded-full 
                bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
                opacity-25 
                blur-[100px] 
                -z-20
              "
            ></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
