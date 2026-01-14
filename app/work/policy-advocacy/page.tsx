import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Policy Advocacy - SICAN',
  description: 'Influencing climate policy at national, regional, and international levels to ensure justice for Solomon Islands.',
}

export default function PolicyAdvocacyPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral to-orange-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Policy Advocacy
            </h1>
            <p className="text-xl text-orange-100">
              Influencing Climate Policy from Village Councils to COP Negotiations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Our Advocacy Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Climate policy shapes everything—from how much funding flows to communities, to whether our islands 
                will survive rising seas. Yet policy is often made in distant capitals and conference halls, far from 
                the people whose lives depend on getting it right.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                SICAN bridges this gap. We carry community voices to policy tables, translate technical jargon into 
                plain language, and ensure Solomon Islands' climate policies actually serve Solomon Islanders.
              </p>
            </div>

            {/* Three Levels */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-8 text-center">
                We Advocate at Three Levels
              </h2>
              
              <div className="space-y-6">
                {/* National */}
                <div className="bg-gradient-to-r from-ocean to-lagoon text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">🏛️ National Level</h3>
                  <div className="space-y-3 text-blue-100">
                    <p><strong>• National Climate Change Policy:</strong> We advocate for policies that prioritize 
                    community-led adaptation, transparent climate finance, and protection of vulnerable populations.</p>
                    <p><strong>• Budget Advocacy:</strong> We push for increased national climate budget allocations 
                    and track how climate funds are spent.</p>
                    <p><strong>• Legislative Reform:</strong> We work with MPs to strengthen climate laws and 
                    integrate climate considerations into all sectors.</p>
                    <p><strong>• Community Consultation:</strong> We ensure government climate planning includes 
                    genuine community input, not just token participation.</p>
                  </div>
                </div>

                {/* Regional */}
                <div className="bg-gradient-to-r from-lagoon to-teal-600 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">🌏 Regional Level (Pacific)</h3>
                  <div className="space-y-3 text-teal-100">
                    <p><strong>• Pacific Islands Forum:</strong> Through PICAN, we influence regional climate 
                    positions and declarations that shape Pacific negotiating stances.</p>
                    <p><strong>• Regional Climate Finance Mechanisms:</strong> We advocate for Pacific-led 
                    climate finance architecture that serves island needs.</p>
                    <p><strong>• Loss and Damage:</strong> We push for recognition of and compensation for 
                    climate losses already suffered by Pacific nations.</p>
                    <p><strong>• Pacific Voice Unity:</strong> We coordinate with PICAN members to ensure 
                    a unified, amplified Pacific voice in global forums.</p>
                  </div>
                </div>

                {/* International */}
                <div className="bg-gradient-to-r from-coral to-orange-600 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">🌍 International Level (UN/COP)</h3>
                  <div className="space-y-3 text-orange-100">
                    <p><strong>• COP Negotiations:</strong> SICAN members attend UN climate talks, advocating 
                    for 1.5°C limit, climate justice, and adequate finance.</p>
                    <p><strong>• Loss and Damage Fund:</strong> We push for operationalization of the Loss and 
                    Damage Fund with direct access for affected communities.</p>
                    <p><strong>• Climate Finance Commitments:</strong> We demand wealthy nations honor their 
                    $100 billion annual climate finance pledge.</p>
                    <p><strong>• Side Events and Statements:</strong> We organize events and interventions 
                    ensuring Solomon Islands' reality is heard at COP.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Wins */}
            <div className="mb-12 bg-sand p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Recent Policy Wins</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-2xl">✓</span>
                  <div>
                    <p className="text-lg text-gray-700"><strong className="text-ocean">National Climate Change Policy Update (2024):</strong> 
                    Successfully advocated for inclusion of community-led adaptation and climate finance transparency provisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-2xl">✓</span>
                  <div>
                    <p className="text-lg text-gray-700"><strong className="text-ocean">Loss and Damage Fund (COP28):</strong> 
                    PICAN coalition including SICAN successfully pushed for establishment of Loss and Damage Fund at COP28.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-2xl">✓</span>
                  <div>
                    <p className="text-lg text-gray-700"><strong className="text-ocean">Pacific Voice at COP29:</strong> 
                    SICAN contributed to unified Pacific position demanding scaled-up climate finance and 1.5°C commitment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-2xl">✓</span>
                  <div>
                    <p className="text-lg text-gray-700"><strong className="text-ocean">Provincial Climate Plans:</strong> 
                    Supported development of climate-sensitive development plans in three provinces.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Do It */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Our Advocacy Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Research & Evidence</h3>
                  <p className="text-gray-700">
                    We produce policy briefs, reports, and evidence-based recommendations grounded in 
                    community realities and climate science.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Coalition Building</h3>
                  <p className="text-gray-700">
                    We unite our 15 member organizations and partner with allies across sectors to 
                    amplify advocacy impact.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Media Engagement</h3>
                  <p className="text-gray-700">
                    We use media—radio, newspapers, social media—to build public support for 
                    climate-positive policies.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Direct Engagement</h3>
                  <p className="text-gray-700">
                    We meet with MPs, ministers, and officials to present community perspectives 
                    and negotiate policy improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-4">Policy Change Needs Your Voice</h2>
              <p className="text-lg text-blue-100 mb-6">
                Strong climate policy requires sustained pressure from civil society. Join our advocacy campaigns 
                and help shape policies that protect Solomon Islands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Join Our Advocacy
                </Link>
                <Link href="/resources" className="bg-white hover:bg-gray-100 text-ocean font-semibold px-6 py-3 rounded-lg transition-colors">
                  Read Our Policy Briefs
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
