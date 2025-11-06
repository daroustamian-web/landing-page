'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Heart, Clock } from 'lucide-react'

export default function Agitate() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Constant Worry',
      description: 'Every moment away feels like you should be there, checking in, making sure they\'re safe.'
    },
    {
      icon: TrendingDown,
      title: 'Financial Strain',
      description: 'Unexpected expenses pile up. Hospital bills, medications, home modifications—it never ends.'
    },
    {
      icon: Heart,
      title: 'Changing Relationships',
      description: 'You\'re no longer their child—you\'re their caregiver. The joy and laughter are fading.'
    },
    {
      icon: Clock,
      title: 'No Time for Life',
      description: 'Your career suffers. Your marriage suffers. You can\'t remember the last time you relaxed.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="section-label">THE REALITY</p>
          <h2 className="section-headline">
            It's More Than Just a Full-Time Job. It's Your Life.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every day is a tightrope walk. You're trying to be a good son or daughter, a good parent, a good
            employee... but you feel like you're failing at everything. You see your savings dwindle from unexpected
            expenses, and you wonder how much longer you can keep this up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed italic">
            "Your relationship with your parent is changing. The joy and laughter are being replaced by tension and
            frustration. You're becoming a caregiver, not a child. And the thought of a nursing home feels like a
            betrayal, but you're running out of options."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

