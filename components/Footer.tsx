import { Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Heart size={24} />
              </div>
              <span className="text-2xl font-bold">SeniorCare <span className="text-primary">SD</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Compassionate in-home senior care services serving San Diego County families since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary transition">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Companion Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Personal Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Dementia Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Respite Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">24-Hour Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:6195550123" className="text-gray-400 hover:text-primary transition">
                    (619) 555-0123
                  </a>
                  <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <a href="mailto:care@seniorcare-sd.com" className="text-gray-400 hover:text-primary transition">
                  care@seniorcare-sd.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  San Diego County, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 SeniorCare SD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Careers</a>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Licensed by California Department of Social Services | Bonded & Insured | BBB A+ Rating
          </p>
        </div>
      </div>
    </footer>
  )
}


