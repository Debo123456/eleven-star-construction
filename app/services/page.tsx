import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

const services = [
  {
    category: "Residential & Commercial",
    services: [
      {
        title: "Residential Construction",
        icon: "home",
        description: "Crafting beautiful, custom homes that blend structural integrity with stunning aesthetics. We work closely with you to bring your dream home to life, exceeding expectations at every step.",
      },
      {
        title: "Commercial Construction",
        icon: "building-office",
        description: "Creating dynamic commercial spaces that combine functionality with visual appeal. From office buildings to retail spaces, we deliver efficient, modern solutions for your business needs.",
      },
      {
        title: "Renovations & Remodeling",
        icon: "home-modern",
        description: "Transform your space with our expert renovation services. Whether it's a kitchen update, bathroom remodel, or whole-home transformation, we create custom solutions that fit your vision and budget.",
      },
    ],
  },
  {
    category: "Specialized Services",
    services: [
      {
        title: "Land Subdivision",
        icon: "map",
        description: "Expert land subdivision services that maximize your property&apos;s potential. We handle all aspects of the process, ensuring compliance and optimal land use for your development needs.",
      },
      {
        title: "Road Construction",
        icon: "road",
        description: "Comprehensive road construction services delivered with precision and expertise. From planning to execution, we ensure durable, high-quality infrastructure that stands the test of time.",
      },
      {
        title: "Landscaping & Outdoor Living",
        icon: "leaf",
        description: "Create your perfect outdoor sanctuary with our landscaping services. From elegant patios and decks to lush gardens and water features, we design outdoor spaces that enhance your lifestyle.",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of construction services, designed to bring your vision to life with quality and precision.
            </p>
          </div>

          {services.map((category) => (
            <div key={category.category} className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">{category.category}</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <Card 
                    key={service.title} 
                    className="group transform transition-all duration-300 hover:scale-105 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]"
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-brand-green" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                      <QuoteButton 
                        trigger={
                          <button className="w-full mt-6 text-brand-green hover:text-white font-semibold transition-all duration-300 py-2 border border-brand-green rounded-xl hover:bg-brand-green shadow-[0_2px_10px_-2px_rgba(0,166,81,0.2)] hover:shadow-[0_4px_15px_-2px_rgba(0,166,81,0.3)]">
                            Get Started
                          </button>
                        }
                        initialService={service.title}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 