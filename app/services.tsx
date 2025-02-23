import { Building2, Hammer, Ruler, Truck, HardHat, Wrench } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Infrastructure Development",
      description: "Comprehensive infrastructure solutions including highways, bridges, and transportation systems built to the highest standards of quality and safety.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Commercial Construction",
      description: "Expert commercial construction services delivering modern, efficient, and sustainable building solutions for businesses.",
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Project Management",
      description: "Professional project management ensuring timely delivery, cost efficiency, and superior quality control throughout the construction process.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Heavy Equipment Operations",
      description: "Specialized heavy equipment services with state-of-the-art machinery and experienced operators for complex construction projects.",
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Safety Consultation",
      description: "Industry-leading safety protocols and consultation services to ensure workplace safety and regulatory compliance.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance Services",
      description: "Comprehensive maintenance solutions to ensure the longevity and optimal performance of constructed infrastructure.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Eleven Star Construction delivers comprehensive construction and infrastructure 
            solutions with unmatched expertise and dedication to excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-black rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today to discuss how Eleven Star Construction can bring your vision to life.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
} 