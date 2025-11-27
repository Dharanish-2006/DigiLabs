"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, Search, Puzzle, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="text-white bg-[#0F172A] dark:bg-gray-950 relative overflow-hidden">

      {/* 🔵 Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-500/30 blur-[130px] rounded-full"></div>
        <div className="absolute top-[30%] left-[50%] w-[350px] h-[350px] bg-blue-500/20 blur-[110px] rounded-full"></div>
      </div>

      <Navbar />

      {/* Hero-style Heading */}
      <section className="py-24 px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 text-transparent bg-clip-text drop-shadow-[0_4px_15px_rgba(255,0,150,0.4)]">
            We Transform Digital Growth with <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Intelligence & Strategy
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
            DIGILABS Marketing is a results-driven digital agency specializing in transforming marketing habits. We combine strategic thinking, data analytics, and precise execution to solve your real business challenges.
          </p>
        </motion.div>
      </section>

      {/* Mission + Vision Glass Cards */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Our Mission",
            text: "Enabling businesses with intelligent digital solutions that deliver predictable growth, measurable value, and long-term competitive advantage.",
            from: "-30",
          },
          {
            title: "Our Vision",
            text: "To become the trusted strategic partner for organizations seeking high-quality, sustainable digital transformation and scalable growth.",
            from: "30",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: parseInt(item.from) }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              {item.title}
            </h2>
            <p className="text-gray-200">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Core Principles */}
      <section className="py-20 relative">
        <div className="absolute -top-16 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            Our Core <span className="text-blue-400">Principles</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
                title: "Accountability",
                desc: "Every strategy is tied to measurable KPIs and transparent performance tracking.",
              },
              {
                icon: <Handshake className="w-10 h-10 text-blue-400" />,
                title: "Partnership",
                desc: "We operate as an extension of your internal team — aligned, committed, collaborative.",
              },
              {
                icon: <Search className="w-10 h-10 text-blue-400" />,
                title: "Clarity",
                desc: "Clear processes, clear communication, clear metrics — no guesswork, ever.",
              },
              {
                icon: <Puzzle className="w-10 h-10 text-blue-400" />,
                title: "Strategy First",
                desc: "We prioritize thoughtful planning before execution for maximum efficiency.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
                title: "Long-Term Value",
                desc: "Sustainable, compounding growth over short-term vanity metrics.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            We Don’t Just Market —{" "}
            <span className="text-blue-400">We Build Business Outcomes</span>
          </h2>

          <p className="text-gray-200 mb-8">
            We operate with a business-first mindset — focused on outcomes,
            efficiency, and alignment with your organizational goals.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

    </main>
  );
}
