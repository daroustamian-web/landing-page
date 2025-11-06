'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-light py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a href="mailto:care@yoursite.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" />
              care@yoursite.com
            </a>
            <a href="tel:6195550123" className="flex items-center gap-2 hover:text-primary">
              <Phone className="w-4 h-4" />
              (619) 555-0123
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">San Diego Senior Care</span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <a href="#contact" className="btn-primary">
              Get Free Consultation
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

