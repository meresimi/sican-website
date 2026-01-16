import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-ocean via-lagoon to-cyan-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About SICAN</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            The Solomon Islands Climate Action Network brings together voices from across our nation 
            to fight for climate justice and protect our islands.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SICAN is a network of civil society organizations, faith-based groups, community-based 
              organizations, and individuals united in addressing climate change in Solomon Islands. 
              Established in May 2019, we are the Solomon Islands node of the Pacific Islands Climate 
              Action Network (PICAN).
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We work to strengthen climate action across Solomon Islands by:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-ocean text-2xl mr-3">💰</span>
                <div>
                  <strong>Tracking Climate Finance:</strong> Monitoring how climate funds reach communities 
                  and ensuring transparency and accountability
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-forest text-2xl mr-3">👥</span>
                <div>
                  <strong>Empowering Communities:</strong> Building capacity for community-led climate 
                  adaptation and resilience
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral text-2xl mr-3">📢</span>
                <div>
                  <strong>Advocating for Change:</strong> Influencing policies and amplifying Pacific 
                  voices in climate negotiations
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lagoon text-2xl mr-3">⚖️</span>
                <div>
                  <strong>Demanding Climate Justice:</strong> Ensuring equitable climate action that 
                  protects our most vulnerable communities
                </div>
              </li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>✓ Transparency and Accountability</div>
                <div>✓ Community-Led Action</div>
                <div>✓ Climate Justice and Equity</div>
                <div>✓ Pacific Solidarity</div>
                <div>✓ Evidence-Based Advocacy</div>
                <div>✓ Inclusive Participation</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Network</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SICAN comprises 15+ member organizations representing diverse sectors:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 mb-8">
              <li>• Civil Society Organizations</li>
              <li>• Faith-Based Organizations</li>
              <li>• Community-Based Organizations</li>
              <li>• International NGOs</li>
              <li>• Government Representatives</li>
              <li>• Private Sector Partners</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-story" className="btn-primary text-center">
                Read Our Full Story →
              </Link>
              <Link href="/membership" className="btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white text-center">
                Join Our Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
