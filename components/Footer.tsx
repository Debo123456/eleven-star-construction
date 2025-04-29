export default function Footer() {
  return (
    <footer className="bg-black text-white mt-0 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Eleven Star Construction</h3>
            <p className="text-gray-400">
              Building Your Dream from Concept to Creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors" aria-label="View our services">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors" aria-label="View our projects">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors" aria-label="Contact us">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2" role="list">
              <li className="text-gray-400">Residential Construction</li>
              <li className="text-gray-400">Commercial Construction</li>
              <li className="text-gray-400">Renovations & Remodeling</li>
              <li className="text-gray-400">Land Subdivision</li>
              <li className="text-gray-400">Road Construction</li>
              <li className="text-gray-400">Landscaping & Outdoor Living</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400" aria-label="Company contact information">
              <p>Runaway Bay</p>
              <p>St. Ann</p>
              <p>Jamaica</p>
              <p className="mt-2">Phone: <a href="tel:+18767814420" aria-label="Call us at (876) 781-4420">(876) 781-4420</a></p>
              <p>Email: <a href="mailto:info@elevenstarconst.com" aria-label="Email us at info@elevenstarconst.com">info@elevenstarconst.com</a></p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eleven Star Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors" aria-label="Read our privacy policy">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors" aria-label="Read our terms of service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}