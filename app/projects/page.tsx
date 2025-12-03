"use client"
import ProjectCarousel from "@/components/ProjectCarousel"
import CloudinaryImage from "@/components/CloudinaryImage"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
// Uses Cloudinary public IDs for images
const fallbackProjects: Project[] = [
    {
      title: "Driveway Asphalting",
      category: "Road Construction",
      images: [
        "eleven-star/projects/road-construction/driveway-1",
        "eleven-star/projects/road-construction/driveway-2",
        "eleven-star/projects/road-construction/driveway-3",
        "eleven-star/projects/road-construction/driveway-4",
        "eleven-star/projects/road-construction/driveway-5",
        "eleven-star/projects/road-construction/driveway-6",
        "eleven-star/projects/road-construction/driveway-7"
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
        "eleven-star/projects/residential-construction/luxury-1",
        "eleven-star/projects/residential-construction/luxury-2",
        "eleven-star/projects/residential-construction/luxury-3",
        "eleven-star/projects/residential-construction/luxury-4"
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
        "eleven-star/projects/residential-construction/modern-1",
        "eleven-star/projects/residential-construction/modern-2",
        "eleven-star/projects/residential-construction/modern-3"
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
        "eleven-star/projects/renovations-remodeling/renovations-1"
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
        "eleven-star/projects/commercial-construction/commercial-1",
        "eleven-star/projects/commercial-construction/commercial-2",
        "eleven-star/projects/commercial-construction/commercial-3",
        "eleven-star/projects/commercial-construction/commercial-4"
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
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
        className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <CloudinaryImage
          src="eleven-star/hero/hero-construction-2"
          alt="Featured construction projects by Eleven Star Construction"
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase tracking-premium text-white">
            <span className="inline-block relative pb-3">
              Featured Projects
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-brand-green" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
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

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {["ALL", "RESIDENTIAL", "COMMERCIAL", "RENOVATIONS", "ROADS"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 pb-2 relative ${
                  selectedFilter === filter
                    ? "text-brand-green"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label={`Filter by ${filter}`}
              >
                {filter}
                {selectedFilter === filter && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {(() => {
            // Filter projects based on selected category
            const filteredProjects = projects.filter((project) => {
              if (selectedFilter === "ALL") return true
              
              const categoryUpper = project.category.toUpperCase()
              if (selectedFilter === "RESIDENTIAL") {
                return categoryUpper.includes("RESIDENTIAL")
              }
              if (selectedFilter === "COMMERCIAL") {
                return categoryUpper.includes("COMMERCIAL")
              }
              if (selectedFilter === "RENOVATIONS") {
                return categoryUpper.includes("RENOVATION") || categoryUpper.includes("REMODELING")
              }
              if (selectedFilter === "ROADS") {
                return categoryUpper.includes("ROAD")
              }
              return true
            })

            if (filteredProjects.length === 0) {
              return (
                <div className="text-center py-12">
                  <div className="text-gray-500 mb-4">
                    <h3 className="text-lg font-medium">No projects found</h3>
                    <p className="text-sm">Try selecting a different category</p>
                  </div>
                </div>
              )
            }

            return (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2 // Stagger effect
                  }}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="group-hover:scale-105 transition-transform duration-300">
                      <ProjectCarousel 
                        images={project.images} 
                        title={project.title}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-brand-green transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-600 mb-4 font-light leading-relaxed">{project.description}</p>
                    <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Completed: {project.completion}</span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-brand-green hover:text-brand-green-light font-medium text-sm flex items-center gap-1 transition-colors duration-200"
                      >
                        View Details
                        <span className="text-lg">+</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to Build Something Great?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
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

      {/* Project Details Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </DialogTitle>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                {selectedProject.category}
              </div>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Project Images */}
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <ProjectCarousel 
                  images={selectedProject.images} 
                  title={selectedProject.title}
                />
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Overview</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.details && selectedProject.details.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="inline-block w-1.5 h-1.5 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Completion Date */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Completed:</span> {selectedProject.completion}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  )
}       