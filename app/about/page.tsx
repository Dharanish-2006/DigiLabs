"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, Search, Puzzle, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <section className="relative overflow-hidden py-24 px-6 md:px-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Transform Digital Growth with{" "}
            <span className="text-blue-600">Intelligence & Strategy</span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            DIGILABS Marketing is a results-driven digital agency specializing in
            transforming the marketing habits of businesses.  
            We combine strategic thinking, data analytics, and precise execution
            to solve your real business challenges.
          </p>
        </motion.div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Enabling businesses with intelligent digital solutions that deliver
            predictable growth, measurable value, and long-term competitive advantage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become the trusted strategic partner for organizations seeking
            high-quality, sustainable digital transformation and scalable growth.
          </p>
        </motion.div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core <span className="text-blue-600">Principles</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
                title: "Accountability",
                desc: "Every strategy is tied to measurable KPIs and transparent performance tracking.",
              },
              {
                icon: <Handshake className="w-10 h-10 text-blue-600" />,
                title: "Partnership",
                desc: "We operate as an extension of your internal team — aligned, committed, collaborative.",
              },
              {
                icon: <Search className="w-10 h-10 text-blue-600" />,
                title: "Clarity",
                desc: "Clear processes, clear communication, clear metrics — no guesswork, ever.",
              },
              {
                icon: <Puzzle className="w-10 h-10 text-blue-600" />,
                title: "Strategy First",
                desc: "We prioritize thoughtful planning before execution for maximum efficiency.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
                title: "Long-Term Value",
                desc: "Sustainable, compounding growth over short-term vanity metrics.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Don’t Just Market —  
            <span className="text-blue-600">We Build Business Outcomes</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We operate with a business-first mindset — focused on outcomes,
            efficiency, and alignment with your organizational goals.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
