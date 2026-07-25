import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";
import Counter from "./Counter";

const candles = [
  { h: 40, o: 20, up: true }, { h: 60, o: 30, up: true }, { h: 35, o: 55, up: false },
  { h: 70, o: 40, up: true }, { h: 30, o: 60, up: false }, { h: 65, o: 25, up: true },
  { h: 50, o: 45, up: true }, { h: 42, o: 68, up: false }, { h: 78, o: 38, up: true },
  { h: 33, o: 58, up: false }, { h: 60, o: 20, up: true }, { h: 48, o: 52, up: false },
];

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
                  <p className="font-display text-xl font-bold text-white">2,384.62</p>
                </div>
                <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                  +0.84%
                </span>
              </div>

              {/* Candlestick chart */}
              <svg viewBox="0 0 320 160" className="mt-4 h-40 w-full overflow-visible">
                <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="80" x2="320" y2="80" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.05)" />
                {candles.map((c, i) => {
                  const x = i * 27 + 6;
                  const top = 160 - c.h - c.o;
                  return (
                    <g key={i} style={{ transformOrigin: `${x + 5}px 160px` }}>
                      <line x1={x + 5} y1={top - 8} x2={x + 5} y2={top + c.h + 8} stroke={c.up ? "#3B82F6" : "#FFD700"} strokeWidth="1" opacity="0.5" />
                      <rect
                        x={x} y={top} width="10" height={c.h}
                        fill={c.up ? "#3B82F6" : "#FFD700"}
                        rx="1.5"
                        opacity="0.9"
                        style={{ animation: `candlePulse ${2 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
                      />
                    </g>
                  );
                })}
                <polyline
                  points="5,90 30,70 55,95 80,60 105,100 130,65 155,80 180,50 205,85 230,55 255,90 280,60 315,75"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="2"
                  className="animate-draw-line"
                />
              </svg>

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
