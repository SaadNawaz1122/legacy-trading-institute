import { FaDollarSign, FaEuroSign, FaYenSign, FaPoundSign } from "react-icons/fa";

const icons = [
  { Icon: FaDollarSign, top: "12%", left: "8%", delay: "animate-float" },
  { Icon: FaEuroSign, top: "22%", left: "88%", delay: "animate-float-slow" },
  { Icon: FaYenSign, top: "68%", left: "5%", delay: "animate-float-delay" },
  { Icon: FaPoundSign, top: "75%", left: "92%", delay: "animate-float" },
];

export default function AnimatedBackground({ variant = "full" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid bg-grid-animated" />

      {/* Gradient glow blobs */}
      <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-lime-400/10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {variant === "full" && (
        <>
          {icons.map(({ Icon, top, left, delay }, i) => (
            <div
              key={i}
              className={`absolute text-2xl md:text-3xl text-gold/20 ${delay}`}
              style={{ top, left }}
            >
              <Icon />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
