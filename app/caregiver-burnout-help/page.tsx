'use client'

import { Phone, Mail, AlertCircle, Heart, Battery, Users, Brain, Clock, Shield, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function CaregiverBurnoutHelp() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Burnout Focus */}
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
              <p className="section-label">CAREGIVER BURNOUT IS REAL</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Caregiver Burnout is Real. Help is Available.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                You're exhausted, stressed, and running on empty. Taking care of yourself isn't selfish—it's
                essential. Professional in-home care gives your loved one expert support while you get the
                rest and relief you desperately need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="btn-primary text-center">
                  Get Relief Today
                </a>
                <a href="tel:6195550123" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Call 24/7: (619) 555-0123
                </a>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-red-900">Caregiver Crisis?</p>
                    <p className="text-red-700 text-sm">If you're in crisis, call us immediately. We can often arrange care within 24-48 hours.</p>
                  </div>
                </div>
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
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200"
                  alt="Professional caregiver providing compassionate care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Burnout Warning Signs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="section-label text-center">WARNING SIGNS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Are You Experiencing Caregiver Burnout?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Recognizing the signs is the first step to getting help. Check if you're experiencing any of these:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card">
              <Battery className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Physical Exhaustion</h3>
              <p className="text-gray-600">Constant fatigue, sleep problems, frequent illness, chronic pain, or neglecting your own health</p>
            </div>

            <div className="card">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Emotional Overwhelm</h3>
              <p className="text-gray-600">Anxiety, depression, irritability, feeling hopeless, or crying frequently</p>
            </div>

            <div className="card">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Social Withdrawal</h3>
              <p className="text-gray-600">Avoiding friends, giving up hobbies, or feeling isolated from others who "just don't understand"</p>
            </div>

            <div className="card">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Resentment</h3>
              <p className="text-gray-600">Feeling angry at your loved one, guilty about your feelings, or questioning why you're doing this</p>
            </div>

            <div className="card">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Loss of Control</h3>
              <p className="text-gray-600">Feeling like caregiving has taken over your life and you have no time for anything else</p>
            </div>

            <div className="card">
              <AlertCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Decreased Performance</h3>
              <p className="text-gray-600">Struggling at work, making mistakes, or having trouble concentrating on anything</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">If you checked even one of these, it's time to get help.</p>
            <a href="#contact" className="btn-primary inline-block">
              Schedule Free Burnout Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              You're Not Alone—Millions Feel This Way
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">40-70%</div>
              <p className="text-lg text-gray-700">of family caregivers show symptoms of clinical depression</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">24.4</div>
              <p className="text-lg text-gray-700">hours per week average caregiving time (equivalent to a part-time job)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">23%</div>
              <p className="text-lg text-gray-700">of caregivers report their own health has gotten worse due to caregiving</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 font-semibold">
              Burnout isn't a personal failure. It's a sign you need support—and that's completely normal.
            </p>
          </div>
        </div>
      </section>

      {/* Solution - Respite Care */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">THE SOLUTION</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Take Care of Yourself While We Care for Your Loved One
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Professional respite care isn't giving up—it's the smartest thing you can do for both you
                and your loved one. When you're rested and recharged, you can be a better caregiver. And
                your loved one gets expert, compassionate care from trained professionals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Respite Care</p>
                    <p className="text-gray-600">From a few hours to a full weekend—get the break you need</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Trained Caregivers</p>
                    <p className="text-gray-600">Licensed professionals who understand senior care challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Same Caregiver Consistency</p>
                    <p className="text-gray-600">Build trust with regular caregivers who know your loved one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Available</p>
                    <p className="text-gray-600">Crisis situations? We can often arrange care within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-primary inline-block">
                Start Getting Relief This Week
              </a>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200"
                alt="Caregiver enjoying peaceful moment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Self-Care Tips While Getting Help */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="section-label text-center">RECOVERY STARTS TODAY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What to Do While We Get Your Care Set Up
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">✓ Give yourself permission to rest</h3>
                <p className="text-gray-600">Burnout recovery starts with acknowledging you deserve help</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">✓ Talk to someone who understands</h3>
                <p className="text-gray-600">Call our care coordinators—they've heard it all before</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">✓ Start small with respite care</h3>
                <p className="text-gray-600">Even 4 hours a week can make a dramatic difference</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">✓ Let go of the guilt</h3>
                <p className="text-gray-600">Getting help makes you a better caregiver, not a worse one</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Burnout Recovery Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="section-label text-center">RECOVERY STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            From Burnout to Balance
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "I was at rock bottom—crying every day, snapping at my kids, my blood pressure through the roof.
                Getting respite care three days a week literally saved my life. I can sleep again. I can think again.
                And ironically, my mom is happier too because I'm not so stressed when I'm with her."
              </p>
              <p className="font-semibold text-gray-900">— Jennifer M., Chula Vista</p>
              <p className="text-sm text-gray-600">Caring for mother with Alzheimer's</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "I didn't realize how burned out I was until I finally got help. The caregiver comes for 6 hours on
                Saturdays and it's my 'day off.' I actually exercise, see friends, feel like myself again. It's not
                selfish—it's survival."
              </p>
              <p className="font-semibold text-gray-900">— Robert T., La Mesa</p>
              <p className="text-sm text-gray-600">Caring for father with Parkinson's</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait Until You Break Down
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            You've been strong for so long. Let us help you before burnout causes serious health problems
            or damages your relationship with your loved one.
          </p>
          <a href="#contact" className="btn-secondary inline-block text-lg px-8 py-4 bg-white text-primary hover:bg-gray-50">
            Get Help This Week
          </a>
          <p className="mt-4 text-sm opacity-75">Free consultation • No pressure • Same-week care available</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">GET RELIEF NOW</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Schedule Your Free Burnout Assessment
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Talk to a care coordinator who understands caregiver burnout. We'll create a custom plan to get you relief.
            </p>

            <ContactForm />

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">In crisis? Call now:</p>
              <a href="tel:6195550123" className="text-3xl font-bold text-primary hover:text-primary-dark transition-colors">
                (619) 555-0123
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7 • Emergency care available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
