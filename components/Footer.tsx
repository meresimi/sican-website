import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section - TESTING with simionabobai@gmail.com */}
      <div className="bg-gradient-to-r from-ocean to-lagoon py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
              Stay Updated on Our Climate Work
            </h3>
            <p className="text-sm italic text-blue-100 mb-6">
              (Stap Save Long Waka Blong Mifala)
            </p>
            
            <form 
              action="https://formsubmit.co/simionabobai@gmail.com" 
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              {/* Email Input */}
              <input 
                type="email" 
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
              />
              
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="SICAN Newsletter Subscription TEST" />
              <input type="hidden" name="_next" value="https://sican-website.vercel.app/thank-you" />
              <input type="hidden" name="_autoresponse" value="Thank you for subscribing to SICAN updates! We'll keep you informed about our climate action work." />
              
              {/* Anti-spam honeypot */}
              <input type="text" name="_honey" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
              
              {/* Submit Button */}
              <button 
                type="submit"
                className="btn-primary bg-white text-ocean hover:bg-gray-100 whitespace-nowrap px-8"
              >
                Subscribe <span className="text-xs italic">(Saenem)</span> →
              </button>
            </form>
            
            <p className="text-xs text-blue-200 mt-3">
              We'll notify you when new content is published.
            </p>
            
            <p className="text-xs text-yellow-200 mt-2 font-semibold">
              🧪 TESTING MODE: Emails going to simionabobai@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-700 py-12 bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* About Column with Banner */}
            <div className="md:col-span-2">
              <div className="mb-4 bg-white rounded-lg p-3 inline-block">
                <Image
                  src="/images/sican-banner2.png"
                  alt="SICAN Banner"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solomon Islands Climate Action Network - Working together for climate justice. 
                A network of organizations and individuals committed to protecting our islands 
                from climate change impacts.
              </p>
              <div className="text-sm text-gray-400 mb-6">
                <p>Part of PICAN (Pacific Islands Climate Action Network)</p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/SICAN2019" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/can_solomonisland" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About SICAN
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="text-gray-300 hover:text-white transition-colors">
                    Our Story <span className="text-xs italic">(Stori Blo Mifala)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-300 hover:text-white transition-colors">
                    Our Work <span className="text-xs italic">(Waka Mifala Duim)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-gray-300 hover:text-white transition-colors">
                    Our Impact <span className="text-xs italic">(Waka Wea Mifala Mekem)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get Involved <span className="text-xs italic">(Joinim Mifala)</span></h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/membership" className="text-gray-300 hover:text-white transition-colors">
                    Membership <span className="text-xs italic">(Membasip)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                    Support Us <span className="text-xs italic">(Helpem Mifala)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} SICAN. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
