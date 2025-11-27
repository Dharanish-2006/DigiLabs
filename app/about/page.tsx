"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, Search, Puzzle, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 md:px-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-pink-500/20 blur-[130px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            We Transform Digital Growth with{" "}
            <span className="text-blue-600 dark:text-blue-400">Intelligence & Strategy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            DIGILABS Marketing is a results-driven digital agency specializing in transforming
            marketing habits. We combine strategic thinking, data analytics, and precise execution
            to solve your real business challenges.
          </p>
        </motion.div>
      </section>

      {/* Mission + Vision */}
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
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-white/20 to-white/5 dark:from-gray-800/20 dark:to-gray-900/10 p-8 rounded-3xl backdrop-blur-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Core Principles */}
      <section className="py-20 relative bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        {/* Neon Glow Circles */}
        <div className="absolute -top-16 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Our Core <span className="text-blue-600 dark:text-blue-400">Principles</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
                title: "Accountability",
                desc: "Every strategy is tied to measurable KPIs and transparent performance tracking.",
              },
              {
                icon: <Handshake className="w-10 h-10 text-blue-500" />,
                title: "Partnership",
                desc: "We operate as an extension of your internal team — aligned, committed, collaborative.",
              },
              {
                icon: <Search className="w-10 h-10 text-blue-500" />,
                title: "Clarity",
                desc: "Clear processes, clear communication, clear metrics — no guesswork, ever.",
              },
              {
                icon: <Puzzle className="w-10 h-10 text-blue-500" />,
                title: "Strategy First",
                desc: "We prioritize thoughtful planning before execution for maximum efficiency.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
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
                className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            We Don’t Just Market —{" "}
            <span className="text-blue-600 dark:text-blue-400">We Build Business Outcomes</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
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
