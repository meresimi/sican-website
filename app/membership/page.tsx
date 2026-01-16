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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Join SICAN</h1>
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
              <p className="text-gray-700 mb-6">
                For NGOs, CBOs, faith-based organizations, and institutions committed to climate action.
              </p>
              
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Registered organization in Solomon Islands</li>
                <li>✓ Climate-related mission or activities</li>
                <li>✓ Commitment to SICAN values</li>
                <li>✓ Active participation in network</li>
              </ul>

              <div className="space-y-3">
                <a 
                  href="/forms/organization-membership.pdf" 
                  download
                  className="block w-full btn-primary text-center"
                >
                  📥 Download Form
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
              <p className="text-gray-700 mb-6">
                For passionate individuals who want to contribute to climate action.
              </p>
              
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Solomon Islands citizen or resident</li>
                <li>✓ Interest in climate change issues</li>
                <li>✓ Willingness to volunteer time/skills</li>
                <li>✓ Support SICAN's mission</li>
              </ul>

              <div className="space-y-3">
                <a 
                  href="/forms/individual-membership.pdf" 
                  download
                  className="block w-full btn-primary text-center"
                >
                  📥 Download Form
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
              <p className="text-gray-700 mb-6">
                Stay informed and support SICAN without full membership commitments.
              </p>
              
              <h4 className="font-bold mb-2">Benefits:</h4>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>✓ Receive SICAN updates</li>
                <li>✓ Attend public events</li>
                <li>✓ Access resources</li>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Download the appropriate membership form, fill it out, and send it to us. 
              We'll review your application and get back to you within 5 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us →
              </Link>
              <Link href="/about" className="btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white">
                Learn More About SICAN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
