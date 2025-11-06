import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah K.',
    location: 'Chula Vista, CA',
    text: "I was at my wit's end before I found them. My mom has dementia and it was just too much for me to handle on my own. The caregiver they sent is a godsend. My mom is happier, and I can finally sleep at night.",
    rating: 5,
  },
  {
    name: 'David L.',
    location: 'La Mesa, CA',
    text: "My dad is so stubborn and refused help from anyone. But the caregiver won him over. She's patient, kind, and he actually looks forward to her visits. It's taken so much pressure off of me.",
    rating: 5,
  },
  {
    name: 'Maria G.',
    location: 'National City, CA',
    text: "The care coordinators really listened to our needs and found the perfect match for my mother. She has mobility issues and needs someone patient and gentle. We couldn't be happier with the service.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            What Families in San Diego Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">300+</p>
              <p className="text-sm text-gray-600">Families Served</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">94%</p>
              <p className="text-sm text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


