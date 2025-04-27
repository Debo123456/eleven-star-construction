import { Shield, Star, Clock, Award } from "lucide-react"

export default function SectionWhy() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Eleven Star Construction
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            As your trusted local construction partner, we combine Jamaican craftsmanship 
            with modern expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-400">
              Years of successful projects across Jamaica, building trust and delivering excellence in every community we serve.
            </p>
          </div>

          <div className="group bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-400">
              We maintain the highest standards of quality, ensuring every project meets both local building codes and your expectations.
            </p>
          </div>

          <div className="group bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-gray-400">
              We understand the importance of deadlines and work diligently to complete your project on schedule, every time.
            </p>
          </div>

          <div className="group bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Our skilled local team brings years of experience and a deep understanding of Jamaican construction needs to every project.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
} 