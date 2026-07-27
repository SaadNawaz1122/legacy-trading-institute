import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";
import Counter from "./Counter";
import TradingViewMiniWidget from "./TradingViewMiniWidget";

export default function Hero() {
  const containerRef = useRef(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rX = useSpring(mvY, { stiffness: 60, damping: 15 });
  const rY = useSpring(mvX, { stiffness: 60, damping: 15 });

  const rotateX = useTransform(rX, [-40, 40], [8, -8]);
  const rotateY = useTransform(rY, [-40, 40], [-8, 8]);
  const floatX = useTransform(rY, [-40, 40], [-14, 14]);
  const floatY = useTransform(rX, [-40, 40], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mvX.set(e.clientX - rect.left - rect.width / 2);
    mvY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
            <FaChartLine /> PROFESSIONAL FOREX EDUCATION
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Master Forex Trading{" "}
            <span className="text-gradient-gold">Like a Professional</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-gray md:text-lg">
            Learn professional Forex trading through practical education, live
            market analysis, proven strategies, and expert mentorship.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#courses" className="btn-gold flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold">
              Enroll Now <FaArrowRight />
            </a>
            <a href="#courses" className="btn-outline flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold glass">
              Explore Courses
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                <Counter to={5} suffix="+" />
              </p>
              <p className="mt-1 text-xs text-text-gray">Years Combined Experience</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                <Counter to={1} />
              </p>
              <p className="mt-1 text-xs text-text-gray">Forex Trading</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                <Counter to={24} suffix="/7" />
              </p>
              <p className="mt-1 text-xs text-text-gray">Market Coverage</p>
            </div>
          </div>
        </motion.div>

        {/* Right column — signature 3D trading dashboard */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mvX.set(0); mvY.set(0); }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{ perspective: 1200 }}
          className="relative mx-auto h-[420px] w-full max-w-lg md:h-[480px]"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full"
          >
            {/* Main glass dashboard panel */}
            <div className="gradient-border glass absolute inset-0 rounded-2xl p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-xs text-text-gray">XAU/USD · Gold Spot</p>
                  <p className="font-display text-sm font-semibold text-white">Live Chart</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> LIVE
                </span>
              </div>

              {/* Live chart (real-time data via TradingView) */}
              <div className="mt-4 h-40 w-full overflow-hidden rounded-lg">
                <TradingViewMiniWidget symbol="OANDA:XAUUSD" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-blue-500/10 px-3 py-2 text-center">
                  <p className="text-[10px] tracking-wide text-blue-400">BUY</p>
                  <p className="font-mono text-sm text-white">2,383.10</p>
                </div>
                <div className="rounded-lg bg-lime-500/10 px-3 py-2 text-center">
                  <p className="text-[10px] tracking-wide text-gold">SELL</p>
                  <p className="font-mono text-sm text-white">2,384.90</p>
                </div>
              </div>
            </div>

            {/* Floating badge — EUR/USD */}
            <motion.div
              style={{ x: floatX, y: floatY, transform: "translateZ(60px)" }}
              className="animate-float glass gradient-border absolute -left-8 top-6 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-[10px] text-text-gray">EUR/USD</p>
              <p className="font-mono text-sm font-semibold text-green-400">1.0847 ▲</p>
            </motion.div>

            {/* Floating badge — BTC */}
            <motion.div
              style={{ x: floatX, y: floatY, transform: "translateZ(80px)" }}
              className="animate-float-delay glass gradient-border absolute -right-6 bottom-8 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-[10px] text-text-gray">BTC/USD</p>
              <p className="font-mono text-sm font-semibold text-red-400">67,204 ▼</p>
            </motion.div>

            {/* Floating currency chip */}
            <motion.div
              style={{ x: floatX, y: floatY, transform: "translateZ(40px)" }}
              className="animate-float-slow absolute -bottom-6 left-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-lime-700 font-display text-lg font-black text-bg shadow-xl"
            >
              $
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
