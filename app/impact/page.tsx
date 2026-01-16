import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ImpactPage() {
  // Placeholder stories - Winifred will add real ones via CMS
  const placeholderStories = [
    {
      id: 1,
      title: 'Community Climate Adaptation Project',
      excerpt: 'How SICAN helped coastal communities prepare for rising sea levels...',
      image: '/images/placeholder-story1.jpg',
      date: '2024-01-15',
      category: 'Community Empowerment'
    },
    {
      id: 2,
      title: 'Youth Climate Leadership Training',
      excerpt: 'Empowering young Solomon Islanders to lead climate action...',
      image: '/images/placeholder-story2.jpg',
      date: '2024-02-20',
      category: 'Youth Leadership'
    },
    {
      id: 3,
      title: 'Climate Finance Tracking Success',
      excerpt: 'Our monitoring revealed $2M in unallocated climate funds...',
      image: '/images/placeholder-story3.jpg',
      date: '2024-03-10',
      category: 'Climate Finance'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-emerald-600 to-green-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Real stories of climate action across Solomon Islands. See how SICAN members are making a difference in communities, policy, and climate justice.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ocean mb-2">15+</div>
              <div className="text-gray-600">Member Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest mb-2">50+</div>
              <div className="text-gray-600">Communities Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coral mb-2">100+</div>
              <div className="text-gray-600">Youth Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ocean mb-2">$5M+</div>
              <div className="text-gray-600">Climate Finance Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid - PLACEHOLDERS */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-12">Impact Stories</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-yellow-800">
              <strong>📝 Content Placeholder:</strong> These are example stories. 
              Winifred will add real impact stories and activities through the admin panel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderStories.map(story => (
              <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-ocean to-lagoon flex items-center justify-center text-white">
                  <span className="text-6xl">📸</span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-ocean font-semibold mb-2">{story.category}</div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="text-sm text-gray-500">{story.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">More stories coming soon as Winifred adds content via admin panel</p>
            <Link href="/contact" className="btn-primary inline-block">
              Share Your Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8">Our Activities</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="text-blue-800">
              <strong>📝 Content Placeholder:</strong> Detailed activity list will be added by Winifred through the admin panel based on SICAN documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🌊 Climate Finance Tracking</h3>
              <p className="text-gray-700">Monitoring climate funds and ensuring transparency...</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">👥 Community Empowerment</h3>
              <p className="text-gray-700">Building capacity in local communities...</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📢 Policy Advocacy</h3>
              <p className="text-gray-700">Influencing national climate policies...</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🌱 Youth Leadership</h3>
              <p className="text-gray-700">Training next generation of climate leaders...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
