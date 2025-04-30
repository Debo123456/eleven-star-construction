"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2, Hammer, Trophy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SectionGlance() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-green-dark to-brand-green">
            Eleven Star Construction at a Glance
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your trusted partner in building dreams, from residential homes to commercial spaces, 
            delivering quality construction across Jamaica.
          </p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { 
              title: "Who We Are",
              icon: Building2,
              description: "A dedicated team of local construction experts, bringing years of experience and craftsmanship to every project, big or small.",
              link: "/who-we-are"
            },
            {
              title: "Our Projects",
              icon: Hammer,
              description: "From dream homes to commercial spaces, road construction to landscaping, discover how we're building Jamaica's future, one project at a time.",
              link: "/projects"
            },
            {
              title: "Our Expertise",
              icon: Trophy,
              description: "Specializing in residential and commercial construction, renovations, land subdivision, road construction, and beautiful outdoor spaces.",
              link: "/services"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                  <Link href={item.link} className="block">
                    <button className="w-full mt-4 text-brand-green hover:text-white font-semibold transition-colors duration-300 py-2 border border-brand-green rounded-lg hover:bg-brand-green">
                      Learn More
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 