import { Card } from "@/components/ui/card"
import QuoteButton from "@/components/QuoteButton"

const sectors = [
  {
    category: "Residential & Commercial",
    services: [
      {
        title: "Residential Construction",
        icon: "home",
        description: "Crafting beautiful, custom homes that blend structural integrity with stunning aesthetics. We work closely with you to bring your dream home to life, exceeding expectations at every step.",
        link: "#",
      },
      {
        title: "Commercial Construction",
        icon: "building-office",
        description: "Creating dynamic commercial spaces that combine functionality with visual appeal. From office buildings to retail spaces, we deliver efficient, modern solutions for your business needs.",
        link: "#",
      },
      {
        title: "Renovations & Remodeling",
        icon: "home-modern",
        description: "Transform your space with our expert renovation services. Whether it's a kitchen update, bathroom remodel, or whole-home transformation, we create custom solutions that fit your vision and budget.",
        link: "#",
      },
    ],
  },
  {
    category: "Specialized Services",
    services: [
      {
        title: "Land Subdivision",
        icon: "map",
        description: "Expert land subdivision services that maximize your property's potential. We handle all aspects of the process, ensuring compliance and optimal land use for your development needs.",
        link: "#",
      },
      {
        title: "Road Construction",
        icon: "road",
        description: "Comprehensive road construction services delivered with precision and expertise. From planning to execution, we ensure durable, high-quality infrastructure that stands the test of time.",
        link: "#",
      },
      {
        title: "Landscaping & Outdoor Living",
        icon: "leaf",
        description: "Create your perfect outdoor sanctuary with our landscaping services. From elegant patios and decks to lush gardens and water features, we design outdoor spaces that enhance your lifestyle.",
        link: "#",
      },
    ],
  },
]

export default function SectionSectors() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tailored construction solutions for both individuals and businesses,
            delivering excellence in every project we undertake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sectors.map((category) => (
            <div key={category.category} className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-8">{category.category}</h3>
              <div className="space-y-6">
                {category.services.map((service) => (
                  <Card 
                    key={service.title} 
                    className="group transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start p-6">
                      <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <QuoteButton 
                          trigger={
                            <button className="inline-flex items-center text-black font-semibold border-b-2 border-black pb-1 transition-all duration-300 hover:pb-2">
                              Get Started
                              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </button>
                          }
                          initialService={service.title}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 