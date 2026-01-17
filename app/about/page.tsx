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
        <div className="container-custom max-w-5xl">
          
          {/* Who We Are */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SICAN is a network of civil society organizations, faith-based groups, community-based 
              organizations, and individuals united in addressing climate change in Solomon Islands. 
              Established in May 2019, we are the Solomon Islands node of the Pacific Islands Climate 
              Action Network (PICAN).
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We work to strengthen climate action across Solomon Islands through advocacy, empowerment, 
              networking, and collaboration. SICAN amplifies the voices of communities most affected by 
              climate change and holds decision-makers accountable for climate justice.
            </p>
          </div>

          {/* Our Goal */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Goal</h2>
            <div className="bg-gradient-to-r from-ocean to-lagoon text-white rounded-lg p-8 shadow-lg">
              <p className="text-lg leading-relaxed">
                To advocate and empower SICAN members to promote and influence climate change issues 
                through partnership, research, information sharing, networking with government, private 
                sector, INGOs, LNGOs and communities at all levels. To ensure that an inclusive approach 
                is taken in building resilience in Solomon Islands.
              </p>
            </div>
          </div>

          {/* Our Objectives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-ocean">
                <div className="flex items-start">
                  <span className="text-ocean text-2xl font-bold mr-4">1.</span>
                  <p className="text-gray-700">
                    To collaborate as a civil society organisation with a unified voice to influence climate policies
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-forest">
                <div className="flex items-start">
                  <span className="text-forest text-2xl font-bold mr-4">2.</span>
                  <p className="text-gray-700">
                    To learn good practice and share amongst the network to increase capacity in 
                    adaptation and mitigation of climate change
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-coral">
                <div className="flex items-start">
                  <span className="text-coral text-2xl font-bold mr-4">3.</span>
                  <p className="text-gray-700">
                    To strengthen linkages and networks with other national, regional and international 
                    bodies and organisations to influence polices and access to technical assistance and support
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-lagoon">
                <div className="flex items-start">
                  <span className="text-lagoon text-2xl font-bold mr-4">4.</span>
                  <p className="text-gray-700">
                    To provide a forum for advocacy and influence on climate change issues on behalf of 
                    its members and affiliates
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-start">
                  <span className="text-purple-600 text-2xl font-bold mr-4">5.</span>
                  <p className="text-gray-700">
                    To influence accessibility to climate financing on behalf of its affiliates and constituents
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-600">
                <div className="flex items-start">
                  <span className="text-amber-600 text-2xl font-bold mr-4">6.</span>
                  <p className="text-gray-700">
                    To represent members and affiliates in national, regional and international climate 
                    change negations and conferences
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-pink-600">
                <div className="flex items-start">
                  <span className="text-pink-600 text-2xl font-bold mr-4">7.</span>
                  <p className="text-gray-700">
                    To influence social inclusion of women, youth, persons with disabilities, older adults 
                    and other marginalised groups in climate change activities in Solomon Islands
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-teal-600">
                <div className="flex items-start">
                  <span className="text-teal-600 text-2xl font-bold mr-4">8.</span>
                  <p className="text-gray-700">
                    To act as a conduit between government, donors and private sector to support civil 
                    society voices on climate policy development and its implementation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16 bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Transparency and Accountability</span>
              </div>
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Community-Led Action</span>
              </div>
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Climate Justice and Equity</span>
              </div>
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Pacific Solidarity</span>
              </div>
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Evidence-Based Advocacy</span>
              </div>
              <div className="flex items-center">
                <span className="text-forest text-xl mr-3">✓</span>
                <span>Inclusive Participation</span>
              </div>
            </div>
          </div>

          {/* Our Network */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Network</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-ocean mb-2">35</div>
                <div className="text-lg font-semibold mb-3">Organizational Members</div>
                <p className="text-gray-700 text-sm">
                  NGOs, CBOs, faith-based organizations, and other institutions committed to climate action
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-forest mb-2">21</div>
                <div className="text-lg font-semibold mb-3">Individual Members</div>
                <p className="text-gray-700 text-sm">
                  Passionate individuals contributing their time, skills, and expertise to climate action
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/members" className="text-ocean hover:text-ocean-dark font-semibold">
                View All Our Members →
              </Link>
            </div>
          </div>

          {/* Regional Connection */}
          <div className="mb-16 bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Part of Something Bigger</h2>
            <p className="text-gray-700 leading-relaxed">
              As the Solomon Islands node of PICAN (Pacific Islands Climate Action Network), SICAN connects 
              local action to regional and global climate movements. We work alongside sister networks in 
              Vanuatu (VCAN), Kiribati (KIRICAN), Tuvalu (TUCAN), and other Pacific nations, collectively 
              amplifying Pacific voices in global climate negotiations.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/our-story" className="btn-primary text-center">
              Read Our Full Story (Stori Blo Mifala) →
            </Link>
            <Link href="/membership" className="btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white text-center">
              Join Our Network (Kam Joinim Mifala)
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
