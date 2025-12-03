import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer data-site-footer className="bg-black text-white mt-0 border-t border-slate-700/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 text-white">Eleven Star Construction</h3>
            <p className="text-gray-300 leading-relaxed font-light text-base">
              Your vision. Built with precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-premium">Quick Links</h3>
            <ul className="space-y-4" role="list">
              <li><a href="/who-we-are" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base" aria-label="Learn about us">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base" aria-label="View our services">Services</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base" aria-label="View our projects">Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base" aria-label="Contact us">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-premium">Services</h3>
            <ul className="space-y-4" role="list">
              <li className="text-gray-300 font-light text-base">Residential Construction</li>
              <li className="text-gray-300 font-light text-base">Commercial Construction</li>
              <li className="text-gray-300 font-light text-base">Renovations & Remodeling</li>
              <li className="text-gray-300 font-light text-base">Land Subdivision</li>
              <li className="text-gray-300 font-light text-base">Road Construction</li>
              <li className="text-gray-300 font-light text-base">Landscaping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-premium">Contact Us</h3>
            <address className="not-italic space-y-4" aria-label="Company contact information">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div className="font-light text-base">
                  <p>Runaway Bay</p>
                  <p>St. Ann, Jamaica</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                <a href="tel:+18767814420" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base" aria-label="Call us at (876) 781-4420">(876) 781-4420</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                <a href="mailto:elevenstarconstruction@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors font-light text-base break-all" aria-label="Email us">elevenstarconstruction@gmail.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/40 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-base font-light">
            © {new Date().getFullYear()} Eleven Star Construction. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="/privacy" className="text-gray-300 hover:text-emerald-400 text-base transition-colors font-light" aria-label="Read our privacy policy">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-emerald-400 text-base transition-colors font-light" aria-label="Read our terms of service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
