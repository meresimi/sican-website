import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SupportPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral via-orange-500 to-amber-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Support Our Work</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Your support enables SICAN to continue fighting for climate justice across Solomon Islands.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Ways to Support SICAN</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Financial Support */}
            <div className="bg-gradient-to-br from-ocean to-lagoon text-white rounded-lg p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Financial Support</h3>
              <p className="text-blue-100 mb-6">
                Donations help fund our programs, training, and advocacy work across Solomon Islands.
              </p>
              <div className="bg-white/20 p-4 rounded-lg mb-6">
                <p className="text-sm mb-2">Contact us for donation details:</p>
                <p className="font-semibold">info@sican.org.sb</p>
              </div>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-ocean inline-block">
                Contact Us →
              </Link>
            </div>

            {/* In-Kind Support */}
            <div className="bg-gradient-to-br from-forest to-green-600 text-white rounded-lg p-8">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4">In-Kind Support</h3>
              <p className="text-green-100 mb-6">
                Provide equipment, venues, services, or expertise to support our activities.
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• Meeting spaces</li>
                <li>• Training materials</li>
                <li>• Technical expertise</li>
                <li>• Transportation</li>
              </ul>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest inline-block">
                Get In Touch →
              </Link>
            </div>

            {/* Partnerships */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg p-8">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="text-purple-100 mb-6">
                Collaborate on climate projects, research, or advocacy campaigns.
              </p>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-purple-600 inline-block">
                Explore Partnership →
              </Link>
            </div>

            {/* Spread the Word */}
            <div className="bg-gradient-to-br from-coral to-red-600 text-white rounded-lg p-8">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-2xl font-bold mb-4">Spread the Word</h3>
              <p className="text-orange-100 mb-6">
                Share our message, follow us on social media, and help amplify Pacific voices.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 btn-outline border-white text-white hover:bg-white hover:text-coral">
                  Share →
                </button>
              </div>
            </div>
          </div>

          {/* Impact Message */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Your Support Makes a Difference</h3>
            <p className="text-gray-700 leading-relaxed">
              Every contribution – whether financial, in-kind, or through partnerships – helps SICAN 
              strengthen climate action across Solomon Islands. Together, we can build resilience, 
              demand climate justice, and protect our islands for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Support?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how you can support SICAN's climate action work.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
