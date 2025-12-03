"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Home, Building2, Wrench, Map, Construction, Trees, ArrowRight } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"
import CloudinaryImage from "@/components/CloudinaryImage"
import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    category: "Residential & Commercial",
    services: [
      {
        title: "Residential Construction",
        icon: Home,
        description: "Crafting beautiful, custom homes that blend structural integrity with stunning aesthetics. We work closely with you to bring your dream home to life, exceeding expectations at every step.",
      },
      {
        title: "Commercial Construction",
        icon: Building2,
        description: "Creating dynamic commercial spaces that combine functionality with visual appeal. From office buildings to retail spaces, we deliver efficient, modern solutions for your business needs.",
      },
      {
        title: "Renovations & Remodeling",
        icon: Wrench,
        description: "Transform your space with our expert renovation services. Whether it's a kitchen update, bathroom remodel, or whole-home transformation, we create custom solutions that fit your vision and budget.",
      },
    ],
  },
  {
    category: "Specialized Services",
    services: [
      {
        title: "Land Subdivision",
        icon: Map,
        description: "Expert land subdivision services that maximize your property&apos;s potential. We handle all aspects of the process, ensuring compliance and optimal land use for your development needs.",
      },
      {
        title: "Road Construction",
        icon: Construction,
        description: "Comprehensive road construction services delivered with precision and expertise. From planning to execution, we ensure durable, high-quality infrastructure that stands the test of time.",
      },
      {
        title: "Landscaping & Outdoor Living",
        icon: Trees,
        description: "Create your perfect outdoor sanctuary with our landscaping services. From elegant patios and decks to lush gardens and water features, we design outdoor spaces that enhance your lifestyle.",
      },
    ],
  },
]

// Clickable service card component
function ServiceCard({ service }: { service: typeof services[0]['services'][0] }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  
  return (
    <>
      <Card 
        onClick={() => setIsQuoteOpen(true)}
        className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/15 border-0 h-full w-full flex flex-col"
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
        <CardHeader className="text-center flex-shrink-0">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-green/10 group-hover:scale-110 transition-all duration-300">
            <service.icon className="w-8 h-8 text-gray-700 group-hover:text-brand-green transition-all duration-300" strokeWidth={1.5} />
          </div>
          <CardTitle className="text-xl md:text-2xl text-gray-900 font-semibold group-hover:text-brand-green transition-colors duration-300">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="text-gray-600 text-left font-light leading-relaxed mb-4 flex-grow min-h-[120px]">
            {service.description}
          </p>
          {/* Subtle arrow indicator on hover */}
          <div className="flex items-center justify-center text-brand-green opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 mt-auto">
            <span className="text-sm font-medium mr-2">Get a quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </div>
        </CardContent>
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
    </>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Slim Hero Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <CloudinaryImage
          src="eleven-star/hero/hero-construction-2"
          alt="Construction services and building expertise"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
          quality="auto:good"
          crop="fill"
          gravity="center"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-[8]" />
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              Our Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-brand-green" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of construction services, designed to bring your vision to life with quality and precision.
          </p>
        </motion.div>
      </section>

      {/* Services Content */}
      <section>
        {services.map((category, index) => (
          <div 
            key={category.category} 
            className={`py-16 md:py-20 w-full ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 leading-tight uppercase tracking-premium">
                <span className="inline-block relative pb-3">
                  {category.category}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-brand-green" />
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                {category.services.map((service) => (
                  <div key={service.title} className="w-full">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
} 