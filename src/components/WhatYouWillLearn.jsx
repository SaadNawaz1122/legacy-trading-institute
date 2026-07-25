import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { learnTopics } from "../data/content";

export default function WhatYouWillLearn() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">CURRICULUM CORE</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            What You Will <span className="text-gradient-gold">Learn</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnTopics.map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="glass flex items-center gap-4 rounded-xl border border-white/5 px-5 py-4 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <FaCheck className="text-xs" />
              </span>
              <span className="text-sm font-medium text-gray-100">{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
