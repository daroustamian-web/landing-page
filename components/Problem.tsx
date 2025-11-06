'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="section-label">YOUR STRUGGLE</p>
            <h2 className="section-headline">
              Are You Drowning in the Demands of Caregiving?
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                You're juggling a career, your own family, and now, the full-time job of caring for your aging parent.
                The late-night calls, the constant worry, the endless to-do list... it's exhausting.
              </p>
              <p>
                You're not alone. Millions of adult children feel the same way. You love your parents, but you're
                stretched to your breaking point. You feel guilty for wanting your life back, but the stress is taking a
                toll on your health, your work, and your relationships.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?q=80&w=1200"
                alt="Stressed woman feeling overwhelmed"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

