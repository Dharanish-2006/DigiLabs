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
              bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200
              text-transparent bg-clip-text drop-shadow-[0_4px_15px_rgba(255,0,150,0.35)]
            "
          >
            Transform Your Business With
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
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
                className="
                  px-8 py-4 text-lg rounded-full
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
                  text-white shadow-xl shadow-pink-500/30
                  hover:shadow-pink-500/50 hover:scale-105
                  transition-all
                "
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE SECTION UPDATED (BIGGER BOX + 3D + GLASS + NEON) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center w-full"
        >
          {/* IMAGE WRAPPER */}
          <div className="relative w-[70vw] max-w-[750px] h-auto lg:w-[45vw] lg:max-w-[780px]">

            {/* FLOAT ANIMATION */}
            <motion.div
              animate={{ y: [-18, 12, -18] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <Image
                src="/hero.png"
                alt="Digital marketing illustration"
                width={800}
                height={600}
                priority
                className="
                  w-full h-auto select-none pointer-events-none
                  drop-shadow-[0_25px_70px_#ffff]
                "
              />
            </motion.div>

            {/* 🔥 BIGGER GLASS BACK PANEL */}
            <div
              className="
                absolute inset-0 
                rounded-3xl 
                bg-white/10 dark:bg-white/5
                backdrop-blur-3xl
                border border-white/30 dark:border-white/10
                shadow-[0_0_60px_rgba(255,50,200,0.35)]
                scale-110
                rotate-1.5
                -z-10
              "
            ></div>

            {/* 🔥 STRONGER NEON HALO */}
            <div
              className="
                absolute -inset-6
                rounded-3xl
                bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                blur-[130px]
                opacity-40
                -z-20
              "
            ></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
