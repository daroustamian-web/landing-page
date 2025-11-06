import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContactCards from '@/components/ContactCards'
import Problem from '@/components/Problem'
import Agitate from '@/components/Agitate'
import Solution from '@/components/Solution'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <ContactCards />
      <Problem />
      <Agitate />
      <Solution />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Booking />
      <ContactForm />
      <Footer />
    </main>
  )
}


