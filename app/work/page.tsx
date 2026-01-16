import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WorkPage() {
  const focusAreas = [
    {
      title: 'Climate Finance Tracking',
      pijin: 'Lukaot Klaemet Mane',
      icon: '💰',
      color: 'ocean',
      description: 'Monitoring how climate funds reach communities and ensuring transparency and accountability in climate finance.',
      link: '/work/climate-finance'
    },
    {
      title: 'Community Empowerment',
      pijin: 'Strongim Komuniti',
      icon: '👥',
      color: 'forest',
      description: 'Building capacity for community-led climate adaptation, resilience, and sustainable development.',
      link: '/work/community-empowerment'
    },
    {
      title: 'Policy Advocacy',
      pijin: 'Stap Alongsaed Polisi',
      icon: '📢',
      color: 'coral',
      description: 'Influencing national and regional climate policies to protect Solomon Islands and amplify Pacific voices.',
      link: '/work/policy-advocacy'
    },
    {
      title: 'Youth Leadership',
      pijin: 'Yang Pipol Lidasip',
      icon: '🌱',
      color: 'lagoon',
      description: 'Training and empowering young Solomon Islanders to lead climate action in their communities.',
      link: '/work/youth-leadership'
    },
    {
      title: 'Regional Collaboration',
      pijin: 'Waka Tugeda Long Region',
      icon: '🤝',
      color: 'purple-600',
      description: 'Partnering with PICAN and Pacific networks to strengthen regional climate action.',
      link: '/work/regional-collaboration'
    },
    {
      title: 'Climate Justice',
      pijin: 'Klaemet Jastis',
      icon: '⚖️',
      color: 'amber-600',
      description: 'Demanding equitable climate action that protects our most vulnerable communities and holds polluters accountable.',
      link: '/work/climate-justice'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-emerald-600 to-green-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Waka Mifala Duim (Our Work)
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            SICAN's work spans six key areas of climate action across Solomon Islands. 
            Together, we're building resilience, demanding justice, and protecting our islands.
          </p>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Focus Areas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Link 
                key={index}
                href={area.link}
                className={`bg-gradient-to-br from-${area.color} to-${area.color} text-white rounded-lg p-8 hover:scale-105 transition-transform shadow-lg`}
                style={{
                  background: area.color === 'ocean' ? 'linear-gradient(to bottom right, #0891B2, #0E7490)' :
                             area.color === 'forest' ? 'linear-gradient(to bottom right, #10B981, #059669)' :
                             area.color === 'coral' ? 'linear-gradient(to bottom right, #F97316, #EA580C)' :
                             area.color === 'lagoon' ? 'linear-gradient(to bottom right, #06B6D4, #0891B2)' :
                             area.color === 'purple-600' ? 'linear-gradient(to bottom right, #9333EA, #7C3AED)' :
                             'linear-gradient(to bottom right, #D97706, #B45309)'
                }}
              >
                <div className="text-6xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                <p className="text-sm opacity-90 mb-4 italic">{area.pijin}</p>
                <p className="text-white/90 mb-6">{area.description}</p>
                <span className="inline-block text-sm font-semibold">
                  Faen Aot Moa (Learn More) →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-ocean to-lagoon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support Our Work?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to protect Solomon Islands and fight for climate justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100">
              Kam Joinim Mifala (Join Us) →
            </Link>
            <Link href="/support" className="btn-outline border-white text-white hover:bg-white hover:text-ocean">
              Helpem Mifala (Support Us) →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
