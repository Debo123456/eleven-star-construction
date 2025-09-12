"use client"
import ProjectCarousel from "@/components/ProjectCarousel"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Project {
  title: string;
  category: string;
  images: string[];
  description: string;
  completion: string;
  details: string[];
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

// Fallback projects data (moved outside component to avoid dependency issues)
const fallbackProjects: Project[] = [
    {
      title: "Driveway Asphalting",
      category: "Road Construction",
      images: [
        "/images/projects/road-construction/driveway-1.webp",
        "/images/projects/road-construction/driveway-2.webp",
        "/images/projects/road-construction/driveway-3.webp",
        "/images/projects/road-construction/driveway-4.webp",
        "/images/projects/road-construction/driveway-5.webp",
        "/images/projects/road-construction/driveway-6.webp",
        "/images/projects/road-construction/driveway-7.webp"
      ],
      description: "Complete driveway transformation project featuring professional asphalt paving, proper drainage solutions, and expert finishing work. Showcasing our commitment to quality residential road construction.",
      completion: "2023",
      details: [
        "Professional grade asphalt installation",
        "Proper drainage engineering",
        "Edge treatment and finishing",
        "Long-lasting durability coating"
      ],
      id: "driveway-asphalting"
    },
    {
      title: "Luxury Residential Complex",
      category: "Residential Construction",
      images: [
        "/images/projects/residential-construction/luxury-1.webp",
        "/images/projects/residential-construction/luxury-2.webp",
        "/images/projects/residential-construction/luxury-3.webp",
        "/images/projects/residential-construction/luxury-4.webp",
      ],
      description: "Multi-unit residential development showcasing modern architectural design, premium finishes, and attention to detail in every aspect of construction.",
      completion: "2023",
      details: [
        "Custom architectural design",
        "Premium exterior finishes",
        "Modern amenity integration",
        "Energy-efficient construction"
      ],
      id: "luxury-residential-complex"
    },
    {
      title: "Modern Residential Complex",
      category: "Residential Construction",
      images: [
        "/images/projects/residential-construction/modern-1.webp",
        "/images/projects/residential-construction/modern-2.webp",
        "/images/projects/residential-construction/modern-3.webp"
      ],
      description: "Contemporary residential development featuring clean lines, open spaces, and innovative design elements that blend functionality with aesthetic appeal.",
      completion: "2022",
      details: [
        "Contemporary design elements",
        "Open-concept layouts",
        "High-end material selection",
        "Integrated outdoor spaces"
      ],
      id: "modern-residential-complex"
    },
    {
      title: "Home Renovation Project",
      category: "Renovations & Remodeling",
      images: [
        "/images/projects/renovations-remodeling/renovations-1.webp"
      ],
      description: "Comprehensive home renovation showcasing our ability to transform existing spaces into modern, functional living areas while maintaining structural integrity.",
      completion: "2022",
      details: [
        "Complete interior redesign",
        "Structural improvements",
        "Modern fixture installation",
        "Custom finishing work"
      ],
      id: "home-renovation-project"
    },
    {
      title: "Commercial Building Development",
      category: "Commercial Construction",
      images: [
        "/images/projects/commercial-construction/commercial-1.webp",
        "/images/projects/commercial-construction/commercial-2.webp",
        "/images/projects/commercial-construction/commercial-3.webp",
        "/images/projects/commercial-construction/commercial-4.webp",
      ],
      description: "State-of-the-art commercial facility featuring modern design elements, efficient space utilization, and sustainable building practices.",
      completion: "2023",
      details: [
        "Modern commercial design",
        "Energy-efficient systems",
        "Professional space planning",
        "Premium building materials"
      ],
      id: "commercial-building-development"
    }
  ]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/projects')
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        } else {
          // If API fails, use fallback data
          setProjects(fallbackProjects)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setError('Failed to load projects')
        // Use fallback data on error
        setProjects(fallbackProjects)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading projects...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] flex items-center justify-center bg-black text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing Eleven Star Construction&apos;s commitment to excellence 
            through our portfolio of transformative projects.
          </p>
        </motion.div>
      </motion.section>

      {/* Error Message */}
      {error && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-yellow-800">{error}</p>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <h3 className="text-lg font-medium">No projects available</h3>
                <p className="text-sm">Check back later for new projects</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2 // Stagger effect
                  }}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
                >
                  <div className="relative">
                    <ProjectCarousel 
                      images={project.images} 
                      title={project.title}
                    />
                    <div className="absolute top-4 left-4 z-10 bg-brand-green text-white px-4 py-1.5 rounded-xl shadow-lg">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.details.map((detail, idx) => (
                          <li key={`${project.id}-detail-${idx}`} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200 text-center">
                      <span className="text-gray-500">Completed: {project.completion}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-gray-300 mb-8">
            Let Eleven Star Construction bring your vision to life with our proven expertise 
            and commitment to excellence.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-green-light transition-all duration-300 shadow-[0_4px_10px_-2px_rgba(0,166,81,0.3)] hover:shadow-[0_6px_20px_-2px_rgba(0,166,81,0.4)]"
          >
            Start Your Project
          </motion.button>
        </div>
      </motion.section>
    </main>
  )
}       