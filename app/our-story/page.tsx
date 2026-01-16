import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean via-lagoon to-cyan-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            From its founding to today, SICAN has been at the forefront of climate action in Solomon Islands.
          </p>
        </div>
      </section>

      {/* Timeline/Story Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          
          {/* Founding */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-ocean text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mr-4">
                2019
              </div>
              <h2 className="text-2xl font-bold">SICAN is Born</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Solomon Islands Climate Action Network (SICAN) was established in May 2019 as part of 
              the Pacific Islands Climate Action Network (PICAN). Created through Oxfam's Regional Pacific 
              Climate Change Collaboration, Influencing & Learning Project (PACCCIL), SICAN emerged from 
              a recognized need for coordinated climate action across Solomon Islands.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SICAN works to address critical gaps in Solomon Islands' climate response:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-ocean mr-3 text-xl">💰</span>
                <span><strong>Climate Finance Tracking:</strong> Monitoring how climate funds flow to communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest mr-3 text-xl">⚖️</span>
                <span><strong>Climate Justice:</strong> Ensuring equitable climate action for all Solomon Islanders</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-3 text-xl">📚</span>
                <span><strong>Knowledge Sharing:</strong> Educating communities about climate change impacts</span>
              </li>
              <li className="flex items-start">
                <span className="text-lagoon mr-3 text-xl">📢</span>
                <span><strong>Advocacy:</strong> Influencing policies and amplifying community voices</span>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Network</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SICAN brings together 15+ member organizations including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                Civil society organizations
              </div>
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                Faith-based organizations
              </div>
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                Community-based organizations
              </div>
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                International NGOs
              </div>
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                Government representatives
              </div>
              <div className="flex items-center">
                <span className="text-ocean mr-2">✓</span>
                Individual climate champions
              </div>
            </div>
          </div>

          {/* Regional Connection */}
          <div className="mb-12 bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Part of Something Bigger</h2>
            <p className="text-gray-700 leading-relaxed">
              As the Solomon Islands node of PICAN (Pacific Islands Climate Action Network), SICAN connects 
              local action to regional and global climate movements. We work alongside sister networks in 
              Vanuatu (VCAN), Kiribati (KIRICAN), Tuvalu (TUCAN), and other Pacific nations, collectively 
              amplifying Pacific voices in global climate negotiations.
            </p>
          </div>

          {/* Today */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-forest text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mr-4">
                NOW
              </div>
              <h2 className="text-2xl font-bold">SICAN Today</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, SICAN continues to grow and strengthen its impact across Solomon Islands. We work 
              on multiple fronts – from tracking climate finance to empowering youth leaders, from 
              advocating for stronger policies to supporting community-led adaptation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our work is guided by the voices and needs of Solomon Islands communities, especially 
              those most vulnerable to climate impacts. Together with our members, we are building 
              a more resilient and just future for our islands.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-ocean to-lagoon text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Story</h3>
            <p className="text-blue-100 mb-6">
              Join SICAN and help write the next chapter of climate action in Solomon Islands.
            </p>
            <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100 inline-block">
              Join Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
