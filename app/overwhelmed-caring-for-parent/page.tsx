'use client'

import { Phone, Mail, MapPin, Play, ArrowRight, Heart, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function OverwhelmedCaringForParent() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Emotional */}
      <section className="relative bg-cream overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <p className="section-label">YOU'RE NOT ALONE</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Feeling Overwhelmed? You Don't Have to Do This Alone
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Caring for an aging parent while managing your own life is exhausting. We understand the guilt,
                the stress, and the feeling that your life isn't your own anymore. ComForCare is here to help
                you get your life back while ensuring your loved one receives compassionate, professional care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="btn-primary text-center">
                  Talk to Someone Who Understands
                </a>
                <a href="tel:6195550123" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Call Now: (619) 555-0123
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200"
                  alt="Compassionate caregiver with senior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Quick Stats - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,400+</div>
              <p className="text-gray-600">Families searching for this help every month</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Care available when you need it most</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">5.0★</div>
              <p className="text-gray-600">Rating from families just like yours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding Section - Empathy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-label text-center">WE UNDERSTAND</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              You're Juggling Too Much
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                You wake up early to check on Mom before work. Your phone rings constantly throughout
                the day with questions, concerns, or emergencies. You rush over during lunch breaks.
                You spend evenings managing medications, appointments, and meals. Your weekends are
                consumed by errands and caregiving tasks.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                Meanwhile, your own family needs you. Your job is suffering. Your health is declining.
                You can't remember the last time you did something just for yourself. The guilt is overwhelming
                when you think about getting help, but you're reaching your breaking point.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                <strong className="text-gray-900">You're not failing. You're human.</strong> And you're doing
                your best in an impossible situation.
              </p>
            </div>

            <div className="bg-primary-light p-8 rounded-2xl">
              <p className="text-lg font-semibold text-gray-900 mb-4">Did you know?</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>65% of family caregivers report feeling emotionally overwhelmed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Family caregivers provide an average of 24.4 hours of care per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Professional in-home care allows seniors to age safely at home while relieving family stress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200"
                alt="Happy senior with professional caregiver"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="section-label">OUR PROMISE</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get Your Life Back While Mom Gets the Best Care
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Imagine waking up without that knot of anxiety in your stomach. Imagine being able to
                focus at work. Imagine spending quality time with your own family. Imagine being a son
                or daughter again, not just a caregiver.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compassionate, Trained Caregivers</h3>
                    <p className="text-gray-600">
                      Our caregivers aren't just skilled—they genuinely care. We match personality and needs carefully.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      From a few hours a week to 24/7 care—we customize to what YOU need right now.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Peace of Mind</h3>
                    <p className="text-gray-600">
                      Licensed, bonded, insured caregivers. Regular updates. You stay in control while getting the relief you need.
                    </p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-primary inline-block">
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="section-label text-center">REAL STORIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Families Who Felt Just Like You
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I was completely overwhelmed. Working full-time, kids at home, and my mom with dementia...
                  I felt like I was drowning. The caregiver ComForCare matched us with is a godsend. Mom is
                  happier, and for the first time in two years, I can breathe."
                </p>
                <p className="font-semibold text-gray-900">— Sarah K., Chula Vista</p>
                <p className="text-sm text-gray-600">Daughter caring for mother with dementia</p>
              </div>
            </div>

            <div className="card">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I felt so guilty even thinking about getting help. But I was exhausted and short-tempered
                  with my dad, which made me feel even worse. Now he has someone patient and kind with him,
                  and our relationship is better than it's been in years."
                </p>
                <p className="font-semibold text-gray-900">— David L., La Mesa</p>
                <p className="text-sm text-gray-600">Son caring for elderly father</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started - Simple Steps */}
      <section className="py-16 md:py-24 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="section-label">GETTING STARTED IS EASY</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Three Simple Steps to Relief
            </h2>
            <p className="text-xl text-gray-600">
              No pressure. No obligation. Just compassionate support when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call or Schedule Online</h3>
              <p className="text-gray-600">
                Talk to a care coordinator who actually listens. No sales pressure—just someone who understands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Your Care Plan</h3>
              <p className="text-gray-600">
                We customize care to your parent's needs and your budget. Start with just a few hours if that's what works.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Feeling Relief</h3>
              <p className="text-gray-600">
                Care can often begin within a week. You'll start getting updates and finally have time for yourself again.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary inline-block text-lg px-8 py-4">
              Schedule Your Free Consultation Now
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Average response time: Under 2 hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">GET HELP TODAY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Talk to Someone Who Understands
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Free consultation. No obligation. Just compassionate support for your family.
            </p>

            <ContactForm />

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Prefer to talk right now?</p>
              <a href="tel:6195550123" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                (619) 555-0123
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
