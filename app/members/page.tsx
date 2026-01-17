import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MembersPage() {
  const organizationalMembers = [
    'Oxfam in Solomon Islands (OiSI)',
    'Save the Children Solomon Islands (SCSI)',
    'Live and Learn Solomon Islands (LLSI)',
    'Kastom Garden Association (KGA)',
    'Young Professionals in Agricultural Research & Development (YPARD-SINU)',
    'Pacific Islands Students Fighting Climate Change (PISFCC)',
    'National Indigenous People Solomon Island (NIPS)',
    'People with Disability Solomon Islands (PWDSI)',
    'Design and Technology Centre',
    'UN Women Solomon Islands',
    'Honiara Youth Council',
    'Barana Nature and Heritage Park',
    'Honiara City Council of Women Division',
    'Environment Media Solomon Islands',
    'Green Technology Solomon Islands/ Tookina Tribal land conservation association',
    'Rock Valley Community',
    'Anoniko\'a Mangrove conservation Association',
    'Aheta Water conservation association',
    'Otepaina Tribal land Forest Conservation',
    'Ono Tribe Conservation Association',
    'Solomon Islands National University (SINU)',
    'Solomon Islands Rangers Association (SIRA)',
    'Ohe\'Ohe Conservation Foundation',
    'Solomon Island Women In Business Association (SIWIBA)',
    'Aenaalinga Land Resource Conservation',
    'Kogala Tribe Forest Conservation Association',
    'Child Fund New Zealand',
    'Raripaina Biodiversity Conservation Association',
    'Uruhairamo Forest Conservation',
    'Apunepara Ha\'amwaora Natural Resource Association (AHNRA)',
    'Japuana Youth Advocacy Association (JYAA)',
    'Sinahiirahau marine park and conservation Association',
    'Aruilage Sustainable Development Resources Association',
    'Batairalo Nature and Natural Solution Trust',
    'Kaolo, Kaevanga Integrated Development Initiative'
  ]

  const individualMembers = [
    'Noella Bernadette Dorevella',
    'Dr. Michael Ha\'apio',
    'Mary Tahu Paia',
    'Kayleen Fanega',
    'Arvindra Rishi Prasad',
    'David Leeming',
    'Raywin Taroaniara',
    'Suzie Tonisi',
    'Abel Oscar Watesao',
    'Beth Mekimo',
    'Calfina Pitakoe',
    'John Fa\'asala',
    'Joseph Tula',
    'Mirriam Sulu',
    'Patricia Orihao',
    'Penninah Oto',
    'Sabrina Pania',
    'Serema Kwato\'o',
    'Stephanie Seka',
    'Terry Kavalera',
    'Charles Mae'
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Members</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            SICAN brings together 35 organizations and 21 individuals committed to climate action in Solomon Islands.
          </p>
        </div>
      </section>

      {/* Network Strength */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-5xl font-bold text-ocean mb-2">35</div>
              <div className="text-lg font-semibold mb-2">Organizational Members</div>
              <p className="text-sm text-gray-600">
                NGOs, CBOs, faith-based groups, and institutions
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-5xl font-bold text-forest mb-2">21</div>
              <div className="text-lg font-semibold mb-2">Individual Members</div>
              <p className="text-sm text-gray-600">
                Climate champions contributing expertise and passion
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-5xl font-bold text-coral mb-2">56</div>
              <div className="text-lg font-semibold mb-2">Total Members</div>
              <p className="text-sm text-gray-600">
                United in the fight for climate justice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Members */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Organizational Members
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              These organizations form the backbone of SICAN's climate action network across Solomon Islands.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {organizationalMembers.map((org, index) => (
                <div key={index} className="bg-gradient-to-br from-ocean to-lagoon text-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <span className="font-bold mr-2 flex-shrink-0">{index + 1}.</span>
                    <span className="text-sm leading-relaxed">{org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Members */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Individual Members
          </h2>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              Dedicated individuals who champion climate action in their communities and professions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {individualMembers.map((person, index) => (
                <div key={index} className="bg-gradient-to-br from-forest to-emerald-600 text-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <span className="font-bold mr-2 flex-shrink-0">{index + 1}.</span>
                    <span className="text-sm leading-relaxed">{person}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean to-lagoon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Network</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of Solomon Islands' leading climate action network. Together, we are stronger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100">
              Become a Member (Kam Joinim Mifala) →
            </Link>
            <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-ocean">
              Learn More About SICAN (Faen Aot Moa)
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
