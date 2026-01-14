import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ocean via-ocean-light to-lagoon text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 30 L30 60 L15 30 Z' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Solomon Islands Climate Action Network
            </h1>

            {/* Pijin Tagline */}
            <div className="text-2xl md:text-3xl font-medium text-blue-100 mb-4">
              "Kam up tugeda fo klaemet jens"
            </div>

            {/* English Tagline */}
            <div className="text-xl md:text-2xl text-blue-200 mb-8">
              Rising Togetherness for Climate Change
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are 15 organizations united to protect our islands, our culture, and our future 
              from the impacts of climate change through advocacy, community empowerment, and climate justice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/get-involved"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Get Involved →
              </Link>
              <Link
                href="/about"
                className="btn-outline w-full sm:w-auto text-center border-white text-white hover:bg-white hover:text-ocean"
              >
                Learn More
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
