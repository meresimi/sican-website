import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LatestNewsPage() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Latest News</h1>
          <p className="text-sm italic text-purple-100 mb-4">(Las Nius)</p>
          <p className="text-xl text-purple-100 max-w-3xl">
            Recent climate action news from the last 2 days
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          
          {/* View All Button - Top Right */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">News from Last 2 Days</h2>
            <Link 
              href="/news"
              className="btn-outline border-ocean text-ocean hover:bg-ocean hover:text-white"
            >
              View All News <span className="text-xs italic">(Luk Olgeta Nius)</span> →
            </Link>
          </div>

          {/* Empty State */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📰</div>
            <h3 className="text-xl font-bold mb-4">Nothing to display yet</h3>
            <p className="text-gray-700 mb-2">
              Recent news articles will appear here once they are added through the admin panel.
            </p>
            <p className="text-sm italic text-gray-600">
              (Nius bae kam hia taem admin putim)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
