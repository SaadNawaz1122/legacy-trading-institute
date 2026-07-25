import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaUsers, FaMedal } from "react-icons/fa";

const cards = [
  { icon: FaUsers, title: "Who We Are", text: "A professional Forex trading academy built by career traders, teaching the methods institutions actually use." },
  { icon: FaBullseye, title: "Our Mission", text: "To turn discipline and structure into a repeatable trading process — not shortcuts or guesswork." },
  { icon: FaEye, title: "Our Vision", text: "A global community of traders who treat the markets as a craft worth mastering, not a game of chance." },
  { icon: FaMedal, title: "Why u choose Legacy", text: "Practical mentorship, live analysis, and a curriculum that mirrors how professional desks actually trade." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">ABOUT THE INSTITUTE</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Built by traders, <span className="text-gradient-gold">for traders</span> who take the craft seriously
            </h2>
            <p className="mt-6 text-text-gray leading-relaxed">
              Legacy Trading Institute exists for one reason: to close the gap between
              retail trading and how professional desks actually operate. Every course,
              mentor session, and market breakdown is built around a single standard —
              methods that hold up under real market pressure.
            </p>
            <p className="mt-4 text-text-gray leading-relaxed">
              We combine structured education with live mentorship so you're never
              learning in isolation. From your first lesson on market structure to
              advanced Smart Money Concepts, every step is designed to compound.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass gradient-border group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-gold/20 text-gold">
                  <c.icon className="text-lg" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
