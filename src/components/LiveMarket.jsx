import { motion } from "framer-motion";
import { FaCaretUp, FaCaretDown, FaCircle } from "react-icons/fa";
import { markets } from "../data/content";

export default function LiveMarket() {
  const doubled = [...markets, ...markets];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">LIVE MARKET</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Track the Markets We <span className="text-gradient-gold">Teach</span>
          </h2>
          <p className="mt-4 text-text-gray">A frontend preview of the instruments covered in every live session.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border glass mt-14 overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <FaCircle className="animate-pulse text-[8px] text-green-400" /> Market Watch
            </div>
            <span className="font-mono text-xs text-text-gray">Session: London / New York</span>
          </div>

          {/* Scrolling ticker */}
          <div className="overflow-hidden border-b border-white/10 py-3">
            <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
              {doubled.map((m, i) => (
                <span key={i} className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-text-gray">{m.symbol}</span>
                  <span className="text-white">{m.price}</span>
                  <span className={m.up ? "text-green-400" : "text-red-400"}>{m.change}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-text-gray">
                  <th className="px-6 py-3 font-medium">Symbol</th>
                  <th className="px-6 py-3 font-medium">Instrument</th>
                  <th className="px-6 py-3 font-medium">Price</th>
                  <th className="px-6 py-3 font-medium">Change</th>
                  <th className="px-6 py-3 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m) => (
                  <tr key={m.symbol} className="border-t border-white/5 transition-colors hover:bg-white/[0.03]">
                    <td className="px-6 py-4 font-mono font-semibold text-white">{m.symbol}</td>
                    <td className="px-6 py-4 text-text-gray">{m.name}</td>
                    <td className="px-6 py-4 font-mono text-white">{m.price}</td>
                    <td className={`px-6 py-4 font-mono ${m.up ? "text-green-400" : "text-red-400"}`}>{m.change}</td>
                    <td className="px-6 py-4">
                      <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
                        <polyline
                          points={m.up ? "0,20 12,15 24,17 36,8 48,10 60,3 70,5" : "0,4 12,8 24,6 36,14 48,12 60,19 70,17"}
                          stroke={m.up ? "#22c55e" : "#ef4444"}
                          strokeWidth="1.6"
                          fill="none"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
