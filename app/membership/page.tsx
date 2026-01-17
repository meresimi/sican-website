import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MembershipPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean via-ocean-light to-lagoon text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Join SICAN</h1>
          <p className="text-lg italic text-blue-100 mb-4">(Kam Joinim Mifala)</p>
          <p className="text-xl text-blue-100 max-w-3xl">
            Become part of Solomon Islands' leading climate action network. Together, we protect our islands and build a sustainable future.
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Membership Categories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Organization Membership */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-ocean">
              <h3 className="text-2xl font-bold text-ocean mb-4">Organization Membership</h3>
              
              <div className="bg-ocean text-white rounded-lg p-4 mb-6 text-center">
                <div className="text-3xl font-bold">SBD $100</div>
                <div className="text-sm text-blue-100">Annual Fee</div>
              </div>
              
              <p className="text-gray-700 mb-6">
                For NGOs, CBOs, faith-based organizations, and institutions committed to climate action.
              </p>
              
              <h4 className="font-bold mb-3">Benefits:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Voting rights in SICAN decisions</li>
                <li>✓ Representation at regional/international forums</li>
                <li>✓ Access to capacity building trainings</li>
                <li>✓ Climate finance tracking resources</li>
                <li>✓ Networking with other member organizations</li>
                <li>✓ SICAN updates and newsletters</li>
                <li>✓ Attend all public events and meetings</li>
                <li>✓ Access to advocacy resources</li>
              </ul>

              <div className="space-y-3">
                <a 
                  href="/forms/organization-membership.pdf" 
                  download
                  className="block w-full btn-primary text-center"
                >
                  📥 Download Form <span className="text-xs italic">(Daonlodim Fom)</span>
                </a>
                <Link 
                  href="/contact"
                  className="block w-full btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white text-center"
                >
                  Contact Us to Register
                </Link>
              </div>
            </div>

            {/* Individual Membership */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-forest">
              <h3 className="text-2xl font-bold text-forest mb-4">Individual Membership</h3>
              
              <div className="bg-forest text-white rounded-lg p-4 mb-6 text-center">
                <div className="text-3xl font-bold">SBD $50</div>
                <div className="text-sm text-green-100">Annual Fee</div>
              </div>
              
              <p className="text-gray-700 mb-6">
                For passionate individuals who want to contribute to climate action.
              </p>
              
              <h4 className="font-bold mb-3">Benefits:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Voting rights in SICAN decisions</li>
                <li>✓ Participate in working groups</li>
                <li>✓ Access to capacity building trainings</li>
                <li>✓ Networking opportunities</li>
                <li>✓ SICAN updates and newsletters</li>
                <li>✓ Attend all public events and meetings</li>
                <li>✓ Access to resources and materials</li>
                <li>✓ Volunteer opportunities</li>
              </ul>

              <div className="space-y-3">
                <a 
                  href="/forms/individual-membership.pdf" 
                  download
                  className="block w-full btn-primary text-center"
                >
                  📥 Download Form <span className="text-xs italic">(Daonlodim Fom)</span>
                </a>
                <Link 
                  href="/contact"
                  className="block w-full btn-outline border-forest text-forest hover:bg-forest hover:text-white text-center"
                >
                  Contact Us to Register
                </Link>
              </div>
            </div>

            {/* Observer Membership */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-400">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Volunteer/Observer</h3>
              
              <div className="bg-gray-400 text-white rounded-lg p-4 mb-6 text-center">
                <div className="text-3xl font-bold">FREE</div>
                <div className="text-sm text-gray-100">No Fee</div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Stay informed and support SICAN without full membership commitments.
              </p>
              
              <h4 className="font-bold mb-3">Benefits:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Receive SICAN updates and newsletters</li>
                <li>✓ Attend public events and meetings</li>
                <li>✓ Access to resources and materials</li>
                <li>✓ Volunteer opportunities</li>
              </ul>

              <Link 
                href="/contact"
                className="block w-full btn-outline border-gray-400 text-gray-700 hover:bg-gray-400 hover:text-white text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Ready to Join?</h3>
            <p className="text-sm italic text-gray-600 mb-4">(Redi fo Joinim?)</p>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Download the appropriate membership form, fill it out, and send it to us. 
              We'll review your application and get back to you within 5 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us →
              </Link>
              <Link href="/about" className="btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white">
                Learn More About SICAN <span className="text-xs italic">(Faen Aot Moa)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
