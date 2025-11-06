import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Booking() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            BOOKING
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Book an On-Site or Virtual Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your free, no-obligation care consultation today. We'll discuss your family's unique needs and create a custom care plan that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Call us */}
          <div className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
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
          <div className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
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
          <div className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
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


