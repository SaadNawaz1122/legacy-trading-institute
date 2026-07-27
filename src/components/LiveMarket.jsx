import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import TradingViewAdvancedWidget from "./TradingViewAdvancedWidget";

export default function LiveMarket() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">LIVE MARKET</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Track the Markets We <span className="text-gradient-gold">Teach</span>
          </h2>
          <p className="mt-4 text-text-gray">Live, real-time price action for the instruments covered in every session.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -6% 0px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border glass mt-14 overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <FaCircle className="animate-pulse text-[8px] text-green-400" /> Live Chart
            </div>
            <span className="font-mono text-xs text-text-gray">Session: London / New York</span>
          </div>

          {/* Full-width live TradingView chart */}
          <div className="p-3 sm:p-5">
            <TradingViewAdvancedWidget symbol="OANDA:XAUUSD" height={620} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

