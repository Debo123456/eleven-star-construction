import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2, Hammer, Trophy } from "lucide-react"

export default function SectionGlance() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
            Eleven Star Construction at a Glance
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Eleven Star Construction brings excellence and innovation to every infrastructure project, 
            setting new standards in the construction industry.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-800" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Who We Are</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                A premier construction company specializing in infrastructure development, 
                with a commitment to quality and innovation in every project we undertake.
              </p>
              <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                Learn More
              </button>
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Hammer className="w-8 h-8 text-gray-800" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Our Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                From groundbreaking infrastructure developments to complex construction challenges, 
                explore how we&apos;re building a better future.
              </p>
              <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                See Projects
              </button>
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-gray-800" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                We&apos;re committed to delivering excellence in every project, 
                from highways to bridges and beyond.
              </p>
              <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                Our Services
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 