import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Climate Justice - SICAN',
  description: 'Fighting for fairness and equity in climate action, centering the voices of those most affected.',
}

export default function ClimateJusticePage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-climate-red to-red-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Climate Justice
            </h1>
            <p className="text-xl text-red-100">
              Those Who Contribute Least Should Not Suffer Most
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* What is Climate Justice */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">What is Climate Justice?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Climate justice recognizes that the climate crisis is fundamentally a matter of fairness and human rights. 
                It acknowledges three critical truths:
              </p>
              
              <div className="space-y-4 ml-6">
                <div className="flex items-start space-x-3">
                  <span className="text-climate-red font-bold text-2xl flex-shrink-0">1.</span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-ocean">Historic Responsibility:</strong> Wealthy industrialized nations 
                    caused the climate crisis through centuries of greenhouse gas emissions. Pacific islands like 
                    Solomon Islands contributed less than 0.01% of global emissions yet face existential threats.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-climate-red font-bold text-2xl flex-shrink-0">2.</span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-ocean">Unequal Impact:</strong> The most vulnerable—small island states, 
                    indigenous communities, women, children, the poor—suffer climate impacts first and worst, despite 
                    contributing least to the problem.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-climate-red font-bold text-2xl flex-shrink-0">3.</span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-ocean">Moral Obligation:</strong> Those responsible for the crisis have 
                    a moral and legal obligation to provide adequate finance, support adaptation, and compensate for 
                    losses and damages.
                  </p>
                </div>
              </div>
            </div>

            {/* The Injustice We Face */}
            <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">
                The Climate Injustice Solomon Islands Faces
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-climate-red mb-3">🌊 Losing Our Land</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Five islands have already disappeared beneath rising seas. Coastal communities watch their land 
                    erode, their freshwater sources become salty, their homes increasingly threatened. We are losing 
                    the physical foundation of our existence—not because of anything we did, but because of emissions 
                    from countries thousands of miles away.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-climate-red mb-3">💰 Insufficient Finance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wealthy nations promised $100 billion annually in climate finance. Even when funds are delivered, 
                    they come as loans—not grants—forcing us into debt to adapt to a crisis we didn't cause. This is 
                    like being forced to pay for repairs after someone else crashed into your house.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-climate-red mb-3">🏝️ Existential Threat</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For Solomon Islands, climate change is not about economic disruption or lifestyle changes—it's 
                    about whether our nation continues to exist. Some of our islands may become uninhabitable within 
                    our children's lifetimes. This is the ultimate injustice: facing extinction for a crisis you didn't create.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-climate-red mb-3">🗣️ Silenced Voices</h3>
                  <p className="text-gray-700 leading-relaxed">
                    At international climate negotiations, Solomon Islands has one small delegation. Fossil fuel 
                    companies and wealthy nations bring hundreds of representatives. Our voices—the voices of those 
                    on the frontlines—are systematically marginalized in decisions about our own survival.
                  </p>
                </div>
              </div>
            </div>

            {/* What Climate Justice Looks Like */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">
                What Climate Justice Looks Like
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">Adequate Finance as Grants:</strong> Climate finance provided 
                    as grants (not loans) at levels that match the scale of impacts—hundreds of billions, not millions.
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">Loss and Damage Compensation:</strong> A fully funded Loss and 
                    Damage mechanism compensating communities for irreversible losses—lost land, relocated villages, 
                    destroyed livelihoods.
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">1.5°C Limit Honored:</strong> Wealthy nations drastically cutting 
                    emissions to limit warming to 1.5°C—the difference between survivable and catastrophic impacts for islands.
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">Community-Led Solutions:</strong> Climate adaptation controlled 
                    by affected communities, not imposed by external "experts" who don't live with the consequences.
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">Frontline Voices Centered:</strong> Those most affected by 
                    climate change leading decision-making at all levels—from local planning to COP negotiations.
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-sand p-4 rounded">
                  <span className="text-ocean font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-lg text-gray-700">
                    <strong className="text-ocean">Rights-Based Approach:</strong> Climate action grounded in 
                    human rights—the right to land, water, food security, culture, and a livable future.
                  </p>
                </div>
              </div>
            </div>

            {/* How SICAN Fights for Justice */}
            <div className="mb-12 bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-6">How SICAN Fights for Climate Justice</h2>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Amplifying Community Voices:</strong> We bring Solomon Islanders' experiences to 
                    national policy debates and international negotiations.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Demanding Accountability:</strong> We track climate finance, document unfulfilled 
                    commitments, and publicly hold governments and polluters accountable.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Building Solidarity:</strong> We connect with climate justice movements globally, 
                    from Pacific islands to Indigenous communities to youth strikers.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Centering Equity:</strong> We ensure our own work prioritizes the most vulnerable—
                    women, youth, remote communities, people with disabilities.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-coral font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-lg">
                    <strong>Legal Action Support:</strong> We support efforts to hold polluters legally accountable 
                    through international courts and tribunals.
                  </p>
                </div>
              </div>
            </div>

            {/* Powerful Quote */}
            <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-climate-red">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                "We are not asking for charity. We are demanding justice. Wealthy nations grew rich burning fossil 
                fuels. Now they must pay their climate debt—not as aid, but as reparations for the damage they've caused."
              </p>
              <p className="text-gray-600 font-semibold">— SICAN at COP29</p>
            </div>

            {/* What You Can Do */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Join the Climate Justice Movement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">For Solomon Islanders</h3>
                  <p className="text-gray-700 mb-4">
                    Join SICAN's advocacy campaigns, share your climate story, attend climate justice trainings, 
                    and add your voice to demands for justice.
                  </p>
                  <Link href="/get-involved" className="text-ocean font-semibold hover:text-lagoon">
                    Get Involved →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-ocean mb-3">For International Allies</h3>
                  <p className="text-gray-700 mb-4">
                    Support climate justice by pressuring your government to increase climate finance, cut 
                    emissions, and support Loss and Damage funding.
                  </p>
                  <Link href="/contact" className="text-ocean font-semibold hover:text-lagoon">
                    Partner With Us →
                  </Link>
                </div>
              </div>
            </div>

            {/* Final Call */}
            <div className="text-center bg-gradient-to-br from-climate-red to-red-700 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Climate Justice is Not Optional—It's Survival
              </h2>
              <p className="text-xl text-red-100 mb-6">
                We fight not because we want to, but because we must. Our islands, our culture, our future—
                everything depends on achieving climate justice.
              </p>
              <Link href="/contact" className="inline-block bg-white hover:bg-gray-100 text-climate-red font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                Stand With Us for Climate Justice
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
