import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-ocean to-lagoon py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Our Climate Work</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to receive updates when we publish new articles, events, and climate action news.
            </p>
            
            <form 
              action="https://formsubmit.co/winifred@oxfam.org.sb" 
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
              />
              <input type="hidden" name="_subject" value="New SICAN Newsletter Subscription" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://sican-website.vercel.app/thank-you" />
              <button 
                type="submit"
                className="btn-primary bg-white text-ocean hover:bg-gray-100 whitespace-nowrap px-8"
              >
                Subscribe →
              </button>
            </form>
            <p className="text-xs text-blue-200 mt-3">
              We'll notify you when new content is published. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* About Column with Banner */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/images/sican-banner2.png"
                  alt="SICAN Banner"
                  width={300}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Solomon Islands Climate Action Network - Working together for climate justice. 
                A network of organizations and individuals committed to protecting our islands 
                from climate change impacts.
              </p>
              <div className="text-sm text-gray-400">
                <p>Part of PICAN (Pacific Islands Climate Action Network)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About SICAN
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="text-gray-400 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-gray-400 hover:text-white transition-colors">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/membership" className="text-gray-400 hover:text-white transition-colors">
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
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
