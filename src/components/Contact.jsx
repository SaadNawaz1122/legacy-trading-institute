import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">GET IN TOUCH</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Start Your <span className="text-gradient-gold">Trading Journey</span>
          </h2>
          <p className="mt-4 text-text-gray">Have a question about our courses or mentorship? Send us a message.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -6% 0px" }}
            transition={{ duration: 0.6 }}
            className="gradient-border glass rounded-2xl p-7 lg:col-span-3 md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-text-gray">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-text-gray/60 outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-text-gray">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-text-gray/60 outline-none transition-colors focus:border-gold"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-text-gray">Phone</label>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-text-gray/60 outline-none transition-colors focus:border-gold"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-text-gray">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-text-gray/60 outline-none transition-colors focus:border-gold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold sm:w-auto sm:px-10"
            >
              {submitted ? "Message Sent" : "Send Message"} <FaPaperPlane className="text-xs" />
            </button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-xs text-green-400"
              >
                Thanks — this is a demo form, no message was actually sent.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -6% 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="gradient-border glass space-y-5 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <FaMapMarkerAlt />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Office Address</p>
                  <p className="mt-1 break-words text-sm text-text-gray">Pansera Road , Gojra opposite to CakeTime</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <FaPhoneAlt />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a href="tel:+923083797758" className="mt-1 block break-words text-sm text-text-gray transition-colors hover:text-gold">
                    +92 3083797758
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <FaEnvelope />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:contact@legacyittradingagency.com" className="mt-1 block break-words text-sm text-text-gray transition-colors hover:text-gold">
                    contact@legacyittradingagency.com
                  </a>
                </div>
              </div>
              <a
              href="https://wa.me/923083797758"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-500/15 py-3 text-sm font-semibold text-green-400 transition-colors hover:bg-green-500/25"
              >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
              </a>
                        </div>

            <div className="gradient-border glass h-44 rounded-2xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.400777580525!2d72.68170527522328!3d31.154152074383738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392301002d987a9b%3A0x89ba7193c0805c0f!2sTahir%20Sons%20Pharmacy!5e0!3m2!1sen!2s!4v1785002512441!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Legacy Trading Institute Location"
  />
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}