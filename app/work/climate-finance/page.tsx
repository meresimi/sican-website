import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Climate Finance Tracking - SICAN',
  description: 'Following the money to ensure climate funds reach the communities that need them most.',
}

export default function ClimateFinancePage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean to-lagoon text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Climate Finance Tracking
            </h1>
            <p className="text-xl text-blue-100">
              Following the Money to Ensure Climate Funds Reach Communities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* The Problem */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">The Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Billions of dollars in climate finance are pledged to Pacific Island nations each year. 
                Yet communities on the ground—the farmers facing droughts, the coastal families losing their homes 
                to rising seas, the youth planning their futures—often see little to none of this money.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Climate finance flows through complex international systems, national governments, and multiple 
                intermediaries. By the time it reaches the local level, funds have often been reduced, delayed, 
                or diverted. Communities are left waiting for the adaptation and resilience support they desperately need.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mb-12 bg-sand p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Our Approach</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl">→</span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-ocean">Monitoring Flows:</strong> We track climate finance from international 
                    commitments through to community-level implementation, identifying where funds get stuck or diverted.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl">→</span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-ocean">Community Verification:</strong> We work with communities to document 
                    what climate finance actually arrives and how it's being used, ensuring accountability.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl">→</span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-ocean">Advocacy for Transparency:</strong> We push for better reporting, 
                    clearer tracking systems, and direct access for communities to climate funds.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl">→</span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-ocean">Policy Reform:</strong> We advocate for simplified procedures and 
                    direct access mechanisms that allow local organizations to access climate finance without endless bureaucracy.
                  </p>
                </div>
              </div>
            </div>

            {/* What We've Achieved */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">What We've Achieved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Community Training</h3>
                  <p className="text-gray-700">
                    Trained community leaders across all nine provinces to track and report on climate finance 
                    flows in their areas.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Public Reports</h3>
                  <p className="text-gray-700">
                    Published annual climate finance tracking reports showing gaps between commitments and 
                    community-level delivery.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Policy Influence</h3>
                  <p className="text-gray-700">
                    Successfully advocated for simplified access procedures in Solomon Islands' National 
                    Climate Change Policy.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Regional Coordination</h3>
                  <p className="text-gray-700">
                    Collaborated with PICAN partners across the Pacific to develop unified tracking frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="mb-12 bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-6">Why This Matters</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                Climate finance is not charity—it's a matter of justice. Developed countries caused the climate crisis; 
                Pacific communities are bearing the consequences. The finance pledged to help us adapt and build resilience 
                must actually reach those who need it.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                When climate finance flows are transparent and accountable, communities can plan, adapt, and thrive. 
                When funds get lost in bureaucracy, communities remain vulnerable to every storm, every drought, every rising tide.
              </p>
            </div>

            {/* Get Involved */}
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Get Involved</h2>
              <p className="text-lg text-gray-700 mb-6">
                Support our climate finance tracking work and help ensure funds reach those who need them most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                </Link>
                <Link href="/resources" className="btn-secondary">
                  View Our Reports
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
