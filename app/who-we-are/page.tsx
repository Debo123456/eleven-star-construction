import { Users, Star, Shield } from "lucide-react"
import Link from "next/link"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Building Excellence Since 2005
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A trusted name in Jamaican construction, delivering exceptional quality and 
            craftsmanship with over 50 years of combined industry expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "35+", label: "Projects Completed" },
              { number: "95%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since 2005, Eleven Star Quality Construction has been setting the standard 
              for excellence in Jamaica&apos;s construction industry. With over 50 years of 
              combined experience, our team brings unparalleled expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3">Full-Service Excellence</h3>
                <p className="text-gray-600">
                  As a full-service construction company, we specialize in both residential 
                  and commercial projects, bringing the same level of dedication and expertise 
                  to every build.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of construction professionals brings over five decades of combined 
                  experience, ensuring your project benefits from deep industry knowledge and 
                  proven expertise.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3">Quality Commitment</h3>
                <p className="text-gray-600">
                  With a 95% client satisfaction rate, our commitment to quality workmanship 
                  and exceptional customer service is evident in every project we complete.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Having successfully completed over 35 major projects, we have the experience 
                  and capability to handle any construction challenge with confidence.
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
                title: "Quality Craftsmanship",
                description: "Every project is executed with precision, using the finest materials and techniques"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client Partnership",
                description: "We work closely with our clients, ensuring their vision becomes reality"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Proven Excellence",
                description: "Our track record of successful projects speaks to our commitment to excellence"
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
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
            From custom homes to commercial buildings, we have the expertise to bring your vision to life.
          </p>
          <Link href="/contact">
            <button className="bg-brand-green text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-green-light transition-all duration-300 shadow-[0_4px_10px_-2px_rgba(0,166,81,0.3)] hover:shadow-[0_6px_20px_-2px_rgba(0,166,81,0.4)]">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
