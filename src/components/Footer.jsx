import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane, FaPaperPlane } from "react-icons/fa";
import { navLinks, courses, resources } from "../data/content";
import logoIcon from "../assets/logo-icon.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg-secondary/40 pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold">
              <img src={logoIcon} alt="Legacy Trading Institute" className="h-10 w-auto" />
              Legacy <span className="text-gradient-gold">Trading</span> Institute
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-gray">
              Professional Forex trading education built on structure, discipline, and real mentorship.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-text-gray transition-colors hover:bg-gold/15 hover:text-gold"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-gray transition-colors hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Courses</h4>
            <ul className="mt-4 space-y-2.5">
              {courses.slice(0, 5).map((c) => (
                <li key={c.name}>
                  <a href="#courses" className="text-sm text-text-gray transition-colors hover:text-gold">{c.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {resources.slice(0, 5).map((r) => (
                <li key={r.title}>
                  <a href="#resources" className="text-sm text-text-gray transition-colors hover:text-gold">{r.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gradient-border glass mb-12 flex flex-col items-center justify-between gap-5 rounded-2xl p-7 sm:flex-row">
          <div>
            <h4 className="font-display text-base font-semibold text-white">Join the Market Briefing</h4>
            <p className="mt-1 text-sm text-text-gray">Weekly Gold and Forex insight, straight to your inbox.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 sm:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-text-gray/60 outline-none"
            />
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full btn-gold">
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-text-gray sm:flex-row">
          <p>© {new Date().getFullYear()} Legacy Trading Institute. All rights reserved.</p>
          <p>Educational content only. Trading involves risk.</p>
        </div>
      </div>
    </footer>
  );
}
