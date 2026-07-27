import { motion } from "framer-motion";
import { FaClock, FaSignal, FaArrowRight, FaChartLine } from "react-icons/fa";
import { courses } from "../data/content";

export default function Courses() {
  return (
    <section id="courses" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">CURRICULUM</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Courses Built for <span className="text-gradient-gold">Every Stage</span>
          </h2>
          <p className="mt-4 text-text-gray">
            From your first candlestick to institutional order flow — a structured path forward.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 lg:grid-cols-1">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="gradient-border glass group mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 md:flex-row"
            >
              <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${c.gradient} bg-bg-secondary md:h-auto md:w-1/3`}>
                <FaChartLine className="text-5xl text-white/10 transition-transform duration-500 group-hover:scale-125 group-hover:text-white/15" />
                <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-semibold text-gold">
                  {c.level}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">{c.desc}</p>

                {c.subheadings && (
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {c.subheadings.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-text-gray">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex items-center justify-between text-xs text-text-gray">
                  <span className="flex items-center gap-1.5"><FaClock /> {c.duration}</span>
                  <span className="flex items-center gap-1.5"><FaSignal /> {c.level}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-display text-xl font-bold text-white">{c.price}</span>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 rounded-full btn-gold px-4 py-2 text-xs font-semibold"
                  >
                    Enroll <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
