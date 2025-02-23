import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"

const sectors = [
  {
    title: "Highways & Bridges",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
    description: "Pioneering transportation infrastructure with state-of-the-art engineering and sustainable design practices.",
    link: "#",
  },
  {
    title: "Rail, Metro & Mass Transit",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80",
    description: "Connecting communities through innovative transit solutions and advanced railway construction.",
    link: "#",
  },
  {
    title: "Tunnels",
    img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80",
    description: "Expert tunnel construction utilizing cutting-edge technology and safety measures for complex underground projects.",
    link: "#",
  },
  {
    title: "Airports",
    img: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&q=80",
    description: "Building and modernizing aviation infrastructure to meet tomorrow's transportation needs.",
    link: "#",
  },
  {
    title: "Dams, Levees & Reservoirs",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80",
    description: "Creating robust water infrastructure solutions with precision engineering and environmental consideration.",
    link: "#",
  },
]

export default function SectionSectors() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Sectors of Excellence</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Eleven Star Construction delivers unparalleled expertise across critical infrastructure sectors,
            setting industry standards for quality and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Card 
              key={sector.title} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-300" />
                <Image
                  src={sector.img}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <button className="inline-flex items-center text-black font-semibold border-b-2 border-black pb-1 transition-all duration-300 hover:pb-2">
                  Explore Projects
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 