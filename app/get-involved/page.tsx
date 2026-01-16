import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GetInvolvedPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral via-orange-500 to-red-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Join us in protecting our islands and fighting for climate justice. There are many ways you can contribute to SICAN's mission.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Become a Member */}
            <div className="bg-ocean text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Become a Member</h3>
              <p className="text-blue-100 mb-6">
                Join as an organization or individual member and be part of our network.
              </p>
              <Link href="/membership" className="btn-outline border-white text-white hover:bg-white hover:text-ocean inline-block">
                Join Now →
              </Link>
            </div>

            {/* Volunteer */}
            <div className="bg-forest text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Volunteer</h3>
              <p className="text-green-100 mb-6">
                Contribute your time and skills to support SICAN's programs and campaigns.
              </p>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest inline-block">
                Volunteer →
              </Link>
            </div>

            {/* Donate/Support */}
            <div className="bg-coral text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold mb-3">Support Our Work</h3>
              <p className="text-orange-100 mb-6">
                Financial support helps us continue our climate action work across Solomon Islands.
              </p>
              <Link href="/support" className="btn-outline border-white text-white hover:bg-white hover:text-coral inline-block">
                Support Us →
              </Link>
            </div>

            {/* Attend Events */}
            <div className="bg-gray-700 text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-3">Attend Events</h3>
              <p className="text-gray-300 mb-6">
                Join our workshops, trainings, and community events to learn and connect.
              </p>
              <Link href="/news" className="btn-outline border-white text-white hover:bg-white hover:text-gray-700 inline-block">
                View Events →
              </Link>
            </div>

            {/* Share Our Message */}
            <div className="bg-lagoon text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-2xl font-bold mb-3">Share Our Message</h3>
              <p className="text-cyan-100 mb-6">
                Amplify our voice by sharing SICAN's work on social media and in your community.
              </p>
              <Link href="/news" className="btn-outline border-white text-white hover:bg-white hover:text-lagoon inline-block">
                Latest News →
              </Link>
            </div>

            {/* Partner With Us */}
            <div className="bg-purple-600 text-white rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🤲</div>
              <h3 className="text-2xl font-bold mb-3">Partner With Us</h3>
              <p className="text-purple-200 mb-6">
                Collaborate with SICAN on climate projects and initiatives.
              </p>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-purple-600 inline-block">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-ocean to-lagoon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every action counts in the fight against climate change. Start your journey with SICAN today.
          </p>
          <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100 inline-block">
            Join SICAN Now →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
