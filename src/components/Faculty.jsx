import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";


const faculty = [
  {
    name: "Muhammad Moaaz",
    role: "CEO",
    years: "5+ Years",
    image: "/images/CEO.jpg",
  },
  {
    name: "Shahzaib Hassan",
    role: "Founder",
    years: "5+ Years",
    image: "/images/Founder.jpg",
  },
  {
    name: "Mian Moneeb Sajid ADV",
    role: "Director and Legal Advisor",
    years: "5+ Years",
    image: "/images/Advisor.jpg",
  },
  {
    name: "Adnan Arif",
    role: "Marketing Head",
    years: "5+ Years",
    image: "/images/Head.jpg",
  },
   {
    name: "Ahmad Raza",
    role: "Expert Analyst",
    years: "3+ Years",
    image: "/images/Analyst.jpg",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
            MEET THE MENTORS
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Our <span className="text-gradient-gold">Faculty</span>
          </h2>

          <p className="mt-4 text-text-gray">
            Professional traders who mentor the same way they trade —
            with discipline and precision.
          </p>
        </div>


        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">

          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.1,
              }}
              className="gradient-border glass group rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-2 md:p-8"
            >

              {/* Faculty Image */}
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-gold shadow-lg">
  <img
    src={f.image}
    alt={f.name}
    className="h-full w-full object-cover object-top"
  />
</div>


              <h3 className="mt-6 font-display text-lg font-semibold text-white">
                {f.name}
              </h3>


              <p className="mt-1 text-sm font-medium text-gold">
                {f.role}
              </p>


              <p className="mt-3 text-xs text-text-gray">
                {f.years} Experience
              </p>


              <p className="mt-1 text-xs text-text-gray">
                {f.spec}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}