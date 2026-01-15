'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-ocean shadow-lg sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 relative">
          
          {/* LEFT: SICAN Logo - 3px left margin on mobile */}
          <Link href="/" className="z-20 ml-[3px] md:ml-4">
            <Image
              src="/images/sican-icon.svg"
              alt="SICAN Logo"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter drop-shadow-md hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* CENTER: Large "SICAN" Text - Always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider font-heading drop-shadow-lg" style={{
              fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.1em'
            }}>
              SICAN
            </h1>
          </div>

          {/* RIGHT: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 z-20 mr-4">
            <Link 
              href="/" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/work" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Our Work
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* RIGHT: Hamburger Menu - 3px right margin on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-20 p-2 rounded-md hover:bg-ocean-dark transition-colors mr-[3px]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-ocean-dark border-t border-ocean-light">
            <div className="flex flex-col space-y-1 py-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className="px-6 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors text-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="px-6 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors text-lg"
              >
                About
              </Link>
              <Link
                href="/work"
                onClick={toggleMenu}
                className="px-6 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors text-lg"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="px-6 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors text-lg"
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
