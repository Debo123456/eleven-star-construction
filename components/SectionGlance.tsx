import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2, Hammer, Trophy } from "lucide-react"
import Link from "next/link"

export default function SectionGlance() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
            Eleven Star Construction at a Glance
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your trusted partner in building dreams, from residential homes to commercial spaces, 
            delivering quality construction across Jamaica.
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
                A dedicated team of local construction experts, bringing years of experience 
                and craftsmanship to every project, big or small.
              </p>
              <Link href="/who-we-are" className="block">
                <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                  Learn More
                </button>
              </Link>
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
                From dream homes to commercial spaces, road construction to landscaping, 
                discover how we&apos;re building Jamaica&apos;s future, one project at a time.
              </p>
              <Link href="/projects" className="block">
                <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                  See Projects
                </button>
              </Link>
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
                Specializing in residential and commercial construction, renovations, 
                land subdivision, road construction, and beautiful outdoor spaces.
              </p>
              <Link href="/services" className="block">
                <button className="w-full mt-4 text-gray-900 hover:text-white font-semibold transition-colors duration-300 py-2 border border-gray-900 rounded-lg hover:bg-gray-900">
                  Our Services
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 