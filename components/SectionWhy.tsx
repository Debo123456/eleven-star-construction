"use client"
import { Shield, Star, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function SectionWhy() {
  const features = [
    {
      icon: Shield,
      title: "Proven Results",
      points: ["35+ projects delivered", "95% satisfaction rate", "Jamaica-wide coverage"]
    },
    {
      icon: Star,
      title: "Quality First",
      points: ["Premium materials", "Certified builders", "Code compliant"]
    },
    {
      icon: Clock,
      title: "On Schedule",
      points: ["Timely completion", "Clear milestones", "No surprises"]
    },
    {
      icon: Award,
      title: "Expert Team",
      points: ["50+ years experience", "Local knowledge", "Skilled craftsmen"]
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D1117] to-[#0B0F14] relative overflow-hidden">
      {/* Subtle construction pattern */}
      <div className="absolute inset-0 bg-construction-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-emerald-400" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-prose mx-auto text-center font-light leading-relaxed">
            Quality work. On time. Every time.
          </p>
        </motion.div>

        {/* Grid with equal height cards - using borders instead of dark backgrounds */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {/* Card with subtle border - no dark background */}
              <div className="h-full flex flex-col group p-6 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-emerald-400/40 hover:bg-white/2">
                {/* Consistent icon style - rounded circle with thin line icon */}
                <div className="w-16 h-16 mb-4 bg-emerald-400/10 rounded-full flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-400/20 transition-all duration-300 flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white leading-snug">{feature.title}</h3>
                {/* List grows to fill available space */}
                <ul className="space-y-2.5 flex-grow">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2.5 flex-shrink-0"></span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="/contact" className="inline-block bg-brand-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green-light transition-all duration-300 hover:scale-105">
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
