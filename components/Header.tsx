import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with responsive sizes */}
          <Link href="/" className="flex items-center space-x-3">
            <picture>
              {/* Desktop */}
              <source
                media="(min-width: 1024px)"
                srcSet="/images/sican-logo-lg.png"
              />
              {/* Tablet */}
              <source
                media="(min-width: 768px)"
                srcSet="/images/sican-logo-md.png"
              />
              {/* Mobile */}
              <Image
                src="/images/sican-logo-sm.png"
                alt="SICAN Logo"
                width={120}
                height={120}
                className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                priority
              />
            </picture>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-ocean text-sm md:text-base lg:text-lg">
                SICAN
              </div>
              <div className="text-xs text-gray-600">
                Climate Action Network
              </div>
            </div>
          </Link>

          {/* Rest of your navigation... */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/work" className="nav-link">Our Work</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
