import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - SICAN',
  description: 'Learn about the Solomon Islands Climate Action Network - our story, mission, team, and member organizations fighting for climate justice.',
}

export default function AboutPage() {
  const members = [
    "Civil Society Organizations",
    "Faith-Based Organizations",
    "International NGOs",
    "Youth Groups",
    "Women's Organizations",
    "Government Representatives",
    "Private Sector Partners",
    "Community Organizations",
    "Environmental Groups",
    "Traditional Leaders",
    "Educational Institutions",
    "Research Organizations",
    "Media Partners",
    "Advocacy Networks",
    "Development Partners"
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-ocean text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About SICAN
            </h1>
            <p className="text-xl text-blue-100">
              Rising Togetherness for Climate Change
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-8">
              Our Story
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In <strong className="text-ocean">May 2019</strong>, a diverse group of Solomon Islanders came together 
                with a shared vision: to unite civil society in the fight against climate change. Born from the recognition 
                that our islands face an existential threat, the Solomon Islands Climate Action Network (SICAN) emerged 
                as a powerful collective voice for climate justice.
              </p>

              <p>
                We saw that climate change was not just an environmental issue—it was threatening our homes, 
                our livelihoods, our culture, and our very way of life. We saw that individual organizations working 
                in isolation could only achieve so much. We needed to come together, to pool our knowledge, 
                our resources, and our voices.
              </p>

              <p>
                Established through Oxfam's Pacific Climate Change Collaboration, Influencing & Learning (PACCCIL) Project, 
                with support from the Australian Government, SICAN quickly grew into a network of <strong className="text-ocean">15 member organizations</strong> spanning 
                civil society, faith communities, youth groups, NGOs, government, and the private sector.
              </p>

              <p>
                From our very first days, we've been clear about our gaps and our mission: 
                climate finance tracking, climate injustice, and limited knowledge dissemination. 
                We set out to address these systematically through advocacy, community engagement, 
                policy influence, and partnership building.
              </p>

              <p>
                Today, as a proud member of the <strong className="text-ocean">Pacific Islands Climate Action Network (PICAN)</strong>, 
                we stand alongside our siblings across the Pacific—VCAN in Vanuatu, KIRICAN in Kiribati, TUCAN in Tuvalu—
                united in demanding climate justice and amplifying Pacific voices at regional and international forums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-ocean mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To unite Solomon Islands civil society in advocating for climate justice, tracking climate finance, 
                empowering communities, and ensuring that our voices—especially those of the most vulnerable—
                are heard from village councils to international climate negotiations.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-ocean mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A climate-resilient Solomon Islands where communities are empowered, climate finance reaches 
                those who need it most, and our islands, our culture, and our people thrive for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-12 text-center">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Climate Justice",
                description: "Those who contribute least to climate change should not bear its greatest burdens."
              },
              {
                title: "Community Voice",
                description: "Local communities must lead climate solutions that affect their lives."
              },
              {
                title: "Transparency",
                description: "Climate finance must be tracked, transparent, and accountable to communities."
              },
              {
                title: "Collaboration",
                description: "We are stronger together—across sectors, islands, and the Pacific."
              },
              {
                title: "Empowerment",
                description: "Building capacity so communities can adapt, advocate, and thrive."
              },
              {
                title: "Cultural Respect",
                description: "Climate solutions must honor Solomon Islands' kastom and traditional knowledge."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-ocean mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="section-padding bg-gradient-ocean text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Member Organizations
            </h2>
            <p className="text-xl text-blue-100">
              15 diverse organizations united for climate action
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
              >
                <p className="text-sm font-medium">{member}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-blue-100 mb-4">
              Interested in joining our network?
            </p>
            <Link href="/contact" className="btn-primary bg-coral hover:bg-coral-dark">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* PICAN Connection */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-8 text-center">
              Part of the PICAN Family
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                SICAN is the national node of the <strong className="text-ocean">Pacific Islands Climate Action Network (PICAN)</strong>, 
                established in 2013 as the regional umbrella for climate action across the Pacific.
              </p>

              <p>
                As part of this family, we join sister networks in Vanuatu (VCAN), Kiribati (KIRICAN), 
                and Tuvalu (TUCAN), along with 190+ member organizations across the Pacific region. 
                Together, we amplify Pacific voices on the global stage, from UN climate negotiations 
                to regional policy forums.
              </p>

              <p>
                PICAN itself is part of the global <strong className="text-ocean">Climate Action Network (CAN International)</strong>, 
                connecting us to 1,500+ NGOs worldwide working for climate justice.
              </p>

              <div className="bg-sand p-6 rounded-lg mt-8">
                <p className="text-ocean font-semibold mb-2">This means:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Solomon Islands voices reach international negotiations</li>
                  <li>✓ We share knowledge and strategies across the Pacific</li>
                  <li>✓ Our local work contributes to regional climate action</li>
                  <li>✓ We're stronger together than any of us could be alone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
