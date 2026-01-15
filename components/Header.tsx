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
        <div className="flex items-center justify-between py-[5px] relative">
          
          {/* LEFT: SICAN Logo - Increased height */}
          <Link href="/" className="flex items-center space-x-3 z-20">
            <Image
              src="/images/sican-icon.svg"
              alt="SICAN Logo"
              width={60}
              height={60}
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 filter drop-shadow-md"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white text-sm md:text-base lg:text-lg">
                SICAN
              </div>
              <div className="text-xs text-blue-100">
                Climate Action
              </div>
            </div>
          </Link>

          {/* CENTER: Solomon Islands Flag - Increased height */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Image
              src="/images/sican-si-flag.svg"
              alt="Solomon Islands Flag"
              width={100}
              height={75}
              className="h-14 w-auto md:h-16 lg:h-20 drop-shadow-md"
            />
          </div>

          {/* RIGHT: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 z-20">
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

          {/* RIGHT: Hamburger Menu (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-20 p-2 rounded-md hover:bg-ocean-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg 
                className="w-7 h-7 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                className="w-7 h-7 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
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
                className="px-4 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="px-4 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="/work"
                onClick={toggleMenu}
                className="px-4 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="px-4 py-3 text-white hover:bg-ocean hover:text-blue-100 transition-colors"
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
