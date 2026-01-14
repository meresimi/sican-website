import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Community Empowerment - SICAN',
  description: 'Building capacity and resilience in communities across all nine provinces of Solomon Islands.',
}

export default function CommunityEmpowermentPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest to-forest-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Community Empowerment
            </h1>
            <p className="text-xl text-green-100">
              Building Capacity and Resilience Across All Nine Provinces
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
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Communities on the frontlines of climate change already possess deep knowledge, traditional practices, 
                and adaptive strategies that have sustained them for generations. Our role is not to impose external 
                solutions but to strengthen local capacity, amplify community voices, and ensure people have the tools, 
                knowledge, and resources to lead their own climate action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From Guadalcanal to Temotu, from coastal villages to inland communities, SICAN works alongside Solomon Islanders 
                to build climate resilience that honors kastom while embracing innovation.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12 bg-sand p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">What We Do</h2>
              <div className="space-y-6">
                
                <div className="border-l-4 border-forest pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">Climate Literacy Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We deliver workshops in local languages across all provinces, helping communities understand climate 
                    science, impacts, and adaptation strategies. Training covers everything from reading weather patterns 
                    to understanding climate negotiations at COP.
                  </p>
                </div>

                <div className="border-l-4 border-forest pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">Community-Led Adaptation Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We support communities to design and implement their own climate adaptation initiatives—coastal 
                    protection, water security, food gardens, mangrove restoration—with technical and financial support 
                    but community leadership.
                  </p>
                </div>

                <div className="border-l-4 border-forest pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">Traditional Knowledge Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working with chiefs and elders, we document traditional climate indicators, seasonal calendars, 
                    and adaptive practices—ensuring this knowledge is preserved and integrated into climate planning.
                  </p>
                </div>

                <div className="border-l-4 border-forest pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">Women's Leadership Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Climate change disproportionately affects women, yet their voices are often excluded from 
                    decision-making. We run dedicated programs to develop women climate leaders in every province.
                  </p>
                </div>

                <div className="border-l-4 border-forest pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">Community Monitoring Networks</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We train community members to monitor local climate impacts—sea level changes, coastal erosion, 
                    rainfall patterns, crop yields—creating a grassroots early warning system.
                  </p>
                </div>

              </div>
            </div>

            {/* Impact Stories */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Community Success Stories</h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-forest mb-3">🌊 Malaita Province - Coastal Protection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    After SICAN training, three coastal communities in Malaita designed and implemented mangrove 
                    restoration projects combining traditional planting knowledge with modern coastal engineering. 
                    Result: 5 hectares of new mangroves protecting 200+ homes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-forest mb-3">🌾 Guadalcanal - Climate-Smart Agriculture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Women farmers trained by SICAN established climate-resilient food gardens using drought-resistant 
                    crops and water conservation techniques. These gardens now feed 50+ families and generate income 
                    through market sales.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-forest mb-3">💧 Temotu - Water Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Communities in Temotu used SICAN training to build rainwater harvesting systems and protect 
                    freshwater sources from saltwater intrusion. Clean water access improved for 500+ people.
                  </p>
                </div>
              </div>
            </div>

            {/* By the Numbers */}
            <div className="mb-12 bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center">Community Empowerment By the Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">9</div>
                  <div className="text-blue-100">Provinces Covered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">500+</div>
                  <div className="text-blue-100">Community Leaders Trained</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">30+</div>
                  <div className="text-blue-100">Adaptation Projects Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">15,000+</div>
                  <div className="text-blue-100">People Reached</div>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Support Community Empowerment</h2>
              <p className="text-lg text-gray-700 mb-6">
                Help us expand community empowerment programs to more villages across Solomon Islands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Get Involved
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
