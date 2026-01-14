import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-lagoon to-ocean rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src="/images/sican-logo.png"
                      alt="SICAN Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white text-lg">
                    [Community photo placeholder]
                  </p>
                  <p className="text-blue-200 text-sm mt-2">
                    SICAN members working together
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-coral opacity-20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="text-sm font-semibold text-coral mb-2 tracking-wider uppercase">
              About SICAN
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-6">
              "HU NA MIFALA?"
              <span className="block text-2xl text-gray-600 mt-2">(Who Are We?)</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are Solomon Islanders—farmers, youth, church leaders, chiefs, mothers, and fathers—
                united in the fight against climate change that threatens our islands, our homes, and our way of life.
              </p>
              
              <p>
                Established in <strong className="text-ocean">May 2019</strong>, the Solomon Islands Climate Action Network (SICAN) 
                brings together <strong className="text-ocean">15 member organizations</strong> from across civil society, 
                faith-based organizations, NGOs, government, and the private sector.
              </p>
              
              <p>
                We are the national voice for climate action in Solomon Islands and a proud member of the 
                Pacific Islands Climate Action Network (PICAN) family, working together across the Pacific 
                to demand climate justice.
              </p>

              <div className="bg-sand p-6 rounded-lg my-6 border-l-4 border-coral">
                <p className="text-ocean font-semibold mb-2">Our Mission</p>
                <p className="text-gray-700">
                  To unite Solomon Islands civil society in advocating for climate justice, 
                  tracking climate finance, empowering communities, and ensuring our voices are heard 
                  from village councils to international negotiations.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block mt-6 btn-primary"
            >
              Learn Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
