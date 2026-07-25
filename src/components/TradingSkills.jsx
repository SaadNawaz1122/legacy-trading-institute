import { motion } from "framer-motion";
import { tradingSkills } from "../data/content";

export default function TradingSkills() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-bg-secondary/40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">SKILLSET</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Trading <span className="text-gradient-gold">Skills</span> You'll Build
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3.5">
          {tradingSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 12) * 0.04 }}
              whileHover={{ scale: 1.07, y: -3 }}
              className="gradient-border glass cursor-default rounded-full px-6 py-3 text-sm font-medium text-gray-100 transition-colors hover:text-gold"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
