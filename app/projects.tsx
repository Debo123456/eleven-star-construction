import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Highway Infrastructure Expansion",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
      description: "Major highway expansion project improving connectivity across the region.",
      completion: "2023",
    },
    {
      title: "Metro Rail Development",
      category: "Public Transit",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80",
      description: "State-of-the-art metro rail system enhancing urban mobility.",
      completion: "2023",
    },
    {
      title: "Commercial Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      description: "Modern commercial complex with sustainable design features.",
      completion: "2022",
    },
    {
      title: "Bridge Construction",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
      description: "Critical bridge infrastructure connecting communities.",
      completion: "2022",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing excellence in construction through our portfolio of 
            successful infrastructure and development projects.
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
                className="group overflow-hidden border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300"
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
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
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
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how Eleven Star Construction can bring your vision to reality.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Start a Conversation
          </button>
        </div>
      </section>
    </main>
  )
} 