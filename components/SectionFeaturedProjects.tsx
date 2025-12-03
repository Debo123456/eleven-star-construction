"use client"
import { motion } from "framer-motion"
import CloudinaryImage from "@/components/CloudinaryImage"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  images: string[]
  description: string
  completion: string
  location?: string
}

const featuredProjects: Project[] = [
  {
    id: "luxury-residential-complex",
    title: "Luxury Residential Complex",
    category: "Residential Construction",
    images: ["eleven-star/projects/residential-construction/luxury-1"],
    description: "Multi-unit residential development showcasing modern architectural design, premium finishes, and attention to detail in every aspect of construction.",
    completion: "2027",
    location: "St. Ann, Jamaica"
  },
  {
    id: "commercial-building-development",
    title: "Commercial Building Development",
    category: "Commercial Construction",
    images: ["eleven-star/projects/commercial-construction/commercial-1"],
    description: "State-of-the-art commercial facility featuring modern design elements, efficient space utilization, and sustainable building practices.",
    completion: "2023",
    location: "Kingston, Jamaica"
  },
  {
    id: "driveway-asphalting",
    title: "Driveway Asphalting",
    category: "Road Construction",
    images: ["eleven-star/projects/road-construction/driveway-1"],
    description: "Complete driveway transformation project featuring professional asphalt paving, proper drainage solutions, and expert finishing work.",
    completion: "2023",
    location: "Runaway Bay, Jamaica"
  }
]

export default function SectionFeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FB] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-construction-grid opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              Our Work Speaks
              <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-green" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-prose mx-auto text-center font-light leading-relaxed">
            Real projects. Real results. Jamaica-wide.
          </p>
        </motion.div>

        {/* Grid with equal height cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full" // Ensure motion div takes full height
            >
              <div className="h-full flex flex-col group bg-white rounded-xl overflow-hidden shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 border-0 transition-all duration-300 hover:-translate-y-1">
                {/* Project Image - Fixed height */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <CloudinaryImage
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality="auto:good"
                    crop="fill"
                    gravity="center"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-brand-green text-white px-3 py-1 rounded-md text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Info - Flex grow to fill space */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description with flex-grow to push metadata to bottom */}
                  <p className="text-base text-gray-600 mb-4 font-light leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Metadata always at bottom */}
                  <div className="flex flex-col gap-1.5 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    {project.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                        <span>{project.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <span>Completed: {project.completion}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-block bg-brand-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green-light transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
