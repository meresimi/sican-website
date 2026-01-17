import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral via-orange-500 to-amber-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Get in touch with SICAN. We'd love to hear from you about climate action in Solomon Islands.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Get In Touch</h2>
              
              {/* Email */}
              <div className="mb-8 flex items-start">
                <div className="bg-ocean text-white rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:sicannetwork@gmail.com" className="text-ocean hover:text-ocean-dark text-lg">
                    sicannetwork@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8 flex items-start">
                <div className="bg-forest text-white rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.facebook.com/SICAN2019" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean hover:text-ocean-dark block"
                    >
                      Facebook: @SICAN2019
                    </a>
                    <a 
                      href="https://www.instagram.com/can_solomonisland" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean hover:text-ocean-dark block"
                    >
                      Instagram: @can_solomonisland
                    </a>
                  </div>
                </div>
              </div>

              {/* Location with Google Maps Link */}
              <div className="mb-8 flex items-start">
                <div className="bg-coral text-white rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <a 
                    href="https://www.google.com/maps?q=-9.434737,159.961507"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocean hover:text-ocean-dark underline"
                  >
                    Ground Floor (East Wing), Unit 2,<br />
                    St. Agnes Mother's Union Transit House,<br />
                    Honiara, Solomon Islands
                  </a>
                  <p className="text-xs text-gray-500 mt-2">📍 Click to open in maps</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form 
                action="https://formsubmit.co/sicannetwork@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder="+677 ..."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="subject"
                    name="_subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="Membership Inquiry">Membership Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Volunteer Interest">Volunteer Interest</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{display: 'none'}} />

                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message →
                </button>

                <p className="text-xs text-gray-600 text-center">
                  We'll get back to you within 1-2 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
