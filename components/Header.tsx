'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-ocean shadow-md sticky top-0 z-50">
      <nav className="px-0 md:px-4 lg:px-8 max-w-7xl mx-auto h-20 md:h-24 lg:h-28 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 ml-[3px] md:ml-4">
          <Image
            src="/images/sican-icon.svg"
            alt="SICAN Logo"
            width={64}
            height={64}
            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
          />
        </Link>

        {/* Centered Text */}
        <h1 
          className="absolute left-1/2 transform -translate-x-1/2 text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          style={{
            fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '0.1em'
          }}
        >
          SICAN
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 mr-4">
          <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">
            About
          </Link>
          <Link href="/work" className="text-white hover:text-blue-200 transition-colors font-medium">
            Our Work
          </Link>
          <Link href="/impact" className="text-white hover:text-blue-200 transition-colors font-medium">
            Our Impact
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden flex flex-col gap-1.5 mr-[3px] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-8 h-1 bg-white rounded"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 md:top-24 left-0 right-0 bg-ocean-dark shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <Link 
                href="/" 
                className="px-6 py-3 text-white hover:bg-ocean transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 text-white hover:bg-ocean transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/work" 
                className="px-6 py-3 text-white hover:bg-ocean transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link 
                href="/impact" 
                className="px-6 py-3 text-white hover:bg-ocean transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Impact
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 text-white hover:bg-ocean transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
