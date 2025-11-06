import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Schedule a Free Consultation',
    description: 'Click the button below to schedule a no-obligation call with one of our care coordinators.',
  },
  {
    number: '2',
    title: 'Create a Custom Care Plan',
    description: "We'll work with you to create a personalized care plan that meets your parent's needs and your budget.",
  },
  {
    number: '3',
    title: 'Meet Your Caregiver',
    description: "We'll match your parent with a caregiver who is not only highly skilled but also a great personality fit.",
  },
  {
    number: '4',
    title: 'Start Care & Get Peace of Mind',
    description: 'Your parent starts receiving the care they need, and you can finally relax.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            GETTING STARTED
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Getting Started is Easy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-cream rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2 z-0" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
          >
            Start Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}


