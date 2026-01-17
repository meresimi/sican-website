import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ImpactPage() {
  const activities = [
    'Inception Workshop',
    'Establishment of Solomon Islands Climate Action Network',
    'Organizational Capacity Assessment',
    'SICAN launching and talk back show',
    'No Plastic Bag Campaign',
    'Global Climate Strike',
    'Influencing Capacity Assessment',
    'PICAN Annual Regional Meeting',
    'SICAN monthly meeting',
    'Integrated Vulnerability Assessment Training for NGOs and CSOs',
    'PACCCIL Annual Regional Reflection',
    'Covid-19 IEC Materials & Billboards/ SICAN Influencing Messaging',
    'PISFCC Re-imagining pacific Future Art Competition',
    'SICAN Constitution Review',
    'SICAN Registration',
    'Youth Environment Movement Solomon Islands',
    'Participate in International Rural Day of Women',
    'SICAN/PACCCIL Annual Reflection',
    'Annual General Meeting (Electing New Executive Members)',
    'Capacity Building Training (Safeguarding & Communications)',
    'Climate Change Awareness Outreach to Disability centers',
    'Advocacy and Awareness to Manawai CHS West Are\'are',
    'Annual Climate Change Dialogue & Symposium',
    'Pacific Climate Justice Summit',
    'PACRES grant proposal writing training',
    'Gender and Social Inclusion (Human Rights) training',
    'Media Training',
    'Pre- COP training',
    'Climate Financing training',
    'Delegation to COP27 Sharm el-Sheikh, Egypt'
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-emerald-600 to-green-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Impact (Waka Wea Mifala Mekem)</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Real stories of climate action across Solomon Islands. See how SICAN members are making a difference.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ocean mb-2">35</div>
              <div className="text-gray-600">Member Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest mb-2">21</div>
              <div className="text-gray-600">Individual Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coral mb-2">56</div>
              <div className="text-gray-600">Total Network Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ocean mb-2">5+</div>
              <div className="text-gray-600">Years of Action</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Implemented */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Activities Implemented To Date
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since our establishment in 2019, SICAN has successfully implemented numerous activities 
              that strengthen climate action across Solomon Islands. These activities span capacity building, 
              advocacy, networking, and community engagement.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <span className="text-ocean font-bold mr-3 flex-shrink-0">{index + 1}.</span>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              These activities demonstrate SICAN's commitment to comprehensive climate action across multiple fronts.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stories Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Impact Stories</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-4">This section is still being updated</h3>
            <p className="text-gray-700">
              Impact stories and case studies will be added by the admin through the content management system.
              Check back soon for inspiring stories of climate action from across Solomon Islands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean to-lagoon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of Our Impact?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join SICAN and contribute to climate action that makes a real difference in Solomon Islands.
          </p>
          <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100 inline-block">
            Join Us (Kam Joinim Mifala) →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
