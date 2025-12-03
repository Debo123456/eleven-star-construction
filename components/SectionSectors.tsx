"use client"
import { Card } from "@/components/ui/card"
import QuoteButton from "@/components/QuoteButton"
import { motion } from "framer-motion"
import { Home, Building2, Wrench, Map, Construction, Trees, ArrowRight } from "lucide-react"
import { useState } from "react"

const sectors = [
  {
    category: "Residential & Commercial",
    services: [
      {
        title: "Residential Construction",
        icon: Home,
        description: "Custom homes built to last — blending craftsmanship with modern design.",
      },
      {
        title: "Commercial Construction",
        icon: Building2,
        description: "Functional business spaces — from offices to retail, built for success.",
      },
      {
        title: "Renovations & Remodeling",
        icon: Wrench,
        description: "Transform existing spaces — kitchens, bathrooms, or full-home makeovers.",
      },
    ],
  },
  {
    category: "Specialized Services",
    services: [
      {
        title: "Land Subdivision",
        icon: Map,
        description: "Property development done right — maximize potential with expert planning.",
      },
      {
        title: "Road Construction",
        icon: Construction,
        description: "Durable infrastructure — driveways, access roads, and asphalt paving.",
      },
      {
        title: "Landscaping & Outdoor Living",
        icon: Trees,
        description: "Beautiful outdoor spaces — patios, decks, gardens, and water features.",
      },
    ],
  },
]

// Clickable service card component
function ServiceCard({ service, serviceIndex }: { service: typeof sectors[0]['services'][0], serviceIndex: number }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
    >
      {/* Entire card is clickable */}
      <Card 
        onClick={() => setIsQuoteOpen(true)}
        className="group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] rounded-xl bg-white shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 border-0"
        role="button"
        tabIndex={0}
        aria-label={`Request a quote for ${service.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsQuoteOpen(true)
          }
        }}
      >
        <div className="flex items-start p-8">
          {/* Consistent icon style - rounded circle with thin line icon */}
          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-brand-green/10 group-hover:scale-110">
            <service.icon className="w-8 h-8 text-gray-700 transition-all duration-500 group-hover:text-brand-green" strokeWidth={1.5} />
          </div>
          <div className="ml-6 flex-1">
            <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-brand-green leading-snug">
              {service.title}
            </h4>
            <p className="text-base md:text-lg text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-700 font-light leading-relaxed">
              {service.description}
            </p>
            {/* Subtle text link instead of button */}
            <span className="inline-flex items-center text-brand-green font-medium transition-all duration-300 group-hover:translate-x-1">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Card>
      
      {/* Hidden QuoteButton that opens on card click */}
      <QuoteButton 
        trigger={
          <span 
            className="hidden"
            ref={(el) => {
              if (el && isQuoteOpen) {
                el.click()
                setIsQuoteOpen(false)
              }
            }}
          />
        }
        initialService={service.title}
      />
    </motion.div>
  )
}

export default function SectionSectors() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FB] relative overflow-hidden">
      {/* Micro-brand pattern overlay */}
      <div className="absolute inset-0 bg-construction-grid opacity-100 pointer-events-none" />
      
      {/* Decorative ruler marks at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-ruler-marks opacity-50 rotate-180" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              What We Build
              <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-green" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-prose mx-auto text-center font-light leading-relaxed">
            Full-service construction — residential, commercial & infrastructure
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {sectors.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 leading-tight relative inline-block w-full uppercase tracking-premium">
                <span className="relative inline-block pb-3">
                  {category.category}
                  <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-brand-green" />
                </span>
              </h3>
              <div className="space-y-8">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard 
                    key={service.title}
                    service={service}
                    serviceIndex={serviceIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
