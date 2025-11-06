'use client'

import { motion } from 'framer-motion'
import { Heart, User, Brain, Clock, Shield, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Companion Care',
      description: 'Social interaction, meal preparation, light housekeeping, and more.'
    },
    {
      icon: User,
      title: 'Personal Care',
      description: 'Assistance with bathing, dressing, grooming, and mobility.'
    },
    {
      icon: Brain,
      title: 'Dementia & Alzheimer\'s Care',
      description: 'Specialized care for clients with memory loss.'
    },
    {
      icon: Clock,
      title: 'Respite Care',
      description: 'Short-term relief for family caregivers.'
    },
    {
      icon: Shield,
      title: '24-Hour Care',
      description: 'Around-the-clock care for clients who need constant support.'
    },
    {
      icon: Star,
      title: 'Veterans Care',
      description: 'Specialized care for veterans with VA benefits assistance.'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">OUR SERVICES</p>
          <h2 className="section-headline">A Wide Range of Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive care tailored to your family's unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            Learn More About Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

