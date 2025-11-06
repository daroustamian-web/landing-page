'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Solution() {
  const benefits = [
    'Your parents stay in the comfort of their own home',
    'Professional, compassionate care from trained caregivers',
    'You can be their child again, not just their caregiver',
    'Flexible care plans that fit your budget',
    'Peace of mind knowing they\'re safe and happy',
    'Time to focus on your career and family'
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] order-2 lg:order-1"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200"
                alt="Happy senior with caregiver smiling together"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="section-label">OUR PROMISE</p>
            <h2 className="section-headline">
              You Don't Have to Do This Alone. We're Here to Help.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Imagine a life where your parents are safe, happy, and thriving in the comfort of their own home.
                Imagine having the freedom to be their son or daughter again, not just their caregiver. Imagine peace
                of mind.
              </p>
              <p>
                That's what we provide. We offer compassionate, professional in-home care services that are tailored to
                your family's unique needs. Our highly trained and vetted caregivers provide the support your parents
                need, so you can get the break you deserve.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Get Your Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

