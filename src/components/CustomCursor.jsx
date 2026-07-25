import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const grow = (e) => {
      const target = e.target;
      if (target.closest("a, button, input, textarea, [data-cursor-grow]")) {
        ring.style.width = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(59,130,246,0.7)";
      } else {
        ring.style.width = "34px";
        ring.style.height = "34px";
        ring.style.borderColor = "rgba(132,204,22,0.5)";
      }
    };

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", grow);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", grow);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
