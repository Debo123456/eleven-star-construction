"use client"
import { Users, Star, Shield } from "lucide-react"
import Link from "next/link"
import CloudinaryImage from "@/components/CloudinaryImage"
import { motion } from "framer-motion"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <CloudinaryImage
          src="eleven-star/hero/hero-construction-1"
          alt="Eleven Star Construction team building excellence"
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
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Building Excellence Since 2005
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A trusted name in Jamaican construction, delivering exceptional quality and 
            craftsmanship with over 50 years of combined industry expertise.
          </p>
        </motion.div>
      </section>

      {/* Stats Section - Stat Strip */}
      <section className="py-16 md:py-20 bg-gray-800 w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "35+", label: "Projects Completed" },
              { number: "95%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="py-4">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-none">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-light text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight uppercase tracking-premium">
              <span className="inline-block relative pb-3">
                Our Story
                <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-green" />
              </span>
            </h2>
          </div>

          {/* Split Layout: Image + Text */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Image */}
            <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <CloudinaryImage
                src="eleven-star/projects/residential-construction/luxury-1"
                alt="Eleven Star Construction - Building excellence since 2005"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality="auto:good"
                crop="fill"
                gravity="center"
              />
            </div>

            {/* Right Side: Story Text + Bullet Points */}
            <div className="space-y-6">
              <div>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
                  Since 2005, Eleven Star Quality Construction has been setting the standard 
                  for excellence in Jamaica&apos;s construction industry. With over 50 years of 
                  combined experience, our team brings unparalleled expertise to every project.
                </p>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  We pride ourselves on delivering exceptional quality workmanship and maintaining 
                  a 95% client satisfaction rate. Having successfully completed over 35 major projects, 
                  we have the experience and capability to handle any construction challenge with confidence.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brand-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Full-Service Excellence</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      As a full-service construction company, we specialize in both residential 
                      and commercial projects, bringing the same level of dedication and expertise 
                      to every build.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brand-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Expert Team</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Our team of construction professionals brings over five decades of combined 
                      experience, ensuring your project benefits from deep industry knowledge and 
                      proven expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 leading-tight uppercase tracking-premium">
            <span className="inline-block relative pb-3">
              Our Values
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-brand-green" />
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Craftsmanship",
                description: "Every project is executed with precision, using the finest materials and techniques"
              },
              {
                icon: Users,
                title: "Client Partnership",
                description: "We work closely with our clients, ensuring their vision becomes reality"
              },
              {
                icon: Star,
                title: "Proven Excellence",
                description: "Our track record of successful projects speaks to our commitment to excellence"
              },
            ].map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-green/10 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-brand-green transition-all duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
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
