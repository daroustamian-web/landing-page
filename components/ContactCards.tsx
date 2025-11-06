import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function ContactCards() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Call us */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call us</h3>
            <p className="text-gray-600 mb-4">(619) 555-0123</p>
            <a href="tel:6195550123" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Make us a call <ArrowRight size={16} />
            </a>
          </div>

          {/* Email us */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email us</h3>
            <p className="text-gray-600 mb-4">care@seniorcare-sd.com</p>
            <a href="mailto:care@seniorcare-sd.com" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Send us an email <ArrowRight size={16} />
            </a>
          </div>

          {/* Visit us */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit us</h3>
            <p className="text-gray-600 mb-4">San Diego County</p>
            <a href="#contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View our locations <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


