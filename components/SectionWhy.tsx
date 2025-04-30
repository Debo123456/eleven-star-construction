"use client"
import { Shield, Star, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function SectionWhy() {
  const features = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Years of successful projects across Jamaica, building trust and delivering excellence in every community we serve."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality, ensuring every project meets both local building codes and your expectations."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and work diligently to complete your project on schedule, every time."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Our skilled local team brings years of experience and a deep understanding of Jamaican construction needs to every project."
    }
  ]

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Eleven Star Construction
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            As your trusted local construction partner, we combine Jamaican craftsmanship 
            with modern expertise to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-light transition-colors duration-300 transform hover:scale-105">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  )
} 