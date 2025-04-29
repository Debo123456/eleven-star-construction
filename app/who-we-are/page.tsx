import { Users, Star,Shield} from "lucide-react"
import Link from "next/link"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Building Jamaica&apos;s Future Together
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A trusted name in Jamaican construction, delivering excellence through local expertise 
            and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eleven Star Construction has deep roots in the Jamaican construction industry. 
              We&apos;ve built our reputation on trust, quality, and a deep understanding of 
              local construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Our team brings years of experience in Jamaican construction, understanding 
                  the unique challenges and opportunities of our local environment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Comprehensive Services</h3>
                <p className="text-gray-600">
                  From residential homes to commercial spaces, road construction to landscaping, 
                  we offer end-to-end construction solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Quality Commitment</h3>
                <p className="text-gray-600">
                  Every project is executed with precision and care, ensuring the highest 
                  standards of construction quality and safety.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  We work closely with our clients, turning their visions into reality while 
                  providing transparent communication throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality",
                description: "Unwavering commitment to construction excellence and durability"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Building relationships while we build structures"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Excellence",
                description: "Striving for perfection in every project we undertake"
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s work together to bring your construction vision to life.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
