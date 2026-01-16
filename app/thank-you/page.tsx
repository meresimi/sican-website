import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main>
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-ocean via-lagoon to-cyan-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-blue-100 mb-8">
              You've successfully subscribed to SICAN updates. We'll notify you when we publish 
              new articles, events, and climate action news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary bg-white text-ocean hover:bg-gray-100">
                Return Home
              </Link>
              <Link href="/news" className="btn-outline border-white text-white hover:bg-white hover:text-ocean">
                Read Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
