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
        <div className="flex items-center justify-between h-80 md:h-[400px] lg:h-[480px] relative">
          
          {/* LEFT: SICAN Logo - Also increased for proportion */}
          <Link href="/" className="flex items-center space-x-3 z-20">
            <Image
              src="/images/sican-icon.svg"
              alt="SICAN Logo"
              width={160}
              height={160}
              className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 filter drop-shadow-md"
              priority
            />
            <div className="hidden lg:block">
              <div className="font-heading font-bold text-white text-2xl">
                SICAN
              </div>
              <div className="text-base text-blue-100">
                Climate Action
              </div>
            </div>
          </Link>

          {/* CENTER: Solomon Islands Flag - MASSIVE (400% LARGER!) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center h-full py-[10px]">
            <Image
              src="/images/sican-si-flag.svg"
              alt="Solomon Islands Flag"
              width={600}
              height={450}
              className="h-full w-auto drop-shadow-2xl"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* RIGHT: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 z-20">
            <Link 
              href="/" 
              className="text-white text-lg hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white text-lg hover:text-blue-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/work" 
              className="text-white text-lg hover:text-blue-200 transition-colors font-medium"
            >
              Our Work
            </Link>
            <Link 
              href="/contact" 
              className="text-white text-lg hover:text-blue-200 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* RIGHT: Hamburger Menu (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-20 p-3 rounded-md hover:bg-ocean-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-ocean-dark border-t border-ocean-light">
            <div className="flex flex-col space-y-1 py-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className="px-4 py-3 text-white text-lg hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="px-4 py-3 text-white text-lg hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="/work"
                onClick={toggleMenu}
                className="px-4 py-3 text-white text-lg hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="px-4 py-3 text-white text-lg hover:bg-ocean hover:text-blue-100 transition-colors"
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
