'use client'

import { Phone, FileText, Heart, Users, Clock, Shield, CheckCircle, Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function HelpCaringForElderlyParents() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Educational/Informational */}
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
              <p className="section-label">COMPLETE GUIDE</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Guidance for Caring for Aging Parents
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Everything you need to know about senior care options, finding the right help, and making the
                best decisions for your family. Plus, access to compassionate professionals who can guide you
                through every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#guide" className="btn-primary text-center">
                  <Download className="w-5 h-5 inline mr-2" />
                  Get Free Care Guide
                </a>
                <a href="tel:6195550123" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Talk to Expert: (619) 555-0123
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:text-[600px]"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200"
                  alt="Family caring for elderly parents"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Assessment Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="section-label text-center">ASSESSMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Does Your Parent Need Help? Start Here
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Use this checklist to assess whether your parent might benefit from in-home care services
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Daily Living Activities</h3>
              <div className="space-y-3">
                {[
                  'Difficulty bathing or grooming',
                  'Trouble getting dressed',
                  'Problems with mobility or balance',
                  'Skipping meals or poor nutrition',
                  'Medication management issues',
                  'Difficulty with household chores'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Safety & Health Concerns</h3>
              <div className="space-y-3">
                {[
                  'Recent falls or near-falls',
                  'Memory loss or confusion',
                  'Social isolation or depression',
                  'Wandering or getting lost',
                  'Unsafe driving behaviors',
                  'Rapid weight loss or health decline'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              If you checked 3 or more items, it's time to explore care options.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Schedule Free Care Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Care Options Explained */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <p className="section-label text-center">CARE OPTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Understanding Your Care Options
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Not sure where to start? Here's a breakdown of common senior care options and when each makes sense.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Companion Care</h3>
              <p className="text-gray-600 mb-4">
                Social interaction, light meal prep, medication reminders, transportation to appointments.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Independent seniors who need social support</p>
            </div>

            <div className="card">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Care</h3>
              <p className="text-gray-600 mb-4">
                Help with bathing, dressing, grooming, mobility, and daily living activities.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Seniors needing physical assistance</p>
            </div>

            <div className="card">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Respite Care</h3>
              <p className="text-gray-600 mb-4">
                Temporary relief for family caregivers—from a few hours to several days.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Family caregivers who need a break</p>
            </div>

            <div className="card">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24-Hour Care</h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock supervision and care for seniors who cannot be left alone.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Advanced care needs or safety concerns</p>
            </div>

            <div className="card">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Memory Care</h3>
              <p className="text-gray-600 mb-4">
                Specialized care for Alzheimer's, dementia, and other memory-related conditions.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Cognitive decline or memory loss</p>
            </div>

            <div className="card">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Surgery Care</h3>
              <p className="text-gray-600 mb-4">
                Short-term recovery assistance after medical procedures or hospitalization.
              </p>
              <p className="text-sm font-semibold text-primary">Best for: Temporary recovery periods</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose the Right Care */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-label text-center">DECISION GUIDE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              5 Steps to Choosing the Right Care
            </h2>

            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Assess Your Parent's Needs</h3>
                  <p className="text-gray-600">
                    Use the checklist above. Consider physical health, cognitive function, safety concerns, and social needs.
                    Be honest about what your parent can and cannot do independently.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Determine Your Budget</h3>
                  <p className="text-gray-600">
                    Explore all options: long-term care insurance, veterans benefits, Medicare/Medicaid programs, or private pay.
                    Many families start with just a few hours per week and increase as needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Care Agencies</h3>
                  <p className="text-gray-600">
                    Look for licensed, bonded agencies with strong reviews. Ask about caregiver training, background checks,
                    and how they match caregivers to clients. A good agency will offer a free consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Have "The Conversation"</h3>
                  <p className="text-gray-600">
                    Discuss care options with your parent early and often. Focus on maintaining their independence and safety,
                    not taking away control. Listen to their preferences and concerns.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Small and Adjust</h3>
                  <p className="text-gray-600">
                    You don't have to commit to 24/7 care immediately. Start with a few hours per week for specific tasks.
                    As trust builds and needs change, you can adjust the care plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#contact" className="btn-primary inline-block">
                Get Expert Help With These Steps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Payment Options */}
      <section className="py-16 md:py-24 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-label text-center">AFFORDABILITY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              How to Afford Senior Care
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              In-home care is often more affordable than you think—and there are many ways to pay for it.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">💰 Average Costs in San Diego</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Companion care: $25-35/hour</li>
                  <li>• Personal care: $28-40/hour</li>
                  <li>• 24-hour care: $250-400/day</li>
                  <li>• Memory care: $30-45/hour</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">*Rates vary by care level and agency</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">💳 Payment Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Long-term care insurance</li>
                  <li>• VA benefits (for veterans)</li>
                  <li>• Medicaid/Medi-Cal</li>
                  <li>• Medicare (limited home health)</li>
                  <li>• Private pay (flexible scheduling)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">💡 Cost-Saving Tips</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Start with fewer hours</p>
                  <p className="text-sm">Even 4-8 hours/week can make a big difference</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Split costs with siblings</p>
                  <p className="text-sm">Family members can share the financial burden</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Explore assistance programs</p>
                  <p className="text-sm">Many counties offer subsidized senior services</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Compare vs. facility costs</p>
                  <p className="text-sm">In-home care often costs less than assisted living</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-label text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Your Questions Answered
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How do I know if my parent needs help?",
                  a: "Look for changes in daily functioning, safety concerns, declining health, or increased caregiver stress. Use our assessment checklist above as a starting point."
                },
                {
                  q: "Will my parent accept help from a caregiver?",
                  a: "Resistance is common initially. Start slowly, involve your parent in the process, and frame it as maintaining independence rather than losing control. Many seniors warm up to caregivers quickly."
                },
                {
                  q: "How quickly can care start?",
                  a: "In non-emergency situations, care typically begins within 1-2 weeks. For urgent needs, we can often arrange care within 24-48 hours."
                },
                {
                  q: "What if my parent doesn't like the first caregiver?",
                  a: "Reputable agencies will work with you to find the right match. Don't be afraid to request a different caregiver if the fit isn't right."
                },
                {
                  q: "Can we adjust the care schedule as needs change?",
                  a: "Yes! Quality agencies offer flexible scheduling. You can increase or decrease hours as your parent's needs evolve."
                }
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="guide" className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Your Free Complete Care Guide
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download our comprehensive guide to senior care options, plus schedule a free consultation
              with a care expert who can answer all your questions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Care Planning Checklist</h3>
                <p className="text-gray-600 text-sm">Step-by-step guide to assessing needs and choosing care</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Questions to Ask Agencies</h3>
                <p className="text-gray-600 text-sm">What to look for when interviewing care providers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Financial Planning Tools</h3>
                <p className="text-gray-600 text-sm">Calculate costs and explore payment options</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm">Talk to an expert about your specific situation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">GET STARTED</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Request Your Free Guide & Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              No pressure. No obligation. Just expert guidance for your family.
            </p>

            <ContactForm />

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Prefer to talk to someone right now?</p>
              <a href="tel:6195550123" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                (619) 555-0123
              </a>
              <p className="text-sm text-gray-600 mt-2">Speak with a care coordinator today</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
