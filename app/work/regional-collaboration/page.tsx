import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Regional Collaboration - SICAN',
  description: 'Working with PICAN and Pacific partners for coordinated climate action across the region.',
}

export default function RegionalCollaborationPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Regional Collaboration
            </h1>
            <p className="text-xl text-blue-100">
              Stronger Together Across the Pacific
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Why Regional Collaboration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Solomon Islands does not face climate change alone. Across the Pacific—from Kiribati to Tuvalu, 
                from Vanuatu to the Marshall Islands—island nations share similar challenges: rising seas, 
                intensifying cyclones, coral bleaching, and the fundamental injustice of suffering consequences 
                from a crisis we did not cause.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                But we also share resilience, traditional knowledge, and a collective voice powerful enough 
                to be heard in global climate negotiations. Through regional collaboration, Pacific islands 
                amplify each other's advocacy, share solutions, and stand united in demanding climate justice.
              </p>
            </div>

            {/* PICAN Partnership */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">SICAN & PICAN: United Pacific Voice</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                SICAN is the Solomon Islands node of the <strong className="text-ocean">Pacific Islands Climate 
                Action Network (PICAN)</strong>, established in 2013 as the regional umbrella for climate action 
                across the Pacific.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                PICAN brings together <strong className="text-ocean">190+ member organizations</strong> from civil 
                society, youth groups, faith communities, and NGOs across Pacific islands. Together, we form a 
                powerful regional network advocating for climate justice at COP, Pacific Islands Forum, and 
                other regional platforms.
              </p>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-ocean mb-4">PICAN Country Networks:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-gradient-ocean text-white p-3 rounded">
                    <div className="font-bold">SICAN</div>
                    <div className="text-sm text-blue-200">Solomon Islands</div>
                  </div>
                  <div className="bg-gradient-ocean text-white p-3 rounded">
                    <div className="font-bold">VCAN</div>
                    <div className="text-sm text-blue-200">Vanuatu</div>
                  </div>
                  <div className="bg-gradient-ocean text-white p-3 rounded">
                    <div className="font-bold">KIRICAN</div>
                    <div className="text-sm text-blue-200">Kiribati</div>
                  </div>
                  <div className="bg-gradient-ocean text-white p-3 rounded">
                    <div className="font-bold">TUCAN</div>
                    <div className="text-sm text-blue-200">Tuvalu</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center italic">
                  Plus member organizations in Fiji, Samoa, Tonga, PNG, FSM, Palau, RMI, and beyond
                </p>
              </div>
            </div>

            {/* How We Collaborate */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">How We Collaborate Regionally</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">🤝 Coordinated Advocacy at COP</h3>
                  <p className="text-gray-700 leading-relaxed">
                    PICAN members coordinate positions before and during UN climate talks, ensuring unified Pacific 
                    messaging on key issues like Loss and Damage, climate finance, and 1.5°C. SICAN representatives 
                    join PICAN delegations to COP, speaking with one Pacific voice.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">📚 Knowledge Sharing & Capacity Building</h3>
                  <p className="text-gray-700 leading-relaxed">
                    What works in Vanuatu might work in Solomon Islands. PICAN facilitates exchange visits, 
                    webinars, and documentation of best practices—allowing us to learn from each other's 
                    successes and avoid each other's mistakes.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">📢 Joint Campaigns & Mobilization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    From #PacificPawa social media campaigns to coordinated climate strikes, PICAN members 
                    amplify each other's voices. A campaign launched in Solomon Islands can quickly spread 
                    across the Pacific.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">🔬 Joint Research & Reports</h3>
                  <p className="text-gray-700 leading-relaxed">
                    PICAN coordinates regional research on climate impacts, finance flows, and policy gaps. 
                    SICAN contributes Solomon Islands data to regional reports that inform Pacific-wide advocacy.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">💪 Regional Climate Finance Tracking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    PICAN members collaborate to track climate finance across the Pacific, documenting gaps 
                    between pledges and delivery. This regional picture strengthens advocacy for increased 
                    and more accessible funding.
                  </p>
                </div>
              </div>
            </div>

            {/* Regional Impact */}
            <div className="mb-12 bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-6">Regional Collaboration Impact</h2>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>COP28 Loss and Damage Fund:</strong> PICAN coalition's coordinated advocacy 
                    was instrumental in establishing the Loss and Damage Fund at COP28.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Pacific Islands Forum Declarations:</strong> PICAN input shaped Forum climate 
                    positions, including the Suva Declaration on Climate Change.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Regional Climate Finance Transparency:</strong> Joint PICAN advocacy led to 
                    improved climate finance reporting mechanisms across the Pacific.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Youth Exchange Programs:</strong> Over 100 Pacific youth trained through 
                    PICAN's regional youth leadership programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond PICAN */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">
                Other Regional Partnerships
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Pacific Conference of Churches (PCC)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Collaborating with faith-based organizations across the Pacific to integrate climate 
                    action into church programs and mobilize faith communities.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Pacific Islands Association of NGOs (PIANGO)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Partnering on civil society capacity building and ensuring climate issues are integrated 
                    across development work in the Pacific.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">Pacific Youth Council</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working with regional youth networks to amplify young Pacific voices and coordinate 
                    youth-led climate initiatives.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">CAN International</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Through PICAN's membership in Climate Action Network International, we connect with 
                    1,500+ climate organizations worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mb-12 bg-sand p-8 rounded-lg border-l-4 border-ocean">
              <p className="text-xl text-gray-700 italic leading-relaxed mb-4">
                "When we stand together as Pacific islands, we are not small island developing states—we are 
                Large Ocean States with a collective voice that cannot be ignored. Regional collaboration 
                turns our shared vulnerability into shared strength."
              </p>
              <p className="text-gray-600 font-semibold">— SICAN Leadership Team</p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">
                Join the Regional Climate Movement
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Stronger together across the Pacific. Connect with SICAN and PICAN to be part of regional climate action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                </Link>
                <a 
                  href="https://www.picanccn.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Visit PICAN Website →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
