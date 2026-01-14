import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Youth Leadership - SICAN',
  description: 'Empowering the next generation of climate leaders to shape Solomon Islands\' future.',
}

export default function YouthLeadershipPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lagoon to-teal-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Youth Leadership
            </h1>
            <p className="text-xl text-teal-100">
              Empowering the Next Generation to Lead Climate Action
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Why Youth Leadership */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Why Youth Leadership Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Young Solomon Islanders will inherit the consequences of today's climate decisions. By 2050, when climate 
                impacts intensify, today's youth will be the leaders, decision-makers, and community elders tasked with 
                protecting our islands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                But youth are not just future leaders—they are powerful change-makers NOW. From school climate clubs to 
                international negotiations, young Solomon Islanders are already driving climate action with creativity, 
                courage, and urgency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                SICAN invests in youth leadership because climate action without youth voice is incomplete, and because 
                young people bring fresh perspectives, digital skills, and determination to challenge the status quo.
              </p>
            </div>

            {/* Our Youth Programs */}
            <div className="mb-12 bg-sand p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">Our Youth Programs</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-lagoon pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">🎓 Youth Climate Leadership Academy</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Intensive training program covering climate science, advocacy skills, policy analysis, and 
                    project management. Graduates become SICAN youth ambassadors leading climate action in their communities.
                  </p>
                  <p className="text-sm text-gray-600 italic">Open to ages 18-35 from all provinces</p>
                </div>

                <div className="border-l-4 border-lagoon pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">🏫 School Climate Clubs Network</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We support climate clubs in secondary schools across Solomon Islands, providing training, 
                    resources, and small grants for student-led climate projects like school gardens and waste reduction.
                  </p>
                  <p className="text-sm text-gray-600 italic">Active in 20+ schools nationwide</p>
                </div>

                <div className="border-l-4 border-lagoon pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">🌍 Youth Delegates to COP</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    SICAN trains and supports young Solomon Islanders to attend UN climate conferences, ensuring 
                    youth voice in international negotiations. Our delegates have spoken at COP plenaries and side events.
                  </p>
                  <p className="text-sm text-gray-600 italic">5 youth delegates sent to COP28 & COP29</p>
                </div>

                <div className="border-l-4 border-lagoon pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">📱 Youth Climate Communicators</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Training program equipping youth with digital storytelling, social media advocacy, and content 
                    creation skills to spread climate awareness and mobilize action online.
                  </p>
                  <p className="text-sm text-gray-600 italic">Reaching 10,000+ people monthly on social media</p>
                </div>

                <div className="border-l-4 border-lagoon pl-6">
                  <h3 className="text-xl font-bold text-ocean mb-3">💡 Youth Innovation Grants</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Small grants (up to $2,000) for youth-led climate innovation projects—from renewable energy 
                    experiments to community awareness campaigns to adaptation solutions.
                  </p>
                  <p className="text-sm text-gray-600 italic">10 projects funded annually</p>
                </div>
              </div>
            </div>

            {/* Youth Voices */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6 text-center">
                Meet Our Youth Climate Leaders
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-lagoon rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      M
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ocean mb-2">Miss SICAN 2024</h3>
                      <p className="text-gray-700 leading-relaxed italic mb-3">
                        "Climate change isn't something that will happen in the future—it's affecting us NOW. My village 
                        is losing land to the sea every year. That's why I joined SICAN, to ensure my generation has a 
                        voice in deciding our islands' future."
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Role:</strong> Youth climate advocate | <strong>Province:</strong> Guadalcanal | 
                        <strong>Achievement:</strong> Spoke at COP29, led school climate clubs network
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-lagoon rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      J
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ocean mb-2">James - Youth Innovation Grant Winner</h3>
                      <p className="text-gray-700 leading-relaxed italic mb-3">
                        "With SICAN's support, my team built a solar-powered water pump for our community. Now families 
                        don't have to walk hours for clean water during droughts. Youth can create real solutions when 
                        given the opportunity."
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Age:</strong> 22 | <strong>Province:</strong> Malaita | 
                        <strong>Project:</strong> Community solar water system
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-lagoon rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      S
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ocean mb-2">Sarah - Climate Communicator</h3>
                      <p className="text-gray-700 leading-relaxed italic mb-3">
                        "I use TikTok and Instagram to teach Solomon Islanders about climate change in Pijin and local 
                        languages. Young people trust content from other young people. We're reaching thousands who 
                        never attended a climate workshop."
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Age:</strong> 19 | <strong>Province:</strong> Western | 
                        <strong>Impact:</strong> 15,000+ followers, viral climate education videos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="mb-12 bg-gradient-ocean text-white p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center">Youth Leadership Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">200+</div>
                  <div className="text-blue-100">Youth Leaders Trained</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">20+</div>
                  <div className="text-blue-100">School Climate Clubs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">15</div>
                  <div className="text-blue-100">Youth-Led Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-coral mb-2">5</div>
                  <div className="text-blue-100">Youth at COP Talks</div>
                </div>
              </div>
            </div>

            {/* Join Youth Movement */}
            <div className="mb-12 bg-sand p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">How Youth Can Get Involved</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-lagoon font-bold text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <strong>Join Youth Climate Leadership Academy:</strong> Applications open twice yearly. 
                    Contact us for next intake.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lagoon font-bold text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <strong>Start a Climate Club:</strong> We provide resources and training to help you start 
                    a climate club in your school or community.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lagoon font-bold text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <strong>Apply for Innovation Grants:</strong> Have a climate solution idea? Apply for funding 
                    and mentorship to make it real.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lagoon font-bold text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <strong>Join Online Community:</strong> Connect with other youth climate activists across 
                    Solomon Islands on our WhatsApp and Facebook groups.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-ocean mb-6">
                The Future is Youth-Led
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Join SICAN's youth movement and help shape climate action in Solomon Islands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Join Youth Programs
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Learn More
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
