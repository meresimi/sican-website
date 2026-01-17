import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NewsPage() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">News & Updates</h1>
          <p className="text-sm italic text-purple-100 mb-4">(Nius mo Apdet)</p>
          <p className="text-xl text-purple-100 max-w-3xl">
            Stay informed about SICAN's latest activities, events, and climate action news from Solomon Islands.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-lg text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📰</div>
            <h3 className="text-xl font-bold mb-4">Nothing to display yet</h3>
            <p className="text-gray-700 mb-2">
              News articles, event announcements, and updates will be added through the admin panel.
            </p>
            <p className="text-sm italic text-gray-600">
              (Nius mo ivents bae admin putim hia)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
