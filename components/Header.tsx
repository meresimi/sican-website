'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'News', href: '/news' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-ocean text-white sticky top-0 z-50 shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/images/sican-logo.png"
                alt="SICAN Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-heading font-bold tracking-tight">SICAN</div>
              <div className="text-xs text-blue-200 -mt-1">Solomon Islands Climate Action Network</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-ocean-dark transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="ml-4 bg-coral hover:bg-coral-dark text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-ocean-dark transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-ocean-dark">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-sm font-medium hover:bg-ocean-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/get-involved"
                className="mx-4 mt-2 bg-coral hover:bg-coral-dark text-white text-center px-5 py-2 rounded-md text-sm font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
