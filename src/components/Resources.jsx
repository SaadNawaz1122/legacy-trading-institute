import { motion } from "framer-motion";
import {
  FaBlog, FaFilePdf, FaClipboardCheck, FaBook,
  FaNewspaper, FaCalculator, FaCalendarAlt, FaGraduationCap,
} from "react-icons/fa";
import { resources } from "../data/content";

const iconMap = {
  blog: FaBlog, pdf: FaFilePdf, checklist: FaClipboardCheck, journal: FaBook,
  news: FaNewspaper, calculator: FaCalculator, calendar: FaCalendarAlt, guide: FaGraduationCap,
};

export default function Resources() {
  return (
    <section id="resources" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">FREE ACCESS</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Free <span className="text-gradient-gold">Resources</span>
          </h2>
          <p className="mt-4 text-text-gray">Tools and reading to strengthen your process, at no cost.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => {
            const Icon = iconMap[r.icon];
            return (
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="gradient-border glass group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-gold/20 text-gold transition-transform duration-300 group-hover:rotate-6">
                  <Icon className="text-lg" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">{r.desc}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
