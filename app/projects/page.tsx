import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Interstate Highway Expansion",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
      description: "Major interstate expansion project improving regional connectivity with advanced engineering solutions.",
      completion: "2023",
      value: "$85M",
      details: [
        "15-mile highway expansion",
        "6 new bridge structures",
        "Advanced drainage systems",
        "Smart traffic management"
      ]
    },
    {
      title: "Urban Transit Center",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80",
      description: "State-of-the-art transit hub connecting multiple transportation modes in the heart of downtown.",
      completion: "2023",
      value: "$120M",
      details: [
        "Multi-modal transit integration",
        "Sustainable design features",
        "Smart building technology",
        "Public space development"
      ]
    },
    {
      title: "Corporate Campus Development",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      description: "Modern corporate campus featuring sustainable design and cutting-edge amenities.",
      completion: "2022",
      value: "$95M",
      details: [
        "500,000 sq ft development",
        "LEED Gold certification",
        "Smart office integration",
        "Parking structure"
      ]
    },
    {
      title: "Harbor Bridge Reconstruction",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
      description: "Critical infrastructure project replacing aging bridge structure with modern design.",
      completion: "2022",
      value: "$150M",
      details: [
        "Cable-stayed design",
        "Seismic reinforcement",
        "LED lighting system",
        "Pedestrian walkways"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing Eleven Star Construction's commitment to excellence 
            through our portfolio of transformative projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded">
                    {project.value}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-500">Completed: {project.completion}</span>
                    <button className="text-black font-semibold hover:underline">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-gray-300 mb-8">
            Let Eleven Star Construction bring your vision to life with our proven expertise 
            and commitment to excellence.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  )
}       