'use client'

import { Phone, Mail, MapPin, Play, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative bg-cream overflow-hidden">
      {/* Purple Wave Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="#7C3AED"
            d="M45.3,-77.5C58.4,-69.2,68.7,-56.4,75.8,-42.1C82.9,-27.8,86.8,-11.9,86.3,3.9C85.8,19.7,80.9,35.4,72.6,48.9C64.3,62.4,52.6,73.7,38.8,80.3C25,86.9,9.1,88.8,-6.3,87.6C-21.7,86.4,-36.8,82.1,-50.4,74.3C-64,66.5,-76.1,55.2,-83.2,41.2C-90.3,27.2,-92.4,10.5,-89.9,-5.1C-87.4,-20.7,-80.3,-35.2,-70.1,-46.9C-59.9,-58.6,-46.6,-67.5,-32.4,-75.3C-18.2,-83.1,-3.1,-89.8,11.1,-88.4C25.3,-87,32.2,-85.8,45.3,-77.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <p className="section-label">SENIOR CARE SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Give Your Parents the Care They Deserve, and Get Your Life Back
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Compassionate, reliable in-home senior care in San Diego County. Our highly trained caregivers provide
              the support your loved ones need, so you can get the peace of mind you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary text-center">
                Get Free Consultation
              </a>
              <button className="btn-secondary">
                <Play className="w-5 h-5" />
                Watch our video
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200"
                alt="Happy elderly couple smiling together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {/* Call Us Card */}
          <div className="card group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Call us</h3>
                <p className="text-gray-600 mb-2">(619) 555-0123</p>
                <a href="tel:6195550123" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Make us a call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="card group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Email us</h3>
                <p className="text-gray-600 mb-2">care@yoursite.com</p>
                <a href="mailto:care@yoursite.com" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Send us a email
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Visit Us Card */}
          <div className="card group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Visit us</h3>
                <p className="text-gray-600 mb-2">San Diego County</p>
                <a href="#contact" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  View our locations
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

