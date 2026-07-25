import { motion } from "framer-motion";
import {
  FaUserTie, FaChartArea, FaShieldAlt, FaBrain,
  FaTasks, FaCoins, FaBell, FaRoad,
} from "react-icons/fa";
import { whyChooseUs } from "../data/content";

const iconMap = {
  mentor: FaUserTie, chart: FaChartArea, shield: FaShieldAlt, brain: FaBrain,
  practical: FaTasks, smc: FaCoins, daily: FaBell, career: FaRoad,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">THE LEGACY STANDARD</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Why Traders Choose <span className="text-gradient-gold">Legacy</span>
          </h2>
          <p className="mt-4 text-text-gray">
            Every part of the program is built around one goal: making you a consistent, disciplined trader.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="gradient-border glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,215,0,0.08)]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-blue-500/20 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-xl" />
                </div>
                <h3 className="relative font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-text-gray">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
