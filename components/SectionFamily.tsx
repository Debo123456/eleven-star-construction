import { ArrowUpRight } from "lucide-react"

const partners = [
  {
    name: "Engineering Excellence Corp",
    logo: "/images/partners/partner-1.svg",
    quote: "Eleven Star Construction has consistently delivered exceptional results on our most challenging infrastructure projects.",
    role: "Engineering Partner",
    speaker: "John Smith, CEO"
  },
  {
    name: "Advanced Materials Inc",
    logo: "/images/partners/partner-2.svg",
    quote: "Their commitment to innovation and quality has made them our go-to partner for major construction initiatives.",
    role: "Materials Supplier",
    speaker: "Sarah Johnson, Director"
  },
  {
    name: "Smart Infrastructure Solutions",
    logo: "/images/partners/partner-3.svg",
    quote: "Together, we've pioneered new approaches to sustainable infrastructure development.",
    role: "Technology Partner",
    speaker: "Michael Chen, CTO"
  }
]

export default function SectionFamily() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Strategic Partners</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Eleven Star Construction leverages powerful industry partnerships 
            to deliver unmatched capabilities and resources for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-20 mb-6 bg-white/10 rounded-lg flex items-center justify-center p-4">
                <div className="text-lg font-semibold text-white">
                  {partner.name}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm">{partner.role}</p>
              </div>
              <blockquote className="text-gray-300 mb-4 italic">
                &quot;{partner.quote}&quot;
              </blockquote>
              <p className="text-sm text-gray-400">- {partner.speaker}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-white mt-4 hover:text-gray-300 transition-colors"
              >
                Learn More 
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Together with our partners, Eleven Star Construction is equipped to handle 
            projects of any scale with precision and excellence.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
} 