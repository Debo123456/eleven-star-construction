import { Building2, Hammer, Ruler, Truck, HardHat, Wrench } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Infrastructure Development",
      description: "Eleven Star Construction excels in comprehensive infrastructure solutions, from highways and bridges to complex transportation systems. Our experienced team ensures every project meets the highest standards of quality and safety.",
      features: [
        "Highway & Bridge Construction",
        "Transportation Infrastructure",
        "Underground Utilities",
        "Structural Engineering"
      ]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Commercial Construction",
      description: "We deliver state-of-the-art commercial construction services, creating modern and efficient spaces that meet your business needs while maintaining sustainable building practices.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Industrial Facilities",
        "Warehouses"
      ]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Project Management",
      description: "Our expert project management team ensures seamless execution from start to finish, maintaining strict timelines and budgets while delivering superior quality results.",
      features: [
        "Timeline Management",
        "Budget Control",
        "Quality Assurance",
        "Risk Management"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Heavy Equipment Operations",
      description: "Eleven Star Construction maintains a modern fleet of heavy equipment operated by skilled professionals, ensuring efficient and safe project execution.",
      features: [
        "Equipment Operation",
        "Site Preparation",
        "Material Handling",
        "Excavation Services"
      ]
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Safety Consultation",
      description: "Safety is our top priority. We provide comprehensive safety consultation services to ensure all projects maintain the highest standards of workplace safety.",
      features: [
        "Safety Audits",
        "Compliance Training",
        "Risk Assessment",
        "Safety Planning"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance Services",
      description: "We offer ongoing maintenance solutions to protect your investment and ensure the longevity of your infrastructure and facilities.",
      features: [
        "Preventive Maintenance",
        "Repair Services",
        "Infrastructure Upkeep",
        "Facility Management"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering excellence in construction through comprehensive solutions 
            and unmatched expertise.
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
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            Contact Eleven Star Construction today to discuss how we can bring your vision to life.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
} 