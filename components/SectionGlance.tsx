"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2, Hammer, Trophy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SectionGlance() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Micro-brand pattern overlay */}
      <div className="absolute inset-0 bg-construction-grid opacity-100 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              Why Eleven Star
              <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-green" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-prose mx-auto text-center font-light leading-relaxed">
            Local expertise. Proven results. Quality construction across Jamaica.
          </p>
        </motion.div>
        
        {/* Grid with equal height cards */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {[
            { 
              title: "About Us — Local Experts",
              icon: Building2,
              points: [
                "15+ years of experience",
                "50+ years combined expertise",
                "Jamaican craftsmanship"
              ],
              link: "/who-we-are"
            },
            {
              title: "Our Portfolio",
              icon: Hammer,
              points: [
                "35+ completed projects",
                "Residential & commercial",
                "Road & infrastructure"
              ],
              link: "/projects"
            },
            {
              title: "Core Services",
              icon: Trophy,
              points: [
                "New construction builds",
                "Renovations & remodeling",
                "Land development & roads"
              ],
              link: "/services"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col group transform transition-all duration-300 hover:scale-[1.02] bg-white shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 border-0">
                <CardHeader className="text-center">
                  {/* Larger icon - visual focus */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-green/10 transition-colors duration-300">
                    <item.icon className="w-12 h-12 text-gray-700 group-hover:text-brand-green transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  {/* Content area grows to fill space */}
                  <ul className="space-y-3 text-left flex-grow mb-6">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="inline-block w-1.5 h-1.5 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Smaller outline button - secondary to icon */}
                  <Link href={item.link} className="block mt-auto">
                    <button className="w-full text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white font-medium text-sm py-2.5 rounded-lg transition-all duration-300">
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
